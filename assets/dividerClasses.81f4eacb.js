import{z as U,Q as A,g as S,a as y,s as R,_ as d,p as w,r as $,u as M,b as P,j as _,c as N,e as T,h as x,f as q}from"./index.9f0ba31e.js";function H(){return U(A)}function B(e){return S("MuiPaper",e)}y("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const V=["className","component","elevation","square","variant"],z=e=>{let o;return e<1?o=5.11916*e**2:o=4.5*Math.log(e+1)+2,(o/100).toFixed(2)},j=e=>{const{square:o,elevation:t,variant:a,classes:i}=e,n={root:["root",a,!o&&"rounded",a==="elevation"&&`elevation${t}`]};return T(n,B,i)},D=R("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],!t.square&&o.rounded,t.variant==="elevation"&&o[`elevation${t.elevation}`]]}})(({theme:e,ownerState:o})=>{var t;return d({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!o.square&&{borderRadius:e.shape.borderRadius},o.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},o.variant==="elevation"&&d({boxShadow:(e.vars||e).shadows[o.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${w("#fff",z(o.elevation))}, ${w("#fff",z(o.elevation))})`},e.vars&&{backgroundImage:(t=e.vars.overlays)==null?void 0:t[o.elevation]}))}),L=$.exports.forwardRef(function(o,t){const a=M({props:o,name:"MuiPaper"}),{className:i,component:n="div",elevation:s=1,square:c=!1,variant:v="elevation"}=a,u=P(a,V),r=d({},a,{component:n,elevation:s,square:c,variant:v}),l=j(r);return _(D,d({as:n,ownerState:r,className:N(l.root,i),ref:t},u))});var J=L;function F(e){return S("MuiSvgIcon",e)}y("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const W=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],E=e=>{const{color:o,fontSize:t,classes:a}=e,i={root:["root",o!=="inherit"&&`color${x(o)}`,`fontSize${x(t)}`]};return T(i,F,a)},O=R("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.color!=="inherit"&&o[`color${x(t.color)}`],o[`fontSize${x(t.fontSize)}`]]}})(({theme:e,ownerState:o})=>{var t,a,i,n,s,c,v,u,r,l,p,m,f,g,h,b,C;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(t=e.transitions)==null||(a=t.create)==null?void 0:a.call(t,"fill",{duration:(i=e.transitions)==null||(n=i.duration)==null?void 0:n.shorter}),fontSize:{inherit:"inherit",small:((s=e.typography)==null||(c=s.pxToRem)==null?void 0:c.call(s,20))||"1.25rem",medium:((v=e.typography)==null||(u=v.pxToRem)==null?void 0:u.call(v,24))||"1.5rem",large:((r=e.typography)==null||(l=r.pxToRem)==null?void 0:l.call(r,35))||"2.1875"}[o.fontSize],color:(p=(m=(e.vars||e).palette)==null||(f=m[o.color])==null?void 0:f.main)!=null?p:{action:(g=(e.vars||e).palette)==null||(h=g.action)==null?void 0:h.active,disabled:(b=(e.vars||e).palette)==null||(C=b.action)==null?void 0:C.disabled,inherit:void 0}[o.color]}}),k=$.exports.forwardRef(function(o,t){const a=M({props:o,name:"MuiSvgIcon"}),{children:i,className:n,color:s="inherit",component:c="svg",fontSize:v="medium",htmlColor:u,inheritViewBox:r=!1,titleAccess:l,viewBox:p="0 0 24 24"}=a,m=P(a,W),f=d({},a,{color:s,component:c,fontSize:v,instanceFontSize:o.fontSize,inheritViewBox:r,viewBox:p}),g={};r||(g.viewBox=p);const h=E(f);return q(O,d({as:c,className:N(h.root,n),ownerState:f,focusable:"false",color:u,"aria-hidden":l?void 0:!0,role:l?"img":void 0,ref:t},g,m,{children:[i,l?_("title",{children:l}):null]}))});k.muiName="SvgIcon";var I=k;function K(e,o){const t=(a,i)=>_(I,d({"data-testid":`${o}Icon`,ref:i},a,{children:e}));return t.muiName=I.muiName,$.exports.memo($.exports.forwardRef(t))}function X(e){return S("MuiDivider",e)}const Q=y("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var Y=Q;export{J as P,K as c,Y as d,X as g,H as u};
