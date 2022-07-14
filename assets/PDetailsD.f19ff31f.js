import{r as v,D as C,l as S,f as i,F as g,j as e}from"./index.b6b2f139.js";import{C as D}from"./CourseDataBase.7543e66d.js";import{A as B,T as W,I as u,D as b}from"./Toolbar.51c004f9.js";import{A as k}from"./ArrowBack.30b813bb.js";import{S as w,D as z,Q as I}from"./Share.267b9330.js";import{a as l,T as o,b as x}from"./Button.c1922477.js";import{S as f}from"./Stack.66dbcd55.js";import{C as s,R as j}from"./Rating.f8e9870b.js";import{T as A,a as R,b as N,c,d as r,e as Q}from"./TableRow.d6ff6722.js";import"./dividerClasses.0c29ded8.js";import"./useId.cf02f1c6.js";import"./useControlled.da33e9a3.js";const K=()=>{const{appData:d,editAppData:p}=v.exports.useContext(C),a=D[d.cId],h=S(),T=()=>{h(-1)},m=t=>{fetch(`./courses/${a.id}/${t.target.value}.json`).then(n=>n.json()).then(n=>{p(Object.assign({},d,{page:"instruction",cCategory:a.category,cLang:a.language,tId:t.target.value,tTitle:a.tests[t.target.value][0],tName:a.name,tAns:n,tTime:a.tests[t.target.value][2]})),h("/cbt")})},y=t=>i(g,{children:[i(c,{children:[e(r,{children:t.i+1}),e(r,{children:t.row[0]}),e(r,{children:t.row[1]}),e(r,{children:t.row[2]}),e(r,{align:"right",sx:{display:{xs:"none",sm:"table-cell"}},children:i(x,{variant:"contained",value:t.i,onClick:m,children:["Take Test ",t.i+1]})})]}),e(c,{sx:{display:{xs:"table-row",sm:"none"}},children:e(r,{colSpan:4,align:"center",children:i(x,{fullWidth:!0,value:t.i,onClick:m,variant:"contained",children:["Take Test ",t.i+1]})})})]});return i(g,{children:[e(B,{position:"sticky",children:i(W,{sx:{display:"flex",justifyContent:"space-between"},children:[e(u,{color:"inherit",onClick:T,children:e(k,{})}),e(u,{color:"inherit",children:e(w,{})})]})}),i(l,{maxWidth:"md",mx:"auto",children:[i(l,{p:2,pb:0,children:[e(o,{gutterBottom:!0,variant:"h6",component:"div",children:a.title}),e(o,{variant:"body2",gutterBottom:!0,color:"text.secondary",children:a.description}),i(f,{spacing:1,sx:{my:2},children:[a.bestSeller?e(l,{children:e(s,{variant:"filled",label:"Bestseller",size:"small"})}):"",i(l,{sx:{display:"flex",alignItems:"center"},children:[e(l,{sx:{mr:.5,fontSize:12,fontWeight:"bold",color:"gray"},children:a.rating}),e(j,{name:"size-small",value:a.rating,readOnly:!0,precision:.1,max:5,size:"small"})]})]}),e(b,{}),e(o,{variant:"body1",mt:2,sx:{fontWeight:"bold"},color:"text.primary",children:"This test series includes"}),i(f,{direction:"row",flexWrap:"wrap",my:1,children:[e(s,{label:`${a.tests.length} Tests`,icon:e(z,{}),sx:{fontWeight:"bold",p:1,m:.5},color:"success"}),e(s,{label:`${a.tests.reduce((t,n)=>t+n[1],0)} Questions`,icon:e(I,{}),sx:{fontWeight:"bold",p:1,m:.5},color:"secondary"})]})]}),e(b,{}),e(A,{children:i(R,{children:[e(N,{children:i(c,{sx:{backgroundColor:"#eee"},children:[e(r,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"SL"}),e(r,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"TITLE"}),e(r,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"QUESTION"}),e(r,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"TIME (MIN)"}),e(r,{sx:{display:{xs:"none",sm:"table-cell"}},children:" "})]})}),e(Q,{children:a.tests.map((t,n)=>e(y,{i:n,row:t},n))})]})})]})]})};export{K as default};
