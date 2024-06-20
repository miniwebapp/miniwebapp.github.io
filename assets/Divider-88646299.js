import{b as P,_ as i,j as b,h as I,g as $,s as C,r as k,d as F,e as j,k as N,f as T}from"./index-d5f2bd80.js";import{E as _,G as W,a as z,p as U,c as E,h as O}from"./appStore-49dd24e8.js";const V=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],B=["component","slots","slotProps"],q=["component"];function H(t,e){const{className:r,elementType:a,ownerState:s,externalForwardedProps:n,getSlotOwnerState:l,internalForwardedProps:o}=e,f=P(e,V),{component:u,slots:d={[t]:void 0},slotProps:x={[t]:void 0}}=n,v=P(n,B),p=d[t]||a,h=_(x[t],s),g=W(i({className:r},f,{externalForwardedProps:t==="root"?v:void 0,externalSlotProps:h})),{props:{component:c},internalRef:y}=g,w=P(g.props,q),R=z(y,h==null?void 0:h.ref,e.ref),m=l?l(w):{},A=i({},s,m),S=t==="root"?c||u:c,D=U(p,i({},t==="root"&&!u&&!d[t]&&o,t!=="root"&&!d[t]&&o,w,S&&{as:S},{ref:R}),A);return Object.keys(m).forEach(M=>{delete D[M]}),[p,D]}const G=E(b.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function J(t){return $("MuiAvatar",t)}const K=I("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]),pt=K,Q=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],X=O(),Y=t=>{const{classes:e,variant:r,colorDefault:a}=t;return j({root:["root",r,a&&"colorDefault"],img:["img"],fallback:["fallback"]},J,e)},Z=C("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[r.variant],r.colorDefault&&e.colorDefault]}})(({theme:t})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:i({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:i({backgroundColor:t.palette.grey[400]},t.applyStyles("dark",{backgroundColor:t.palette.grey[600]})))}]})),tt=C("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(t,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),et=C(G,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(t,e)=>e.fallback})({width:"75%",height:"75%"});function rt({crossOrigin:t,referrerPolicy:e,src:r,srcSet:a}){const[s,n]=k.useState(!1);return k.useEffect(()=>{if(!r&&!a)return;n(!1);let l=!0;const o=new Image;return o.onload=()=>{l&&n("loaded")},o.onerror=()=>{l&&n("error")},o.crossOrigin=t,o.referrerPolicy=e,o.src=r,a&&(o.srcset=a),()=>{l=!1}},[t,e,r,a]),s}const ot=k.forwardRef(function(e,r){const a=X({props:e,name:"MuiAvatar"}),{alt:s,children:n,className:l,component:o="div",slots:f={},slotProps:u={},imgProps:d,sizes:x,src:v,srcSet:p,variant:h="circular"}=a,g=P(a,Q);let c=null;const y=rt(i({},d,{src:v,srcSet:p})),w=v||p,R=w&&y!=="error",m=i({},a,{colorDefault:!R,component:o,variant:h}),A=Y(m),[S,D]=H("img",{className:A.img,elementType:tt,externalForwardedProps:{slots:f,slotProps:{img:i({},d,u.img)}},additionalProps:{alt:s,src:v,srcSet:p,sizes:x},ownerState:m});return R?c=b.jsx(S,i({},D)):n||n===0?c=n:w&&s?c=s[0]:c=b.jsx(et,{ownerState:m,className:A.fallback}),b.jsx(Z,i({as:o,ownerState:m,className:F(A.root,l),ref:r},g,{children:c}))}),gt=ot;function at(t){return $("MuiDivider",t)}I("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const it=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],nt=t=>{const{absolute:e,children:r,classes:a,flexItem:s,light:n,orientation:l,textAlign:o,variant:f}=t;return j({root:["root",e&&"absolute",f,n&&"light",l==="vertical"&&"vertical",s&&"flexItem",r&&"withChildren",r&&l==="vertical"&&"withChildrenVertical",o==="right"&&l!=="vertical"&&"textAlignRight",o==="left"&&l!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",l==="vertical"&&"wrapperVertical"]},at,a)},lt=C("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.absolute&&e.absolute,e[r.variant],r.light&&e.light,r.orientation==="vertical"&&e.vertical,r.flexItem&&e.flexItem,r.children&&e.withChildren,r.children&&r.orientation==="vertical"&&e.withChildrenVertical,r.textAlign==="right"&&r.orientation!=="vertical"&&e.textAlignRight,r.textAlign==="left"&&r.orientation!=="vertical"&&e.textAlignLeft]}})(({theme:t,ownerState:e})=>i({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},e.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:N(t.palette.divider,.08)},e.variant==="inset"&&{marginLeft:72},e.variant==="middle"&&e.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},e.variant==="middle"&&e.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},e.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},e.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:t})=>i({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:t,ownerState:e})=>i({},e.children&&e.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`}}),({theme:t,ownerState:e})=>i({},e.children&&e.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`}}),({ownerState:t})=>i({},t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),st=C("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.wrapper,r.orientation==="vertical"&&e.wrapperVertical]}})(({theme:t,ownerState:e})=>i({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},e.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),L=k.forwardRef(function(e,r){const a=T({props:e,name:"MuiDivider"}),{absolute:s=!1,children:n,className:l,component:o=n?"div":"hr",flexItem:f=!1,light:u=!1,orientation:d="horizontal",role:x=o!=="hr"?"separator":void 0,textAlign:v="center",variant:p="fullWidth"}=a,h=P(a,it),g=i({},a,{absolute:s,component:o,flexItem:f,light:u,orientation:d,role:x,textAlign:v,variant:p}),c=nt(g);return b.jsx(lt,i({as:o,className:F(c.root,l),role:x,ref:r,ownerState:g},h,{children:n?b.jsx(st,{className:c.wrapper,ownerState:g,children:n}):null}))});L.muiSkipListHighlight=!0;const ft=L;export{gt as A,ft as D,pt as a,H as u};
