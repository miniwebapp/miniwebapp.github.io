import{j as e,B as i,r as f,L as h}from"./index-459c5962.js";import{S as l}from"./Stack-4dc6229b.js";import{A as d}from"./Divider-866e4931.js";import{T as r}from"./ShoppingCartSharp-1684c5a4.js";import{u as p}from"./courseStore-4e0aab48.js";import{P as g}from"./ProductCard-b8b5db6f.js";import{A as b,a as I,E as j,b as y}from"./ExpandMore-8b0b4a5e.js";import{G as s}from"./Grid-83f7f219.js";import{P as A,R}from"./RightDrawer-d6011d5c.js";import{d as v,B as S,L as T,P as w}from"./appStore-653fb111.js";import{a as C,b as E,c as k,u as F,L as M}from"./LeftDrawer-ad77a716.js";import{F as U}from"./Footer-c0047b0c.js";import{N as L}from"./NavBarColorful-1e818740.js";import{S as N}from"./Search-1f55f6fe.js";import"./Card-291f9ab9.js";import"./Rating-10fe190a.js";import"./useControlled-99c0d9bb.js";import"./react-is.production.min-a192e302.js";const O=t=>{const{imgSrc:a,text:n}=t;return e.jsx(l,{m:1,children:e.jsxs(i,{sx:{backgroundImage:"linear-gradient(120deg, #a6c0fe, #f68084)"},borderRadius:2,children:[e.jsx(i,{p:1,children:e.jsx(d,{sx:{height:120,width:120,mx:"auto",maxWidth:"100%"},src:`/image/${a}`})}),e.jsx(r,{color:"#fff",sx:{backgroundImage:"linear-gradient(45deg, #3bade3, #576fe6, #9844b7, #ff357f)"},my:1,p:1,align:"center",children:n})]})})},o=O;function m(t){const{courses:a}=p();return e.jsxs(b,{defaultExpanded:t.expand,TransitionProps:{unmountOnExit:!0},disableGutters:!0,children:[e.jsx(I,{expandIcon:e.jsx(j,{}),children:e.jsx(r,{px:3,variant:"subtitle1",fontWeight:"bold",color:"#444",children:t.title})}),e.jsx(y,{sx:{backgroundColor:"#ccc"},children:e.jsx(i,{children:e.jsx(s,{container:!0,columns:{xs:1,sm:2,md:2,lg:3,xl:4},children:t.list.map((n,c)=>e.jsx(s,{xs:1,item:!0,children:e.jsx(g,{cData:a[n]})},c))})})})]})}const P=v(t=>({comments:[{nm:"SHWETA GUPTA",sh:"INSPIRE Fellow",cm:"A very helpful test series. Really helped me alot to test my concepts and question quality are very nice and significant. The basics are covered very clearly, even some of questions they indirectly cleared the doubts too"},{nm:"BIPIN HEMBROM",sh:"ICAR-SRF IARI",cm:"The mock tests offered on this website have been a game-changer for my exam preparation. The questions are well-researched and simulate the actual exam environment. I feel much more confident and prepared after practicing on this platform."},{nm:"DIVYA KAUSHIK",sh:"ICAR-SRF IARI",cm:"A very informative website. Mock tests are very useful if you're preparing for any exam. Courses are also pocket friendly and the portal is easy to use."},{nm:"NILAYA AGARWAL",sh:"GALGOTIA UNIVERSITY",cm:"I have tried several mock test websites, but this one stands out from the rest. The user interface is intuitive and easy to navigate, and the questions are of high quality. Tests have helped me learn from my mistakes."},{nm:"MAFIK ALAM",sh:"VBU Rank 1",cm:"I am extremely impressed with the quality of the mock tests on this website! They are challenging, well-structured, and cover a wide range of topics. Highly recommended for anyone preparing for competitive exams."},{nm:"SANGRAM YADAV",sh:"ICAR-SRF IARI",cm:"I am extremely impressed with the quality of the mock tests on this website! They are challenging, well-structured, and cover a wide range of topics. Highly recommended for anyone preparing for competitive exams."},{nm:"P REDDY",sh:"ICAR-SRF IARI",cm:"I cannot thank this mock test website enough for helping me improve my performance. The tests are comprehensive and cover all the important topics. The timed tests have helped me enhance my speed and accuracy, which are crucial for competitive exams."},{nm:"P S DUTTA",sh:"ICAR-SRF IARI",cm:"I stumbled upon this mock test website recently, and it has exceeded my expectations. The variety of mock tests available for different exams is impressive. The detailed performance analysis after each test has been immensely helpful in identifying my strengths and weaknesses."},{nm:"SAPAN BARIK",sh:"ICAR-SRF IARI",cm:"I have been using this mock test website for a while now, and I must say it has been a valuable resource in my exam preparation. The mock tests are well-structured and provide a realistic exam experience. I appreciate the prompt and helpful customer support team as well."},{nm:"JOYUTI KUMARI",sh:"ICAR-SRF IARI",cm:"This mock test website is a gem! The questions are thoughtfully designed, covering all the important topics and exam patterns. The option to customize tests based on difficulty level and specific subjects is a great feature. I highly recommend this website to all serious exam aspirants."},{nm:"MD. ZAMAN",sh:"ICAR-SRF BCKV",cm:"I have tried other mock test websites before, but this one truly stands out. The user-friendly interface, extensive question bank, and detailed performance analysis make it a top-notch platform for exam preparation. I have seen a significant improvement in my scores since I started using this website."},{nm:"MOHAN RATHORE",sh:"ICAR-SRF IARI",cm:"I am grateful for this mock test website as it has helped me build confidence and improve my exam scores. The tests are challenging yet well-balanced, and the explanations provided for each question are clear and concise. I would definitely recommend this website to anyone aiming for success in competitive exams."},{nm:"KOMAL JAIN",sh:"ICAR-SRF IARI",cm:"I have recommended this mock test website to all my friends preparing for exams, and they have all thanked me for it! The quality of the questions, the variety of tests, and the overall user experience make it a standout platform. Kudos to the team behind this fantastic resource!"}],fetchComments:()=>t(a=>({comments:{...a.comments}}))})),q=t=>e.jsx(T,{component:w,sx:{m:1},children:e.jsxs(C,{alignItems:"flex-start",children:[e.jsx(E,{children:e.jsx(d,{alt:t.a.nm,src:`https://api.multiavatar.com/${t.a.nm}.png`})}),e.jsx(k,{primary:t.a.nm,sx:{textAlign:"justify"},secondary:e.jsx(e.Fragment,{children:e.jsxs("span",{children:[e.jsxs("strong",{children:["✦ ",t.a.sh," ✦"]})," — ",t.a.cm]})})})]})}),D=()=>{const{comments:t}=P(),[a,n]=f.useState(!1),c=()=>{n(!0),console.log("tobe done")};return e.jsxs(e.Fragment,{children:[t.map((x,u)=>e.jsx(q,{a:x},u)),e.jsx(l,{alignItems:"center",children:e.jsx(S,{onClick:c,variant:"outlined",sx:{m:1},disabled:a,children:"show more comments"})})]})},G=D;function ae(){const t=F("(min-width:1200px)");return e.jsxs(e.Fragment,{children:[e.jsx(M,{}),e.jsxs(i,{flexGrow:1,children:[e.jsx(L,{}),e.jsx(i,{children:e.jsxs(s,{container:!0,p:2,bgcolor:"#fff",columns:{xs:1,sm:7,md:6},children:[e.jsx(s,{xs:1,sm:4,md:4,item:!0,sx:{minHeight:{xs:200,sm:300,md:500},backgroundImage:"url(/image/bgimg.jpg)",backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}},1),e.jsxs(s,{p:2,xs:1,sm:3,md:2,item:!0,alignSelf:"center",children:[e.jsx(r,{fontWeight:"bolder",fontSize:"large",fontFamily:"Math, Roboto, Helvetica, Arial, sans-serif",align:"center",children:"MOCK TEST FOR ALL EXAMS"}),e.jsx(r,{mb:2,align:"center",children:"UGC | NET | CSIR | JRF"}),e.jsx(h,{to:"/course/EI0",children:e.jsx(r,{sx:{p:1,borderRadius:1,background:"linear-gradient(45deg, #3bade3, #576fe6, #9844b7, #ff357f)",":hover":{background:"linear-gradient(45deg, #3bade3, #576fe6, #9844b7)"}},color:"#fff",align:"center",children:"FREE MOCK TEST"})})]},2)]})}),e.jsxs(i,{p:2,bgcolor:"#e7ebf0",children:[e.jsx(r,{fontWeight:"bold",color:"#6a7f95",align:"center",mb:2,p:1,children:"FIND YOUR PERFECT MOCK TEST!"}),e.jsxs(l,{direction:"row",alignItems:"center",borderRadius:2,boxShadow:1,component:h,to:"/search",bgcolor:"#fff",p:2,boxSizing:"border-box",sx:{maxWidth:"100%",width:500,mx:"auto"},children:[e.jsx(r,{border:1,p:2,borderRadius:1,noWrap:!0,borderColor:"primary.main",color:"GrayText",flexGrow:1,children:"Search Exam Name Here"}),e.jsx(d,{sx:{p:1,ml:2,borderRadius:1,backgroundColor:"primary.main"},children:e.jsx(N,{})})]})]}),e.jsx(m,{expand:!0,title:"POPULAR COURSES",list:["EI1","EI2","EI3","EI4"]}),e.jsx(m,{title:"ICAR JRF",list:["EI5","EI6","EI7","EI8","EI9","EI10"]}),e.jsx(m,{title:"UGC CSIR NET",list:["EI17"]}),e.jsx(m,{title:"GOVT. JOBS",list:["EI16"]}),e.jsx(i,{py:2,sx:{display:{lg:"none"}},children:e.jsx(A,{})}),e.jsx(r,{fontWeight:"bold",align:"center",p:4,bgcolor:"#e7ebf0",color:"text.secondary",children:"WHAT MAKES US DIFFERENT"}),e.jsx(i,{children:e.jsxs(s,{container:!0,p:1,bgcolor:"#fff",columns:{xs:2,sm:4},children:[e.jsx(s,{xs:1,item:!0,children:e.jsx(o,{imgSrc:"dp-min.gif",text:"5800+ Users"})},1),e.jsx(s,{xs:1,item:!0,children:e.jsx(o,{imgSrc:"question.gif",text:"1M+ Questions"})},2),e.jsx(s,{xs:1,item:!0,children:e.jsx(o,{imgSrc:"responsive4.gif",text:"Device Responsive"})},3),e.jsx(s,{xs:1,item:!0,children:e.jsx(o,{imgSrc:"unlimited6.gif",text:"Unlimited Attempts"})},4)]})}),e.jsxs(i,{bgcolor:"#e7ebf0",pb:4,children:[e.jsx(r,{fontWeight:"bold",align:"center",p:4,children:"WHAT STUDENTS SAY ABOUT US?"}),e.jsx(G,{})]}),e.jsx(U,{})]}),t?e.jsx(R,{}):e.jsx(e.Fragment,{})]})}export{ae as default};
