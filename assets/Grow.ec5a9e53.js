import{r as u,b as N,j as O,_ as E}from"./index.9f0ba31e.js";import{u as Q}from"./dividerClasses.81f4eacb.js";import{T as U,r as V,g as A}from"./utils.499d2a7d.js";import{u as L}from"./Button.d6f501c7.js";const X=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function x(f){return`scale(${f}, ${f**2})`}const Y={entering:{opacity:1,transform:x(1)},entered:{opacity:1,transform:"none"}},p=typeof navigator!="undefined"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),_=u.exports.forwardRef(function(h,D){const{addEndListener:y,appear:G=!0,children:l,easing:T,in:R,onEnter:j,onEntered:H,onEntering:b,onExit:v,onExited:C,onExiting:F,style:m,timeout:o="auto",TransitionComponent:P=U}=h,$=N(h,X),w=u.exports.useRef(),g=u.exports.useRef(),r=Q(),d=u.exports.useRef(null),S=L(l.ref,D),W=L(d,S),s=t=>e=>{if(t){const i=d.current;e===void 0?t(i):t(i,e)}},z=s(b),K=s((t,e)=>{V(t);const{duration:i,delay:c,easing:n}=A({style:m,timeout:o,easing:T},{mode:"enter"});let a;o==="auto"?(a=r.transitions.getAutoHeightDuration(t.clientHeight),g.current=a):a=i,t.style.transition=[r.transitions.create("opacity",{duration:a,delay:c}),r.transitions.create("transform",{duration:p?a:a*.666,delay:c,easing:n})].join(","),j&&j(t,e)}),k=s(H),q=s(F),B=s(t=>{const{duration:e,delay:i,easing:c}=A({style:m,timeout:o,easing:T},{mode:"exit"});let n;o==="auto"?(n=r.transitions.getAutoHeightDuration(t.clientHeight),g.current=n):n=e,t.style.transition=[r.transitions.create("opacity",{duration:n,delay:i}),r.transitions.create("transform",{duration:p?n:n*.666,delay:p?i:i||n*.333,easing:c})].join(","),t.style.opacity=0,t.style.transform=x(.75),v&&v(t)}),J=s(C),M=t=>{o==="auto"&&(w.current=setTimeout(t,g.current||0)),y&&y(d.current,t)};return u.exports.useEffect(()=>()=>{clearTimeout(w.current)},[]),O(P,E({appear:G,in:R,nodeRef:d,onEnter:K,onEntered:k,onEntering:z,onExit:B,onExited:J,onExiting:q,addEndListener:M,timeout:o==="auto"?null:o},$,{children:(t,e)=>u.exports.cloneElement(l,E({style:E({opacity:0,transform:x(.75),visibility:t==="exited"&&!R?"hidden":void 0},Y[t],m,l.props.style),ref:W},e))}))});_.muiSupportAuto=!0;var et=_;export{et as G};
