(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{88677:function(){},62808:function(){},41793:function(e,t,r){Promise.resolve().then(r.bind(r,5714))},5714:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return C}});var o=r(57437),n=r(1654),i=r.n(n),l=r(2265),s=r(57021),a=r(51649),c=r(55017);r(12148);var d=r(89817),h=r(70165),u=r(11486),x=r(89573);let b={open:!1,message:"",severity:"info"},p=(0,l.createContext)({showNotification:()=>{}}),f=e=>{let{children:t}=e,[r,n]=(0,l.useState)(b),i=(0,l.useCallback)(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";n({open:!0,message:e,severity:t})},[]),s=(0,l.useCallback)((e,t)=>{"clickaway"!==t&&n(b)},[]);return(0,o.jsxs)(p.Provider,{value:{showNotification:i},children:[t,(0,o.jsx)(u.Z,{open:r.open,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},children:(0,o.jsx)(x.Z,{onClose:s,severity:r.severity,sx:{width:"100%"},children:r.message})})]})},m=new d.S;var g=e=>{let{children:t}=e;return(0,o.jsx)(a.Z,{theme:c.C6,children:(0,o.jsxs)(h.aH,{client:m,children:[(0,o.jsx)(s.t,{initialIsOpen:!1}),(0,o.jsx)(f,{children:t})]})})},v=r(63984),j=r(3857),y=r(241),k=r(2906);let S={pb:"120px",pt:"140px"};var C=e=>{let{children:t}=e;return(0,o.jsx)("html",{lang:"en",children:(0,o.jsx)("body",{className:i().className,children:(0,o.jsx)(g,{children:(0,o.jsxs)(v.Z,{sx:S,children:[(0,o.jsx)(j.ZP,{}),(0,o.jsx)(k.h,{}),t,(0,o.jsx)(y.b,{})]})})})})}},2906:function(e,t,r){"use strict";r.d(t,{h:function(){return B}});var o=r(57437),n=r(2265),i=r(76500),l=r(34989),s=r(63984),a=r(95201),c=r(66655),d=r(94083),h=r(43226),u=r(24033),x=r(61396),b=r.n(x);let p={root:{minWidth:"100px",height:"42px",px:5,display:"flex",fontSize:"14px",justifyContent:"center",alignItems:"center",bgcolor:"transparent",color:"rgba(255,255,255,1)",borderRadius:"8px","&.active":{bgcolor:"rgba(255,255,255,1)",color:"black"},"&:hover":{cursor:"pointer",bgcolor:"primary.main",color:"background.paper"}}};var f=e=>{let{label:t,href:r}=e,n=(0,u.usePathname)(),i=n===r;return(0,o.jsx)(b(),{href:r,children:(0,o.jsx)(s.Z,{...e,sx:p.root,className:i?"active":"",children:(0,o.jsx)(h.Z,{sx:{fontSize:16,fontWeight:"600"},children:t})})})};let m=[{label:"Home",href:"/"},{label:"Farm",href:"/farm"},{label:"Chickens",href:"/chickens"},{label:"Treasury",href:"/treasury"},{label:"Inventory",href:"/inventory"},{label:"Shop",href:"/shop"}],g=[...m,{label:"Profile",href:"/profile"}];var v=()=>{let[e,t]=n.useState(null),r=!!e;return(0,o.jsxs)(s.Z,{sx:{display:{xs:"block",md:"none"}},children:[(0,o.jsx)(s.Z,{children:(0,o.jsx)(d.D,{"aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:e=>{t(e.currentTarget)},children:(0,o.jsx)(c.Z,{})})}),(0,o.jsx)(a.Z,{id:"mobile-menu",anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,open:r,onClose:()=>{t(null)},sx:{"& .MuiPaper-root":{p:2,py:2,bgcolor:"rgb(0,0,0,0.5)",backdropFilter:"blur(8px)",borderStyle:"solid",borderColor:"rgba(0,0,0,0.5)",borderWidth:2,boxSizing:"border-box",borderRadius:"8px"},"& .MuiList-root":{p:0}},children:g.map(e=>(0,n.createElement)(f,{...e,key:e.label},e.label))})]})},j=r(55017);let y={root:{position:"fixed",top:7,left:"50%",transform:"translateX(-50%)",display:{xs:"none",md:"block"},bgcolor:"rgba(0,0,0,0.25)",borderWidth:1,borderStyle:"solid",borderColor:"rgba(0,0,0,0.5)",p:"4px",borderRadius:"12px",height:51,transition:j.pB[120],"&:hover":{bgcolor:"rgba(0,0,0,0.5)"}},box:{display:"flex",borderRadius:"6px",overflow:"hidden",height:42}};var k=()=>(0,o.jsx)(s.Z,{sx:y.root,children:(0,o.jsx)(s.Z,{sx:y.box,children:m.map(e=>(0,n.createElement)(f,{...e,key:e.label}))})}),S=r(80234);let{useChainId:C,useAccounts:z,useIsActivating:Z,useIsActive:w,useProvider:E,useENSNames:I}=S.hooks;var O=()=>{w();let e=Z(),[t,r]=(0,n.useState)(void 0);(0,n.useEffect)(()=>{S.O.connectEagerly().catch(()=>{console.debug("Failed to connect eagerly to metamask")})},[]);let i=(0,n.useCallback)(async e=>{try{await S.O.activate(),r(void 0)}catch(e){r(e)}},[S.O,r]);return(0,o.jsx)("button",{onClick:()=>i(0),disabled:e,children:t?"Try again?":"Connect"})};let{useChainId:W,useAccounts:M,useIsActivating:N,useIsActive:P,useProvider:F,useENSNames:R}=S.hooks;var T=()=>{let[e,t]=n.useState([]),r=M();console.log("accounts",r);let i=r?r[0]:"",l=i?i.slice(0,5)+"..."+i.slice(i.length-3):null;return(0,o.jsx)(s.Z,{sx:{display:{xs:"none",md:"block"}},children:i?(0,o.jsx)(b(),{href:"/profile",children:(0,o.jsx)(s.Z,{sx:{cursor:"pointer",color:"white"},children:l})}):(0,o.jsx)(O,{})})};let B=e=>{let{identity:t=!0}=e;return(0,o.jsx)(i.Z,{sx:D.root,children:(0,o.jsxs)(l.Z,{sx:D.toolbar,children:[(0,o.jsx)("span",{}),(0,o.jsx)(k,{}),t&&(0,o.jsx)(T,{}),(0,o.jsx)(v,{})]})})},D={root:{position:"fixed",zIndex:11,top:{xs:16,md:24},left:{xs:16,md:24},width:{xs:"calc(100% - 32px)",md:"calc(100% - 48px)"},display:"flex",alignItems:"center",flexShrink:1,boxSizing:"border-box",background:"rgba(0,0,0,0.5)",backdropFilter:"blur(8px)",boxShadow:"none",borderStyle:"solid",borderColor:"rgba(0,0,0,0.5)",borderRadius:"8px"},toolbar:{width:"100%",display:"flex",justifyContent:"space-between"}}},94083:function(e,t,r){"use strict";r.d(t,{D:function(){return l}});var o=r(57437);r(2265);var n=r(49050),i=r(63984);let l=e=>{let{children:t,onClick:r}=e;return(0,o.jsx)(n.Z,{size:"small",variant:"contained",color:"primary",onClick:r,sx:{"&.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary":{borderRadius:"50px",maxWidth:"auto",minWidth:"auto",width:40,height:40,display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"black !important",borderWidth:1,borderStyle:"solid",borderColor:"rgba(0,0,0,0.5)","&:hover":{bgcolor:"primary.main",cursor:"pointer"}}},children:(0,o.jsx)(i.Z,{sx:{height:20,width:20,"& svg":{color:"common.white",height:"inherit",width:"inherit"}},children:t})})}},241:function(e,t,r){"use strict";r.d(t,{b:function(){return j}});var o=r(57437);r(2265);var n=r(63984),i=r(43226),l=r(80234);let{useChainId:s,useAccounts:a,useIsActivating:c,useIsActive:d,useProvider:h,useENSNames:u}=l.hooks,x=e=>{let t=s();return(0,o.jsxs)(i.Z,{children:["ShimmerEVM Testnet (ChainID: ",t,")"]})};var b=r(61396),p=r.n(b),f=r(16773),m=r(94083);let{useIsActive:g,useProvider:v}=l.hooks,j=()=>{let e=g(),t=v();return(0,o.jsxs)(n.Z,{sx:{bgcolor:"background.paper",position:"fixed",bottom:20,right:20,borderRadius:2,boxShadow:1,p:2,display:"flex",alignItems:"center"},children:[(0,o.jsx)(n.Z,{mr:4,children:e&&(0,o.jsx)(x,{provider:t})}),(0,o.jsx)(p(),{target:"_blank",href:"https://explorer.evm.testnet.shimmer.network/",children:(0,o.jsx)(m.D,{children:(0,o.jsx)(f.Z,{})})})]})}},80234:function(e,t,r){"use strict";r.d(t,{O:function(){return i},hooks:function(){return l}});var o=r(94706),n=r(41187);let[i,l]=(0,o.initializeConnector)(e=>new n.MetaMask({actions:e}))},55017:function(e,t,r){"use strict";r.d(t,{C6:function(){return s},pB:function(){return n}});var o=r(98595);let n={300:"all 300ms cubic-bezier(0.65, 0, 0.35, 1) 0s",120:"all 120ms cubic-bezier(0.65, 0, 0.35, 1) 0s"},i={fontWeight:700,lineHeight:1.2,letterSpacing:"0em"},l={fontWeight:300,lineHeight:1.5,letterSpacing:"0em"},s=(0,o.Z)({typography:{fontFamily:'Inter,"Fredericka the Great",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',h1:{...i,fontSize:62},h2:{...i,fontSize:48},h3:{...i,fontSize:40},h4:{...i,fontSize:32},h5:{...i,fontSize:24},h6:{...i,fontSize:20},subtitle1:{...l,fontSize:20},subtitle2:{...l,fontSize:16},body1:{...l,fontSize:16},body2:{...l,fontSize:14,textTransform:"none",fontWeight:700},button:{fontWeight:600,lineHeight:1,letterSpacing:"0em",fontSize:16},caption:{...l,fontSize:12},overline:{...l,fontSize:12}},palette:{mode:"dark",primary:{main:"#FFD700",contrastText:"#000"},secondary:{main:"#8B4513",contrastText:"#fff"},background:{paper:"#2E2E2E",default:"#1d1d1d"}},components:{MuiButton:{styleOverrides:{root:{textDecoration:"none",textTransform:"none"}}}}})},12148:function(){}},function(e){e.O(0,[612,529,336,971,472,744],function(){return e(e.s=41793)}),_N_E=e.O()}]);