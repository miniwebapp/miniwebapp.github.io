import{U as m,j as s,aj as h,a as c,D as d,u as j,av as g,aw as b,ax as v,au as y,Y as f,T as a,t as n,ay as C,B as i,at as D,as as W,b as A,L as z,c as o,$ as l}from"./App-4ef6ed4c.js";import{S as E}from"./Stack-be7c4f5d.js";const R=m(s.jsx("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}),"Comment");function S(t){const e=h[parseInt(t.course.id.substr(2))-1],{appData:r,editAppData:x}=c.useContext(d),u=j(),p=()=>{x(Object.assign({},r,{cId:e.id})),u("/testdetails")};return s.jsx(g,{raised:!0,sx:{m:1},children:s.jsxs(b,{onClick:p,children:[s.jsx(v,{component:"img",image:`./courses/${e.id}/large.jpg`,sx:{display:{xs:"none",sm:"block"}},loading:"lazy",alt:""}),s.jsx(y,{avatar:s.jsx(f,{variant:"square",src:`./courses/${e.id}/small.jpg`}),title:s.jsxs(a,{noWrap:!0,color:"primary",children:[" ",e.title," "]}),subheader:e.about,sx:{display:{xs:"flex",sm:"none"}}}),s.jsx(n,{sx:{display:{xs:"none",sm:"block"}}}),s.jsxs(C,{sx:{textAlign:"center",display:{xs:"none",sm:"block"}},children:[s.jsx(a,{noWrap:!0,color:"primary",children:e.title}),s.jsx(a,{variant:"subtitle2",noWrap:!0,color:"text.secondary",children:e.about})]}),s.jsx(n,{}),s.jsxs(a,{variant:"subtitle2",noWrap:!0,m:1,fontWeight:"bold",textAlign:"center",color:"text.secondary",children:[e.tests," Tests | ",e.ques," Questions"]}),s.jsx(n,{}),s.jsx(a,{variant:"subtitle2",noWrap:!0,p:1,fontWeight:"bold",textAlign:"center",color:"primary",display:"flex",justifyContent:"space-around",alignItems:"center",children:s.jsxs(i,{sx:{display:"flex",alignItems:"center"},children:[s.jsxs(i,{sx:{mr:.5,fontSize:12,fontWeight:"bold",color:"gray"},children:["(",e.rating,")"]}),s.jsx(D,{value:e.rating,readOnly:!0,precision:.1,max:5,size:"small"})]})}),s.jsx(n,{}),s.jsx(a,{variant:"subtitle2",noWrap:!0,p:1,textAlign:"center",children:s.jsx(W,{variant:"filled",label:`Enrolled on: ${t.course.eDate}`,color:"success",size:"small"})})]})})}function I(){const{appData:t,editAppData:e}=c.useContext(d);return s.jsxs(s.Fragment,{children:[s.jsx(A,{}),s.jsxs(i,{p:2,children:[s.jsx(a,{variant:"h5",color:"primary",align:"center",border:1,py:0,mb:2,borderRadius:1,children:"Dashboard"}),s.jsx(i,{sx:{bgcolor:"#f543"},borderRadius:1,p:1,children:t.uEnrolled.length===0?s.jsxs(E,{direction:"column",children:[s.jsx(a,{variant:"h4",p:4,fontWeight:"bold",color:"text.secondary",align:"center",children:"No Courses Registered"}),s.jsx(z,{to:"/search",children:s.jsx(o,{variant:"contained",fullWidth:!0,children:"ADD SOME COURSES"})})]}):s.jsx(l,{container:!0,spacing:2,columns:{xs:1,sm:3,md:4,lg:5,xl:6},children:t.uEnrolled.map(r=>s.jsx(l,{item:!0,xs:1,children:s.jsx(S,{course:r})},r.id))})}),s.jsx(o,{variant:"contained",color:"success",size:"small",startIcon:s.jsx(R,{}),href:"https://forms.gle/S5mFDuXmwB4E6yR49",target:"_blank",sx:{position:"absolute",right:0,bottom:0,m:2},children:"Write a comment !"})]})]})}export{I as default};