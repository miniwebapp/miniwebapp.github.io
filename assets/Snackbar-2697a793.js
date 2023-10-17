import{r as c,n as ge,$ as X,O as U,j as s,g as G,d as V,q as $,s as A,P as se,h as w,ae as Q,af as ee,i as g,k as q,l as W,I as ve,o as K,p as Z,ag as he,X as me,a0 as Ce}from"./index-f83ed4d4.js";function ne(e){return e.substring(2).toLowerCase()}function xe(e,n){return n.documentElement.clientWidth<e.clientX||n.documentElement.clientHeight<e.clientY}function ke(e){const{children:n,disableReactTree:o=!1,mouseEvent:r="onClick",onClickAway:t,touchEvent:d="onTouchEnd"}=e,C=c.useRef(!1),p=c.useRef(null),x=c.useRef(!1),l=c.useRef(!1);c.useEffect(()=>(setTimeout(()=>{x.current=!0},0),()=>{x.current=!1}),[]);const m=ge(n.ref,p),k=X(i=>{const u=l.current;l.current=!1;const v=U(p.current);if(!x.current||!p.current||"clientX"in i&&xe(i,v))return;if(C.current){C.current=!1;return}let f;i.composedPath?f=i.composedPath().indexOf(p.current)>-1:f=!v.documentElement.contains(i.target)||p.current.contains(i.target),!f&&(o||!u)&&t(i)}),M=i=>u=>{l.current=!0;const v=n.props[i];v&&v(u)},E={ref:m};return d!==!1&&(E[d]=M(d)),c.useEffect(()=>{if(d!==!1){const i=ne(d),u=U(p.current),v=()=>{C.current=!0};return u.addEventListener(i,k),u.addEventListener("touchmove",v),()=>{u.removeEventListener(i,k),u.removeEventListener("touchmove",v)}}},[k,d]),r!==!1&&(E[r]=M(r)),c.useEffect(()=>{if(r!==!1){const i=ne(r),u=U(p.current);return u.addEventListener(i,k),()=>{u.removeEventListener(i,k)}}},[k,r]),s.jsx(c.Fragment,{children:c.cloneElement(n,E)})}function be(e){return V("MuiAlert",e)}const Ee=G("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),te=Ee,Ae=$(s.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),Se=$(s.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Me=$(s.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),ye=$(s.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Re=$(s.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),Le=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],we=e=>{const{variant:n,color:o,severity:r,classes:t}=e,d={root:["root",`${n}${w(o||r)}`,`${n}`],icon:["icon"],message:["message"],action:["action"]};return Z(d,be,t)},Ie=A(se,{name:"MuiAlert",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,n[o.variant],n[`${o.variant}${w(o.color||o.severity)}`]]}})(({theme:e,ownerState:n})=>{const o=e.palette.mode==="light"?Q:ee,r=e.palette.mode==="light"?ee:Q,t=n.color||n.severity;return g({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},t&&n.variant==="standard"&&{color:e.vars?e.vars.palette.Alert[`${t}Color`]:o(e.palette[t].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${t}StandardBg`]:r(e.palette[t].light,.9),[`& .${te.icon}`]:e.vars?{color:e.vars.palette.Alert[`${t}IconColor`]}:{color:e.palette[t].main}},t&&n.variant==="outlined"&&{color:e.vars?e.vars.palette.Alert[`${t}Color`]:o(e.palette[t].light,.6),border:`1px solid ${(e.vars||e).palette[t].light}`,[`& .${te.icon}`]:e.vars?{color:e.vars.palette.Alert[`${t}IconColor`]}:{color:e.palette[t].main}},t&&n.variant==="filled"&&g({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${t}FilledColor`],backgroundColor:e.vars.palette.Alert[`${t}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[t].dark:e.palette[t].main,color:e.palette.getContrastText(e.palette[t].main)}))}),Oe=A("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,n)=>n.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),$e=A("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,n)=>n.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),oe=A("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,n)=>n.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),re={success:s.jsx(Ae,{fontSize:"inherit"}),warning:s.jsx(Se,{fontSize:"inherit"}),error:s.jsx(Me,{fontSize:"inherit"}),info:s.jsx(ye,{fontSize:"inherit"})},je=c.forwardRef(function(n,o){var r,t,d,C,p,x;const l=q({props:n,name:"MuiAlert"}),{action:m,children:k,className:M,closeText:E="Close",color:i,components:u={},componentsProps:v={},icon:f,iconMapping:j=re,onClose:I,role:z="alert",severity:h="success",slotProps:y={},slots:P={},variant:_="standard"}=l,T=W(l,Le),b=g({},l,{color:i,severity:h,variant:_}),S=we(b),D=(r=(t=P.closeButton)!=null?t:u.CloseButton)!=null?r:ve,B=(d=(C=P.closeIcon)!=null?C:u.CloseIcon)!=null?d:Re,F=(p=y.closeButton)!=null?p:v.closeButton,R=(x=y.closeIcon)!=null?x:v.closeIcon;return s.jsxs(Ie,g({role:z,elevation:0,ownerState:b,className:K(S.root,M),ref:o},T,{children:[f!==!1?s.jsx(Oe,{ownerState:b,className:S.icon,children:f||j[h]||re[h]}):null,s.jsx($e,{ownerState:b,className:S.message,children:k}),m!=null?s.jsx(oe,{ownerState:b,className:S.action,children:m}):null,m==null&&I?s.jsx(oe,{ownerState:b,className:S.action,children:s.jsx(D,g({size:"small","aria-label":E,title:E,color:"inherit",onClick:I},F,{children:s.jsx(B,g({fontSize:"small"},R))}))}):null]}))}),Ke=je;function ze(e){return V("MuiSnackbarContent",e)}G("MuiSnackbarContent",["root","message","action"]);const Pe=["action","className","message","role"],Te=e=>{const{classes:n}=e;return Z({root:["root"],action:["action"],message:["message"]},ze,n)},Be=A(se,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e})=>{const n=e.palette.mode==="light"?.8:.98,o=he(e.palette.background.default,n);return g({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(o),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:o,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),Ne=A("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,n)=>n.message})({padding:"8px 0"}),He=A("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,n)=>n.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),We=c.forwardRef(function(n,o){const r=q({props:n,name:"MuiSnackbarContent"}),{action:t,className:d,message:C,role:p="alert"}=r,x=W(r,Pe),l=r,m=Te(l);return s.jsxs(Be,g({role:p,square:!0,elevation:6,className:K(m.root,d),ownerState:l,ref:o},x,{children:[s.jsx(Ne,{className:m.message,ownerState:l,children:C}),t?s.jsx(He,{className:m.action,ownerState:l,children:t}):null]}))}),_e=We;function De(e){return V("MuiSnackbar",e)}G("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const Fe=["onEnter","onExited"],Ue=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],Xe=e=>{const{classes:n,anchorOrigin:o}=e,r={root:["root",`anchorOrigin${w(o.vertical)}${w(o.horizontal)}`]};return Z(r,De,n)},Ge=A("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,n[`anchorOrigin${w(o.anchorOrigin.vertical)}${w(o.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:n})=>{const o={left:"50%",right:"auto",transform:"translateX(-50%)"};return g({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},n.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},n.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},n.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:g({},n.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},n.anchorOrigin.horizontal==="center"&&o,n.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},n.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),Ve=c.forwardRef(function(n,o){const r=q({props:n,name:"MuiSnackbar"}),t=me(),d={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{action:C,anchorOrigin:{vertical:p,horizontal:x}={vertical:"bottom",horizontal:"left"},autoHideDuration:l=null,children:m,className:k,ClickAwayListenerProps:M,ContentProps:E,disableWindowBlurListener:i=!1,message:u,onBlur:v,onClose:f,onFocus:j,onMouseEnter:I,onMouseLeave:z,open:h,resumeHideDuration:y,TransitionComponent:P=Ce,transitionDuration:_=d,TransitionProps:{onEnter:T,onExited:b}={}}=r,S=W(r.TransitionProps,Fe),D=W(r,Ue),B=g({},r,{anchorOrigin:{vertical:p,horizontal:x}}),F=Xe(B),R=c.useRef(),[Y,J]=c.useState(!0),ae=X((...a)=>{f&&f(...a)}),N=X(a=>{!f||a==null||(clearTimeout(R.current),R.current=setTimeout(()=>{ae(null,"timeout")},a))});c.useEffect(()=>(h&&N(l),()=>{clearTimeout(R.current)}),[h,l,N]);const H=()=>{clearTimeout(R.current)},O=c.useCallback(()=>{l!=null&&N(y??l*.5)},[l,y,N]),ie=a=>{j&&j(a),H()},le=a=>{I&&I(a),H()},ce=a=>{v&&v(a),O()},ue=a=>{z&&z(a),O()},de=a=>{f&&f(a,"clickaway")},pe=a=>{J(!0),b&&b(a)},fe=(a,L)=>{J(!1),T&&T(a,L)};return c.useEffect(()=>{if(!i&&h)return window.addEventListener("focus",O),window.addEventListener("blur",H),()=>{window.removeEventListener("focus",O),window.removeEventListener("blur",H)}},[i,O,h]),c.useEffect(()=>{if(!h)return;function a(L){L.defaultPrevented||(L.key==="Escape"||L.key==="Esc")&&f&&f(L,"escapeKeyDown")}return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[Y,h,f]),!h&&Y?null:s.jsx(ke,g({onClickAway:de},M,{children:s.jsx(Ge,g({className:K(F.root,k),onBlur:ce,onFocus:ie,onMouseEnter:le,onMouseLeave:ue,ownerState:B,ref:o,role:"presentation"},D,{children:s.jsx(P,g({appear:!0,in:h,timeout:_,direction:p==="top"?"down":"up",onEnter:fe,onExited:pe},S,{children:m||s.jsx(_e,g({message:u,action:C},E))}))}))}))}),Ze=Ve;export{Ke as A,Ze as S};
