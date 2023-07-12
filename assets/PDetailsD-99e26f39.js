import{r as y,u as T,j as e,N as w}from"./index-b8c10478.js";import{D as v,ai as S,ad as D,ae as W,I as m,L as k,B as r,T as o,l as c,aj as l,ak as A,U as I,an as N,O as B,a as d}from"./App-c36f2baa.js";import{A as C}from"./ArrowBack-647c3190.js";import{S as z,D as R,Q as L,R as $}from"./react-markdown-279dfd31.js";import{S as x}from"./Stack-63400112.js";import{T as E,a as F,b as O,c as h,d as a,e as Q}from"./TableRow-e10f3a10.js";const J=()=>{const{appData:n,editAppData:g}=y.useContext(v),j=T();if(n.cId===null)return e.jsx(w,{to:"/dashboard"});const b=()=>{j(-1)},{data:t,isLoading:p}=S(n.cId,async()=>(await fetch(`./courses/${n.cId}/cDetails.json`)).json()),u=s=>{fetch(`./courses/${t.id}/${s.target.value}.json`).then(i=>i.json()).then(i=>{g(Object.assign({},n,{page:"instruction",eName:t.eName,cLang:t.language,tId:s.target.value,tTitle:t.tests[s.target.value][0],tName:t.tName,tAns:i,tTime:t.tests[s.target.value][2]})),j("/cbt")})},f=s=>e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:[e.jsx(a,{children:s.i+1}),e.jsx(a,{children:s.row[0]}),e.jsx(a,{children:s.row[1]}),e.jsx(a,{children:s.row[2]}),e.jsx(a,{align:"right",sx:{display:{xs:"none",sm:"table-cell"}},children:e.jsxs(d,{variant:"contained",value:s.i,onClick:u,children:["Take Test ",s.i+1]})})]}),e.jsx(h,{sx:{display:{xs:"table-row",sm:"none"}},children:e.jsx(a,{colSpan:4,align:"center",children:e.jsxs(d,{fullWidth:!0,value:s.i,onClick:u,variant:"contained",children:["Take Test ",s.i+1]})})})]});return e.jsxs(e.Fragment,{children:[e.jsx(D,{position:"sticky",children:e.jsxs(W,{sx:{display:"flex",justifyContent:"space-between"},children:[e.jsx(m,{color:"inherit",onClick:b,children:e.jsx(C,{})}),e.jsx(m,{color:"inherit",children:e.jsx(z,{})})]})}),p?e.jsx(k,{}):e.jsxs(r,{maxWidth:"md",mx:"auto",p:2,children:[e.jsxs(x,{direction:{xs:"column",sm:"row"},py:2,spacing:2,children:[e.jsx(r,{flexGrow:.5,children:e.jsx(r,{component:"img",width:"100%",src:`./courses/${t.id}/large.jpg`})}),e.jsxs(r,{flexGrow:1,children:[e.jsx(o,{variant:"h6",p:2,bgcolor:"mediumpurple",color:"white",borderRadius:2,children:t.title}),e.jsx(c,{}),e.jsxs(x,{spacing:1,direction:"row",flexWrap:"wrap",sx:{my:2},children:[e.jsx(l,{label:`${t.registered} students registered for this course`}),t.bestSeller?e.jsx(l,{color:"success",label:"Bestseller"}):"",e.jsxs(r,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(r,{sx:{mr:.5,fontSize:12,fontWeight:"bold",color:"gray"},children:t.rating}),e.jsx(A,{name:"size-small",value:t.rating,readOnly:!0,precision:.1,max:5,size:"small"})]})]}),e.jsxs(r,{children:[e.jsx(r,{sx:{py:0},children:e.jsx(I,{label:"What are your thoughts?",fullWidth:!0,multiline:!0})}),e.jsx(N,{sx:{px:1},avatar:e.jsx(B,{src:n.uAvatar}),action:e.jsx(d,{variant:"contained",color:"inherit",children:"SEND"}),title:n.uName,subheader:new Date().toLocaleDateString()})]})]})]}),e.jsx(c,{}),e.jsx(o,{variant:"body1",mt:2,sx:{fontWeight:"bold"},color:"text.primary",children:"This test series includes"}),e.jsxs(x,{direction:"row",flexWrap:"wrap",my:1,children:[e.jsx(l,{label:`${t.tests.length} Tests`,icon:e.jsx(R,{}),sx:{fontWeight:"bold",p:1,m:.5},color:"success"}),e.jsx(l,{label:`${t.tests.reduce((s,i)=>s+i[1],0)} Questions`,icon:e.jsx(L,{}),sx:{fontWeight:"bold",p:1,m:.5},color:"secondary"})]}),e.jsx(c,{}),e.jsx(E,{children:e.jsxs(F,{children:[e.jsx(O,{children:e.jsxs(h,{sx:{backgroundColor:"#eee"},children:[e.jsx(a,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"SL"}),e.jsx(a,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"TITLE"}),e.jsx(a,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"QUESTION"}),e.jsx(a,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"TIME (MIN)"}),e.jsx(a,{sx:{display:{xs:"none",sm:"table-cell"}},children:" "})]})}),e.jsx(Q,{children:t.tests.map((s,i)=>e.jsx(f,{i,row:s},i))})]})}),e.jsx(o,{variant:"h6",my:2,gutterBottom:!0,color:"text.primary",textAlign:"justify",children:"About this course :"}),e.jsx(r,{my:2,mx:1,textAlign:"justify",children:e.jsx($,{skipHtml:!0,children:t.description})})]})]})};export{J as default};