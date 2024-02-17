import{r as D,p as O,R as j}from"./index-a9eba8d1.js";const m=t=>{let e;const n=new Set,o=(s,p)=>{const i=typeof s=="function"?s(e):s;if(!Object.is(i,e)){const f=e;e=p??typeof i!="object"?i:Object.assign({},e,i),n.forEach(E=>E(e,f))}},r=()=>e,l={setState:o,getState:r,subscribe:s=>(n.add(s),()=>n.delete(s)),destroy:()=>{n.clear()}};return e=t(o,r,l),l},A=t=>t?m(t):m;var b={exports:{}},g={},w={exports:{}},R={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S=D;function V(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var q=typeof Object.is=="function"?Object.is:V,F=S.useState,P=S.useEffect,W=S.useLayoutEffect,_=S.useDebugValue;function $(t,e){var n=e(),o=F({inst:{value:n,getSnapshot:e}}),r=o[0].inst,u=o[1];return W(function(){r.value=n,r.getSnapshot=e,y(r)&&u({inst:r})},[t,n,e]),P(function(){return y(r)&&u({inst:r}),t(function(){y(r)&&u({inst:r})})},[t]),_(n),n}function y(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!q(t,n)}catch{return!0}}function T(t,e){return e()}var B=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?T:$;R.useSyncExternalStore=S.useSyncExternalStore!==void 0?S.useSyncExternalStore:B;w.exports=R;var C=w.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=D,I=C;function L(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var M=typeof Object.is=="function"?Object.is:L,U=I.useSyncExternalStore,z=v.useRef,k=v.useEffect,G=v.useMemo,H=v.useDebugValue;g.useSyncExternalStoreWithSelector=function(t,e,n,o,r){var u=z(null);if(u.current===null){var a={hasValue:!1,value:null};u.current=a}else a=u.current;u=G(function(){function s(c){if(!p){if(p=!0,i=c,c=o(c),r!==void 0&&a.hasValue){var d=a.value;if(r(d,c))return f=d}return f=c}if(d=f,M(i,c))return d;var h=o(c);return r!==void 0&&r(d,h)?d:(i=c,f=h)}var p=!1,i,f,E=n===void 0?null:n;return[function(){return s(e())},E===null?void 0:function(){return s(E())}]},[e,n,o,r]);var l=U(t,u[0],u[1]);return k(function(){a.hasValue=!0,a.value=l},[l]),H(l),l};b.exports=g;var J=b.exports;const K=O(J),{useDebugValue:N}=j,{useSyncExternalStoreWithSelector:Q}=K;function X(t,e=t.getState,n){const o=Q(t.subscribe,t.getState,t.getServerState||t.getState,e,n);return N(o),o}const x=t=>{const e=typeof t=="function"?A(t):t,n=(o,r)=>X(e,o,r);return Object.assign(n,e),n},Z=t=>t?x(t):x;export{Z as c};
