(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[165],{7932:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(3366),a=n(7462),o=n(7294),i=n(3961),s=n(7115),l=n(2104),u=n(5463),d=n(5815),p=n(9852);let c=(0,p.ZP)();var m=n(6567),y=n(5893);let b=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,m.Z)(),f=c("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`maxWidth${(0,s.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),h=e=>(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:x}),g=(e,t)=>{let n=e=>(0,l.Z)(t,e),{classes:r,fixed:a,disableGutters:o,maxWidth:i}=e,d={root:["root",i&&`maxWidth${(0,s.Z)(String(i))}`,a&&"fixed",o&&"disableGutters"]};return(0,u.Z)(d,n,r)};var v=n(8216),k=n(948),j=n(1657);let T=function(e={}){let{createStyledComponent:t=f,useThemeProps:n=h,componentName:s="MuiContainer"}=e,l=t(({theme:e,ownerState:t})=>(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,n)=>{let r=e.breakpoints.values[n];return 0!==r&&(t[e.breakpoints.up(n)]={maxWidth:`${r}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>(0,a.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})),u=o.forwardRef(function(e,t){let o=n(e),{className:u,component:d="div",disableGutters:p=!1,fixed:c=!1,maxWidth:m="lg"}=o,x=(0,r.Z)(o,b),f=(0,a.Z)({},o,{component:d,disableGutters:p,fixed:c,maxWidth:m}),h=g(f,s);return(0,y.jsx)(l,(0,a.Z)({as:d,ownerState:f,className:(0,i.Z)(h.root,u),ref:t},x))});return u}({createStyledComponent:(0,k.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`maxWidth${(0,v.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,j.Z)({props:e,name:"MuiContainer"})});var w=T},3160:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/market",function(){return n(9895)}])},3293:function(e,t,n){"use strict";n.d(t,{RP:function(){return s},ns:function(){return c},zG:function(){return p}});var r=n(3454);let a={name:"Ether",symbol:"ETH",decimals:18},o={name:"Matic",symbol:"MATIC",decimals:18},i={name:"Celo",symbol:"CELO",decimals:18};function s(e){let t=p[e];return t.nativeCurrency?{chainId:e,chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:t.urls,blockExplorerUrls:t.blockExplorerUrls}:e}let l=e=>r.env.infuraKey?"https://".concat(e,".infura.io/v3/").concat(r.env.infuraKey):void 0,u={0:{urls:["https://localhost:8545"].filter(Boolean),name:"Local"},1:{urls:[l("mainnet"),r.env.alchemyKey?"https://".concat("eth-mainnet",".alchemyapi.io/v2/").concat(r.env.alchemyKey):void 0,"https://cloudflare-eth.com"].filter(Boolean),name:"Mainnet"},10:{urls:[l("optimism-mainnet"),"https://mainnet.optimism.io"].filter(Boolean),name:"Optimism",nativeCurrency:a,blockExplorerUrls:["https://optimistic.etherscan.io"]},42161:{urls:[l("arbitrum-mainnet"),"https://arb1.arbitrum.io/rpc"].filter(Boolean),name:"Arbitrum One",nativeCurrency:a,blockExplorerUrls:["https://arbiscan.io"]},137:{urls:[l("polygon-mainnet"),"https://polygon-rpc.com"].filter(Boolean),name:"Polygon Mainnet",nativeCurrency:o,blockExplorerUrls:["https://polygonscan.com"]},42220:{urls:["https://forno.celo.org"],name:"Celo",nativeCurrency:i,blockExplorerUrls:["https://explorer.celo.org"]}},d={5:{urls:[l("goerli")].filter(Boolean),name:"G\xf6rli"},420:{urls:[l("optimism-goerli"),"https://goerli.optimism.io"].filter(Boolean),name:"Optimism Goerli",nativeCurrency:a,blockExplorerUrls:["https://goerli-explorer.optimism.io"]},421613:{urls:[l("arbitrum-goerli"),"https://goerli-rollup.arbitrum.io/rpc"].filter(Boolean),name:"Arbitrum Goerli",nativeCurrency:a,blockExplorerUrls:["https://testnet.arbiscan.io"]},80001:{urls:[l("polygon-mumbai")].filter(e=>e),name:"Polygon Mumbai",nativeCurrency:o,blockExplorerUrls:["https://mumbai.polygonscan.com"]},44787:{urls:["https://alfajores-forno.celo-testnet.org"],name:"Celo Alfajores",nativeCurrency:i,blockExplorerUrls:["https://alfajores-blockscout.celo-testnet.org"]}},p={...u,...d},c=Object.keys(p).reduce((e,t)=>{let n=p[Number(t)].urls;return n.length&&(e[Number(t)]=n),e},{})},7372:function(e,t,n){"use strict";n.d(t,{O:function(){return o},P:function(){return i}});var r=n(7985),a=n(4299);let[o,i]=(0,r.initializeConnector)(e=>new a.MetaMask({actions:e}))},9632:function(e,t,n){"use strict";n.d(t,{L:function(){return i},P:function(){return s}});var r=n(7985),a=n(8043),o=n(3293);let[i,s]=(0,r.initializeConnector)(e=>new a.Network({actions:e,urlMap:o.ns}))},2557:function(e,t,n){"use strict";n.d(t,{o:function(){return o}});var r=n(4299),a=n(8043);function o(e){return e instanceof r.MetaMask?"MetaMask":e instanceof a.Network?"Network":"Unknown"}},4001:function(e,t,n){"use strict";n.d(t,{Z:function(){return Q}});var r=n(5893),a=n(4735),o=n.n(a),i=n(7294),s=n(6822),l=n(6720),u=n(2293),d=n(155),p=n(7969),c=n(9750),m=n(9417);let y=e=>{let{children:t,onClick:n}=e;return(0,r.jsx)(m.Z,{size:"small",variant:"contained",color:"primary",onClick:n,sx:{"&.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary":{borderRadius:"50px",maxWidth:"auto",minWidth:"auto",width:40,height:40,display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"black !important",borderWidth:1,borderStyle:"solid",borderColor:"rgba(0,0,0,0.5)","&:hover":{bgcolor:"primary.main",cursor:"pointer"}}},children:(0,r.jsx)(s.Z,{sx:{height:20,width:20,"& svg":{color:"common.white",height:"inherit",width:"inherit"}},children:t})})};var b=n(5861),x=n(1664),f=n.n(x),h=n(1163);let g=e=>{let{label:t,href:n}=e,{pathname:a}=(0,h.useRouter)();return(0,r.jsx)(f(),{href:n,children:(0,r.jsx)(s.Z,{...e,sx:v.root,className:a===n?"active":"",children:(0,r.jsx)(b.Z,{sx:{fontSize:16,fontWeight:"600"},children:t})})})},v={root:{minWidth:"100px",height:"42px",px:5,display:"flex",fontSize:"14px",justifyContent:"center",alignItems:"center",bgcolor:"transparent",color:"rgba(255,255,255,1)",borderRadius:"8px","&.active":{bgcolor:"rgba(255,255,255,1)",color:"black"},"&:hover":{cursor:"pointer",bgcolor:"primary.main",color:"background.paper"}}},k=[{label:"Home",href:"/"},{label:"Farm",href:"/farm"},{label:"Treasury",href:"/treasury"},{label:"Info",href:"/info"}],j=[...k,{label:"Profile",href:"/profile"}],T=()=>{let[e,t]=i.useState(null),n=!!e,a=e=>{t(e.currentTarget)},o=()=>{t(null)};return(0,r.jsxs)(s.Z,{sx:{display:{xs:"block",md:"none"}},children:[(0,r.jsx)(s.Z,{children:(0,r.jsx)(y,{"aria-controls":n?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,onClick:a,children:(0,r.jsx)(c.Z,{})})}),(0,r.jsx)(p.Z,{id:"mobile-menu",anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,open:n,onClose:o,sx:{"& .MuiPaper-root":{p:2,py:2,bgcolor:"rgb(0,0,0,0.5)",backdropFilter:"blur(8px)",borderStyle:"solid",borderColor:"rgba(0,0,0,0.5)",borderWidth:2,boxSizing:"border-box",borderRadius:"8px"},"& .MuiList-root":{p:0}},children:j.map(e=>(0,i.createElement)(g,{...e,key:e.label},e.label))})]})};var w=n(1324);let M=()=>(0,r.jsx)(s.Z,{sx:C.root,children:(0,r.jsx)(s.Z,{sx:C.box,children:k.map(e=>(0,i.createElement)(g,{...e,key:e.label}))})}),C={root:{position:"fixed",top:7,left:"50%",transform:"translateX(-50%)",display:{xs:"none",md:"block"},bgcolor:"rgba(0,0,0,0.25)",borderWidth:1,borderStyle:"solid",borderColor:"rgba(0,0,0,0.5)",p:"4px",borderRadius:"12px",height:51,transition:w.pB[120],"&:hover":{bgcolor:"rgba(0,0,0,0.5)"}},box:{display:"flex",borderRadius:"6px",overflow:"hidden",height:42}};var S=n(7372);let{useChainId:Z,useAccounts:I,useIsActivating:E,useIsActive:N,useProvider:O,useENSNames:P}=S.P,W=()=>{N();let e=E(),[t,n]=(0,i.useState)(void 0);(0,i.useEffect)(()=>{S.O.connectEagerly().catch(()=>{console.debug("Failed to connect eagerly to metamask")})},[]);let a=(0,i.useCallback)(async e=>{try{await S.O.activate(),n(void 0)}catch(e){n(e)}},[S.O,n]);return(0,r.jsx)("button",{onClick:()=>a(0),disabled:e,children:t?"Try again?":"Connect"})},{useChainId:A,useAccounts:R,useIsActivating:B,useIsActive:F,useProvider:_,useENSNames:z}=S.P,L=()=>{let[e,t]=i.useState([]),n=R();console.log("accounts",n);let a=n?n[0]:"",o=a?a.slice(0,5)+"..."+a.slice(a.length-3):null;return(0,r.jsx)(s.Z,{sx:{display:{xs:"none",md:"block"}},children:a?(0,r.jsx)(f(),{href:"/profile",children:(0,r.jsx)(s.Z,{sx:{cursor:"pointer",color:"white"},children:o})}):(0,r.jsx)(W,{})})},U=e=>{let{identity:t=!0}=e;return(0,r.jsx)(u.Z,{sx:G.root,children:(0,r.jsxs)(d.Z,{sx:G.toolbar,children:[(0,r.jsx)("span",{}),(0,r.jsx)(M,{}),t&&(0,r.jsx)(L,{}),(0,r.jsx)(T,{})]})})},G={root:{position:"fixed",zIndex:11,top:{xs:16,md:24},left:{xs:16,md:24},width:{xs:"calc(100% - 32px)",md:"calc(100% - 48px)"},display:"flex",alignItems:"center",flexShrink:1,boxSizing:"border-box",background:"rgba(0,0,0,0.5)",backdropFilter:"blur(8px)",boxShadow:"none",borderStyle:"solid",borderColor:"rgba(0,0,0,0.5)",borderRadius:"8px"},toolbar:{width:"100%",display:"flex",justifyContent:"space-between"}};var $=n(7985),H=n(9632),K=n(2557);let X=[[S.O,S.P],[H.L,H.P]];function q(){let{connector:e}=(0,$.useWeb3React)();return console.log("Priority Connector is: ".concat((0,K.o)(e))),null}function D(){return(0,r.jsx)($.Web3ReactProvider,{connectors:X,children:(0,r.jsx)(q,{})})}let J=e=>{let{children:t,hero:n}=e;return(0,h.useRouter)(),(0,r.jsxs)("main",{className:o().className,children:[(0,r.jsx)(D,{}),(0,r.jsxs)(s.Z,{sx:Y,className:n?"hero":"",children:[(0,r.jsx)(l.ZP,{}),(0,r.jsx)(U,{}),n,t]})]})},Y={pb:"120px",pt:"140px","&.hero":{pt:0}};var Q=J},7167:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(7294),o=n(7309);t.default=function(e){let{nfts:t,createMarketItem:n}=e,[i,s]=(0,a.useState)({contractAddress:"",tokenId:0,price:0}),[l,u]=(0,a.useState)(""),d=e=>{e.preventDefault(),i&&n(o.M.soonabotsAddr,i,l)},p=e=>{let n=e.target.value;console.log("selectedTokenId",n),console.log("nfts",t);let r=t.find(e=>e==n);console.log("foundNft",r),s(r)};return(0,r.jsxs)("div",{className:"sell-product",children:[(0,r.jsx)("h2",{children:"List Your Items for Sale"}),(0,r.jsxs)("form",{onSubmit:d,className:"sell-product-form",children:[(0,r.jsx)("label",{htmlFor:"nftSelect",children:"Select Item:"}),(0,r.jsxs)("select",{id:"nftSelect",onChange:p,children:[(0,r.jsx)("option",{value:"",children:"--Select Item--"}),null==t?void 0:t.map(e=>(0,r.jsxs)("option",{value:e,children:["NFT #",e]},e))]}),(0,r.jsx)("label",{htmlFor:"price",children:"Listing Price (in SMR):"}),(0,r.jsx)("input",{type:"text",id:"price",value:l,onChange:e=>u(e.target.value)}),(0,r.jsx)("button",{type:"submit",disabled:!i,children:"List Item for Sale"})]})]})}},9895:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(5893),a=n(7294),o=n(4146),i=n(5553),s=n(7167),l=n(7191),u=n(7250),d=n(1242),p=n(7309),c=n(9008),m=n.n(c),y=n(6822),b=n(7932);let x=e=>{let{children:t,image:n}=e;return(0,r.jsxs)(y.Z,{sx:{...f.root,backgroundImage:"url(".concat(n,")")},children:[(0,r.jsx)(y.Z,{sx:f.overlay}),(0,r.jsx)(b.Z,{maxWidth:"md",sx:f.content,children:t})]})},f={root:{pt:16,pb:6,height:"50vh",minHeight:"400px",bgcolor:"white",backgroundSize:"cover",backgroundPosition:"center center",mb:6,position:"relative"},content:{position:"relative",display:"flex",justifyContent:"center"},overlay:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(180deg, rgba(24, 22, 22, 0) 0%, #1d1d1d 100%)"}};var h=n(4001);let g=[{id:1,name:"IOTABOTS",description:"IOTABOTS Games and some nice explanation",link:"/iotabots",image:"https://pbs.twimg.com/profile_banners/1453664485063933965/1654275883/1080x360"},{id:2,name:"Soonabots",description:"Soonabots race game now available.",link:"/soonabots",image:"https://images.soonaverse.com/0x69278e7ea657216937b139f070449bf000cbd835/r9k6xyq7f4q/collection_banner.jpeg"}],v=e=>{let{provider:t,account:n}=e,[c,y]=(0,a.useState)([]);(0,a.useEffect)(()=>{},[]),(0,a.useEffect)(()=>{},[n]);let b=async(e,n,r)=>{if(!t)return;let a=t.getSigner(),s=new o.CH(p.M.nftMarketAddr,d.Mt,a),l=new o.CH(e,u.Mt,a),c=await s.getListingPrice(),m=i.parseUnits(r,"ether");try{let e=await l.approve(p.M.nftMarketAddr,n,{gasLimit:5e5});await e.wait(),console.log("approve product:",e)}catch(e){console.error("Error approve product:",e),console.error("Failed to approve product.")}try{let t=await s.createMarketItem(e,n,m,{value:c});await t.wait(),console.log("Market item created successfully")}catch(e){console.error("Error creating market item:",e)}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(m(),{children:[(0,r.jsx)("title",{children:"Bot Market"}),(0,r.jsx)("meta",{name:"description",content:"Trade NFTs for free."}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)(h.Z,{hero:(0,r.jsx)(x,{image:g[0].image}),children:[n&&(0,r.jsx)(s.default,{nfts:[],createMarketItem:b}),n&&(0,r.jsx)(l.default,{})]})]})};var k=v},9008:function(e,t,n){e.exports=n(2636)},7250:function(e){"use strict";e.exports=JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"operator","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')}},function(e){e.O(0,[881,364,146,408,774,888,179],function(){return e(e.s=3160)}),_N_E=e.O()}]);