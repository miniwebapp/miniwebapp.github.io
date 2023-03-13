import{U as W,j as e,a as g,D as A,u as k,aq as w,ar as D,al as z,am as I,I as b,p as B,B as a,T as l,t as y,as as h,at as E,c as n}from"./App-586ef10b.js";import{A as L}from"./ArrowBack-70db0e7c.js";import{S as O,D as R,Q as N}from"./Share-933cc189.js";import{S as x}from"./Stack-13454c94.js";import{T as F,a as H,b as U,c as C,d as r,e as $}from"./TableRow-9487d3bc.js";import{S as V,A as Q}from"./Snackbar-63e4d812.js";const M=W(e.jsx("path",{d:"M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"}),"AddShoppingCart"),X=()=>{const{appData:o,editAppData:v}=g.useContext(A),c=k(),{courseId:i}=w(),{data:s,isLoading:u}=D(i,async()=>(await fetch(`./courses/${i}/cDetails.json`)).json()),[S,j]=g.useState(!1),m=()=>{let t=o.uCartItems;t.push(i),v(Object.assign({},o,{uCartItems:t})),j(!0)},p=()=>{m(),c("/cart")},f=()=>{c("/dashboard")},T=()=>navigator.share({text:`Look at this ${u?"mock":s.title} test! `+window.location.href,url:window.location.href});return e.jsxs(e.Fragment,{children:[e.jsx(z,{position:"sticky",children:e.jsxs(I,{sx:{display:"flex",justifyContent:"space-between"},children:[e.jsx(b,{color:"inherit",onClick:()=>c(-1),children:e.jsx(L,{})}),e.jsx(b,{color:"inherit",onClick:T,children:e.jsx(O,{})})]})}),u?e.jsx(B,{}):e.jsxs(a,{maxWidth:"md",mx:"auto",p:2,children:[e.jsxs(x,{direction:{xs:"column",sm:"row"},py:2,spacing:2,children:[e.jsx(a,{flexGrow:.5,children:e.jsx(a,{component:"img",width:"100%",src:`./courses/${s.id}/large.jpg`})}),e.jsxs(a,{flexGrow:1,children:[e.jsx(l,{variant:"h6",children:s.title}),e.jsx(y,{}),e.jsx(h,{sx:{mt:2},label:`${s.registered} students registered for this course`}),e.jsxs(x,{spacing:1,sx:{my:2},children:[s.bestSeller?e.jsx(a,{children:e.jsx(h,{color:"primary",label:"Bestseller",size:"small"})}):"",e.jsxs(a,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(a,{sx:{mr:.5,fontSize:12,fontWeight:"bold",color:"gray"},children:s.rating}),e.jsx(E,{name:"size-small",value:s.rating,readOnly:!0,precision:.1,max:5,size:"small"})]}),e.jsxs(l,{variant:"h6",sx:{fontWeight:"bold"},color:"text.secondary",children:["₹",s.price,".00"]}),o.uEnrolled.some(t=>t.id==i)?e.jsx(n,{variant:"contained",fullWidth:!0,onClick:f,children:"Already Enrolled"}):e.jsx(e.Fragment,{children:o.uCartItems.includes(i)?e.jsx(n,{variant:"contained",fullWidth:!0,onClick:()=>c("/cart"),children:"View in Cart"}):e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"contained",fullWidth:!0,onClick:p,children:"BUY NOW"}),e.jsx(n,{variant:"outlined",fullWidth:!0,onClick:m,startIcon:e.jsx(M,{}),children:"ADD TO CART"})]})})]})]})]}),e.jsx(y,{}),e.jsx(l,{variant:"body1",mt:2,sx:{fontWeight:"bold"},color:"text.primary",children:"This test series includes"}),e.jsxs(x,{direction:"row",flexWrap:"wrap",my:1,children:[e.jsx(h,{label:`${s.tests.length} Tests`,icon:e.jsx(R,{}),sx:{fontWeight:"bold",p:1,m:.5},color:"success"}),e.jsx(h,{label:`${s.tests.reduce((t,d)=>t+d[1],0)} Questions`,icon:e.jsx(N,{}),sx:{fontWeight:"bold",p:1,m:.5},color:"secondary"})]}),e.jsx(l,{variant:"h6",my:2,gutterBottom:!0,color:"text.secondary",textAlign:"justify",children:"About this course :"}),e.jsx(l,{variant:"body2",my:2,gutterBottom:!0,color:"text.secondary",textAlign:"justify",children:s.description}),e.jsx(F,{children:e.jsxs(H,{children:[e.jsx(U,{children:e.jsxs(C,{sx:{backgroundColor:"#eee"},children:[e.jsx(r,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"SL"}),e.jsx(r,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"TITLE"}),e.jsx(r,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"QUESTION"}),e.jsx(r,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"TIME (MIN)"})]})}),e.jsx($,{children:s.tests.map((t,d)=>e.jsxs(C,{children:[e.jsx(r,{children:d+1}),e.jsx(r,{children:t[0]}),e.jsx(r,{children:t[1]}),e.jsx(r,{children:t[2]})]},d))})]})}),e.jsxs(x,{direction:"row",spacing:1,py:2,children:[e.jsxs(l,{variant:"h6",border:1,px:1,borderRadius:1,disabled:!0,children:["₹",s.price,".00"]}),o.uEnrolled.some(t=>t.id==i)?e.jsx(n,{variant:"contained",fullWidth:!0,onClick:f,children:"Already Enrolled"}):e.jsx(e.Fragment,{children:o.uCartItems.includes(i)?e.jsx(n,{variant:"contained",fullWidth:!0,onClick:()=>{c("/cart")},children:"View in Cart"}):e.jsx(n,{variant:"contained",fullWidth:!0,onClick:p,children:"BUY NOW"})})]}),e.jsx(V,{open:S,anchorOrigin:{horizontal:"center",vertical:"bottom"},autoHideDuration:3e3,onClose:()=>{j(!1)},children:e.jsx(Q,{severity:"success",elevation:6,variant:"filled",children:"SUCCESSFULLY ADDED TO CART"})})]})]})};export{X as default};