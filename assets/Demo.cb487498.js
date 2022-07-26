import{a as W,g as S,r as c,s as u,h as d,_ as l,u as T,b as M,j as i,c as h,e as P,D as J,l as Q,f,F as Z,L as ee}from"./index.9f0ba31e.js";import{R as oe,G as ae}from"./RAppBar.f288d560.js";import{T as j,a as N,b as te}from"./Button.d6f501c7.js";import{P as I,u as re}from"./dividerClasses.81f4eacb.js";import{B as ie,M as se,F as ne}from"./listItemTextClasses.529a9ad1.js";import{u as le}from"./useId.66c3c666.js";import{I as ce}from"./Toolbar.31671d98.js";import{H as pe}from"./ShoppingCart.16348966.js";import"./utils.499d2a7d.js";import"./useSlotProps.512c8a0f.js";import"./ownerDocument.d64bc4d4.js";import"./assertThisInitialized.20611e2e.js";function de(e){return S("MuiDialog",e)}const ue=W("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);var y=ue;const me=c.exports.createContext({});var F=me;const ge=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],he=u(ie,{name:"MuiDialog",slot:"Backdrop",overrides:(e,o)=>o.backdrop})({zIndex:-1}),xe=e=>{const{classes:o,scroll:a,maxWidth:r,fullWidth:n,fullScreen:p}=e,t={root:["root"],container:["container",`scroll${d(a)}`],paper:["paper",`paperScroll${d(a)}`,`paperWidth${d(String(r))}`,n&&"paperFullWidth",p&&"paperFullScreen"]};return P(t,de,o)},fe=u(se,{name:"MuiDialog",slot:"Root",overridesResolver:(e,o)=>o.root})({"@media print":{position:"absolute !important"}}),be=u("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.container,o[`scroll${d(a.scroll)}`]]}})(({ownerState:e})=>l({height:"100%","@media print":{height:"auto"},outline:0},e.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},e.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),De=u(I,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.paper,o[`scrollPaper${d(a.scroll)}`],o[`paperWidth${d(String(a.maxWidth))}`],a.fullWidth&&o.paperFullWidth,a.fullScreen&&o.paperFullScreen]}})(({theme:e,ownerState:o})=>l({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},o.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},o.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!o.maxWidth&&{maxWidth:"calc(100% - 64px)"},o.maxWidth==="xs"&&{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`${e.breakpoints.values.xs}${e.breakpoints.unit}`,[`&.${y.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.maxWidth&&o.maxWidth!=="xs"&&{maxWidth:`${e.breakpoints.values[o.maxWidth]}${e.breakpoints.unit}`,[`&.${y.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[o.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.fullWidth&&{width:"calc(100% - 64px)"},o.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${y.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),ve=c.exports.forwardRef(function(o,a){const r=T({props:o,name:"MuiDialog"}),n=re(),p={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{"aria-describedby":t,"aria-labelledby":s,BackdropComponent:m,BackdropProps:b,children:L,className:E,disableEscapeKeyDown:$=!1,fullScreen:U=!1,fullWidth:_=!1,maxWidth:H="sm",onBackdropClick:B,onClose:D,open:w,PaperComponent:K=I,PaperProps:R={},scroll:G="paper",TransitionComponent:X=ne,transitionDuration:A=p,TransitionProps:Y}=r,z=M(r,ge),x=l({},r,{disableEscapeKeyDown:$,fullScreen:U,fullWidth:_,maxWidth:H,scroll:G}),v=xe(x),C=c.exports.useRef(),O=g=>{C.current=g.target===g.currentTarget},V=g=>{!C.current||(C.current=null,B&&B(g),D&&D(g,"backdropClick"))},k=le(s),q=c.exports.useMemo(()=>({titleId:k}),[k]);return i(fe,l({className:h(v.root,E),closeAfterTransition:!0,components:{Backdrop:he},componentsProps:{backdrop:l({transitionDuration:A,as:m},b)},disableEscapeKeyDown:$,onClose:D,open:w,ref:a,onClick:V,ownerState:x},z,{children:i(X,l({appear:!0,in:w,timeout:A,role:"presentation"},Y,{children:i(be,{className:h(v.container),onMouseDown:O,ownerState:x,children:i(De,l({as:K,elevation:24,role:"dialog","aria-describedby":t,"aria-labelledby":k},R,{className:h(v.paper,R.className),ownerState:x,children:i(F.Provider,{value:q,children:L})}))})}))}))});var Ce=ve;function ke(e){return S("MuiDialogActions",e)}W("MuiDialogActions",["root","spacing"]);const ye=["className","disableSpacing"],We=e=>{const{classes:o,disableSpacing:a}=e;return P({root:["root",!a&&"spacing"]},ke,o)},Se=u("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,!a.disableSpacing&&o.spacing]}})(({ownerState:e})=>l({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),Te=c.exports.forwardRef(function(o,a){const r=T({props:o,name:"MuiDialogActions"}),{className:n,disableSpacing:p=!1}=r,t=M(r,ye),s=l({},r,{disableSpacing:p}),m=We(s);return i(Se,l({className:h(m.root,n),ownerState:s,ref:a},t))});var Me=Te;function Pe(e){return S("MuiDialogTitle",e)}W("MuiDialogTitle",["root"]);const $e=["className","id"],Be=e=>{const{classes:o}=e;return P({root:["root"]},Pe,o)},we=u(j,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),Re=c.exports.forwardRef(function(o,a){const r=T({props:o,name:"MuiDialogTitle"}),{className:n,id:p}=r,t=M(r,$e),s=r,m=Be(s),{titleId:b=p}=c.exports.useContext(F);return i(we,l({component:"h2",className:h(m.root,n),ownerState:s,ref:a,variant:"h6",id:b},t))});var Ae=Re;function Ye(){const{appData:e,editAppData:o}=c.exports.useContext(J),a=Q(),r=t=>{fetch(`./courses/EI0/${t.target.value}.json`).then(s=>s.json()).then(s=>{o(Object.assign({},e,{page:"instruction",cCategory:"Exam Idea Mock",cLang:["English"],tId:t.target.value,tName:n[t.target.value],tAns:s.ans,tTime:s.time})),a("/cbt")})},[n,p]=c.exports.useState(["General Knowledge"]);return c.exports.useEffect(()=>{fetch("./courses/EI0/tn.json").then(t=>t.json()).then(t=>p(t))},[]),f(Z,{children:[i(oe,{}),f(N,{p:2,children:[i(j,{variant:"h5",color:"primary",align:"center",border:1,py:0,mb:2,borderRadius:1,children:"Take Demo Test"}),i(N,{m:2,display:"flex",flexDirection:"row-reverse",flexWrap:"wrap-reverse",justifyContent:"center",children:n.map((t,s)=>i(te,{value:s,sx:{m:1},variant:"contained",onClick:r,children:t},s))})]}),f(Ce,{open:!e.isLogin,maxWidth:"xs",fullWidth:!0,children:[i(Ae,{align:"center",children:"Login to Access"}),f(Me,{children:[i(ee,{to:"/",children:i(ce,{color:"primary",sx:{m:1},children:i(pe,{})})}),i(ae,{})]})]})]})}export{Ye as default};
