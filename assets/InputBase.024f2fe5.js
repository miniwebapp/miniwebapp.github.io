import{j as R,P as Ie,r,b as fe,f as ee,_ as d,G as Be,Q as Ee,a as Pe,g as We,s as me,u as He,c as se,h as he,e as Me,O as Te}from"./index.fddbb19f.js";import{u as V,c as be}from"./Button.2f121d12.js";import{o as ue,d as Le,i as de}from"./useSlotProps.3b16c874.js";function Ne(e){return e==null||Object.keys(e).length===0}function Oe(e){const{styles:t,defaultTheme:n={}}=e;return R(Ie,{styles:typeof t=="function"?i=>t(Ne(i)?n:i):t})}const $e=["onChange","maxRows","minRows","style","value"];function U(e,t){return parseInt(e[t],10)||0}const De={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function ce(e){return e==null||Object.keys(e).length===0}const Ue=r.exports.forwardRef(function(t,n){const{onChange:s,maxRows:i,minRows:c=1,style:z,value:w}=t,A=fe(t,$e),{current:S}=r.exports.useRef(w!=null),b=r.exports.useRef(null),C=V(n,b),v=r.exports.useRef(null),y=r.exports.useRef(0),[k,H]=r.exports.useState({}),B=r.exports.useCallback(()=>{const o=b.current,a=ue(o).getComputedStyle(o);if(a.width==="0px")return{};const f=v.current;f.style.width=a.width,f.value=o.value||t.placeholder||"x",f.value.slice(-1)===`
`&&(f.value+=" ");const T=a["box-sizing"],L=U(a,"padding-bottom")+U(a,"padding-top"),_=U(a,"border-bottom-width")+U(a,"border-top-width"),N=f.scrollHeight;f.value="x";const E=f.scrollHeight;let x=N;c&&(x=Math.max(Number(c)*E,x)),i&&(x=Math.min(Number(i)*E,x)),x=Math.max(x,E);const O=x+(T==="border-box"?L+_:0),F=Math.abs(x-N)<=1;return{outerHeightStyle:O,overflow:F}},[i,c,t.placeholder]),p=(o,h)=>{const{outerHeightStyle:a,overflow:f}=h;return y.current<20&&(a>0&&Math.abs((o.outerHeightStyle||0)-a)>1||o.overflow!==f)?(y.current+=1,{overflow:f,outerHeightStyle:a}):o},M=r.exports.useCallback(()=>{const o=B();ce(o)||H(h=>p(h,o))},[B]),G=()=>{const o=B();ce(o)||Be.exports.flushSync(()=>{H(h=>p(h,o))})};r.exports.useEffect(()=>{const o=Le(()=>{y.current=0,b.current&&G()}),h=ue(b.current);h.addEventListener("resize",o);let a;return typeof ResizeObserver!="undefined"&&(a=new ResizeObserver(o),a.observe(b.current)),()=>{o.clear(),h.removeEventListener("resize",o),a&&a.disconnect()}}),be(()=>{M()}),r.exports.useEffect(()=>{y.current=0},[w]);const K=o=>{y.current=0,S||M(),s&&s(o)};return ee(r.exports.Fragment,{children:[R("textarea",d({value:w,onChange:K,ref:C,rows:c,style:d({height:k.outerHeightStyle,overflow:k.overflow?"hidden":null},z)},A)),R("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:v,tabIndex:-1,style:d({},De.shadow,z,{padding:0})})]})});var Ve=Ue;function Ge({props:e,states:t,muiFormControl:n}){return t.reduce((s,i)=>(s[i]=e[i],n&&typeof e[i]=="undefined"&&(s[i]=n[i]),s),{})}const Ke=r.exports.createContext();var ye=Ke;function _e(){return r.exports.useContext(ye)}function qe(e){return R(Oe,d({},e,{defaultTheme:Ee}))}function pe(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function Qe(e,t=!1){return e&&(pe(e.value)&&e.value!==""||t&&pe(e.defaultValue)&&e.defaultValue!=="")}function st(e){return e.startAdornment}function Ze(e){return We("MuiInputBase",e)}const je=Pe("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);var te=je;const Je=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","startAdornment","type","value"],Xe=(e,t)=>{const{ownerState:n}=e;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,n.size==="small"&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t[`color${he(n.color)}`],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},Ye=(e,t)=>{const{ownerState:n}=e;return[t.input,n.size==="small"&&t.inputSizeSmall,n.multiline&&t.inputMultiline,n.type==="search"&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},et=e=>{const{classes:t,color:n,disabled:s,error:i,endAdornment:c,focused:z,formControl:w,fullWidth:A,hiddenLabel:S,multiline:b,size:C,startAdornment:v,type:y}=e,k={root:["root",`color${he(n)}`,s&&"disabled",i&&"error",A&&"fullWidth",z&&"focused",w&&"formControl",C==="small"&&"sizeSmall",b&&"multiline",v&&"adornedStart",c&&"adornedEnd",S&&"hiddenLabel"],input:["input",s&&"disabled",y==="search"&&"inputTypeSearch",b&&"inputMultiline",C==="small"&&"inputSizeSmall",S&&"inputHiddenLabel",v&&"inputAdornedStart",c&&"inputAdornedEnd"]};return Me(k,Ze,t)},tt=me("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Xe})(({theme:e,ownerState:t})=>d({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${te.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},t.multiline&&d({padding:"4px 0 5px"},t.size==="small"&&{paddingTop:1}),t.fullWidth&&{width:"100%"})),nt=me("input",{name:"MuiInputBase",slot:"Input",overridesResolver:Ye})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light",s=d({color:"currentColor"},e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),i={opacity:"0 !important"},c=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5};return d({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":s,"&::-moz-placeholder":s,"&:-ms-input-placeholder":s,"&::-ms-input-placeholder":s,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${te.formControl} &`]:{"&::-webkit-input-placeholder":i,"&::-moz-placeholder":i,"&:-ms-input-placeholder":i,"&::-ms-input-placeholder":i,"&:focus::-webkit-input-placeholder":c,"&:focus::-moz-placeholder":c,"&:focus:-ms-input-placeholder":c,"&:focus::-ms-input-placeholder":c},[`&.${te.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},t.size==="small"&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},t.type==="search"&&{MozAppearance:"textfield"})}),ot=R(qe,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),rt=r.exports.forwardRef(function(t,n){const s=He({props:t,name:"MuiInputBase"}),{"aria-describedby":i,autoComplete:c,autoFocus:z,className:w,components:A={},componentsProps:S={},defaultValue:b,disabled:C,disableInjectingGlobalStyles:v,endAdornment:y,fullWidth:k=!1,id:H,inputComponent:B="input",inputProps:p={},inputRef:M,maxRows:G,minRows:K,multiline:o=!1,name:h,onBlur:a,onChange:f,onClick:T,onFocus:L,onKeyDown:_,onKeyUp:N,placeholder:E,readOnly:x,renderSuffix:O,rows:F,startAdornment:P,type:ne="text",value:xe}=s,ge=fe(s,Je),$=p.value!=null?p.value:xe,{current:q}=r.exports.useRef($!=null),I=r.exports.useRef(),we=r.exports.useCallback(l=>{},[]),Se=V(p.ref,we),Ce=V(M,Se),ve=V(I,Ce),[Q,Z]=r.exports.useState(!1),u=_e(),m=Ge({props:s,muiFormControl:u,states:["color","disabled","error","hiddenLabel","size","required","filled"]});m.focused=u?u.focused:Q,r.exports.useEffect(()=>{!u&&C&&Q&&(Z(!1),a&&a())},[u,C,Q,a]);const j=u&&u.onFilled,J=u&&u.onEmpty,W=r.exports.useCallback(l=>{Qe(l)?j&&j():J&&J()},[j,J]);be(()=>{q&&W({value:$})},[$,W,q]);const Re=l=>{if(m.disabled){l.stopPropagation();return}L&&L(l),p.onFocus&&p.onFocus(l),u&&u.onFocus?u.onFocus(l):Z(!0)},ze=l=>{a&&a(l),p.onBlur&&p.onBlur(l),u&&u.onBlur?u.onBlur(l):Z(!1)},Ae=(l,...ie)=>{if(!q){const le=l.target||I.current;if(le==null)throw new Error(Te(1));W({value:le.value})}p.onChange&&p.onChange(l,...ie),f&&f(l,...ie)};r.exports.useEffect(()=>{W(I.current)},[]);const ke=l=>{I.current&&l.currentTarget===l.target&&I.current.focus(),T&&T(l)};let X=B,g=p;o&&X==="input"&&(F?g=d({type:void 0,minRows:F,maxRows:F},g):g=d({type:void 0,maxRows:G,minRows:K},g),X=Ve);const Fe=l=>{W(l.animationName==="mui-auto-fill-cancel"?I.current:{value:"x"})};r.exports.useEffect(()=>{u&&u.setAdornedStart(Boolean(P))},[u,P]);const D=d({},s,{color:m.color||"primary",disabled:m.disabled,endAdornment:y,error:m.error,focused:m.focused,formControl:u,fullWidth:k,hiddenLabel:m.hiddenLabel,multiline:o,size:m.size,startAdornment:P,type:ne}),oe=et(D),re=A.Root||tt,Y=S.root||{},ae=A.Input||nt;return g=d({},g,S.input),ee(r.exports.Fragment,{children:[!v&&ot,ee(re,d({},Y,!de(re)&&{ownerState:d({},D,Y.ownerState)},{ref:n,onClick:ke},ge,{className:se(oe.root,Y.className,w),children:[P,R(ye.Provider,{value:null,children:R(ae,d({ownerState:D,"aria-invalid":m.error,"aria-describedby":i,autoComplete:c,autoFocus:z,defaultValue:b,disabled:m.disabled,id:H,onAnimationStart:Fe,name:h,placeholder:E,readOnly:x,required:m.required,rows:F,value:$,onKeyDown:_,onKeyUp:N,type:ne},g,!de(ae)&&{as:X,ownerState:d({},D,g.ownerState)},{ref:ve,className:se(oe.input,g.className),onBlur:ze,onChange:Ae,onFocus:Re}))}),y,O?O(d({},m,{startAdornment:P})):null]}))]})});var ut=rt;export{ye as F,tt as I,Qe as a,te as b,nt as c,Ye as d,ut as e,Ge as f,st as i,Xe as r,_e as u};
