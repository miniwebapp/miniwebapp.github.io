import{a as y,D as T,u as v,j as e,N as w,ar as S,al as D,am as W,I as m,p as A,B as i,T as l,t as c,as as o,at as B,a0 as I,au as N,Y as k,c as d}from"./App-4ef6ed4c.js";import{A as C}from"./ArrowBack-a204c250.js";import{S as z,D as $,Q as E}from"./Share-4be75f8f.js";import{S as x}from"./Stack-be7c4f5d.js";import{T as L,a as R,b as F,c as h,d as a,e as Q}from"./TableRow-05dc7af4.js";const U=()=>{const{appData:n,editAppData:g}=y.useContext(T),j=v();if(n.cId===null)return e.jsx(w,{to:"/dashboard"});const b=()=>{j(-1)},{data:t,isLoading:p}=S(n.cId,async()=>(await fetch(`./courses/${n.cId}/cDetails.json`)).json()),u=s=>{fetch(`./courses/${t.id}/${s.target.value}.json`).then(r=>r.json()).then(r=>{g(Object.assign({},n,{page:"instruction",eName:t.eName,cLang:t.language,tId:s.target.value,tTitle:t.tests[s.target.value][0],tName:t.tName,tAns:r,tTime:t.tests[s.target.value][2]})),j("/cbt")})},f=s=>e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:[e.jsx(a,{children:s.i+1}),e.jsx(a,{children:s.row[0]}),e.jsx(a,{children:s.row[1]}),e.jsx(a,{children:s.row[2]}),e.jsx(a,{align:"right",sx:{display:{xs:"none",sm:"table-cell"}},children:e.jsxs(d,{variant:"contained",value:s.i,onClick:u,children:["Take Test ",s.i+1]})})]}),e.jsx(h,{sx:{display:{xs:"table-row",sm:"none"}},children:e.jsx(a,{colSpan:4,align:"center",children:e.jsxs(d,{fullWidth:!0,value:s.i,onClick:u,variant:"contained",children:["Take Test ",s.i+1]})})})]});return e.jsxs(e.Fragment,{children:[e.jsx(D,{position:"sticky",children:e.jsxs(W,{sx:{display:"flex",justifyContent:"space-between"},children:[e.jsx(m,{color:"inherit",onClick:b,children:e.jsx(C,{})}),e.jsx(m,{color:"inherit",children:e.jsx(z,{})})]})}),p?e.jsx(A,{}):e.jsxs(i,{maxWidth:"md",mx:"auto",p:2,children:[e.jsxs(x,{direction:{xs:"column",sm:"row"},py:2,spacing:2,children:[e.jsx(i,{flexGrow:.5,children:e.jsx(i,{component:"img",width:"100%",src:`./courses/${t.id}/large.jpg`})}),e.jsxs(i,{flexGrow:1,children:[e.jsx(l,{variant:"h6",p:2,bgcolor:"mediumpurple",color:"white",borderRadius:2,children:t.title}),e.jsx(c,{}),e.jsxs(x,{spacing:1,direction:"row",flexWrap:"wrap",sx:{my:2},children:[e.jsx(o,{label:`${t.registered} students registered for this course`}),t.bestSeller?e.jsx(o,{color:"success",label:"Bestseller"}):"",e.jsxs(i,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(i,{sx:{mr:.5,fontSize:12,fontWeight:"bold",color:"gray"},children:t.rating}),e.jsx(B,{name:"size-small",value:t.rating,readOnly:!0,precision:.1,max:5,size:"small"})]})]}),e.jsxs(i,{children:[e.jsx(i,{sx:{py:0},children:e.jsx(I,{label:"What are your thoughts?",fullWidth:!0,multiline:!0})}),e.jsx(N,{sx:{px:1},avatar:e.jsx(k,{src:n.uAvatar}),action:e.jsx(d,{variant:"contained",color:"inherit",children:"SEND"}),title:n.uName,subheader:new Date().toLocaleDateString()})]})]})]}),e.jsx(c,{}),e.jsx(l,{variant:"body1",mt:2,sx:{fontWeight:"bold"},color:"text.primary",children:"This test series includes"}),e.jsxs(x,{direction:"row",flexWrap:"wrap",my:1,children:[e.jsx(o,{label:`${t.tests.length} Tests`,icon:e.jsx($,{}),sx:{fontWeight:"bold",p:1,m:.5},color:"success"}),e.jsx(o,{label:`${t.tests.reduce((s,r)=>s+r[1],0)} Questions`,icon:e.jsx(E,{}),sx:{fontWeight:"bold",p:1,m:.5},color:"secondary"})]}),e.jsx(c,{}),e.jsx(L,{children:e.jsxs(R,{children:[e.jsx(F,{children:e.jsxs(h,{sx:{backgroundColor:"#eee"},children:[e.jsx(a,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"SL"}),e.jsx(a,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"TITLE"}),e.jsx(a,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"QUESTION"}),e.jsx(a,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"TIME (MIN)"}),e.jsx(a,{sx:{display:{xs:"none",sm:"table-cell"}},children:" "})]})}),e.jsx(Q,{children:t.tests.map((s,r)=>e.jsx(f,{i:r,row:s},r))})]})}),e.jsx(l,{variant:"h6",my:2,gutterBottom:!0,color:"text.primary",textAlign:"justify",children:"About this course :"}),e.jsx(l,{variant:"body2",my:2,gutterBottom:!0,color:"text.secondary",textAlign:"justify",children:t.description})]})]})};export{U as default};
