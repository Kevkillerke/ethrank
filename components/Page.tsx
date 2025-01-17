import type { NextPage } from 'next'
import Head from 'next/head'
import { ReactNode } from 'react'
import ConnectButtonProvider from '../components/ConnectButtonProvider'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'

// add to this every new season
export const SEASONS = [
  'achievements_season1',
  'achievements_season2'
];

/*
 * All content copyright 2022 Examp, LLC
 *
 * This file is part of some open source application.
 * 
 * Some open source application is free software: you can redistribute 
 * it and/or modify it under the terms of the GNU General Public 
 * License as published by the Free Software Foundation, either 
 * version 3 of the License, or (at your option) any later version.
 * 
 * Some open source application is distributed in the hope that it will 
 * be useful, but WITHOUT ANY WARRANTY; without even the implied warranty 
 * of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
*/
interface PageProps {
  children: ReactNode,
  title: string
}

const Page = (props: PageProps) => {

  return (
    <ConnectButtonProvider>
      <div className={styles.container}>
        <Head>
          <title>{props.title}</title>
          <meta name="description" content="ETHRank - The Ethereum Leaderboard." />
          <link rel="icon" href="/favicon_season2.png" />
        </Head>

        <Header />

        <main className={styles.main}>
          {props.children}
        </main>

        <Footer />
      </div>
    </ConnectButtonProvider>
  )
}

export default Page
