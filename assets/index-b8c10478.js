function Ue(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var ir=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Le(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function sr(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var o=[null];o.push.apply(o,arguments);var a=Function.bind.apply(t,o);return new a}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var oe={},Ie={get exports(){return oe},set exports(e){oe=e}},D={},c={},Me={get exports(){return c},set exports(e){c=e}},f={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $=Symbol.for("react.element"),Be=Symbol.for("react.portal"),Ne=Symbol.for("react.fragment"),De=Symbol.for("react.strict_mode"),Te=Symbol.for("react.profiler"),We=Symbol.for("react.provider"),Fe=Symbol.for("react.context"),Ve=Symbol.for("react.forward_ref"),Ae=Symbol.for("react.suspense"),He=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),ae=Symbol.iterator;function qe(e){return e===null||typeof e!="object"?null:(e=ae&&e[ae]||e["@@iterator"],typeof e=="function"?e:null)}var ye={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ve=Object.assign,ge={};function _(e,t,n){this.props=e,this.context=t,this.refs=ge,this.updater=n||ye}_.prototype.isReactComponent={};_.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xe(){}xe.prototype=_.prototype;function Q(e,t,n){this.props=e,this.context=t,this.refs=ge,this.updater=n||ye}var X=Q.prototype=new xe;X.constructor=Q;ve(X,_.prototype);X.isPureReactComponent=!0;var le=Array.isArray,Se=Object.prototype.hasOwnProperty,Z={current:null},Ee={key:!0,ref:!0,__self:!0,__source:!0};function Re(e,t,n){var r,o={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)Se.call(t,r)&&!Ee.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(i===1)o.children=n;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)o[r]===void 0&&(o[r]=i[r]);return{$$typeof:$,type:e,key:a,ref:l,props:o,_owner:Z.current}}function ze(e,t){return{$$typeof:$,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ee(e){return typeof e=="object"&&e!==null&&e.$$typeof===$}function Ke(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ie=/\/+/g;function V(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ke(""+e.key):t.toString(36)}function I(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case $:case Be:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+V(l,0):r,le(o)?(n="",e!=null&&(n=e.replace(ie,"$&/")+"/"),I(o,t,n,"",function(u){return u})):o!=null&&(ee(o)&&(o=ze(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ie,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",le(e))for(var i=0;i<e.length;i++){a=e[i];var s=r+V(a,i);l+=I(a,t,n,s,o)}else if(s=qe(e),typeof s=="function")for(e=s.call(e),i=0;!(a=e.next()).done;)a=a.value,s=r+V(a,i++),l+=I(a,t,n,s,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function L(e,t,n){if(e==null)return e;var r=[],o=0;return I(e,r,"","",function(a){return t.call(n,a,o++)}),r}function Ge(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var S={current:null},M={transition:null},Ye={ReactCurrentDispatcher:S,ReactCurrentBatchConfig:M,ReactCurrentOwner:Z};f.Children={map:L,forEach:function(e,t,n){L(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return L(e,function(){t++}),t},toArray:function(e){return L(e,function(t){return t})||[]},only:function(e){if(!ee(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};f.Component=_;f.Fragment=Ne;f.Profiler=Te;f.PureComponent=Q;f.StrictMode=De;f.Suspense=Ae;f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ye;f.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ve({},e.props),o=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=Z.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)Se.call(t,s)&&!Ee.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&i!==void 0?i[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){i=Array(s);for(var u=0;u<s;u++)i[u]=arguments[u+2];r.children=i}return{$$typeof:$,type:e.type,key:o,ref:a,props:r,_owner:l}};f.createContext=function(e){return e={$$typeof:Fe,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:We,_context:e},e.Consumer=e};f.createElement=Re;f.createFactory=function(e){var t=Re.bind(null,e);return t.type=e,t};f.createRef=function(){return{current:null}};f.forwardRef=function(e){return{$$typeof:Ve,render:e}};f.isValidElement=ee;f.lazy=function(e){return{$$typeof:Je,_payload:{_status:-1,_result:e},_init:Ge}};f.memo=function(e,t){return{$$typeof:He,type:e,compare:t===void 0?null:t}};f.startTransition=function(e){var t=M.transition;M.transition={};try{e()}finally{M.transition=t}};f.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};f.useCallback=function(e,t){return S.current.useCallback(e,t)};f.useContext=function(e){return S.current.useContext(e)};f.useDebugValue=function(){};f.useDeferredValue=function(e){return S.current.useDeferredValue(e)};f.useEffect=function(e,t){return S.current.useEffect(e,t)};f.useId=function(){return S.current.useId()};f.useImperativeHandle=function(e,t,n){return S.current.useImperativeHandle(e,t,n)};f.useInsertionEffect=function(e,t){return S.current.useInsertionEffect(e,t)};f.useLayoutEffect=function(e,t){return S.current.useLayoutEffect(e,t)};f.useMemo=function(e,t){return S.current.useMemo(e,t)};f.useReducer=function(e,t,n){return S.current.useReducer(e,t,n)};f.useRef=function(e){return S.current.useRef(e)};f.useState=function(e){return S.current.useState(e)};f.useSyncExternalStore=function(e,t,n){return S.current.useSyncExternalStore(e,t,n)};f.useTransition=function(){return S.current.useTransition()};f.version="18.2.0";(function(e){e.exports=f})(Me);const Qe=Le(c),J=Ue({__proto__:null,default:Qe},[c]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xe=c,Ze=Symbol.for("react.element"),et=Symbol.for("react.fragment"),tt=Object.prototype.hasOwnProperty,rt=Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nt={key:!0,ref:!0,__self:!0,__source:!0};function Ce(e,t,n){var r,o={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)tt.call(t,r)&&!nt.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Ze,type:e,key:a,ref:l,props:o,_owner:rt.current}}D.Fragment=et;D.jsx=Ce;D.jsxs=Ce;(function(e){e.exports=D})(Ie);/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}var C;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(C||(C={}));const se="popstate";function ot(e){e===void 0&&(e={});function t(o,a){let{pathname:l="/",search:i="",hash:s=""}=P(o.location.hash.substr(1));return q("",{pathname:l,search:i,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(o,a){let l=o.document.querySelector("base"),i="";if(l&&l.getAttribute("href")){let s=o.location.href,u=s.indexOf("#");i=u===-1?s:s.slice(0,u)}return i+"#"+(typeof a=="string"?a:B(a))}function r(o,a){at(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return it(t,n,r,e)}function y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function at(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function lt(){return Math.random().toString(36).substr(2,8)}function ue(e,t){return{usr:e.state,key:e.key,idx:t}}function q(e,t,n,r){return n===void 0&&(n=null),j({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?P(t):t,{state:n,key:t&&t.key||r||lt()})}function B(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function P(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function it(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:a=!1}=r,l=o.history,i=C.Pop,s=null,u=h();u==null&&(u=0,l.replaceState(j({},l.state,{idx:u}),""));function h(){return(l.state||{idx:null}).idx}function p(){i=C.Pop;let m=h(),v=m==null?null:m-u;u=m,s&&s({action:i,location:d.location,delta:v})}function g(m,v){i=C.Push;let x=q(d.location,m,v);n&&n(x,m),u=h()+1;let F=ue(x,u),U=d.createHref(x);try{l.pushState(F,"",U)}catch{o.location.assign(U)}a&&s&&s({action:i,location:d.location,delta:1})}function R(m,v){i=C.Replace;let x=q(d.location,m,v);n&&n(x,m),u=h();let F=ue(x,u),U=d.createHref(x);l.replaceState(F,"",U),a&&s&&s({action:i,location:d.location,delta:0})}function E(m){let v=o.location.origin!=="null"?o.location.origin:o.location.href,x=typeof m=="string"?m:B(m);return y(v,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,v)}let d={get action(){return i},get location(){return e(o,l)},listen(m){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(se,p),s=m,()=>{o.removeEventListener(se,p),s=null}},createHref(m){return t(o,m)},createURL:E,encodeLocation(m){let v=E(m);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:g,replace:R,go(m){return l.go(m)}};return d}var ce;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ce||(ce={}));function st(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?P(t):t,o=we(r.pathname||"/",n);if(o==null)return null;let a=be(e);ut(a);let l=null;for(let i=0;l==null&&i<a.length;++i)l=gt(a[i],Et(o));return l}function be(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(a,l,i)=>{let s={relativePath:i===void 0?a.path||"":i,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};s.relativePath.startsWith("/")&&(y(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=b([r,s.relativePath]),h=n.concat(s);a.children&&a.children.length>0&&(y(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),be(a.children,t,h,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:yt(u,a.index),routesMeta:h})};return e.forEach((a,l)=>{var i;if(a.path===""||!((i=a.path)!=null&&i.includes("?")))o(a,l);else for(let s of Pe(a.path))o(a,l,s)}),t}function Pe(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let l=Pe(r.join("/")),i=[];return i.push(...l.map(s=>s===""?a:[a,s].join("/"))),o&&i.push(...l),i.map(s=>e.startsWith("/")&&s===""?"/":s)}function ut(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:vt(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ct=/^:\w+$/,ft=3,ht=2,pt=1,dt=10,mt=-2,fe=e=>e==="*";function yt(e,t){let n=e.split("/"),r=n.length;return n.some(fe)&&(r+=mt),t&&(r+=ht),n.filter(o=>!fe(o)).reduce((o,a)=>o+(ct.test(a)?ft:a===""?pt:dt),r)}function vt(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function gt(e,t){let{routesMeta:n}=e,r={},o="/",a=[];for(let l=0;l<n.length;++l){let i=n[l],s=l===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",h=xt({path:i.relativePath,caseSensitive:i.caseSensitive,end:s},u);if(!h)return null;Object.assign(r,h.params);let p=i.route;a.push({params:r,pathname:b([o,h.pathname]),pathnameBase:Pt(b([o,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(o=b([o,h.pathnameBase]))}return a}function xt(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=St(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],l=a.replace(/(.)\/+$/,"$1"),i=o.slice(1);return{params:r.reduce((u,h,p)=>{if(h==="*"){let g=i[p]||"";l=a.slice(0,a.length-g.length).replace(/(.)\/+$/,"$1")}return u[h]=Rt(i[p]||"",h),u},{}),pathname:a,pathnameBase:l,pattern:e}}function St(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),te(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,i)=>(r.push(i),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Et(e){try{return decodeURI(e)}catch(t){return te(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Rt(e,t){try{return decodeURIComponent(e)}catch(n){return te(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function we(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function te(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ct(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?P(e):e;return{pathname:n?n.startsWith("/")?n:bt(n,t):t,search:wt(r),hash:_t(o)}}function bt(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function A(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _e(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Oe(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=P(e):(o=j({},e),y(!o.pathname||!o.pathname.includes("?"),A("?","pathname","search",o)),y(!o.pathname||!o.pathname.includes("#"),A("#","pathname","hash",o)),y(!o.search||!o.search.includes("#"),A("#","search","hash",o)));let a=e===""||o.pathname==="",l=a?"/":o.pathname,i;if(r||l==null)i=n;else{let p=t.length-1;if(l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),p-=1;o.pathname=g.join("/")}i=p>=0?t[p]:"/"}let s=Ct(o,i),u=l&&l!=="/"&&l.endsWith("/"),h=(a||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||h)&&(s.pathname+="/"),s}const b=e=>e.join("/").replace(/\/\/+/g,"/"),Pt=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),wt=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_t=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ot(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const jt=["post","put","patch","delete"];[...jt];/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z.apply(this,arguments)}function $t(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const kt=typeof Object.is=="function"?Object.is:$t,{useState:Ut,useEffect:Lt,useLayoutEffect:It,useDebugValue:Mt}=J;function Bt(e,t,n){const r=t(),[{inst:o},a]=Ut({inst:{value:r,getSnapshot:t}});return It(()=>{o.value=r,o.getSnapshot=t,H(o)&&a({inst:o})},[e,r,t]),Lt(()=>(H(o)&&a({inst:o}),e(()=>{H(o)&&a({inst:o})})),[e]),Mt(r),r}function H(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!kt(n,r)}catch{return!0}}function Nt(e,t,n){return t()}const Dt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Tt=!Dt,Wt=Tt?Nt:Bt;"useSyncExternalStore"in J&&(e=>e.useSyncExternalStore)(J);const je=c.createContext(null),re=c.createContext(null),T=c.createContext(null),W=c.createContext(null),w=c.createContext({outlet:null,matches:[]}),$e=c.createContext(null);function Ft(e,t){let{relative:n}=t===void 0?{}:t;O()||y(!1);let{basename:r,navigator:o}=c.useContext(T),{hash:a,pathname:l,search:i}=ke(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:b([r,l])),o.createHref({pathname:s,search:i,hash:a})}function O(){return c.useContext(W)!=null}function k(){return O()||y(!1),c.useContext(W).location}function ne(){O()||y(!1);let{basename:e,navigator:t}=c.useContext(T),{matches:n}=c.useContext(w),{pathname:r}=k(),o=JSON.stringify(_e(n).map(i=>i.pathnameBase)),a=c.useRef(!1);return c.useEffect(()=>{a.current=!0}),c.useCallback(function(i,s){if(s===void 0&&(s={}),!a.current)return;if(typeof i=="number"){t.go(i);return}let u=Oe(i,JSON.parse(o),r,s.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:b([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state,s)},[e,t,o,r])}function ur(){let{matches:e}=c.useContext(w),t=e[e.length-1];return t?t.params:{}}function ke(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=c.useContext(w),{pathname:o}=k(),a=JSON.stringify(_e(r).map(l=>l.pathnameBase));return c.useMemo(()=>Oe(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function Vt(e,t){O()||y(!1);let{navigator:n}=c.useContext(T),r=c.useContext(re),{matches:o}=c.useContext(w),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let i=a?a.pathnameBase:"/";a&&a.route;let s=k(),u;if(t){var h;let d=typeof t=="string"?P(t):t;i==="/"||(h=d.pathname)!=null&&h.startsWith(i)||y(!1),u=d}else u=s;let p=u.pathname||"/",g=i==="/"?p:p.slice(i.length)||"/",R=st(e,{pathname:g}),E=qt(R&&R.map(d=>Object.assign({},d,{params:Object.assign({},l,d.params),pathname:b([i,n.encodeLocation?n.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?i:b([i,n.encodeLocation?n.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),o,r||void 0);return t&&E?c.createElement(W.Provider,{value:{location:z({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:C.Pop}},E):E}function At(){let e=Yt(),t=Ot(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return c.createElement(c.Fragment,null,c.createElement("h2",null,"Unexpected Application Error!"),c.createElement("h3",{style:{fontStyle:"italic"}},t),n?c.createElement("pre",{style:o},n):null,a)}class Ht extends c.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?c.createElement(w.Provider,{value:this.props.routeContext},c.createElement($e.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Jt(e){let{routeContext:t,match:n,children:r}=e,o=c.useContext(je);return o&&o.static&&o.staticContext&&n.route.errorElement&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),c.createElement(w.Provider,{value:t},r)}function qt(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let a=r.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||y(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,l,i)=>{let s=l.route.id?o==null?void 0:o[l.route.id]:null,u=n?l.route.errorElement||c.createElement(At,null):null,h=t.concat(r.slice(0,i+1)),p=()=>c.createElement(Jt,{match:l,routeContext:{outlet:a,matches:h}},s?u:l.route.element!==void 0?l.route.element:a);return n&&(l.route.errorElement||i===0)?c.createElement(Ht,{location:n.location,component:u,error:s,children:p(),routeContext:{outlet:null,matches:h}}):p()},null)}var he;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(he||(he={}));var N;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(N||(N={}));function zt(e){let t=c.useContext(re);return t||y(!1),t}function Kt(e){let t=c.useContext(w);return t||y(!1),t}function Gt(e){let t=Kt(),n=t.matches[t.matches.length-1];return n.route.id||y(!1),n.route.id}function Yt(){var e;let t=c.useContext($e),n=zt(N.UseRouteError),r=Gt(N.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function cr(e){let{to:t,replace:n,state:r,relative:o}=e;O()||y(!1);let a=c.useContext(re),l=ne();return c.useEffect(()=>{a&&a.navigation.state!=="idle"||l(t,{replace:n,state:r,relative:o})}),null}function Qt(e){y(!1)}function Xt(e){let{basename:t="/",children:n=null,location:r,navigationType:o=C.Pop,navigator:a,static:l=!1}=e;O()&&y(!1);let i=t.replace(/^\/*/,"/"),s=c.useMemo(()=>({basename:i,navigator:a,static:l}),[i,a,l]);typeof r=="string"&&(r=P(r));let{pathname:u="/",search:h="",hash:p="",state:g=null,key:R="default"}=r,E=c.useMemo(()=>{let d=we(u,i);return d==null?null:{pathname:d,search:h,hash:p,state:g,key:R}},[i,u,h,p,g,R]);return E==null?null:c.createElement(T.Provider,{value:s},c.createElement(W.Provider,{children:n,value:{location:E,navigationType:o}}))}function fr(e){let{children:t,location:n}=e,r=c.useContext(je),o=r&&!t?r.router.routes:K(t);return Vt(o,n)}var pe;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(pe||(pe={}));new Promise(()=>{});function K(e,t){t===void 0&&(t=[]);let n=[];return c.Children.forEach(e,(r,o)=>{if(!c.isValidElement(r))return;if(r.type===c.Fragment){n.push.apply(n,K(r.props.children,t));return}r.type!==Qt&&y(!1),!r.props.index||!r.props.children||y(!1);let a=[...t,o],l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(l.children=K(r.props.children,a)),n.push(l)}),n}/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}function Zt(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function er(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function tr(e,t){return e.button===0&&(!t||t==="_self")&&!er(e)}function Y(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(o=>[n,o]):[[n,r]])},[]))}function rr(e,t){let n=Y(e);if(t)for(let r of t.keys())n.has(r)||t.getAll(r).forEach(o=>{n.append(r,o)});return n}const nr=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function hr(e){let{basename:t,children:n,window:r}=e,o=c.useRef();o.current==null&&(o.current=ot({window:r,v5Compat:!0}));let a=o.current,[l,i]=c.useState({action:a.action,location:a.location});return c.useLayoutEffect(()=>a.listen(i),[a]),c.createElement(Xt,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const or=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pr=c.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:a,replace:l,state:i,target:s,to:u,preventScrollReset:h}=t,p=Zt(t,nr),g,R=!1;if(or&&typeof u=="string"&&/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(u)){g=u;let v=new URL(window.location.href),x=u.startsWith("//")?new URL(v.protocol+u):new URL(u);x.origin===v.origin?u=x.pathname+x.search+x.hash:R=!0}let E=Ft(u,{relative:o}),d=ar(u,{replace:l,state:i,target:s,preventScrollReset:h,relative:o});function m(v){r&&r(v),v.defaultPrevented||d(v)}return c.createElement("a",G({},p,{href:g||E,onClick:R||a?r:m,ref:n,target:s}))});var de;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(de||(de={}));var me;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(me||(me={}));function ar(e,t){let{target:n,replace:r,state:o,preventScrollReset:a,relative:l}=t===void 0?{}:t,i=ne(),s=k(),u=ke(e,{relative:l});return c.useCallback(h=>{if(tr(h,n)){h.preventDefault();let p=r!==void 0?r:B(s)===B(u);i(e,{replace:p,state:o,preventScrollReset:a,relative:l})}},[s,i,u,r,o,n,e,a,l])}function dr(e){let t=c.useRef(Y(e)),n=c.useRef(!1),r=k(),o=c.useMemo(()=>rr(r.search,n.current?null:t.current),[r.search]),a=ne(),l=c.useCallback((i,s)=>{const u=Y(typeof i=="function"?i(o):i);n.current=!0,a("?"+u,s)},[a,o]);return[o,l]}export{hr as H,pr as L,cr as N,Qe as R,J as a,fr as b,ir as c,Qt as d,dr as e,ur as f,Le as g,sr as h,oe as j,c as r,ne as u};
