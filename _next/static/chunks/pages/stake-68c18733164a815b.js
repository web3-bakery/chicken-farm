(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8797],{3193:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stake",function(){return n(1069)}])},2016:function(e,t,n){"use strict";n.r(t);var s=n(5893),i=n(7294),l=n(5861),a=n(7357),r=n(4687),d=n(1438),o=n(6076),c=n(6154),f=n(354),u=n(5800),h=n(8731);let p="0xE3cA4D93277cDFf239032E08A7383ea6775b6A95",x=()=>{let{active:e,account:t,library:n}=(0,r.Ge)(),[x,j]=(0,i.useState)([]);async function m(e){let t=new d.Qg(n.provider),s=new o.CH(p,f.Mt,t),i=[];for(let t=0;t<e.length;t++){var l;let n=e[t].tokenId,a=await s.tokenURI(n);a=a.replace("ipfs://","");let r=await c.Z.get("https://cloudflare-ipfs.com/ipfs/"+a+".json"),d={tokenId:n,url:null==r?void 0:null===(l=r.data)||void 0===l?void 0:l.image.replace("ipfs://","https://cloudflare-ipfs.com/ipfs/")};i.push(d)}j(i)}return(0,i.useEffect)(()=>{e&&t&&u.Z.loadNfts(n,p,t).then(e=>{m(e)})},[e,t]),(0,s.jsxs)("div",{children:[(0,s.jsx)(l.Z,{variant:"h4",children:"Apes"}),(0,s.jsx)(l.Z,{color:"text.secondary",children:"Coming soon"}),(0,s.jsx)(a.Z,{sx:{display:"flex",flexWrap:"wrap",gap:2,mt:2,mb:4},children:t&&x.length>0&&x.map((e,t)=>(0,s.jsx)(h.default,{stakeAddress:"",nft:e,disabled:!0},t))})]})};t.default=x},8563:function(e,t,n){"use strict";n.r(t);var s=n(5893),i=n(7294),l=n(4687),a=n(5861),r=n(7357),d=n(5800),o=n(8731);let c=()=>{let{active:e,account:t,library:n}=(0,l.Ge)(),[c,f]=(0,i.useState)([]);async function u(e){let t=[];for(let n=0;n<e.length;n++){let s=e[n].tokenId,i={tokenId:s,url:"https://api.iotaheroes.com/hero/image/"+s+".png"};t.push(i)}f(t)}return(0,i.useEffect)(()=>{e&&t&&d.Z.loadNfts(n,"0xA1C16Aa93572326bCE72b923c1e27A35166876c3",t).then(e=>{u(e)})},[e,t]),(0,s.jsxs)("div",{children:[(0,s.jsx)(a.Z,{variant:"h4",children:"IOTA Heroes"}),(0,s.jsx)(a.Z,{color:"text.secondary",children:"Coming soon"}),(0,s.jsx)(r.Z,{sx:{display:"flex",flexWrap:"wrap",gap:2,mt:2,mb:4},children:c.length>0&&c.map((e,n)=>(0,s.jsx)("div",{children:(0,s.jsx)("div",{children:t&&(0,s.jsx)(o.default,{stakeAddress:"",nft:e,disabled:!0})},n)},e.tokenId))})]})};t.default=c},1991:function(e,t,n){"use strict";n.r(t);var s=n(5893),i=n(7294),l=n(4687),a=n(5861),r=n(7357),d=n(1438),o=n(6076),c=n(6154),f=n(354),u=n(5800),h=n(8731);let p="0x58dFC21e4e55536Cbb01dC5b1d3eA2260Bf0264a",x=()=>{let{active:e,account:t,library:n}=(0,l.Ge)(),[x,j]=(0,i.useState)([]);async function m(e){let t=new d.Qg(n.provider),s=new o.CH(p,f.Mt,t),i=[];for(let t=0;t<e.length;t++){var l;let n=e[t].tokenId,a=await s.tokenURI(n);console.log("metadata_url:",a),a=a.replace("ipfs://","");let r=await c.Z.get("https://cloudflare-ipfs.com/ipfs/"+a+".json"),d={tokenId:n,url:null==r?void 0:null===(l=r.data)||void 0===l?void 0:l.image.replace("ipfs://","https://cloudflare-ipfs.com/ipfs/")};i.push(d)}j(i)}return(0,i.useEffect)(()=>{e&&t&&u.Z.loadNfts(n,p,t).then(e=>{m(e)})},[e,t]),(0,s.jsxs)("div",{children:[(0,s.jsx)(a.Z,{variant:"h4",children:"Lil Apes"}),(0,s.jsx)(a.Z,{color:"text.secondary",children:"Coming soon"}),(0,s.jsx)(r.Z,{sx:{display:"flex",flexWrap:"wrap",gap:2,mt:2,mb:4},children:x.length>0&&x.map((e,n)=>(0,s.jsx)("div",{children:(0,s.jsx)("div",{children:t&&(0,s.jsx)(h.default,{stakeAddress:"",nft:e,disabled:!0})},n)},e.tokenId))})]})};t.default=x},1069:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var s=n(5893);n(7294);var i=n(9008),l=n.n(i),a=n(3156),r=n(5861),d=n(4687),o=n(9267),c=n(2016),f=n(1991),u=n(8563),h=n(9157),p=n(0);function x(){let{active:e}=(0,d.Ge)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l(),{children:[(0,s.jsx)("title",{children:"Stake"}),(0,s.jsx)("meta",{name:"description",content:"Stake IOTABOTS or other BOTS and Friends of the Ecosystem"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsx)(o.Z,{children:(0,s.jsxs)(a.Z,{maxWidth:"md",children:[(0,s.jsx)(r.Z,{variant:"h1",children:"Stake"}),(0,s.jsx)(r.Z,{color:"text.secondary",sx:{mb:4},children:"Unlock hidden wealth by participating in our diverse staking pools, where you can stake your SOONABOTS NFTs or eligible community project NFTs to harvest bountiful Testnet EGGS tokens."}),e?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h.default,{}),(0,s.jsx)(c.default,{}),(0,s.jsx)(f.default,{}),(0,s.jsx)(u.default,{})]}):(0,s.jsx)(p.Z,{})]})})]})}}},function(e){e.O(0,[5861,7739,1262,7940,7910,755,7471,8764,6154,6231,8420,4116,3467,9774,2888,179],function(){return e(e.s=3193)}),_N_E=e.O()}]);