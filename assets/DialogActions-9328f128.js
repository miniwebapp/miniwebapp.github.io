import{d as g,g as p,s as d,i as a,r as u,k as f,l as m,j as x,o as D,p as A}from"./index-f83ed4d4.js";function S(s){return g("MuiDialogActions",s)}p("MuiDialogActions",["root","spacing"]);const y=["className","disableSpacing"],b=s=>{const{classes:o,disableSpacing:t}=s;return A({root:["root",!t&&"spacing"]},S,o)},C=d("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(s,o)=>{const{ownerState:t}=s;return[o.root,!t.disableSpacing&&o.spacing]}})(({ownerState:s})=>a({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!s.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),j=u.forwardRef(function(o,t){const e=f({props:o,name:"MuiDialogActions"}),{className:n,disableSpacing:c=!1}=e,l=m(e,y),i=a({},e,{disableSpacing:c}),r=b(i);return x.jsx(C,a({className:D(r.root,n),ownerState:i,ref:t},l))}),w=j;export{w as D};