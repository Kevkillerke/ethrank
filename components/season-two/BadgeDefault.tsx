import { BadgeParams } from "./Badge";

export const BadgeDefault = ({ address, score, rank }: BadgeParams) => {
  let formattedAddress = address.length === 42 ? `${address.substring(0, 8)}...${address.substring(address.length - 8, address.length)}` : address;
  return (<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <circle cx="250" cy="250" r="250" fill="url(#pattern)" />
    <circle cx="250" cy="250" r="231" fill="url(#paint1_linear_615_126)" />
    <g clipPath="url(#clip0_615_126)">
      <path d="M249.48 138L247.984 143.082V290.533L249.48 292.026L317.924 251.568L249.48 138Z" fill="url(#paint2_radial_615_126)" />
      <path d="M249.48 138L181.034 251.568L249.48 292.026V220.457V138Z" fill="url(#pattern)" />
      <path d="M249.48 304.984L248.637 306.012V358.537L249.48 360.998L317.966 264.547L249.48 304.984Z" fill="#025462" />
      <path d="M249.48 360.998V304.984L181.034 264.547L249.48 360.998Z" fill="url(#pattern)" />
      <path d="M249.48 292.026L317.924 251.568L249.48 220.457V292.026Z" fill="#011B20" />
      <path d="M181.034 251.568L249.48 292.026V220.457L181.034 251.568Z" fill="url(#paint5_radial_615_126)" />
    </g>
    <path d="M337.054 229V226.813H350.662V229H337.054ZM338.674 220.009V217.822H349.042V220.009H338.674ZM337.594 211.909V209.722H350.122V211.909H337.594ZM362.138 229C361.94 229 361.787 228.946 361.679 228.838C361.571 228.712 361.517 228.559 361.517 228.379V210.748C361.517 210.55 361.571 210.397 361.679 210.289C361.787 210.163 361.94 210.1 362.138 210.1H368.726C370.76 210.1 372.371 210.577 373.559 211.531C374.747 212.485 375.341 213.898 375.341 215.77C375.341 217.156 374.99 218.29 374.288 219.172C373.604 220.036 372.668 220.639 371.48 220.981L375.638 228.163C375.692 228.271 375.719 228.37 375.719 228.46C375.719 228.604 375.656 228.73 375.53 228.838C375.422 228.946 375.296 229 375.152 229H373.856C373.55 229 373.325 228.919 373.181 228.757C373.037 228.595 372.911 228.433 372.803 228.271L368.888 221.413H364.163V228.379C364.163 228.559 364.1 228.712 363.974 228.838C363.866 228.946 363.713 229 363.515 229H362.138ZM364.163 219.118H368.618C369.968 219.118 370.976 218.839 371.642 218.281C372.308 217.705 372.641 216.859 372.641 215.743C372.641 214.645 372.308 213.808 371.642 213.232C370.994 212.656 369.986 212.368 368.618 212.368H364.163V219.118ZM384.825 229C384.681 229 384.555 228.946 384.447 228.838C384.339 228.73 384.285 228.604 384.285 228.46C384.285 228.37 384.294 228.271 384.312 228.163L391.008 210.694C391.08 210.514 391.179 210.37 391.305 210.262C391.431 210.154 391.62 210.1 391.872 210.1H393.708C393.942 210.1 394.122 210.154 394.248 210.262C394.392 210.37 394.5 210.514 394.572 210.694L401.241 228.163C401.277 228.271 401.295 228.37 401.295 228.46C401.295 228.604 401.241 228.73 401.133 228.838C401.025 228.946 400.899 229 400.755 229H399.378C399.162 229 399 228.946 398.892 228.838C398.802 228.73 398.739 228.631 398.703 228.541L397.218 224.707H388.362L386.877 228.541C386.859 228.631 386.796 228.73 386.688 228.838C386.58 228.946 386.418 229 386.202 229H384.825ZM389.145 222.385H396.435L392.79 212.8L389.145 222.385ZM411.688 229C411.49 229 411.337 228.946 411.229 228.838C411.121 228.712 411.067 228.559 411.067 228.379V210.748C411.067 210.55 411.121 210.397 411.229 210.289C411.337 210.163 411.49 210.1 411.688 210.1H412.93C413.146 210.1 413.308 210.154 413.416 210.262C413.524 210.352 413.587 210.424 413.605 210.478L422.569 224.248V210.748C422.569 210.55 422.623 210.397 422.731 210.289C422.839 210.163 422.992 210.1 423.19 210.1H424.486C424.684 210.1 424.837 210.163 424.945 210.289C425.071 210.397 425.134 210.55 425.134 210.748V228.352C425.134 228.532 425.071 228.685 424.945 228.811C424.837 228.937 424.693 229 424.513 229H423.217C423.019 229 422.866 228.946 422.758 228.838C422.668 228.73 422.605 228.658 422.569 228.622L413.632 214.987V228.379C413.632 228.559 413.569 228.712 413.443 228.838C413.335 228.946 413.182 229 412.984 229H411.688ZM437.32 229C437.122 229 436.969 228.946 436.861 228.838C436.753 228.712 436.699 228.559 436.699 228.379V210.748C436.699 210.55 436.753 210.397 436.861 210.289C436.969 210.163 437.122 210.1 437.32 210.1H438.67C438.868 210.1 439.021 210.163 439.129 210.289C439.255 210.397 439.318 210.55 439.318 210.748V217.444L446.527 210.532C446.599 210.46 446.716 210.37 446.878 210.262C447.058 210.154 447.292 210.1 447.58 210.1H449.038C449.182 210.1 449.308 210.154 449.416 210.262C449.524 210.37 449.578 210.496 449.578 210.64C449.578 210.784 449.542 210.901 449.47 210.991L441.127 219.145L450.01 228.082C450.1 228.19 450.145 228.316 450.145 228.46C450.145 228.604 450.091 228.73 449.983 228.838C449.875 228.946 449.749 229 449.605 229H448.093C447.787 229 447.553 228.946 447.391 228.838C447.229 228.712 447.112 228.622 447.04 228.568L439.318 220.954V228.379C439.318 228.559 439.255 228.712 439.129 228.838C439.021 228.946 438.868 229 438.67 229H437.32Z" fill="white" fillOpacity="0.52" />
    <path d="M56.5954 229.27C55.0294 229.27 53.7154 229.036 52.6534 228.568C51.5914 228.082 50.7724 227.461 50.1964 226.705C49.6384 225.931 49.3414 225.112 49.3054 224.248C49.3054 224.104 49.3594 223.978 49.4674 223.87C49.5934 223.744 49.7374 223.681 49.8994 223.681H51.2764C51.4924 223.681 51.6544 223.735 51.7624 223.843C51.8704 223.951 51.9424 224.077 51.9784 224.221C52.0684 224.653 52.2844 225.085 52.6264 225.517C52.9864 225.931 53.4814 226.282 54.1114 226.57C54.7594 226.84 55.5874 226.975 56.5954 226.975C58.1434 226.975 59.2774 226.705 59.9974 226.165C60.7354 225.607 61.1044 224.869 61.1044 223.951C61.1044 223.321 60.9064 222.817 60.5104 222.439C60.1324 222.043 59.5474 221.692 58.7554 221.386C57.9634 221.08 56.9374 220.747 55.6774 220.387C54.3634 220.009 53.2744 219.595 52.4104 219.145C51.5464 218.695 50.8984 218.137 50.4664 217.471C50.0524 216.805 49.8454 215.959 49.8454 214.933C49.8454 213.961 50.1064 213.097 50.6284 212.341C51.1504 211.567 51.8974 210.955 52.8694 210.505C53.8594 210.055 55.0564 209.83 56.4604 209.83C57.5764 209.83 58.5484 209.983 59.3764 210.289C60.2224 210.577 60.9244 210.973 61.4824 211.477C62.0404 211.963 62.4634 212.494 62.7514 213.07C63.0394 213.628 63.1924 214.177 63.2104 214.717C63.2104 214.843 63.1654 214.969 63.0754 215.095C62.9854 215.203 62.8414 215.257 62.6434 215.257H61.2124C61.0864 215.257 60.9514 215.221 60.8074 215.149C60.6814 215.077 60.5824 214.942 60.5104 214.744C60.4024 214.006 59.9884 213.385 59.2684 212.881C58.5484 212.377 57.6124 212.125 56.4604 212.125C55.2904 212.125 54.3364 212.35 53.5984 212.8C52.8784 213.25 52.5184 213.952 52.5184 214.906C52.5184 215.518 52.6894 216.031 53.0314 216.445C53.3734 216.841 53.9134 217.192 54.6514 217.498C55.3894 217.804 56.3524 218.128 57.5404 218.47C58.9804 218.866 60.1594 219.289 61.0774 219.739C61.9954 220.171 62.6704 220.72 63.1024 221.386C63.5524 222.034 63.7774 222.871 63.7774 223.897C63.7774 225.031 63.4804 226.003 62.8864 226.813C62.2924 227.605 61.4554 228.217 60.3754 228.649C59.3134 229.063 58.0534 229.27 56.5954 229.27ZM81.0053 229.27C79.3493 229.27 77.9723 228.964 76.8743 228.352C75.7943 227.74 74.9753 226.885 74.4173 225.787C73.8593 224.689 73.5533 223.411 73.4993 221.953C73.4813 221.215 73.4723 220.423 73.4723 219.577C73.4723 218.731 73.4813 217.921 73.4993 217.147C73.5533 215.689 73.8593 214.411 74.4173 213.313C74.9753 212.215 75.7943 211.36 76.8743 210.748C77.9723 210.136 79.3493 209.83 81.0053 209.83C82.2473 209.83 83.3363 210.001 84.2723 210.343C85.2083 210.685 85.9823 211.144 86.5943 211.72C87.2243 212.296 87.7013 212.944 88.0253 213.664C88.3493 214.366 88.5293 215.095 88.5653 215.851C88.5833 216.013 88.5293 216.148 88.4033 216.256C88.2953 216.364 88.1603 216.418 87.9983 216.418H86.5133C86.3513 216.418 86.2073 216.373 86.0813 216.283C85.9733 216.193 85.8923 216.031 85.8383 215.797C85.5323 214.393 84.9563 213.43 84.1103 212.908C83.2823 212.386 82.2383 212.125 80.9783 212.125C79.5383 212.125 78.3953 212.539 77.5493 213.367C76.7033 214.177 76.2443 215.482 76.1723 217.282C76.1183 218.758 76.1183 220.27 76.1723 221.818C76.2443 223.618 76.7033 224.932 77.5493 225.76C78.3953 226.57 79.5383 226.975 80.9783 226.975C82.2383 226.975 83.2823 226.714 84.1103 226.192C84.9563 225.67 85.5323 224.707 85.8383 223.303C85.8923 223.069 85.9733 222.907 86.0813 222.817C86.2073 222.727 86.3513 222.682 86.5133 222.682H87.9983C88.1603 222.682 88.2953 222.736 88.4033 222.844C88.5293 222.952 88.5833 223.087 88.5653 223.249C88.5293 224.005 88.3493 224.743 88.0253 225.463C87.7013 226.165 87.2243 226.804 86.5943 227.38C85.9823 227.956 85.2083 228.415 84.2723 228.757C83.3363 229.099 82.2473 229.27 81.0053 229.27ZM105.846 229.27C104.316 229.27 103.002 229.009 101.904 228.487C100.806 227.947 99.9597 227.128 99.3657 226.03C98.7717 224.914 98.4387 223.519 98.3667 221.845C98.3487 221.053 98.3397 220.297 98.3397 219.577C98.3397 218.839 98.3487 218.074 98.3667 217.282C98.4387 215.626 98.7807 214.249 99.3927 213.151C100.023 212.035 100.887 211.207 101.985 210.667C103.101 210.109 104.388 209.83 105.846 209.83C107.322 209.83 108.609 210.109 109.707 210.667C110.823 211.207 111.696 212.035 112.326 213.151C112.956 214.249 113.298 215.626 113.352 217.282C113.388 218.074 113.406 218.839 113.406 219.577C113.406 220.297 113.388 221.053 113.352 221.845C113.298 223.519 112.965 224.914 112.353 226.03C111.759 227.128 110.913 227.947 109.815 228.487C108.717 229.009 107.394 229.27 105.846 229.27ZM105.846 226.975C107.232 226.975 108.357 226.561 109.221 225.733C110.103 224.905 110.58 223.564 110.652 221.71C110.688 220.9 110.706 220.18 110.706 219.55C110.706 218.902 110.688 218.182 110.652 217.39C110.616 216.148 110.382 215.14 109.95 214.366C109.536 213.592 108.978 213.025 108.276 212.665C107.574 212.305 106.764 212.125 105.846 212.125C104.964 212.125 104.172 212.305 103.47 212.665C102.768 213.025 102.201 213.592 101.769 214.366C101.355 215.14 101.121 216.148 101.067 217.39C101.049 218.182 101.04 218.902 101.04 219.55C101.04 220.18 101.049 220.9 101.067 221.71C101.139 223.564 101.616 224.905 102.498 225.733C103.38 226.561 104.496 226.975 105.846 226.975ZM124.847 229C124.649 229 124.496 228.946 124.388 228.838C124.28 228.712 124.226 228.559 124.226 228.379V210.748C124.226 210.55 124.28 210.397 124.388 210.289C124.496 210.163 124.649 210.1 124.847 210.1H131.435C133.469 210.1 135.08 210.577 136.268 211.531C137.456 212.485 138.05 213.898 138.05 215.77C138.05 217.156 137.699 218.29 136.997 219.172C136.313 220.036 135.377 220.639 134.189 220.981L138.347 228.163C138.401 228.271 138.428 228.37 138.428 228.46C138.428 228.604 138.365 228.73 138.239 228.838C138.131 228.946 138.005 229 137.861 229H136.565C136.259 229 136.034 228.919 135.89 228.757C135.746 228.595 135.62 228.433 135.512 228.271L131.597 221.413H126.872V228.379C126.872 228.559 126.809 228.712 126.683 228.838C126.575 228.946 126.422 229 126.224 229H124.847ZM126.872 219.118H131.327C132.677 219.118 133.685 218.839 134.351 218.281C135.017 217.705 135.35 216.859 135.35 215.743C135.35 214.645 135.017 213.808 134.351 213.232C133.703 212.656 132.695 212.368 131.327 212.368H126.872V219.118ZM149.425 229C149.227 229 149.074 228.946 148.966 228.838C148.858 228.712 148.804 228.559 148.804 228.379V210.748C148.804 210.55 148.858 210.397 148.966 210.289C149.074 210.163 149.227 210.1 149.425 210.1H160.576C160.774 210.1 160.927 210.163 161.035 210.289C161.143 210.397 161.197 210.55 161.197 210.748V211.774C161.197 211.972 161.143 212.125 161.035 212.233C160.927 212.341 160.774 212.395 160.576 212.395H151.396V218.308H159.982C160.18 218.308 160.333 218.371 160.441 218.497C160.549 218.605 160.603 218.758 160.603 218.956V219.955C160.603 220.135 160.549 220.288 160.441 220.414C160.333 220.522 160.18 220.576 159.982 220.576H151.396V226.705H160.792C160.99 226.705 161.143 226.759 161.251 226.867C161.359 226.975 161.413 227.128 161.413 227.326V228.379C161.413 228.559 161.359 228.712 161.251 228.838C161.143 228.946 160.99 229 160.792 229H149.425Z" fill="white" fillOpacity="0.52" />
    <g filter="url(#filter0_d_615_126)" fill="white" >
      <path d="M180.536 400.955C180.764 400.955 180.96 401.038 181.125 401.203C181.291 401.368 181.373 401.565 181.373 401.792V406.163C181.373 406.39 181.291 406.587 181.125 406.752C180.96 406.917 180.764 407 180.536 407H160.944C160.717 407 160.521 406.917 160.355 406.752C160.19 406.587 160.107 406.39 160.107 406.163V386.137C160.107 385.91 160.19 385.713 160.355 385.548C160.521 385.383 160.717 385.3 160.944 385.3H180.226C180.454 385.3 180.65 385.383 180.815 385.548C180.981 385.713 181.063 385.91 181.063 386.137V390.508C181.063 390.735 180.981 390.932 180.815 391.097C180.65 391.262 180.454 391.345 180.226 391.345H168.167V393.298H178.521C178.749 393.298 178.945 393.381 179.11 393.546C179.276 393.711 179.358 393.908 179.358 394.135V398.165C179.358 398.392 179.276 398.589 179.11 398.754C178.945 398.919 178.749 399.002 178.521 399.002H168.167V400.955H180.536ZM207.525 385.3C207.753 385.3 207.949 385.383 208.114 385.548C208.28 385.713 208.362 385.91 208.362 386.137V391.128C208.362 391.355 208.28 391.552 208.114 391.717C207.949 391.882 207.753 391.965 207.525 391.965H200.86V406.163C200.86 406.39 200.778 406.587 200.612 406.752C200.447 406.917 200.251 407 200.023 407H193.637C193.41 407 193.214 406.917 193.048 406.752C192.883 406.587 192.8 406.39 192.8 406.163V391.965H186.135C185.908 391.965 185.712 391.882 185.546 391.717C185.381 391.552 185.298 391.355 185.298 391.128V386.137C185.298 385.91 185.381 385.713 185.546 385.548C185.712 385.383 185.908 385.3 186.135 385.3H207.525ZM233.491 385.3C233.718 385.3 233.915 385.383 234.08 385.548C234.245 385.713 234.328 385.91 234.328 386.137V406.163C234.328 406.39 234.245 406.587 234.08 406.752C233.915 406.917 233.718 407 233.491 407H227.105C226.878 407 226.681 406.917 226.516 406.752C226.351 406.587 226.268 406.39 226.268 406.163V399.56H220.068V406.163C220.068 406.39 219.985 406.587 219.82 406.752C219.655 406.917 219.458 407 219.231 407H212.845C212.618 407 212.421 406.928 212.256 406.783C212.091 406.618 212.008 406.411 212.008 406.163V386.137C212.008 385.91 212.091 385.713 212.256 385.548C212.421 385.383 212.618 385.3 212.845 385.3H219.231C219.458 385.3 219.655 385.383 219.82 385.548C219.985 385.713 220.068 385.91 220.068 386.137V392.492H226.268V386.137C226.268 385.91 226.351 385.713 226.516 385.548C226.681 385.383 226.878 385.3 227.105 385.3H233.491ZM261.813 406.039C261.854 406.122 261.875 406.215 261.875 406.318C261.875 406.504 261.803 406.669 261.658 406.814C261.534 406.938 261.379 407 261.193 407H254.156C253.867 407 253.598 406.928 253.35 406.783C253.123 406.638 252.957 406.452 252.854 406.225L250.126 400.087H247.522V406.163C247.522 406.39 247.439 406.587 247.274 406.752C247.109 406.917 246.912 407 246.685 407H239.989C239.762 407 239.565 406.917 239.4 406.752C239.235 406.587 239.152 406.39 239.152 406.163V386.137C239.152 385.91 239.235 385.713 239.4 385.548C239.565 385.383 239.762 385.3 239.989 385.3H252.048C253.908 385.3 255.53 385.6 256.915 386.199C258.32 386.798 259.395 387.666 260.139 388.803C260.883 389.94 261.255 391.273 261.255 392.802C261.255 395.613 260.17 397.648 258 398.909L261.813 406.039ZM251.397 394.352C251.852 394.352 252.203 394.207 252.451 393.918C252.699 393.608 252.823 393.226 252.823 392.771C252.823 392.316 252.699 391.924 252.451 391.593C252.224 391.242 251.872 391.066 251.397 391.066H247.522V394.352H251.397ZM271.38 405.946C271.111 406.649 270.646 407 269.985 407H264.126C263.94 407 263.775 406.938 263.63 406.814C263.506 406.669 263.444 406.504 263.444 406.318L263.475 406.132L270.233 386.323C270.316 386.054 270.471 385.817 270.698 385.61C270.925 385.403 271.235 385.3 271.628 385.3H280.246C280.639 385.3 280.949 385.403 281.176 385.61C281.403 385.817 281.558 386.054 281.641 386.323L288.399 406.132L288.43 406.318C288.43 406.504 288.358 406.669 288.213 406.814C288.089 406.938 287.934 407 287.748 407H281.889C281.228 407 280.763 406.649 280.494 405.946L279.719 403.776H272.155L271.38 405.946ZM275.937 391.283L273.736 397.731H278.138L275.937 391.283ZM311.885 385.3C312.112 385.3 312.309 385.383 312.474 385.548C312.639 385.713 312.722 385.91 312.722 386.137V406.163C312.722 406.39 312.639 406.587 312.474 406.752C312.309 406.917 312.112 407 311.885 407H306.894C306.398 407 305.985 406.783 305.654 406.349L298.896 397.731V406.163C298.896 406.39 298.813 406.587 298.648 406.752C298.483 406.917 298.286 407 298.059 407H292.293C292.066 407 291.869 406.917 291.704 406.752C291.539 406.587 291.456 406.39 291.456 406.163V386.137C291.456 385.91 291.539 385.713 291.704 385.548C291.869 385.383 292.066 385.3 292.293 385.3H297.315C297.811 385.3 298.214 385.507 298.524 385.92L305.282 395.251V386.137C305.282 385.91 305.365 385.713 305.53 385.548C305.695 385.383 305.892 385.3 306.119 385.3H311.885ZM341.323 405.915C341.405 406.039 341.447 406.173 341.447 406.318C341.447 406.504 341.374 406.669 341.23 406.814C341.106 406.938 340.951 407 340.765 407H332.767C332.291 407 331.919 406.835 331.651 406.504L326.257 399.839V406.163C326.257 406.39 326.174 406.587 326.009 406.752C325.843 406.917 325.647 407 325.42 407H319.034C318.806 407 318.61 406.917 318.445 406.752C318.279 406.587 318.197 406.39 318.197 406.163V386.137C318.197 385.91 318.279 385.713 318.445 385.548C318.61 385.383 318.806 385.3 319.034 385.3H325.42C325.647 385.3 325.843 385.383 326.009 385.548C326.174 385.713 326.257 385.91 326.257 386.137V391.965L331.155 385.827C331.465 385.476 331.847 385.3 332.302 385.3H339.773C339.959 385.3 340.114 385.372 340.238 385.517C340.382 385.641 340.455 385.796 340.455 385.982C340.455 386.147 340.403 386.292 340.3 386.416L332.953 395.375L341.323 405.915Z" />
      <path d="M163.519 427.17C162.533 427.17 161.706 427.023 161.037 426.728C160.368 426.422 159.853 426.031 159.49 425.555C159.139 425.068 158.952 424.552 158.929 424.008C158.929 423.917 158.963 423.838 159.031 423.77C159.11 423.691 159.201 423.651 159.303 423.651H160.17C160.306 423.651 160.408 423.685 160.476 423.753C160.544 423.821 160.589 423.9 160.612 423.991C160.669 424.263 160.805 424.535 161.02 424.807C161.247 425.068 161.558 425.289 161.955 425.47C162.363 425.64 162.884 425.725 163.519 425.725C164.494 425.725 165.208 425.555 165.661 425.215C166.126 424.864 166.358 424.399 166.358 423.821C166.358 423.424 166.233 423.107 165.984 422.869C165.746 422.62 165.378 422.399 164.879 422.206C164.38 422.013 163.734 421.804 162.941 421.577C162.114 421.339 161.428 421.078 160.884 420.795C160.34 420.512 159.932 420.16 159.66 419.741C159.399 419.322 159.269 418.789 159.269 418.143C159.269 417.531 159.433 416.987 159.762 416.511C160.091 416.024 160.561 415.638 161.173 415.355C161.796 415.072 162.55 414.93 163.434 414.93C164.137 414.93 164.749 415.026 165.27 415.219C165.803 415.4 166.245 415.65 166.596 415.967C166.947 416.273 167.214 416.607 167.395 416.97C167.576 417.321 167.673 417.667 167.684 418.007C167.684 418.086 167.656 418.166 167.599 418.245C167.542 418.313 167.452 418.347 167.327 418.347H166.426C166.347 418.347 166.262 418.324 166.171 418.279C166.092 418.234 166.029 418.149 165.984 418.024C165.916 417.559 165.655 417.168 165.202 416.851C164.749 416.534 164.159 416.375 163.434 416.375C162.697 416.375 162.097 416.517 161.632 416.8C161.179 417.083 160.952 417.525 160.952 418.126C160.952 418.511 161.06 418.834 161.275 419.095C161.49 419.344 161.83 419.565 162.295 419.758C162.76 419.951 163.366 420.155 164.114 420.37C165.021 420.619 165.763 420.886 166.341 421.169C166.919 421.441 167.344 421.787 167.616 422.206C167.899 422.614 168.041 423.141 168.041 423.787C168.041 424.501 167.854 425.113 167.48 425.623C167.106 426.122 166.579 426.507 165.899 426.779C165.23 427.04 164.437 427.17 163.519 427.17ZM179.33 427C179.206 427 179.109 426.966 179.041 426.898C178.973 426.819 178.939 426.722 178.939 426.609V415.508C178.939 415.383 178.973 415.287 179.041 415.219C179.109 415.14 179.206 415.1 179.33 415.1H186.351C186.476 415.1 186.572 415.14 186.64 415.219C186.708 415.287 186.742 415.383 186.742 415.508V416.154C186.742 416.279 186.708 416.375 186.64 416.443C186.572 416.511 186.476 416.545 186.351 416.545H180.571V420.268H185.977C186.102 420.268 186.198 420.308 186.266 420.387C186.334 420.455 186.368 420.551 186.368 420.676V421.305C186.368 421.418 186.334 421.515 186.266 421.594C186.198 421.662 186.102 421.696 185.977 421.696H180.571V425.555H186.487C186.612 425.555 186.708 425.589 186.776 425.657C186.844 425.725 186.878 425.821 186.878 425.946V426.609C186.878 426.722 186.844 426.819 186.776 426.898C186.708 426.966 186.612 427 186.487 427H179.33ZM197.12 427C197.029 427 196.95 426.966 196.882 426.898C196.814 426.83 196.78 426.751 196.78 426.66C196.78 426.603 196.785 426.541 196.797 426.473L201.013 415.474C201.058 415.361 201.12 415.27 201.2 415.202C201.279 415.134 201.398 415.1 201.557 415.1H202.713C202.86 415.1 202.973 415.134 203.053 415.202C203.143 415.27 203.211 415.361 203.257 415.474L207.456 426.473C207.478 426.541 207.49 426.603 207.49 426.66C207.49 426.751 207.456 426.83 207.388 426.898C207.32 426.966 207.24 427 207.15 427H206.283C206.147 427 206.045 426.966 205.977 426.898C205.92 426.83 205.88 426.768 205.858 426.711L204.923 424.297H199.347L198.412 426.711C198.4 426.768 198.361 426.83 198.293 426.898C198.225 426.966 198.123 427 197.987 427H197.12ZM199.84 422.835H204.43L202.135 416.8L199.84 422.835ZM221.636 427.17C220.65 427.17 219.823 427.023 219.154 426.728C218.486 426.422 217.97 426.031 217.607 425.555C217.256 425.068 217.069 424.552 217.046 424.008C217.046 423.917 217.08 423.838 217.148 423.77C217.228 423.691 217.318 423.651 217.42 423.651H218.287C218.423 423.651 218.525 423.685 218.593 423.753C218.661 423.821 218.707 423.9 218.729 423.991C218.786 424.263 218.922 424.535 219.137 424.807C219.364 425.068 219.676 425.289 220.072 425.47C220.48 425.64 221.002 425.725 221.636 425.725C222.611 425.725 223.325 425.555 223.778 425.215C224.243 424.864 224.475 424.399 224.475 423.821C224.475 423.424 224.351 423.107 224.101 422.869C223.863 422.62 223.495 422.399 222.996 422.206C222.498 422.013 221.852 421.804 221.058 421.577C220.231 421.339 219.545 421.078 219.001 420.795C218.457 420.512 218.049 420.16 217.777 419.741C217.517 419.322 217.386 418.789 217.386 418.143C217.386 417.531 217.551 416.987 217.879 416.511C218.208 416.024 218.678 415.638 219.29 415.355C219.914 415.072 220.667 414.93 221.551 414.93C222.254 414.93 222.866 415.026 223.387 415.219C223.92 415.4 224.362 415.65 224.713 415.967C225.065 416.273 225.331 416.607 225.512 416.97C225.694 417.321 225.79 417.667 225.801 418.007C225.801 418.086 225.773 418.166 225.716 418.245C225.66 418.313 225.569 418.347 225.444 418.347H224.543C224.464 418.347 224.379 418.324 224.288 418.279C224.209 418.234 224.147 418.149 224.101 418.024C224.033 417.559 223.773 417.168 223.319 416.851C222.866 416.534 222.277 416.375 221.551 416.375C220.815 416.375 220.214 416.517 219.749 416.8C219.296 417.083 219.069 417.525 219.069 418.126C219.069 418.511 219.177 418.834 219.392 419.095C219.608 419.344 219.948 419.565 220.412 419.758C220.877 419.951 221.483 420.155 222.231 420.37C223.138 420.619 223.88 420.886 224.458 421.169C225.036 421.441 225.461 421.787 225.733 422.206C226.017 422.614 226.158 423.141 226.158 423.787C226.158 424.501 225.971 425.113 225.597 425.623C225.223 426.122 224.696 426.507 224.016 426.779C223.348 427.04 222.554 427.17 221.636 427.17ZM241.324 427.17C240.36 427.17 239.533 427.006 238.842 426.677C238.15 426.337 237.618 425.821 237.244 425.13C236.87 424.427 236.66 423.549 236.615 422.495C236.603 421.996 236.598 421.52 236.598 421.067C236.598 420.602 236.603 420.121 236.615 419.622C236.66 418.579 236.875 417.712 237.261 417.021C237.657 416.318 238.201 415.797 238.893 415.457C239.595 415.106 240.406 414.93 241.324 414.93C242.253 414.93 243.063 415.106 243.755 415.457C244.457 415.797 245.007 416.318 245.404 417.021C245.8 417.712 246.016 418.579 246.05 419.622C246.072 420.121 246.084 420.602 246.084 421.067C246.084 421.52 246.072 421.996 246.05 422.495C246.016 423.549 245.806 424.427 245.421 425.13C245.047 425.821 244.514 426.337 243.823 426.677C243.131 427.006 242.298 427.17 241.324 427.17ZM241.324 425.725C242.196 425.725 242.905 425.464 243.449 424.943C244.004 424.422 244.304 423.577 244.35 422.41C244.372 421.9 244.384 421.447 244.384 421.05C244.384 420.642 244.372 420.189 244.35 419.69C244.327 418.908 244.18 418.273 243.908 417.786C243.647 417.299 243.296 416.942 242.854 416.715C242.412 416.488 241.902 416.375 241.324 416.375C240.768 416.375 240.27 416.488 239.828 416.715C239.386 416.942 239.029 417.299 238.757 417.786C238.496 418.273 238.349 418.908 238.315 419.69C238.303 420.189 238.298 420.642 238.298 421.05C238.298 421.447 238.303 421.9 238.315 422.41C238.36 423.577 238.66 424.422 239.216 424.943C239.771 425.464 240.474 425.725 241.324 425.725ZM257.622 427C257.498 427 257.401 426.966 257.333 426.898C257.265 426.819 257.231 426.722 257.231 426.609V415.508C257.231 415.383 257.265 415.287 257.333 415.219C257.401 415.14 257.498 415.1 257.622 415.1H258.404C258.54 415.1 258.642 415.134 258.71 415.202C258.778 415.259 258.818 415.304 258.829 415.338L264.473 424.008V415.508C264.473 415.383 264.507 415.287 264.575 415.219C264.643 415.14 264.74 415.1 264.864 415.1H265.68C265.805 415.1 265.901 415.14 265.969 415.219C266.049 415.287 266.088 415.383 266.088 415.508V426.592C266.088 426.705 266.049 426.802 265.969 426.881C265.901 426.96 265.811 427 265.697 427H264.881C264.757 427 264.66 426.966 264.592 426.898C264.536 426.83 264.496 426.785 264.473 426.762L258.846 418.177V426.609C258.846 426.722 258.807 426.819 258.727 426.898C258.659 426.966 258.563 427 258.438 427H257.622ZM293.103 427C292.989 427 292.893 426.966 292.814 426.898C292.746 426.819 292.712 426.722 292.712 426.609V416.613H289.448C289.334 416.613 289.238 416.579 289.159 416.511C289.091 416.432 289.057 416.335 289.057 416.222V415.508C289.057 415.383 289.091 415.287 289.159 415.219C289.238 415.14 289.334 415.1 289.448 415.1H297.642C297.766 415.1 297.863 415.14 297.931 415.219C298.01 415.287 298.05 415.383 298.05 415.508V416.222C298.05 416.335 298.01 416.432 297.931 416.511C297.863 416.579 297.766 416.613 297.642 416.613H294.395V426.609C294.395 426.722 294.355 426.819 294.276 426.898C294.208 426.966 294.111 427 293.987 427H293.103ZM310.631 427C310.484 427 310.365 426.96 310.274 426.881C310.195 426.802 310.138 426.688 310.104 426.541L307.911 415.627C307.9 415.582 307.894 415.542 307.894 415.508C307.894 415.474 307.894 415.451 307.894 415.44C307.894 415.349 307.928 415.27 307.996 415.202C308.064 415.134 308.144 415.1 308.234 415.1H309.118C309.356 415.1 309.492 415.196 309.526 415.389L311.26 424.161L313.096 418.143C313.13 418.041 313.187 417.95 313.266 417.871C313.357 417.78 313.482 417.735 313.64 417.735H314.269C314.439 417.735 314.564 417.78 314.643 417.871C314.723 417.95 314.774 418.041 314.796 418.143L316.649 424.161L318.366 415.389C318.4 415.196 318.542 415.1 318.791 415.1H319.675C319.766 415.1 319.845 415.134 319.913 415.202C319.981 415.27 320.015 415.349 320.015 415.44C320.015 415.451 320.01 415.474 319.998 415.508C319.998 415.542 319.998 415.582 319.998 415.627L317.805 426.541C317.771 426.688 317.709 426.802 317.618 426.881C317.539 426.96 317.426 427 317.278 427H316.615C316.457 427 316.332 426.96 316.241 426.881C316.151 426.802 316.088 426.7 316.054 426.575L313.946 420.098L311.855 426.575C311.81 426.7 311.742 426.802 311.651 426.881C311.572 426.96 311.453 427 311.294 427H310.631ZM335.026 427.17C334.063 427.17 333.235 427.006 332.544 426.677C331.853 426.337 331.32 425.821 330.946 425.13C330.572 424.427 330.362 423.549 330.317 422.495C330.306 421.996 330.3 421.52 330.3 421.067C330.3 420.602 330.306 420.121 330.317 419.622C330.362 418.579 330.578 417.712 330.963 417.021C331.36 416.318 331.904 415.797 332.595 415.457C333.298 415.106 334.108 414.93 335.026 414.93C335.955 414.93 336.766 415.106 337.457 415.457C338.16 415.797 338.709 416.318 339.106 417.021C339.503 417.712 339.718 418.579 339.752 419.622C339.775 420.121 339.786 420.602 339.786 421.067C339.786 421.52 339.775 421.996 339.752 422.495C339.718 423.549 339.508 424.427 339.123 425.13C338.749 425.821 338.216 426.337 337.525 426.677C336.834 427.006 336.001 427.17 335.026 427.17ZM335.026 425.725C335.899 425.725 336.607 425.464 337.151 424.943C337.706 424.422 338.007 423.577 338.052 422.41C338.075 421.9 338.086 421.447 338.086 421.05C338.086 420.642 338.075 420.189 338.052 419.69C338.029 418.908 337.882 418.273 337.61 417.786C337.349 417.299 336.998 416.942 336.556 416.715C336.114 416.488 335.604 416.375 335.026 416.375C334.471 416.375 333.972 416.488 333.53 416.715C333.088 416.942 332.731 417.299 332.459 417.786C332.198 418.273 332.051 418.908 332.017 419.69C332.006 420.189 332 420.642 332 421.05C332 421.447 332.006 421.9 332.017 422.41C332.062 423.577 332.363 424.422 332.918 424.943C333.473 425.464 334.176 425.725 335.026 425.725Z" fill="white" fillOpacity="0.4" />
    </g>
    <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
    <text dy="2%" width="300" className="address">
      <textPath startOffset="50%" xlinkHref="#curve">
        {formattedAddress}
      </textPath>
    </text>
    <text x="110" y="280" className="score">{score}</text>
    <text x="390" y="280" className="score">{rank}</text>
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop stopColor="#00B0DD" />
        <stop offset=".5" stopColor="#023373" />
        <stop offset="1" stopColor="#00B0DD" />
      </linearGradient>

      <pattern id="pattern" x="0" y="0" width="300%" height="100%" patternUnits="userSpaceOnUse">
        <rect x="0" y="-50%" width="150%" height="100%" fill="url(#gradient)">
          <animate attributeType="XML"
            attributeName="x"
            id="o1"
            values="0;150%;0"
            begin="0;o1.end+5s"
            dur="1.5s" />

          <animateTransform attributeName="transform" type="rotate"
            from="45" to="45" dur="1.5s" repeatDur="indefinite" />
        </rect>
        <rect x="-150%" y="-50%" width="150%" height="100%" fill="url(#gradient)">
          <animate attributeType="XML"
            values="-150%;0;-150%"
            attributeName="x" begin="0;o1.end+5s"
            dur="1.5s" />
          <animateTransform attributeName="transform" type="rotate"
            from="45 0 0" to="45 0 0" dur="1.5s" repeatDur="indefinite" />
        </rect>
      </pattern>
      <style>
        .address {` { text-anchor: middle; font: lighter 20px sans-serif; fill: #666666; text-transform:uppercase; letter-spacing: 7px; } `}
        .score {` { text-anchor: middle; font: bold 45px sans-serif; fill: white; }`}
      </style>
      <filter id="filter0_d_615_126" x="158.929" y="385.3" width="182.518" height="43.87" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_615_126" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_615_126" result="shape" />
      </filter>
      <linearGradient id="paint1_linear_615_126" x1="250" y1="19" x2="250" y2="481" gradientUnits="userSpaceOnUse">
        <stop stopColor="#002C3A" />
        <stop offset="1" stopColor="#000607" />
      </linearGradient>
      <radialGradient id="paint2_radial_615_126" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(252.5 220.5) rotate(-32.8812) scale(58.9428 46.3491)">
        <stop stopColor="#025A63" />
        <stop offset="1" stopColor="#023346" />
      </radialGradient>
      <radialGradient id="paint5_radial_615_126" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(249 226) rotate(125.032) scale(59.2305 56.6458)">
        <stop stopColor="#03626D" />
        <stop offset="1" stopColor="#01233D" />
      </radialGradient>
      <clipPath id="clip0_615_126">
        <rect width="223" height="223" fill="white" transform="translate(138 138)" />
      </clipPath>
    </defs>
  </svg>


  )
};