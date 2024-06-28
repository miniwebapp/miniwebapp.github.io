import{h as k,g as W,r as d,s as u,a as n,_ as r,f as B,b as T,j as l,d as m,e as R}from"./index-887aa4c0.js";import{s as V,M as q,P as j,e as G,F as J}from"./appStore-abfc5eda.js";import{a as Q}from"./useControlled-ad883d2c.js";function Z(o){return W("MuiDialog",o)}const oo=k("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),v=oo,eo=d.createContext({}),ao=eo,io=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],ro=u(V,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),to=o=>{const{classes:e,scroll:a,maxWidth:i,fullWidth:t,fullScreen:c}=o,p={root:["root"],container:["container",`scroll${n(a)}`],paper:["paper",`paperScroll${n(a)}`,`paperWidth${n(String(i))}`,t&&"paperFullWidth",c&&"paperFullScreen"]};return R(p,Z,e)},so=u(q,{name:"MuiDialog",slot:"Root",overridesResolver:(o,e)=>e.root})({"@media print":{position:"absolute !important"}}),lo=u("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.container,e[`scroll${n(a.scroll)}`]]}})(({ownerState:o})=>r({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),no=u(j,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.paper,e[`scrollPaper${n(a.scroll)}`],e[`paperWidth${n(String(a.maxWidth))}`],a.fullWidth&&e.paperFullWidth,a.fullScreen&&e.paperFullScreen]}})(({theme:o,ownerState:e})=>r({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},e.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${v.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.maxWidth&&e.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[e.maxWidth]}${o.breakpoints.unit}`,[`&.${v.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${v.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),co=d.forwardRef(function(e,a){const i=B({props:e,name:"MuiDialog"}),t=G(),c={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{"aria-describedby":p,"aria-labelledby":g,BackdropComponent:h,BackdropProps:F,children:N,className:U,disableEscapeKeyDown:y=!1,fullScreen:A=!1,fullWidth:E=!1,maxWidth:_="sm",onBackdropClick:$,onClick:P,onClose:b,open:M,PaperComponent:I=j,PaperProps:S={},scroll:L="paper",TransitionComponent:Y=J,transitionDuration:w=c,TransitionProps:K}=i,X=T(i,io),x=r({},i,{disableEscapeKeyDown:y,fullScreen:A,fullWidth:E,maxWidth:_,scroll:L}),f=to(x),C=d.useRef(),z=s=>{C.current=s.target===s.currentTarget},H=s=>{P&&P(s),C.current&&(C.current=null,$&&$(s),b&&b(s,"backdropClick"))},D=Q(g),O=d.useMemo(()=>({titleId:D}),[D]);return l.jsx(so,r({className:m(f.root,U),closeAfterTransition:!0,components:{Backdrop:ro},componentsProps:{backdrop:r({transitionDuration:w,as:h},F)},disableEscapeKeyDown:y,onClose:b,open:M,ref:a,onClick:H,ownerState:x},X,{children:l.jsx(Y,r({appear:!0,in:M,timeout:w,role:"presentation"},K,{children:l.jsx(lo,{className:m(f.container),onMouseDown:z,ownerState:x,children:l.jsx(no,r({as:I,elevation:24,role:"dialog","aria-describedby":p,"aria-labelledby":D},S,{className:m(f.paper,S.className),ownerState:x,children:l.jsx(ao.Provider,{value:O,children:N})}))})}))}))}),vo=co;function po(o){return W("MuiDialogContent",o)}k("MuiDialogContent",["root","dividers"]);function ko(o){return W("MuiDialogTitle",o)}const uo=k("MuiDialogTitle",["root"]),go=uo,xo=["className","dividers"],mo=o=>{const{classes:e,dividers:a}=o;return R({root:["root",a&&"dividers"]},po,e)},ho=u("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,a.dividers&&e.dividers]}})(({theme:o,ownerState:e})=>r({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},e.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${go.root} + &`]:{paddingTop:0}})),bo=d.forwardRef(function(e,a){const i=B({props:e,name:"MuiDialogContent"}),{className:t,dividers:c=!1}=i,p=T(i,xo),g=r({},i,{dividers:c}),h=mo(g);return l.jsx(ho,r({className:m(h.root,t),ownerState:g,ref:a},p))}),Wo=bo;export{vo as D,Wo as a,ao as b,ko as g};
