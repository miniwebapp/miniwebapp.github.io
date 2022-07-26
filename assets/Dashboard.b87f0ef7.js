import{r as c,D as d,l as x,j as r,f as t,F as g,L as f}from"./index.9f0ba31e.js";import{C as b}from"./CourseDataBase.d9e1ee09.js";import{R as y}from"./RAppBar.f288d560.js";import{C,c as v,d as D,a as A,b as W}from"./CardMedia.90f82a89.js";import{A as R}from"./ShoppingCart.16348966.js";import{T as a,a as i,b as S}from"./Button.d6f501c7.js";import{D as n}from"./Toolbar.31671d98.js";import{C as j,R as k}from"./Rating.2df0c22e.js";import{S as B}from"./Stack.66479514.js";import{G as l}from"./Grid.7cf6a897.js";import"./dividerClasses.81f4eacb.js";import"./listItemTextClasses.529a9ad1.js";import"./utils.499d2a7d.js";import"./ownerDocument.d64bc4d4.js";import"./useSlotProps.512c8a0f.js";import"./assertThisInitialized.20611e2e.js";import"./useId.66c3c666.js";import"./useControlled.5e823adb.js";function z(o){const e=o.course,{appData:s,editAppData:p}=c.exports.useContext(d),m=x();return r(C,{raised:!0,sx:{m:1},children:t(v,{onClick:()=>{p(Object.assign({},s,{cId:e.id})),m("/testdetails")},children:[r(D,{component:"img",image:`./courses/${e.id}/large.jpg`,sx:{display:{xs:"none",sm:"block"}},loading:"lazy",alt:""}),r(A,{avatar:r(R,{variant:"square",src:""}),title:t(a,{noWrap:!0,color:"primary",children:[" ",e.title," "]}),subheader:e.about,sx:{display:{xs:"flex",sm:"none"}}}),r(n,{sx:{display:{xs:"none",sm:"block"}}}),t(W,{sx:{textAlign:"center",display:{xs:"none",sm:"block"}},children:[r(a,{noWrap:!0,color:"primary",children:e.title}),r(a,{variant:"subtitle2",noWrap:!0,color:"text.secondary",children:e.about})]}),r(n,{}),t(a,{variant:"subtitle2",noWrap:!0,m:1,fontWeight:"bold",textAlign:"center",color:"text.secondary",children:[e.tests.length," Tests | ",e.tests.reduce((u,h)=>u+h[1],0)," Questions"]}),r(n,{}),r(a,{variant:"subtitle2",noWrap:!0,p:1,fontWeight:"bold",textAlign:"center",color:"primary",display:"flex",justifyContent:"space-around",alignItems:"center",children:e.bestSeller?r(j,{variant:"filled",label:"Bestseller",color:"success",size:"small"}):t(i,{sx:{display:"flex",alignItems:"center"},children:[t(i,{sx:{mr:.5,fontSize:12,fontWeight:"bold",color:"gray"},children:["(",e.rating,")"]}),r(k,{value:e.rating,readOnly:!0,precision:.1,max:5,size:"small"})]})})]})})}function X(){const{appData:o,editAppData:e}=c.exports.useContext(d);return t(g,{children:[r(y,{}),t(i,{p:2,children:[r(a,{variant:"h5",color:"primary",align:"center",border:1,py:0,mb:2,borderRadius:1,children:"Dashboard"}),r(i,{sx:{bgcolor:"#f543"},borderRadius:1,p:1,children:o.uEnrolled.length===0?t(B,{direction:"column",children:[r(a,{variant:"h4",p:4,fontWeight:"bold",color:"text.secondary",align:"center",children:"No Courses Registered"}),r(f,{to:"/search",children:r(S,{variant:"contained",fullWidth:!0,children:"ADD SOME COURSES"})})]}):r(l,{container:!0,spacing:2,columns:{xs:1,sm:3,md:4,lg:5,xl:6},children:o.uEnrolled.map(s=>r(l,{item:!0,xs:1,children:r(z,{course:b[s]})},s))})})]})]})}export{X as default};
