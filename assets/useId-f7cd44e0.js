import{r as u,M as c}from"./index-a9eba8d1.js";let n=0;function l(t){const[e,a]=u.useState(t),o=t||e;return u.useEffect(()=>{e==null&&(n+=1,a(`mui-${n}`))},[e]),o}const s=c["useId".toString()];function r(t){if(s!==void 0){const e=s();return t??e}return l(t)}export{r as u};
