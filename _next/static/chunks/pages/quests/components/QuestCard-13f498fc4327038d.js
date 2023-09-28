(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2664],{9417:function(e,o,t){"use strict";t.d(o,{Z:function(){return I}});var a=t(3366),n=t(7462),r=t(7294),i=t(3961),l=t(7925),s=t(4780),d=t(1796),c=t(948),v=t(1657),u=t(7739),p=t(8216),h=t(1588),m=t(4867);function x(e){return(0,m.Z)("MuiButton",e)}let g=(0,h.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),b=r.createContext({}),f=r.createContext(void 0);var S=t(5893);let Z=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=e=>{let{color:o,disableElevation:t,fullWidth:a,size:r,variant:i,classes:l}=e,d={root:["root",i,`${i}${(0,p.Z)(o)}`,`size${(0,p.Z)(r)}`,`${i}Size${(0,p.Z)(r)}`,"inherit"===o&&"colorInherit",t&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,p.Z)(r)}`],endIcon:["endIcon",`iconSize${(0,p.Z)(r)}`]},c=(0,s.Z)(d,x,l);return(0,n.Z)({},l,c)},z=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),C=(0,c.ZP)(u.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,o)=>{let{ownerState:t}=e;return[o.root,o[t.variant],o[`${t.variant}${(0,p.Z)(t.color)}`],o[`size${(0,p.Z)(t.size)}`],o[`${t.variant}Size${(0,p.Z)(t.size)}`],"inherit"===t.color&&o.colorInherit,t.disableElevation&&o.disableElevation,t.fullWidth&&o.fullWidth]}})(({theme:e,ownerState:o})=>{var t,a;let r="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],i="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,n.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===o.variant&&"inherit"!==o.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===o.variant&&"inherit"!==o.color&&{border:`1px solid ${(e.vars||e).palette[o.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===o.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:i,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===o.variant&&"inherit"!==o.color&&{backgroundColor:(e.vars||e).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[o.color].main}}),"&:active":(0,n.Z)({},"contained"===o.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${g.focusVisible}`]:(0,n.Z)({},"contained"===o.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${g.disabled}`]:(0,n.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===o.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===o.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===o.variant&&{padding:"6px 8px"},"text"===o.variant&&"inherit"!==o.color&&{color:(e.vars||e).palette[o.color].main},"outlined"===o.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===o.variant&&"inherit"!==o.color&&{color:(e.vars||e).palette[o.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[o.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[o.color].main,.5)}`},"contained"===o.variant&&{color:e.vars?e.vars.palette.text.primary:null==(t=(a=e.palette).getContrastText)?void 0:t.call(a,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:r,boxShadow:(e.vars||e).shadows[2]},"contained"===o.variant&&"inherit"!==o.color&&{color:(e.vars||e).palette[o.color].contrastText,backgroundColor:(e.vars||e).palette[o.color].main},"inherit"===o.color&&{color:"inherit",borderColor:"currentColor"},"small"===o.size&&"text"===o.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===o.size&&"text"===o.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===o.size&&"outlined"===o.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===o.size&&"outlined"===o.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===o.size&&"contained"===o.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===o.size&&"contained"===o.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${g.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${g.disabled}`]:{boxShadow:"none"}}),w=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,o)=>{let{ownerState:t}=e;return[o.startIcon,o[`iconSize${(0,p.Z)(t.size)}`]]}})(({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},z(e))),$=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,o)=>{let{ownerState:t}=e;return[o.endIcon,o[`iconSize${(0,p.Z)(t.size)}`]]}})(({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},z(e))),k=r.forwardRef(function(e,o){let t=r.useContext(b),s=r.useContext(f),d=(0,l.Z)(t,e),c=(0,v.Z)({props:d,name:"MuiButton"}),{children:u,color:p="primary",component:h="button",className:m,disabled:x=!1,disableElevation:g=!1,disableFocusRipple:z=!1,endIcon:k,focusVisibleClassName:I,fullWidth:R=!1,size:M="medium",startIcon:N,type:P,variant:E="text"}=c,j=(0,a.Z)(c,Z),B=(0,n.Z)({},c,{color:p,component:h,disabled:x,disableElevation:g,disableFocusRipple:z,fullWidth:R,size:M,type:P,variant:E}),q=y(B),_=N&&(0,S.jsx)(w,{className:q.startIcon,ownerState:B,children:N}),F=k&&(0,S.jsx)($,{className:q.endIcon,ownerState:B,children:k});return(0,S.jsxs)(C,(0,n.Z)({ownerState:B,className:(0,i.Z)(t.className,q.root,m,s||""),component:h,disabled:x,focusRipple:!z,focusVisibleClassName:(0,i.Z)(q.focusVisible,I),ref:o,type:P},j,{classes:q,children:[_,u,F]}))});var I=k},629:function(e,o,t){"use strict";t.d(o,{Z:function(){return S}});var a=t(3366),n=t(7462),r=t(7294),i=t(3961),l=t(4780),s=t(1796),d=t(948);let c=e=>((e<1?5.11916*e**2:4.5*Math.log(e+1)+2)/100).toFixed(2);var v=t(1657),u=t(1588),p=t(4867);function h(e){return(0,p.Z)("MuiPaper",e)}(0,u.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var m=t(5893);let x=["className","component","elevation","square","variant"],g=e=>{let{square:o,elevation:t,variant:a,classes:n}=e,r={root:["root",a,!o&&"rounded","elevation"===a&&`elevation${t}`]};return(0,l.Z)(r,h,n)},b=(0,d.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,o)=>{let{ownerState:t}=e;return[o.root,o[t.variant],!t.square&&o.rounded,"elevation"===t.variant&&o[`elevation${t.elevation}`]]}})(({theme:e,ownerState:o})=>{var t;return(0,n.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!o.square&&{borderRadius:e.shape.borderRadius},"outlined"===o.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===o.variant&&(0,n.Z)({boxShadow:(e.vars||e).shadows[o.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",c(o.elevation))}, ${(0,s.Fq)("#fff",c(o.elevation))})`},e.vars&&{backgroundImage:null==(t=e.vars.overlays)?void 0:t[o.elevation]}))}),f=r.forwardRef(function(e,o){let t=(0,v.Z)({props:e,name:"MuiPaper"}),{className:r,component:l="div",elevation:s=1,square:d=!1,variant:c="elevation"}=t,u=(0,a.Z)(t,x),p=(0,n.Z)({},t,{component:l,elevation:s,square:d,variant:c}),h=g(p);return(0,m.jsx)(b,(0,n.Z)({as:l,ownerState:p,className:(0,i.Z)(h.root,r),ref:o},u))});var S=f},7127:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quests/components/QuestCard",function(){return t(2349)}])},2349:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return C}});var a=t(5893),n=t(7294),r=t(6242),i=t(4267),l=t(5861),s=t(3366),d=t(7462),c=t(3961),v=t(4780),u=t(948),p=t(1657),h=t(1588),m=t(4867);function x(e){return(0,m.Z)("MuiCardActions",e)}(0,h.Z)("MuiCardActions",["root","spacing"]);let g=["disableSpacing","className"],b=e=>{let{classes:o,disableSpacing:t}=e;return(0,v.Z)({root:["root",!t&&"spacing"]},x,o)},f=(0,u.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,o)=>{let{ownerState:t}=e;return[o.root,!t.disableSpacing&&o.spacing]}})(({ownerState:e})=>(0,d.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),S=n.forwardRef(function(e,o){let t=(0,p.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:n=!1,className:r}=t,i=(0,s.Z)(t,g),l=(0,d.Z)({},t,{disableSpacing:n}),v=b(l);return(0,a.jsx)(f,(0,d.Z)({className:(0,c.Z)(v.root,r),ownerState:l,ref:o},i))});var Z=t(9417),y=t(5553);let z=e=>{var o;let{quest:t,onSolve:n}=e;return(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(l.Z,{variant:"h5",component:"div",children:null==t?void 0:t.description}),(0,a.jsxs)(l.Z,{color:"textSecondary",children:["Points: ",null==t?void 0:null===(o=t.points)||void 0===o?void 0:o.toNumber()]}),(0,a.jsxs)(l.Z,{color:"textSecondary",children:["Your Balance: ",null==t?void 0:t.balance]}),(0,a.jsxs)(l.Z,{color:"textSecondary",children:["Required tokens:"," ",y.dF((null==t?void 0:t.requiredTokenAmount)||0)]})]}),(0,a.jsxs)(S,{children:[(0,a.jsx)(Z.Z,{disabled:!(null==t?void 0:t.userCanSolve),size:"small",onClick:()=>n(null==t?void 0:t.id),children:"Solve"}),(null==t?void 0:t.active)?"Active":"Inactive"]})]})};var C=z}},function(e){e.O(0,[5861,7739,8679,9774,2888,179],function(){return e(e.s=7127)}),_N_E=e.O()}]);