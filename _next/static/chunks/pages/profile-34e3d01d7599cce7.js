(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{6896:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return n(5392)}])},2314:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(4146),i=n(7372);let{useChainId:s,useAccounts:r,useIsActivating:p,useIsActive:u,useProvider:d,useENSNames:y}=i.P;function o(e,t){let n=d();if(!e||!t||!n)return null;try{return new a.CH(e,t,n.getSigner())}catch(e){return console.error("Failed To Get Contract",e),null}}},8361:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(5553),i=n(7837),s=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),r=n(2314);function p(e,t){let n=(0,r.Z)(t,s),p=(0,i.a)({queryKey:["TokenBalance",t],queryFn:()=>(console.log("contract",n),n)?n.balanceOf(e).then(e=>a.formatEther(e)).catch(e=>({error:e})):"error"});return p}},5392:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return W}});var a=n(5893),i=n(7294),s=n(9008),r=n.n(s),p=n(7932),u=n(5861),d=n(139),y=n(7372),o=n(2557),l=n(5553);function m(e){var t;let{accounts:n,provider:s,ENSNames:r}=e,p=function(e,t){let[n,a]=(0,i.useState)();return(0,i.useEffect)(()=>{if(e&&(null==t?void 0:t.length)){let n=!1;return Promise.all(t.map(t=>e.getBalance(t))).then(e=>{n||a(e)}),()=>{n=!0,a(void 0)}}},[e,t]),n}(s,n);return void 0===n?null:(0,a.jsxs)("div",{children:["Accounts:"," ",(0,a.jsx)("b",{children:0===n.length?"None":null==n?void 0:n.map((e,n)=>(0,a.jsxs)("ul",{style:{margin:0,overflow:"hidden",textOverflow:"ellipsis"},children:[null!==(t=null==r?void 0:r[n])&&void 0!==t?t:e,(null==p?void 0:p[n])?" (Ξ".concat((0,l.formatEther)(p[n]),")"):null]},e))})]})}var c=n(3293);function T(e){var t;let{chainId:n}=e;if(void 0===n)return null;let i=n?null===(t=c.zG[n])||void 0===t?void 0:t.name:void 0;return i?(0,a.jsxs)("div",{children:["Chain:"," ",(0,a.jsxs)("b",{children:[i," (",n,")"]})]}):(0,a.jsxs)("div",{children:["Chain Id: ",(0,a.jsx)("b",{children:n})]})}var f=n(8043);function v(e){var t;let{activeChainId:n,switchChain:i,chainIds:s}=e;return(0,a.jsxs)("select",{value:n,onChange:e=>{i(Number(e.target.value))},disabled:void 0===i,children:[(0,a.jsx)("option",{hidden:!0,disabled:!0,children:"Select chain"}),(0,a.jsx)("option",{value:-1,children:"Default"}),s.map(e=>{var n;return(0,a.jsx)("option",{value:e,children:null!==(t=null===(n=c.zG[e])||void 0===n?void 0:n.name)&&void 0!==t?t:e},e)})]})}function b(e){let{connector:t,activeChainId:n,chainIds:s=Object.keys(c.zG).map(Number)||[],isActivating:r,isActive:p,error:u,setError:d}=e,[y,o]=(0,i.useState)(0);(0,i.useEffect)(()=>{n&&(!y||-1===y)&&o(n)},[y,n]);let l=(0,i.useCallback)(async e=>{o(e);try{if(e===n||-1===e&&void 0!==n){d(void 0);return}-1===e?await t.activate():t instanceof f.Network?await t.activate(e):await t.activate((0,c.RP)(e)),d(void 0)}catch(e){d(e)}},[t,n,d]);return(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,a.jsx)(v,{activeChainId:y,switchChain:l,chainIds:s}),(0,a.jsx)("div",{style:{marginBottom:"1rem"}}),p?u?(0,a.jsx)("button",{onClick:()=>l(y),children:"Try again?"}):(0,a.jsx)("button",{onClick:()=>{(null==t?void 0:t.deactivate)?t.deactivate():t.resetState(),o(0)},children:"Disconnect"}):(0,a.jsx)("button",{onClick:()=>l(y),disabled:r||!y,children:u?"Try again?":"Connect"})]})}function w(e){var t;let{isActivating:n,isActive:i,error:s}=e;return(0,a.jsx)("div",{children:s?(0,a.jsxs)(a.Fragment,{children:["\uD83D\uDD34 ",null!==(t=s.name)&&void 0!==t?t:"Error",s.message?": ".concat(s.message):null]}):n?(0,a.jsx)(a.Fragment,{children:"\uD83D\uDFE1 Connecting"}):i?(0,a.jsx)(a.Fragment,{children:"\uD83D\uDFE2 Connected"}):(0,a.jsx)(a.Fragment,{children:"⚪️ Disconnected"})})}function x(e){let{connector:t,activeChainId:n,chainIds:i,isActivating:s,isActive:r,error:p,setError:u,ENSNames:d,accounts:y,provider:l}=e;return(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"20rem",padding:"1rem",margin:"1rem",overflow:"auto",border:"1px solid",borderRadius:"1rem"},children:[(0,a.jsx)("b",{children:(0,o.o)(t)}),(0,a.jsx)("div",{style:{marginBottom:"1rem"},children:(0,a.jsx)(w,{isActivating:s,isActive:r,error:p})}),(0,a.jsx)(T,{chainId:n}),(0,a.jsx)("div",{style:{marginBottom:"1rem"},children:(0,a.jsx)(m,{accounts:y,provider:l,ENSNames:d})}),(0,a.jsx)(b,{connector:t,activeChainId:n,chainIds:i,isActivating:s,isActive:r,error:p,setError:u})]})}let{useChainId:h,useAccounts:g,useIsActivating:M,useIsActive:j,useProvider:k,useENSNames:I}=y.P;function C(){let e=h(),t=g(),n=M(),s=j(),r=k(),p=I(r),[u,d]=(0,i.useState)(void 0);return(0,i.useEffect)(()=>{y.O.connectEagerly().catch(()=>{console.debug("Failed to connect eagerly to metamask")})},[]),(0,a.jsx)(x,{connector:y.O,activeChainId:e,isActivating:n,isActive:s,error:u,setError:d,accounts:t,provider:r,ENSNames:p})}var E=n(9632);let{useChainId:O,useAccounts:A,useIsActivating:N,useIsActive:F,useProvider:S,useENSNames:D}=E.P,R=Object.keys(c.ns).map(Number);function _(){let e=O(),t=A(),n=N(),s=F(),r=S(),p=D(r),[u,d]=(0,i.useState)(void 0);return(0,i.useEffect)(()=>{E.L.activate().catch(()=>{console.debug("Failed to connect to network")})},[]),(0,a.jsx)(x,{connector:E.L,activeChainId:e,chainIds:R,isActivating:n,isActive:s,error:u,setError:d,accounts:t,provider:r,ENSNames:p})}var P=n(8361),B=n(1378),Z=n(8078),L=JSON.parse('{"L":"0x5FbDB2315678afecb367f032d93F642f64180aa3"}');let G=e=>{let{account:t}=e,{data:n,isError:i,isLoading:s,refetch:r}=(0,P.Z)(t,L.L);return(0,a.jsxs)(a.Fragment,{children:[s?(0,a.jsx)(Z.Z,{variant:"text"}):null,i?(0,a.jsx)("div",{children:"Error"}):null,n?(0,a.jsxs)(u.Z,{variant:"h5",color:"text.secondary",mt:0,children:["You have ",n.toString()," eggs"]}):null]})},{useChainId:z,useAccounts:J,useIsActivating:q,useIsActive:H,useProvider:U,useENSNames:V}=y.P;function W(){let e=J();console.log("accounts",e);let t=H();console.log("isActive",t);let[n,s]=(0,i.useState)(""),{data:y,isError:o,isLoading:l,refetch:m}=(0,P.Z)(n,B.L);return console.log("isActive",t),(0,i.useEffect)(()=>{t&&e&&e.length>0&&(s(e[0]),m())},[t,e]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"Profile"}),(0,a.jsx)("meta",{name:"description",content:"Your IOTABOTS and other NFTs"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(d.Z,{children:(0,a.jsxs)(p.Z,{maxWidth:"md",children:[(0,a.jsx)(u.Z,{variant:"h1",gutterBottom:!0,children:"Profile"}),(0,a.jsx)(u.Z,{variant:"h5",gutterBottom:!0,children:n}),(0,a.jsxs)(u.Z,{variant:"body1",gutterBottom:!0,children:["ChickenNFT Balance: ",null==y?void 0:y.toString()]}),n&&(0,a.jsx)(G,{account:n}),(0,a.jsx)(u.Z,{variant:"h3",gutterBottom:!0,children:"Network Settings"}),(0,a.jsxs)("div",{style:{display:"flex",flexFlow:"wrap",fontFamily:"sans-serif"},children:[(0,a.jsx)(C,{}),(0,a.jsx)(_,{})]})]})})]})}},1378:function(e){"use strict";e.exports=JSON.parse('{"M":[{"inputs":[{"internalType":"address","name":"initialOwner","type":"address"},{"internalType":"address","name":"_eggsNFT","type":"address"},{"internalType":"address payable","name":"_marketingTreasury","type":"address"},{"internalType":"address payable","name":"_developmentTreasury","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ERC721EnumerableForbiddenBatchMint","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721IncorrectOwner","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721InsufficientApproval","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC721InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"ERC721InvalidOperator","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721InvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC721InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC721InvalidSender","type":"error"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721NonexistentToken","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"ERC721OutOfBoundsIndex","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ChickenCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ChickenDied","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"EggHatched","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"EggMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"EggsOwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"nextCycleTimestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardAmount","type":"uint256"}],"name":"NewCycleStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CREATION_COST","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"aliveChickens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"chickenIndices","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"chickens","outputs":[{"internalType":"uint256","name":"attackPower","type":"uint256"},{"internalType":"uint256","name":"defensePower","type":"uint256"},{"internalType":"uint256","name":"intelligencePoints","type":"uint256"},{"internalType":"uint256","name":"speed","type":"uint256"},{"internalType":"uint256","name":"birthTime","type":"uint256"},{"internalType":"uint256","name":"nextEggMintedTime","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"happinessLevel","type":"uint256"},{"internalType":"bool","name":"isDead","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cycleDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"developmentTreasury","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eggMintLockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eggsNFT","outputs":[{"internalType":"contract ChickenEggNFT","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getChickenDetails","outputs":[{"internalType":"uint256","name":"attackPower","type":"uint256"},{"internalType":"uint256","name":"defensePower","type":"uint256"},{"internalType":"uint256","name":"intelligencePoints","type":"uint256"},{"internalType":"uint256","name":"speed","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"nextEggMintedTime","type":"uint256"},{"internalType":"uint256","name":"birthTime","type":"uint256"},{"internalType":"bool","name":"isDead","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingTreasury","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"mintEgg","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextCycleTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_developmentTreasury","type":"address"}],"name":"setDevelopmentTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_marketingTreasury","type":"address"}],"name":"setMarketingTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startNewCycle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAliveChickens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferEggsOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawRewards","outputs":[],"stateMutability":"nonpayable","type":"function"}],"L":"0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"}')}},function(e){e.O(0,[881,453,146,782,517,241,774,888,179],function(){return e(e.s=6896)}),_N_E=e.O()}]);