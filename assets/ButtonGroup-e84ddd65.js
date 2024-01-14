import{g as G,d as T,s as E,i as t,f as W,r as R,k as y,l as L,j as C,ay as P,o as j,h as a,p as M}from"./index-64b38d72.js";function O(r){return T("MuiButtonGroup",r)}const k=G("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]),n=k,H=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],N=(r,o)=>{const{ownerState:i}=r;return[{[`& .${n.grouped}`]:o.grouped},{[`& .${n.grouped}`]:o[`grouped${a(i.orientation)}`]},{[`& .${n.grouped}`]:o[`grouped${a(i.variant)}`]},{[`& .${n.grouped}`]:o[`grouped${a(i.variant)}${a(i.orientation)}`]},{[`& .${n.grouped}`]:o[`grouped${a(i.variant)}${a(i.color)}`]},o.root,o[i.variant],i.disableElevation===!0&&o.disableElevation,i.fullWidth&&o.fullWidth,i.orientation==="vertical"&&o.vertical]},U=r=>{const{classes:o,color:i,disabled:l,disableElevation:u,fullWidth:p,orientation:d,variant:e}=r,s={root:["root",e,d==="vertical"&&"vertical",p&&"fullWidth",u&&"disableElevation"],grouped:["grouped",`grouped${a(d)}`,`grouped${a(e)}`,`grouped${a(e)}${a(d)}`,`grouped${a(e)}${a(i)}`,l&&"disabled"]};return M(s,O,o)},V=E("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:N})(({theme:r,ownerState:o})=>t({display:"inline-flex",borderRadius:(r.vars||r).shape.borderRadius},o.variant==="contained"&&{boxShadow:(r.vars||r).shadows[2]},o.disableElevation&&{boxShadow:"none"},o.fullWidth&&{width:"100%"},o.orientation==="vertical"&&{flexDirection:"column"},{[`& .${n.grouped}`]:t({minWidth:40,"&:not(:first-of-type)":t({},o.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},o.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},o.variant==="outlined"&&o.orientation==="horizontal"&&{marginLeft:-1},o.variant==="outlined"&&o.orientation==="vertical"&&{marginTop:-1}),"&:not(:last-of-type)":t({},o.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},o.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},o.variant==="text"&&o.orientation==="horizontal"&&{borderRight:r.vars?`1px solid rgba(${r.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${r.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},o.variant==="text"&&o.orientation==="vertical"&&{borderBottom:r.vars?`1px solid rgba(${r.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${r.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},o.variant==="text"&&o.color!=="inherit"&&{borderColor:r.vars?`rgba(${r.vars.palette[o.color].mainChannel} / 0.5)`:W(r.palette[o.color].main,.5)},o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"transparent"},o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"transparent"},o.variant==="contained"&&o.orientation==="horizontal"&&{borderRight:`1px solid ${(r.vars||r).palette.grey[400]}`,[`&.${n.disabled}`]:{borderRight:`1px solid ${(r.vars||r).palette.action.disabled}`}},o.variant==="contained"&&o.orientation==="vertical"&&{borderBottom:`1px solid ${(r.vars||r).palette.grey[400]}`,[`&.${n.disabled}`]:{borderBottom:`1px solid ${(r.vars||r).palette.action.disabled}`}},o.variant==="contained"&&o.color!=="inherit"&&{borderColor:(r.vars||r).palette[o.color].dark},{"&:hover":t({},o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"currentColor"},o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),"&:hover":t({},o.variant==="contained"&&{boxShadow:"none"})},o.variant==="contained"&&{boxShadow:"none"})})),_=R.forwardRef(function(o,i){const l=y({props:o,name:"MuiButtonGroup"}),{children:u,className:p,color:d="primary",component:e="div",disabled:s=!1,disableElevation:c=!1,disableFocusRipple:g=!1,disableRipple:v=!1,fullWidth:b=!1,orientation:B="horizontal",size:x="medium",variant:$="outlined"}=l,m=L(l,H),h=t({},l,{color:d,component:e,disabled:s,disableElevation:c,disableFocusRipple:g,disableRipple:v,fullWidth:b,orientation:B,size:x,variant:$}),f=U(h),z=R.useMemo(()=>({className:f.grouped,color:d,disabled:s,disableElevation:c,disableFocusRipple:g,disableRipple:v,fullWidth:b,size:x,variant:$}),[d,s,c,g,v,b,x,$,f.grouped]);return C.jsx(V,t({as:e,role:"group",className:j(f.root,p),ref:i,ownerState:h},m,{children:C.jsx(P.Provider,{value:z,children:u})}))}),D=_;export{D as B};