import{s as g,r as p,u as v,b as y,j as h,_ as m,J as d,H as l,W as k,M as x,X as j}from"./index.9f0ba31e.js";import{e as b}from"./Button.d6f501c7.js";const P=["component","direction","spacing","divider","children"];function V(e,r){const t=p.exports.Children.toArray(e).filter(Boolean);return t.reduce((o,n,c)=>(o.push(n),c<t.length-1&&o.push(p.exports.cloneElement(r,{key:`separator-${c}`})),o),[])}const R=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],S=({ownerState:e,theme:r})=>{let t=m({display:"flex"},d({theme:r},l({values:e.direction,breakpoints:r.breakpoints.values}),o=>({flexDirection:o})));if(e.spacing){const o=k(r),n=Object.keys(r.breakpoints.values).reduce((i,s)=>((typeof e.spacing=="object"&&e.spacing[s]!=null||typeof e.direction=="object"&&e.direction[s]!=null)&&(i[s]=!0),i),{}),c=l({values:e.direction,base:n}),a=l({values:e.spacing,base:n});t=x(t,d({theme:r},a,(i,s)=>({"& > :not(style) + :not(style)":{margin:0,[`margin${R(s?c[s]:e.direction)}`]:j(o,i)}})))}return t},B=g("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,r)=>[r.root]})(S),_=p.exports.forwardRef(function(r,t){const o=v({props:r,name:"MuiStack"}),n=b(o),{component:c="div",direction:a="column",spacing:u=0,divider:i,children:s}=n,f=y(n,P);return h(B,m({as:c,ownerState:{direction:a,spacing:u},ref:t},f,{children:i?V(s,i):s}))});var A=_;export{A as S};
