import{j as R,P as Fe,r as n,b as pe,f as Y,_ as s,Q as Ie,g as Be,a as Ee,s as fe,u as Pe,c as We,e as se,h as me,O as He}from"./index.b1762e85.js";import{u as U,c as he}from"./Button.3f7853ac.js";import{o as ue,d as Me,i as de}from"./appendOwnerState.be59ae25.js";function Te(e){return e==null||Object.keys(e).length===0}function Le(e){const{styles:t,defaultTheme:o={}}=e;return R(Fe,{styles:typeof t=="function"?r=>t(Te(r)?o:r):t})}const Ne=["onChange","maxRows","minRows","style","value"];function D(e,t){return parseInt(e[t],10)||0}const Oe={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}},$e=n.exports.forwardRef(function(t,o){const{onChange:i,maxRows:r,minRows:u=1,style:z,value:g}=t,A=pe(t,Ne),{current:w}=n.exports.useRef(g!=null),x=n.exports.useRef(null),C=U(o,x),S=n.exports.useRef(null),m=n.exports.useRef(0),[k,G]=n.exports.useState({}),F=n.exports.useCallback(()=>{const p=x.current,d=ue(p).getComputedStyle(p);if(d.width==="0px")return;const h=S.current;h.style.width=d.width,h.value=p.value||t.placeholder||"x",h.value.slice(-1)===`
`&&(h.value+=" ");const K=d["box-sizing"],v=D(d,"padding-bottom")+D(d,"padding-top"),L=D(d,"border-bottom-width")+D(d,"border-top-width"),P=h.scrollHeight;h.value="x";const I=h.scrollHeight;let b=P;u&&(b=Math.max(Number(u)*I,b)),r&&(b=Math.min(Number(r)*I,b)),b=Math.max(b,I);const W=b+(K==="border-box"?v+L:0),N=Math.abs(b-P)<=1;G(H=>m.current<20&&(W>0&&Math.abs((H.outerHeightStyle||0)-W)>1||H.overflow!==N)?(m.current+=1,{overflow:N,outerHeightStyle:W}):H)},[r,u,t.placeholder]);n.exports.useEffect(()=>{const p=Me(()=>{m.current=0,F()}),E=ue(x.current);E.addEventListener("resize",p);let d;return typeof ResizeObserver!="undefined"&&(d=new ResizeObserver(p),d.observe(x.current)),()=>{p.clear(),E.removeEventListener("resize",p),d&&d.disconnect()}},[F]),he(()=>{F()}),n.exports.useEffect(()=>{m.current=0},[g]);const c=p=>{m.current=0,w||F(),i&&i(p)};return Y(n.exports.Fragment,{children:[R("textarea",s({value:g,onChange:c,ref:C,rows:u,style:s({height:k.outerHeightStyle,overflow:k.overflow?"hidden":null},z)},A)),R("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:S,tabIndex:-1,style:s({},Oe.shadow,z,{padding:0})})]})});var Ve=$e;function De({props:e,states:t,muiFormControl:o}){return t.reduce((i,r)=>(i[r]=e[r],o&&typeof e[r]=="undefined"&&(i[r]=o[r]),i),{})}const Ue=n.exports.createContext();var be=Ue;function Ge(){return n.exports.useContext(be)}function Ke(e){return R(Le,s({},e,{defaultTheme:Ie}))}function ce(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function _e(e,t=!1){return e&&(ce(e.value)&&e.value!==""||t&&ce(e.defaultValue)&&e.defaultValue!=="")}function it(e){return e.startAdornment}function qe(e){return Be("MuiInputBase",e)}const je=Ee("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);var ee=je;const Qe=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","startAdornment","type","value"],Ze=(e,t)=>{const{ownerState:o}=e;return[t.root,o.formControl&&t.formControl,o.startAdornment&&t.adornedStart,o.endAdornment&&t.adornedEnd,o.error&&t.error,o.size==="small"&&t.sizeSmall,o.multiline&&t.multiline,o.color&&t[`color${me(o.color)}`],o.fullWidth&&t.fullWidth,o.hiddenLabel&&t.hiddenLabel]},Je=(e,t)=>{const{ownerState:o}=e;return[t.input,o.size==="small"&&t.inputSizeSmall,o.multiline&&t.inputMultiline,o.type==="search"&&t.inputTypeSearch,o.startAdornment&&t.inputAdornedStart,o.endAdornment&&t.inputAdornedEnd,o.hiddenLabel&&t.inputHiddenLabel]},Xe=e=>{const{classes:t,color:o,disabled:i,error:r,endAdornment:u,focused:z,formControl:g,fullWidth:A,hiddenLabel:w,multiline:x,size:C,startAdornment:S,type:m}=e,k={root:["root",`color${me(o)}`,i&&"disabled",r&&"error",A&&"fullWidth",z&&"focused",g&&"formControl",C==="small"&&"sizeSmall",x&&"multiline",S&&"adornedStart",u&&"adornedEnd",w&&"hiddenLabel"],input:["input",i&&"disabled",m==="search"&&"inputTypeSearch",x&&"inputMultiline",C==="small"&&"inputSizeSmall",w&&"inputHiddenLabel",S&&"inputAdornedStart",u&&"inputAdornedEnd"]};return We(k,qe,t)},Ye=fe("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Ze})(({theme:e,ownerState:t})=>s({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${ee.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},t.multiline&&s({padding:"4px 0 5px"},t.size==="small"&&{paddingTop:1}),t.fullWidth&&{width:"100%"})),et=fe("input",{name:"MuiInputBase",slot:"Input",overridesResolver:Je})(({theme:e,ownerState:t})=>{const o=e.palette.mode==="light",i=s({color:"currentColor"},e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:o?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),r={opacity:"0 !important"},u=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:o?.42:.5};return s({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":i,"&::-moz-placeholder":i,"&:-ms-input-placeholder":i,"&::-ms-input-placeholder":i,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${ee.formControl} &`]:{"&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&:-ms-input-placeholder":r,"&::-ms-input-placeholder":r,"&:focus::-webkit-input-placeholder":u,"&:focus::-moz-placeholder":u,"&:focus:-ms-input-placeholder":u,"&:focus::-ms-input-placeholder":u},[`&.${ee.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},t.size==="small"&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},t.type==="search"&&{MozAppearance:"textfield"})}),tt=R(Ke,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),ot=n.exports.forwardRef(function(t,o){const i=Pe({props:t,name:"MuiInputBase"}),{"aria-describedby":r,autoComplete:u,autoFocus:z,className:g,components:A={},componentsProps:w={},defaultValue:x,disabled:C,disableInjectingGlobalStyles:S,endAdornment:m,fullWidth:k=!1,id:G,inputComponent:F="input",inputProps:c={},inputRef:p,maxRows:E,minRows:d,multiline:h=!1,name:K,onBlur:v,onChange:L,onClick:P,onFocus:I,onKeyDown:b,onKeyUp:W,placeholder:N,readOnly:H,renderSuffix:te,rows:O,startAdornment:M,type:oe="text",value:xe}=i,ye=pe(i,Qe),$=c.value!=null?c.value:xe,{current:_}=n.exports.useRef($!=null),B=n.exports.useRef(),ge=n.exports.useCallback(a=>{},[]),we=U(c.ref,ge),Ce=U(p,we),Se=U(B,Ce),[q,j]=n.exports.useState(!1),l=Ge(),f=De({props:i,muiFormControl:l,states:["color","disabled","error","hiddenLabel","size","required","filled"]});f.focused=l?l.focused:q,n.exports.useEffect(()=>{!l&&C&&q&&(j(!1),v&&v())},[l,C,q,v]);const Q=l&&l.onFilled,Z=l&&l.onEmpty,T=n.exports.useCallback(a=>{_e(a)?Q&&Q():Z&&Z()},[Q,Z]);he(()=>{_&&T({value:$})},[$,T,_]);const ve=a=>{if(f.disabled){a.stopPropagation();return}I&&I(a),c.onFocus&&c.onFocus(a),l&&l.onFocus?l.onFocus(a):j(!0)},Re=a=>{v&&v(a),c.onBlur&&c.onBlur(a),l&&l.onBlur?l.onBlur(a):j(!1)},ze=(a,...ie)=>{if(!_){const le=a.target||B.current;if(le==null)throw new Error(He(1));T({value:le.value})}c.onChange&&c.onChange(a,...ie),L&&L(a,...ie)};n.exports.useEffect(()=>{T(B.current)},[]);const Ae=a=>{B.current&&a.currentTarget===a.target&&B.current.focus(),P&&P(a)};let J=F,y=c;h&&J==="input"&&(O?y=s({type:void 0,minRows:O,maxRows:O},y):y=s({type:void 0,maxRows:E,minRows:d},y),J=Ve);const ke=a=>{T(a.animationName==="mui-auto-fill-cancel"?B.current:{value:"x"})};n.exports.useEffect(()=>{l&&l.setAdornedStart(Boolean(M))},[l,M]);const V=s({},i,{color:f.color||"primary",disabled:f.disabled,endAdornment:m,error:f.error,focused:f.focused,formControl:l,fullWidth:k,hiddenLabel:f.hiddenLabel,multiline:h,size:f.size,startAdornment:M,type:oe}),ne=Xe(V),re=A.Root||Ye,X=w.root||{},ae=A.Input||et;return y=s({},y,w.input),Y(n.exports.Fragment,{children:[!S&&tt,Y(re,s({},X,!de(re)&&{ownerState:s({},V,X.ownerState)},{ref:o,onClick:Ae},ye,{className:se(ne.root,X.className,g),children:[M,R(be.Provider,{value:null,children:R(ae,s({ownerState:V,"aria-invalid":f.error,"aria-describedby":r,autoComplete:u,autoFocus:z,defaultValue:x,disabled:f.disabled,id:G,onAnimationStart:ke,name:K,placeholder:N,readOnly:H,required:f.required,rows:O,value:$,onKeyDown:b,onKeyUp:W,type:oe},y,!de(ae)&&{as:J,ownerState:s({},V,y.ownerState)},{ref:Se,className:se(ne.input,y.className),onBlur:Re,onChange:ze,onFocus:ve}))}),m,te?te(s({},f,{startAdornment:M})):null]}))]})});var lt=ot;export{be as F,Ye as I,_e as a,ee as b,et as c,Je as d,lt as e,De as f,it as i,Ze as r,Ge as u};
