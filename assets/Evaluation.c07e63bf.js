import{a as V,g as j,s as A,i as L,_ as u,p as b,r as f,u as N,b as D,j as r,c as H,e as F,l as G,f as n}from"./index.9f0ba31e.js";import{D as W,P as E}from"./entry.2793dad3.js";import{B as U,c as _,u as z,a as I,b as Q,T as v}from"./Button.d6f501c7.js";import{S as h}from"./Stack.66479514.js";import{S as q}from"./Select.475bafae.js";import{d as R,l as k,L as M}from"./listItemTextClasses.529a9ad1.js";import{d as O}from"./dividerClasses.81f4eacb.js";import"./_commonjsHelpers.294d03c4.js";import"./assertThisInitialized.20611e2e.js";import"./Grow.ec5a9e53.js";import"./utils.499d2a7d.js";import"./ownerDocument.d64bc4d4.js";import"./useSlotProps.512c8a0f.js";import"./InputBase.25483119.js";import"./useControlled.5e823adb.js";function Y(e){return j("MuiMenuItem",e)}const J=V("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var p=J;const K=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],X=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.divider&&t.divider,!s.disableGutters&&t.gutters]},Z=e=>{const{disabled:t,dense:s,divider:a,disableGutters:i,selected:l,classes:d}=e,c=F({root:["root",s&&"dense",t&&"disabled",!i&&"gutters",a&&"divider",l&&"selected"]},Y,d);return u({},d,c)},ee=A(U,{shouldForwardProp:e=>L(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:X})(({theme:e,ownerState:t})=>u({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${p.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:b(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${p.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:b(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${p.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:b(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:b(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${p.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${p.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${O.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${O.inset}`]:{marginLeft:52},[`& .${k.root}`]:{marginTop:0,marginBottom:0},[`& .${k.inset}`]:{paddingLeft:36},[`& .${R.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&u({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${R.root} svg`]:{fontSize:"1.25rem"}}))),te=f.exports.forwardRef(function(t,s){const a=N({props:t,name:"MuiMenuItem"}),{autoFocus:i=!1,component:l="li",dense:d=!1,divider:m=!1,disableGutters:c=!1,focusVisibleClassName:o,role:w="menuitem",tabIndex:x}=a,B=D(a,K),T=f.exports.useContext(M),C={dense:d||T.dense||!1,disableGutters:c},g=f.exports.useRef(null);_(()=>{i&&g.current&&g.current.focus()},[i]);const S=u({},a,{dense:C.dense,divider:m,disableGutters:c}),y=Z(a),P=z(g,s);let $;return a.disabled||($=x!==void 0?x:-1),r(M.Provider,{value:C,children:r(ee,u({ref:P,role:w,tabIndex:$,component:l,focusVisibleClassName:H(y.focusVisible,o)},B,{ownerState:S,classes:y}))})});var ae=te;function xe(e){const t=e.i,s=e.e,[a,i]=f.exports.useState(1),l=o=>{i(o.target.value)},d=()=>{switch(t.uRes[a-1][1]){case"nvd":return"Not Visited";case"nad":return"Not Answered";case"asd":return"Answered";case"mfr":return"Marked for Review";case"amr":return"Answered & Marked for Review (Will be considered for evalution)"}},m=G();return n(I,{maxWidth:"sm",p:2,mx:"auto",children:[r(Q,{variant:"contained",fullWidth:!0,sx:{mb:3},onClick:()=>{s({...t,page:"home"}),m("/home")},children:"Back To Home"}),n(h,{direction:"row",justifyContent:"space-between",alignItems:"center",mb:2,p:1,sx:{border:"1px solid blue",borderRadius:1},children:[n(v,{variant:"h6",children:[" Question number ",a,"\xA0/\xA0",t.tAns.length]}),r(q,{value:a,onChange:l,size:"small",children:t.uRes.map(o=>r(ae,{sx:{backgroundColor:o[4]},value:o[0],children:o[0]},o[0]))})]}),n(h,{justifyContent:"space-between",alignItems:"center",mb:2,p:1,sx:{border:"1px solid blue",backgroundColor:t.uRes[a-1][4],borderRadius:1},children:[n(v,{variant:"h6",children:[" Correct answer is ",t.uRes[a-1][3]]}),n(v,{variant:"h6",children:[" You have choosen ",t.uRes[a-1][2]]}),n(v,{variant:"h6",children:[" Question status is ",d()]})]}),r(I,{p:1,children:r(W,{file:`./courses/${t.cId}/${t.tId}English.pdf`,children:r(E,{pageNumber:a,renderTextLayer:!1})})})]})}export{xe as default};
