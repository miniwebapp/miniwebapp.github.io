import{g as W,e as y,a as d,s as u,f as V,M as q,h as l,_ as s,P as w,i as B,k as G,l as A,m as J,j as r,n as x,o as T,F as O}from"./App-3a96b618.js";function Q(o){return y("MuiDialog",o)}const Z=W("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),k=Z,oo=d.createContext({}),ao=oo,eo=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],io=u(V,{name:"MuiDialog",slot:"Backdrop",overrides:(o,a)=>a.backdrop})({zIndex:-1}),so=o=>{const{classes:a,scroll:e,maxWidth:i,fullWidth:t,fullScreen:n}=o,c={root:["root"],container:["container",`scroll${l(e)}`],paper:["paper",`paperScroll${l(e)}`,`paperWidth${l(String(i))}`,t&&"paperFullWidth",n&&"paperFullScreen"]};return T(c,Q,a)},to=u(q,{name:"MuiDialog",slot:"Root",overridesResolver:(o,a)=>a.root})({"@media print":{position:"absolute !important"}}),ro=u("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.container,a[`scroll${l(e.scroll)}`]]}})(({ownerState:o})=>s({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),lo=u(w,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.paper,a[`scrollPaper${l(e.scroll)}`],a[`paperWidth${l(String(e.maxWidth))}`],e.fullWidth&&a.paperFullWidth,e.fullScreen&&a.paperFullScreen]}})(({theme:o,ownerState:a})=>s({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},a.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},a.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!a.maxWidth&&{maxWidth:"calc(100% - 64px)"},a.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`${o.breakpoints.values.xs}${o.breakpoints.unit}`,[`&.${k.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},a.maxWidth&&a.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[a.maxWidth]}${o.breakpoints.unit}`,[`&.${k.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[a.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},a.fullWidth&&{width:"calc(100% - 64px)"},a.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${k.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),no=d.forwardRef(function(a,e){const i=B({props:a,name:"MuiDialog"}),t=G(),n={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{"aria-describedby":c,"aria-labelledby":g,BackdropComponent:h,BackdropProps:R,children:j,className:F,disableEscapeKeyDown:v=!1,fullScreen:N=!1,fullWidth:U=!1,maxWidth:E="sm",onBackdropClick:S,onClose:b,open:P,PaperComponent:I=w,PaperProps:M={},scroll:L="paper",TransitionComponent:_=O,transitionDuration:$=n,TransitionProps:K}=i,X=A(i,eo),m=s({},i,{disableEscapeKeyDown:v,fullScreen:N,fullWidth:U,maxWidth:E,scroll:L}),f=so(m),D=d.useRef(),Y=p=>{D.current=p.target===p.currentTarget},z=p=>{D.current&&(D.current=null,S&&S(p),b&&b(p,"backdropClick"))},C=J(g),H=d.useMemo(()=>({titleId:C}),[C]);return r.jsx(to,s({className:x(f.root,F),closeAfterTransition:!0,components:{Backdrop:io},componentsProps:{backdrop:s({transitionDuration:$,as:h},R)},disableEscapeKeyDown:v,onClose:b,open:P,ref:e,onClick:z,ownerState:m},X,{children:r.jsx(_,s({appear:!0,in:P,timeout:$,role:"presentation"},K,{children:r.jsx(ro,{className:x(f.container),onMouseDown:Y,ownerState:m,children:r.jsx(lo,s({as:I,elevation:24,role:"dialog","aria-describedby":c,"aria-labelledby":C},M,{className:x(f.paper,M.className),ownerState:m,children:r.jsx(ao.Provider,{value:H,children:j})}))})}))}))}),bo=no;function co(o){return y("MuiDialogActions",o)}W("MuiDialogActions",["root","spacing"]);const po=["className","disableSpacing"],uo=o=>{const{classes:a,disableSpacing:e}=o;return T({root:["root",!e&&"spacing"]},co,a)},go=u("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.root,!e.disableSpacing&&a.spacing]}})(({ownerState:o})=>s({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),mo=d.forwardRef(function(a,e){const i=B({props:a,name:"MuiDialogActions"}),{className:t,disableSpacing:n=!1}=i,c=A(i,po),g=s({},i,{disableSpacing:n}),h=uo(g);return r.jsx(go,s({className:x(h.root,t),ownerState:g,ref:e},c))}),fo=mo;function Do(o){return y("MuiDialogTitle",o)}const xo=W("MuiDialogTitle",["root"]),Co=xo;export{bo as D,fo as a,ao as b,Co as d,Do as g};