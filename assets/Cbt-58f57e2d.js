import{D as u,L as a,k as r}from"./App-be772365.js";import{r as t,j as s,N as o}from"./index-b8c10478.js";const x=t.lazy(()=>r(()=>import("./ELogin-a0d2e5b0.js"),["assets/ELogin-a0d2e5b0.js","assets/index-b8c10478.js"])),_=t.lazy(()=>r(()=>import("./Instruction-ccbc2efe.js"),["assets/Instruction-ccbc2efe.js","assets/index-b8c10478.js","assets/dialogTitleClasses-4f7e4aeb.js","assets/App-be772365.js","assets/App-7fad6038.css","assets/DialogTitle-3b57d7a1.js","assets/Instruction-e60895d7.css"])),d=t.lazy(()=>r(()=>import("./Exam-52bd29e2.js"),["assets/Exam-52bd29e2.js","assets/index-b8c10478.js","assets/entry.vite-d9e63245.js","assets/App-be772365.js","assets/App-7fad6038.css","assets/dialogTitleClasses-4f7e4aeb.js","assets/DialogTitle-3b57d7a1.js","assets/DialogContent-95bc7657.js","assets/TableRow-5e7f70fd.js","assets/Exam-e76b7fe4.css"])),j=t.lazy(()=>r(()=>import("./Result-f2cdfb51.js"),["assets/Result-f2cdfb51.js","assets/index-b8c10478.js","assets/entry.vite-d9e63245.js","assets/App-be772365.js","assets/App-7fad6038.css","assets/Stack-7395cdee.js","assets/ButtonGroup-3106036e.js","assets/dialogTitleClasses-4f7e4aeb.js","assets/DialogContent-95bc7657.js","assets/TableRow-5e7f70fd.js"]));function E(){const{appData:n}=t.useContext(u),[e,l]=t.useState(n),i=c=>{l(c)};if(n.cId===null)return s.jsx(o,{to:"/dashboard"});switch(e.page){case"login":return s.jsx(t.Suspense,{fallback:s.jsx(a,{}),children:s.jsx(x,{i:e,e:i})});case"instruction":return s.jsx(t.Suspense,{fallback:s.jsx(a,{}),children:s.jsx(_,{i:e,e:i})});case"exam":return s.jsx(t.Suspense,{fallback:s.jsx(a,{}),children:s.jsx(d,{i:e,e:i})});case"result":return s.jsx(t.Suspense,{fallback:s.jsx(a,{}),children:s.jsx(j,{i:e})});default:return s.jsx(o,{to:"/"})}}export{E as default};
