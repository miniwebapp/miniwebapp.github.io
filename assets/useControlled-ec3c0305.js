import{r as u,R as i}from"./index-d5f2bd80.js";let l=0;function m(t){const[e,n]=u.useState(t),s=t||e;return u.useEffect(()=>{e==null&&(l+=1,n(`mui-${l}`))},[e]),s}const o=i["useId".toString()];function R(t){if(o!==void 0){const e=o();return t??e}return m(t)}function S({controlled:t,default:e,name:n,state:s="value"}){const{current:a}=u.useRef(t!==void 0),[c,f]=u.useState(e),r=a?t:c,d=u.useCallback(I=>{a||f(I)},[]);return[r,d]}export{R as a,S as u};