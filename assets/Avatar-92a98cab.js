import{j as u,h as C,g as j,s as m,_ as n,r as g,f as w,b as I,d as S,e as D}from"./index-a576c8ed.js";import{c as M}from"./Modal-f965e789.js";const P=M(u.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function z(a){return j("MuiAvatar",a)}const F=C("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]),H=F,N=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],U=a=>{const{classes:e,variant:t,colorDefault:r}=a;return D({root:["root",t,r&&"colorDefault"],img:["img"],fallback:["fallback"]},z,e)},_=m("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:t}=a;return[e.root,e[t.variant],t.colorDefault&&e.colorDefault]}})(({theme:a,ownerState:e})=>n({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},e.variant==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius},e.variant==="square"&&{borderRadius:0},e.colorDefault&&n({color:(a.vars||a).palette.background.default},a.vars?{backgroundColor:a.vars.palette.Avatar.defaultBg}:{backgroundColor:a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[600]}))),E=m("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(a,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),L=m(P,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(a,e)=>e.fallback})({width:"75%",height:"75%"});function q({crossOrigin:a,referrerPolicy:e,src:t,srcSet:r}){const[o,l]=g.useState(!1);return g.useEffect(()=>{if(!t&&!r)return;l(!1);let i=!0;const s=new Image;return s.onload=()=>{i&&l("loaded")},s.onerror=()=>{i&&l("error")},s.crossOrigin=a,s.referrerPolicy=e,s.src=t,r&&(s.srcset=r),()=>{i=!1}},[a,e,t,r]),o}const T=g.forwardRef(function(e,t){const r=w({props:e,name:"MuiAvatar"}),{alt:o,children:l,className:i,component:s="div",imgProps:h,sizes:A,src:f,srcSet:v,variant:y="circular"}=r,R=I(r,N);let c=null;const k=q(n({},h,{src:f,srcSet:v})),b=f||v,x=b&&k!=="error",d=n({},r,{colorDefault:!x,component:s,variant:y}),p=U(d);return x?c=u.jsx(E,n({alt:o,srcSet:v,src:f,sizes:A,ownerState:d,className:p.img},h)):l!=null?c=l:b&&o?c=o[0]:c=u.jsx(L,{ownerState:d,className:p.fallback}),u.jsx(_,n({as:s,ownerState:d,className:S(p.root,i),ref:t},R,{children:c}))}),W=T;export{W as A,H as a};
