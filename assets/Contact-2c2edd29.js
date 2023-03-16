import{g as G,e as U,K as A,O as q,s as H,T as p,h as D,_ as f,a as y,i as O,l as _,Q as J,S as K,j as e,n as Q,o as X,U as j,b as Y,V as Z,B as g,P as ee,W as u,X as d,Y as m,Z as x,$ as i,a0 as c,c as ne}from"./App-3a96b618.js";import{S as se}from"./Stack-218ad56c.js";import{S as re,A as te}from"./Snackbar-f8614070.js";function oe(s){return U("MuiLink",s)}const ae=G("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),ie=ae,F={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},le=s=>F[s]||s,ce=({theme:s,ownerState:n})=>{const t=le(n.color),o=A(s,`palette.${t}`,!1)||n.color,r=A(s,`palette.${t}Channel`);return"vars"in s&&r?`rgba(${r} / 0.4)`:q(o,.4)},ue=ce,de=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],me=s=>{const{classes:n,component:t,focusVisible:o,underline:r}=s,a={root:["root",`underline${D(r)}`,t==="button"&&"button",o&&"focusVisible"]};return X(a,oe,n)},xe=H(p,{name:"MuiLink",slot:"Root",overridesResolver:(s,n)=>{const{ownerState:t}=s;return[n.root,n[`underline${D(t.underline)}`],t.component==="button"&&n.button]}})(({theme:s,ownerState:n})=>f({},n.underline==="none"&&{textDecoration:"none"},n.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},n.underline==="always"&&f({textDecoration:"underline"},n.color!=="inherit"&&{textDecorationColor:ue({theme:s,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),n.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ie.focusVisible}`]:{outline:"auto"}})),he=y.forwardRef(function(n,t){const o=O({props:n,name:"MuiLink"}),{className:r,color:a="primary",component:v="a",onBlur:C,onFocus:k,TypographyClasses:M,underline:P="always",variant:S="inherit",sx:b}=o,B=_(o,de),{isFocusVisibleRef:L,onBlur:W,onFocus:z,ref:R}=J(),[$,T]=y.useState(!1),w=K(t,R),E=l=>{W(l),L.current===!1&&T(!1),C&&C(l)},I=l=>{z(l),L.current===!0&&T(!0),k&&k(l)},V=f({},o,{color:a,component:v,focusVisible:$,underline:P,variant:S}),N=me(V);return e.jsx(xe,f({color:a,className:Q(N.root,r),classes:M,component:v,onBlur:E,onFocus:I,ref:w,ownerState:V,variant:S,sx:[...Object.keys(F).includes(a)?[]:[{color:a}],...Array.isArray(b)?b:[b]]},B))}),h=he,pe=j(e.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Mail"),fe=j(e.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"Phone"),je=j(e.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"Place"),be=j(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"}),"Public");function Ce(){const[s,n]=y.useState(!1),t=o=>{o.preventDefault();let r=new FormData(o.currentTarget),a={name:r.get("name"),contact:r.get("contact"),email:r.get("email"),subject:r.get("subject"),message:r.get("message")};fetch("https://ap-south-1.aws.data.mongodb-api.com/app/application-0-sjyrk/endpoint/contactus",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),n(!0),o.target.reset()};return e.jsxs(e.Fragment,{children:[e.jsx(Y,{}),e.jsxs(Z,{component:"main",children:[e.jsx(g,{sx:{my:7,display:"flex",flexDirection:"column",alignItems:"center"},children:e.jsxs(se,{component:ee,elevation:10,flexDirection:{xs:"column-reverse",sm:"row"},maxWidth:"lg",children:[e.jsxs(g,{p:4,bgcolor:"#312925fa",color:"#fff",children:[e.jsx(p,{variant:"h6",children:"Let's get in touch"}),e.jsx(p,{variant:"subtitle1",py:2,children:"We're open for any suggestion or just to have a chat"}),e.jsxs(u,{disableGutters:!0,children:[e.jsx(d,{children:e.jsx(m,{sx:{bgcolor:"primary.main"},variant:"rounded",children:e.jsx(je,{})})}),e.jsx(x,{secondary:e.jsx(h,{color:"#fff",underline:"none",children:"124/1 Kethardanga Road, Bankura Town, Bankura, WB, India 722101"})})]}),e.jsxs(u,{disableGutters:!0,children:[e.jsx(d,{children:e.jsx(m,{sx:{bgcolor:"primary.main"},variant:"rounded",children:e.jsx(fe,{})})}),e.jsx(x,{primary:"Phone:",secondary:e.jsx(h,{color:"#fff",href:"tel:917699446219",underline:"none",children:"+91 7699446219"})})]}),e.jsxs(u,{disableGutters:!0,children:[e.jsx(d,{children:e.jsx(m,{sx:{bgcolor:"primary.main"},variant:"rounded",children:e.jsx(pe,{})})}),e.jsx(x,{secondary:e.jsx(h,{color:"#fff",href:"mailto:examideahelp@gmail.com",underline:"none",children:"examideahelp@gmail.com"}),primary:"Email:"})]}),e.jsxs(u,{disableGutters:!0,children:[e.jsx(d,{children:e.jsx(m,{sx:{bgcolor:"primary.main"},variant:"rounded",children:e.jsx(be,{})})}),e.jsx(x,{primary:"Website:",secondary:e.jsx(h,{color:"#fff",underline:"none",children:"https://examidea.in"})})]})]}),e.jsxs(g,{component:"form",onSubmit:t,sx:{p:4},children:[e.jsx(p,{variant:"subtitle1",pb:5,textAlign:"center",children:"Any question or remark ? Just write us a message!"}),e.jsxs(i,{container:!0,spacing:2,children:[e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsx(c,{name:"name",required:!0,fullWidth:!0,label:"Name",autoFocus:!0})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsx(c,{fullWidth:!0,label:"Contact number",name:"contact",type:"tel"})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(c,{required:!0,fullWidth:!0,label:"Email Address",name:"email",type:"email"})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(c,{required:!0,fullWidth:!0,label:"Subject",name:"subject"})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(c,{required:!0,fullWidth:!0,name:"message",label:"Message",multiline:!0,rows:4})})]}),e.jsx(ne,{type:"submit",variant:"contained",sx:{mt:3,mb:2},children:"Send Message"})]})]})}),e.jsx(re,{open:s,anchorOrigin:{horizontal:"center",vertical:"bottom"},autoHideDuration:2e3,onClose:()=>{n(!1)},children:e.jsx(te,{severity:"success",elevation:6,variant:"filled",children:"MESSAGE SENT"})})]})]})}export{Ce as default};
