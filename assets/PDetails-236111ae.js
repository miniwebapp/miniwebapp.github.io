import{q as W,j as e,r as f,D as A,u as k,aa as w,ab as D,a5 as z,a6 as I,I as b,b as B,B as r,T as l,c as y,ac as h,ad as E,a as n}from"./index-a62d09a0.js";import{A as R}from"./ArrowBack-35ee5126.js";import{S as L,D as O,Q as H,R as N}from"./react-markdown-a4e62cd1.js";import{S as x}from"./Stack-bca3dbeb.js";import{T as F,a as $,b as U,c as C,d as i,e as V}from"./TableRow-e9df410e.js";import{S as M,A as Q}from"./Snackbar-12d6aaa7.js";const Y=W(e.jsx("path",{d:"M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"}),"AddShoppingCart"),Z=()=>{const{appData:o,editAppData:v}=f.useContext(A),c=k(),{courseId:a}=w(),{data:s,isLoading:u}=D(a,async()=>(await fetch(`./courses/${a}/cDetails.json`)).json()),[T,j]=f.useState(!1),m=()=>{let t=o.uCartItems;t.push(a),v(Object.assign({},o,{uCartItems:t})),j(!0)},p=()=>{m(),c("/cart")},g=()=>{c("/dashboard")},S=()=>navigator.share({text:`Look at this ${u?"mock":s.title} test! `,url:window.location.href});return window.scrollTo(0,0),e.jsxs(e.Fragment,{children:[e.jsx(z,{position:"sticky",children:e.jsxs(I,{sx:{display:"flex",justifyContent:"space-between"},children:[e.jsx(b,{color:"inherit",onClick:()=>c(-1),children:e.jsx(R,{})}),e.jsx(b,{color:"inherit",onClick:S,children:e.jsx(L,{})})]})}),u?e.jsx(B,{}):e.jsxs(r,{maxWidth:"md",mx:"auto",p:2,children:[e.jsxs(x,{direction:{xs:"column",sm:"row"},py:2,spacing:2,children:[e.jsx(r,{flexGrow:.5,children:e.jsx(r,{component:"img",width:"100%",src:`./courses/${s.id}/large.jpg`})}),e.jsxs(r,{flexGrow:1,children:[e.jsx(l,{variant:"h6",children:s.title}),e.jsx(y,{}),e.jsx(h,{sx:{mt:2},label:`${s.registered} students registered for this course`}),e.jsxs(x,{spacing:1,sx:{my:2},children:[s.bestSeller?e.jsx(r,{children:e.jsx(h,{color:"primary",label:"Bestseller",size:"small"})}):"",e.jsxs(r,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(r,{sx:{mr:.5,fontSize:12,fontWeight:"bold",color:"gray"},children:s.rating}),e.jsx(E,{name:"size-small",value:s.rating,readOnly:!0,precision:.1,max:5,size:"small"})]}),e.jsxs(l,{variant:"h6",sx:{fontWeight:"bold"},color:"text.secondary",children:["₹",s.price,".00"]}),o.uEnrolled.some(t=>t.id==a)?e.jsx(n,{variant:"contained",fullWidth:!0,onClick:g,children:"Already Enrolled"}):e.jsx(e.Fragment,{children:o.uCartItems.includes(a)?e.jsx(n,{variant:"contained",fullWidth:!0,onClick:()=>c("/cart"),children:"View in Cart"}):e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"contained",fullWidth:!0,onClick:p,children:"BUY NOW"}),e.jsx(n,{variant:"outlined",fullWidth:!0,onClick:m,startIcon:e.jsx(Y,{}),children:"ADD TO CART"})]})})]})]})]}),e.jsx(y,{}),e.jsx(l,{variant:"body1",mt:2,sx:{fontWeight:"bold"},color:"text.primary",children:"This test series includes"}),e.jsxs(x,{direction:"row",flexWrap:"wrap",my:1,children:[e.jsx(h,{label:`${s.tests.length} Tests`,icon:e.jsx(O,{}),sx:{fontWeight:"bold",p:1,m:.5},color:"success"}),e.jsx(h,{label:`${s.tests.reduce((t,d)=>t+d[1],0)} Questions`,icon:e.jsx(H,{}),sx:{fontWeight:"bold",p:1,m:.5},color:"secondary"})]}),e.jsx(l,{variant:"h6",my:2,gutterBottom:!0,color:"text.secondary",textAlign:"justify",children:"About this course :"}),e.jsx(r,{my:2,mx:1,textAlign:"justify",children:e.jsx(N,{skipHtml:!0,children:s.description})}),e.jsx(l,{variant:"h6",my:2,gutterBottom:!0,color:"midnightblue",border:2,textAlign:"center",children:"Test details"}),e.jsx(F,{children:e.jsxs($,{children:[e.jsx(U,{children:e.jsxs(C,{sx:{backgroundColor:"#eee"},children:[e.jsx(i,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"SL"}),e.jsx(i,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"TITLE"}),e.jsx(i,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"QUESTION"}),e.jsx(i,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"TIME (MIN)"})]})}),e.jsx(V,{children:s.tests.map((t,d)=>e.jsxs(C,{children:[e.jsx(i,{children:d+1}),e.jsx(i,{children:t[0]}),e.jsx(i,{children:t[1]}),e.jsx(i,{children:t[2]})]},d))})]})}),e.jsxs(x,{direction:"row",spacing:1,py:2,children:[e.jsxs(l,{variant:"h6",border:1,px:1,borderRadius:1,disabled:!0,children:["₹",s.price,".00"]}),o.uEnrolled.some(t=>t.id==a)?e.jsx(n,{variant:"contained",fullWidth:!0,onClick:g,children:"Already Enrolled"}):e.jsx(e.Fragment,{children:o.uCartItems.includes(a)?e.jsx(n,{variant:"contained",fullWidth:!0,onClick:()=>{c("/cart")},children:"View in Cart"}):e.jsx(n,{variant:"contained",fullWidth:!0,onClick:p,children:"BUY NOW"})})]}),e.jsx(M,{open:T,anchorOrigin:{horizontal:"center",vertical:"bottom"},autoHideDuration:3e3,onClose:()=>{j(!1)},children:e.jsx(Q,{severity:"success",elevation:6,variant:"filled",children:"SUCCESSFULLY ADDED TO CART"})})]})]})};export{Z as default};
