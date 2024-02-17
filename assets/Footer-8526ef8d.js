import{r as C,g as H,h as K,s as O,_ as b,f as F,H as U,b as D,j as s,d as Z,I as w,J as V,e as J,L as x}from"./index-a9eba8d1.js";import{d as q,c as S,B as Q,I as k}from"./Modal-8f1dc350.js";const X=C.createContext(),P=X;function Y(e){return H("MuiGrid",e)}const ee=[0,1,2,3,4,5,6,7,8,9,10],te=["column-reverse","column","row-reverse","row"],ne=["nowrap","wrap-reverse","wrap"],v=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],$=K("MuiGrid",["root","container","item","zeroMinWidth",...ee.map(e=>`spacing-xs-${e}`),...te.map(e=>`direction-xs-${e}`),...ne.map(e=>`wrap-xs-${e}`),...v.map(e=>`grid-xs-${e}`),...v.map(e=>`grid-sm-${e}`),...v.map(e=>`grid-md-${e}`),...v.map(e=>`grid-lg-${e}`),...v.map(e=>`grid-xl-${e}`)]),se=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function g(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function re({theme:e,ownerState:t}){let i;return e.breakpoints.keys.reduce((r,n)=>{let o={};if(t[n]&&(i=t[n]),!i)return r;if(i===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(i==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=w({values:t.columns,breakpoints:e.breakpoints.values}),u=typeof c=="object"?c[n]:c;if(u==null)return r;const p=`${Math.round(i/u*1e8)/1e6}%`;let l={};if(t.container&&t.item&&t.columnSpacing!==0){const a=e.spacing(t.columnSpacing);if(a!=="0px"){const d=`calc(${p} + ${g(a)})`;l={flexBasis:d,maxWidth:d}}}o=b({flexBasis:p,flexGrow:0,maxWidth:p},l)}return e.breakpoints.values[n]===0?Object.assign(r,o):r[e.breakpoints.up(n)]=o,r},{})}function ie({theme:e,ownerState:t}){const i=w({values:t.direction,breakpoints:e.breakpoints.values});return V({theme:e},i,r=>{const n={flexDirection:r};return r.indexOf("column")===0&&(n[`& > .${$.item}`]={maxWidth:"none"}),n})}function I({breakpoints:e,values:t}){let i="";Object.keys(t).forEach(n=>{i===""&&t[n]!==0&&(i=n)});const r=Object.keys(e).sort((n,o)=>e[n]-e[o]);return r.slice(0,r.indexOf(i))}function oe({theme:e,ownerState:t}){const{container:i,rowSpacing:r}=t;let n={};if(i&&r!==0){const o=w({values:r,breakpoints:e.breakpoints.values});let c;typeof o=="object"&&(c=I({breakpoints:e.breakpoints.values,values:o})),n=V({theme:e},o,(u,p)=>{var l;const a=e.spacing(u);return a!=="0px"?{marginTop:`-${g(a)}`,[`& > .${$.item}`]:{paddingTop:g(a)}}:(l=c)!=null&&l.includes(p)?{}:{marginTop:0,[`& > .${$.item}`]:{paddingTop:0}}})}return n}function ae({theme:e,ownerState:t}){const{container:i,columnSpacing:r}=t;let n={};if(i&&r!==0){const o=w({values:r,breakpoints:e.breakpoints.values});let c;typeof o=="object"&&(c=I({breakpoints:e.breakpoints.values,values:o})),n=V({theme:e},o,(u,p)=>{var l;const a=e.spacing(u);return a!=="0px"?{width:`calc(100% + ${g(a)})`,marginLeft:`-${g(a)}`,[`& > .${$.item}`]:{paddingLeft:g(a)}}:(l=c)!=null&&l.includes(p)?{}:{width:"100%",marginLeft:0,[`& > .${$.item}`]:{paddingLeft:0}}})}return n}function ce(e,t,i={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[i[`spacing-xs-${String(e)}`]];const r=[];return t.forEach(n=>{const o=e[n];Number(o)>0&&r.push(i[`spacing-${n}-${String(o)}`])}),r}const le=O("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e,{container:r,direction:n,item:o,spacing:c,wrap:u,zeroMinWidth:p,breakpoints:l}=i;let a=[];r&&(a=ce(c,l,t));const d=[];return l.forEach(f=>{const m=i[f];m&&d.push(t[`grid-${f}-${String(m)}`])}),[t.root,r&&t.container,o&&t.item,p&&t.zeroMinWidth,...a,n!=="row"&&t[`direction-xs-${String(n)}`],u!=="wrap"&&t[`wrap-xs-${String(u)}`],...d]}})(({ownerState:e})=>b({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),ie,oe,ae,re);function ue(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const i=[];return t.forEach(r=>{const n=e[r];if(Number(n)>0){const o=`spacing-${r}-${String(n)}`;i.push(o)}}),i}const pe=e=>{const{classes:t,container:i,direction:r,item:n,spacing:o,wrap:c,zeroMinWidth:u,breakpoints:p}=e;let l=[];i&&(l=ue(o,p));const a=[];p.forEach(f=>{const m=e[f];m&&a.push(`grid-${f}-${String(m)}`)});const d={root:["root",i&&"container",n&&"item",u&&"zeroMinWidth",...l,r!=="row"&&`direction-xs-${String(r)}`,c!=="wrap"&&`wrap-xs-${String(c)}`,...a]};return J(d,Y,t)},de=C.forwardRef(function(t,i){const r=F({props:t,name:"MuiGrid"}),{breakpoints:n}=q(),o=U(r),{className:c,columns:u,columnSpacing:p,component:l="div",container:a=!1,direction:d="row",item:f=!1,rowSpacing:m,spacing:z=0,wrap:L="wrap",zeroMinWidth:A=!1}=o,M=D(o,se),E=m||z,T=p||z,R=C.useContext(P),W=a?u||12:R,G={},B=b({},M);n.keys.forEach(y=>{M[y]!=null&&(G[y]=M[y],delete B[y])});const N=b({},o,{columns:W,container:a,direction:d,item:f,rowSpacing:E,columnSpacing:T,wrap:L,zeroMinWidth:A,spacing:z},G,{breakpoints:n.keys}),_=pe(N);return s.jsx(P.Provider,{value:W,children:s.jsx(le,b({ownerState:N,className:Z(_.root,c),as:l,ref:i},B))})}),j=de,fe=S(s.jsx("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook"),me=S([s.jsx("path",{d:"M17 18H7V6h7V1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-5h-2v2z"},"0"),s.jsx("path",{d:"m18 14 5-5-1.41-1.41L19 10.17V3h-2v7.17l-2.59-2.58L13 9z"},"1")],"InstallMobile"),xe=S(s.jsx("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}),"Message"),he=S(s.jsx("path",{d:"M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"}),"Telegram"),ge=S(s.jsx("path",{d:"M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"}),"WhatsApp"),h={color:"white",fontSize:"0.9rem",display:"block",marginBottom:"0.4rem"};function be(){return s.jsxs(j,{container:!0,textAlign:"center",p:3,bgcolor:"#333",color:"#fff",children:[s.jsxs(j,{p:1,pt:3.5,item:!0,xs:6,sm:3,children:[s.jsx(x,{style:h,to:"/demo",children:"Try for free"}),s.jsx(x,{style:h,to:"/help",children:"Need Help ?"}),s.jsx(x,{style:h,to:"/contact",children:"Contact Us"}),s.jsx(x,{style:h,to:"/about",children:"About Exam Idea"})]}),s.jsxs(j,{p:1,pt:3.5,item:!0,xs:6,sm:3,children:[s.jsx(x,{style:h,to:"/TermsAndConditions",children:"Terms & Conditions"}),s.jsx(x,{style:h,to:"/PrivacyPolicy",children:"Privacy Policy"}),s.jsx(x,{style:h,to:"/RefundAndCancellationPolicy",children:"Refund & Cancellation Policy"})]}),s.jsxs(j,{p:1,item:!0,xs:6,sm:3,children:[s.jsx("h3",{children:"Install App"}),s.jsx(Q,{variant:"outlined",sx:{m:1},color:"inherit",size:"small",startIcon:s.jsx(me,{}),children:"Exam Idea"})]}),s.jsxs(j,{p:1,item:!0,xs:6,sm:3,children:[s.jsx("h3",{children:"Social links"}),s.jsx(k,{href:"https://fb.me/examidea.in",target:"_blank",children:s.jsx(fe,{sx:{color:"#fff"}})}),s.jsx(k,{children:s.jsx(ge,{sx:{color:"#fff"}})}),s.jsx(k,{href:"https://m.me/examidea.in",target:"_blank",children:s.jsx(xe,{sx:{color:"#fff"}})}),s.jsx(k,{href:"https://t.me/examidea_in",target:"_blank",children:s.jsx(he,{sx:{color:"#fff"}})}),s.jsx("br",{})]})]})}export{be as F,j as G};
