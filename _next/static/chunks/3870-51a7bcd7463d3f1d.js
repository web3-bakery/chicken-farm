"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3870],{7309:function(e,t,n){n.d(t,{M:function(){return a}});let a={soonabotRaceAddr:"0xC587021041Fd1f5e15a24bdCE3F37DddB359b8D6",soonabotsAddr:"0x2f5C574ddF275b4cDfAE26fE8e75621c4B7E106e",soonabotsStakeAddr:"0x83a612E70A505012F7E38e4b8f37C806f2ef7Aa8",iotabotsAddr:"0xb5A53615170e4684E488C9E1c641aB9dDC307489",iotabotsGameAddr:"0x3CE8aB86dED969004102caB650060373e04A0448",eggsAddr:"0xdFCF738225F6508F7A664c3c7D236432501e16d4",eggsBurnAddr:"0x08c399d67d6A536b21d8D4CAd2F703fFd3e0aF58",nftMarketAddr:"0x390f1A9056121bf3087010Ea3804c920f3AE03c9",questsAddr:"0x7Db4a0de77b13780b4eFd3bAe634A5bAe57F611f"}},3870:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var a=n(5893),i=n(7294),s=n(6886),r=n(6242),d=n(3965),l=n(4267),o=n(5861),u=n(7357),p=n(9417),y=n(8456),m=n(9791),c=n(1438),b=n(6076),f=n(5553),g=n(4687),x=n(7309),T=JSON.parse('{"Mt":[{"inputs":[{"internalType":"contract IERC721","name":"_cryptoHerosToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"_player_bet","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_bot_bet","type":"uint256"}],"name":"gamePlayed","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_bet","type":"uint256"}],"name":"createSingleGame","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getUserSingleGames","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSingleGameId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"singleGames","outputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"uint256","name":"userResult","type":"uint256"},{"internalType":"uint256","name":"contractResult","type":"uint256"},{"internalType":"uint256","name":"playerBet","type":"uint256"},{"internalType":"uint8","name":"game","type":"uint8"},{"internalType":"uint8","name":"result","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"usersSingleGames","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"}]}');let h=[{id:1,label:"✊"},{id:2,label:"✋"},{id:3,label:"✌️"}],w=e=>{let{id:t,image:n,name:w,refetchGame:C}=e,{account:v,library:E}=(0,g.Ge)(),[D,_]=(0,i.useState)({message:""}),[j,M]=(0,i.useState)(!1),[O,S]=i.useState(!1),k=()=>S(!0),F=()=>S(!1);async function Z(e){try{_({message:""}),M(!0);let n=new c.Qg(E.provider),a=n.getSigner(),i=new b.CH(x.M.iotabotsGameAddr,T.Mt,a),s=await i.createSingleGame(t,e,{value:f.fi("1")}),r=await s.wait();console.log("recipe",r);for(let e=0;e<r.events.length;e++){let t=r.events[e];if("gamePlayed"===t.event){console.log("event found:",t);let{winner:e,_bot_bet:n,_player_bet:a}=t.args;console.log("winner: ",e),console.log("_bot_bet: ",n),console.log("_player_bet: ",a),e&&e.length>0&&(e===v?_({message:"\uD83D\uDE00 You won 10 EGGS! \uD83C\uDF89"}):e===x.M.iotabotsGameAddr?_({message:"Sorry - your \uD83E\uDD16 won!"}):_({message:"Draw! There is no winner!"}))}}M(!1),k(),C()}catch(e){M(!1),console.error(e)}}return(0,a.jsxs)(s.ZP,{item:!0,xs:12,sm:12,md:12,children:[(0,a.jsxs)(r.Z,{sx:A.card,children:[(0,a.jsx)(d.Z,{height:240,component:"img",image:n,alt:"IOTABOT"}),(0,a.jsxs)(l.Z,{sx:A.card,children:[(0,a.jsx)(o.Z,{gutterBottom:!0,variant:"h6",children:"IOTABOT ".concat(w)}),(0,a.jsx)(o.Z,{sx:{mb:2},children:"Play against your IOTABOT!"}),(0,a.jsx)(u.Z,{sx:A.buttons,children:h.map(e=>(0,a.jsx)(p.Z,{disabled:j,className:"playBtn",variant:"outlined",onClick:()=>Z(e.id-1),children:e.label},e.id))}),j?(0,a.jsx)(y.Z,{}):(0,a.jsx)("p",{className:"result_field",children:"Choose and play!"})]})]}),(0,a.jsx)(m.Z,{open:O,onClose:F,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,a.jsxs)(u.Z,{sx:A.modal,children:[(0,a.jsx)(o.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:"IOTABOTS Game"}),(0,a.jsx)(o.Z,{id:"modal-modal-description",sx:{mt:2},children:D?D.message:""}),(0,a.jsx)(p.Z,{onClick:F,children:"Okay!"})]})})]})},A={card:{bgcolor:"background.paper",borderRadius:2},buttons:{display:"flex",justifyContent:"center",gap:2},modal:{position:"absolute",top:"50%",left:"50%",backgroundColor:"background.paper",transform:"translate(-50%, -50%)",width:400,boxShadow:24,p:4}};var C=w}}]);