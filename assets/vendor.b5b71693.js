var t=Object.defineProperty,n=Object.defineProperties,e=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(n,e,o)=>e in n?t(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,c=(t,n)=>{for(var e in n||(n={}))r.call(n,e)&&i(t,e,n[e]);if(o)for(var e of o(n))s.call(n,e)&&i(t,e,n[e]);return t},a=(t,n,e)=>new Promise(((o,r)=>{var s=t=>{try{c(e.next(t))}catch(n){r(n)}},i=t=>{try{c(e.throw(t))}catch(n){r(n)}},c=t=>t.done?o(t.value):Promise.resolve(t.value).then(s,i);c((e=e.apply(t,n)).next())}));function u(){}function l(t,n){for(const e in n)t[e]=n[e];return t}function f(t){return t()}function p(){return Object.create(null)}function d(t){t.forEach(f)}function h(t){return"function"==typeof t}function m(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function g(t,...n){if(null==t)return u;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function y(t,n,e){t.$$.on_destroy.push(g(n,e))}function $(t,n,e,o){if(t){const r=b(t,n,e,o);return t[0](r)}}function b(t,n,e,o){return t[1]&&o?l(e.ctx.slice(),t[1](o(n))):e.ctx}function v(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function w(t,n,e,o,r,s){if(r){const i=b(n,e,o,s);t.p(i,r)}}function _(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function E(t){return t&&h(t.destroy)?t.destroy:u}function x(t,n){t.appendChild(n)}function k(t,n,e){t.insertBefore(n,e||null)}function O(t){t.parentNode.removeChild(t)}function j(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function C(t){return document.createElement(t)}function A(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function P(t){return document.createTextNode(t)}function S(){return P(" ")}function L(){return P("")}function D(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function N(t){return function(n){return n.preventDefault(),t.call(this,n)}}function I(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function q(t,n,e){const o=new Set;for(let r=0;r<t.length;r+=1)t[r].checked&&o.add(t[r].__value);return e||o.delete(n),Array.from(o)}function R(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function T(t,n){t.value=null==n?"":n}function X(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function Y(t,n,e){t.classList[e?"add":"remove"](n)}let z;function M(t){z=t}function F(){if(!z)throw new Error("Function called outside component initialization");return z}function B(t){F().$$.on_mount.push(t)}function U(t){F().$$.on_destroy.push(t)}function W(){const t=F();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}function G(t,n){F().$$.context.set(t,n)}function H(t){return F().$$.context.get(t)}function J(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const K=[],Q=[],V=[],Z=[],tt=Promise.resolve();let nt=!1;function et(){nt||(nt=!0,tt.then(at))}function ot(){return et(),tt}function rt(t){V.push(t)}function st(t){Z.push(t)}let it=!1;const ct=new Set;function at(){if(!it){it=!0;do{for(let t=0;t<K.length;t+=1){const n=K[t];M(n),ut(n.$$)}for(M(null),K.length=0;Q.length;)Q.pop()();for(let t=0;t<V.length;t+=1){const n=V[t];ct.has(n)||(ct.add(n),n())}V.length=0}while(K.length);for(;Z.length;)Z.pop()();nt=!1,it=!1,ct.clear()}}function ut(t){if(null!==t.fragment){t.update(),d(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(rt)}}const lt=new Set;let ft;function pt(){ft={r:0,c:[],p:ft}}function dt(){ft.r||d(ft.c),ft=ft.p}function ht(t,n){t&&t.i&&(lt.delete(t),t.i(n))}function mt(t,n,e,o){if(t&&t.o){if(lt.has(t))return;lt.add(t),ft.c.push((()=>{lt.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function gt(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=n[s];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)r[t]||(e[t]=c[t],r[t]=1);t[s]=c}else for(const t in i)r[t]=1}for(const i in o)i in e||(e[i]=void 0);return e}function yt(t){return"object"==typeof t&&null!==t?t:{}}function $t(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}function bt(t){t&&t.c()}function vt(t,n,e,o){const{fragment:r,on_mount:s,on_destroy:i,after_update:c}=t.$$;r&&r.m(n,e),o||rt((()=>{const n=s.map(f).filter(h);i?i.push(...n):d(n),t.$$.on_mount=[]})),c.forEach(rt)}function wt(t,n){const e=t.$$;null!==e.fragment&&(d(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function _t(t,n,e,o,r,s,i,c=[-1]){const a=z;M(t);const l=t.$$={fragment:null,ctx:null,props:s,update:u,not_equal:r,bound:p(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(a?a.$$.context:[])),callbacks:p(),dirty:c,skip_bound:!1,root:n.target||a.$$.root};i&&i(l.root);let f=!1;if(l.ctx=e?e(t,n.props||{},((n,e,...o)=>{const s=o.length?o[0]:e;return l.ctx&&r(l.ctx[n],l.ctx[n]=s)&&(!l.skip_bound&&l.bound[n]&&l.bound[n](s),f&&function(t,n){-1===t.$$.dirty[0]&&(K.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(t,n)),e})):[],l.update(),f=!0,d(l.before_update),l.fragment=!!o&&o(l.ctx),n.target){if(n.hydrate){const t=(h=n.target,Array.from(h.childNodes));l.fragment&&l.fragment.l(t),t.forEach(O)}else l.fragment&&l.fragment.c();n.intro&&ht(t.$$.fragment),vt(t,n.target,n.anchor,n.customElement),at()}var h;M(a)}class Et{$destroy(){wt(this,1),this.$destroy=u}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function xt(t){if(!t)throw Error("Parameter args is required");if(!t.component==!t.asyncComponent)throw Error("One and only one of component and asyncComponent is required");if(t.component&&(t.asyncComponent=()=>Promise.resolve(t.component)),"function"!=typeof t.asyncComponent)throw Error("Parameter asyncComponent must be a function");if(t.conditions){Array.isArray(t.conditions)||(t.conditions=[t.conditions]);for(let n=0;n<t.conditions.length;n++)if(!t.conditions[n]||"function"!=typeof t.conditions[n])throw Error("Invalid parameter conditions["+n+"]")}t.loadingComponent&&(t.asyncComponent.loading=t.loadingComponent,t.asyncComponent.loadingParams=t.loadingParams||void 0);return{component:t.asyncComponent,userData:t.userData,conditions:t.conditions&&t.conditions.length?t.conditions:void 0,props:t.props&&Object.keys(t.props).length?t.props:{},_sveltesparouter:!0}}const kt=[];function Ot(t,n){return{subscribe:jt(t,n).subscribe}}function jt(t,n=u){let e;const o=new Set;function r(n){if(m(t,n)&&(t=n,e)){const n=!kt.length;for(const e of o)e[1](),kt.push(e,t);if(n){for(let t=0;t<kt.length;t+=2)kt[t][0](kt[t+1]);kt.length=0}}}return{set:r,update:function(n){r(n(t))},subscribe:function(s,i=u){const c=[s,i];return o.add(c),1===o.size&&(e=n(r)||u),s(t),()=>{o.delete(c),0===o.size&&(e(),e=null)}}}}function Ct(t,n,e){const o=!Array.isArray(t),r=o?[t]:t,s=n.length<2;return Ot(e,(t=>{let e=!1;const i=[];let c=0,a=u;const l=()=>{if(c)return;a();const e=n(o?i[0]:i,t);s?t(e):a=h(e)?e:u},f=r.map(((t,n)=>g(t,(t=>{i[n]=t,c&=~(1<<n),e&&l()}),(()=>{c|=1<<n}))));return e=!0,l(),function(){d(f),a()}}))}function At(t){let n,e,o;const r=[t[2]];var s=t[0];function i(t){let n={};for(let e=0;e<r.length;e+=1)n=l(n,r[e]);return{props:n}}return s&&(n=new s(i()),n.$on("routeEvent",t[7])),{c(){n&&bt(n.$$.fragment),e=L()},m(t,r){n&&vt(n,t,r),k(t,e,r),o=!0},p(t,o){const c=4&o?gt(r,[yt(t[2])]):{};if(s!==(s=t[0])){if(n){pt();const t=n;mt(t.$$.fragment,1,0,(()=>{wt(t,1)})),dt()}s?(n=new s(i()),n.$on("routeEvent",t[7]),bt(n.$$.fragment),ht(n.$$.fragment,1),vt(n,e.parentNode,e)):n=null}else s&&n.$set(c)},i(t){o||(n&&ht(n.$$.fragment,t),o=!0)},o(t){n&&mt(n.$$.fragment,t),o=!1},d(t){t&&O(e),n&&wt(n,t)}}}function Pt(t){let n,e,o;const r=[{params:t[1]},t[2]];var s=t[0];function i(t){let n={};for(let e=0;e<r.length;e+=1)n=l(n,r[e]);return{props:n}}return s&&(n=new s(i()),n.$on("routeEvent",t[6])),{c(){n&&bt(n.$$.fragment),e=L()},m(t,r){n&&vt(n,t,r),k(t,e,r),o=!0},p(t,o){const c=6&o?gt(r,[2&o&&{params:t[1]},4&o&&yt(t[2])]):{};if(s!==(s=t[0])){if(n){pt();const t=n;mt(t.$$.fragment,1,0,(()=>{wt(t,1)})),dt()}s?(n=new s(i()),n.$on("routeEvent",t[6]),bt(n.$$.fragment),ht(n.$$.fragment,1),vt(n,e.parentNode,e)):n=null}else s&&n.$set(c)},i(t){o||(n&&ht(n.$$.fragment,t),o=!0)},o(t){n&&mt(n.$$.fragment,t),o=!1},d(t){t&&O(e),n&&wt(n,t)}}}function St(t){let n,e,o,r;const s=[Pt,At],i=[];function c(t,n){return t[1]?0:1}return n=c(t),e=i[n]=s[n](t),{c(){e.c(),o=L()},m(t,e){i[n].m(t,e),k(t,o,e),r=!0},p(t,[r]){let a=n;n=c(t),n===a?i[n].p(t,r):(pt(),mt(i[a],1,1,(()=>{i[a]=null})),dt(),e=i[n],e?e.p(t,r):(e=i[n]=s[n](t),e.c()),ht(e,1),e.m(o.parentNode,o))},i(t){r||(ht(e),r=!0)},o(t){mt(e),r=!1},d(t){i[n].d(t),t&&O(o)}}}function Lt(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let o="";return e>-1&&(o=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:o}}const Dt=Ot(null,(function(t){t(Lt());const n=()=>{t(Lt())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}})),Nt=Ct(Dt,(t=>t.location));Ct(Dt,(t=>t.querystring));const It=jt(void 0);function qt(t){return a(this,null,(function*(){if(!t||t.length<1||"/"!=t.charAt(0)&&0!==t.indexOf("#/"))throw Error("Invalid parameter location");yield ot();const n=("#"==t.charAt(0)?"":"#")+t;try{const t=c({},history.state);delete t.__svelte_spa_router_scrollX,delete t.__svelte_spa_router_scrollY,window.history.replaceState(t,void 0,n)}catch(e){console.warn("Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment.")}window.dispatchEvent(new Event("hashchange"))}))}function Rt(t,n){if(n=Xt(n),!t||!t.tagName||"a"!=t.tagName.toLowerCase())throw Error('Action "link" can only be used with <a> tags');return Tt(t,n),{update(n){n=Xt(n),Tt(t,n)}}}function Tt(t,o){let r=o.href||t.getAttribute("href");if(r&&"/"==r.charAt(0))r="#"+r;else if(!r||r.length<2||"#/"!=r.slice(0,2))throw Error('Invalid value for "href" attribute: '+r);t.setAttribute("href",r),t.addEventListener("click",(t=>{t.preventDefault(),o.disabled||function(t){history.replaceState((o=c({},history.state),r={__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},n(o,e(r))),void 0,void 0),window.location.hash=t;var o,r}(t.currentTarget.getAttribute("href"))}))}function Xt(t){return t&&"string"==typeof t?{href:t}:t||{}}function Yt(t,n,e){let{routes:o={}}=n,{prefix:r=""}=n,{restoreScrollState:s=!1}=n;class i{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:e,keys:o}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,o,r,s,i=[],c="",a=t.split("/");for(a[0]||a.shift();r=a.shift();)"*"===(e=r[0])?(i.push("wild"),c+="/(.*)"):":"===e?(o=r.indexOf("?",1),s=r.indexOf(".",1),i.push(r.substring(1,~o?o:~s?s:r.length)),c+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(c+=(~o?"?":"")+"\\"+r.substring(s))):c+="/"+r;return{keys:i,pattern:new RegExp("^"+c+(n?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.component,this.conditions=n.conditions||[],this.userData=n.userData,this.props=n.props||{}):(this.component=()=>Promise.resolve(n),this.conditions=[],this.props={}),this._pattern=e,this._keys=o}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const n=t.match(r);if(!n||!n[0])return null;t=t.substr(n[0].length)||"/"}const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let o=0;for(;o<this._keys.length;){try{e[this._keys[o]]=decodeURIComponent(n[o+1]||"")||null}catch(s){e[this._keys[o]]=null}o++}return e}checkConditions(t){return a(this,null,(function*(){for(let n=0;n<this.conditions.length;n++)if(!(yield this.conditions[n](t)))return!1;return!0}))}}const c=[];o instanceof Map?o.forEach(((t,n)=>{c.push(new i(n,t))})):Object.keys(o).forEach((t=>{c.push(new i(t,o[t]))}));let u=null,l=null,f={};const p=W();function d(t,n){return a(this,null,(function*(){yield ot(),p(t,n)}))}let h=null,m=null;var g;s&&(m=t=>{h=t.state&&t.state.__svelte_spa_router_scrollY?t.state:null},window.addEventListener("popstate",m),g=()=>{h?window.scrollTo(h.__svelte_spa_router_scrollX,h.__svelte_spa_router_scrollY):window.scrollTo(0,0)},F().$$.after_update.push(g));let y=null,$=null;const b=Dt.subscribe((t=>a(this,null,(function*(){y=t;let n=0;for(;n<c.length;){const o=c[n].match(t.location);if(!o){n++;continue}const r={route:c[n].path,location:t.location,querystring:t.querystring,userData:c[n].userData,params:o&&"object"==typeof o&&Object.keys(o).length?o:null};if(!(yield c[n].checkConditions(r)))return e(0,u=null),$=null,void d("conditionsFailed",r);d("routeLoading",Object.assign({},r));const s=c[n].component;if($!=s){s.loading?(e(0,u=s.loading),$=s,e(1,l=s.loadingParams),e(2,f={}),d("routeLoaded",Object.assign({},r,{component:u,name:u.name,params:l}))):(e(0,u=null),$=null);const n=yield s();if(t!=y)return;e(0,u=n&&n.default||n),$=s}return o&&"object"==typeof o&&Object.keys(o).length?e(1,l=o):e(1,l=null),e(2,f=c[n].props),void d("routeLoaded",Object.assign({},r,{component:u,name:u.name,params:l})).then((()=>{It.set(l)}))}e(0,u=null),$=null,It.set(void 0)}))));return U((()=>{b(),m&&window.removeEventListener("popstate",m)})),t.$$set=t=>{"routes"in t&&e(3,o=t.routes),"prefix"in t&&e(4,r=t.prefix),"restoreScrollState"in t&&e(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[u,l,f,o,r,s,function(n){J.call(this,t,n)},function(n){J.call(this,t,n)}]}class zt extends Et{constructor(t){super(),_t(this,t,Yt,St,m,{routes:3,prefix:4,restoreScrollState:5})}}export{dt as A,B,pt as C,X as D,T as E,D as F,N as G,d as H,Q as I,$t as J,st as K,q as L,W as M,Y as N,$ as O,w as P,_ as Q,zt as R,Et as S,v as T,G as U,U as V,H as W,ot as X,S as a,k as b,bt as c,I as d,C as e,x as f,E as g,O as h,_t as i,mt as j,wt as k,Rt as l,vt as m,y as n,Nt as o,P as p,R as q,qt as r,m as s,ht as t,j as u,A as v,xt as w,u as x,jt as y,L as z};
