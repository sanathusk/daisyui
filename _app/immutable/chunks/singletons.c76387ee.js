import{w as c}from"./index.857462fb.js";var _;const v=((_=globalThis.__sveltekit_1b135oy)==null?void 0:_.base)??"";var h;const k=((h=globalThis.__sveltekit_1b135oy)==null?void 0:h.assets)??v,m="1685589689842",A="sveltekit:snapshot",R="sveltekit:scroll",T="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function I(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function S(){return{x:pageXOffset,y:pageYOffset}}function i(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function b(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function x(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=b(e)}}function O(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,l=!n||!!a||E(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),r=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:l,target:a,download:r}}function U(e){let t=null,n=null,a=null,l=null,r=null,s=null,o=e;for(;o&&o!==document.documentElement;)a===null&&(a=i(o,"preload-code")),l===null&&(l=i(o,"preload-data")),t===null&&(t=i(o,"keepfocus")),n===null&&(n=i(o,"noscroll")),r===null&&(r=i(o,"reload")),s===null&&(s=i(o,"replacestate")),o=b(o);return{preload_code:d[a??"off"],preload_data:d[l??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:r==="off"?!1:r===""?!0:null,replace_state:s==="off"?!1:s===""?!0:null}}function p(e){const t=c(e);let n=!0;function a(){n=!0,t.update(s=>s)}function l(s){n=!1,t.set(s)}function r(s){let o;return t.subscribe(u=>{(o===void 0||n&&u!==o)&&s(o=u)})}return{notify:a,set:l,subscribe:r}}function y(){const{set:e,subscribe:t}=c(!1);let n;async function a(){clearTimeout(n);try{const l=await fetch(`${k}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!l.ok)return!1;const s=(await l.json()).version!==m;return s&&(e(!0),clearTimeout(n)),s}catch{return!1}}return{subscribe:t,check:a}}function E(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let g;function L(e){g=e.client}function N(e){return(...t)=>g[e](...t)}const P={url:p({}),page:p({}),navigating:c(null),updated:y()};export{T as I,f as P,R as S,A as a,O as b,U as c,S as d,v as e,x as f,I as g,L as h,E as i,N as j,P as s};
