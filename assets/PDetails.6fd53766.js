import{O as A,j as e,r as x,D as B,d as D,am as z,af as I,e as t,F as h,ah as k,ai as O,I as C,B as u,T as c,an as p,ao as E,f as n,q as y}from"./index.42ecc71a.js";import{A as w}from"./ArrowBack.15db3c86.js";import{S as N,D as R,Q as j}from"./Share.7163d095.js";import{S as m}from"./Stack.8b665b7f.js";import{T as H,a as L,b as U,c as S,d as a,e as V}from"./TableRow.cb2b77c4.js";import{S as Q,A as F}from"./Snackbar.d6dc5b69.js";var M=A(e("path",{d:"M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"}),"AddShoppingCart");const K=()=>{const{appData:l,editAppData:T}=x.exports.useContext(B),s=D(),{courseId:o}=z(),r=I[o],[W,f]=x.exports.useState(!1),b=()=>{let i=l.uCartItems;i.push(o),T(Object.assign({},l,{uCartItems:i})),f(!0)},g=()=>{b(),s("/cart")},v=()=>{s("/dashboard")};return t(h,{children:[e(k,{position:"sticky",children:t(O,{sx:{display:"flex",justifyContent:"space-between"},children:[e(C,{color:"inherit",onClick:()=>s(-1),children:e(w,{})}),e(C,{color:"inherit",children:e(N,{})})]})}),t(u,{p:2,pb:0,children:[e(c,{gutterBottom:!0,variant:"h6",component:"div",children:r.title}),e(c,{variant:"body2",gutterBottom:!0,color:"text.secondary",textAlign:"justify",children:r.description}),t(m,{spacing:1,sx:{my:2},children:[r.bestSeller?e(u,{children:e(p,{variant:"filled",label:"Bestseller",size:"small"})}):"",t(u,{sx:{display:"flex",alignItems:"center"},children:[e(u,{sx:{mr:.5,fontSize:12,fontWeight:"bold",color:"gray"},children:r.rating}),e(E,{name:"size-small",value:r.rating,readOnly:!0,precision:.1,max:5,size:"small"})]}),t(c,{variant:"h6",sx:{fontWeight:"bold"},color:"text.secondary",children:["\u20B9",r.price,".00"]}),l.uEnrolled.includes(o)?e(n,{variant:"contained",fullWidth:!0,onClick:v,children:"Already Enrolled"}):e(h,{children:l.uCartItems.includes(o)?e(n,{variant:"contained",fullWidth:!0,onClick:()=>s("/cart"),children:"View in Cart"}):t(h,{children:[e(n,{variant:"contained",fullWidth:!0,onClick:g,children:"BUY NOW"}),e(n,{variant:"outlined",fullWidth:!0,onClick:b,startIcon:e(M,{}),children:"ADD TO CART"})]})})]}),e(y,{}),e(c,{variant:"body1",mt:2,sx:{fontWeight:"bold"},color:"text.primary",children:"This test series includes"}),t(m,{direction:"row",flexWrap:"wrap",my:1,children:[e(p,{label:`${r.tests.length} Tests`,icon:e(R,{}),sx:{fontWeight:"bold",p:1,m:.5},color:"success"}),e(p,{label:`${r.tests.reduce((i,d)=>i+d[1],0)} Questions`,icon:e(j,{}),sx:{fontWeight:"bold",p:1,m:.5},color:"secondary"})]})]}),e(y,{}),e(H,{children:t(L,{children:[e(U,{children:t(S,{sx:{backgroundColor:"#eee"},children:[e(a,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"SL"}),e(a,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"TITLE"}),e(a,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"QUESTION"}),e(a,{sx:{fontSize:"0.7rem",fontWeight:"bold"},children:"TIME (MIN)"})]})}),e(V,{children:r.tests.map((i,d)=>t(S,{children:[e(a,{children:d+1}),e(a,{children:i[0]}),e(a,{children:i[1]}),e(a,{children:i[2]})]},d))})]})}),t(m,{direction:"row",spacing:1,p:2,children:[t(c,{variant:"h6",border:1,px:1,borderRadius:1,disabled:!0,children:["\u20B9",r.price,".00"]}),l.uEnrolled.includes(o)?e(n,{variant:"contained",fullWidth:!0,onClick:v,children:"Already Enrolled"}):e(h,{children:l.uCartItems.includes(o)?e(n,{variant:"contained",fullWidth:!0,onClick:()=>{s("/cart")},children:"View in Cart"}):e(n,{variant:"contained",fullWidth:!0,onClick:g,children:"BUY NOW"})})]}),e(Q,{open:W,anchorOrigin:{horizontal:"center",vertical:"bottom"},autoHideDuration:3e3,onClose:()=>{f(!1)},children:e(F,{severity:"success",elevation:6,variant:"filled",children:"SUCCESSFULLY ADDED TO CART"})})]})};export{K as default};
