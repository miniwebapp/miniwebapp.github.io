import{j as e,m as C,r as i,B as n,L as l}from"./index-d2e268b7.js";import{c as S,b,B as v}from"./appStore-f9ed519f.js";import{u as B}from"./courseStore-9abe1254.js";import{R as I}from"./RightDrawer-dc31b4f2.js";import{u as w,L as F}from"./LeftDrawer-d98d7b63.js";import{F as k}from"./Footer-f718ad64.js";import{P as y}from"./ProductCard-73e9e341.js";import{A as M,a as A,I as o,M as L,H as R,B as z,S as O}from"./ShoppingCartSharp-db04b69c.js";import{S as q}from"./Search-9a8a9163.js";import{I as E}from"./InputBase-d9a143b0.js";import{G as m}from"./Grid-1e971723.js";import"./Divider-8bafc3a7.js";import"./Card-ec03caec.js";import"./Rating-2025ab55.js";import"./useControlled-8f776ee3.js";import"./react-is.production.min-a192e302.js";const G=S(e.jsx("path",{d:"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"HighlightOff");function ee(){const h=w("(min-width:1200px)"),[s]=C(),[t,a]=i.useState(s.get("q")||""),c=r=>{a(r.target.value)},x=()=>a(""),{toggleMenu:d,uCartItems:p}=b(),{courses:u,fetchCourses:f}=B(),g=Object.values(u);return i.useEffect(()=>{f()},[]),i.useEffect(()=>{s.get("q")&&a(s.get("q"))},[s]),e.jsxs(e.Fragment,{children:[e.jsx(F,{}),e.jsxs(n,{flexGrow:1,children:[e.jsx(M,{position:"sticky",sx:{background:"linear-gradient(45deg, #3bade3 0%, #576fe6 25%, #9844b7 51%, #f97474 100%)"},children:e.jsxs(A,{children:[e.jsx(o,{size:"large",edge:"start",color:"inherit",onClick:d,sx:{display:{md:"none"}},children:e.jsx(L,{})}),e.jsx(o,{size:"large",edge:"start",color:"inherit",component:l,to:"/",children:e.jsx(R,{})}),e.jsxs(n,{sx:{position:"relative",borderRadius:1.5,width:"100%",backgroundColor:"#ffffff26","&:hover":{backgroundColor:"#ffffff40"},mx:{sm:5,lg:20}},children:[e.jsx(n,{sx:{pl:2,mr:1,height:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(q,{})}),e.jsx(E,{sx:{color:"inherit","& .MuiInputBase-input":{pl:6,pr:1,py:1,width:"100%"},width:"100%"},value:t,placeholder:"Search…",onChange:c,autoFocus:!0,endAdornment:e.jsx(o,{onClick:x,color:"inherit",sx:{visibility:t==""?"hidden":"visible"},children:e.jsx(G,{})})})]}),e.jsx(o,{color:"inherit",component:l,sx:{ml:1},to:"/cart",children:e.jsx(z,{badgeContent:p.length,color:"secondary",children:e.jsx(O,{})})})]})}),t===""?e.jsxs(e.Fragment,{children:[" ",["UGC","CSIR","ICAR","AFO"].map(r=>e.jsx(v,{variant:"outlined",value:r,onClick:c,sx:{m:1,mr:0},children:r},r))," "]}):e.jsx(e.Fragment,{}),e.jsx(m,{container:!0,spacing:2,p:2,columns:{xs:1,sm:2,md:2,lg:2,xl:3},children:g.filter(r=>Object.values(r).join("").toLowerCase().includes(t.toLowerCase())).map((r,j)=>e.jsx(m,{item:!0,xs:1,children:e.jsx(y,{cData:r})},j))}),e.jsx(k,{})]}),h?e.jsx(I,{}):e.jsx(e.Fragment,{})]})}export{ee as default};
