import{s as v,a as p,i as k,w as h,l as x,j,_ as y,x as m,y as u,z as V,C as b,E as P,J as R}from"./App-4ef6ed4c.js";const B=["component","direction","spacing","divider","children"];function E(e,o){const n=p.Children.toArray(e).filter(Boolean);return n.reduce((i,c,s)=>(i.push(c),s<n.length-1&&i.push(p.cloneElement(o,{key:`separator-${s}`})),i),[])}const D=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],S=({ownerState:e,theme:o})=>{let n=y({display:"flex",flexDirection:"column"},m({theme:o},u({values:e.direction,breakpoints:o.breakpoints.values}),i=>({flexDirection:i})));if(e.spacing){const i=V(o),c=Object.keys(o.breakpoints.values).reduce((t,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(t[r]=!0),t),{}),s=u({values:e.direction,base:c}),a=u({values:e.spacing,base:c});typeof s=="object"&&Object.keys(s).forEach((t,r,l)=>{if(!s[t]){const g=r>0?s[l[r-1]]:"column";s[t]=g}}),n=b(n,m({theme:o},a,(t,r)=>({"& > :not(style) + :not(style)":{margin:0,[`margin${D(r?s[r]:e.direction)}`]:R(i,t)}})))}return n=P(o.breakpoints,n),n},_=v("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>[o.root]})(S),C=p.forwardRef(function(o,n){const i=k({props:o,name:"MuiStack"}),c=h(i),{component:s="div",direction:a="column",spacing:d=0,divider:t,children:r}=c,l=x(c,B),f={direction:a,spacing:d};return j.jsx(_,y({as:s,ownerState:f,ref:n},l,{children:t?E(r,t):r}))}),O=C;export{O as S};
