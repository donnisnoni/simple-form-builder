var e=(e,t,r)=>new Promise(((n,s)=>{var a=e=>{try{i(r.next(e))}catch(t){s(t)}},o=e=>{try{i(r.throw(e))}catch(t){s(t)}},i=e=>e.done?n(e.value):Promise.resolve(e.value).then(a,o);i((r=r.apply(e,t)).next())}));import{w as t,r,S as n,i as s,s as a,R as o,a as i,c,b as l,d,e as m,m as u,f,t as p,g as h,h as y,j as E,k as _,l as v,n as g,o as w,p as $,q as b,u as x,v as A,x as P,y as S}from"./vendor.bbdb2540.js";let j;const L={},C=function(e,t){if(!t)return e();if(void 0===j){const e=document.createElement("link").relList;j=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in L)return;L[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":j,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))};function D(){return e(this,null,(function*(){const t=Date.now();return yield function(t){return e(this,null,(function*(){const e=(new TextEncoder).encode(t),r=yield crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(r)).map((e=>e.toString(16).padStart(2,"0"))).join("")}))}(t)}))}const R={"/":t({asyncComponent:()=>C((()=>import("./index.e8e90cb0.js")),["https://donnisnoni.github.io/simple-form-builder/assets/index.e8e90cb0.js","https://donnisnoni.github.io/simple-form-builder/assets/vendor.bbdb2540.js","https://donnisnoni.github.io/simple-form-builder/assets/store.caa11744.js"])}),"/form/:id":t({asyncComponent:()=>C((()=>import("./form-view.28abc1af.js")),["https://donnisnoni.github.io/simple-form-builder/assets/form-view.28abc1af.js","https://donnisnoni.github.io/simple-form-builder/assets/vendor.bbdb2540.js","https://donnisnoni.github.io/simple-form-builder/assets/store.caa11744.js","https://donnisnoni.github.io/simple-form-builder/assets/shared.f7ff8be4.js"])}),"/form/edit/new/":t({asyncComponent:()=>null,conditions:[()=>e(this,null,(function*(){const e=yield D();return r("/form/edit/"+e),!1}))]}),"/form/edit/:id":t({asyncComponent:()=>C((()=>import("./form-editor.cd527cfb.js")),["https://donnisnoni.github.io/simple-form-builder/assets/form-editor.cd527cfb.js","https://donnisnoni.github.io/simple-form-builder/assets/form-editor.d7319231.css","https://donnisnoni.github.io/simple-form-builder/assets/vendor.bbdb2540.js","https://donnisnoni.github.io/simple-form-builder/assets/store.caa11744.js","https://donnisnoni.github.io/simple-form-builder/assets/shared.f7ff8be4.js"])})};function k(e){let t,r,n,s,a;return{c(){t=f("header"),r=f("a"),n=p("Simple Form Builder"),this.h()},l(e){t=h(e,"HEADER",{class:!0});var s=y(t);r=h(s,"A",{class:!0,href:!0});var a=y(r);n=E(a,"Simple Form Builder"),a.forEach(_),s.forEach(_),this.h()},h(){v(r,"class","app-name"),v(r,"href","/"),v(t,"class","text-white main-header margin-page")},m(e,o){m(e,t,o),g(t,r),g(r,n),s||(a=w($.call(null,r)),s=!0)},d(e){e&&_(t),s=!1,a()}}}function O(e){let t,r,n,s=e[0].startsWith("/form/edit")||"/"===e[0],a=s&&k();return r=new o({props:{routes:R}}),{c(){a&&a.c(),t=i(),c(r.$$.fragment)},l(e){a&&a.l(e),t=l(e),d(r.$$.fragment,e)},m(e,s){a&&a.m(e,s),m(e,t,s),u(r,e,s),n=!0},p(e,[r]){1&r&&(s=e[0].startsWith("/form/edit")||"/"===e[0]),s?a||(a=k(),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},i(e){n||(b(r.$$.fragment,e),n=!0)},o(e){x(r.$$.fragment,e),n=!1},d(e){a&&a.d(e),e&&_(t),A(r,e)}}}function T(e,t,r){let n;return P(e,S,(e=>r(0,n=e))),[n]}new class extends n{constructor(e){super(),s(this,e,T,O,a,{})}}({target:document.body});export{D as g};
