import{r as l,D as x,ag as C,d as B,e as t,F as h,j as e,ah as b,ai as k,I as i,H as v,B as u,a5 as I,a4 as S,aj as j,ak as w,f as y,X as r,af as d,al as p}from"./index.42ecc71a.js";import{A as D}from"./ArrowBack.15db3c86.js";function P(){const{appData:m,editAppData:A}=l.exports.useContext(x),[g]=C(),s=B(),[o,f]=l.exports.useState(g.get("q")||""),c=a=>{f(a.target.value)};return t(h,{children:[e(b,{position:"sticky",children:t(k,{children:[e(i,{size:"large",edge:"start",color:"inherit",onClick:()=>s(-1),children:e(D,{})}),e(i,{size:"large",edge:"start",color:"inherit",onClick:()=>s("/home"),children:e(v,{})}),t(u,{sx:{position:"relative",borderRadius:1.5,width:"100%",backgroundColor:"#ffffff26","&:hover":{backgroundColor:"#ffffff40"},mx:{sm:5,lg:20}},children:[e(u,{sx:{pl:2,height:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:e(I,{})}),e(S,{autoFocus:!0,sx:{color:"inherit","& .MuiInputBase-input":{pl:6,pr:1,py:1,width:"100%"},width:"100%"},value:o,placeholder:"Search\u2026",onChange:c})]}),e(i,{color:"inherit",sx:{ml:1},onClick:()=>{s("/cart")},children:e(j,{badgeContent:m.uCartItems.length,color:"secondary",children:e(w,{})})})]})}),o===""?t(h,{children:[["UGC","CSIR"].map(a=>e(y,{variant:"outlined",value:a,onClick:c,sx:{m:1,mr:0},children:a},a)),e(r,{container:!0,spacing:2,p:2,columns:{xs:1,sm:3,md:4,lg:5,xl:6},children:Object.values(d).map((a,n)=>e(r,{item:!0,xs:1,children:e(p,{course:a})},n))})]}):e(r,{container:!0,spacing:2,p:2,columns:{xs:1,sm:3,md:4,lg:5,xl:6},children:Object.values(d).filter(a=>(a.title+a.about+a.category).toLowerCase().includes(o.toLowerCase())).map((a,n)=>e(r,{item:!0,xs:1,children:e(p,{course:a})},n))})]})}export{P as default};
