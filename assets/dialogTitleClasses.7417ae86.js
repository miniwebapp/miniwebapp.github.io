import{g as W,h as v,r as d,s as u,i as V,M as q,k as l,a as r,P as w,u as B,l as G,_ as A,m as J,j as s,c as x,b as T,n as O}from"./index.42ecc71a.js";function Q(o){return v("MuiDialog",o)}const Z=W("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);var k=Z;const oo=d.exports.createContext({});var ao=oo;const eo=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],io=u(V,{name:"MuiDialog",slot:"Backdrop",overrides:(o,a)=>a.backdrop})({zIndex:-1}),ro=o=>{const{classes:a,scroll:e,maxWidth:i,fullWidth:t,fullScreen:n}=o,c={root:["root"],container:["container",`scroll${l(e)}`],paper:["paper",`paperScroll${l(e)}`,`paperWidth${l(String(i))}`,t&&"paperFullWidth",n&&"paperFullScreen"]};return T(c,Q,a)},to=u(q,{name:"MuiDialog",slot:"Root",overridesResolver:(o,a)=>a.root})({"@media print":{position:"absolute !important"}}),so=u("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.container,a[`scroll${l(e.scroll)}`]]}})(({ownerState:o})=>r({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),lo=u(w,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.paper,a[`scrollPaper${l(e.scroll)}`],a[`paperWidth${l(String(e.maxWidth))}`],e.fullWidth&&a.paperFullWidth,e.fullScreen&&a.paperFullScreen]}})(({theme:o,ownerState:a})=>r({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},a.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},a.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!a.maxWidth&&{maxWidth:"calc(100% - 64px)"},a.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`${o.breakpoints.values.xs}${o.breakpoints.unit}`,[`&.${k.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},a.maxWidth&&a.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[a.maxWidth]}${o.breakpoints.unit}`,[`&.${k.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[a.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},a.fullWidth&&{width:"calc(100% - 64px)"},a.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${k.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),no=d.exports.forwardRef(function(a,e){const i=B({props:a,name:"MuiDialog"}),t=G(),n={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{"aria-describedby":c,"aria-labelledby":g,BackdropComponent:h,BackdropProps:R,children:N,className:F,disableEscapeKeyDown:y=!1,fullScreen:U=!1,fullWidth:j=!1,maxWidth:I="sm",onBackdropClick:S,onClose:b,open:P,PaperComponent:L=w,PaperProps:M={},scroll:_="paper",TransitionComponent:E=O,transitionDuration:$=n,TransitionProps:K}=i,X=A(i,eo),m=r({},i,{disableEscapeKeyDown:y,fullScreen:U,fullWidth:j,maxWidth:I,scroll:_}),f=ro(m),D=d.exports.useRef(),Y=p=>{D.current=p.target===p.currentTarget},z=p=>{!D.current||(D.current=null,S&&S(p),b&&b(p,"backdropClick"))},C=J(g),H=d.exports.useMemo(()=>({titleId:C}),[C]);return s(to,r({className:x(f.root,F),closeAfterTransition:!0,components:{Backdrop:io},componentsProps:{backdrop:r({transitionDuration:$,as:h},R)},disableEscapeKeyDown:y,onClose:b,open:P,ref:e,onClick:z,ownerState:m},X,{children:s(E,r({appear:!0,in:P,timeout:$,role:"presentation"},K,{children:s(so,{className:x(f.container),onMouseDown:Y,ownerState:m,children:s(lo,r({as:L,elevation:24,role:"dialog","aria-describedby":c,"aria-labelledby":C},M,{className:x(f.paper,M.className),ownerState:m,children:s(ao.Provider,{value:H,children:N})}))})}))}))});var bo=no;function co(o){return v("MuiDialogActions",o)}W("MuiDialogActions",["root","spacing"]);const po=["className","disableSpacing"],uo=o=>{const{classes:a,disableSpacing:e}=o;return T({root:["root",!e&&"spacing"]},co,a)},go=u("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.root,!e.disableSpacing&&a.spacing]}})(({ownerState:o})=>r({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),mo=d.exports.forwardRef(function(a,e){const i=B({props:a,name:"MuiDialogActions"}),{className:t,disableSpacing:n=!1}=i,c=A(i,po),g=r({},i,{disableSpacing:n}),h=uo(g);return s(go,r({className:x(h.root,t),ownerState:g,ref:e},c))});var fo=mo;function Do(o){return v("MuiDialogTitle",o)}const xo=W("MuiDialogTitle",["root"]);var Co=xo;export{ao as D,bo as a,fo as b,Co as d,Do as g};
