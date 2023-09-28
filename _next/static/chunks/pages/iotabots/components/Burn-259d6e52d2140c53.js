(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9809,2161],{5553:function(e,t,n){"use strict";n.d(t,{dF:function(){return Z},bM:function(){return S},fi:function(){return E},vz:function(){return T}});var r=n(6441),a=n(1581),i=n(8794),o=n(2593);let s=new a.Yd(i.i),l={},d=o.O$.from(0),u=o.O$.from(-1);function p(e,t,n,r){let i={fault:t,operation:n};return void 0!==r&&(i.value=r),s.throwError(e,a.Yd.errors.NUMERIC_FAULT,i)}let c="0";for(;c.length<256;)c+=c;function m(e){if("number"!=typeof e)try{e=o.O$.from(e).toNumber()}catch(e){}return"number"==typeof e&&e>=0&&e<=256&&!(e%1)?"1"+c.substring(0,e):s.throwArgumentError("invalid decimal size","decimals",e)}function f(e,t){null==t&&(t=0);let n=m(t);e=o.O$.from(e);let r=e.lt(d);r&&(e=e.mul(u));let a=e.mod(n).toString();for(;a.length<n.length-1;)a="0"+a;a=a.match(/^([0-9]*[1-9]|0)(0*)/)[1];let i=e.div(n).toString();return e=1===n.length?i:i+"."+a,r&&(e="-"+e),e}function h(e,t){null==t&&(t=0);let n=m(t);"string"==typeof e&&e.match(/^-?[0-9.]+$/)||s.throwArgumentError("invalid decimal value","value",e);let r="-"===e.substring(0,1);r&&(e=e.substring(1)),"."===e&&s.throwArgumentError("missing value","value",e);let a=e.split(".");a.length>2&&s.throwArgumentError("too many decimal points","value",e);let i=a[0],l=a[1];for(i||(i="0"),l||(l="0");"0"===l[l.length-1];)l=l.substring(0,l.length-1);for(l.length>n.length-1&&p("fractional component exceeds decimals","underflow","parseFixed"),""===l&&(l="0");l.length<n.length-1;)l+="0";let d=o.O$.from(i),c=o.O$.from(l),f=d.mul(n).add(c);return r&&(f=f.mul(u)),f}class y{constructor(e,t,n,r){e!==l&&s.throwError("cannot use FixedFormat constructor; use FixedFormat.from",a.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=t,this.width=n,this.decimals=r,this.name=(t?"":"u")+"fixed"+String(n)+"x"+String(r),this._multiplier=m(r),Object.freeze(this)}static from(e){if(e instanceof y)return e;"number"==typeof e&&(e=`fixed128x${e}`);let t=!0,n=128,r=18;if("string"==typeof e){if("fixed"===e);else if("ufixed"===e)t=!1;else{let a=e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);a||s.throwArgumentError("invalid fixed format","format",e),t="u"!==a[1],n=parseInt(a[2]),r=parseInt(a[3])}}else if(e){let a=(t,n,r)=>null==e[t]?r:(typeof e[t]!==n&&s.throwArgumentError("invalid fixed format ("+t+" not "+n+")","format."+t,e[t]),e[t]);t=a("signed","boolean",t),n=a("width","number",n),r=a("decimals","number",r)}return n%8&&s.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",n),r>80&&s.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",r),new y(l,t,n,r)}}class g{constructor(e,t,n,r){e!==l&&s.throwError("cannot use FixedNumber constructor; use FixedNumber.from",a.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=r,this._hex=t,this._value=n,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(e){this.format.name!==e.format.name&&s.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",e)}addUnsafe(e){this._checkFormat(e);let t=h(this._value,this.format.decimals),n=h(e._value,e.format.decimals);return g.fromValue(t.add(n),this.format.decimals,this.format)}subUnsafe(e){this._checkFormat(e);let t=h(this._value,this.format.decimals),n=h(e._value,e.format.decimals);return g.fromValue(t.sub(n),this.format.decimals,this.format)}mulUnsafe(e){this._checkFormat(e);let t=h(this._value,this.format.decimals),n=h(e._value,e.format.decimals);return g.fromValue(t.mul(n).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(e){this._checkFormat(e);let t=h(this._value,this.format.decimals),n=h(e._value,e.format.decimals);return g.fromValue(t.mul(this.format._multiplier).div(n),this.format.decimals,this.format)}floor(){let e=this.toString().split(".");1===e.length&&e.push("0");let t=g.from(e[0],this.format),n=!e[1].match(/^(0*)$/);return this.isNegative()&&n&&(t=t.subUnsafe(v.toFormat(t.format))),t}ceiling(){let e=this.toString().split(".");1===e.length&&e.push("0");let t=g.from(e[0],this.format),n=!e[1].match(/^(0*)$/);return!this.isNegative()&&n&&(t=t.addUnsafe(v.toFormat(t.format))),t}round(e){null==e&&(e=0);let t=this.toString().split(".");if(1===t.length&&t.push("0"),(e<0||e>80||e%1)&&s.throwArgumentError("invalid decimal count","decimals",e),t[1].length<=e)return this;let n=g.from("1"+c.substring(0,e),this.format),r=b.toFormat(this.format);return this.mulUnsafe(n).addUnsafe(r).floor().divUnsafe(n)}isZero(){return"0.0"===this._value||"0"===this._value}isNegative(){return"-"===this._value[0]}toString(){return this._value}toHexString(e){if(null==e)return this._hex;e%8&&s.throwArgumentError("invalid byte width","width",e);let t=o.O$.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();return(0,r.$m)(t,e/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(e){return g.fromString(this._value,e)}static fromValue(e,t,n){return null!=n||null==t||(0,o.Zm)(t)||(n=t,t=null),null==t&&(t=0),null==n&&(n="fixed"),g.fromString(f(e,t),y.from(n))}static fromString(e,t){null==t&&(t="fixed");let n=y.from(t),a=h(e,n.decimals);!n.signed&&a.lt(d)&&p("unsigned value cannot be negative","overflow","value",e);let i=null;n.signed?i=a.toTwos(n.width).toHexString():(i=a.toHexString(),i=(0,r.$m)(i,n.width/8));let o=f(a,n.decimals);return new g(l,i,o,n)}static fromBytes(e,t){null==t&&(t="fixed");let n=y.from(t);if((0,r.lE)(e).length>n.width/8)throw Error("overflow");let a=o.O$.from(e);n.signed&&(a=a.fromTwos(n.width));let i=a.toTwos((n.signed?0:1)+n.width).toHexString(),s=f(a,n.decimals);return new g(l,i,s,n)}static from(e,t){if("string"==typeof e)return g.fromString(e,t);if((0,r._t)(e))return g.fromBytes(e,t);try{return g.fromValue(e,0,t)}catch(e){if(e.code!==a.Yd.errors.INVALID_ARGUMENT)throw e}return s.throwArgumentError("invalid FixedNumber value","value",e)}static isFixedNumber(e){return!!(e&&e._isFixedNumber)}}let v=g.from(1),b=g.from("0.5"),x=new a.Yd("units/5.7.0"),w=["wei","kwei","mwei","gwei","szabo","finney","ether"];function S(e,t){if("string"==typeof t){let e=w.indexOf(t);-1!==e&&(t=3*e)}return f(e,null!=t?t:18)}function T(e,t){if("string"!=typeof e&&x.throwArgumentError("value must be a string","value",e),"string"==typeof t){let e=w.indexOf(t);-1!==e&&(t=3*e)}return h(e,null!=t?t:18)}function Z(e){return S(e,18)}function E(e){return T(e,18)}},7357:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(7462),a=n(3366),i=n(7294),o=n(828),s=n(9731),l=n(6523),d=n(9707),u=n(6682),p=n(5893);let c=["className","component"];var m=n(7078),f=n(8239),h=n(606);let y=(0,f.Z)(),g=function(e={}){let{themeId:t,defaultTheme:n,defaultClassName:m="MuiBox-root",generateClassName:f}=e,h=(0,s.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(l.Z),y=i.forwardRef(function(e,i){let s=(0,u.Z)(n),l=(0,d.Z)(e),{className:y,component:g="div"}=l,v=(0,a.Z)(l,c);return(0,p.jsx)(h,(0,r.Z)({as:g,ref:i,className:(0,o.Z)(y,f?f(m):m),theme:t&&s[t]||s},v))});return y}({themeId:h.Z,defaultTheme:y,defaultClassName:"MuiBox-root",generateClassName:m.Z.generate});var v=g},9417:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(3366),a=n(7462),i=n(7294),o=n(3961),s=n(7925),l=n(4780),d=n(1796),u=n(948),p=n(1657),c=n(7739),m=n(8216),f=n(1588),h=n(4867);function y(e){return(0,h.Z)("MuiButton",e)}let g=(0,f.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),v=i.createContext({}),b=i.createContext(void 0);var x=n(5893);let w=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=e=>{let{color:t,disableElevation:n,fullWidth:r,size:i,variant:o,classes:s}=e,d={root:["root",o,`${o}${(0,m.Z)(t)}`,`size${(0,m.Z)(i)}`,`${o}Size${(0,m.Z)(i)}`,"inherit"===t&&"colorInherit",n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,m.Z)(i)}`],endIcon:["endIcon",`iconSize${(0,m.Z)(i)}`]},u=(0,l.Z)(d,y,s);return(0,a.Z)({},s,u)},T=e=>(0,a.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),Z=(0,u.ZP)(c.Z,{shouldForwardProp:e=>(0,u.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,m.Z)(n.color)}`],t[`size${(0,m.Z)(n.size)}`],t[`${n.variant}Size${(0,m.Z)(n.size)}`],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var n,r;let i="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],o="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,a.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,a.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:o,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,a.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${g.focusVisible}`]:(0,a.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${g.disabled}`]:(0,a.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(n=(r=e.palette).getContrastText)?void 0:n.call(r,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:i,boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${g.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${g.disabled}`]:{boxShadow:"none"}}),E=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.startIcon,t[`iconSize${(0,m.Z)(n.size)}`]]}})(({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},T(e))),z=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.endIcon,t[`iconSize${(0,m.Z)(n.size)}`]]}})(({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},T(e))),A=i.forwardRef(function(e,t){let n=i.useContext(v),l=i.useContext(b),d=(0,s.Z)(n,e),u=(0,p.Z)({props:d,name:"MuiButton"}),{children:c,color:m="primary",component:f="button",className:h,disabled:y=!1,disableElevation:g=!1,disableFocusRipple:T=!1,endIcon:A,focusVisibleClassName:C,fullWidth:F=!1,size:M="medium",startIcon:_,type:k,variant:$="text"}=u,I=(0,r.Z)(u,w),N=(0,a.Z)({},u,{color:m,component:f,disabled:y,disableElevation:g,disableFocusRipple:T,fullWidth:F,size:M,type:k,variant:$}),O=S(N),B=_&&(0,x.jsx)(E,{className:O.startIcon,ownerState:N,children:_}),R=A&&(0,x.jsx)(z,{className:O.endIcon,ownerState:N,children:A});return(0,x.jsxs)(Z,(0,a.Z)({ownerState:N,className:(0,o.Z)(n.className,O.root,h,l||""),component:f,disabled:y,focusRipple:!T,focusVisibleClassName:(0,o.Z)(O.focusVisible,C),ref:t,type:k},I,{classes:O,children:[B,c,R]}))});var C=A},2396:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/iotabots/components/Burn",function(){return n(6120)}])},8226:function(e,t,n){"use strict";var r=n(5893);n(7294);var a=n(7357),i=n(5861),o=n(8078);let s=e=>{let{label:t,value:n,symbol:s}=e;return(0,r.jsxs)(a.Z,{sx:l.card,children:[(0,r.jsx)(i.Z,{color:"text.secondary",fontSize:14,mt:0,children:t}),(0,r.jsxs)(a.Z,{sx:l.wrapper,children:[(0,r.jsx)(i.Z,{boxShadow:1,variant:"h6",my:0,mr:1,children:n?n.split(".")[0]:(0,r.jsx)(o.Z,{width:60})}),(0,r.jsx)(i.Z,{boxShadow:1,fontWeight:700,fontSize:12,color:"text.secondary",children:s})]})]})},l={container:{width:"100%",display:"flex",marginBottom:"30px",gap:2},card:{bgcolor:"background.paper",p:2,flex:1,borderRadius:2,boxShadow:1},wrapper:{display:"flex",alignItems:"flex-end"}};t.Z=s},7309:function(e,t,n){"use strict";n.d(t,{M:function(){return r}});let r={soonabotRaceAddr:"0xC587021041Fd1f5e15a24bdCE3F37DddB359b8D6",soonabotsAddr:"0x2f5C574ddF275b4cDfAE26fE8e75621c4B7E106e",soonabotsStakeAddr:"0x83a612E70A505012F7E38e4b8f37C806f2ef7Aa8",iotabotsAddr:"0xb5A53615170e4684E488C9E1c641aB9dDC307489",iotabotsGameAddr:"0x3CE8aB86dED969004102caB650060373e04A0448",eggsAddr:"0xdFCF738225F6508F7A664c3c7D236432501e16d4",eggsBurnAddr:"0x08c399d67d6A536b21d8D4CAd2F703fFd3e0aF58",nftMarketAddr:"0x390f1A9056121bf3087010Ea3804c920f3AE03c9",questsAddr:"0x7Db4a0de77b13780b4eFd3bAe634A5bAe57F611f"}},6120:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var r=n(5893),a=n(7294),i=n(7357),o=n(5861),s=n(1438),l=n(9485),d=n(6076),u=n(5553),p=n(7921),c=n(2929),m=n(4687),f=n(5441),h=n(9417),y=n(7309);let g=()=>{let{library:e,active:t}=(0,m.Ge)(),[n,g]=(0,a.useState)(10),[v,b]=(0,a.useState)(""),x=y.M.eggsBurnAddr,w=y.M.eggsAddr,S=async()=>{let t=new s.Qg(e.provider);if(!t){b("No provider available");return}if(!l.UJ(x)){b("Invalid contract address");return}try{await T()}catch(e){b("Error: ".concat(e.message))}let r=t.getSigner(),a=new d.CH(x,p,r);try{b("Sending transaction...");let e=await a.burnTokens(u.vz(String(n),18));b("Transaction sent, waiting for confirmation..."),await e.wait(),b("Transaction confirmed, tokens burned! \uD83D\uDD25")}catch(e){b("Error: ".concat(e.message))}},T=async()=>{let t=new s.Qg(e.provider);if(!t){b("No provider available");return}if(!l.UJ(x)){b("Invalid contract address");return}let r=t.getSigner(),a=u.vz(String(n),18);try{b("Sending approval transaction...");let e=new d.CH(w,c,r),t=await e.approve(x,a);b("Approval transaction sent, waiting for confirmation..."),await t.wait(),b("Approval transaction confirmed")}catch(e){b("Error: ".concat(e.message))}};return(0,r.jsxs)(i.Z,{sx:{p:4,bgcolor:"background.paper"},children:[t&&(0,r.jsxs)(i.Z,{sx:{display:"flex",gap:4},children:[(0,r.jsx)(f.Z,{sx:{flex:1},type:"number",variant:"filled",value:n,onChange:e=>g(Number(e.target.value)),label:"Amount to burn"}),(0,r.jsx)(h.Z,{variant:"contained",disabled:n<=0,onClick:S,children:"Burn Tokens \uD83D\uDD25"})]}),v&&(0,r.jsx)(o.Z,{children:v})]})};var v=n(8226);let b=()=>{let[e,t]=(0,a.useState)(""),n=y.M.eggsAddr,{library:i}=(0,m.Ge)();return(0,a.useEffect)(()=>{let e=async()=>{if(!i||!l.UJ(n))return;let e=new s.Qg(i.provider),r=new d.CH(n,c,e);try{let e=await r.balanceOf("0x000000000000000000000000000000000000dEaD");t(u.bM(e,18))}catch(e){console.error("Error fetching total burned tokens: ".concat(e.message))}};(null==i?void 0:i.provider)&&e()},[i,n]),(0,r.jsx)(v.Z,{label:"Total Burned Tokens",value:e,symbol:"EGGS"})},x=()=>(0,r.jsxs)(i.Z,{sx:w.root,children:[(0,r.jsxs)(i.Z,{sx:w.wrapper,children:[(0,r.jsxs)(i.Z,{sx:{flex:1},children:[(0,r.jsx)(o.Z,{variant:"h4",children:"Burn EGG Tokens"}),(0,r.jsx)(o.Z,{children:"You can either burn or sell your tokens. By burning them you participate in the Leaderboard below."})]}),(0,r.jsx)(i.Z,{children:(0,r.jsx)(b,{})})]}),(0,r.jsx)(g,{})]}),w={root:{bgcolor:"primary.main",borderRadius:2,boxShadow:1,overflow:"hidden"},wrapper:{display:"flex",gap:4,p:4}};var S=x},828:function(e,t,n){"use strict";t.Z=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(a&&(a+=" "),a+=r);else for(n in t)t[n]&&(a&&(a+=" "),a+=n)}return a}(e))&&(r&&(r+=" "),r+=t);return r}},7921:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"_eggsToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"burnedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eggsToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getBurnerAtIndex","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBurnerCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"top","type":"uint256"}],"name":"getTopBurners","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"}]')},2929:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')}},function(e){e.O(0,[5861,7739,1262,7910,755,7672,9774,2888,179],function(){return e(e.s=2396)}),_N_E=e.O()}]);