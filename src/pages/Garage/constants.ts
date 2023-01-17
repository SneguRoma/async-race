export const inputBlock = (doWhat: string) => `
<div>
  <input type="text" class="input-text ${doWhat}-input">
  <button class="button ${doWhat}-color">choose color</button>
  <button class="button ${doWhat}-button">${doWhat}</button>  
</div>
`;

export const buttonsBlock = (doWhatFirst: string, doWhatSec: string, doWhatThree: string) => `
<div>  
  <button class="button ${doWhatFirst}-button">${doWhatFirst}</button>
  <button class="button ${doWhatSec}-button">${doWhatSec}</button>
  <button class="button ${doWhatThree}-button">${doWhatThree}</button>    
</div>
`;

export const carImage = () => `
<svg fill="#000000" height="50px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.384 460.384" xml:space="preserve">
<g id="SVGRepo_bgCarrier" stroke-width="0" />
<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
<g id="SVGRepo_iconCarrier"> <g> <path  d="M95.252,283.11c-13.807,0-25.039,11.232-25.039,25.039s11.232,25.039,25.039,25.039s25.039-11.233,25.039-25.039 S109.059,283.11,95.252,283.11z M95.252,318.188c-5.536,0-10.039-4.504-10.039-10.039s4.503-10.039,10.039-10.039 s10.039,4.503,10.039,10.039S100.788,318.188,95.252,318.188z"/> <path d="M357.012,283.11c-13.807,0-25.04,11.232-25.04,25.039s11.233,25.039,25.04,25.039c13.806,0,25.038-11.233,25.038-25.039 S370.818,283.11,357.012,283.11z M357.012,318.188c-5.536,0-10.04-4.504-10.04-10.039s4.504-10.039,10.04-10.039 c5.535,0,10.038,4.503,10.038,10.039S362.547,318.188,357.012,318.188z"/> <path d="M409.227,196.421l-66.917-7.645l-35.714-58.056c-10.905-17.728-30.61-28.741-51.424-28.741H133.676 c-34.925,0-65.792,23.518-75.063,57.193l-0.948,3.445c-4.607,16.733-17.845,30.052-34.549,34.762 C9.506,201.217,0,213.773,0,227.914v83.012c0,4.142,3.358,7.5,7.5,7.5h38.557c4.757,22.798,25.006,39.978,49.195,39.978 s44.438-17.18,49.195-39.978h163.37c4.757,22.798,25.006,39.978,49.195,39.978s44.438-17.18,49.195-39.978h40.477 c3.813,0,7.02-2.861,7.452-6.65l5.874-51.483C463.614,228.69,440.834,200.037,409.227,196.421z M15,294.313h31.949 c-0.843,2.938-1.43,5.983-1.724,9.113H15V294.313z M95.252,343.404c-19.44,0-35.255-15.815-35.255-35.255 s15.815-35.256,35.255-35.256s35.255,15.816,35.255,35.256S114.692,343.404,95.252,343.404z M357.012,343.404 c-19.44,0-35.255-15.815-35.255-35.255s15.815-35.256,35.255-35.256s35.255,15.816,35.255,35.256S376.452,343.404,357.012,343.404z M357.012,257.893c-16.987,0-32.021,8.48-41.122,21.42H182.425c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h126.284 c-0.843,2.938-1.43,5.983-1.724,9.113H145.279c-2.389-25.504-23.909-45.533-50.027-45.533c-16.987,0-32.021,8.48-41.122,21.42H15 v-51.399c0-7.455,5.012-14.075,12.187-16.098c21.728-6.126,38.947-23.452,44.94-45.218l0.948-3.445 c7.484-27.186,32.405-46.174,60.601-46.174h121.496c15.643,0,30.452,8.277,38.647,21.6l37.626,61.164 c1.207,1.962,3.249,3.26,5.537,3.522l70.541,8.059c16.002,1.831,28.943,12.335,34.67,26.276h-23.413c-4.142,0-7.5,3.358-7.5,7.5 s3.358,7.5,7.5,7.5h26.578c0.052,1.975-0.023,3.975-0.253,5.993l-2.364,20.72h-44.608 C389.033,266.373,373.998,257.893,357.012,257.893z M407.038,303.426c-0.293-3.13-0.881-6.175-1.724-9.113h35.716l-1.04,9.113 H407.038z"/> <path d="M255.565,215.222h-15.76c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h15.76c4.142,0,7.5-3.358,7.5-7.5 S259.708,215.222,255.565,215.222z"/> <path d="M154.846,222.722c0-4.142-3.358-7.5-7.5-7.5h-15.76c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h15.76 C151.488,230.222,154.846,226.864,154.846,222.722z"/> <path d="M164.136,283.941c-1.314-3.113-4.658-5.069-8.025-4.546c-3.049,0.474-5.522,2.768-6.213,5.776 c-1.496,6.51,6.051,11.564,11.54,7.829C164.343,291.024,165.476,287.186,164.136,283.941 C163.946,283.491,164.326,284.401,164.136,283.941z"/> <path d="M286.014,143.391c-6.531-10.637-18.348-17.245-30.841-17.245h-121.5c-24.087,0-45.371,16.217-51.761,39.443l-0.943,3.438 c-2.468,8.956-6.268,24.34-6.429,24.991c-0.553,2.238-0.045,4.606,1.376,6.422c1.422,1.815,3.599,2.876,5.905,2.876h227.64 c2.717,0,5.222-1.469,6.547-3.841c1.326-2.372,1.265-5.275-0.159-7.589L286.014,143.391z M199.352,141.145v47.169h-69.054v-47.018 c1.115-0.098,2.24-0.151,3.375-0.151H199.352z M95.432,173.002l0.944-3.441c2.86-10.395,9.865-18.839,18.922-23.747v42.499H91.432 C92.697,183.321,94.242,177.323,95.432,173.002z M214.352,188.314v-47.169h40.821c7.316,0,14.235,3.868,18.062,10.1l22.807,37.069 H214.352z"/> </g> </g>
</svg>
`
const carImg = carImage();


