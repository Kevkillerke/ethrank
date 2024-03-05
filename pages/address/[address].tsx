/*
 * All content copyright 2023 Examp, LLC
 *
 * This file is part of ETHRank.
 * 
 * ETHRank is free software: you can redistribute 
 * it and/or modify it under the terms of the GNU General Public 
 * License as published by the Free Software Foundation, either 
 * version 3 of the License, or (at your option) any later version.
 * 
 * ETHRank is distributed in the hope that it will 
 * be useful, but WITHOUT ANY WARRANTY; without even the implied warranty 
 * of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
*/


import { useRouter } from 'next/router';
import styles from '../../styles/Address.module.scss';
// import btnStyles from '../../styles/ConnectButton.module.scss';
import Link from 'next/link';
import ProgressBar from '../../components/ProgressBar';
import prisma from '../../lib/prisma';
import { useEffect, useState } from 'react';
import { NextPageContext } from 'next';
import { CURRENT_SEASON, CURRENT_SEASON_ACHIEVEMENTS, CURRENT_SEASON_BADGE_ACHIEVEMENT_INDEX } from '../../lib/constants';
import Page from '../../components/Page';
import { getCalcMethod } from '../api/address/[address]';
import { getLabelsForAddress } from '../api/labels/[address]';
import { Goal } from '../../lib/Achievement.interface';
import { Badge } from '../../components/season-four/Badge';
import truncateEthAddress from 'truncate-eth-address';
import { useAccount, useSwitchChain } from 'wagmi';
import btnStyles from '../../styles/ConnectButton.module.scss';
import { useEthersSigner } from '../../lib/ethers';
import { EAS, SchemaEncoder, TransactionSigner } from '@ethereum-attestation-service/eas-sdk';
import CollectionConfig from '../../lib/CollectionConfig';
import { optimism, optimismSepolia } from 'viem/chains';
import { Web3Button } from '@web3modal/react';

const achievements = CURRENT_SEASON_ACHIEVEMENTS;

export const convertToLowerCase = (input: string | Array<string> | undefined) => {
  if (typeof input === 'object') {
    return input.map(name => name.toLowerCase())
  } else if (typeof input === 'string') {
    return input.toLowerCase()
  }
}

export async function getServerSideProps(context: NextPageContext) {
  const { address, ud } = context.query;
  if (!address || typeof address !== 'string' || !context.res) return;
  // cache for 12 hours, stale for additional 12
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=43200, stale-while-revalidate=86400'
  )
  let calcScore = getCalcMethod(CURRENT_SEASON.toString());
  const score = await calcScore(address, prisma, ud);
  let labels = await getLabelsForAddress(address);
  return {
    props: {
      calcScoreResult: score.props,
      error: score.props.error,
      labels
    }
  }
}

export interface CalcScoreProps {
  address: string;
  score: number;
  rank: number;
  progress: Array<string>;
  name: string;
  totalTransactions: string;
  spentOnGas: string;
  activeSince?: number;
  season?: number;
}

export interface AddressProps {
  calcScoreResult: CalcScoreProps;
  labels: Goal[];
  error: boolean | string;
}

