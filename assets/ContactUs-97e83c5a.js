import{_ as d,c as J,a as g,u as K,r as M,b as A,j as e,d as B,e as N,g as z,s as w,f as E,h as Q,i as V,k as X,B as v}from"./index-a576c8ed.js";import{u as Y}from"./appStore-3dc47ab8.js";import{L as Z,a as C,b as k,c as W}from"./LeftDrawer-7201de12.js";import{G as x,F as ee}from"./Footer-3c978455.js";import{N as te}from"./NavBarColorful-d4103944.js";import{s as se,S as re}from"./Stack-8bed2fb6.js";import{u as ne,a as oe,c as R,P as ae,B as ie}from"./Modal-f965e789.js";import{T as L}from"./Menu-dd7ae19e.js";import{A as S}from"./Avatar-92a98cab.js";import{T as b}from"./TextField-09fdae02.js";import{S as le,A as ce}from"./Snackbar-2987fee0.js";import"./index-27f5d3c3.js";import"./SwipeableDrawer-eed964f2.js";import"./List-d3547974.js";import"./Divider-083fe5ba.js";import"./ShoppingCartSharp-d4788f28.js";import"./InputBase-55cd521b.js";import"./useId-98600e7d.js";import"./react-is.production.min-a192e302.js";import"./Grow-c16df990.js";import"./useControlled-3a77dc77.js";import"./Input-ea5e1d67.js";const ue=["className","component","disableGutters","fixed","maxWidth","classes"],de=J(),me=se("div",{name:"MuiContainer",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:n}=s;return[t.root,t[`maxWidth${g(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),pe=s=>K({props:s,name:"MuiContainer",defaultTheme:de}),xe=(s,t)=>{const n=c=>z(t,c),{classes:a,fixed:i,disableGutters:l,maxWidth:r}=s,o={root:["root",r&&`maxWidth${g(String(r))}`,i&&"fixed",l&&"disableGutters"]};return N(o,n,a)};function he(s={}){const{createStyledComponent:t=me,useThemeProps:n=pe,componentName:a="MuiContainer"}=s,i=t(({theme:r,ownerState:o})=>d({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!o.disableGutters&&{paddingLeft:r.spacing(2),paddingRight:r.spacing(2),[r.breakpoints.up("sm")]:{paddingLeft:r.spacing(3),paddingRight:r.spacing(3)}}),({theme:r,ownerState:o})=>o.fixed&&Object.keys(r.breakpoints.values).reduce((c,m)=>{const p=m,u=r.breakpoints.values[p];return u!==0&&(c[r.breakpoints.up(p)]={maxWidth:`${u}${r.breakpoints.unit}`}),c},{}),({theme:r,ownerState:o})=>d({},o.maxWidth==="xs"&&{[r.breakpoints.up("xs")]:{maxWidth:Math.max(r.breakpoints.values.xs,444)}},o.maxWidth&&o.maxWidth!=="xs"&&{[r.breakpoints.up(o.maxWidth)]:{maxWidth:`${r.breakpoints.values[o.maxWidth]}${r.breakpoints.unit}`}}));return M.forwardRef(function(o,c){const m=n(o),{className:p,component:u="div",disableGutters:h=!1,fixed:$=!1,maxWidth:j="lg"}=m,P=A(m,ue),y=d({},m,{component:u,disableGutters:h,fixed:$,maxWidth:j}),D=xe(y,a);return e.jsx(i,d({as:u,ownerState:y,className:B(D.root,p),ref:c},P))})}const fe=he({createStyledComponent:w("div",{name:"MuiContainer",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:n}=s;return[t.root,t[`maxWidth${g(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:s=>E({props:s,name:"MuiContainer"})}),be=fe;function ge(s){return z("MuiLink",s)}const je=Q("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),ye=je,I={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},ve=s=>I[s]||s,Ce=({theme:s,ownerState:t})=>{const n=ve(t.color),a=V(s,`palette.${n}`,!1)||t.color,i=V(s,`palette.${n}Channel`);return"vars"in s&&i?`rgba(${i} / 0.4)`:X(a,.4)},ke=Ce,We=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Se=s=>{const{classes:t,component:n,focusVisible:a,underline:i}=s,l={root:["root",`underline${g(i)}`,n==="button"&&"button",a&&"focusVisible"]};return N(l,ge,t)},Te=w(L,{name:"MuiLink",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:n}=s;return[t.root,t[`underline${g(n.underline)}`],n.component==="button"&&t.button]}})(({theme:s,ownerState:t})=>d({},t.underline==="none"&&{textDecoration:"none"},t.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},t.underline==="always"&&d({textDecoration:"underline"},t.color!=="inherit"&&{textDecorationColor:ke({theme:s,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),t.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ye.focusVisible}`]:{outline:"auto"}})),Le=M.forwardRef(function(t,n){const a=E({props:t,name:"MuiLink"}),{className:i,color:l="primary",component:r="a",onBlur:o,onFocus:c,TypographyClasses:m,underline:p="always",variant:u="inherit",sx:h}=a,$=A(a,We),{isFocusVisibleRef:j,onBlur:P,onFocus:y,ref:D}=ne(),[U,F]=M.useState(!1),q=oe(n,D),H=f=>{P(f),j.current===!1&&F(!1),o&&o(f)},O=f=>{y(f),j.current===!0&&F(!0),c&&c(f)},G=d({},a,{color:l,component:r,focusVisible:U,underline:p,variant:u}),_=Se(G);return e.jsx(Te,d({color:l,className:B(_.root,i),classes:m,component:r,onBlur:H,onFocus:O,ref:q,ownerState:G,variant:u,sx:[...Object.keys(I).includes(l)?[]:[{color:l}],...Array.isArray(h)?h:[h]]},$))}),T=Le,Me=R(e.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Mail"),Re=R(e.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"Phone"),$e=R(e.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"Place"),Pe=R(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"}),"Public");function et(){const{login:s,uEmail:t,uName:n}=Y(),[a,i]=M.useState(!1),l=r=>{r.preventDefault();let o=new FormData(r.currentTarget),c={name:o.get("name"),contact:o.get("contact"),email:o.get("email"),subject:o.get("subject"),message:o.get("message")};fetch("https://ap-south-1.aws.data.mongodb-api.com/app/application-0-sjyrk/endpoint/contactus",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}),i(!0),r.target.reset()};return e.jsxs(e.Fragment,{children:[e.jsx(Z,{}),e.jsxs(v,{flexGrow:1,children:[e.jsx(te,{}),e.jsxs(be,{component:"main",children:[e.jsx(v,{sx:{my:7,display:"flex",flexDirection:"column",alignItems:"center"},children:e.jsxs(re,{component:ae,elevation:10,flexDirection:{xs:"column-reverse",sm:"row"},maxWidth:"lg",children:[e.jsxs(v,{p:4,bgcolor:"#312925fa",color:"#fff",children:[e.jsx(L,{variant:"h6",children:"Let's get in touch"}),e.jsx(L,{variant:"subtitle1",py:2,children:"We're open for any suggestion or just to have a chat"}),e.jsxs(C,{disableGutters:!0,children:[e.jsx(k,{children:e.jsx(S,{sx:{bgcolor:"primary.main"},variant:"rounded",children:e.jsx($e,{})})}),e.jsx(W,{secondary:e.jsx(T,{color:"#fff",underline:"none",children:"124/1 Kethardanga Road, Bankura Town, Bankura, WB, India 722101"})})]}),e.jsxs(C,{disableGutters:!0,children:[e.jsx(k,{children:e.jsx(S,{sx:{bgcolor:"primary.main"},variant:"rounded",children:e.jsx(Re,{})})}),e.jsx(W,{primary:"Phone:",secondary:e.jsx(T,{color:"#fff",href:"tel:917699446219",underline:"none",children:"+91 7699446219"})})]}),e.jsxs(C,{disableGutters:!0,children:[e.jsx(k,{children:e.jsx(S,{sx:{bgcolor:"primary.main"},variant:"rounded",children:e.jsx(Me,{})})}),e.jsx(W,{secondary:e.jsx(T,{color:"#fff",href:"mailto:examideahelp@gmail.com",underline:"none",children:"examideahelp@gmail.com"}),primary:"Email:"})]}),e.jsxs(C,{disableGutters:!0,children:[e.jsx(k,{children:e.jsx(S,{sx:{bgcolor:"primary.main"},variant:"rounded",children:e.jsx(Pe,{})})}),e.jsx(W,{primary:"Website:",secondary:e.jsx(T,{color:"#fff",underline:"none",children:"https://examidea.in"})})]})]}),e.jsxs(v,{component:"form",onSubmit:l,sx:{p:4},children:[e.jsx(L,{variant:"subtitle1",pb:5,textAlign:"center",children:"Any question or remark ? Just write us a message!"}),e.jsxs(x,{container:!0,spacing:2,children:[e.jsx(x,{item:!0,xs:12,sm:6,children:e.jsx(b,{name:"name",required:!0,fullWidth:!0,label:"Name",autoFocus:!s,defaultValue:s?n:void 0})}),e.jsx(x,{item:!0,xs:12,sm:6,children:e.jsx(b,{fullWidth:!0,label:"Contact number",name:"contact",type:"tel"})}),e.jsx(x,{item:!0,xs:12,children:e.jsx(b,{required:!0,fullWidth:!0,label:"Email Address",name:"email",type:"email",defaultValue:s?t:void 0})}),e.jsx(x,{item:!0,xs:12,children:e.jsx(b,{required:!0,fullWidth:!0,label:"Subject",name:"subject",autoFocus:!!s})}),e.jsx(x,{item:!0,xs:12,children:e.jsx(b,{required:!0,fullWidth:!0,name:"message",label:"Message",multiline:!0,rows:4})})]}),e.jsx(ie,{type:"submit",variant:"contained",sx:{mt:3,mb:2},children:"Send Message"})]})]})}),e.jsx(le,{open:a,anchorOrigin:{horizontal:"center",vertical:"bottom"},autoHideDuration:2e3,onClose:()=>{i(!1)},children:e.jsx(ce,{severity:"success",elevation:6,variant:"filled",children:"MESSAGE SENT"})})]}),e.jsx(ee,{})]})]})}export{et as default};
