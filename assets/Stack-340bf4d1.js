import{J as W,b as V,K as I,_ as a,c as G,M as J,O as K,u as Q,P as D,Q as A,S as q,E as z,U as H,r as M,V as X,j as Y,d as Z,e as ee,g as te,W as B,s as se,f as oe}from"./index-887aa4c0.js";const re=["ownerState"],ne=["variants"],ie=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function ce(e){return Object.keys(e).length===0}function le(e){return typeof e=="string"&&e.charCodeAt(0)>96}function E(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const ae=G(),ue=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function F({defaultTheme:e,theme:o,themeId:t}){return ce(o)?e:o[t]||o}function pe(e){return e?(o,t)=>t[e]:null}function O(e,o){let{ownerState:t}=o,n=V(o,re);const c=typeof e=="function"?e(a({ownerState:t},n)):e;if(Array.isArray(c))return c.flatMap(i=>O(i,a({ownerState:t},n)));if(c&&typeof c=="object"&&Array.isArray(c.variants)){const{variants:i=[]}=c;let p=V(c,ne);return i.forEach(s=>{let r=!0;typeof s.props=="function"?r=s.props(a({ownerState:t},n,t)):Object.keys(s.props).forEach(d=>{(t==null?void 0:t[d])!==s.props[d]&&n[d]!==s.props[d]&&(r=!1)}),r&&(Array.isArray(p)||(p=[p]),p.push(typeof s.style=="function"?s.style(a({ownerState:t},n,t)):s.style))}),p}return c}function de(e={}){const{themeId:o,defaultTheme:t=ae,rootShouldForwardProp:n=E,slotShouldForwardProp:c=E}=e,i=u=>J(a({},u,{theme:F(a({},u,{defaultTheme:t,themeId:o}))}));return i.__mui_systemSx=!0,(u,p={})=>{W(u,l=>l.filter(m=>!(m!=null&&m.__mui_systemSx)));const{name:s,slot:r,skipVariantsResolver:d,skipSx:v,overridesResolver:y=pe(ue(r))}=p,T=V(p,ie),b=d!==void 0?d:r&&r!=="Root"&&r!=="root"||!1,P=v||!1;let _,S=E;r==="Root"||r==="root"?S=n:r?S=c:le(u)&&(S=void 0);const x=I(u,a({shouldForwardProp:S,label:_},T)),g=l=>typeof l=="function"&&l.__emotion_real!==l||K(l)?m=>O(l,a({},m,{theme:F({theme:m.theme,defaultTheme:t,themeId:o})})):l,C=(l,...m)=>{let w=g(l);const k=m?m.map(g):[];s&&y&&k.push(h=>{const f=F(a({},h,{defaultTheme:t,themeId:o}));if(!f.components||!f.components[s]||!f.components[s].styleOverrides)return null;const R=f.components[s].styleOverrides,j={};return Object.entries(R).forEach(([L,U])=>{j[L]=O(U,a({},h,{theme:f}))}),y(h,j)}),s&&!b&&k.push(h=>{var f;const R=F(a({},h,{defaultTheme:t,themeId:o})),j=R==null||(f=R.components)==null||(f=f[s])==null?void 0:f.variants;return O({variants:j},a({},h,{theme:R}))}),P||k.push(i);const N=k.length-m.length;if(Array.isArray(l)&&N>0){const h=new Array(N).fill("");w=[...l,...h],w.raw=[...l.raw,...h]}const $=x(w,...k);return u.muiName&&($.muiName=u.muiName),$};return x.withConfig&&(C.withConfig=x.withConfig),C}}const fe=de(),me=fe,he=["component","direction","spacing","divider","children","className","useFlexGap"],ye=G(),Se=me("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function ve(e){return Q({props:e,name:"MuiStack",defaultTheme:ye})}function xe(e,o){const t=M.Children.toArray(e).filter(Boolean);return t.reduce((n,c,i)=>(n.push(c),i<t.length-1&&n.push(M.cloneElement(o,{key:`separator-${i}`})),n),[])}const ke=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Re=({ownerState:e,theme:o})=>{let t=a({display:"flex",flexDirection:"column"},D({theme:o},A({values:e.direction,breakpoints:o.breakpoints.values}),n=>({flexDirection:n})));if(e.spacing){const n=q(o),c=Object.keys(o.breakpoints.values).reduce((s,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(s[r]=!0),s),{}),i=A({values:e.direction,base:c}),u=A({values:e.spacing,base:c});typeof i=="object"&&Object.keys(i).forEach((s,r,d)=>{if(!i[s]){const y=r>0?i[d[r-1]]:"column";i[s]=y}}),t=z(t,D({theme:o},u,(s,r)=>e.useFlexGap?{gap:B(n,s)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${ke(r?i[r]:e.direction)}`]:B(n,s)}}))}return t=H(o.breakpoints,t),t};function Pe(e={}){const{createStyledComponent:o=Se,useThemeProps:t=ve,componentName:n="MuiStack"}=e,c=()=>ee({root:["root"]},s=>te(n,s),{}),i=o(Re);return M.forwardRef(function(s,r){const d=t(s),v=X(d),{component:y="div",direction:T="column",spacing:b=0,divider:P,children:_,className:S,useFlexGap:x=!1}=v,g=V(v,he),C={direction:T,spacing:b,useFlexGap:x},l=c();return Y.jsx(i,a({as:y,ownerState:C,ref:r,className:Z(l.root,S)},g,{children:P?xe(_,P):_}))})}const _e=Pe({createStyledComponent:se("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>oe({props:e,name:"MuiStack"})}),Ce=_e;export{Ce as S,me as s};
