import{a as s,D as m,u as d,j as e,b as p,B as o,T as u,c as h,L as j,I as g,d as f,G as D}from"./App-586ef10b.js";import{D as v,a as E}from"./dialogTitleClasses-c6a6b553.js";import{D as I}from"./DialogTitle-8da2bda2.js";function B(){const{appData:n,editAppData:i}=s.useContext(m),c=d(),l=a=>{fetch(`./courses/EI0/${a.target.value}.json`).then(t=>t.json()).then(t=>{i(Object.assign({},n,{page:"instruction",eName:"Exam Idea Mock",cId:"EI0",cLang:["English"],tId:a.target.value,tName:r[a.target.value],tAns:t.ans,tTime:t.time})),c("/cbt")})},[r,x]=s.useState(["General Knowledge"]);return s.useEffect(()=>{fetch("./courses/EI0/tn.json").then(a=>a.json()).then(a=>x(a))},[]),e.jsxs(e.Fragment,{children:[e.jsx(p,{}),e.jsxs(o,{p:2,children:[e.jsx(u,{variant:"h5",color:"primary",align:"center",border:1,py:0,mb:2,borderRadius:1,children:"Take Demo Test"}),e.jsx(o,{m:2,display:"flex",flexDirection:"row-reverse",flexWrap:"wrap-reverse",justifyContent:"center",children:r.map((a,t)=>e.jsx(h,{value:t,sx:{m:1},variant:"contained",onClick:l,children:a},t))})]}),e.jsxs(v,{open:!n.isLogin,maxWidth:"xs",fullWidth:!0,children:[e.jsx(I,{align:"center",children:"Login to Access"}),e.jsxs(E,{children:[e.jsx(j,{to:"/",children:e.jsx(g,{color:"primary",sx:{m:1},children:e.jsx(f,{})})}),e.jsx(D,{})]})]})]})}export{B as default};
