import{S as e,i as l,s,e as t,t as i,c as a,b as n,d as r,f as u,h as c,j as d,k as h,a as o,g as p,n as m,z as v,H as f,I as b,G as _,w as q,O as x}from"./index.79adbb0b.js";function g(e){let l,s;return{c(){l=t("span"),s=i("*"),this.h()},l(e){l=a(e,"SPAN",{class:!0});var t=n(l);s=r(t,"*"),t.forEach(u),this.h()},h(){c(l,"class","text-red-600")},m(e,t){d(e,l,t),h(l,s)},d(e){e&&u(l)}}}function w(e){let l,s,i,n;return{c(){l=t("input"),this.h()},l(e){l=a(e,"INPUT",{class:!0,disabled:!0,placeholder:!0,type:!0,required:!0}),this.h()},h(){c(l,"class","p-2 mt-2 border border-gray-400"),l.disabled=e[3],c(l,"placeholder","Input your answer"),c(l,"type","text"),l.required=s=e[2].required},m(s,t){d(s,l,t),f(l,e[0]),i||(n=b(l,"input",e[5]),i=!0)},p(e,t){8&t&&(l.disabled=e[3]),4&t&&s!==(s=e[2].required)&&(l.required=s),1&t&&l.value!==e[0]&&f(l,e[0])},d(e){e&&u(l),i=!1,n()}}}function y(e){let l,s,i,r;return{c(){l=t("textarea"),this.h()},l(e){l=a(e,"TEXTAREA",{class:!0,disabled:!0,placeholder:!0,rows:!0,required:!0}),n(l).forEach(u),this.h()},h(){c(l,"class","p-2 mt-2 border border-gray-400"),l.disabled=e[3],c(l,"placeholder","Input your answer"),c(l,"rows","3"),l.required=s=e[2].required},m(s,t){d(s,l,t),f(l,e[0]),i||(r=b(l,"input",e[4]),i=!0)},p(e,t){8&t&&(l.disabled=e[3]),4&t&&s!==(s=e[2].required)&&(l.required=s),1&t&&f(l,e[0])},d(e){e&&u(l),i=!1,r()}}}function E(e){let l,s,f,b,_,q,x,E,k,I,O=e[2].text+"",P=e[2].required&&g();function D(e,l){return e[2].multiline?y:w}let T=D(e),N=T(e);return{c(){l=t("div"),s=t("div"),f=i(e[1]),b=i("."),_=o(),q=t("div"),x=t("p"),E=i(O),k=o(),P&&P.c(),I=o(),N.c(),this.h()},l(t){l=a(t,"DIV",{class:!0});var i=n(l);s=a(i,"DIV",{class:!0});var c=n(s);f=r(c,e[1]),b=r(c,"."),c.forEach(u),_=p(i),q=a(i,"DIV",{class:!0});var d=n(q);x=a(d,"P",{class:!0});var h=n(x);E=r(h,O),k=p(h),P&&P.l(h),h.forEach(u),I=p(d),N.l(d),d.forEach(u),i.forEach(u),this.h()},h(){c(s,"class","mr-1 text-lg"),c(x,"class","text-lg whitespace-pre"),c(q,"class","flex flex-col flex-1"),c(l,"class","flex p-5 question-selection-type preview")},m(e,t){d(e,l,t),h(l,s),h(s,f),h(s,b),h(l,_),h(l,q),h(q,x),h(x,E),h(x,k),P&&P.m(x,null),h(q,I),N.m(q,null)},p(e,[l]){2&l&&m(f,e[1]),4&l&&O!==(O=e[2].text+"")&&m(E,O),e[2].required?P||(P=g(),P.c(),P.m(x,null)):P&&(P.d(1),P=null),T===(T=D(e))&&N?N.p(e,l):(N.d(1),N=T(e),N&&(N.c(),N.m(q,null)))},i:v,o:v,d(e){e&&u(l),P&&P.d(),N.d()}}}function k(e,l,s){let{number:t}=l,{question:i}=l,{answer:a=""}=l,{disabled:n=!0}=l;return e.$$set=e=>{"number"in e&&s(1,t=e.number),"question"in e&&s(2,i=e.question),"answer"in e&&s(0,a=e.answer),"disabled"in e&&s(3,n=e.disabled)},[a,t,i,n,function(){a=this.value,s(0,a)},function(){a=this.value,s(0,a)}]}class I extends e{constructor(e){super(),l(this,e,k,E,s,{number:1,question:2,answer:0,disabled:3})}}function O(e,l,s){const t=e.slice();return t[11]=l[s],t}function P(e){let l,s;return{c(){l=t("span"),s=i("*"),this.h()},l(e){l=a(e,"SPAN",{class:!0});var t=n(l);s=r(t,"*"),t.forEach(u),this.h()},h(){c(l,"class","text-red-600")},m(e,t){d(e,l,t),h(l,s)},d(e){e&&u(l)}}}function D(e){let l,s,i,n,r,h;return{c(){l=t("input"),this.h()},l(e){l=a(e,"INPUT",{class:!0,type:!0,name:!0,disabled:!0,value:!0,required:!0}),this.h()},h(){c(l,"class","inline-block mr-2"),c(l,"type","radio"),c(l,"name",s="option--"+e[2]),l.disabled=e[3],l.__value=i=e[11],l.value=l.__value,l.required=n=e[1].required,e[7][0].push(l)},m(s,t){d(s,l,t),l.checked=l.__value===e[0],r||(h=b(l,"change",e[8]),r=!0)},p(e,t){4&t&&s!==(s="option--"+e[2])&&c(l,"name",s),8&t&&(l.disabled=e[3]),2&t&&i!==(i=e[11])&&(l.__value=i,l.value=l.__value),2&t&&n!==(n=e[1].required)&&(l.required=n),1&t&&(l.checked=l.__value===e[0])},d(s){s&&u(l),e[7][0].splice(e[7][0].indexOf(l),1),r=!1,h()}}}function T(e){let l,s,i,n,r;return{c(){l=t("input"),this.h()},l(e){l=a(e,"INPUT",{class:!0,type:!0,name:!0,disabled:!0,value:!0}),this.h()},h(){c(l,"class","inline-block mr-2"),c(l,"type","checkbox"),c(l,"name",s="option--"+e[2]),l.disabled=e[3],l.__value=i=e[11],l.value=l.__value,e[7][0].push(l)},m(s,t){d(s,l,t),l.checked=~e[0].indexOf(l.__value),n||(r=b(l,"change",e[6]),n=!0)},p(e,t){4&t&&s!==(s="option--"+e[2])&&c(l,"name",s),8&t&&(l.disabled=e[3]),2&t&&i!==(i=e[11])&&(l.__value=i,l.value=l.__value),1&t&&(l.checked=~e[0].indexOf(l.__value))},d(s){s&&u(l),e[7][0].splice(e[7][0].indexOf(l),1),n=!1,r()}}}function N(e){let l,s,v,f,b=e[11]+"";function _(e,l){return e[1].multiple?T:D}let q=_(e),x=q(e);return{c(){l=t("label"),x.c(),s=o(),v=t("div"),f=i(b),this.h()},l(e){l=a(e,"LABEL",{class:!0});var t=n(l);x.l(t),s=p(t),v=a(t,"DIV",{});var i=n(v);f=r(i,b),i.forEach(u),t.forEach(u),this.h()},h(){c(l,"class","flex items-center mb-2")},m(e,t){d(e,l,t),x.m(l,null),h(l,s),h(l,v),h(v,f)},p(e,t){q===(q=_(e))&&x?x.p(e,t):(x.d(1),x=q(e),x&&(x.c(),x.m(l,s))),2&t&&b!==(b=e[11]+"")&&m(f,b)},d(e){e&&u(l),x.d()}}}function V(e){let l,s,i,r,m,v;function f(e,l){return e[1].multiple?U:A}let q=f(e),x=q(e);return{c(){l=t("label"),x.c(),s=o(),i=t("input"),this.h()},l(e){l=a(e,"LABEL",{class:!0});var t=n(l);x.l(t),s=p(t),i=a(t,"INPUT",{class:!0,disabled:!0,placeholder:!0,style:!0,required:!0,type:!0}),t.forEach(u),this.h()},h(){c(i,"class","flex-1 p-2 border border-gray-400 "),i.disabled=e[3],c(i,"placeholder","Other"),_(i,"max-width","300px"),i.required=r=e[1].multiple?e[0].includes(e[4]):!e[1].options.includes(e[0]),c(i,"type","text"),c(l,"class","flex items-center mb-2")},m(t,a){d(t,l,a),x.m(l,null),h(l,s),h(l,i),m||(v=b(i,"input",e[5]),m=!0)},p(e,t){q===(q=f(e))&&x?x.p(e,t):(x.d(1),x=q(e),x&&(x.c(),x.m(l,s))),8&t&&(i.disabled=e[3]),19&t&&r!==(r=e[1].multiple?e[0].includes(e[4]):!e[1].options.includes(e[0]))&&(i.required=r)},d(e){e&&u(l),x.d(),m=!1,v()}}}function A(e){let l,s,i,n,r;return{c(){l=t("input"),this.h()},l(e){l=a(e,"INPUT",{class:!0,type:!0,value:!0,name:!0,disabled:!0,required:!0}),this.h()},h(){c(l,"class","inline-block mr-2"),c(l,"type","radio"),l.__value=e[4],l.value=l.__value,c(l,"name",s="option--"+e[2]),l.disabled=e[3],l.required=i=e[1].required,e[7][0].push(l)},m(s,t){d(s,l,t),l.checked=l.__value===e[0],n||(r=b(l,"change",e[10]),n=!0)},p(e,t){16&t&&(l.__value=e[4],l.value=l.__value),4&t&&s!==(s="option--"+e[2])&&c(l,"name",s),8&t&&(l.disabled=e[3]),2&t&&i!==(i=e[1].required)&&(l.required=i),1&t&&(l.checked=l.__value===e[0])},d(s){s&&u(l),e[7][0].splice(e[7][0].indexOf(l),1),n=!1,r()}}}function U(e){let l,s,i,n,r;return{c(){l=t("input"),this.h()},l(e){l=a(e,"INPUT",{class:!0,type:!0,value:!0,name:!0,disabled:!0,required:!0}),this.h()},h(){c(l,"class","inline-block mr-2"),c(l,"type","checkbox"),l.__value=e[4],l.value=l.__value,c(l,"name",s="option--"+e[2]),l.disabled=e[3],l.required=i=0===e[0].length,e[7][0].push(l)},m(s,t){d(s,l,t),l.checked=~e[0].indexOf(l.__value),n||(r=b(l,"change",e[9]),n=!0)},p(e,t){16&t&&(l.__value=e[4],l.value=l.__value),4&t&&s!==(s="option--"+e[2])&&c(l,"name",s),8&t&&(l.disabled=e[3]),1&t&&i!==(i=0===e[0].length)&&(l.required=i),1&t&&(l.checked=~e[0].indexOf(l.__value))},d(s){s&&u(l),e[7][0].splice(e[7][0].indexOf(l),1),n=!1,r()}}}function L(e){let l,s,f,b,_,x,g,w,y,E,k,I,D=e[1].text+"",T=e[1].required&&P(),A=e[1].options,U=[];for(let t=0;t<A.length;t+=1)U[t]=N(O(e,A,t));let L=e[1].hasOtherOption&&V(e);return{c(){l=t("div"),s=t("div"),f=i(e[2]),b=i("."),_=o(),x=t("div"),g=t("p"),w=i(D),y=o(),T&&T.c(),E=o(),k=t("div");for(let e=0;e<U.length;e+=1)U[e].c();I=o(),L&&L.c(),this.h()},l(t){l=a(t,"DIV",{class:!0});var i=n(l);s=a(i,"DIV",{class:!0});var c=n(s);f=r(c,e[2]),b=r(c,"."),c.forEach(u),_=p(i),x=a(i,"DIV",{class:!0});var d=n(x);g=a(d,"P",{class:!0});var h=n(g);w=r(h,D),y=p(h),T&&T.l(h),h.forEach(u),E=p(d),k=a(d,"DIV",{class:!0});var o=n(k);for(let e=0;e<U.length;e+=1)U[e].l(o);I=p(o),L&&L.l(o),o.forEach(u),d.forEach(u),i.forEach(u),this.h()},h(){c(s,"class","mr-1 text-lg"),c(g,"class","text-lg whitespace-pre"),c(k,"class","flex flex-col mt-2"),c(x,"class","flex-1"),c(l,"class","flex p-5 question-selection-type preview")},m(e,t){d(e,l,t),h(l,s),h(s,f),h(s,b),h(l,_),h(l,x),h(x,g),h(g,w),h(g,y),T&&T.m(g,null),h(x,E),h(x,k);for(let l=0;l<U.length;l+=1)U[l].m(k,null);h(k,I),L&&L.m(k,null)},p(e,[l]){if(4&l&&m(f,e[2]),2&l&&D!==(D=e[1].text+"")&&m(w,D),e[1].required?T||(T=P(),T.c(),T.m(g,null)):T&&(T.d(1),T=null),15&l){let s;for(A=e[1].options,s=0;s<A.length;s+=1){const t=O(e,A,s);U[s]?U[s].p(t,l):(U[s]=N(t),U[s].c(),U[s].m(k,I))}for(;s<U.length;s+=1)U[s].d(1);U.length=A.length}e[1].hasOtherOption?L?L.p(e,l):(L=V(e),L.c(),L.m(k,null)):L&&(L.d(1),L=null)},i:v,o:v,d(e){e&&u(l),T&&T.d(),q(U,e),L&&L.d()}}}function S(e,l,s){let{question:t}=l,{number:i}=l,{disabled:a=!0}=l,{answer:n=null}=l,r="";t.multiple&&(n=[]);const u=[[]];return e.$$set=e=>{"question"in e&&s(1,t=e.question),"number"in e&&s(2,i=e.number),"disabled"in e&&s(3,a=e.disabled),"answer"in e&&s(0,n=e.answer)},[n,t,i,a,r,function({target:e}){s(4,r=e.value),a||!t.hasOtherOption||t.options.includes(n)||(t.multiple?!n.includes(r)&&r&&s(0,n[t.options.length]=r,n):s(0,n=r))},function(){n=x(u[0],this.__value,this.checked),s(0,n)},u,function(){n=this.__value,s(0,n)},function(){n=x(u[0],this.__value,this.checked),s(0,n)},function(){n=this.__value,s(0,n)}]}class $ extends e{constructor(e){super(),l(this,e,S,L,s,{question:1,number:2,disabled:3,answer:0})}}const j={title:"Form without a title",description:"Form description",questions:[],preview:!1};export{j as D,$ as S,I as T};