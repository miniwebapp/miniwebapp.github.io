import{D as u,L as a,k as r}from"./App-5d574ea2.js";import{r as t,j as s,N as o}from"./index-b8c10478.js";const x=t.lazy(()=>r(()=>import("./ELogin-a0d2e5b0.js"),["assets/ELogin-a0d2e5b0.js","assets/index-b8c10478.js"])),_=t.lazy(()=>r(()=>import("./Instruction-3ab284be.js"),["assets/Instruction-3ab284be.js","assets/index-b8c10478.js","assets/dialogTitleClasses-4f54e047.js","assets/App-5d574ea2.js","assets/App-7fad6038.css","assets/DialogTitle-f1a267f0.js","assets/Instruction-e60895d7.css"])),d=t.lazy(()=>r(()=>import("./Exam-bd3964d6.js"),["assets/Exam-bd3964d6.js","assets/index-b8c10478.js","assets/entry.vite-9b9db408.js","assets/App-5d574ea2.js","assets/App-7fad6038.css","assets/dialogTitleClasses-4f54e047.js","assets/DialogTitle-f1a267f0.js","assets/DialogContent-ca9c4194.js","assets/TableRow-2aea28ea.js","assets/Exam-e76b7fe4.css"])),j=t.lazy(()=>r(()=>import("./Result-a11a6b4e.js"),["assets/Result-a11a6b4e.js","assets/index-b8c10478.js","assets/entry.vite-9b9db408.js","assets/App-5d574ea2.js","assets/App-7fad6038.css","assets/Stack-9b78e8d9.js","assets/ButtonGroup-52e05faa.js","assets/dialogTitleClasses-4f54e047.js","assets/DialogContent-ca9c4194.js","assets/TableRow-2aea28ea.js"]));function E(){const{appData:n}=t.useContext(u),[e,l]=t.useState(n),i=c=>{l(c)};if(n.cId===null)return s.jsx(o,{to:"/dashboard"});switch(e.page){case"login":return s.jsx(t.Suspense,{fallback:s.jsx(a,{}),children:s.jsx(x,{i:e,e:i})});case"instruction":return s.jsx(t.Suspense,{fallback:s.jsx(a,{}),children:s.jsx(_,{i:e,e:i})});case"exam":return s.jsx(t.Suspense,{fallback:s.jsx(a,{}),children:s.jsx(d,{i:e,e:i})});case"result":return s.jsx(t.Suspense,{fallback:s.jsx(a,{}),children:s.jsx(j,{i:e})});default:return s.jsx(o,{to:"/"})}}export{E as default};