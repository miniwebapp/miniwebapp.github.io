import{g as q,d as G,e as A,f as H,s as U,T as f,h as T,i as j,r as b,k as O,l as _,m as J,n as K,j as e,o as Q,p as X,q as g,D as Y,R as Z,C as ee,B as v,P as se,t as d,v as m,A as x,w as h,x as i,y as c,a as ne}from"./index-a62d09a0.js";import{S as te}from"./Stack-bca3dbeb.js";import{S as re,A as oe}from"./Snackbar-12d6aaa7.js";function ae(s){return G("MuiLink",s)}const ie=q("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),le=ie,F={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},ce=s=>F[s]||s,ue=({theme:s,ownerState:n})=>{const t=ce(n.color),a=A(s,`palette.${t}`,!1)||n.color,o=A(s,`palette.${t}Channel`);return"vars"in s&&o?`rgba(${o} / 0.4)`:H(a,.4)},de=ue,me=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],xe=s=>{const{classes:n,component:t,focusVisible:a,underline:o}=s,r={root:["root",`underline${T(o)}`,t==="button"&&"button",a&&"focusVisible"]};return X(r,ae,n)},he=U(f,{name:"MuiLink",slot:"Root",overridesResolver:(s,n)=>{const{ownerState:t}=s;return[n.root,n[`underline${T(t.underline)}`],t.component==="button"&&n.button]}})(({theme:s,ownerState:n})=>j({},n.underline==="none"&&{textDecoration:"none"},n.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},n.underline==="always"&&j({textDecoration:"underline"},n.color!=="inherit"&&{textDecorationColor:de({theme:s,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),n.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${le.focusVisible}`]:{outline:"auto"}})),pe=b.forwardRef(function(n,t){const a=O({props:n,name:"MuiLink"}),{className:o,color:r="primary",component:u="a",onBlur:C,onFocus:k,TypographyClasses:B,underline:M="always",variant:L="inherit",sx:y}=a,P=_(a,me),{isFocusVisibleRef:S,onBlur:R,onFocus:z,ref:W}=J(),[$,D]=b.useState(!1),w=K(t,W),E=l=>{R(l),S.current===!1&&D(!1),C&&C(l)},N=l=>{z(l),S.current===!0&&D(!0),k&&k(l)},V=j({},a,{color:r,component:u,focusVisible:$,underline:M,variant:L}),I=xe(V);return e.jsx(he,j({color:r,className:Q(I.root,o),classes:B,component:u,onBlur:E,onFocus:N,ref:w,ownerState:V,variant:L,sx:[...Object.keys(F).includes(r)?[]:[{color:r}],...Array.isArray(y)?y:[y]]},P))}),p=pe,fe=g(e.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Mail"),je=g(e.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"Phone"),be=g(e.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"Place"),ge=g(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"}),"Public");function ke(){const{appData:s}=b.useContext(Y),[n,t]=b.useState(!1),a=o=>{o.preventDefault();let r=new FormData(o.currentTarget),u={name:r.get("name"),contact:r.get("contact"),email:r.get("email"),subject:r.get("subject"),message:r.get("message")};fetch("https://ap-south-1.aws.data.mongodb-api.com/app/application-0-sjyrk/endpoint/contactus",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)}),t(!0),o.target.reset()};return e.jsxs(e.Fragment,{children:[e.jsx(Z,{}),e.jsxs(ee,{component:"main",children:[e.jsx(v,{sx:{my:7,display:"flex",flexDirection:"column",alignItems:"center"},children:e.jsxs(te,{component:se,elevation:10,flexDirection:{xs:"column-reverse",sm:"row"},maxWidth:"lg",children:[e.jsxs(v,{p:4,bgcolor:"#312925fa",color:"#fff",children:[e.jsx(f,{variant:"h6",children:"Let's get in touch"}),e.jsx(f,{variant:"subtitle1",py:2,children:"We're open for any suggestion or just to have a chat"}),e.jsxs(d,{disableGutters:!0,children:[e.jsx(m,{children:e.jsx(x,{sx:{bgcolor:"primary.main"},variant:"rounded",children:e.jsx(be,{})})}),e.jsx(h,{secondary:e.jsx(p,{color:"#fff",underline:"none",children:"124/1 Kethardanga Road, Bankura Town, Bankura, WB, India 722101"})})]}),e.jsxs(d,{disableGutters:!0,children:[e.jsx(m,{children:e.jsx(x,{sx:{bgcolor:"primary.main"},variant:"rounded",children:e.jsx(je,{})})}),e.jsx(h,{primary:"Phone:",secondary:e.jsx(p,{color:"#fff",href:"tel:917699446219",underline:"none",children:"+91 7699446219"})})]}),e.jsxs(d,{disableGutters:!0,children:[e.jsx(m,{children:e.jsx(x,{sx:{bgcolor:"primary.main"},variant:"rounded",children:e.jsx(fe,{})})}),e.jsx(h,{secondary:e.jsx(p,{color:"#fff",href:"mailto:examideahelp@gmail.com",underline:"none",children:"examideahelp@gmail.com"}),primary:"Email:"})]}),e.jsxs(d,{disableGutters:!0,children:[e.jsx(m,{children:e.jsx(x,{sx:{bgcolor:"primary.main"},variant:"rounded",children:e.jsx(ge,{})})}),e.jsx(h,{primary:"Website:",secondary:e.jsx(p,{color:"#fff",underline:"none",children:"https://examidea.in"})})]})]}),e.jsxs(v,{component:"form",onSubmit:a,sx:{p:4},children:[e.jsx(f,{variant:"subtitle1",pb:5,textAlign:"center",children:"Any question or remark ? Just write us a message!"}),e.jsxs(i,{container:!0,spacing:2,children:[e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsx(c,{name:"name",required:!0,fullWidth:!0,label:"Name",autoFocus:!s.isLogin,defaultValue:s.isLogin?s.uName:void 0})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsx(c,{fullWidth:!0,label:"Contact number",name:"contact",type:"tel"})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(c,{required:!0,fullWidth:!0,label:"Email Address",name:"email",type:"email",defaultValue:s.isLogin?s.uEmail:void 0})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(c,{required:!0,fullWidth:!0,label:"Subject",name:"subject",autoFocus:!!s.isLogin})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(c,{required:!0,fullWidth:!0,name:"message",label:"Message",multiline:!0,rows:4})})]}),e.jsx(ne,{type:"submit",variant:"contained",sx:{mt:3,mb:2},children:"Send Message"})]})]})}),e.jsx(re,{open:n,anchorOrigin:{horizontal:"center",vertical:"bottom"},autoHideDuration:2e3,onClose:()=>{t(!1)},children:e.jsx(oe,{severity:"success",elevation:6,variant:"filled",children:"MESSAGE SENT"})})]})]})}export{ke as default};
