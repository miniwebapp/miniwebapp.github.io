import{aj as p,a as l,D as c,u as j,j as s,av as h,aw as m,ax as g,au as b,Y as y,T as a,t as n,ay as f,B as i,at as v,as as C,b as D,L as A,c as W,$ as o}from"./App-586ef10b.js";import{S as E}from"./Stack-13454c94.js";function R(t){const e=p[parseInt(t.course.id.substr(2))-1],{appData:r,editAppData:d}=l.useContext(c),x=j(),u=()=>{d(Object.assign({},r,{cId:e.id})),x("/testdetails")};return s.jsx(h,{raised:!0,sx:{m:1},children:s.jsxs(m,{onClick:u,children:[s.jsx(g,{component:"img",image:`./courses/${e.id}/large.jpg`,sx:{display:{xs:"none",sm:"block"}},loading:"lazy",alt:""}),s.jsx(b,{avatar:s.jsx(y,{variant:"square",src:`./courses/${e.id}/small.jpg`}),title:s.jsxs(a,{noWrap:!0,color:"primary",children:[" ",e.title," "]}),subheader:e.about,sx:{display:{xs:"flex",sm:"none"}}}),s.jsx(n,{sx:{display:{xs:"none",sm:"block"}}}),s.jsxs(f,{sx:{textAlign:"center",display:{xs:"none",sm:"block"}},children:[s.jsx(a,{noWrap:!0,color:"primary",children:e.title}),s.jsx(a,{variant:"subtitle2",noWrap:!0,color:"text.secondary",children:e.about})]}),s.jsx(n,{}),s.jsxs(a,{variant:"subtitle2",noWrap:!0,m:1,fontWeight:"bold",textAlign:"center",color:"text.secondary",children:[e.tests," Tests | ",e.ques," Questions"]}),s.jsx(n,{}),s.jsx(a,{variant:"subtitle2",noWrap:!0,p:1,fontWeight:"bold",textAlign:"center",color:"primary",display:"flex",justifyContent:"space-around",alignItems:"center",children:s.jsxs(i,{sx:{display:"flex",alignItems:"center"},children:[s.jsxs(i,{sx:{mr:.5,fontSize:12,fontWeight:"bold",color:"gray"},children:["(",e.rating,")"]}),s.jsx(v,{value:e.rating,readOnly:!0,precision:.1,max:5,size:"small"})]})}),s.jsx(n,{}),s.jsx(a,{variant:"subtitle2",noWrap:!0,p:1,textAlign:"center",children:s.jsx(C,{variant:"filled",label:`Enrolled on: ${t.course.eDate}`,color:"success",size:"small"})})]})})}function S(){const{appData:t,editAppData:e}=l.useContext(c);return s.jsxs(s.Fragment,{children:[s.jsx(D,{}),s.jsxs(i,{p:2,children:[s.jsx(a,{variant:"h5",color:"primary",align:"center",border:1,py:0,mb:2,borderRadius:1,children:"Dashboard"}),s.jsx(i,{sx:{bgcolor:"#f543"},borderRadius:1,p:1,children:t.uEnrolled.length===0?s.jsxs(E,{direction:"column",children:[s.jsx(a,{variant:"h4",p:4,fontWeight:"bold",color:"text.secondary",align:"center",children:"No Courses Registered"}),s.jsx(A,{to:"/search",children:s.jsx(W,{variant:"contained",fullWidth:!0,children:"ADD SOME COURSES"})})]}):s.jsx(o,{container:!0,spacing:2,columns:{xs:1,sm:3,md:4,lg:5,xl:6},children:t.uEnrolled.map(r=>s.jsx(o,{item:!0,xs:1,children:s.jsx(R,{course:r})},r.id))})})]})]})}export{S as default};
