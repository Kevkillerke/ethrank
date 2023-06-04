import { BadgeParams } from "./Badge";

export const BadgeDefault = ({ address, score, rank }: BadgeParams) => {
  let formattedAddress = address.length === 42 ? `${address.substring(0, 8)}...${address.substring(address.length-8, address.length)}` : address;
  return (<svg 
width="500" 
height="500" 
viewBox="0 0 500 500" fill="none" 
xmlns="http://www.w3.org/2000/svg" 
version="1.1"
baseProfile="full"
xmlnsXlink="http://www.w3.org/1999/xlink">
<g clipPath="url(#clip0_513_113)">
<circle cx="250" cy="250" r="250" fill="#D9048E"/>
<circle cx="250" cy="250" r="231" fill="black"/>
<g clipPath="url(#clip1_513_113)">
<path d="M-18 409.505H23.205V389.07H64.41V386.055H105.615V369.305H146.82V413.525H188.025V395.435H229.23V380.695H270.77V400.46H311.975V376.34H353.18V389.74H394.385V406.825H435.59V386.725H476.795V381.365H518V409.17V500H476.795H435.59H394.385H353.18H311.975H270.77H229.23H188.025H146.82H105.615H64.41H23.205H-18V409.505Z" fill="#D9048E"/>
<path d="M-18 431.615H23.205V424.245H64.41V444.01H105.615V420.225H146.82V410.175H188.025V431.615H229.23V420.895H270.77V404.48H311.975V412.855H353.18V418.215H394.385V408.835H435.59V421.23H476.795V410.51H518V441.665V500H476.795H435.59H394.385H353.18H311.975H270.77H229.23H188.025H146.82H105.615H64.41H23.205H-18V431.615Z" fill="#CC0092"/>
<path d="M-18 479.855H23.205V469.47H64.41V448.03H105.615V460.76H146.82V434.63H188.025V429.94H229.23V449.37H270.77V478.515H311.975V465.115H353.18V433.625H394.385V479.855H435.59V446.69H476.795V476.84H518V436.64V500H476.795H435.59H394.385H353.18H311.975H270.77H229.23H188.025H146.82H105.615H64.41H23.205H-18V479.855Z" fill="#BF0096"/>
</g>
<g filter="url(#filter0_d_513_113)">
<path d="M180.536 431.955C180.764 431.955 180.96 432.038 181.125 432.203C181.291 432.368 181.373 432.565 181.373 432.792V437.163C181.373 437.39 181.291 437.587 181.125 437.752C180.96 437.917 180.764 438 180.536 438H160.944C160.717 438 160.521 437.917 160.355 437.752C160.19 437.587 160.107 437.39 160.107 437.163V417.137C160.107 416.91 160.19 416.713 160.355 416.548C160.521 416.383 160.717 416.3 160.944 416.3H180.226C180.454 416.3 180.65 416.383 180.815 416.548C180.981 416.713 181.063 416.91 181.063 417.137V421.508C181.063 421.735 180.981 421.932 180.815 422.097C180.65 422.262 180.454 422.345 180.226 422.345H168.167V424.298H178.521C178.749 424.298 178.945 424.381 179.11 424.546C179.276 424.711 179.358 424.908 179.358 425.135V429.165C179.358 429.392 179.276 429.589 179.11 429.754C178.945 429.919 178.749 430.002 178.521 430.002H168.167V431.955H180.536ZM207.525 416.3C207.753 416.3 207.949 416.383 208.114 416.548C208.28 416.713 208.362 416.91 208.362 417.137V422.128C208.362 422.355 208.28 422.552 208.114 422.717C207.949 422.882 207.753 422.965 207.525 422.965H200.86V437.163C200.86 437.39 200.778 437.587 200.612 437.752C200.447 437.917 200.251 438 200.023 438H193.637C193.41 438 193.214 437.917 193.048 437.752C192.883 437.587 192.8 437.39 192.8 437.163V422.965H186.135C185.908 422.965 185.712 422.882 185.546 422.717C185.381 422.552 185.298 422.355 185.298 422.128V417.137C185.298 416.91 185.381 416.713 185.546 416.548C185.712 416.383 185.908 416.3 186.135 416.3H207.525ZM233.491 416.3C233.718 416.3 233.915 416.383 234.08 416.548C234.245 416.713 234.328 416.91 234.328 417.137V437.163C234.328 437.39 234.245 437.587 234.08 437.752C233.915 437.917 233.718 438 233.491 438H227.105C226.878 438 226.681 437.917 226.516 437.752C226.351 437.587 226.268 437.39 226.268 437.163V430.56H220.068V437.163C220.068 437.39 219.985 437.587 219.82 437.752C219.655 437.917 219.458 438 219.231 438H212.845C212.618 438 212.421 437.928 212.256 437.783C212.091 437.618 212.008 437.411 212.008 437.163V417.137C212.008 416.91 212.091 416.713 212.256 416.548C212.421 416.383 212.618 416.3 212.845 416.3H219.231C219.458 416.3 219.655 416.383 219.82 416.548C219.985 416.713 220.068 416.91 220.068 417.137V423.492H226.268V417.137C226.268 416.91 226.351 416.713 226.516 416.548C226.681 416.383 226.878 416.3 227.105 416.3H233.491ZM261.813 437.039C261.854 437.122 261.875 437.215 261.875 437.318C261.875 437.504 261.803 437.669 261.658 437.814C261.534 437.938 261.379 438 261.193 438H254.156C253.867 438 253.598 437.928 253.35 437.783C253.123 437.638 252.957 437.452 252.854 437.225L250.126 431.087H247.522V437.163C247.522 437.39 247.439 437.587 247.274 437.752C247.109 437.917 246.912 438 246.685 438H239.989C239.762 438 239.565 437.917 239.4 437.752C239.235 437.587 239.152 437.39 239.152 437.163V417.137C239.152 416.91 239.235 416.713 239.4 416.548C239.565 416.383 239.762 416.3 239.989 416.3H252.048C253.908 416.3 255.53 416.6 256.915 417.199C258.32 417.798 259.395 418.666 260.139 419.803C260.883 420.94 261.255 422.273 261.255 423.802C261.255 426.613 260.17 428.648 258 429.909L261.813 437.039ZM251.397 425.352C251.852 425.352 252.203 425.207 252.451 424.918C252.699 424.608 252.823 424.226 252.823 423.771C252.823 423.316 252.699 422.924 252.451 422.593C252.224 422.242 251.872 422.066 251.397 422.066H247.522V425.352H251.397ZM271.38 436.946C271.111 437.649 270.646 438 269.985 438H264.126C263.94 438 263.775 437.938 263.63 437.814C263.506 437.669 263.444 437.504 263.444 437.318L263.475 437.132L270.233 417.323C270.316 417.054 270.471 416.817 270.698 416.61C270.925 416.403 271.235 416.3 271.628 416.3H280.246C280.639 416.3 280.949 416.403 281.176 416.61C281.403 416.817 281.558 417.054 281.641 417.323L288.399 437.132L288.43 437.318C288.43 437.504 288.358 437.669 288.213 437.814C288.089 437.938 287.934 438 287.748 438H281.889C281.228 438 280.763 437.649 280.494 436.946L279.719 434.776H272.155L271.38 436.946ZM275.937 422.283L273.736 428.731H278.138L275.937 422.283ZM311.885 416.3C312.112 416.3 312.309 416.383 312.474 416.548C312.639 416.713 312.722 416.91 312.722 417.137V437.163C312.722 437.39 312.639 437.587 312.474 437.752C312.309 437.917 312.112 438 311.885 438H306.894C306.398 438 305.985 437.783 305.654 437.349L298.896 428.731V437.163C298.896 437.39 298.813 437.587 298.648 437.752C298.483 437.917 298.286 438 298.059 438H292.293C292.066 438 291.869 437.917 291.704 437.752C291.539 437.587 291.456 437.39 291.456 437.163V417.137C291.456 416.91 291.539 416.713 291.704 416.548C291.869 416.383 292.066 416.3 292.293 416.3H297.315C297.811 416.3 298.214 416.507 298.524 416.92L305.282 426.251V417.137C305.282 416.91 305.365 416.713 305.53 416.548C305.695 416.383 305.892 416.3 306.119 416.3H311.885ZM341.323 436.915C341.405 437.039 341.447 437.173 341.447 437.318C341.447 437.504 341.374 437.669 341.23 437.814C341.106 437.938 340.951 438 340.765 438H332.767C332.291 438 331.919 437.835 331.651 437.504L326.257 430.839V437.163C326.257 437.39 326.174 437.587 326.009 437.752C325.843 437.917 325.647 438 325.42 438H319.034C318.806 438 318.61 437.917 318.445 437.752C318.279 437.587 318.197 437.39 318.197 437.163V417.137C318.197 416.91 318.279 416.713 318.445 416.548C318.61 416.383 318.806 416.3 319.034 416.3H325.42C325.647 416.3 325.843 416.383 326.009 416.548C326.174 416.713 326.257 416.91 326.257 417.137V422.965L331.155 416.827C331.465 416.476 331.847 416.3 332.302 416.3H339.773C339.959 416.3 340.114 416.372 340.238 416.517C340.382 416.641 340.455 416.796 340.455 416.982C340.455 417.147 340.403 417.292 340.3 417.416L332.953 426.375L341.323 436.915ZM163.901 458.17C162.915 458.17 162.087 458.023 161.419 457.728C160.75 457.422 160.234 457.031 159.872 456.555C159.52 456.068 159.333 455.552 159.311 455.008C159.311 454.917 159.345 454.838 159.413 454.77C159.492 454.691 159.583 454.651 159.685 454.651H160.552C160.688 454.651 160.79 454.685 160.858 454.753C160.926 454.821 160.971 454.9 160.994 454.991C161.05 455.263 161.186 455.535 161.402 455.807C161.628 456.068 161.94 456.289 162.337 456.47C162.745 456.64 163.266 456.725 163.901 456.725C164.875 456.725 165.589 456.555 166.043 456.215C166.507 455.864 166.74 455.399 166.74 454.821C166.74 454.424 166.615 454.107 166.366 453.869C166.128 453.62 165.759 453.399 165.261 453.206C164.762 453.013 164.116 452.804 163.323 452.577C162.495 452.339 161.81 452.078 161.266 451.795C160.722 451.512 160.314 451.16 160.042 450.741C159.781 450.322 159.651 449.789 159.651 449.143C159.651 448.531 159.815 447.987 160.144 447.511C160.472 447.024 160.943 446.638 161.555 446.355C162.178 446.072 162.932 445.93 163.816 445.93C164.518 445.93 165.13 446.026 165.652 446.219C166.184 446.4 166.626 446.65 166.978 446.967C167.329 447.273 167.595 447.607 167.777 447.97C167.958 448.321 168.054 448.667 168.066 449.007C168.066 449.086 168.037 449.166 167.981 449.245C167.924 449.313 167.833 449.347 167.709 449.347H166.808C166.728 449.347 166.643 449.324 166.553 449.279C166.473 449.234 166.411 449.149 166.366 449.024C166.298 448.559 166.037 448.168 165.584 447.851C165.13 447.534 164.541 447.375 163.816 447.375C163.079 447.375 162.478 447.517 162.014 447.8C161.56 448.083 161.334 448.525 161.334 449.126C161.334 449.511 161.441 449.834 161.657 450.095C161.872 450.344 162.212 450.565 162.677 450.758C163.141 450.951 163.748 451.155 164.496 451.37C165.402 451.619 166.145 451.886 166.723 452.169C167.301 452.441 167.726 452.787 167.998 453.206C168.281 453.614 168.423 454.141 168.423 454.787C168.423 455.501 168.236 456.113 167.862 456.623C167.488 457.122 166.961 457.507 166.281 457.779C165.612 458.04 164.819 458.17 163.901 458.17ZM179.712 458C179.587 458 179.491 457.966 179.423 457.898C179.355 457.819 179.321 457.722 179.321 457.609V446.508C179.321 446.383 179.355 446.287 179.423 446.219C179.491 446.14 179.587 446.1 179.712 446.1H186.733C186.858 446.1 186.954 446.14 187.022 446.219C187.09 446.287 187.124 446.383 187.124 446.508V447.154C187.124 447.279 187.09 447.375 187.022 447.443C186.954 447.511 186.858 447.545 186.733 447.545H180.953V451.268H186.359C186.484 451.268 186.58 451.308 186.648 451.387C186.716 451.455 186.75 451.551 186.75 451.676V452.305C186.75 452.418 186.716 452.515 186.648 452.594C186.58 452.662 186.484 452.696 186.359 452.696H180.953V456.555H186.869C186.994 456.555 187.09 456.589 187.158 456.657C187.226 456.725 187.26 456.821 187.26 456.946V457.609C187.26 457.722 187.226 457.819 187.158 457.898C187.09 457.966 186.994 458 186.869 458H179.712ZM197.502 458C197.411 458 197.332 457.966 197.264 457.898C197.196 457.83 197.162 457.751 197.162 457.66C197.162 457.603 197.167 457.541 197.179 457.473L201.395 446.474C201.44 446.361 201.502 446.27 201.582 446.202C201.661 446.134 201.78 446.1 201.939 446.1H203.095C203.242 446.1 203.355 446.134 203.435 446.202C203.525 446.27 203.593 446.361 203.639 446.474L207.838 457.473C207.86 457.541 207.872 457.603 207.872 457.66C207.872 457.751 207.838 457.83 207.77 457.898C207.702 457.966 207.622 458 207.532 458H206.665C206.529 458 206.427 457.966 206.359 457.898C206.302 457.83 206.262 457.768 206.24 457.711L205.305 455.297H199.729L198.794 457.711C198.782 457.768 198.743 457.83 198.675 457.898C198.607 457.966 198.505 458 198.369 458H197.502ZM200.222 453.835H204.812L202.517 447.8L200.222 453.835ZM222.018 458.17C221.032 458.17 220.205 458.023 219.536 457.728C218.868 457.422 218.352 457.031 217.989 456.555C217.638 456.068 217.451 455.552 217.428 455.008C217.428 454.917 217.462 454.838 217.53 454.77C217.61 454.691 217.7 454.651 217.802 454.651H218.669C218.805 454.651 218.907 454.685 218.975 454.753C219.043 454.821 219.089 454.9 219.111 454.991C219.168 455.263 219.304 455.535 219.519 455.807C219.746 456.068 220.058 456.289 220.454 456.47C220.862 456.64 221.384 456.725 222.018 456.725C222.993 456.725 223.707 456.555 224.16 456.215C224.625 455.864 224.857 455.399 224.857 454.821C224.857 454.424 224.733 454.107 224.483 453.869C224.245 453.62 223.877 453.399 223.378 453.206C222.88 453.013 222.234 452.804 221.44 452.577C220.613 452.339 219.927 452.078 219.383 451.795C218.839 451.512 218.431 451.16 218.159 450.741C217.899 450.322 217.768 449.789 217.768 449.143C217.768 448.531 217.933 447.987 218.261 447.511C218.59 447.024 219.06 446.638 219.672 446.355C220.296 446.072 221.049 445.93 221.933 445.93C222.636 445.93 223.248 446.026 223.769 446.219C224.302 446.4 224.744 446.65 225.095 446.967C225.447 447.273 225.713 447.607 225.894 447.97C226.076 448.321 226.172 448.667 226.183 449.007C226.183 449.086 226.155 449.166 226.098 449.245C226.042 449.313 225.951 449.347 225.826 449.347H224.925C224.846 449.347 224.761 449.324 224.67 449.279C224.591 449.234 224.529 449.149 224.483 449.024C224.415 448.559 224.155 448.168 223.701 447.851C223.248 447.534 222.659 447.375 221.933 447.375C221.197 447.375 220.596 447.517 220.131 447.8C219.678 448.083 219.451 448.525 219.451 449.126C219.451 449.511 219.559 449.834 219.774 450.095C219.99 450.344 220.33 450.565 220.794 450.758C221.259 450.951 221.865 451.155 222.613 451.37C223.52 451.619 224.262 451.886 224.84 452.169C225.418 452.441 225.843 452.787 226.115 453.206C226.399 453.614 226.54 454.141 226.54 454.787C226.54 455.501 226.353 456.113 225.979 456.623C225.605 457.122 225.078 457.507 224.398 457.779C223.73 458.04 222.936 458.17 222.018 458.17ZM241.705 458.17C240.742 458.17 239.915 458.006 239.223 457.677C238.532 457.337 237.999 456.821 237.625 456.13C237.251 455.427 237.042 454.549 236.996 453.495C236.985 452.996 236.979 452.52 236.979 452.067C236.979 451.602 236.985 451.121 236.996 450.622C237.042 449.579 237.257 448.712 237.642 448.021C238.039 447.318 238.583 446.797 239.274 446.457C239.977 446.106 240.787 445.93 241.705 445.93C242.635 445.93 243.445 446.106 244.136 446.457C244.839 446.797 245.389 447.318 245.785 448.021C246.182 448.712 246.397 449.579 246.431 450.622C246.454 451.121 246.465 451.602 246.465 452.067C246.465 452.52 246.454 452.996 246.431 453.495C246.397 454.549 246.188 455.427 245.802 456.13C245.428 456.821 244.896 457.337 244.204 457.677C243.513 458.006 242.68 458.17 241.705 458.17ZM241.705 456.725C242.578 456.725 243.286 456.464 243.83 455.943C244.386 455.422 244.686 454.577 244.731 453.41C244.754 452.9 244.765 452.447 244.765 452.05C244.765 451.642 244.754 451.189 244.731 450.69C244.709 449.908 244.561 449.273 244.289 448.786C244.029 448.299 243.677 447.942 243.235 447.715C242.793 447.488 242.283 447.375 241.705 447.375C241.15 447.375 240.651 447.488 240.209 447.715C239.767 447.942 239.41 448.299 239.138 448.786C238.878 449.273 238.73 449.908 238.696 450.69C238.685 451.189 238.679 451.642 238.679 452.05C238.679 452.447 238.685 452.9 238.696 453.41C238.742 454.577 239.042 455.422 239.597 455.943C240.153 456.464 240.855 456.725 241.705 456.725ZM258.004 458C257.88 458 257.783 457.966 257.715 457.898C257.647 457.819 257.613 457.722 257.613 457.609V446.508C257.613 446.383 257.647 446.287 257.715 446.219C257.783 446.14 257.88 446.1 258.004 446.1H258.786C258.922 446.1 259.024 446.134 259.092 446.202C259.16 446.259 259.2 446.304 259.211 446.338L264.855 455.008V446.508C264.855 446.383 264.889 446.287 264.957 446.219C265.025 446.14 265.122 446.1 265.246 446.1H266.062C266.187 446.1 266.283 446.14 266.351 446.219C266.431 446.287 266.47 446.383 266.47 446.508V457.592C266.47 457.705 266.431 457.802 266.351 457.881C266.283 457.96 266.193 458 266.079 458H265.263C265.139 458 265.042 457.966 264.974 457.898C264.918 457.83 264.878 457.785 264.855 457.762L259.228 449.177V457.609C259.228 457.722 259.189 457.819 259.109 457.898C259.041 457.966 258.945 458 258.82 458H258.004ZM295.191 458.17C294.228 458.17 293.4 458.006 292.709 457.677C292.018 457.337 291.485 456.821 291.111 456.13C290.737 455.427 290.527 454.549 290.482 453.495C290.471 452.996 290.465 452.52 290.465 452.067C290.465 451.602 290.471 451.121 290.482 450.622C290.527 449.579 290.743 448.712 291.128 448.021C291.525 447.318 292.069 446.797 292.76 446.457C293.463 446.106 294.273 445.93 295.191 445.93C296.12 445.93 296.931 446.106 297.622 446.457C298.325 446.797 298.874 447.318 299.271 448.021C299.668 448.712 299.883 449.579 299.917 450.622C299.94 451.121 299.951 451.602 299.951 452.067C299.951 452.52 299.94 452.996 299.917 453.495C299.883 454.549 299.673 455.427 299.288 456.13C298.914 456.821 298.381 457.337 297.69 457.677C296.999 458.006 296.166 458.17 295.191 458.17ZM295.191 456.725C296.064 456.725 296.772 456.464 297.316 455.943C297.871 455.422 298.172 454.577 298.217 453.41C298.24 452.9 298.251 452.447 298.251 452.05C298.251 451.642 298.24 451.189 298.217 450.69C298.194 449.908 298.047 449.273 297.775 448.786C297.514 448.299 297.163 447.942 296.721 447.715C296.279 447.488 295.769 447.375 295.191 447.375C294.636 447.375 294.137 447.488 293.695 447.715C293.253 447.942 292.896 448.299 292.624 448.786C292.363 449.273 292.216 449.908 292.182 450.69C292.171 451.189 292.165 451.642 292.165 452.05C292.165 452.447 292.171 452.9 292.182 453.41C292.227 454.577 292.528 455.422 293.083 455.943C293.638 456.464 294.341 456.725 295.191 456.725ZM311.49 458C311.365 458 311.269 457.966 311.201 457.898C311.133 457.819 311.099 457.722 311.099 457.609V446.508C311.099 446.383 311.133 446.287 311.201 446.219C311.269 446.14 311.365 446.1 311.49 446.1H312.272C312.408 446.1 312.51 446.134 312.578 446.202C312.646 446.259 312.686 446.304 312.697 446.338L318.341 455.008V446.508C318.341 446.383 318.375 446.287 318.443 446.219C318.511 446.14 318.607 446.1 318.732 446.1H319.548C319.673 446.1 319.769 446.14 319.837 446.219C319.916 446.287 319.956 446.383 319.956 446.508V457.592C319.956 457.705 319.916 457.802 319.837 457.881C319.769 457.96 319.678 458 319.565 458H318.749C318.624 458 318.528 457.966 318.46 457.898C318.403 457.83 318.364 457.785 318.341 457.762L312.714 449.177V457.609C312.714 457.722 312.674 457.819 312.595 457.898C312.527 457.966 312.431 458 312.306 458H311.49ZM331.964 458C331.839 458 331.743 457.966 331.675 457.898C331.607 457.819 331.573 457.722 331.573 457.609V446.508C331.573 446.383 331.607 446.287 331.675 446.219C331.743 446.14 331.839 446.1 331.964 446.1H338.985C339.109 446.1 339.206 446.14 339.274 446.219C339.342 446.287 339.376 446.383 339.376 446.508V447.154C339.376 447.279 339.342 447.375 339.274 447.443C339.206 447.511 339.109 447.545 338.985 447.545H333.205V451.268H338.611C338.735 451.268 338.832 451.308 338.9 451.387C338.968 451.455 339.002 451.551 339.002 451.676V452.305C339.002 452.418 338.968 452.515 338.9 452.594C338.832 452.662 338.735 452.696 338.611 452.696H333.205V456.555H339.121C339.245 456.555 339.342 456.589 339.41 456.657C339.478 456.725 339.512 456.821 339.512 456.946V457.609C339.512 457.722 339.478 457.819 339.41 457.898C339.342 457.966 339.245 458 339.121 458H331.964Z" fill="white"/>
</g>
<path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
<text dy="2%" width="300" className="address">
  <textPath startOffset="50%" xlinkHref="#curve">
    {formattedAddress}
  </textPath>
</text>
<g clipPath="url(#clip2_513_113)">
<path d="M249.48 138L247.984 143.082V290.533L249.48 292.026L317.924 251.568L249.48 138Z" fill="#480146"/>
<path d="M249.48 138L181.034 251.568L249.48 292.026V220.457V138Z" fill="#BA1CA1"/>
<path d="M249.48 304.984L248.637 306.012V358.537L249.48 360.998L317.966 264.547L249.48 304.984Z" fill="#5C0244"/>
<path d="M249.48 360.998V304.984L181.034 264.547L249.48 360.998Z" fill="#D91D9B"/>
<path d="M249.48 292.026L317.924 251.568L249.48 220.457V292.026Z" fill="#180019"/>
<path d="M181.034 251.568L249.48 292.026V220.457L181.034 251.568Z" fill="#500144"/>
</g>
<path d="M335.743 229V226.813H349.351V229H335.743ZM337.363 220.009V217.822H347.731V220.009H337.363ZM336.283 211.909V209.722H348.811V211.909H336.283ZM360.827 229C360.629 229 360.476 228.946 360.368 228.838C360.26 228.712 360.206 228.559 360.206 228.379V210.748C360.206 210.55 360.26 210.397 360.368 210.289C360.476 210.163 360.629 210.1 360.827 210.1H367.415C369.449 210.1 371.06 210.577 372.248 211.531C373.436 212.485 374.03 213.898 374.03 215.77C374.03 217.156 373.679 218.29 372.977 219.172C372.293 220.036 371.357 220.639 370.169 220.981L374.327 228.163C374.381 228.271 374.408 228.37 374.408 228.46C374.408 228.604 374.345 228.73 374.219 228.838C374.111 228.946 373.985 229 373.841 229H372.545C372.239 229 372.014 228.919 371.87 228.757C371.726 228.595 371.6 228.433 371.492 228.271L367.577 221.413H362.852V228.379C362.852 228.559 362.789 228.712 362.663 228.838C362.555 228.946 362.402 229 362.204 229H360.827ZM362.852 219.118H367.307C368.657 219.118 369.665 218.839 370.331 218.281C370.997 217.705 371.33 216.859 371.33 215.743C371.33 214.645 370.997 213.808 370.331 213.232C369.683 212.656 368.675 212.368 367.307 212.368H362.852V219.118ZM383.514 229C383.37 229 383.244 228.946 383.136 228.838C383.028 228.73 382.974 228.604 382.974 228.46C382.974 228.37 382.983 228.271 383.001 228.163L389.697 210.694C389.769 210.514 389.868 210.37 389.994 210.262C390.12 210.154 390.309 210.1 390.561 210.1H392.397C392.631 210.1 392.811 210.154 392.937 210.262C393.081 210.37 393.189 210.514 393.261 210.694L399.93 228.163C399.966 228.271 399.984 228.37 399.984 228.46C399.984 228.604 399.93 228.73 399.822 228.838C399.714 228.946 399.588 229 399.444 229H398.067C397.851 229 397.689 228.946 397.581 228.838C397.491 228.73 397.428 228.631 397.392 228.541L395.907 224.707H387.051L385.566 228.541C385.548 228.631 385.485 228.73 385.377 228.838C385.269 228.946 385.107 229 384.891 229H383.514ZM387.834 222.385H395.124L391.479 212.8L387.834 222.385ZM410.377 229C410.179 229 410.026 228.946 409.918 228.838C409.81 228.712 409.756 228.559 409.756 228.379V210.748C409.756 210.55 409.81 210.397 409.918 210.289C410.026 210.163 410.179 210.1 410.377 210.1H411.619C411.835 210.1 411.997 210.154 412.105 210.262C412.213 210.352 412.276 210.424 412.294 210.478L421.258 224.248V210.748C421.258 210.55 421.312 210.397 421.42 210.289C421.528 210.163 421.681 210.1 421.879 210.1H423.175C423.373 210.1 423.526 210.163 423.634 210.289C423.76 210.397 423.823 210.55 423.823 210.748V228.352C423.823 228.532 423.76 228.685 423.634 228.811C423.526 228.937 423.382 229 423.202 229H421.906C421.708 229 421.555 228.946 421.447 228.838C421.357 228.73 421.294 228.658 421.258 228.622L412.321 214.987V228.379C412.321 228.559 412.258 228.712 412.132 228.838C412.024 228.946 411.871 229 411.673 229H410.377ZM436.009 229C435.811 229 435.658 228.946 435.55 228.838C435.442 228.712 435.388 228.559 435.388 228.379V210.748C435.388 210.55 435.442 210.397 435.55 210.289C435.658 210.163 435.811 210.1 436.009 210.1H437.359C437.557 210.1 437.71 210.163 437.818 210.289C437.944 210.397 438.007 210.55 438.007 210.748V217.444L445.216 210.532C445.288 210.46 445.405 210.37 445.567 210.262C445.747 210.154 445.981 210.1 446.269 210.1H447.727C447.871 210.1 447.997 210.154 448.105 210.262C448.213 210.37 448.267 210.496 448.267 210.64C448.267 210.784 448.231 210.901 448.159 210.991L439.816 219.145L448.699 228.082C448.789 228.19 448.834 228.316 448.834 228.46C448.834 228.604 448.78 228.73 448.672 228.838C448.564 228.946 448.438 229 448.294 229H446.782C446.476 229 446.242 228.946 446.08 228.838C445.918 228.712 445.801 228.622 445.729 228.568L438.007 220.954V228.379C438.007 228.559 437.944 228.712 437.818 228.838C437.71 228.946 437.557 229 437.359 229H436.009Z" fill="white" fillOpacity="0.52"/>
<text x="110" y="280" className="score">{score}</text>
<path d="M56.1529 229.27C54.5869 229.27 53.2729 229.036 52.2109 228.568C51.1489 228.082 50.3299 227.461 49.7539 226.705C49.1959 225.931 48.8989 225.112 48.8629 224.248C48.8629 224.104 48.9169 223.978 49.0249 223.87C49.1509 223.744 49.2949 223.681 49.4569 223.681H50.8339C51.0499 223.681 51.2119 223.735 51.3199 223.843C51.4279 223.951 51.4999 224.077 51.5359 224.221C51.6259 224.653 51.8419 225.085 52.1839 225.517C52.5439 225.931 53.0389 226.282 53.6689 226.57C54.3169 226.84 55.1449 226.975 56.1529 226.975C57.7009 226.975 58.8349 226.705 59.5549 226.165C60.2929 225.607 60.6619 224.869 60.6619 223.951C60.6619 223.321 60.4639 222.817 60.0679 222.439C59.6899 222.043 59.1049 221.692 58.3129 221.386C57.5209 221.08 56.4949 220.747 55.2349 220.387C53.9209 220.009 52.8319 219.595 51.9679 219.145C51.1039 218.695 50.4559 218.137 50.0239 217.471C49.6099 216.805 49.4029 215.959 49.4029 214.933C49.4029 213.961 49.6639 213.097 50.1859 212.341C50.7079 211.567 51.4549 210.955 52.4269 210.505C53.4169 210.055 54.6139 209.83 56.0179 209.83C57.1339 209.83 58.1059 209.983 58.9339 210.289C59.7799 210.577 60.4819 210.973 61.0399 211.477C61.5979 211.963 62.0209 212.494 62.3089 213.07C62.5969 213.628 62.7499 214.177 62.7679 214.717C62.7679 214.843 62.7229 214.969 62.6329 215.095C62.5429 215.203 62.3989 215.257 62.2009 215.257H60.7699C60.6439 215.257 60.5089 215.221 60.3649 215.149C60.2389 215.077 60.1399 214.942 60.0679 214.744C59.9599 214.006 59.5459 213.385 58.8259 212.881C58.1059 212.377 57.1699 212.125 56.0179 212.125C54.8479 212.125 53.8939 212.35 53.1559 212.8C52.4359 213.25 52.0759 213.952 52.0759 214.906C52.0759 215.518 52.2469 216.031 52.5889 216.445C52.9309 216.841 53.4709 217.192 54.2089 217.498C54.9469 217.804 55.9099 218.128 57.0979 218.47C58.5379 218.866 59.7169 219.289 60.6349 219.739C61.5529 220.171 62.2279 220.72 62.6599 221.386C63.1099 222.034 63.3349 222.871 63.3349 223.897C63.3349 225.031 63.0379 226.003 62.4439 226.813C61.8499 227.605 61.0129 228.217 59.9329 228.649C58.8709 229.063 57.6109 229.27 56.1529 229.27ZM80.5628 229.27C78.9068 229.27 77.5298 228.964 76.4318 228.352C75.3518 227.74 74.5328 226.885 73.9748 225.787C73.4168 224.689 73.1108 223.411 73.0568 221.953C73.0388 221.215 73.0298 220.423 73.0298 219.577C73.0298 218.731 73.0388 217.921 73.0568 217.147C73.1108 215.689 73.4168 214.411 73.9748 213.313C74.5328 212.215 75.3518 211.36 76.4318 210.748C77.5298 210.136 78.9068 209.83 80.5628 209.83C81.8048 209.83 82.8938 210.001 83.8298 210.343C84.7658 210.685 85.5398 211.144 86.1518 211.72C86.7818 212.296 87.2588 212.944 87.5828 213.664C87.9068 214.366 88.0868 215.095 88.1228 215.851C88.1408 216.013 88.0868 216.148 87.9608 216.256C87.8528 216.364 87.7178 216.418 87.5558 216.418H86.0708C85.9088 216.418 85.7648 216.373 85.6388 216.283C85.5308 216.193 85.4498 216.031 85.3958 215.797C85.0898 214.393 84.5138 213.43 83.6678 212.908C82.8398 212.386 81.7958 212.125 80.5358 212.125C79.0958 212.125 77.9528 212.539 77.1068 213.367C76.2608 214.177 75.8018 215.482 75.7298 217.282C75.6758 218.758 75.6758 220.27 75.7298 221.818C75.8018 223.618 76.2608 224.932 77.1068 225.76C77.9528 226.57 79.0958 226.975 80.5358 226.975C81.7958 226.975 82.8398 226.714 83.6678 226.192C84.5138 225.67 85.0898 224.707 85.3958 223.303C85.4498 223.069 85.5308 222.907 85.6388 222.817C85.7648 222.727 85.9088 222.682 86.0708 222.682H87.5558C87.7178 222.682 87.8528 222.736 87.9608 222.844C88.0868 222.952 88.1408 223.087 88.1228 223.249C88.0868 224.005 87.9068 224.743 87.5828 225.463C87.2588 226.165 86.7818 226.804 86.1518 227.38C85.5398 227.956 84.7658 228.415 83.8298 228.757C82.8938 229.099 81.8048 229.27 80.5628 229.27ZM105.403 229.27C103.873 229.27 102.559 229.009 101.461 228.487C100.363 227.947 99.5172 227.128 98.9232 226.03C98.3292 224.914 97.9962 223.519 97.9242 221.845C97.9062 221.053 97.8972 220.297 97.8972 219.577C97.8972 218.839 97.9062 218.074 97.9242 217.282C97.9962 215.626 98.3382 214.249 98.9502 213.151C99.5802 212.035 100.444 211.207 101.542 210.667C102.658 210.109 103.945 209.83 105.403 209.83C106.879 209.83 108.166 210.109 109.264 210.667C110.38 211.207 111.253 212.035 111.883 213.151C112.513 214.249 112.855 215.626 112.909 217.282C112.945 218.074 112.963 218.839 112.963 219.577C112.963 220.297 112.945 221.053 112.909 221.845C112.855 223.519 112.522 224.914 111.91 226.03C111.316 227.128 110.47 227.947 109.372 228.487C108.274 229.009 106.951 229.27 105.403 229.27ZM105.403 226.975C106.789 226.975 107.914 226.561 108.778 225.733C109.66 224.905 110.137 223.564 110.209 221.71C110.245 220.9 110.263 220.18 110.263 219.55C110.263 218.902 110.245 218.182 110.209 217.39C110.173 216.148 109.939 215.14 109.507 214.366C109.093 213.592 108.535 213.025 107.833 212.665C107.131 212.305 106.321 212.125 105.403 212.125C104.521 212.125 103.729 212.305 103.027 212.665C102.325 213.025 101.758 213.592 101.326 214.366C100.912 215.14 100.678 216.148 100.624 217.39C100.606 218.182 100.597 218.902 100.597 219.55C100.597 220.18 100.606 220.9 100.624 221.71C100.696 223.564 101.173 224.905 102.055 225.733C102.937 226.561 104.053 226.975 105.403 226.975ZM124.405 229C124.207 229 124.054 228.946 123.946 228.838C123.838 228.712 123.784 228.559 123.784 228.379V210.748C123.784 210.55 123.838 210.397 123.946 210.289C124.054 210.163 124.207 210.1 124.405 210.1H130.993C133.027 210.1 134.638 210.577 135.826 211.531C137.014 212.485 137.608 213.898 137.608 215.77C137.608 217.156 137.257 218.29 136.555 219.172C135.871 220.036 134.935 220.639 133.747 220.981L137.905 228.163C137.959 228.271 137.986 228.37 137.986 228.46C137.986 228.604 137.923 228.73 137.797 228.838C137.689 228.946 137.563 229 137.419 229H136.123C135.817 229 135.592 228.919 135.448 228.757C135.304 228.595 135.178 228.433 135.07 228.271L131.155 221.413H126.43V228.379C126.43 228.559 126.367 228.712 126.241 228.838C126.133 228.946 125.98 229 125.782 229H124.405ZM126.43 219.118H130.885C132.235 219.118 133.243 218.839 133.909 218.281C134.575 217.705 134.908 216.859 134.908 215.743C134.908 214.645 134.575 213.808 133.909 213.232C133.261 212.656 132.253 212.368 130.885 212.368H126.43V219.118ZM148.982 229C148.784 229 148.631 228.946 148.523 228.838C148.415 228.712 148.361 228.559 148.361 228.379V210.748C148.361 210.55 148.415 210.397 148.523 210.289C148.631 210.163 148.784 210.1 148.982 210.1H160.133C160.331 210.1 160.484 210.163 160.592 210.289C160.7 210.397 160.754 210.55 160.754 210.748V211.774C160.754 211.972 160.7 212.125 160.592 212.233C160.484 212.341 160.331 212.395 160.133 212.395H150.953V218.308H159.539C159.737 218.308 159.89 218.371 159.998 218.497C160.106 218.605 160.16 218.758 160.16 218.956V219.955C160.16 220.135 160.106 220.288 159.998 220.414C159.89 220.522 159.737 220.576 159.539 220.576H150.953V226.705H160.349C160.547 226.705 160.7 226.759 160.808 226.867C160.916 226.975 160.97 227.128 160.97 227.326V228.379C160.97 228.559 160.916 228.712 160.808 228.838C160.7 228.946 160.547 229 160.349 229H148.982Z" fill="white" fillOpacity="0.52"/>
<text x="390" y="280" className="score">{rank}</text>
</g>
<defs>
<style>
  .address { ` { text-anchor: middle; font: lighter 20px sans-serif; fill: #666666; text-transform:uppercase; letter-spacing: 7px; } ` }
  .score { ` { text-anchor: middle; font: bold 45px sans-serif; fill: white; }` }
</style>
<filter id="filter0_d_513_113" x="159.311" y="416.3" width="182.136" height="43.8701" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_513_113"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_513_113" result="shape"/>
</filter>
<clipPath id="clip0_513_113">
<rect width="500" height="500" rx="249" fill="white"/>
</clipPath>
<clipPath id="clip1_513_113">
<rect width="536" height="259" fill="white" transform="translate(-18 241)"/>
</clipPath>
<clipPath id="clip2_513_113">
<rect width="223" height="223" fill="white" transform="translate(138 138)"/>
</clipPath>
</defs>
</svg>
)};