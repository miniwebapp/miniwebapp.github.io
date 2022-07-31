import{h as S,g as B,s as D,a as m,r as u,u as w,_ as T,j as e,c as M,b as R,e as s,F as x,R as k,B as g,T as a,P as y,a4 as A,I as P,a5 as F,L as f,f as I,a6 as O,a7 as W,a8 as N,a9 as j,t as L}from"./index.42ecc71a.js";import{d as Q,a as U,b as _}from"./dialogTitleClasses.7417ae86.js";import{S as $}from"./Stack.8b665b7f.js";function q(t){return S("MuiDialogContent",t)}B("MuiDialogContent",["root","dividers"]);const E=["className","dividers"],H=t=>{const{classes:o,dividers:r}=t;return R({root:["root",r&&"dividers"]},q,o)},K=D("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[o.root,r.dividers&&o.dividers]}})(({theme:t,ownerState:o})=>m({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},o.dividers?{padding:"16px 24px",borderTop:`1px solid ${(t.vars||t).palette.divider}`,borderBottom:`1px solid ${(t.vars||t).palette.divider}`}:{[`.${Q.root} + &`]:{paddingTop:0}})),z=u.exports.forwardRef(function(o,r){const n=w({props:o,name:"MuiDialogContent"}),{className:c,dividers:d=!1}=n,p=T(n,E),l=m({},n,{dividers:d}),h=H(l);return e(K,m({className:M(h.root,c),ownerState:l,ref:r},p))});var G=z;function X(){const[t,o]=u.exports.useState(!1),[r,n]=u.exports.useState(""),c=()=>{o(!1)},d=u.exports.useRef(),p=i=>{i.key==="Enter"&&l()},l=()=>{n(d.current.firstChild.value),o(!0)},h=i=>{n(i.target.innerText),o(!0)};return s(x,{children:[e(k,{}),s(g,{px:4,py:6,bgcolor:"#eee",children:[e(a,{variant:"h1",color:"#0842a0",fontSize:{xs:"x-large",sm:"xx-large"},textAlign:"center",children:"How can we help you?"}),e(g,{maxWidth:"sm",component:y,elevation:4,borderRadius:10,mx:"auto",my:5,children:e(A,{ref:d,endAdornment:e(P,{onClick:l,sx:{height:30,width:30,m:1},children:e(F,{})}),autoFocus:!0,sx:{color:"inherit","& .MuiInputBase-input":{pl:3,width:"100%"},width:"100%"},placeholder:"Search your query\u2026",onKeyDownCapture:p})}),s(U,{onClose:c,open:t,children:[s(G,{dividers:!0,children:[s(a,{gutterBottom:!0,fontStyle:"italic",children:["Result for: ",r]}),s(x,{children:[e(a,{fontWeight:"bold",gutterBottom:!0,children:"No results found!"}),s(a,{gutterBottom:!0,children:["Please ",e(f,{to:"/contact",children:"contact us"})," to solve your query."]})]})]}),e(_,{children:e(I,{autoFocus:!0,onClick:c,children:"OK"})})]})]}),s(g,{p:4,children:[e(a,{mb:2,children:"Browse Frequently Asked Questions (FAQs)"}),e(y,{elevation:3,children:[{title:"Manage your account and settings",options:["Sign up and manage your account","Manage account settings","Manage privacy settings","Manage accessibility settings","Troubleshoot account issues","Delete your account"]},{title:"Course related issues",options:["Spelling mistake?","Wrong information?","Other course related issues"]},{title:"Fix a problem",options:["Technical gliches?","Report bugs"]},{title:"Policy, safety and copyright",options:["read Privacy Policy"]},{title:"Others",options:["Want to contribute?"]}].map((i,v)=>s(O,{TransitionProps:{unmountOnExit:!0},disableGutters:!0,children:[e(W,{expandIcon:e(N,{}),children:i.title}),e(j,{sx:{bgcolor:"#d8e4f7"},children:i.options.map((C,b)=>e(a,{onClick:h,ml:2,color:"primary",sx:{cursor:"pointer"},gutterBottom:!0,children:C},b))})]},v))})]}),e($,{p:2,bgcolor:"#d8e4f7",alignItems:"center",children:s(a,{variant:"subtitle1",children:["Not Solved? ",e(f,{to:"/contact",children:"Contact us"})]})}),e(L,{})]})}export{X as default};
