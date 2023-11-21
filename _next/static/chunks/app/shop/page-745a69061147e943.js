(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[21],{15133:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var a=n(13428),i=n(20791),r=n(2265),s=n(7216),p=n(24681),o=n(35843),u=n(87927),d=n(29872),y=n(33721),l=n(64551);function m(e){return(0,l.Z)("MuiCard",e)}(0,y.Z)("MuiCard",["root"]);var c=n(57437);let f=["className","raised"],T=e=>{let{classes:t}=e;return(0,p.Z)({root:["root"]},m,t)},v=(0,o.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),b=r.forwardRef(function(e,t){let n=(0,u.Z)({props:e,name:"MuiCard"}),{className:r,raised:p=!1}=n,o=(0,i.Z)(n,f),d=(0,a.Z)({},n,{raised:p}),y=T(d);return(0,c.jsx)(v,(0,a.Z)({className:(0,s.Z)(y.root,r),elevation:p?8:void 0,ref:t,ownerState:d},o))});var w=b},88469:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var a=n(13428),i=n(20791),r=n(2265),s=n(7216),p=n(24681),o=n(35843),u=n(87927),d=n(33721),y=n(64551);function l(e){return(0,y.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var m=n(57437);let c=["className","component"],f=e=>{let{classes:t}=e;return(0,p.Z)({root:["root"]},l,t)},T=(0,o.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),v=r.forwardRef(function(e,t){let n=(0,u.Z)({props:e,name:"MuiCardContent"}),{className:r,component:p="div"}=n,o=(0,i.Z)(n,c),d=(0,a.Z)({},n,{component:p}),y=f(d);return(0,m.jsx)(T,(0,a.Z)({as:p,className:(0,s.Z)(y.root,r),ownerState:d,ref:t},o))});var b=v},45461:function(e,t,n){"use strict";n.d(t,{Z:function(){return M}});var a=n(20791),i=n(13428),r=n(2265),s=n(7216),p=n(24681),o=n(87927),u=n(35843),d=n(33721),y=n(64551);function l(e){return(0,y.Z)("MuiCardMedia",e)}(0,d.Z)("MuiCardMedia",["root","media","img"]);var m=n(57437);let c=["children","className","component","image","src","style"],f=e=>{let{classes:t,isMediaComponent:n,isImageComponent:a}=e;return(0,p.Z)({root:["root",n&&"media",a&&"img"]},l,t)},T=(0,u.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e,{isMediaComponent:a,isImageComponent:i}=n;return[t.root,a&&t.media,i&&t.img]}})(({ownerState:e})=>(0,i.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),v=["video","audio","picture","iframe","img"],b=["picture","img"],w=r.forwardRef(function(e,t){let n=(0,o.Z)({props:e,name:"MuiCardMedia"}),{children:r,className:p,component:u="div",image:d,src:y,style:l}=n,w=(0,a.Z)(n,c),M=-1!==v.indexOf(u),C=!M&&d?(0,i.Z)({backgroundImage:`url("${d}")`},l):l,x=(0,i.Z)({},n,{component:u,isMediaComponent:M,isImageComponent:-1!==b.indexOf(u)}),h=f(x);return(0,m.jsx)(T,(0,i.Z)({className:(0,s.Z)(h.root,p),as:u,role:!M&&d?"img":void 0,ref:t,style:C,ownerState:x,src:M?d||y:void 0},w,{children:r}))});var M=w},14376:function(e,t,n){Promise.resolve().then(n.bind(n,95943))},95943:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var a=n(57437),i=n(2265),r=n(93750),s=n(43226),p=n(28874),o=n(74203),u=n(15133),d=n(45461),y=n(88469),l=n(11898),m=n(49050),c=n(92287),f=n(70645),T=n(76303),v=e=>{let{name:t,account:n,contractAddress:i,abi:r,img:p}=e,o=(0,f.Z)(i,r),{data:v,isError:b,isLoading:w,refetch:M}=(0,c.Z)(n,i),C=async()=>{console.log("buying: ",t);let e=await (null==o?void 0:o.buy({value:T.fi("10")}));await e.wait(),M()};return(0,a.jsxs)(u.Z,{sx:{maxWidth:300},children:[(0,a.jsx)(d.Z,{component:"img",height:"250",image:p,alt:t}),(0,a.jsx)(y.Z,{children:w||b?(0,a.jsx)(l.Z,{variant:"text"}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.Z,{variant:"h5",color:"text.secondary",mt:0,children:["Balance: ",null==v?void 0:v.toString()]}),(0,a.jsxs)(m.Z,{onClick:C,children:["Buy ",t]})]})})]})},b=n(55628),w=n(38297),M=n(80234);let{useAccounts:C,useIsActive:x}=M.hooks;var h=()=>{let e=C(),t=x(),[n,u]=(0,i.useState)("");return(0,i.useEffect)(()=>{t&&e&&e.length>0&&u(e[0])},[t,e]),(0,a.jsx)(o.Z,{children:(0,a.jsxs)(r.Z,{maxWidth:"md",children:[(0,a.jsx)(s.Z,{variant:"h1",children:"Shop"}),n?(0,a.jsx)(p.ZP,{container:!0,spacing:1,children:(0,a.jsxs)(p.ZP,{item:!0,xs:12,sm:6,md:4,children:[(0,a.jsx)(v,{name:"Chicken",account:n,contractAddress:b.L,abi:b.M,img:"/chicken.png"}),(0,a.jsx)(v,{name:"ChickenCoop",account:n,contractAddress:w.L,abi:w.M,img:"/chicken-coop.png"})]})}):(0,a.jsx)("p",{children:"account not connected."})]})})}},38297:function(e){"use strict";e.exports=JSON.parse('{"M":[{"inputs":[{"internalType":"address","name":"initialOwner","type":"address"},{"internalType":"address","name":"_chickenNFTContract","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ERC721EnumerableForbiddenBatchMint","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721IncorrectOwner","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721InsufficientApproval","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC721InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"ERC721InvalidOperator","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721InvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC721InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC721InvalidSender","type":"error"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721NonexistentToken","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"ERC721OutOfBoundsIndex","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_LEVEL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPGRADE_COST","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"coopId","type":"uint256"},{"internalType":"uint256","name":"chickenId","type":"uint256"}],"name":"addChickenToCoop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"coopId","type":"uint256"}],"name":"collectEggsFromCoop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"coopLevelCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"coops","outputs":[{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"lastCollected","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"coopId","type":"uint256"}],"name":"doesCoopExist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eggCollectionFrequency","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eggsPerChicken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"coopId","type":"uint256"}],"name":"getChickensInCoop","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"coopId","type":"uint256"},{"internalType":"uint256","name":"chickenId","type":"uint256"}],"name":"removeChickenFromCoop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"coopId","type":"uint256"}],"name":"upgradeCoopLevel","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],"L":"0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"}')}},function(e){e.O(0,[612,689,529,926,874,574,662,971,472,744],function(){return e(e.s=14376)}),_N_E=e.O()}]);