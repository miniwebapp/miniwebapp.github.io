import{r as s,D as x,u as p,j as e,R as d,B as o,T as u,a as h,L as j,I as g,H as f,G as D}from"./index-f83ed4d4.js";import{D as v}from"./dialogTitleClasses-982aa834.js";import{D as E}from"./DialogTitle-7fe8a56b.js";import{D as I}from"./DialogActions-9328f128.js";function b(){const{appData:n,editAppData:i}=s.useContext(x),c=p(),l=t=>{fetch(`./courses/EI0/${t.target.value}.json`).then(a=>a.json()).then(a=>{i(Object.assign({},n,{page:"instruction",eName:"Exam Idea Mock",cId:"EI0",cLang:["English"],tId:t.target.value,tName:r[t.target.value],tAns:a.ans,tTime:a.time})),c("/cbt")})},[r,m]=s.useState(["General Knowledge"]);return s.useEffect(()=>{fetch("./courses/EI0/tn.json").then(t=>t.json()).then(t=>m(t))},[]),e.jsxs(e.Fragment,{children:[e.jsx(d,{}),e.jsxs(o,{p:2,children:[e.jsx(u,{variant:"h5",color:"primary",align:"center",border:1,py:0,mb:2,borderRadius:1,children:"Take Demo Test"}),e.jsx(o,{m:2,display:"flex",flexDirection:"row-reverse",flexWrap:"wrap-reverse",justifyContent:"center",children:r.map((t,a)=>e.jsx(h,{value:a,sx:{m:1},variant:"contained",onClick:l,children:t},a))})]}),e.jsxs(v,{open:!n.isLogin,maxWidth:"xs",fullWidth:!0,children:[e.jsx(E,{align:"center",children:"Login to Access"}),e.jsxs(I,{children:[e.jsx(j,{to:"/",children:e.jsx(g,{color:"primary",sx:{m:1},children:e.jsx(f,{})})}),e.jsx(D,{})]})]})]})}export{b as default};