import{j as r,B as i,L as n}from"./index-7c985869.js";import{P as a,T as o}from"./Modal-c160a10b.js";import{G as s}from"./Footer-0eff7b24.js";import{d as c}from"./LeftDrawer-4f7f921e.js";const x=()=>{const t=["icar","aiims","aieee","csir","jee","bhu","nta","ugc","ibps","jnvst","fri","neet"];return r.jsxs(i,{children:[r.jsx(a,{elevation:6,sx:{m:1,mx:2,p:1,backgroundImage:"linear-gradient(90deg, #7474BF 0%, #348AC7 51%, #7474BF 100%)",color:"#fff"},children:r.jsx(o,{align:"center",children:"POPULAR CATEGORIES"})}),r.jsx(s,{container:!0,spacing:2,px:2,pt:0,columns:{xs:3,sm:6,md:6,lg:2},children:t.map(e=>r.jsx(s,{item:!0,xs:1,children:r.jsx(n,{to:`/search?q=${e}`,children:r.jsx(a,{elevation:4,sx:{padding:1,transition:"all 0.2s ease",":hover":{boxShadow:20,transform:"rotate(3deg)"}},children:r.jsx("img",{srcSet:`/image/${e}.png`,loading:"",alt:e,width:"100%"})})})},e))})]})},d=x,l=()=>r.jsx(c,{anchor:"right",open:!0,variant:"permanent",sx:{width:250},children:r.jsx(i,{sx:{width:250},children:r.jsx(d,{})})}),j=l;export{d as P,j as R};