export const carImage2 = (color: string) => `
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="60px" height="60px" viewBox="0 0 1280.000000 640.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
fill=${color} stroke="none">
<path d="M3525 5341 c-72 -18 -79 -28 -90 -121 -4 -30 -11 -62 -16 -71 -4 -9
-97 -51 -206 -94 -774 -304 -1348 -540 -1603 -661 -163 -77 -222 -91 -421
-104 -85 -5 -170 -14 -189 -20 -101 -32 -362 -58 -620 -63 l-115 -2 -47 -80
c-47 -78 -47 -80 -29 -100 34 -36 35 -77 5 -177 -30 -99 -34 -178 -19 -370 5
-67 4 -88 -6 -88 -29 0 -83 -56 -110 -114 -50 -106 -74 -343 -48 -467 13 -58
13 -62 3 -159 -5 -54 16 -238 28 -244 2 -1 29 -20 61 -41 73 -49 123 -103 132
-143 17 -79 167 -155 355 -181 104 -15 969 -97 1087 -104 l32 -2 5 160 c7 230
50 394 146 559 281 479 917 673 1405 429 316 -159 530 -424 598 -742 22 -106
29 -365 13 -519 l-8 -82 3002 0 c2855 0 3002 1 2995 18 -33 87 -56 325 -45
461 28 320 177 567 459 759 399 273 847 282 1243 24 239 -157 397 -392 460
-687 18 -84 15 -341 -5 -430 -8 -38 -14 -71 -12 -73 7 -8 386 20 478 34 180
28 253 65 304 152 24 41 28 57 28 127 -1 44 -9 117 -20 163 -18 79 -18 88 -2
190 31 199 40 306 41 497 1 176 -1 195 -23 260 -46 135 -103 190 -283 274
-222 104 -633 220 -1168 330 -523 108 -1524 210 -2054 211 l-229 0 -236 139
c-813 477 -1593 884 -1852 966 -498 157 -1598 195 -2892 100 l-188 -14 -47 30
c-92 58 -223 89 -297 70z m1912 -311 c13 -45 58 -305 88 -515 33 -226 74 -539
71 -542 -7 -7 -1672 40 -2054 58 -357 16 -464 56 -573 215 -62 91 -87 225 -59
326 12 40 56 74 192 148 369 198 799 289 1618 340 246 15 290 16 510 16 l194
-1 13 -45z m649 10 c383 -36 717 -86 934 -139 210 -52 451 -163 720 -332 141
-88 379 -259 380 -271 0 -5 -14 -8 -32 -8 -48 0 -114 -37 -140 -78 -24 -39
-30 -113 -15 -189 l9 -43 -904 0 -904 0 -176 540 -175 540 47 0 c25 0 141 -9
256 -20z"/>
<path d="M2617 3125 c-431 -82 -774 -440 -838 -875 -17 -117 -7 -292 24 -410
113 -436 497 -751 947 -777 507 -29 959 313 1076 813 28 117 26 348 -4 467
-94 378 -383 670 -760 768 -105 27 -336 34 -445 14z m378 -310 c84 -21 209
-85 280 -142 116 -94 210 -242 251 -393 23 -87 24 -260 0 -355 -58 -237 -242
-439 -473 -519 -531 -186 -1074 277 -969 828 30 152 94 274 206 386 111 110
237 178 385 206 84 16 235 11 320 -11z"/>
<path d="M2918 2568 c2 -90 7 -167 12 -172 17 -17 108 58 201 166 l51 57 -48
31 c-52 33 -131 65 -185 75 l-34 6 3 -163z"/>
<path d="M2591 2700 c-62 -22 -167 -82 -164 -94 3 -13 237 -216 249 -216 7 0
15 7 18 16 8 20 8 127 -1 232 -7 95 -8 96 -102 62z"/>
<path d="M3209 2355 c-57 -64 -105 -123 -107 -131 -6 -25 46 -35 157 -29 58 3
121 8 139 11 33 5 34 6 27 42 -7 44 -64 167 -92 201 l-19 24 -105 -118z"/>
<path d="M2260 2409 c-31 -44 -68 -133 -77 -186 l-6 -33 155 0 c165 0 201 9
181 44 -13 24 -204 216 -214 216 -5 0 -22 -18 -39 -41z"/>
<path d="M2786 2354 c-36 -35 0 -87 44 -64 26 14 26 56 1 70 -25 13 -27 13
-45 -6z"/>
<path d="M2751 2186 c-57 -32 -68 -111 -22 -157 43 -42 101 -43 143 -1 42 42
41 100 -1 143 -33 32 -78 38 -120 15z"/>
<path d="M2560 2136 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20
-54 2z"/>
<path d="M3002 2124 c-27 -19 -28 -36 -3 -58 25 -23 61 -6 61 29 0 33 -30 49
-58 29z"/>
<path d="M2245 1993 c-77 -6 -76 -5 -59 -65 16 -55 61 -146 92 -186 l18 -23
103 122 c57 67 104 129 105 138 1 14 -14 16 -104 17 -58 0 -127 -1 -155 -3z"/>
<path d="M3165 1981 c-44 -4 -61 -10 -63 -22 -3 -16 210 -229 228 -229 22 0
86 141 105 228 l7 32 -109 -2 c-59 -1 -135 -4 -168 -7z"/>
<path d="M2776 1914 c-19 -18 -19 -20 -6 -45 6 -11 21 -19 35 -19 20 0 45 24
45 44 0 10 -32 36 -45 36 -7 0 -21 -7 -29 -16z"/>
<path d="M2589 1743 c-86 -90 -139 -151 -139 -162 0 -25 179 -101 236 -101
l27 0 -7 143 c-9 166 -13 187 -35 187 -9 0 -46 -30 -82 -67z"/>
<path d="M2936 1801 c-6 -10 -24 -168 -29 -258 -3 -60 -2 -63 19 -63 79 0 262
68 248 92 -5 7 -53 64 -108 126 -93 105 -117 124 -130 103z"/>
<path d="M10723 3125 c-318 -58 -597 -266 -743 -555 -223 -441 -98 -996 289
-1288 112 -84 188 -125 311 -166 274 -91 545 -70 802 61 552 282 735 983 392
1500 -225 339 -651 521 -1051 448z m385 -315 c348 -98 579 -443 532 -796 -67
-508 -596 -796 -1055 -574 -239 116 -396 352 -412 620 -20 335 192 640 516
745 122 40 289 42 419 5z"/>
<path d="M11017 2568 c3 -90 9 -167 14 -172 13 -14 53 18 155 122 l95 97 -23
18 c-50 40 -189 97 -235 97 -10 0 -11 -33 -6 -162z"/>
<path d="M10705 2706 c-50 -16 -133 -58 -163 -82 l-23 -19 121 -107 c67 -60
128 -108 135 -108 23 0 27 39 20 186 -8 162 -4 157 -90 130z"/>
<path d="M11307 2354 c-59 -65 -107 -126 -107 -136 0 -11 11 -18 38 -22 44 -7
278 7 289 17 15 16 -51 183 -94 236 l-19 24 -107 -119z"/>
<path d="M10362 2413 c-39 -62 -70 -134 -78 -184 l-7 -39 152 0 c86 0 161 5
172 10 17 10 18 13 5 38 -8 15 -59 71 -114 125 l-99 99 -31 -49z"/>
<path d="M10888 2359 c-24 -14 -23 -56 2 -69 44 -23 80 29 44 64 -18 19 -23
19 -46 5z"/>
<path d="M10851 2187 c-49 -29 -66 -101 -35 -146 9 -13 32 -29 50 -37 29 -12
39 -12 68 0 99 41 85 180 -19 192 -24 3 -50 -1 -64 -9z"/>
<path d="M10660 2136 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20
-54 2z"/>
<path d="M11096 2124 c-9 -8 -16 -22 -16 -29 0 -13 26 -45 36 -45 20 0 44 25
44 45 0 14 -8 29 -19 35 -25 13 -27 13 -45 -6z"/>
<path d="M10335 1991 c-60 -6 -60 -6 -57 -36 9 -69 104 -248 122 -229 57 61
210 250 207 258 -4 12 -176 17 -272 7z"/>
<path d="M11267 1983 c-68 -5 -79 -19 -47 -60 23 -31 200 -193 210 -193 3 0
20 24 37 53 29 48 52 111 67 180 l6 27 -107 -2 c-60 -1 -134 -3 -166 -5z"/>
<path d="M10870 1910 c-16 -31 4 -62 38 -58 21 2 28 9 30 32 5 45 -47 65 -68
26z"/>
<path d="M10651 1703 c-56 -59 -101 -113 -101 -120 0 -28 172 -103 237 -103
l26 0 -7 123 c-10 179 -15 207 -36 207 -10 0 -63 -48 -119 -107z"/>
<path d="M11035 1801 c-7 -12 -23 -144 -29 -243 -4 -77 -4 -78 19 -78 45 0
130 22 193 51 l64 29 -19 23 c-65 82 -198 227 -209 227 -7 0 -15 -4 -19 -9z"/>
</g>
</svg>
`

const carImg2 = carImage2('#000000');

export const lineContainer = (color: string) => `
<div class="car-container">
  <button class="button select-car-button">select</button>
  <button class="button remove-car-button">remove</button> 
  <span>name tachki</span> 
</div>
<div class="race-line-container">
  <div class="race-control">
    <button class="button car-start-button">start</button>
    <button class="button car-stop-button">stop</button>
  </div>
  <div class="car-road">
      <div class="car">
       ${carImage2(color)}
      </div>
     <div class="finish">∏</div>
  </div>
  <div class="line"></div>
</div>
`