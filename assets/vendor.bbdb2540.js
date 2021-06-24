var t=Object.defineProperty,n=Object.defineProperties,e=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(n,e,o)=>e in n?t(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,c=(t,n)=>{for(var e in n||(n={}))r.call(n,e)&&s(t,e,n[e]);if(o)for(var e of o(n))i.call(n,e)&&s(t,e,n[e]);return t},a=(t,n,e)=>new Promise(((o,r)=>{var i=t=>{try{c(e.next(t))}catch(n){r(n)}},s=t=>{try{c(e.throw(t))}catch(n){r(n)}},c=t=>t.done?o(t.value):Promise.resolve(t.value).then(i,s);c((e=e.apply(t,n)).next())}));function l(){}function u(t,n){for(const e in n)t[e]=n[e];return t}function f(t){return t()}function d(){return Object.create(null)}function h(t){t.forEach(f)}function p(t){return"function"==typeof t}function m(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function g(t,...n){if(null==t)return l;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function _(t,n,e){t.$$.on_destroy.push(g(n,e))}function y(t,n,e,o){if(t){const r=$(t,n,e,o);return t[0](r)}}function $(t,n,e,o){return t[1]&&o?u(e.ctx.slice(),t[1](o(n))):e.ctx}function b(t,n,e,o,r,i,s){const c=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,i);if(c){const r=$(n,e,o,s);t.p(r,c)}}function v(t){return t&&p(t.destroy)?t.destroy:l}let w,x=!1;function E(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function k(t,n){x?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let a=0;a<n.length;a++){const t=E(1,r+1,(t=>n[e[t]].claim_order),n[a].claim_order)-1;o[a]=e[t]+1;const i=t+1;e[i]=a,r=Math.max(i,r)}const i=[],s=[];let c=n.length-1;for(let a=e[r]+1;0!=a;a=o[a-1]){for(i.push(n[a-1]);c>=a;c--)s.push(n[c]);c--}for(;c>=0;c--)s.push(n[c]);i.reverse(),s.sort(((t,n)=>t.claim_order-n.claim_order));for(let a=0,l=0;a<s.length;a++){for(;l<i.length&&s[a].claim_order>=i[l].claim_order;)l++;const n=l<i.length?i[l]:null;t.insertBefore(s[a],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function O(t,n,e){x&&!e?k(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function j(t){t.parentNode.removeChild(t)}function A(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function C(t){return document.createElement(t)}function S(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function P(t){return document.createTextNode(t)}function L(){return P(" ")}function N(){return P("")}function I(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function D(t){return function(n){return n.preventDefault(),t.call(this,n)}}function q(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function R(t,n,e){const o=new Set;for(let r=0;r<t.length;r+=1)t[r].checked&&o.add(t[r].__value);return e||o.delete(n),Array.from(o)}function T(t){return Array.from(t.childNodes)}function Y(t,n,e,o,r=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i))return e(i),t.splice(o,1),r||(t.claim_info.last_index=o),i}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i))return e(i),t.splice(o,1),r?t.claim_info.last_index--:t.claim_info.last_index=o,i}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function M(t,n,e,o){return Y(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?S(n):C(n)))}function X(t,n){return Y(t,(t=>3===t.nodeType),(t=>{t.data=""+n}),(()=>P(n)),!0)}function B(t){return X(t," ")}function F(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function z(t,n){t.value=null==n?"":n}function U(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function W(t,n,e){t.classList[e?"add":"remove"](n)}function G(t){w=t}function H(){if(!w)throw new Error("Function called outside component initialization");return w}function J(t){H().$$.on_mount.push(t)}function K(t){H().$$.on_destroy.push(t)}function Q(){const t=H();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}function V(t,n){H().$$.context.set(t,n)}function Z(t){return H().$$.context.get(t)}function tt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const nt=[],et=[],ot=[],rt=[],it=Promise.resolve();let st=!1;function ct(){st||(st=!0,it.then(ht))}function at(){return ct(),it}function lt(t){ot.push(t)}function ut(t){rt.push(t)}let ft=!1;const dt=new Set;function ht(){if(!ft){ft=!0;do{for(let t=0;t<nt.length;t+=1){const n=nt[t];G(n),pt(n.$$)}for(G(null),nt.length=0;et.length;)et.pop()();for(let t=0;t<ot.length;t+=1){const n=ot[t];dt.has(n)||(dt.add(n),n())}ot.length=0}while(nt.length);for(;rt.length;)rt.pop()();st=!1,ft=!1,dt.clear()}}function pt(t){if(null!==t.fragment){t.update(),h(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(lt)}}const mt=new Set;let gt;function _t(){gt={r:0,c:[],p:gt}}function yt(){gt.r||h(gt.c),gt=gt.p}function $t(t,n){t&&t.i&&(mt.delete(t),t.i(n))}function bt(t,n,e,o){if(t&&t.o){if(mt.has(t))return;mt.add(t),gt.c.push((()=>{mt.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function vt(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const s=t[i],c=n[i];if(c){for(const t in s)t in c||(o[t]=1);for(const t in c)r[t]||(e[t]=c[t],r[t]=1);t[i]=c}else for(const t in s)r[t]=1}for(const s in o)s in e||(e[s]=void 0);return e}function wt(t){return"object"==typeof t&&null!==t?t:{}}function xt(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}function Et(t){t&&t.c()}function kt(t,n){t&&t.l(n)}function Ot(t,n,e,o){const{fragment:r,on_mount:i,on_destroy:s,after_update:c}=t.$$;r&&r.m(n,e),o||lt((()=>{const n=i.map(f).filter(p);s?s.push(...n):h(n),t.$$.on_mount=[]})),c.forEach(lt)}function jt(t,n){const e=t.$$;null!==e.fragment&&(h(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function At(t,n,e,o,r,i,s=[-1]){const c=w;G(t);const a=t.$$={fragment:null,ctx:null,props:i,update:l,not_equal:r,bound:d(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:n.context||[]),callbacks:d(),dirty:s,skip_bound:!1};let u=!1;if(a.ctx=e?e(t,n.props||{},((n,e,...o)=>{const i=o.length?o[0]:e;return a.ctx&&r(a.ctx[n],a.ctx[n]=i)&&(!a.skip_bound&&a.bound[n]&&a.bound[n](i),u&&function(t,n){-1===t.$$.dirty[0]&&(nt.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(t,n)),e})):[],a.update(),u=!0,h(a.before_update),a.fragment=!!o&&o(a.ctx),n.target){if(n.hydrate){x=!0;const t=T(n.target);a.fragment&&a.fragment.l(t),t.forEach(j)}else a.fragment&&a.fragment.c();n.intro&&$t(t.$$.fragment),Ot(t,n.target,n.anchor,n.customElement),x=!1,ht()}G(c)}class Ct{$destroy(){jt(this,1),this.$destroy=l}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function St(t){if(!t)throw Error("Parameter args is required");if(!t.component==!t.asyncComponent)throw Error("One and only one of component and asyncComponent is required");if(t.component&&(t.asyncComponent=()=>Promise.resolve(t.component)),"function"!=typeof t.asyncComponent)throw Error("Parameter asyncComponent must be a function");if(t.conditions){Array.isArray(t.conditions)||(t.conditions=[t.conditions]);for(let n=0;n<t.conditions.length;n++)if(!t.conditions[n]||"function"!=typeof t.conditions[n])throw Error("Invalid parameter conditions["+n+"]")}t.loadingComponent&&(t.asyncComponent.loading=t.loadingComponent,t.asyncComponent.loadingParams=t.loadingParams||void 0);return{component:t.asyncComponent,userData:t.userData,conditions:t.conditions&&t.conditions.length?t.conditions:void 0,props:t.props&&Object.keys(t.props).length?t.props:{},_sveltesparouter:!0}}const Pt=[];function Lt(t,n){return{subscribe:Nt(t,n).subscribe}}function Nt(t,n=l){let e;const o=[];function r(n){if(m(t,n)&&(t=n,e)){const n=!Pt.length;for(let e=0;e<o.length;e+=1){const n=o[e];n[1](),Pt.push(n,t)}if(n){for(let t=0;t<Pt.length;t+=2)Pt[t][0](Pt[t+1]);Pt.length=0}}}return{set:r,update:function(n){r(n(t))},subscribe:function(i,s=l){const c=[i,s];return o.push(c),1===o.length&&(e=n(r)||l),i(t),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(e(),e=null)}}}}function It(t,n,e){const o=!Array.isArray(t),r=o?[t]:t,i=n.length<2;return Lt(e,(t=>{let e=!1;const s=[];let c=0,a=l;const u=()=>{if(c)return;a();const e=n(o?s[0]:s,t);i?t(e):a=p(e)?e:l},f=r.map(((t,n)=>g(t,(t=>{s[n]=t,c&=~(1<<n),e&&u()}),(()=>{c|=1<<n}))));return e=!0,u(),function(){h(f),a()}}))}function Dt(t){let n,e,o;const r=[t[2]];var i=t[0];function s(t){let n={};for(let e=0;e<r.length;e+=1)n=u(n,r[e]);return{props:n}}return i&&(n=new i(s()),n.$on("routeEvent",t[7])),{c(){n&&Et(n.$$.fragment),e=N()},l(t){n&&kt(n.$$.fragment,t),e=N()},m(t,r){n&&Ot(n,t,r),O(t,e,r),o=!0},p(t,o){const c=4&o?vt(r,[wt(t[2])]):{};if(i!==(i=t[0])){if(n){_t();const t=n;bt(t.$$.fragment,1,0,(()=>{jt(t,1)})),yt()}i?(n=new i(s()),n.$on("routeEvent",t[7]),Et(n.$$.fragment),$t(n.$$.fragment,1),Ot(n,e.parentNode,e)):n=null}else i&&n.$set(c)},i(t){o||(n&&$t(n.$$.fragment,t),o=!0)},o(t){n&&bt(n.$$.fragment,t),o=!1},d(t){t&&j(e),n&&jt(n,t)}}}function qt(t){let n,e,o;const r=[{params:t[1]},t[2]];var i=t[0];function s(t){let n={};for(let e=0;e<r.length;e+=1)n=u(n,r[e]);return{props:n}}return i&&(n=new i(s()),n.$on("routeEvent",t[6])),{c(){n&&Et(n.$$.fragment),e=N()},l(t){n&&kt(n.$$.fragment,t),e=N()},m(t,r){n&&Ot(n,t,r),O(t,e,r),o=!0},p(t,o){const c=6&o?vt(r,[2&o&&{params:t[1]},4&o&&wt(t[2])]):{};if(i!==(i=t[0])){if(n){_t();const t=n;bt(t.$$.fragment,1,0,(()=>{jt(t,1)})),yt()}i?(n=new i(s()),n.$on("routeEvent",t[6]),Et(n.$$.fragment),$t(n.$$.fragment,1),Ot(n,e.parentNode,e)):n=null}else i&&n.$set(c)},i(t){o||(n&&$t(n.$$.fragment,t),o=!0)},o(t){n&&bt(n.$$.fragment,t),o=!1},d(t){t&&j(e),n&&jt(n,t)}}}function Rt(t){let n,e,o,r;const i=[qt,Dt],s=[];function c(t,n){return t[1]?0:1}return n=c(t),e=s[n]=i[n](t),{c(){e.c(),o=N()},l(t){e.l(t),o=N()},m(t,e){s[n].m(t,e),O(t,o,e),r=!0},p(t,[r]){let a=n;n=c(t),n===a?s[n].p(t,r):(_t(),bt(s[a],1,1,(()=>{s[a]=null})),yt(),e=s[n],e?e.p(t,r):(e=s[n]=i[n](t),e.c()),$t(e,1),e.m(o.parentNode,o))},i(t){r||($t(e),r=!0)},o(t){bt(e),r=!1},d(t){s[n].d(t),t&&j(o)}}}function Tt(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let o="";return e>-1&&(o=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:o}}const Yt=Lt(null,(function(t){t(Tt());const n=()=>{t(Tt())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}})),Mt=It(Yt,(t=>t.location));It(Yt,(t=>t.querystring));const Xt=Nt(void 0);function Bt(t){return a(this,null,(function*(){if(!t||t.length<1||"/"!=t.charAt(0)&&0!==t.indexOf("#/"))throw Error("Invalid parameter location");yield at();const n=("#"==t.charAt(0)?"":"#")+t;try{const t=c({},history.state);delete t.__svelte_spa_router_scrollX,delete t.__svelte_spa_router_scrollY,window.history.replaceState(t,void 0,n)}catch(e){console.warn("Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment.")}window.dispatchEvent(new Event("hashchange"))}))}function Ft(t,n){if(n=Ut(n),!t||!t.tagName||"a"!=t.tagName.toLowerCase())throw Error('Action "link" can only be used with <a> tags');return zt(t,n),{update(n){n=Ut(n),zt(t,n)}}}function zt(t,o){let r=o.href||t.getAttribute("href");if(r&&"/"==r.charAt(0))r="#"+r;else if(!r||r.length<2||"#/"!=r.slice(0,2))throw Error('Invalid value for "href" attribute: '+r);t.setAttribute("href",r),t.addEventListener("click",(t=>{t.preventDefault(),o.disabled||function(t){history.replaceState((o=c({},history.state),r={__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},n(o,e(r))),void 0,void 0),window.location.hash=t;var o,r}(t.currentTarget.getAttribute("href"))}))}function Ut(t){return t&&"string"==typeof t?{href:t}:t||{}}function Wt(t,n,e){let{routes:o={}}=n,{prefix:r=""}=n,{restoreScrollState:i=!1}=n;class s{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:e,keys:o}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,o,r,i,s=[],c="",a=t.split("/");for(a[0]||a.shift();r=a.shift();)"*"===(e=r[0])?(s.push("wild"),c+="/(.*)"):":"===e?(o=r.indexOf("?",1),i=r.indexOf(".",1),s.push(r.substring(1,~o?o:~i?i:r.length)),c+=~o&&!~i?"(?:/([^/]+?))?":"/([^/]+?)",~i&&(c+=(~o?"?":"")+"\\"+r.substring(i))):c+="/"+r;return{keys:s,pattern:new RegExp("^"+c+(n?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.component,this.conditions=n.conditions||[],this.userData=n.userData,this.props=n.props||{}):(this.component=()=>Promise.resolve(n),this.conditions=[],this.props={}),this._pattern=e,this._keys=o}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const n=t.match(r);if(!n||!n[0])return null;t=t.substr(n[0].length)||"/"}const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let o=0;for(;o<this._keys.length;){try{e[this._keys[o]]=decodeURIComponent(n[o+1]||"")||null}catch(i){e[this._keys[o]]=null}o++}return e}checkConditions(t){return a(this,null,(function*(){for(let n=0;n<this.conditions.length;n++)if(!(yield this.conditions[n](t)))return!1;return!0}))}}const c=[];o instanceof Map?o.forEach(((t,n)=>{c.push(new s(n,t))})):Object.keys(o).forEach((t=>{c.push(new s(t,o[t]))}));let l=null,u=null,f={};const d=Q();function h(t,n){return a(this,null,(function*(){yield at(),d(t,n)}))}let p=null,m=null;var g;i&&(m=t=>{p=t.state&&t.state.__svelte_spa_router_scrollY?t.state:null},window.addEventListener("popstate",m),g=()=>{p?window.scrollTo(p.__svelte_spa_router_scrollX,p.__svelte_spa_router_scrollY):window.scrollTo(0,0)},H().$$.after_update.push(g));let _=null,y=null;const $=Yt.subscribe((t=>a(this,null,(function*(){_=t;let n=0;for(;n<c.length;){const o=c[n].match(t.location);if(!o){n++;continue}const r={route:c[n].path,location:t.location,querystring:t.querystring,userData:c[n].userData,params:o&&"object"==typeof o&&Object.keys(o).length?o:null};if(!(yield c[n].checkConditions(r)))return e(0,l=null),y=null,void h("conditionsFailed",r);h("routeLoading",Object.assign({},r));const i=c[n].component;if(y!=i){i.loading?(e(0,l=i.loading),y=i,e(1,u=i.loadingParams),e(2,f={}),h("routeLoaded",Object.assign({},r,{component:l,name:l.name,params:u}))):(e(0,l=null),y=null);const n=yield i();if(t!=_)return;e(0,l=n&&n.default||n),y=i}return o&&"object"==typeof o&&Object.keys(o).length?e(1,u=o):e(1,u=null),e(2,f=c[n].props),void h("routeLoaded",Object.assign({},r,{component:l,name:l.name,params:u})).then((()=>{Xt.set(u)}))}e(0,l=null),y=null,Xt.set(void 0)}))));return K((()=>{$(),m&&window.removeEventListener("popstate",m)})),t.$$set=t=>{"routes"in t&&e(3,o=t.routes),"prefix"in t&&e(4,r=t.prefix),"restoreScrollState"in t&&e(5,i=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=i?"manual":"auto")},[l,u,f,o,r,i,function(n){tt.call(this,t,n)},function(n){tt.call(this,t,n)}]}class Gt extends Ct{constructor(t){super(),At(this,t,Wt,Rt,m,{routes:3,prefix:4,restoreScrollState:5})}}export{A,S as B,l as C,Nt as D,N as E,yt as F,J as G,_t as H,U as I,z as J,I as K,D as L,h as M,et as N,xt as O,ut as P,R as Q,Gt as R,Ct as S,Q as T,W as U,y as V,b as W,V as X,K as Y,Z,at as _,L as a,B as b,Et as c,kt as d,O as e,C as f,M as g,T as h,At as i,X as j,j as k,q as l,Ot as m,k as n,v as o,Ft as p,$t as q,Bt as r,m as s,P as t,bt as u,jt as v,St as w,_ as x,Mt as y,F as z};
