import{q as u,j as e,r as o,D as g,a4 as p,u as j,a5 as f,a6 as C,I as r,H as v,B as c,S as B,z as I,a7 as S,a8 as b,a as k,x as l,a3 as w,a9 as y}from"./index-2c155596.js";import{A as z}from"./ArrowBack-5a63bb1e.js";const A=u(e.jsx("path",{d:"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"HighlightOff");function R(){const{appData:h,editAppData:D}=o.useContext(g),[d]=p(),t=j(),[a,n]=o.useState(d.get("q")||""),i=s=>{n(s.target.value)},x=()=>n("");return e.jsxs(e.Fragment,{children:[e.jsx(f,{position:"sticky",children:e.jsxs(C,{children:[e.jsx(r,{size:"large",edge:"start",color:"inherit",onClick:()=>t(-1),children:e.jsx(z,{})}),e.jsx(r,{size:"large",edge:"start",color:"inherit",onClick:()=>t("/home"),children:e.jsx(v,{})}),e.jsxs(c,{sx:{position:"relative",borderRadius:1.5,width:"100%",backgroundColor:"#ffffff26","&:hover":{backgroundColor:"#ffffff40"},mx:{sm:5,lg:20}},children:[e.jsx(c,{sx:{pl:2,mr:1,height:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(B,{})}),e.jsx(I,{sx:{color:"inherit","& .MuiInputBase-input":{pl:6,pr:1,py:1,width:"100%"},width:"100%"},name:"search",value:a,placeholder:"Search…",onChange:i,endAdornment:e.jsx(r,{onClick:x,color:"inherit",sx:{visibility:a==""?"hidden":"visible"},children:e.jsx(A,{})})})]}),e.jsx(r,{color:"inherit",sx:{ml:1},onClick:()=>{t("/cart")},children:e.jsx(S,{badgeContent:h.uCartItems.length,color:"secondary",children:e.jsx(b,{})})})]})}),a===""?e.jsxs(e.Fragment,{children:[" ",["UGC","CSIR","ICAR"].map(s=>e.jsx(k,{variant:"outlined",value:s,onClick:i,sx:{m:1,mr:0},children:s},s))," "]}):e.jsx(e.Fragment,{}),e.jsx(l,{container:!0,spacing:2,p:2,columns:{xs:1,sm:3,md:4,lg:5,xl:6},children:w.filter(s=>Object.values(s).join("").toLowerCase().includes(a.toLowerCase())).map((s,m)=>e.jsx(l,{item:!0,xs:1,children:e.jsx(y,{cId:s.id})},m))})]})}export{R as default};
