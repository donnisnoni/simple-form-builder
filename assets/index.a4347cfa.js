var e=(e,t,r)=>new Promise(((n,s)=>{var o=e=>{try{i(r.next(e))}catch(t){s(t)}},a=e=>{try{i(r.throw(e))}catch(t){s(t)}},i=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,a);i((r=r.apply(e,t)).next())}));import{w as t,r,S as n,i as s,s as o,R as a,a as i,c as l,b as c,d,e as m,m as u,f as p,t as f,g as h,h as y,j as E,k as _,l as v,n as g,o as w,p as $,q as x,u as A,v as b,x as P,y as S}from"./vendor.ebf47bb2.js";let j;const L={},C=function(e,t){if(!t)return e();if(void 0===j){const e=document.createElement("link").relList;j=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in L)return;L[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":j,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))};function D(){return e(this,null,(function*(){const t=Date.now();return yield function(t){return e(this,null,(function*(){const e=(new TextEncoder).encode(t),r=yield crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(r)).map((e=>e.toString(16).padStart(2,"0"))).join("")}))}(t)}))}const R={"/":t({asyncComponent:()=>C((()=>import("./index.313c93c3.js")),["https://donnisnoni.github.io/simple-form-builder/assets/index.313c93c3.js","https://donnisnoni.github.io/simple-form-builder/assets/vendor.ebf47bb2.js","https://donnisnoni.github.io/simple-form-builder/assets/store.2ec8844c.js"])}),"/form/:id":t({asyncComponent:()=>C((()=>import("./form-view.98b00764.js")),["https://donnisnoni.github.io/simple-form-builder/assets/form-view.98b00764.js","https://donnisnoni.github.io/simple-form-builder/assets/vendor.ebf47bb2.js","https://donnisnoni.github.io/simple-form-builder/assets/store.2ec8844c.js","https://donnisnoni.github.io/simple-form-builder/assets/shared.93fd17fc.js"])}),"/form/edit/new/":t({asyncComponent:()=>null,conditions:[()=>e(this,null,(function*(){const e=yield D();return r("/form/edit/"+e),!1}))]}),"/form/edit/:id":t({asyncComponent:()=>C((()=>import("./form-editor.987548e7.js")),["https://donnisnoni.github.io/simple-form-builder/assets/form-editor.987548e7.js","https://donnisnoni.github.io/simple-form-builder/assets/form-editor.d7319231.css","https://donnisnoni.github.io/simple-form-builder/assets/vendor.ebf47bb2.js","https://donnisnoni.github.io/simple-form-builder/assets/store.2ec8844c.js","https://donnisnoni.github.io/simple-form-builder/assets/shared.93fd17fc.js"])})};function k(e){let t,r,n,s,o;return{c(){t=p("header"),r=p("a"),n=f("Simple Form Builder"),this.h()},l(e){t=h(e,"HEADER",{class:!0});var s=y(t);r=h(s,"A",{class:!0,href:!0});var o=y(r);n=E(o,"Simple Form Builder"),o.forEach(_),s.forEach(_),this.h()},h(){v(r,"class","app-name"),v(r,"href","/"),v(t,"class","text-white main-header margin-page")},m(e,a){m(e,t,a),g(t,r),g(r,n),s||(o=w($.call(null,r)),s=!0)},d(e){e&&_(t),s=!1,o()}}}function O(e){let t,r,n,s=e[0].startsWith("/form/edit")||"/"===e[0],o=s&&k();return r=new a({props:{routes:R}}),{c(){o&&o.c(),t=i(),l(r.$$.fragment)},l(e){o&&o.l(e),t=c(e),d(r.$$.fragment,e)},m(e,s){o&&o.m(e,s),m(e,t,s),u(r,e,s),n=!0},p(e,[r]){1&r&&(s=e[0].startsWith("/form/edit")||"/"===e[0]),s?o||(o=k(),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},i(e){n||(x(r.$$.fragment,e),n=!0)},o(e){A(r.$$.fragment,e),n=!1},d(e){o&&o.d(e),e&&_(t),b(r,e)}}}function T(e,t,r){let n;return P(e,S,(e=>r(0,n=e))),[n]}new class extends n{constructor(e){super(),s(this,e,T,O,o,{})}}({target:document.body});export{D as g};
