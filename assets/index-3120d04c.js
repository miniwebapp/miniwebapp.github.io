import{j as n,R as a,H as d}from"./index-b8c10478.js";import{r as u,A as f}from"./App-be772365.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();var i={},c=u;i.createRoot=c.createRoot,i.hydrateRoot=c.hydrateRoot;i.createRoot(document.getElementById("root")).render(n.jsx(a.StrictMode,{children:n.jsx(d,{children:n.jsx(f,{})})}));
