import{r as n,j as t,B as r,L as u}from"./index-459c5962.js";import{L as y}from"./LeftDrawer-ad77a716.js";import{N as b}from"./NavBarColorful-1e818740.js";import{F as B}from"./Footer-c0047b0c.js";import{T as e,I as S}from"./ShoppingCartSharp-1684c5a4.js";import{P as m,B as C}from"./appStore-653fb111.js";import{I as v}from"./InputBase-394763b2.js";import{S as w}from"./Search-1f55f6fe.js";import{D as A,a as D}from"./DialogContent-7297e245.js";import{D as F}from"./DialogActions-84b40391.js";import{A as k,a as I,E as P,b as T}from"./ExpandMore-8b0b4a5e.js";import{S as E}from"./Stack-4dc6229b.js";import"./Divider-866e4931.js";import"./Grid-83f7f219.js";import"./useControlled-99c0d9bb.js";import"./react-is.production.min-a192e302.js";function Y(){const[d,s]=n.useState(!1),[p,i]=n.useState(""),a=()=>{s(!1)},c=n.useRef(),x=o=>{o.key==="Enter"&&l()},l=()=>{i(c.current.firstChild.value),s(!0)},h=o=>{i(o.target.innerText),s(!0)};return t.jsxs(t.Fragment,{children:[t.jsx(y,{}),t.jsxs(r,{flexGrow:1,children:[t.jsx(b,{}),t.jsxs(r,{px:4,py:6,bgcolor:"#eee",children:[t.jsx(e,{variant:"h1",color:"#0842a0",fontSize:{xs:"x-large",sm:"xx-large"},textAlign:"center",children:"How can we help you?"}),t.jsx(r,{maxWidth:"sm",component:m,elevation:4,borderRadius:10,mx:"auto",my:5,children:t.jsx(v,{ref:c,endAdornment:t.jsx(S,{onClick:l,sx:{height:30,width:30,m:1},children:t.jsx(w,{})}),autoFocus:!0,sx:{color:"inherit","& .MuiInputBase-input":{pl:3,width:"100%"},width:"100%"},placeholder:"Search your query…",onKeyDownCapture:x})}),t.jsxs(A,{onClose:a,open:d,children:[t.jsxs(D,{dividers:!0,children:[t.jsxs(e,{gutterBottom:!0,fontStyle:"italic",children:["Result for: ",p]}),t.jsxs(t.Fragment,{children:[t.jsx(e,{fontWeight:"bold",gutterBottom:!0,children:"No results found!"}),t.jsxs(e,{gutterBottom:!0,children:["Please ",t.jsx(u,{to:"/contact",children:"contact us"})," to solve your query."]})]})]}),t.jsx(F,{children:t.jsx(C,{autoFocus:!0,onClick:a,children:"OK"})})]})]}),t.jsxs(r,{p:4,children:[t.jsx(e,{mb:2,children:"Browse Frequently Asked Questions (FAQs)"}),t.jsx(m,{elevation:3,children:[{title:"Manage your account and settings",options:["Sign up and manage your account","Manage account settings","Manage privacy settings","Manage accessibility settings","Troubleshoot account issues","Delete your account"]},{title:"Course related issues",options:["Spelling mistake?","Wrong information?","Other course related issues"]},{title:"Fix a problem",options:["Technical gliches?","Report bugs"]},{title:"Policy, safety and copyright",options:["read Privacy Policy"]},{title:"Others",options:["Want to contribute?"]}].map((o,g)=>t.jsxs(k,{TransitionProps:{unmountOnExit:!0},disableGutters:!0,children:[t.jsx(I,{expandIcon:t.jsx(P,{}),children:o.title}),t.jsx(T,{sx:{bgcolor:"#d8e4f7"},children:o.options.map((j,f)=>t.jsx(e,{onClick:h,ml:2,color:"primary",sx:{cursor:"pointer"},gutterBottom:!0,children:j},f))})]},g))})]}),t.jsx(E,{p:2,bgcolor:"#d8e4f7",alignItems:"center",children:t.jsxs(e,{variant:"subtitle1",children:["Not Solved? ",t.jsx(u,{to:"/contact",children:"Contact us"})]})}),t.jsx(B,{})]})]})}export{Y as default};