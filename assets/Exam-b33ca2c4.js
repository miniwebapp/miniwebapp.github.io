import{a as t,j as e,T as J,c as A}from"./App-3a96b618.js";import{D as Z,P as _}from"./entry.vite-eaf52415.js";import{D as q,a as ee}from"./dialogTitleClasses-7cda83f4.js";import{D as se}from"./DialogTitle-f11bf23e.js";import{D as ne}from"./DialogContent-b1806215.js";import{T as ae,a as re,b as le,c as u,d as l,e as te}from"./TableRow-2321df27.js";const ie=()=>{document.getElementsByClassName("m3")[0].requestFullscreen()};function ue(T){const a=T.i,w=T.e,[E,D]=t.useState(a.cLang[0]),O=s=>{D(s.target.value)},p=t.useRef(null),B=()=>{p.current.scrollTo({top:p.current.scrollHeight})},I=()=>{p.current.scrollTo({top:0})},[N,L]=t.useState(a.tTime*6e4),[M,U]=t.useState(null),[F,P]=t.useState(null),Q=()=>{clearInterval(M),clearTimeout(F),w(Object.assign({},a,{uRes:c,uTable:r,page:"result"}))};var k,S;const W=()=>{k(),S(),w(Object.assign({},a,{uRes:c,uTable:r,page:"result"}))};let m=new Date(N);const $=()=>{L(s=>s-1e3)},[c,j]=t.useState(a.tAns.map(s=>["nvd",null])),[r,f]=t.useState({nvd:a.tAns.length,nad:0,asd:0,mfr:0,amr:0}),[H,V]=t.useState(null),[o,y]=t.useState(1),z=({numPages:s})=>{V(s);let n=setInterval($,1e3);U(n);let x=setTimeout(W,a.tTime*6e4);P(x),k=()=>clearInterval(n),S=()=>clearTimeout(x),j(d=>(d[0][0]="nad",d)),f(d=>(d.nvd-=1,d.nad+=1,d))},[h,g]=t.useState(c[o-1][1]),v=s=>{g(s.target.value),j(n=>(n[o-1][1]=s.target.value,n))},R=s=>{c[s][0]==="nvd"&&(j(n=>(n[s][0]="nad",n)),f(n=>(n.nvd-=1,n.nad+=1,n)))},K=s=>{let n=parseInt(s.target.dataset.key);g(c[n][1]),y(n+1),R(n)},G=()=>{let s=o===H?0:o;g(c[s][1]),y(s+1),R(s)},C=s=>{let n="nad";switch(s.target.dataset.i){case"clr":g(null),j(i=>(i[x][1]=null,i));break;case"mfr":n=h===null?"mfr":"amr";break;case"svn":n=h===null?"nad":"asd";break}let x=o-1,d=c[x][0];j(i=>(i[x][0]=n,i)),f(i=>(i[d]-=1,i[n]+=1,i)),G()},[X,Y]=t.useState(!1),b=()=>Y(s=>!s);return e.jsxs("div",{className:"m",style:{height:"100vh"},children:[e.jsx("nav",{className:"m1"}),e.jsx("header",{className:"m2",children:e.jsxs("div",{className:"m21",children:[e.jsx("table",{className:"m211",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{rowSpan:"4",className:"m2112",style:{backgroundImage:`url(${a.uAvatar})`}}),e.jsx("td",{children:"Candidate Name"}),e.jsx("td",{children:": "}),e.jsx("td",{className:"m2115",children:a.uName})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Exam Name"}),e.jsx("td",{children:": "}),e.jsx("td",{className:"m2116",children:a.eName})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Subject Name"}),e.jsx("td",{children:": "}),e.jsx("td",{className:"m2117",children:a.tName})]}),e.jsxs("tr",{className:"m213",children:[e.jsx("td",{children:"Remaining Time"}),e.jsx("td",{children:": "}),e.jsx("td",{children:e.jsxs("span",{style:{backgroundColor:`${N<12e4?"red":"#5cb85c"}`,color:"whitesmoke",padding:"2px 10px",borderRadius:"5px",fontWeight:"bold"},children:[("0"+m.getUTCHours()).slice(-2),":",("0"+m.getUTCMinutes()).slice(-2),":",("0"+m.getUTCSeconds()).slice(-2)]})})]})]})}),e.jsx("select",{className:"m212",value:E,onChange:O,children:a.cLang.map((s,n)=>e.jsx("option",{value:s,children:s},n))})]})}),e.jsxs("div",{className:"m3",children:[e.jsxs("main",{className:"m31",ref:p,children:[e.jsxs("div",{className:"m3110",children:[e.jsx("span",{onClick:B,id:"up",className:"m31101",children:e.jsxs("svg",{version:"1.1",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",width:30,children:[e.jsx("circle",{cx:"20",cy:"20",r:"20",fill:"#44f"}),e.jsx("path",{d:"m17.575 4.0336-.24009 20.602-3.3133-4.3701-4.0816 3.3136 10.084 10.997 10.372-11.286-3.9856-3.1215-3.7455 4.8984c-.048018-6.9954-.096037-13.991-.14406-20.986z",fill:"#fff"})]})}),e.jsxs("h4",{children:["Question number: ",o]})]}),e.jsx(Z,{file:`./courses/${a.cId}/${a.tId}English.pdf`,onLoadSuccess:z,children:e.jsx(_,{pageNumber:o,renderTextLayer:!1,renderAnnotationLayer:!1})}),e.jsxs("div",{className:"m3112",children:[e.jsxs("label",{htmlFor:"option-one",children:[e.jsx("input",{id:"option-one",name:"radio",value:"A",type:"radio",checked:h==="A",onChange:v})," (A)"]}),e.jsxs("label",{htmlFor:"option-two",children:[e.jsx("input",{id:"option-two",name:"radio",value:"B",type:"radio",checked:h==="B",onChange:v})," (B)"]}),e.jsxs("label",{htmlFor:"option-three",children:[e.jsx("input",{id:"option-three",name:"radio",value:"C",type:"radio",checked:h==="C",onChange:v})," (C)"]}),e.jsxs("label",{htmlFor:"option-four",children:[e.jsx("input",{id:"option-four",name:"radio",value:"D",type:"radio",checked:h==="D",onChange:v})," (D)"]})]}),e.jsx("div",{className:"m3110",children:e.jsx("span",{onClick:I,className:"m31101",children:e.jsxs("svg",{version:"1.1",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",width:30,children:[e.jsx("circle",{cx:"20",cy:"20",r:"20",fill:"#44f"}),e.jsx("path",{d:"m22.761 34.577.24009-20.602 3.3133 4.3701 4.0816-3.3136-10.084-10.997-10.372 11.286 3.9856 3.1215 3.7455-4.8984c.04802 6.9954.09604 13.991.14406 20.986z",fill:"#fff"})]})})})]}),e.jsxs("div",{className:"m32",children:[e.jsx("button",{className:"m3211",onClick:C,"data-i":"clr",children:" CLEAR RESPONSE "}),e.jsx("button",{className:"m3212",onClick:C,"data-i":"mfr",children:" MARK FOR REVIEW "}),e.jsx("button",{className:"m3213",onClick:C,"data-i":"svn",children:" SAVE & NEXT "})]}),e.jsxs("div",{className:"m33",children:[e.jsx("span",{className:"nvd",children:r.nvd}),e.jsx("div",{children:"Not Visited"}),e.jsx("span",{className:"nad",children:r.nad}),e.jsx("div",{children:"Not Answered"}),e.jsx("span",{className:"asd",children:r.asd}),e.jsx("div",{children:"Answered"}),e.jsx("span",{className:"mfr",children:r.mfr}),e.jsx("div",{children:"Marked for Review"}),e.jsx("span",{className:"amr",children:r.amr}),e.jsx("div",{className:"m33j",children:"Answered & Marked for Review (Will be considered for evalution)"})]}),e.jsx("aside",{className:"m34",children:c.map((s,n)=>e.jsx("div",{className:s[0],onClick:K,"data-key":n,children:n+1},n))}),e.jsxs("div",{className:"opt",children:[e.jsx("button",{className:"m35 m36",onClick:ie,children:"Fullscreen"}),e.jsx("span",{className:"m35",children:e.jsxs("span",{style:{backgroundColor:`${N<12e4?"red":"#5cb85c"}`,color:"whitesmoke",padding:"2px 10px",borderRadius:"5px",fontWeight:"bold"},children:[("0"+m.getUTCHours()).slice(-2),":",("0"+m.getUTCMinutes()).slice(-2),":",("0"+m.getUTCSeconds()).slice(-2)]})}),e.jsx("button",{onClick:b,style:{backgroundColor:"GrayText",cursor:"not-allowed"},children:"SUBMIT"})]})]}),e.jsx("footer",{className:"m4"}),e.jsxs(q,{open:X,onClose:b,children:[e.jsx(se,{children:e.jsx(J,{fontWeight:"bold",align:"center",color:"primary",children:"PLEASE CONFIRM YOUR RESPONSES"})}),e.jsx(ne,{children:e.jsx(ae,{children:e.jsxs(re,{border:2,children:[e.jsx(le,{children:e.jsxs(u,{sx:{backgroundColor:"#eee"},children:[e.jsx(l,{children:"Status"}),e.jsx(l,{children:"Number of Questions"})]})}),e.jsxs(te,{children:[e.jsxs(u,{children:[e.jsx(l,{children:"Not Visited"}),e.jsx(l,{children:r.nvd})]}),e.jsxs(u,{children:[e.jsx(l,{children:"Not Answered"}),e.jsx(l,{children:r.nad})]}),e.jsxs(u,{children:[e.jsx(l,{children:"Answered"}),e.jsx(l,{children:r.asd})]}),e.jsxs(u,{children:[e.jsx(l,{children:"Marked for Review"}),e.jsx(l,{children:r.mfr})]}),e.jsxs(u,{children:[e.jsx(l,{children:"Answered & Marked for Review (Will be considered for evalution)"}),e.jsx(l,{children:r.amr})]})]})]})})}),e.jsxs(ee,{children:[e.jsx(A,{variant:"outlined",onClick:Q,children:"CONFIRM & SUBMIT"}),e.jsx(A,{variant:"contained",onClick:b,children:"BACK"})]})]})]})}export{ue as default};
