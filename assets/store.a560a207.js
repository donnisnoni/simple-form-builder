var t=Object.defineProperty,e=(e,s,i)=>(((e,s,i)=>{s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i})(e,"symbol"!=typeof s?s+"":s,i),i);import{S as s,i,s as a,y as n,t as r,c as l,b as c,d as h,f as o,j as u,k as d,n as H,h as g,z as V,A as f}from"./index.79adbb0b.js";var w="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",p="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z",b="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",m="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",v="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z";function A(t){let e,s;return{c(){e=n("title"),s=r(t[5])},l(i){e=l(i,"title",{},1);var a=c(e);s=h(a,t[5]),a.forEach(o)},m(t,i){u(t,e,i),d(e,s)},p(t,e){32&e&&H(s,t[5])},d(t){t&&o(e)}}}function x(t){let e,s,i,a=t[5]&&A(t);return{c(){e=n("svg"),s=n("path"),a&&a.c(),this.h()},l(t){e=l(t,"svg",{class:!0,xmlns:!0,width:!0,height:!0,viewBox:!0},1);var i=c(e);s=l(i,"path",{d:!0},1);var n=c(s);a&&a.l(n),n.forEach(o),i.forEach(o),this.h()},h(){g(s,"d",t[4]),g(e,"class","c-icon"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"width",t[0]),g(e,"height",t[1]),g(e,"viewBox",i="0 0 "+t[2]+" "+t[3])},m(t,i){u(t,e,i),d(e,s),a&&a.m(s,null)},p(t,[n]){t[5]?a?a.p(t,n):(a=A(t),a.c(),a.m(s,null)):a&&(a.d(1),a=null),16&n&&g(s,"d",t[4]),1&n&&g(e,"width",t[0]),2&n&&g(e,"height",t[1]),12&n&&i!==(i="0 0 "+t[2]+" "+t[3])&&g(e,"viewBox",i)},i:V,o:V,d(t){t&&o(e),a&&a.d()}}}function M(t,e,s){let{size:i="24px"}=e,{width:a=i}=e,{height:n=i}=e,{viewWidth:r="24"}=e,{viewHeight:l="24"}=e,{path:c=null}=e,{label:h=null}=e;return t.$$set=t=>{"size"in t&&s(6,i=t.size),"width"in t&&s(0,a=t.width),"height"in t&&s(1,n=t.height),"viewWidth"in t&&s(2,r=t.viewWidth),"viewHeight"in t&&s(3,l=t.viewHeight),"path"in t&&s(4,c=t.path),"label"in t&&s(5,h=t.label)},[a,n,r,l,c,h,i]}class I extends s{constructor(t){super(),i(this,t,M,x,a,{size:6,width:0,height:1,viewWidth:2,viewHeight:3,path:4,label:5})}}class S{constructor(t,s=[]){e(this,"namespace",""),this.namespace=t,localStorage.getItem(t)||localStorage.setItem(t,JSON.stringify(s))}getData(){const t=localStorage.getItem(this.namespace);return JSON.parse(t)}setData(t){t&&localStorage.setItem(this.namespace,JSON.stringify(t))}}let y=f([]),D=f([]),L=new S("forms"),z=new S("answers");{const t=L.getData();t&&y.set(t);const e=z.getData();e&&D.set(e)}function Z(t){y.update((e=>[...e,t]))}function j(){let t;return y.subscribe((e=>{t=e}))(),t}function O(t){return j().find((e=>e.id===t))}function W(t){const e=j(),s=e.findIndex((e=>e.id===t));e.splice(s,1),y.set(e)}function B(t){return!!O(t)}function E(t,e){y.update((s=>{const i=s.findIndex((e=>e.id===t));return s[i]=e,s}))}function J(t){D.update((e=>[...e,t]))}function N(t,e){const s=function(){let t;return D.subscribe((e=>{t=e}))(),t}().filter((s=>s.id===t&&s.sessionId===e));return s.length?s[0]:null}y.subscribe((t=>{L.setData(t)})),D.subscribe((t=>{z.setData(t)}));export{I,J as a,N as b,w as c,b as d,v as e,y as f,O as g,p as h,D as i,B as j,Z as k,m,W as r,E as u};