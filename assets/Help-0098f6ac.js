import{r as n,j as t,B as r,L as u}from"./index-d5f2bd80.js";import{L as y}from"./LeftDrawer-82de19d1.js";import{N as b}from"./NavBarColorful-412b920e.js";import{F as B}from"./Footer-794aa358.js";import{T as e,I as S}from"./ShoppingCartSharp-2b8c7fb8.js";import{P as m,B as C}from"./appStore-49dd24e8.js";import{I as v}from"./InputBase-ae37e126.js";import{S as w}from"./Search-39fc47e9.js";import{D as A,a as D}from"./DialogContent-6c3706a6.js";import{D as F}from"./DialogActions-1b24b2f2.js";import{A as k,a as I,E as P,b as T}from"./ExpandMore-0d6fbe1d.js";import{S as E}from"./Stack-2f8eb58a.js";import"./Divider-88646299.js";import"./Grid-5c364079.js";import"./useControlled-ec3c0305.js";import"./react-is.production.min-a192e302.js";function Y(){const[d,s]=n.useState(!1),[p,i]=n.useState(""),a=()=>{s(!1)},c=n.useRef(),x=o=>{o.key==="Enter"&&l()},l=()=>{i(c.current.firstChild.value),s(!0)},h=o=>{i(o.target.innerText),s(!0)};return t.jsxs(t.Fragment,{children:[t.jsx(y,{}),t.jsxs(r,{flexGrow:1,children:[t.jsx(b,{}),t.jsxs(r,{px:4,py:6,bgcolor:"#eee",children:[t.jsx(e,{variant:"h1",color:"#0842a0",fontSize:{xs:"x-large",sm:"xx-large"},textAlign:"center",children:"How can we help you?"}),t.jsx(r,{maxWidth:"sm",component:m,elevation:4,borderRadius:10,mx:"auto",my:5,children:t.jsx(v,{ref:c,endAdornment:t.jsx(S,{onClick:l,sx:{height:30,width:30,m:1},children:t.jsx(w,{})}),autoFocus:!0,sx:{color:"inherit","& .MuiInputBase-input":{pl:3,width:"100%"},width:"100%"},placeholder:"Search your query…",onKeyDownCapture:x})}),t.jsxs(A,{onClose:a,open:d,children:[t.jsxs(D,{dividers:!0,children:[t.jsxs(e,{gutterBottom:!0,fontStyle:"italic",children:["Result for: ",p]}),t.jsxs(t.Fragment,{children:[t.jsx(e,{fontWeight:"bold",gutterBottom:!0,children:"No results found!"}),t.jsxs(e,{gutterBottom:!0,children:["Please ",t.jsx(u,{to:"/contact",children:"contact us"})," to solve your query."]})]})]}),t.jsx(F,{children:t.jsx(C,{autoFocus:!0,onClick:a,children:"OK"})})]})]}),t.jsxs(r,{p:4,children:[t.jsx(e,{mb:2,children:"Browse Frequently Asked Questions (FAQs)"}),t.jsx(m,{elevation:3,children:[{title:"Manage your account and settings",options:["Sign up and manage your account","Manage account settings","Manage privacy settings","Manage accessibility settings","Troubleshoot account issues","Delete your account"]},{title:"Course related issues",options:["Spelling mistake?","Wrong information?","Other course related issues"]},{title:"Fix a problem",options:["Technical gliches?","Report bugs"]},{title:"Policy, safety and copyright",options:["read Privacy Policy"]},{title:"Others",options:["Want to contribute?"]}].map((o,g)=>t.jsxs(k,{TransitionProps:{unmountOnExit:!0},disableGutters:!0,children:[t.jsx(I,{expandIcon:t.jsx(P,{}),children:o.title}),t.jsx(T,{sx:{bgcolor:"#d8e4f7"},children:o.options.map((j,f)=>t.jsx(e,{onClick:h,ml:2,color:"primary",sx:{cursor:"pointer"},gutterBottom:!0,children:j},f))})]},g))})]}),t.jsx(E,{p:2,bgcolor:"#d8e4f7",alignItems:"center",children:t.jsxs(e,{variant:"subtitle1",children:["Not Solved? ",t.jsx(u,{to:"/contact",children:"Contact us"})]})}),t.jsx(B,{})]})]})}export{Y as default};