const Address = ({ calcScoreResult, labels, error }: AddressProps) => {

  const { address, score, rank, progress, name, totalTransactions, spentOnGas, activeSince } = calcScoreResult;

  const router = useRouter()

  const [ownsNFT, setOwnsNFT] = useState(false);
  const [attestSuccess, setAttestSuccess] = useState(false);

  const connectedWallet = useAccount();

  useEffect(() => {
    async function fetchData() {
      if (error) {
        router.push('/error');
      }

      const connectedUserScoreAndRankRequest = await fetch(`/api/address/${connectedWallet.address}?${new Date().getTime()}`);
      if (connectedUserScoreAndRankRequest.ok) {
        const connectedUserETHRank = await connectedUserScoreAndRankRequest.json();
        if (connectedUserETHRank.progress.indexOf(CURRENT_SEASON_BADGE_ACHIEVEMENT_INDEX) > -1) {
          setOwnsNFT(true);
        }
      }
    }
    fetchData();
  });


  const [visible, setVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [newMember, setNewMember] = useState("");

  const { switchChain } = useSwitchChain();

  const signer = useEthersSigner();

  const EASContractAddress = "0x4200000000000000000000000000000000000021";
  const eas = new EAS(EASContractAddress);

  const signAttestation = async () => {

    const currentSigner = await signer;

    if (connectedWallet.address && currentSigner) {
      setIsLoading(true);

      try {
        eas.connect(currentSigner as TransactionSigner);

        const schemaEncoder = new SchemaEncoder("uint32 Score,uint8 Season,uint32 Rank");
        const encodedData = schemaEncoder.encodeData([
          { name: "Score", value: "0", type: "uint32" },
          { name: "Season", value: "0", type: "uint8" },
          { name: "Rank", value: "0", type: "uint32" }
        ]);

        // mainnet
        // const schemaUID = "";

        // sepolia
        // with custom reoslver copy pasted from example on eas docs
        const schemaUID = "0x98e255160d210b9b7a48a9d9d3d14df7fabca97e6292635aa1ef3477701d1c59";
        // with custom resolver written by chatgpt
        // const schemaUID = "0x4e3cd72e8534413031db49cf35ce829e911110cc98293a699e78063e4f4a64ef";
        // with no resolver
        // const schemaUID = "0xb778c7fccfa54293fa3d86dfe5f35c586933e9df72255f41d129cf8b1ae62b5a";

        const tx = await eas.attest(
          {
            schema: schemaUID,
            data: {
              recipient: address,
              expirationTime: BigInt(0),
              revocable: false,
              data: encodedData,
              value: BigInt(271722235145510)
            },
          },
          {
            gasLimit: 300000,
          },
        );

        const newAttestationUID = await tx.wait();


        // notification.success("Attestation signed successfully! UID: " + newAttestationUID);
      } catch (e) {
        console.log("Error signing attestation: ", e);
        // notification.error("Error signing attestation: " + e);
      } finally {
        setIsLoading(false);
        setAttestSuccess(true);
      }
    }
  };

  const isOptimism = (): boolean => {
    return connectedWallet.isConnected && (connectedWallet.chain?.id === optimism.id || connectedWallet.chain?.id === optimismSepolia.id);
  }

  const convertBigNumberToShorthand = (n: number) => {
    if (n < 1e3) return n % 1 != 0 ? n.toFixed(2) : n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  };


  const calculateProgress = function (achievementIndex: number, i: number) {
    const results = progress.filter((item: string) => {
      return item[0] === achievementIndex.toString() && item[1] === i.toString() && item.length === 3
    });

    if (results && results.length) {
      return results.length;
    } else return 0;
  };

  // TODO: calculate using points rather than percentage completed, normalize against one another maybe
  const getPercentCategoryCompleted = function (category: string) {
    const percentCompleted = achievements
      .map((achievement, i) => {

        let numberOfGoalsInThisCategoryForThisAchievement = 0;
        const goalsInThisCategory = achievement.goals
          .map((goal, j) => {
            const percent = progress.filter((item: string) => {
              return item[0] === i.toString() && item[1] === j.toString() && item.length === 3
            }).length / achievement.goals.length
            return {
              category: goal.category,
              percent
            }
          })
          .filter((goal) => {
            return goal.category === category
          });
        const percentDoneInThisAchievement = goalsInThisCategory.reduce((prev, { percent }) => {
          return prev + percent
        }, 0);
        numberOfGoalsInThisCategoryForThisAchievement += goalsInThisCategory.length;
        return {
          numberOfGoalsInThisCategoryForThisAchievement,
          percentCompleted: percentDoneInThisAchievement || 0
        };
      })
      .reduce((prev, achievement) => {
        return {
          percentCompleted: prev.percentCompleted + achievement.percentCompleted,
          numberOfGoalsInThisCategoryForThisAchievement: prev.numberOfGoalsInThisCategoryForThisAchievement + achievement.numberOfGoalsInThisCategoryForThisAchievement
        }
      }, {
        percentCompleted: 0,
        numberOfGoalsInThisCategoryForThisAchievement: 0
      })

    return percentCompleted.percentCompleted / percentCompleted.numberOfGoalsInThisCategoryForThisAchievement
  }

  const getLabelIcon = (category: string) => {
    switch (category) {
      case 'reputation':
      case 'social':
        return '/users-solid.svg'
      case 'nfts':
      case 'collecting':
        return '/gem-solid.svg';
      case 'technology':
      case 'staking':
        return '/microchip-solid.svg'
      case 'defi':
      case 'finance':
        return '/coins-solid.svg'
    }
  }

  const categories = ['reputation', 'nfts', 'defi', 'staking'];

  const categoryData = categories.map((category, i) => {
    const percentCompleted = getPercentCategoryCompleted(category);
    return {
      category,
      percentCompleted
    }
  });

  let displayAddress = name?.length && name || truncateEthAddress(address)

  return <Page title={`${address} - ETHRank`}>
    <div className="content">
      <div className={styles.address}>
        <h1>
          {displayAddress}
        </h1>
      </div>

      <div className={styles.categoryRow}>
        <div className={styles.colOne}>
          <div className={styles.badge}>
            <Badge address={displayAddress} score={score} rank={rank} progress={progress} />
          </div>
        </div>

        <div className={styles.colTwo}>
          <div className={styles.categories}>
            {categoryData.map((category, i) => {
              return <div
                key={i}
                className={`${styles.category}`}>
                <h4>{category.category}</h4>
                <ProgressBar percent={category.percentCompleted} />
              </div>
            })}
          </div>
        </div>
      </div>


      <div className={`${styles.cellParent} ${styles.claimRow}`}>
        <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 7, display: 'inline-flex' }}>
          <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 12, display: 'flex' }}>
            <div style={{ height: 16, justifyContent: 'center', alignItems: 'center', gap: 1, display: 'inline-flex' }}>
              <div style={{ width: 188.74, height: 0, border: '1px #18D4EB solid' }}></div>
              <div style={{ width: 97, paddingBottom: 12, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                <div className={styles.carat}>^</div>
                <div className={styles.carat}>^</div>
              </div>
              <div style={{ width: 188.74, height: 0, border: '1px #18D4EB solid' }}></div>
            </div>
            <div>
              <div><h2>Claim your dynamic badge</h2></div>
            </div>
            <div style={{ border: '1px #18D4EB solid', width: '100%' }}></div>
          </div>
          <ul className={styles.claimBox} style={{}}>
            <li>Evolves with you</li>
            <li>ERC-721 on mainnet</li>
            <li><span className={styles.oldPrice}>.05 ETH</span> .025 ETH
              <span className={styles.sale}>SALE</span>
            </li>
          </ul>
          <div><Link href="/" className={btnStyles.btn}><strong>Claim Badge</strong></Link></div>
        </div>
        <div className={`${styles.claimCell}`}>
          <div>
            <h3>Attest your score</h3>
            <p>Using the Ethereum Attestation Service (EAS) on <span className={styles.red}>Optimism</span></p>
          </div>

          {attestSuccess && 
            <p>
              Attestation Successful!
            </p>
          }

          {!attestSuccess && connectedWallet.isDisconnected && 
            <div className={`${btnStyles.connect} connect`}>
              <Web3Button />
            </div>
          }
          
          {!attestSuccess && connectedWallet.isConnected && 
            <>
              {isOptimism() ?
                <button
                  className={`${btnStyles.btn} ${isLoading ? "loading" : ""}`}
                  disabled={isLoading}
                  onClick={async () => await signAttestation()}
                >
                  {isLoading ? 
                    <strong>
                      Loading...
                    </strong>
                    :
                    <strong>
                      Attest Score
                    </strong>
                  }
                </button> :
                <button
                  className={`${btnStyles.btn} ${isLoading ? "loading" : ""}`}
                  disabled={!switchChain}
                  onClick={() => switchChain({ chainId: optimism.id })}
                ><strong>Switch to Optimism</strong></button>
              }
            </>
          }
        </div>
      </div>

      <div>
        <h3>Achievements <span className="pill">Season IV</span></h3>
        <div className={`${styles.cellParent} ${styles.achievements}`}>
          {achievements.map((achievement, i) => {
            const goals = achievement.goals;
            const percentages = goals.map((goal, j) => {
              return calculateProgress(i, j) / goal.steps.length
            }).reduce((partial_sum, a) => partial_sum + a, 0)
            return <Link key={i} href={{
              pathname: '/address/[address]/[achievement]',
              query: { address, achievement: achievement.slug },
            }}>
              <div className={`${styles.achievement} achievement animate__animated`}>
                <h4>{achievement.name}</h4>
                {/* <h2>{(percentages / achievement.goals.length * 100).toFixed(0)} %</h2> */}
                <ProgressBar percent={percentages / achievement.goals.length} />
              </div>
            </Link>
          })}
        </div>
      </div>

      <div className={styles.statsWrapper}>
        <img width="103" height="32" src="/logo-sm.png" className={styles.statsLogo} alt="ethrank.io" />
        <h3>Statistics <span className="pill lifetime">Lifetime</span></h3>


        {ownsNFT ?
          <div className={`${styles.cellParent} ${styles.stats}`}>

            <div className={`${styles.stat} stat`}>
              <h4>Rank</h4>
              <h2>{rank}</h2>
            </div>

            <div className={`${styles.stat} stat`}>
              <h4>Transactions</h4>
              <h2>{convertBigNumberToShorthand(parseFloat(totalTransactions))}</h2>
            </div>
            {/* <div className={`${styles.stat} stat`}>
              <h4>Spent on Gas</h4>
              <h2>Ξ{convertBigNumberToShorthand(parseFloat(spentOnGas))}</h2>
            </div> */}
            <div className={`${styles.stat} stat`}>
              <h4>Active Since</h4>
              <h2>{activeSince ? new Date(activeSince).getFullYear() : 'Unknown'}</h2>
            </div>
          </div>
          :
          <div className={`${styles.cellParent} ${styles.stats}`}>

            <div className={`${styles.stat} stat`}>
              <h4>Rank</h4>
              <h2>13</h2>
            </div>

            <div className={`${styles.stat} stat`}>
              <h4>Transactions</h4>
              <h2>1023</h2>
            </div>
            {/* <div className={`${styles.stat} stat`}>
                <h4>Spent on Gas</h4>
                <h2>Ξ12.2</h2>
              </div> */}
            <div className={`${styles.stat} stat`}>
              <h4>Active Since</h4>
              <h2>2015</h2>
            </div>
            <div className={styles.cta}>
              <h2>Dynamic Badge required to view stats</h2>
              <Link href="/" className={btnStyles.btn}><strong>Claim your badge now</strong></Link>
            </div>
          </div>
        }

      </div>

      <div className={styles.labelsWrapper}>
        <h3>Labels <span className="pill lifetime">Lifetime</span></h3>

        {ownsNFT ?
          <ul className={`${styles.cellParent} ${styles.labels}`}>
            {labels.filter(({ name }, index) => {
              return index === labels.findIndex((goal) => goal.name === name)
            }).map((goal, i) => {
              return (
                <li className={`${styles.stat} ${styles[goal.category]} label`} key={i}>
                  <img src={getLabelIcon(goal.category)} />
                  <label>{goal.name}</label>
                </li>
              )
            })}
          </ul>
          :
          <div className={`${styles.cellParent} ${styles.labels}`}>
            <ul>
              <li className={`${styles.stat} users label`}>
                <img src='/users-solid.svg' />
                <label>Lorem Ipsum Dolor Set</label>
              </li>
              <li className={`${styles.stat} users label`}>
                <img src='/users-solid.svg' />
                <label>If you are reading this</label>
              </li>
              <li className={`${styles.stat} users label`}>
                <img src='/gem-solid.svg' />
                <label>Please buy a badge</label>
              </li>
              <li className={`${styles.stat} users label`}>
                <img src='/microchip-solid.svg' />
                <label>Or reach out for some work</label>
              </li>
              <li className={`${styles.stat} users label`}>
                <img src='/users-solid.svg' />
                <label>Lorem Ipsum Dolor Set</label>
              </li>
              <li className={`${styles.stat} users label`}>
                <img src='/users-solid.svg' />
                <label>If you are reading this</label>
              </li>
              <li className={`${styles.stat} users label`}>
                <img src='/gem-solid.svg' />
                <label>Please buy a badge</label>
              </li>
              <li className={`${styles.stat} users label`}>
                <img src='/microchip-solid.svg' />
                <label>Or reach out for some work</label>
              </li>
            </ul>
            <div className={styles.cta}>
              <h2>Dynamic Badge required to view labels</h2>
              <Link href="/" className={btnStyles.btn}><strong>Claim your badge now</strong></Link>
            </div>
          </div>
        }
      </div>

      {/* <div className={styles.adRow}>
        <span id="ct_cr9Bln7RW8u"></span>
        <span id="ct_cGXDS2tunjH"></span>
      </div> */}
    </div>
  </Page>
}

export default Address