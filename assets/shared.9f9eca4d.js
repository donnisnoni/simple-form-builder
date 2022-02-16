import{S as L,i as z,s as B,e as q,d as f,b as F,x as E,h as S,c as Q,m as U,t as I,j as R,k as W,p as T,a as C,f as c,q as j,C as X,A as Y,E as A,F as V,D as y,u as $,L as H}from"./vendor.1df5d486.js";function x(l){let e;return{c(){e=q("span"),e.textContent="*",f(e,"class","text-red-600 font-bold p-2 cursor-default"),f(e,"title","This question is required to answer")},m(i,n){F(i,e,n)},p:E,i:E,o:E,d(i){i&&S(e)}}}class Z extends L{constructor(e){super();z(this,e,null,x,B,{})}}function J(l){let e,i;return e=new Z({}),{c(){Q(e.$$.fragment)},m(n,a){U(e,n,a),i=!0},i(n){i||(I(e.$$.fragment,n),i=!0)},o(n){R(e.$$.fragment,n),i=!1},d(n){W(e,n)}}}function ee(l){let e,i,n,a;return{c(){e=q("input"),f(e,"class","p-2 mt-2 border border-gray-400"),e.disabled=l[3],f(e,"placeholder","Input your answer"),f(e,"type","text"),e.required=i=l[2].required},m(r,t){F(r,e,t),A(e,l[0]),n||(a=V(e,"input",l[5]),n=!0)},p(r,t){t&8&&(e.disabled=r[3]),t&4&&i!==(i=r[2].required)&&(e.required=i),t&1&&e.value!==r[0]&&A(e,r[0])},d(r){r&&S(e),n=!1,a()}}}function le(l){let e,i,n,a;return{c(){e=q("textarea"),f(e,"class","p-2 mt-2 border border-gray-400"),e.disabled=l[3],f(e,"placeholder","Input your answer"),f(e,"rows","3"),e.required=i=l[2].required},m(r,t){F(r,e,t),A(e,l[0]),n||(a=V(e,"input",l[4]),n=!0)},p(r,t){t&8&&(e.disabled=r[3]),t&4&&i!==(i=r[2].required)&&(e.required=i),t&1&&A(e,r[0])},d(r){r&&S(e),n=!1,a()}}}function ie(l){let e,i,n,a,r,t,u,o=l[2].text+"",s,_,O,k,m=l[2].required&&J();function v(d,h){return d[2].multiline?le:ee}let b=v(l),g=b(l);return{c(){e=q("div"),i=q("div"),n=T(l[1]),a=T("."),r=C(),t=q("div"),u=q("p"),s=T(o),_=C(),m&&m.c(),O=C(),g.c(),f(i,"class","mr-1 text-lg"),f(u,"class","text-lg whitespace-pre"),f(t,"class","flex flex-col flex-1"),f(e,"class","flex p-5 question-selection-type preview")},m(d,h){F(d,e,h),c(e,i),c(i,n),c(i,a),c(e,r),c(e,t),c(t,u),c(u,s),c(u,_),m&&m.m(u,null),c(t,O),g.m(t,null),k=!0},p(d,[h]){(!k||h&2)&&j(n,d[1]),(!k||h&4)&&o!==(o=d[2].text+"")&&j(s,o),d[2].required?m?h&4&&I(m,1):(m=J(),m.c(),I(m,1),m.m(u,null)):m&&(X(),R(m,1,1,()=>{m=null}),Y()),b===(b=v(d))&&g?g.p(d,h):(g.d(1),g=b(d),g&&(g.c(),g.m(t,null)))},i(d){k||(I(m),k=!0)},o(d){R(m),k=!1},d(d){d&&S(e),m&&m.d(),g.d()}}}function te(l,e,i){let{number:n}=e,{question:a}=e,{answer:r=""}=e,{disabled:t=!0}=e;function u(){r=this.value,i(0,r)}function o(){r=this.value,i(0,r)}return l.$$set=s=>{"number"in s&&i(1,n=s.number),"question"in s&&i(2,a=s.question),"answer"in s&&i(0,r=s.answer),"disabled"in s&&i(3,t=s.disabled)},[r,n,a,t,u,o]}class _e extends L{constructor(e){super();z(this,e,te,ie,B,{number:1,question:2,answer:0,disabled:3})}}function K(l,e,i){const n=l.slice();return n[11]=e[i],n}function M(l){let e,i;return e=new Z({}),{c(){Q(e.$$.fragment)},m(n,a){U(e,n,a),i=!0},i(n){i||(I(e.$$.fragment,n),i=!0)},o(n){R(e.$$.fragment,n),i=!1},d(n){W(e,n)}}}function ne(l){let e,i,n,a,r,t;return{c(){e=q("input"),f(e,"class","inline-block mr-2"),f(e,"type","radio"),f(e,"name",i="option--"+l[2]),e.disabled=l[3],e.__value=n=l[11],e.value=e.__value,e.required=a=l[1].required,l[7][0].push(e)},m(u,o){F(u,e,o),e.checked=e.__value===l[0],r||(t=V(e,"change",l[8]),r=!0)},p(u,o){o&4&&i!==(i="option--"+u[2])&&f(e,"name",i),o&8&&(e.disabled=u[3]),o&2&&n!==(n=u[11])&&(e.__value=n,e.value=e.__value),o&2&&a!==(a=u[1].required)&&(e.required=a),o&1&&(e.checked=e.__value===u[0])},d(u){u&&S(e),l[7][0].splice(l[7][0].indexOf(e),1),r=!1,t()}}}function ue(l){let e,i,n,a,r;return{c(){e=q("input"),f(e,"class","inline-block mr-2"),f(e,"type","checkbox"),f(e,"name",i="option--"+l[2]),e.disabled=l[3],e.__value=n=l[11],e.value=e.__value,l[7][0].push(e)},m(t,u){F(t,e,u),e.checked=~l[0].indexOf(e.__value),a||(r=V(e,"change",l[6]),a=!0)},p(t,u){u&4&&i!==(i="option--"+t[2])&&f(e,"name",i),u&8&&(e.disabled=t[3]),u&2&&n!==(n=t[11])&&(e.__value=n,e.value=e.__value),u&1&&(e.checked=~t[0].indexOf(e.__value))},d(t){t&&S(e),l[7][0].splice(l[7][0].indexOf(e),1),a=!1,r()}}}function N(l){let e,i,n,a=l[11]+"",r;function t(s,_){return s[1].multiple?ue:ne}let u=t(l),o=u(l);return{c(){e=q("label"),o.c(),i=C(),n=q("div"),r=T(a),f(e,"class","flex items-center mb-2 py-1")},m(s,_){F(s,e,_),o.m(e,null),c(e,i),c(e,n),c(n,r)},p(s,_){u===(u=t(s))&&o?o.p(s,_):(o.d(1),o=u(s),o&&(o.c(),o.m(e,i))),_&2&&a!==(a=s[11]+"")&&j(r,a)},d(s){s&&S(e),o.d()}}}function P(l){let e,i,n,a,r,t;function u(_,O){return _[1].multiple?ae:re}let o=u(l),s=o(l);return{c(){e=q("label"),s.c(),i=C(),n=q("input"),f(n,"class","flex-1 p-2 border border-gray-400 "),n.disabled=l[3],f(n,"placeholder","Other"),y(n,"max-width","300px"),n.required=a=l[1].multiple?l[0].includes(l[4]):!l[1].options.includes(l[0]),f(n,"type","text"),f(e,"class","flex items-center mb-2")},m(_,O){F(_,e,O),s.m(e,null),c(e,i),c(e,n),r||(t=V(n,"input",l[5]),r=!0)},p(_,O){o===(o=u(_))&&s?s.p(_,O):(s.d(1),s=o(_),s&&(s.c(),s.m(e,i))),O&8&&(n.disabled=_[3]),O&19&&a!==(a=_[1].multiple?_[0].includes(_[4]):!_[1].options.includes(_[0]))&&(n.required=a)},d(_){_&&S(e),s.d(),r=!1,t()}}}function re(l){let e,i,n,a,r;return{c(){e=q("input"),f(e,"class","inline-block mr-2"),f(e,"type","radio"),e.__value=l[4],e.value=e.__value,f(e,"name",i="option--"+l[2]),e.disabled=l[3],e.required=n=l[1].required,l[7][0].push(e)},m(t,u){F(t,e,u),e.checked=e.__value===l[0],a||(r=V(e,"change",l[10]),a=!0)},p(t,u){u&16&&(e.__value=t[4],e.value=e.__value),u&4&&i!==(i="option--"+t[2])&&f(e,"name",i),u&8&&(e.disabled=t[3]),u&2&&n!==(n=t[1].required)&&(e.required=n),u&1&&(e.checked=e.__value===t[0])},d(t){t&&S(e),l[7][0].splice(l[7][0].indexOf(e),1),a=!1,r()}}}function ae(l){let e,i,n,a,r;return{c(){e=q("input"),f(e,"class","inline-block mr-2"),f(e,"type","checkbox"),e.__value=l[4],e.value=e.__value,f(e,"name",i="option--"+l[2]),e.disabled=l[3],e.required=n=l[1].required,l[7][0].push(e)},m(t,u){F(t,e,u),e.checked=~l[0].indexOf(e.__value),a||(r=V(e,"change",l[9]),a=!0)},p(t,u){u&16&&(e.__value=t[4],e.value=e.__value),u&4&&i!==(i="option--"+t[2])&&f(e,"name",i),u&8&&(e.disabled=t[3]),u&2&&n!==(n=t[1].required)&&(e.required=n),u&1&&(e.checked=~t[0].indexOf(e.__value))},d(t){t&&S(e),l[7][0].splice(l[7][0].indexOf(e),1),a=!1,r()}}}function se(l){let e,i,n,a,r,t,u,o=l[1].text+"",s,_,O,k,m,v,b=l[1].required&&M(),g=l[1].options,d=[];for(let p=0;p<g.length;p+=1)d[p]=N(K(l,g,p));let h=l[1].hasOtherOption&&P(l);return{c(){e=q("div"),i=q("div"),n=T(l[2]),a=T("."),r=C(),t=q("div"),u=q("p"),s=T(o),_=C(),b&&b.c(),O=C(),k=q("div");for(let p=0;p<d.length;p+=1)d[p].c();m=C(),h&&h.c(),f(i,"class","mr-1 text-lg"),f(u,"class","text-lg whitespace-pre"),f(k,"class","flex flex-col mt-2"),f(t,"class","flex-1"),f(e,"class","flex p-5 question-selection-type preview")},m(p,D){F(p,e,D),c(e,i),c(i,n),c(i,a),c(e,r),c(e,t),c(t,u),c(u,s),c(u,_),b&&b.m(u,null),c(t,O),c(t,k);for(let w=0;w<d.length;w+=1)d[w].m(k,null);c(k,m),h&&h.m(k,null),v=!0},p(p,[D]){if((!v||D&4)&&j(n,p[2]),(!v||D&2)&&o!==(o=p[1].text+"")&&j(s,o),p[1].required?b?D&2&&I(b,1):(b=M(),b.c(),I(b,1),b.m(u,null)):b&&(X(),R(b,1,1,()=>{b=null}),Y()),D&15){g=p[1].options;let w;for(w=0;w<g.length;w+=1){const G=K(p,g,w);d[w]?d[w].p(G,D):(d[w]=N(G),d[w].c(),d[w].m(k,m))}for(;w<d.length;w+=1)d[w].d(1);d.length=g.length}p[1].hasOtherOption?h?h.p(p,D):(h=P(p),h.c(),h.m(k,null)):h&&(h.d(1),h=null)},i(p){v||(I(b),v=!0)},o(p){R(b),v=!1},d(p){p&&S(e),b&&b.d(),$(d,p),h&&h.d()}}}function fe(l,e,i){let{question:n}=e,{number:a}=e,{disabled:r=!0}=e,{answer:t=null}=e,u="";n.multiple&&(t=[]);function o({target:v}){i(4,u=v.value),!r&&n.hasOtherOption&&!n.options.includes(t)&&(n.multiple?!t.includes(u)&&!!u&&i(0,t[n.options.length]=u,t):i(0,t=u))}const s=[[]];function _(){t=H(s[0],this.__value,this.checked),i(0,t)}function O(){t=this.__value,i(0,t)}function k(){t=H(s[0],this.__value,this.checked),i(0,t)}function m(){t=this.__value,i(0,t)}return l.$$set=v=>{"question"in v&&i(1,n=v.question),"number"in v&&i(2,a=v.number),"disabled"in v&&i(3,r=v.disabled),"answer"in v&&i(0,t=v.answer)},[t,n,a,r,u,o,_,s,O,k,m]}class de extends L{constructor(e){super();z(this,e,fe,se,B,{question:1,number:2,disabled:3,answer:0})}}const ce={title:"Form without a title",description:"Form description",questions:[],preview:!1};export{ce as D,Z as R,de as S,_e as T};