import{j as r,N as d,B as o,L as l}from"./index-7c985869.js";import{u as c,L as p}from"./LeftDrawer-4f7f921e.js";import{G as i,F as x}from"./Footer-0eff7b24.js";import{N as h}from"./NavBarColorful-bdbc56a4.js";import{u}from"./appStore-8c924719.js";import{u as j}from"./courseStore-31965199.js";import{R as f}from"./RightDrawer-ec41a028.js";import{P as g}from"./ProductCard-9bcfe231.js";import{T as e,B as b}from"./Modal-c160a10b.js";import{S}from"./Stack-a44280a8.js";import"./ShoppingCartSharp-29904f2f.js";import"./Avatar-bb928fc8.js";import"./index-03a03c3c.js";import"./Rating-aa4c57f1.js";import"./useId-35f47072.js";import"./useControlled-7c507605.js";import"./react-is.production.min-a192e302.js";function T(){const a=c("(min-width:1200px)"),{login:n,uEnrolled:s}=u(),{courses:m}=j();return n?r.jsxs(r.Fragment,{children:[r.jsx(p,{}),r.jsxs(o,{flexGrow:1,children:[r.jsx(h,{}),r.jsxs(o,{m:2,minHeight:"80dvh",children:[r.jsx(e,{variant:"h5",color:"primary",align:"center",border:1,py:0,mb:2,borderRadius:1,children:"Dashboard"}),r.jsx(o,{sx:{bgcolor:"#f543"},borderRadius:1,p:1,children:s.length===0?r.jsxs(S,{direction:"column",children:[r.jsx(e,{variant:"h4",p:4,fontWeight:"bold",color:"text.secondary",align:"center",children:"No Courses Registered"}),r.jsx(l,{to:"/search",children:r.jsx(b,{variant:"contained",fullWidth:!0,children:"ADD SOME COURSES"})})]}):r.jsx(i,{container:!0,spacing:2,p:2,columns:{xs:1,sm:2,md:2,lg:2,xl:3},children:s.map(t=>r.jsx(i,{item:!0,xs:1,children:r.jsx(g,{cData:m[t.id]})},t.id))})})]}),r.jsx(x,{})]}),a?r.jsx(f,{}):r.jsx(r.Fragment,{})]}):r.jsx(d,{to:"/login"})}export{T as default};