import{r as c,e as a,j as e}from"./index.42ecc71a.js";import{D as Q,P as U}from"./entry.e0273229.js";const W=()=>{document.getElementsByClassName("m3")[0].requestFullscreen()};function z(C){const l=C.i,E=C.e,[w,y]=c.exports.useState(null),[R,B]=c.exports.useState(!1),[b,D]=c.exports.useState("Timer"),T=({numPages:n})=>{y(n);let t=l.tTime*6e4;const m=setInterval(r,1e3);function r(){let s=new Date(t);D(a("span",{style:{backgroundColor:`${t<12e4?"red":"#5cb85c"}`,color:"whitesmoke",padding:"2px 10px",borderRadius:"5px",fontWeight:"bold"},children:[("0"+s.getUTCHours()).slice(-2),":",("0"+s.getUTCMinutes()).slice(-2),":",("0"+s.getUTCSeconds()).slice(-2)]})),t=t-1e3,t<0&&(clearInterval(m),S())}},[d,u]=c.exports.useState(l.tAns.map(n=>["nvd",null])),[A,I]=c.exports.useState(l.cLang[0]),F=n=>{I(n.target.value)},[i,L]=c.exports.useState(1),[o,N]=c.exports.useState({nvd:l.tAns.length,nad:0,asd:0,mfr:0,amr:0}),[h,p]=c.exports.useState(null),v=n=>{p(n.target.value),u(t=>(t[i-1][1]=n.target.value,t))},P=()=>{let n=i-1,t=d[n][0],m=event.target.dataset.i;p(null),u(r=>(r[n][0]=m,r[n][1]=null,r)),N(r=>(r[t]-=1,r[m]+=1,r))},O=()=>{u(n=>(n[0][0]="nad",n)),N(n=>(n.nvd-=1,n.nad+=1,n))};c.exports.useEffect(O,[]);const f=n=>{d[n-1][0]==="nvd"&&(u(t=>(t[n-1][0]="nad",t)),N(t=>(t.nvd-=1,t.nad+=1,t))),L(n)},j=()=>{let n=null;n=i===1?w:i-1,p(d[n-1][1]),f(n)},k=()=>{let n=null;n=i===w?1:i+1,p(d[n-1][1]),f(n)},M=n=>{let t=null;t=parseInt(n.target.dataset.key)+1,p(d[t-1][1]),f(t)},x=n=>{if(h===null){alert("Please choose an option");return}let t=i-1,m=d[t][0],r=n.target.dataset.i;u(s=>(s[t][0]=r,s)),N(s=>(s[m]-=1,s[r]+=1,s)),k()},g=c.exports.useRef(null),$=()=>{g.current.scrollTo({top:g.current.scrollHeight})},V=()=>{g.current.scrollTo({top:0})},S=()=>{R||(E(Object.assign({},l,{uRes:d,uTable:o,page:"result"})),B(!0))};return a("div",{className:"m",style:{height:"100vh"},children:[e("nav",{className:"m1"}),e("header",{className:"m2",children:a("div",{className:"m21",children:[e("table",{className:"m211",children:a("tbody",{children:[a("tr",{children:[e("td",{rowSpan:"4",className:"m2112",style:{backgroundImage:`url(${l.uAvatar})`}}),e("td",{children:"Candidate Name"}),e("td",{children:": "}),e("td",{className:"m2115",children:l.uName})]}),a("tr",{children:[e("td",{children:"Exam Name"}),e("td",{children:": "}),e("td",{className:"m2116",children:l.cCategory})]}),a("tr",{children:[e("td",{children:"Subject Name"}),e("td",{children:": "}),e("td",{className:"m2117",children:l.tName})]}),a("tr",{className:"m213",children:[e("td",{children:"Remaining Time"}),e("td",{children:": "}),e("td",{children:b})]})]})}),e("select",{className:"m212",value:A,onChange:F,children:l.cLang.map((n,t)=>e("option",{value:n,children:n},t))})]})}),a("div",{className:"m3",children:[a("main",{className:"m31",ref:g,children:[a("div",{className:"m3110",children:[e("span",{onClick:$,id:"up",className:"m31101",children:a("svg",{version:"1.1",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",width:30,children:[e("circle",{cx:"20",cy:"20",r:"20",fill:"#44f"}),e("path",{d:"m17.575 4.0336-.24009 20.602-3.3133-4.3701-4.0816 3.3136 10.084 10.997 10.372-11.286-3.9856-3.1215-3.7455 4.8984c-.048018-6.9954-.096037-13.991-.14406-20.986z",fill:"#fff"})]})}),a("h4",{children:["Question number: ",i]})]}),e(Q,{file:`./courses/${l.cId}/${l.tId}${A}.pdf`,onLoadSuccess:T,children:e(U,{pageNumber:i,renderTextLayer:!1})}),a("div",{className:"m3112",children:[a("label",{htmlFor:"option-one",children:[e("input",{id:"option-one",name:"radio",value:"A",type:"radio",checked:h==="A",onChange:v}),"\xA0(A)"]}),a("label",{htmlFor:"option-two",children:[e("input",{id:"option-two",name:"radio",value:"B",type:"radio",checked:h==="B",onChange:v}),"\xA0(B)"]}),a("label",{htmlFor:"option-three",children:[e("input",{id:"option-three",name:"radio",value:"C",type:"radio",checked:h==="C",onChange:v}),"\xA0(C)"]}),a("label",{htmlFor:"option-four",children:[e("input",{id:"option-four",name:"radio",value:"D",type:"radio",checked:h==="D",onChange:v}),"\xA0(D)"]})]}),e("div",{className:"m3110",children:e("span",{onClick:V,className:"m31101",children:a("svg",{version:"1.1",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",width:30,children:[e("circle",{cx:"20",cy:"20",r:"20",fill:"#44f"}),e("path",{d:"m22.761 34.577.24009-20.602 3.3133 4.3701 4.0816-3.3136-10.084-10.997-10.372 11.286 3.9856 3.1215 3.7455-4.8984c.04802 6.9954.09604 13.991.14406 20.986z",fill:"#fff"})]})})})]}),a("div",{className:"m32",children:[a("div",{className:"opt",children:[e("button",{className:"m3211",onClick:P,"data-i":"nad",children:" CLEAR RESPONSE "}),e("button",{className:"m3212",onClick:x,"data-i":"amr",children:" SAVE & MARK FOR REVIEW "}),e("button",{className:"m3213",onClick:x,"data-i":"asd",children:" SAVE & NEXT "}),e("button",{className:"m3214",onClick:x,"data-i":"mfr",children:" MARK FOR REVIEW AND NEXT "})]}),a("div",{className:"opt",children:[e("button",{onClick:j,children:"\xAB\xA0BACK"}),e("button",{onClick:k,children:"NEXT\xA0\xBB"})]})]}),a("div",{className:"m33",children:[e("span",{className:"nvd",children:o.nvd}),e("div",{children:"Not Visited"}),e("span",{className:"nad",children:o.nad}),e("div",{children:"Not Answered"}),e("span",{className:"asd",children:o.asd}),e("div",{children:"Answered"}),e("span",{className:"mfr",children:o.mfr}),e("div",{children:"Marked for Review"}),e("span",{className:"amr",children:o.amr}),e("div",{className:"m33j",children:"Answered & Marked for Review (Will be considered for evalution)"})]}),e("aside",{className:"m34",children:d.map((n,t)=>e("div",{className:n[0],onClick:M,"data-key":t,children:t+1},t))}),a("div",{className:"opt",children:[e("button",{className:"m35 m36",onClick:W,children:"Fullscreen"}),e("span",{className:"m35",children:b}),e("button",{onClick:S,children:"SUBMIT"})]})]}),e("footer",{className:"m4"})]})}export{z as default};
