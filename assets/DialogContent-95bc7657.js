import{b as c,g as p,s as u,_ as i,u as g,f as v,i as x,j as C}from"./App-be772365.js";import{r as f,j as m}from"./index-b8c10478.js";import{d as D}from"./dialogTitleClasses-4f7e4aeb.js";function w(o){return c("MuiDialogContent",o)}p("MuiDialogContent",["root","dividers"]);const b=["className","dividers"],j=o=>{const{classes:s,dividers:t}=o;return C({root:["root",t&&"dividers"]},w,s)},R=u("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:t}=o;return[s.root,t.dividers&&s.dividers]}})(({theme:o,ownerState:s})=>i({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},s.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${D.root} + &`]:{paddingTop:0}})),y=f.forwardRef(function(s,t){const e=g({props:s,name:"MuiDialogContent"}),{className:a,dividers:n=!1}=e,l=v(e,b),r=i({},e,{dividers:n}),d=j(r);return m.jsx(R,i({className:x(d.root,a),ownerState:r,ref:t},l))}),U=y;export{U as D};
