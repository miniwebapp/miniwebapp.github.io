import{a as t,D as u,j as s,N as o,p as a,q as r}from"./App-3a96b618.js";const x=t.lazy(()=>r(()=>import("./ELogin-0d0a83ac.js"),["assets/ELogin-0d0a83ac.js","assets/App-3a96b618.js","assets/App-7fad6038.css"])),_=t.lazy(()=>r(()=>import("./Instruction-ea2f7026.js"),["assets/Instruction-ea2f7026.js","assets/App-3a96b618.js","assets/App-7fad6038.css","assets/dialogTitleClasses-7cda83f4.js","assets/DialogTitle-f11bf23e.js","assets/Instruction-e60895d7.css"])),d=t.lazy(()=>r(()=>import("./Exam-b33ca2c4.js"),["assets/Exam-b33ca2c4.js","assets/App-3a96b618.js","assets/App-7fad6038.css","assets/entry.vite-eaf52415.js","assets/dialogTitleClasses-7cda83f4.js","assets/DialogTitle-f11bf23e.js","assets/DialogContent-b1806215.js","assets/TableRow-2321df27.js","assets/Exam-e76b7fe4.css"])),j=t.lazy(()=>r(()=>import("./Result-aea6960a.js"),["assets/Result-aea6960a.js","assets/App-3a96b618.js","assets/App-7fad6038.css","assets/entry.vite-eaf52415.js","assets/Stack-218ad56c.js","assets/ButtonGroup-9f3eafc6.js","assets/dialogTitleClasses-7cda83f4.js","assets/DialogContent-b1806215.js","assets/TableRow-2321df27.js"]));function E(){const{appData:n}=t.useContext(u),[e,l]=t.useState(n),i=c=>{l(c)};if(n.cId===null)return s.jsx(o,{to:"/dashboard"});switch(e.page){case"login":return s.jsx(t.Suspense,{fallback:s.jsx(a,{}),children:s.jsx(x,{i:e,e:i})});case"instruction":return s.jsx(t.Suspense,{fallback:s.jsx(a,{}),children:s.jsx(_,{i:e,e:i})});case"exam":return s.jsx(t.Suspense,{fallback:s.jsx(a,{}),children:s.jsx(d,{i:e,e:i})});case"result":return s.jsx(t.Suspense,{fallback:s.jsx(a,{}),children:s.jsx(j,{i:e})});default:return s.jsx(o,{to:"/"})}}export{E as default};
