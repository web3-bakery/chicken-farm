(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9157],{7166:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stake/components/StakeApes",function(){return n(2016)}])},2016:function(e,t,n){"use strict";n.r(t);var s=n(5893),a=n(7294),l=n(5861),i=n(7357),o=n(4687),r=n(1438),c=n(6076),f=n(6154),d=n(354),p=n(5800),u=n(8731);let h="0xE3cA4D93277cDFf239032E08A7383ea6775b6A95",_=()=>{let{active:e,account:t,library:n}=(0,o.Ge)(),[_,w]=(0,a.useState)([]);async function k(e){let t=new r.Qg(n.provider),s=new c.CH(h,d.Mt,t),a=[];for(let t=0;t<e.length;t++){var l;let n=e[t].tokenId,i=await s.tokenURI(n);i=i.replace("ipfs://","");let o=await f.Z.get("https://cloudflare-ipfs.com/ipfs/"+i+".json"),r={tokenId:n,url:null==o?void 0:null===(l=o.data)||void 0===l?void 0:l.image.replace("ipfs://","https://cloudflare-ipfs.com/ipfs/")};a.push(r)}w(a)}return(0,a.useEffect)(()=>{e&&t&&p.Z.loadNfts(n,h,t).then(e=>{k(e)})},[e,t]),(0,s.jsxs)("div",{children:[(0,s.jsx)(l.Z,{variant:"h4",children:"Apes"}),(0,s.jsx)(l.Z,{color:"text.secondary",children:"Coming soon"}),(0,s.jsx)(i.Z,{sx:{display:"flex",flexWrap:"wrap",gap:2,mt:2,mb:4},children:t&&_.length>0&&_.map((e,t)=>(0,s.jsx)(u.default,{stakeAddress:"",nft:e,disabled:!0},t))})]})};t.default=_}},function(e){e.O(0,[5861,7739,1262,7940,8764,6154,6231,4116,9774,2888,179],function(){return e(e.s=7166)}),_N_E=e.O()}]);