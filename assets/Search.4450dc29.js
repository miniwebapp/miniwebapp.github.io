import{r as l,D as x,a0 as C,l as B,f as t,F as m,j as e}from"./index.b1762e85.js";import{C as p}from"./CourseDataBase.7543e66d.js";import{P as h}from"./PCard.d5644eca.js";import{A as b,T as S,I as n}from"./Toolbar.d82a5284.js";import{A as k}from"./ArrowBack.dfab77c7.js";import{H as v,S as I,B as j,a as w}from"./ShoppingCart.e658a677.js";import{a as u,b as y}from"./Button.3f7853ac.js";import{e as A}from"./InputBase.0e44ca04.js";import{G as a}from"./Grid.419e4b27.js";import"./Rating.256fcbc9.js";import"./dividerClasses.810a6173.js";import"./useId.71e35f5a.js";import"./useControlled.39625ef8.js";import"./appendOwnerState.be59ae25.js";import"./ownerDocument.d64bc4d4.js";function K(){const{appData:d,editAppData:D}=l.exports.useContext(x),[f]=C(),o=B(),[s,g]=l.exports.useState(f.get("q")||""),c=r=>{g(r.target.value)};return t(m,{children:[e(b,{position:"sticky",children:t(S,{children:[e(n,{size:"large",edge:"start",color:"inherit",onClick:()=>o(-1),children:e(k,{})}),e(n,{size:"large",edge:"start",color:"inherit",onClick:()=>o("/home"),children:e(v,{})}),t(u,{sx:{position:"relative",borderRadius:1.5,width:"100%",backgroundColor:"#ffffff26","&:hover":{backgroundColor:"#ffffff40"},mx:{sm:5,lg:20}},children:[e(u,{sx:{pl:2,height:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:e(I,{})}),e(A,{autoFocus:!0,sx:{color:"inherit","& .MuiInputBase-input":{pl:6,pr:1,py:1,width:"100%"},width:"100%"},value:s,placeholder:"Search\u2026",onChange:c})]}),e(n,{color:"inherit",sx:{ml:1},onClick:()=>{o("/cart")},children:e(j,{badgeContent:d.uCartItems.length,color:"secondary",children:e(w,{})})})]})}),s===""?t(m,{children:[["UGC","CSIR"].map(r=>e(y,{variant:"outlined",value:r,onClick:c,sx:{m:1,mr:0},children:r},r)),e(a,{container:!0,spacing:2,p:2,columns:{xs:1,sm:3,md:4,lg:5,xl:6},children:Object.values(p).map((r,i)=>e(a,{item:!0,xs:1,children:e(h,{course:r})},i))})]}):e(a,{container:!0,spacing:2,p:2,columns:{xs:1,sm:3,md:4,lg:5,xl:6},children:Object.values(p).filter(r=>(r.title+r.about+r.category).toLowerCase().includes(s.toLowerCase())).map((r,i)=>e(a,{item:!0,xs:1,children:e(h,{course:r})},i))})]})}export{K as default};