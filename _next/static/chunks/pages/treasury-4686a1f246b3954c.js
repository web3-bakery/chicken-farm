(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[761],{891:function(e,t,n){"use strict";n.d(t,{ZP:function(){return F}});var a=n(3366),i=n(7462),s=n(7294),r=n(3961),p=n(5463),o=n(3247),u=n(4581),l=n(948),d=n(1657),y=n(7739),m=n(9314),c=n(8974),b=n(1705),f=n(9773),T=n(5154),h=n(2104);function v(e){return(0,h.Z)("MuiListItem",e)}let w=(0,T.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),x=(0,T.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function g(e){return(0,h.Z)("MuiListItemSecondaryAction",e)}(0,T.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var M=n(5893);let C=["className"],Z=e=>{let{disableGutters:t,classes:n}=e;return(0,p.Z)({root:["root",t&&"disableGutters"]},g,n)},k=(0,l.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.disableGutters&&t.disableGutters]}})(({ownerState:e})=>(0,i.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),j=s.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiListItemSecondaryAction"}),{className:p}=n,o=(0,a.Z)(n,C),u=s.useContext(f.Z),l=(0,i.Z)({},n,{disableGutters:u.disableGutters}),y=Z(l);return(0,M.jsx)(k,(0,i.Z)({className:(0,r.Z)(y.root,p),ownerState:l,ref:t},o))});j.muiName="ListItemSecondaryAction";let I=["className"],O=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],S=(e,t)=>{let{ownerState:n}=e;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]},E=e=>{let{alignItems:t,button:n,classes:a,dense:i,disabled:s,disableGutters:r,disablePadding:o,divider:u,hasSecondaryAction:l,selected:d}=e;return(0,p.Z)({root:["root",i&&"dense",!r&&"gutters",!o&&"padding",u&&"divider",s&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",l&&"secondaryAction",d&&"selected"],container:["container"]},v,a)},R=(0,l.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:S})(({theme:e,ownerState:t})=>(0,i.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&(0,i.Z)({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${x.root}`]:{paddingRight:48}},{[`&.${w.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${w.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,u.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${w.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,u.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${w.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"flex-start"===t.alignItems&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${w.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,u.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,u.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),A=(0,l.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),N=s.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiListItem"}),{alignItems:p="center",autoFocus:u=!1,button:l=!1,children:T,className:h,component:v,components:x={},componentsProps:g={},ContainerComponent:C="li",ContainerProps:{className:Z}={},dense:k=!1,disabled:S=!1,disableGutters:N=!1,disablePadding:F=!1,divider:D=!1,focusVisibleClassName:P,secondaryAction:B,selected:L=!1,slotProps:G={},slots:_={}}=n,$=(0,a.Z)(n.ContainerProps,I),V=(0,a.Z)(n,O),H=s.useContext(f.Z),W=s.useMemo(()=>({dense:k||H.dense||!1,alignItems:p,disableGutters:N}),[p,H.dense,k,N]),q=s.useRef(null);(0,c.Z)(()=>{u&&q.current&&q.current.focus()},[u]);let z=s.Children.toArray(T),X=z.length&&(0,m.Z)(z[z.length-1],["ListItemSecondaryAction"]),J=(0,i.Z)({},n,{alignItems:p,autoFocus:u,button:l,dense:W.dense,disabled:S,disableGutters:N,disablePadding:F,divider:D,hasSecondaryAction:X,selected:L}),U=E(J),Y=(0,b.Z)(q,t),K=_.root||x.Root||R,Q=G.root||g.root||{},ee=(0,i.Z)({className:(0,r.Z)(U.root,Q.className,h),disabled:S},V),et=v||"li";return(l&&(ee.component=v||"div",ee.focusVisibleClassName=(0,r.Z)(w.focusVisible,P),et=y.Z),X)?(et=ee.component||v?et:"div","li"===C&&("li"===et?et="div":"li"===ee.component&&(ee.component="div")),(0,M.jsx)(f.Z.Provider,{value:W,children:(0,M.jsxs)(A,(0,i.Z)({as:C,className:(0,r.Z)(U.container,Z),ref:Y,ownerState:J},$,{children:[(0,M.jsx)(K,(0,i.Z)({},Q,!(0,o.X)(K)&&{as:et,ownerState:(0,i.Z)({},J,Q.ownerState)},ee,{children:z})),z.pop()]}))})):(0,M.jsx)(f.Z.Provider,{value:W,children:(0,M.jsxs)(K,(0,i.Z)({},Q,{as:et,ref:Y},!(0,o.X)(K)&&{ownerState:(0,i.Z)({},J,Q.ownerState)},ee,{children:[z,B&&(0,M.jsx)(j,{children:B})]}))})});var F=N},3670:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/treasury",function(){return n(1983)}])},8226:function(e,t,n){"use strict";var a=n(5893);n(7294);var i=n(6822),s=n(5861),r=n(8078);let p=e=>{let{label:t,value:n,symbol:p}=e;return(0,a.jsxs)(i.Z,{sx:o.card,children:[(0,a.jsx)(s.Z,{color:"text.secondary",fontSize:14,mt:0,children:t}),(0,a.jsxs)(i.Z,{sx:o.wrapper,children:[(0,a.jsx)(s.Z,{variant:"h6",my:0,mr:1,children:n?n.split(".")[0]:(0,a.jsx)(r.Z,{width:60})}),(0,a.jsx)(s.Z,{fontWeight:700,fontSize:12,color:"text.secondary",children:p})]})]})},o={container:{width:"100%",display:"flex",marginBottom:"30px",gap:2},card:{bgcolor:"background.paper",p:2,flex:1,borderRadius:2,boxShadow:1},wrapper:{display:"flex",alignItems:"flex-end"}};t.Z=p},1983:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var a=n(5893),i=n(7294),s=n(9008),r=n.n(s),p=n(7932),o=n(5861),u=n(6822),l=n(9417),d=n(8462),y=n(891),m=n(139),c=n(8240),b=n(1378),f=n(4146),T=n(5553),h=n(381),v=n.n(h);n(3704);var w=n(7372),x=n(8226),g=n(1664),M=n.n(g);let{useChainId:C,useAccounts:Z,useIsActivating:k,useIsActive:j,useProvider:I,useENSNames:O}=w.P;function S(){let e=Z(),t=I(),n=j(),[s,h]=(0,i.useState)(!0),[w,g]=(0,i.useState)(""),[C,k]=(0,i.useState)("0"),[O,S]=(0,i.useState)(null),[E,R]=(0,i.useState)(null),[A,N]=(0,i.useState)(null),[F,D]=(0,i.useState)("");async function P(){if(h(!0),(t||w)&&t){let e=new f.CH(b.L,b.M,t.getSigner()),n=await e.startNewCycle();await n.wait(),h(!1)}}async function B(){if(console.log("claimRewards test"),!t&&!w)return;let e=new f.CH(b.L,b.M,null==t?void 0:t.getSigner()),n=await e.withdrawRewards();await n.wait()}async function L(){if(h(!0),!t&&!w)return;new f.CH(c.L,c.M,t);let e=new f.CH(b.L,b.M,t),n=await e.totalAliveChickens();console.log("totalChickenSupply test",n),S(n.toString());let a=await e.pendingRewards(w);k(T.formatEther(a));let i=await e.walletOfOwner(w),s=[];for(let t=0;t<i.length;t++){let n=i[t],a=await e.getChickenDetails(n);console.log("chickenInfo test",a),!1==a.isDead&&s.push(n)}N(s);let r=await e.treasury();console.log("Treasury value:",T.formatEther(r)),R(T.formatEther(r));let p=await e.nextCycleTimestamp();v().duration(1e3*v()(Number(p)).diff(v()().unix())).format("h [hrs], m [min], s [secs]"),D(p),h(!1)}return(0,i.useEffect)(()=>{t&&e&&(null==e?void 0:e.length)>0&&g(e[0])},[e,t]),(0,i.useEffect)(()=>{w&&L()},[w]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"Eggspedition: The Eggciting Journey!"}),(0,a.jsx)("meta",{name:"description",content:"Embark on the ultimate eggventure in the world of web3 games."}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(m.Z,{children:(0,a.jsx)(p.Z,{maxWidth:"md",children:n?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{variant:"h1",children:"EGGS Treasury! "}),(0,a.jsx)(o.Z,{gutterBottom:!0,mb:2,children:"The EGGS Treasury rewards active players every day."}),!s&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.Z,{sx:{justifyContent:"center",alignItems:"center"},children:0>=v()(Number(F)).diff(v()().unix())?(0,a.jsxs)(u.Z,{sx:{bgcolor:"primary",borderRadius:2,boxShadow:1,overflow:"hidden",my:4,position:"relative",p:2},children:[(0,a.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"\uD83C\uDF89 Start the new cycle and become some shares of the treasury!"}),(0,a.jsx)(l.Z,{variant:"contained",color:"primary",onClick:P,children:"Start new cycle"})]}):(0,a.jsxs)(u.Z,{sx:{my:4},children:["⏳ Time left for current cycle:"," ",(0,a.jsx)("strong",{children:v().duration(1e3*v()(Number(F)).diff(v()().unix())).format("h [hrs], m [min], s [secs]")})]})}),(0,a.jsxs)(u.Z,{sx:{display:"flex",gap:4,flexWrap:"wrap",mb:4},children:[(0,a.jsx)(u.Z,{sx:{flex:1},children:(0,a.jsx)(x.Z,{label:" \uD83D\uDC14 Current Alive Chicken Supply",value:O,symbol:"Chickens"})}),(0,a.jsx)(u.Z,{sx:{flex:1},children:(0,a.jsx)(x.Z,{label:"\uD83C\uDFE6 Treasury Balance",value:E,symbol:"SMR"})})]}),(0,a.jsxs)(u.Z,{sx:{display:"flex",gap:4,flexWrap:"wrap",mb:4},children:[(0,a.jsxs)(u.Z,{sx:{flex:1},children:[(0,a.jsx)(x.Z,{label:" Claimable rewards",value:C,symbol:"SMR"}),(0,a.jsx)(u.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",position:"position"},children:Number(C)>0&&(0,a.jsx)(l.Z,{sx:{width:"50%"},variant:"contained",color:"primary",onClick:()=>B(),children:"Claim Rewards"})})]}),(0,a.jsx)(u.Z,{sx:{flex:1},children:(0,a.jsx)(x.Z,{label:"Your Next estimated rewards",value:(()=>{if(!E||!A)return 0;let e=Number(A.length)+1;console.log("Number(aliveUserChickens.length)",Number(A.length)),console.log("x test",e),console.log("Number(treasuryBalance)",Number(E));let t=.8*Number(E)/e;return t})().toString(),symbol:"SMR"})})]}),(0,a.jsxs)(u.Z,{sx:{display:"flex",gap:4,flexWrap:"wrap",mb:4},children:[(0,a.jsx)(o.Z,{variant:"h5",gutterBottom:!0,children:"\uD83D\uDCB0 How it works"}),(0,a.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"Every time SMR tokens dance into the EGG-osystem, they feed into the grand treasury."}),(0,a.jsxs)(o.Z,{variant:"body1",children:["A whopping ",(0,a.jsx)("strong",{children:"80%"})," of this glistening trove is graciously shared amongst the"," ",(0,a.jsx)("strong",{children:"active players"}),", raining down on them daily. But, the benevolence doesn't stop there! Retains a precious ",(0,a.jsx)("strong",{children:"20%"}),", which is then elegantly divided:"]}),(0,a.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:(0,a.jsxs)(d.Z,{children:[(0,a.jsxs)(y.ZP,{sx:{display:"list-item"},children:["\uD83C\uDFAE Half is channeled into the game's"," ",(0,a.jsx)("strong",{children:"Development Treasury"})," ensuring the world of EGG-osystem keeps evolving."]}),(0,a.jsxs)(y.ZP,{sx:{display:"list-item"},children:["\uD83C\uDF0D The other half seeds the"," ",(0,a.jsx)("strong",{children:"Community Treasury"}),", which not only fuels the game but also breathes life into real-world sustainable farm projects. Because here here, fantasy meets reality and we all do a positive impact on the world. Checkout the"," ",(0,a.jsx)(M(),{href:"dao",children:"experimental ChickenDAO"}),"."]})]})})]})]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{variant:"h3",gutterBottom:!0,children:"Welcome new farmer!"}),(0,a.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"Please connect your wallet to continue."})]})})})]})}},1378:function(e){"use strict";e.exports=JSON.parse('{"M":[{"inputs":[{"internalType":"address","name":"initialOwner","type":"address"},{"internalType":"address","name":"_eggsNFT","type":"address"},{"internalType":"address payable","name":"_marketingTreasury","type":"address"},{"internalType":"address payable","name":"_developmentTreasury","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ERC721EnumerableForbiddenBatchMint","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721IncorrectOwner","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721InsufficientApproval","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC721InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"ERC721InvalidOperator","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721InvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC721InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC721InvalidSender","type":"error"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721NonexistentToken","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"ERC721OutOfBoundsIndex","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ChickenCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ChickenDied","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"EggHatched","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"EggMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"EggsOwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"nextCycleTimestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardAmount","type":"uint256"}],"name":"NewCycleStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CREATION_COST","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"aliveChickens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"chickenIndices","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"chickens","outputs":[{"internalType":"uint256","name":"attackPower","type":"uint256"},{"internalType":"uint256","name":"defensePower","type":"uint256"},{"internalType":"uint256","name":"intelligencePoints","type":"uint256"},{"internalType":"uint256","name":"speed","type":"uint256"},{"internalType":"uint256","name":"birthTime","type":"uint256"},{"internalType":"uint256","name":"nextEggMintedTime","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"happinessLevel","type":"uint256"},{"internalType":"bool","name":"isDead","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cycleDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"developmentTreasury","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eggMintLockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eggsNFT","outputs":[{"internalType":"contract ChickenEggNFT","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getChickenDetails","outputs":[{"internalType":"uint256","name":"attackPower","type":"uint256"},{"internalType":"uint256","name":"defensePower","type":"uint256"},{"internalType":"uint256","name":"intelligencePoints","type":"uint256"},{"internalType":"uint256","name":"speed","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"nextEggMintedTime","type":"uint256"},{"internalType":"uint256","name":"birthTime","type":"uint256"},{"internalType":"bool","name":"isDead","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingTreasury","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"mintEgg","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextCycleTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_developmentTreasury","type":"address"}],"name":"setDevelopmentTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_marketingTreasury","type":"address"}],"name":"setMarketingTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startNewCycle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAliveChickens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferEggsOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawRewards","outputs":[],"stateMutability":"nonpayable","type":"function"}],"L":"0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"}')},8240:function(e){"use strict";e.exports=JSON.parse('{"M":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],"L":"0x5FbDB2315678afecb367f032d93F642f64180aa3"}')}},function(e){e.O(0,[885,881,453,146,704,581,241,774,888,179],function(){return e(e.s=3670)}),_N_E=e.O()}]);