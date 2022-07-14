import{r as l,f as a,j as e}from"./index.b1762e85.js";import{D as $,P as V}from"./entry.6993cdb7.js";import"./_commonjsHelpers.294d03c4.js";const Q=()=>{document.getElementsByClassName("m3")[0].requestFullscreen()};function X(v){const r=v.i,S=v.e,[N,E]=l.exports.useState(null),[R,L]=l.exports.useState(!1),[k,j]=l.exports.useState("Timer"),B=({numPages:t})=>{E(t);let n=r.tTime*6e4;const m=setInterval(i,1e3);function i(){let o=new Date(n);j(a("span",{style:{backgroundColor:`${n<12e4?"red":"#5cb85c"}`,color:"whitesmoke",padding:"2px 10px",borderRadius:"5px",fontWeight:"bold"},children:[("0"+o.getUTCHours()).slice(-2),":",("0"+o.getUTCMinutes()).slice(-2),":",("0"+o.getUTCSeconds()).slice(-2)]})),n=n-1e3,n<0&&(clearInterval(m),A())}},[s,p]=l.exports.useState(r.tAns.map(t=>["nvd",null])),[y,z]=l.exports.useState(r.cLang[0]),D=t=>{z(t.target.value)},[d,P]=l.exports.useState(1),[c,h]=l.exports.useState({nvd:r.tAns.length,nad:0,asd:0,mfr:0,amr:0}),[u,g]=l.exports.useState(null),f=t=>{g(t.target.value),p(n=>(n[d-1][1]=t.target.value,n))},T=()=>{let t=d-1,n=s[t][0],m=event.target.dataset.i;g(null),p(i=>(i[t][0]=m,i[t][1]=null,i)),h(i=>(i[n]-=1,i[m]+=1,i))},I=()=>{p(t=>(t[0][0]="nad",t)),h(t=>(t.nvd-=1,t.nad+=1,t))};l.exports.useEffect(I,[]);const b=t=>{s[t-1][0]==="nvd"&&(p(n=>(n[t-1][0]="nad",n)),h(n=>(n.nvd-=1,n.nad+=1,n))),P(t)},F=()=>{let t=null;t=d===1?N:d-1,g(s[t-1][1]),b(t)},C=()=>{let t=null;t=d===N?1:d+1,g(s[t-1][1]),b(t)},_=t=>{let n=null;n=parseInt(t.target.dataset.key)+1,g(s[n-1][1]),b(n)},w=t=>{if(u===null){alert("Please choose an option");return}let n=d-1,m=s[n][0],i=t.target.dataset.i;p(o=>(o[n][0]=i,o)),h(o=>(o[m]-=1,o[i]+=1,o)),C()},x=l.exports.useRef(null),O=()=>{x.current.scrollTo({top:x.current.scrollHeight})},M=()=>{x.current.scrollTo({top:0})},A=()=>{R||(S(Object.assign({},r,{uRes:s,uTable:c,page:"result"})),L(!0))};return a("div",{className:"m",style:{height:"100vh"},children:[e("nav",{className:"m1"}),e("header",{className:"m2",children:a("div",{className:"m21",children:[e("table",{className:"m211",children:a("tbody",{children:[a("tr",{children:[e("td",{rowSpan:"4",className:"m2112",style:{backgroundImage:`url(${r.uAvatar})`}}),e("td",{children:"Candidate Name"}),e("td",{children:": "}),e("td",{className:"m2115",children:r.uName})]}),a("tr",{children:[e("td",{children:"Exam Name"}),e("td",{children:": "}),e("td",{className:"m2116",children:r.cCategory})]}),a("tr",{children:[e("td",{children:"Subject Name"}),e("td",{children:": "}),e("td",{className:"m2117",children:r.tName})]}),a("tr",{className:"m213",children:[e("td",{children:"Remaining Time"}),e("td",{children:": "}),e("td",{children:k})]})]})}),e("select",{className:"m212",value:y,onChange:D,children:r.cLang.map((t,n)=>e("option",{value:t,children:t},n))})]})}),a("div",{className:"m3",children:[a("main",{className:"m31",ref:x,children:[a("div",{className:"m3110",children:[e("span",{onClick:O,id:"up",className:"m31101",children:a("svg",{version:"1.1",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",width:30,children:[e("circle",{cx:"20",cy:"20",r:"20",fill:"#44f"}),e("path",{d:"m17.575 4.0336-.24009 20.602-3.3133-4.3701-4.0816 3.3136 10.084 10.997 10.372-11.286-3.9856-3.1215-3.7455 4.8984c-.048018-6.9954-.096037-13.991-.14406-20.986z",fill:"#fff"})]})}),a("h4",{children:["Question number: ",d]})]}),e($,{file:`./courses/${r.cId}/${r.tId}${y}.pdf`,onLoadSuccess:B,children:e(V,{pageNumber:d,renderTextLayer:!1})}),a("div",{className:"m3112",children:[a("label",{htmlFor:"option-one",children:[e("input",{id:"option-one",name:"radio",value:"A",type:"radio",checked:u==="A",onChange:f}),"\xA0(A)"]}),a("label",{htmlFor:"option-two",children:[e("input",{id:"option-two",name:"radio",value:"B",type:"radio",checked:u==="B",onChange:f}),"\xA0(B)"]}),a("label",{htmlFor:"option-three",children:[e("input",{id:"option-three",name:"radio",value:"C",type:"radio",checked:u==="C",onChange:f}),"\xA0(C)"]}),a("label",{htmlFor:"option-four",children:[e("input",{id:"option-four",name:"radio",value:"D",type:"radio",checked:u==="D",onChange:f}),"\xA0(D)"]})]}),e("div",{className:"m3110",children:e("span",{onClick:M,className:"m31101",children:a("svg",{version:"1.1",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",width:30,children:[e("circle",{cx:"20",cy:"20",r:"20",fill:"#44f"}),e("path",{d:"m22.761 34.577.24009-20.602 3.3133 4.3701 4.0816-3.3136-10.084-10.997-10.372 11.286 3.9856 3.1215 3.7455-4.8984c.04802 6.9954.09604 13.991.14406 20.986z",fill:"#fff"})]})})})]}),a("div",{className:"m32",children:[a("div",{className:"opt",children:[e("button",{className:"m3211",onClick:T,"data-i":"nad",children:" CLEAR RESPONSE "}),e("button",{className:"m3212",onClick:w,"data-i":"amr",children:" SAVE & MARK FOR REVIEW "}),e("button",{className:"m3213",onClick:w,"data-i":"asd",children:" SAVE & NEXT "}),e("button",{className:"m3214",onClick:w,"data-i":"mfr",children:" MARK FOR REVIEW AND NEXT "})]}),a("div",{className:"opt",children:[e("button",{onClick:F,children:"\xAB\xA0BACK"}),e("button",{onClick:C,children:"NEXT\xA0\xBB"})]})]}),a("div",{className:"m33",children:[e("span",{className:"nvd",children:c.nvd}),e("div",{children:"Not Visited"}),e("span",{className:"nad",children:c.nad}),e("div",{children:"Not Answered"}),e("span",{className:"asd",children:c.asd}),e("div",{children:"Answered"}),e("span",{className:"mfr",children:c.mfr}),e("div",{children:"Marked for Review"}),e("span",{className:"amr",children:c.amr}),e("div",{className:"m33j",children:"Answered & Marked for Review (Will be considered for evalution)"})]}),e("aside",{className:"m34",children:s.map((t,n)=>e("div",{className:t[0],onClick:_,"data-key":n,children:n+1},n))}),a("div",{className:"opt",children:[e("button",{className:"m35 m36",onClick:Q,children:"Fullscreen"}),e("span",{className:"m35",children:k}),e("button",{onClick:A,children:"SUBMIT"})]})]}),e("footer",{className:"m4"})]})}export{X as default};