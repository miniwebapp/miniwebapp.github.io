import{r as t,D as u,j as s,N as o,b as a,_ as r}from"./index-f83ed4d4.js";const x=t.lazy(()=>r(()=>import("./ELogin-5c6395ec.js"),["assets/ELogin-5c6395ec.js","assets/index-f83ed4d4.js","assets/index-1ec99406.css"])),_=t.lazy(()=>r(()=>import("./Instruction-74eaf3bc.js"),["assets/Instruction-74eaf3bc.js","assets/index-f83ed4d4.js","assets/index-1ec99406.css","assets/dialogTitleClasses-982aa834.js","assets/DialogTitle-7fe8a56b.js","assets/DialogActions-9328f128.js","assets/Instruction-a74f70f2.css"])),d=t.lazy(()=>r(()=>import("./Exam-b50c2ac9.js"),["assets/Exam-b50c2ac9.js","assets/index-f83ed4d4.js","assets/index-1ec99406.css","assets/entry.vite-f39c6f95.js","assets/dialogTitleClasses-982aa834.js","assets/DialogTitle-7fe8a56b.js","assets/DialogContent-56eda925.js","assets/TableRow-b1b90b06.js","assets/DialogActions-9328f128.js","assets/Exam-e76b7fe4.css"])),j=t.lazy(()=>r(()=>import("./Result-725c4403.js"),["assets/Result-725c4403.js","assets/index-f83ed4d4.js","assets/index-1ec99406.css","assets/entry.vite-f39c6f95.js","assets/Stack-764bffe0.js","assets/ButtonGroup-748539b7.js","assets/dialogTitleClasses-982aa834.js","assets/DialogContent-56eda925.js","assets/TableRow-b1b90b06.js","assets/DialogActions-9328f128.js"]));function E(){const{appData:n}=t.useContext(u),[e,l]=t.useState(n),i=c=>{l(c)};if(n.cId===null)return s.jsx(o,{to:"/dashboard"});switch(e.page){case"login":return s.jsx(t.Suspense,{fallback:s.jsx(a,{}),children:s.jsx(x,{i:e,e:i})});case"instruction":return s.jsx(t.Suspense,{fallback:s.jsx(a,{}),children:s.jsx(_,{i:e,e:i})});case"exam":return s.jsx(t.Suspense,{fallback:s.jsx(a,{}),children:s.jsx(d,{i:e,e:i})});case"result":return s.jsx(t.Suspense,{fallback:s.jsx(a,{}),children:s.jsx(j,{i:e})});default:return s.jsx(o,{to:"/"})}}export{E as default};
