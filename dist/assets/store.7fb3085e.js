var _=Object.defineProperty;var F=(t,e,i)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var m=(t,e,i)=>(F(t,typeof e!="symbol"?e+"":e,i),i);import{S as C,i as D,s as Z,r as u,b as r,d as V,f as v,u as H,j as A,p as k,q as z,w as b}from"./index.4fec5e9b.js";var q="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",P="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z",y="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",E="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",T="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z";function w(t){let e,i;return{c(){e=u("title"),i=k(t[5])},m(n,s){V(n,e,s),v(e,i)},p(n,s){s&32&&z(i,n[5])},d(n){n&&A(e)}}}function B(t){let e,i,n,s=t[5]&&w(t);return{c(){e=u("svg"),i=u("path"),s&&s.c(),r(i,"d",t[4]),r(e,"class","c-icon"),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"width",t[0]),r(e,"height",t[1]),r(e,"viewBox",n="0 0 "+t[2]+" "+t[3])},m(a,o){V(a,e,o),v(e,i),s&&s.m(i,null)},p(a,[o]){a[5]?s?s.p(a,o):(s=w(a),s.c(),s.m(i,null)):s&&(s.d(1),s=null),o&16&&r(i,"d",a[4]),o&1&&r(e,"width",a[0]),o&2&&r(e,"height",a[1]),o&12&&n!==(n="0 0 "+a[2]+" "+a[3])&&r(e,"viewBox",n)},i:H,o:H,d(a){a&&A(e),s&&s.d()}}}function O(t,e,i){let{size:n="24px"}=e,{width:s=n}=e,{height:a=n}=e,{viewWidth:o="24"}=e,{viewHeight:h="24"}=e,{path:d=null}=e,{label:g=null}=e;return t.$$set=l=>{"size"in l&&i(6,n=l.size),"width"in l&&i(0,s=l.width),"height"in l&&i(1,a=l.height),"viewWidth"in l&&i(2,o=l.viewWidth),"viewHeight"in l&&i(3,h=l.viewHeight),"path"in l&&i(4,d=l.path),"label"in l&&i(5,g=l.label)},[s,a,o,h,d,g,n]}class G extends C{constructor(e){super(),D(this,e,O,B,Z,{size:6,width:0,height:1,viewWidth:2,viewHeight:3,path:4,label:5})}}class S{constructor(e,i=[]){m(this,"namespace","");this.namespace=e,localStorage.getItem(e)||localStorage.setItem(e,JSON.stringify(i))}getData(){const e=localStorage.getItem(this.namespace);return JSON.parse(e)}setData(e){e&&localStorage.setItem(this.namespace,JSON.stringify(e))}}const f=b([]),c=b([]),I=new S("forms"),L=new S("answers");{const t=I.getData();t&&f.set(t);const e=L.getData();e&&c.set(e)}f.subscribe(t=>I.setData(t));c.subscribe(t=>L.setData(t));function K(t){f.update(e=>[...e,t])}function M(){let t;return f.subscribe(e=>t=e)(),t}function W(t){return M().find(e=>e.id===t)}function Q(t){const e=M(),i=e.findIndex(n=>n.id===t);e.splice(i,1),f.set(e)}function R(t){return!!W(t)}function U(t,e){f.update(i=>{const n=i.findIndex(s=>s.id===t);return i[n]=e,i})}function J(){let t;return c.subscribe(e=>t=e)(),t}function X(t){c.update(e=>[...e,t])}function Y(t,e){const i=J().filter(n=>n.id===t&&n.sessionId===e);return i.length?i[0]:null}export{G as I,X as a,Y as b,q as c,y as d,T as e,f,W as g,P as h,c as i,R as j,K as k,E as m,Q as r,U as u};
