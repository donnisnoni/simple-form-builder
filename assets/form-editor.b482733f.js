var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,s=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,l=(e,s,n)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,i=(t,i)=>{for(var r in i||(i={}))e.call(i,r)&&l(t,r,i[r]);if(s)for(var r of s(i))n.call(i,r)&&l(t,r,i[r]);return t},r=(t,e,s)=>new Promise(((n,l)=>{var i=t=>{try{c(s.next(t))}catch(e){l(e)}},r=t=>{try{c(s.throw(t))}catch(e){l(e)}},c=t=>t.done?n(t.value):Promise.resolve(t.value).then(i,r);c((s=s.apply(t,e)).next())}));import{S as c,i as o,s as a,f as u,c as p,a as f,t as h,g as d,h as $,d as m,k as g,b as v,j as x,l as b,e as y,n as w,m as E,K as T,C as q,q as I,u as k,v as D,M as O,T as V,N,U as A,I as U,J as P,z as B,V as j,W as S,X as R,Y as L,D as M,Z as Q,x as X,E as _,H as F,F as H,_ as z,A as C,G as Y,r as G,O as J,P as K}from"./vendor.c3f712a8.js";import{I as W,d as Z,e as tt,h as et,i as st,r as nt,j as lt,k as it,g as rt,u as ct}from"./store.7e522569.js";import{S as ot,T as at,D as ut}from"./shared.b676eeea.js";function pt(t){let e,s,n,l,i,r,c,o,a,V,N,A,U,P,B,j,S,R,L,M;return n=new W({props:{path:Z,width:"30px",height:"30px"}}),{c(){e=u("button"),s=u("div"),p(n.$$.fragment),l=f(),i=u("div"),r=u("div"),c=h("Add question"),o=f(),a=u("div"),V=u("button"),N=h("Options"),A=f(),U=u("button"),P=h("Text"),B=f(),j=u("button"),S=h("Others"),this.h()},l(t){e=d(t,"BUTTON",{class:!0,title:!0});var u=$(e);s=d(u,"DIV",{class:!0});var p=$(s);m(n.$$.fragment,p),p.forEach(g),l=v(u),i=d(u,"DIV",{class:!0});var f=$(i);r=d(f,"DIV",{class:!0});var h=$(r);c=x(h,"Add question"),h.forEach(g),o=v(f),a=d(f,"DIV",{class:!0});var b=$(a);V=d(b,"BUTTON",{class:!0});var y=$(V);N=x(y,"Options"),y.forEach(g),A=v(b),U=d(b,"BUTTON",{class:!0});var w=$(U);P=x(w,"Text"),w.forEach(g),B=v(b),j=d(b,"BUTTON",{class:!0});var E=$(j);S=x(E,"Others"),E.forEach(g),b.forEach(g),f.forEach(g),u.forEach(g),this.h()},h(){b(s,"class","p-2"),b(r,"class","p-2 inner-label svelte-149pbl9"),b(V,"class","p-2 text-black bg-white"),b(U,"class","p-2 text-black bg-white"),b(j,"class","p-2 text-black bg-white"),b(a,"class","hidden-buttons svelte-149pbl9"),b(i,"class","p-1"),b(e,"class","flex items-center px-2 py-1 btn btn--primary svelte-149pbl9"),b(e,"title","Add a new question")},m(u,p){y(u,e,p),w(e,s),E(n,s,null),w(e,l),w(e,i),w(i,r),w(r,c),w(i,o),w(i,a),w(a,V),w(V,N),w(a,A),w(a,U),w(U,P),w(a,B),w(a,j),w(j,S),t[4](e),R=!0,L||(M=[T(V,"click",t[2]),T(U,"click",t[3])],L=!0)},p:q,i(t){R||(I(n.$$.fragment,t),R=!0)},o(t){k(n.$$.fragment,t),R=!1},d(s){s&&g(e),D(n),t[4](null),L=!1,O(M)}}}function ft(t,e,s){let n;const l=V();function i(t){l("onSelectQuestionType",t)}return[n,i,()=>i("selection"),()=>i("essay"),function(t){N[t?"unshift":"push"]((()=>{n=t,s(0,n)}))}]}class ht extends c{constructor(t){super(),o(this,t,ft,pt,a,{})}}function dt(t){let e,s,n,l,i,r;return{c(){e=u("div"),s=u("input"),n=f(),l=u("textarea"),this.h()},l(t){e=d(t,"DIV",{class:!0,style:!0});var i=$(e);s=d(i,"INPUT",{class:!0,placeholder:!0,type:!0}),n=v(i),l=d(i,"TEXTAREA",{class:!0,placeholder:!0,type:!0,rows:!0}),$(l).forEach(g),i.forEach(g),this.h()},h(){b(s,"class","p-2 mb-2 text-xl"),b(s,"placeholder","Masukkan judul formulir"),b(s,"type","text"),b(l,"class","p-2"),b(l,"placeholder","Masukkan deskripsi formulir"),b(l,"type","text"),b(l,"rows","3"),b(e,"class","flex flex-col w-full p-5 bg-gray-100 form-meta-inputs"),U(e,"height","100%")},m(c,o){y(c,e,o),w(e,s),t[5](s),P(s,t[0]),w(e,n),w(e,l),P(l,t[1]),i||(r=[T(s,"input",t[6]),T(l,"input",t[7])],i=!0)},p(t,e){1&e&&s.value!==t[0]&&P(s,t[0]),2&e&&P(l,t[1])},d(s){s&&g(e),t[5](null),i=!1,O(r)}}}function $t(t){let e,s,n,l,i,r;return{c(){e=u("div"),s=u("h2"),n=h(t[0]),l=f(),i=u("p"),r=h(t[1]),this.h()},l(c){e=d(c,"DIV",{class:!0});var o=$(e);s=d(o,"H2",{class:!0});var a=$(s);n=x(a,t[0]),a.forEach(g),l=v(o),i=d(o,"P",{class:!0});var u=$(i);r=x(u,t[1]),u.forEach(g),o.forEach(g),this.h()},h(){b(s,"class","text-2xl"),b(i,"class","mt-2"),b(e,"class","p-5 form-meta-preview")},m(t,c){y(t,e,c),w(e,s),w(s,n),w(e,l),w(e,i),w(i,r)},p(t,e){1&e&&B(n,t[0]),2&e&&B(r,t[1])},d(t){t&&g(e)}}}function mt(t){let e,s,n;function l(t,e){return t[2]?$t:dt}let i=l(t),r=i(t);return{c(){e=u("div"),r.c(),this.h()},l(t){e=d(t,"DIV",{class:!0,tabindex:!0});var s=$(e);r.l(s),s.forEach(g),this.h()},h(){b(e,"class","form-meta svelte-1ovbaqa"),b(e,"tabindex","0"),A(e,"preview",t[2])},m(l,i){y(l,e,i),r.m(e,null),t[8](e),s||(n=[T(e,"click",t[9]),T(e,"focusout",t[10])],s=!0)},p(t,[s]){i===(i=l(t))&&r?r.p(t,s):(r.d(1),r=i(t),r&&(r.c(),r.m(e,null))),4&s&&A(e,"preview",t[2])},i:q,o:q,d(l){l&&g(e),r.d(),t[8](null),s=!1,O(n)}}}function gt(t,e,s){let n,l,{title:i="Formulir tanpa judul"}=e,{description:r="Deskripsi formulir"}=e,c=!0;return t.$$set=t=>{"title"in t&&s(0,i=t.title),"description"in t&&s(1,r=t.description)},t.$$.update=()=>{12&t.$$.dirty&&(c||l&&l.focus())},[i,r,c,l,n,function(t){N[t?"unshift":"push"]((()=>{l=t,s(3,l)}))},function(){i=this.value,s(0,i)},function(){r=this.value,s(1,r)},function(t){N[t?"unshift":"push"]((()=>{n=t,s(4,n)}))},()=>s(2,c=c&&!1),t=>s(2,c=!n.contains(t.relatedTarget))]}class vt extends c{constructor(t){super(),o(this,t,gt,mt,a,{title:0,description:1})}}function xt(t){let e,s;const n=t[1].default,l=j(n,t,t[0],null);return{c(){e=u("div"),l&&l.c(),this.h()},l(t){e=d(t,"DIV",{class:!0});var s=$(e);l&&l.l(s),s.forEach(g),this.h()},h(){b(e,"class","tabs")},m(t,n){y(t,e,n),l&&l.m(e,null),s=!0},p(t,[e]){l&&l.p&&(!s||1&e)&&S(l,n,t,t[0],e,null,null)},i(t){s||(I(l,t),s=!0)},o(t){k(l,t),s=!1},d(t){t&&g(e),l&&l.d(t)}}}const bt={};function yt(t,e,s){let{$$slots:n={},$$scope:l}=e;const i=[],r=[],c=M(null),o=M(null);return R(bt,{registerTab:t=>{i.push(t),c.update((e=>e||t)),L((()=>{const e=i.indexOf(t);i.splice(e,1),c.update((s=>s===t?i[e]||i[i.length-1]:s))}))},registerPanel:t=>{r.push(t),o.update((e=>e||t)),L((()=>{const e=r.indexOf(t);r.splice(e,1),o.update((s=>s===t?r[e]||r[r.length-1]:s))}))},selectTab:t=>{const e=i.indexOf(t);c.set(t),o.set(r[e])},selectedTab:c,selectedPanel:o}),t.$$set=t=>{"$$scope"in t&&s(0,l=t.$$scope)},[l,n]}class wt extends c{constructor(t){super(),o(this,t,yt,xt,a,{})}}function Et(t){let e,s,n,l;const i=t[5].default,r=j(i,t,t[4],null);return{c(){e=u("button"),r&&r.c(),this.h()},l(t){e=d(t,"BUTTON",{class:!0});var s=$(e);r&&r.l(s),s.forEach(g),this.h()},h(){b(e,"class","svelte-j6ttur"),A(e,"selected",t[0]===t[1])},m(i,c){y(i,e,c),r&&r.m(e,null),s=!0,n||(l=T(e,"click",t[6]),n=!0)},p(t,[n]){r&&r.p&&(!s||16&n)&&S(r,i,t,t[4],n,null,null),3&n&&A(e,"selected",t[0]===t[1])},i(t){s||(I(r,t),s=!0)},o(t){k(r,t),s=!1},d(t){t&&g(e),r&&r.d(t),n=!1,l()}}}function Tt(t,e,s){let n,{$$slots:l={},$$scope:i}=e;const r={},{registerTab:c,selectTab:o,selectedTab:a}=Q(bt);X(t,a,(t=>s(0,n=t))),c(r);return t.$$set=t=>{"$$scope"in t&&s(4,i=t.$$scope)},[n,r,o,a,i,l,()=>o(r)]}class qt extends c{constructor(t){super(),o(this,t,Tt,Et,a,{})}}function It(t){let e,s;const n=t[1].default,l=j(n,t,t[0],null);return{c(){e=u("div"),l&&l.c(),this.h()},l(t){e=d(t,"DIV",{class:!0});var s=$(e);l&&l.l(s),s.forEach(g),this.h()},h(){b(e,"class","tab-list svelte-9k7zbt")},m(t,n){y(t,e,n),l&&l.m(e,null),s=!0},p(t,[e]){l&&l.p&&(!s||1&e)&&S(l,n,t,t[0],e,null,null)},i(t){s||(I(l,t),s=!0)},o(t){k(l,t),s=!1},d(t){t&&g(e),l&&l.d(t)}}}function kt(t,e,s){let{$$slots:n={},$$scope:l}=e;return t.$$set=t=>{"$$scope"in t&&s(0,l=t.$$scope)},[l,n]}class Dt extends c{constructor(t){super(),o(this,t,kt,It,a,{})}}function Ot(t){let e;const s=t[4].default,n=j(s,t,t[3],null);return{c(){n&&n.c()},l(t){n&&n.l(t)},m(t,s){n&&n.m(t,s),e=!0},p(t,l){n&&n.p&&(!e||8&l)&&S(n,s,t,t[3],l,null,null)},i(t){e||(I(n,t),e=!0)},o(t){k(n,t),e=!1},d(t){n&&n.d(t)}}}function Vt(t){let e,s,n=t[0]===t[1]&&Ot(t);return{c(){n&&n.c(),e=_()},l(t){n&&n.l(t),e=_()},m(t,l){n&&n.m(t,l),y(t,e,l),s=!0},p(t,[s]){t[0]===t[1]?n?(n.p(t,s),1&s&&I(n,1)):(n=Ot(t),n.c(),I(n,1),n.m(e.parentNode,e)):n&&(F(),k(n,1,1,(()=>{n=null})),H())},i(t){s||(I(n),s=!0)},o(t){k(n),s=!1},d(t){n&&n.d(t),t&&g(e)}}}function Nt(t,e,s){let n,{$$slots:l={},$$scope:i}=e;const r={},{registerPanel:c,selectedPanel:o}=Q(bt);return X(t,o,(t=>s(0,n=t))),c(r),t.$$set=t=>{"$$scope"in t&&s(3,i=t.$$scope)},[n,r,o,i,l]}class At extends c{constructor(t){super(),o(this,t,Nt,Vt,a,{})}}function Ut(t){let e;return{c(){e=u("input"),this.h()},l(t){e=d(t,"INPUT",{class:!0,type:!0,disabled:!0}),this.h()},h(){b(e,"class","inline-block mr-2"),b(e,"type","radio"),e.disabled=!0},m(t,s){y(t,e,s)},d(t){t&&g(e)}}}function Pt(t){let e;return{c(){e=u("input"),this.h()},l(t){e=d(t,"INPUT",{class:!0,type:!0,disabled:!0}),this.h()},h(){b(e,"class","inline-block mr-2"),b(e,"type","checkbox"),e.disabled=!0},m(t,s){y(t,e,s)},d(t){t&&g(e)}}}function Bt(t){let e,s,n,l,i,r,c,o,a;function h(t,e){return t[0]?Pt:Ut}let x=h(t),q=x(t);return r=new W({props:{path:tt,width:"25px",height:"25px"}}),{c(){e=u("div"),q.c(),s=f(),n=u("input"),l=f(),i=u("button"),p(r.$$.fragment),this.h()},l(t){e=d(t,"DIV",{class:!0});var c=$(e);q.l(c),s=v(c),n=d(c,"INPUT",{class:!0,disabled:!0,placeholder:!0,style:!0,type:!0}),l=v(c),i=d(c,"BUTTON",{class:!0,title:!0});var o=$(i);m(r.$$.fragment,o),o.forEach(g),c.forEach(g),this.h()},h(){b(n,"class","flex-1 inline-block p-2 border border-gray-400"),n.disabled=!0,b(n,"placeholder","Others"),U(n,"max-width","300px"),b(n,"type","text"),b(i,"class","ml-2 delete-question-button"),b(i,"title","Remove option"),b(e,"class","flex items-center mb-2 setup--question-item other-option-item")},m(u,p){y(u,e,p),q.m(e,null),w(e,s),w(e,n),w(e,l),w(e,i),E(r,i,null),c=!0,o||(a=T(i,"click",t[2]),o=!0)},p(t,[n]){x!==(x=h(t))&&(q.d(1),q=x(t),q&&(q.c(),q.m(e,s)))},i(t){c||(I(r.$$.fragment,t),c=!0)},o(t){k(r.$$.fragment,t),c=!1},d(t){t&&g(e),q.d(),D(r),o=!1,a()}}}function jt(t,e,s){let{multiple:n=!1}=e;const l=V();return t.$$set=t=>{"multiple"in t&&s(0,n=t.multiple)},[n,l,()=>l("delete")]}class St extends c{constructor(t){super(),o(this,t,jt,Bt,a,{multiple:0})}}function Rt(t,e,s){const n=t.slice();return n[23]=e[s],n[24]=e,n[2]=s,n}function Lt(t){let e,s,n,l,i,r,c,o,a,q,V,N,A,j,S,R,L,M,Q,X,_,z,Y,G,J,K,et,st,nt,lt,it,rt,ct,ot,at,ut,pt=t[2]+1+"";l=new W({props:{path:tt,width:"25px",height:"25px"}});let ft=t[0].options,ht=[];for(let u=0;u<ft.length;u+=1)ht[u]=_t(Rt(t,ft,u));const dt=t=>k(ht[t],1,1,(()=>{ht[t]=null}));let $t=t[0].hasOtherOption&&Ft(t);Q=new W({props:{path:Z,width:"25px",height:"25px"}});let mt=!t[0].hasOtherOption&&Ht(t);return{c(){e=u("div"),s=u("div"),n=u("button"),p(l.$$.fragment),i=f(),r=u("div"),c=u("div"),o=h(pt),a=h("."),q=f(),V=u("div"),N=u("textarea"),A=f(),j=u("div");for(let t=0;t<ht.length;t+=1)ht[t].c();S=f(),$t&&$t.c(),R=f(),L=u("div"),M=u("button"),p(Q.$$.fragment),X=h("\n        Add new option"),_=f(),mt&&mt.c(),z=f(),Y=u("label"),G=u("input"),J=f(),K=u("div"),et=h("Multiple"),st=f(),nt=u("label"),lt=u("input"),it=f(),rt=u("div"),ct=h("Required"),this.h()},l(t){e=d(t,"DIV",{class:!0});var u=$(e);s=d(u,"DIV",{class:!0});var p=$(s);n=d(p,"BUTTON",{class:!0,title:!0});var f=$(n);m(l.$$.fragment,f),f.forEach(g),p.forEach(g),u.forEach(g),i=v(t),r=d(t,"DIV",{class:!0,style:!0});var h=$(r);c=d(h,"DIV",{class:!0});var b=$(c);o=x(b,pt),a=x(b,"."),b.forEach(g),q=v(h),V=d(h,"DIV",{class:!0,style:!0});var y=$(V);N=d(y,"TEXTAREA",{class:!0,placeholder:!0,type:!0,rows:!0}),$(N).forEach(g),A=v(y),j=d(y,"DIV",{class:!0});var w=$(j);for(let e=0;e<ht.length;e+=1)ht[e].l(w);S=v(w),$t&&$t.l(w),w.forEach(g),y.forEach(g),h.forEach(g),R=v(t),L=d(t,"DIV",{class:!0});var E=$(L);M=d(E,"BUTTON",{class:!0});var T=$(M);m(Q.$$.fragment,T),X=x(T,"\n        Add new option"),T.forEach(g),_=v(E),mt&&mt.l(E),z=v(E),Y=d(E,"LABEL",{class:!0,tabindex:!0});var I=$(Y);G=d(I,"INPUT",{type:!0}),J=v(I),K=d(I,"DIV",{class:!0});var k=$(K);et=x(k,"Multiple"),k.forEach(g),I.forEach(g),st=v(E),nt=d(E,"LABEL",{class:!0,tabindex:!0});var D=$(nt);lt=d(D,"INPUT",{type:!0}),it=v(D),rt=d(D,"DIV",{class:!0});var O=$(rt);ct=x(O,"Required"),O.forEach(g),D.forEach(g),E.forEach(g),this.h()},h(){b(n,"class","flex items-center px-3 py-2"),b(n,"title","Remove question"),b(s,"class","ml-auto"),b(e,"class","flex p-1 border-b"),b(c,"class","mr-2"),b(N,"class","p-2 setup--question-text"),b(N,"placeholder","Input a question"),b(N,"type","text"),b(N,"rows","3"),b(j,"class","flex flex-col justify-center mt-5"),b(V,"class","flex flex-col flex-1"),U(V,"height","100%"),b(r,"class","flex w-full p-5 question-selection-type-inputs"),U(r,"height","100%"),b(M,"class","flex items-center px-3 py-2"),b(G,"type","checkbox"),b(K,"class","ml-2"),b(Y,"class","flex items-center px-3 py-2"),b(Y,"tabindex","0"),b(lt,"type","checkbox"),b(rt,"class","ml-2"),b(nt,"class","flex items-center px-3 py-2"),b(nt,"tabindex","0"),b(L,"class","flex flex-col p-1 border-t md:flex-row")},m(u,p){y(u,e,p),w(e,s),w(s,n),E(l,n,null),y(u,i,p),y(u,r,p),w(r,c),w(c,o),w(c,a),w(r,q),w(r,V),w(V,N),t[11](N),P(N,t[0].text),w(V,A),w(V,j);for(let t=0;t<ht.length;t+=1)ht[t].m(j,null);w(j,S),$t&&$t.m(j,null),t[16](j),y(u,R,p),y(u,L,p),w(L,M),E(Q,M,null),w(M,X),w(L,_),mt&&mt.m(L,null),w(L,z),w(L,Y),w(Y,G),G.checked=t[0].multiple,w(Y,J),w(Y,K),w(K,et),w(L,st),w(L,nt),w(nt,lt),lt.checked=t[0].required,w(nt,it),w(nt,rt),w(rt,ct),ot=!0,at||(ut=[T(n,"click",t[10]),T(N,"input",t[12]),T(M,"click",t[7]),T(G,"change",t[18]),T(lt,"change",t[19])],at=!0)},p(t,e){if((!ot||4&e)&&pt!==(pt=t[2]+1+"")&&B(o,pt),1&e&&P(N,t[0].text),257&e){let s;for(ft=t[0].options,s=0;s<ft.length;s+=1){const n=Rt(t,ft,s);ht[s]?(ht[s].p(n,e),I(ht[s],1)):(ht[s]=_t(n),ht[s].c(),I(ht[s],1),ht[s].m(j,S))}for(F(),s=ft.length;s<ht.length;s+=1)dt(s);H()}t[0].hasOtherOption?$t?($t.p(t,e),1&e&&I($t,1)):($t=Ft(t),$t.c(),I($t,1),$t.m(j,null)):$t&&(F(),k($t,1,1,(()=>{$t=null})),H()),t[0].hasOtherOption?mt&&(mt.d(1),mt=null):mt?mt.p(t,e):(mt=Ht(t),mt.c(),mt.m(L,z)),1&e&&(G.checked=t[0].multiple),1&e&&(lt.checked=t[0].required)},i(t){if(!ot){I(l.$$.fragment,t);for(let t=0;t<ft.length;t+=1)I(ht[t]);I($t),I(Q.$$.fragment,t),ot=!0}},o(t){k(l.$$.fragment,t),ht=ht.filter(Boolean);for(let e=0;e<ht.length;e+=1)k(ht[e]);k($t),k(Q.$$.fragment,t),ot=!1},d(s){s&&g(e),D(l),s&&g(i),s&&g(r),t[11](null),C(ht,s),$t&&$t.d(),t[16](null),s&&g(R),s&&g(L),D(Q),mt&&mt.d(),at=!1,O(ut)}}}function Mt(t){let e,s;return e=new ot({props:{number:t[2]+1,question:t[0]}}),{c(){p(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,n){E(e,t,n),s=!0},p(t,s){const n={};4&s&&(n.number=t[2]+1),1&s&&(n.question=t[0]),e.$set(n)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){D(e,t)}}}function Qt(t){let e;return{c(){e=u("input"),this.h()},l(t){e=d(t,"INPUT",{class:!0,type:!0,disabled:!0}),this.h()},h(){b(e,"class","inline-block mr-2"),b(e,"type","radio"),e.disabled=!0},m(t,s){y(t,e,s)},d(t){t&&g(e)}}}function Xt(t){let e;return{c(){e=u("input"),this.h()},l(t){e=d(t,"INPUT",{class:!0,type:!0,disabled:!0}),this.h()},h(){b(e,"class","inline-block mr-2"),b(e,"type","checkbox"),e.disabled=!0},m(t,s){y(t,e,s)},d(t){t&&g(e)}}}function _t(t){let e,s,n,l,i,r,c,o,a;function h(t,e){return t[0].multiple?Xt:Qt}let x=h(t),q=x(t);function V(){t[13].call(n,t[24],t[2])}function N(){return t[14](t[2])}return r=new W({props:{path:tt,width:"25px",height:"25px"}}),{c(){e=u("div"),q.c(),s=f(),n=u("input"),l=f(),i=u("button"),p(r.$$.fragment),this.h()},l(t){e=d(t,"DIV",{class:!0});var c=$(e);q.l(c),s=v(c),n=d(c,"INPUT",{class:!0,style:!0,type:!0}),l=v(c),i=d(c,"BUTTON",{class:!0,title:!0});var o=$(i);m(r.$$.fragment,o),o.forEach(g),c.forEach(g),this.h()},h(){b(n,"class","flex-1 inline-block p-2"),U(n,"max-width","300px"),b(n,"type","text"),b(i,"class","ml-2 delete-question-button"),b(i,"title","Remove option"),b(e,"class","flex items-center mb-2 setup--question-item")},m(u,p){y(u,e,p),q.m(e,null),w(e,s),w(e,n),P(n,t[23]),w(e,l),w(e,i),E(r,i,null),c=!0,o||(a=[T(n,"input",V),T(i,"click",N)],o=!0)},p(l,i){x!==(x=h(t=l))&&(q.d(1),q=x(t),q&&(q.c(),q.m(e,s))),1&i&&n.value!==t[23]&&P(n,t[23])},i(t){c||(I(r.$$.fragment,t),c=!0)},o(t){k(r.$$.fragment,t),c=!1},d(t){t&&g(e),q.d(),D(r),o=!1,O(a)}}}function Ft(t){let e,s;return e=new St({props:{multiple:t[0].multiple}}),e.$on("delete",t[15]),{c(){p(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,n){E(e,t,n),s=!0},p(t,s){const n={};1&s&&(n.multiple=t[0].multiple),e.$set(n)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){D(e,t)}}}function Ht(t){let e,s,n,l;return{c(){e=u("button"),s=h('Add "other" option'),this.h()},l(t){e=d(t,"BUTTON",{class:!0});var n=$(e);s=x(n,'Add "other" option'),n.forEach(g),this.h()},h(){b(e,"class","flex items-center px-3 py-2")},m(i,r){y(i,e,r),w(e,s),n||(l=T(e,"click",t[17]),n=!0)},p:q,d(t){t&&g(e),n=!1,l()}}}function zt(t){let e,s,n,l,i,r;const c=[Mt,Lt],o=[];function a(t,e){return t[1]?0:1}return s=a(t),n=o[s]=c[s](t),{c(){e=u("div"),n.c(),this.h()},l(t){e=d(t,"DIV",{class:!0,tabindex:!0});var s=$(e);n.l(s),s.forEach(g),this.h()},h(){b(e,"class","flex flex-col mt-2 question-selection-type"),b(e,"tabindex","0"),A(e,"preview",t[1]),A(e,"bg-gray-100",!t[1])},m(n,c){y(n,e,c),o[s].m(e,null),t[20](e),l=!0,i||(r=[T(e,"click",t[9]),T(e,"focusout",t[21])],i=!0)},p(t,[l]){let i=s;s=a(t),s===i?o[s].p(t,l):(F(),k(o[i],1,1,(()=>{o[i]=null})),H(),n=o[s],n?n.p(t,l):(n=o[s]=c[s](t),n.c()),I(n,1),n.m(e,null)),2&l&&A(e,"preview",t[1]),2&l&&A(e,"bg-gray-100",!t[1])},i(t){l||(I(n),l=!0)},o(t){k(n),l=!1},d(n){n&&g(e),o[s].d(),t[20](null),i=!1,O(r)}}}function Ct(t,e,s){const n=V();let l,i,c,{question:o}=e,{index:a=0}=e,{preview:u=!1}=e;function p(t){const e=[...o.options];e.splice(t,1),s(0,o.options=[...e],o)}o.options.length||(o.options=["Option 1","Option 2"]);return t.$$set=t=>{"question"in t&&s(0,o=t.question),"index"in t&&s(2,a=t.index),"preview"in t&&s(1,u=t.preview)},[o,u,a,l,i,c,n,function(){s(0,o.options=[...o.options,"Option "+(o.options.length+1)],o),function(){r(this,null,(function*(){yield z();const t=i.querySelectorAll(".setup--question-item:not(.other-option-item) input");t.length&&t[t.length-1].focus()}))}()},p,function(){return r(this,null,(function*(){const t=u;s(1,u=t&&!1),t&&(yield z(),c.focus())}))},()=>n("delete",a),function(t){N[t?"unshift":"push"]((()=>{c=t,s(5,c)}))},function(){o.text=this.value,s(0,o)},function(t,e){t[e]=this.value,s(0,o)},t=>p(t),()=>s(0,o.hasOtherOption=!1,o),function(t){N[t?"unshift":"push"]((()=>{i=t,s(4,i)}))},()=>s(0,o.hasOtherOption=!0,o),function(){o.multiple=this.checked,s(0,o)},function(){o.required=this.checked,s(0,o)},function(t){N[t?"unshift":"push"]((()=>{l=t,s(3,l)}))},t=>s(1,u=!l.contains(t.relatedTarget))]}class Yt extends c{constructor(t){super(),o(this,t,Ct,zt,a,{question:0,index:2,preview:1})}}function Gt(t){let e,s,n,l,i,r,c,o,a,q,V,N,A,j,S,R,L,M,Q,X,_,F,H,z,C,Y,G,J,K,Z=t[2]+1+"";function et(t,e){return t[0].multiline?Wt:Kt}l=new W({props:{path:tt,width:"25px",height:"25px"}});let st=et(t),nt=st(t);return{c(){e=u("div"),s=u("div"),n=u("button"),p(l.$$.fragment),i=f(),r=u("div"),c=u("div"),o=h(Z),a=h("."),q=f(),V=u("div"),N=u("textarea"),A=f(),nt.c(),j=f(),S=u("div"),R=u("label"),L=u("input"),M=f(),Q=u("div"),X=h("Long answer"),_=f(),F=u("label"),H=u("input"),z=f(),C=u("div"),Y=h("Required"),this.h()},l(t){e=d(t,"DIV",{class:!0});var u=$(e);s=d(u,"DIV",{class:!0});var p=$(s);n=d(p,"BUTTON",{class:!0,title:!0});var f=$(n);m(l.$$.fragment,f),f.forEach(g),p.forEach(g),u.forEach(g),i=v(t),r=d(t,"DIV",{class:!0,style:!0});var h=$(r);c=d(h,"DIV",{class:!0});var b=$(c);o=x(b,Z),a=x(b,"."),b.forEach(g),q=v(h),V=d(h,"DIV",{class:!0,style:!0});var y=$(V);N=d(y,"TEXTAREA",{class:!0,placeholder:!0,type:!0,rows:!0}),$(N).forEach(g),A=v(y),nt.l(y),y.forEach(g),h.forEach(g),j=v(t),S=d(t,"DIV",{class:!0});var w=$(S);R=d(w,"LABEL",{class:!0,tabindex:!0});var E=$(R);L=d(E,"INPUT",{type:!0}),M=v(E),Q=d(E,"DIV",{class:!0});var T=$(Q);X=x(T,"Long answer"),T.forEach(g),E.forEach(g),_=v(w),F=d(w,"LABEL",{class:!0,tabindex:!0});var I=$(F);H=d(I,"INPUT",{type:!0}),z=v(I),C=d(I,"DIV",{class:!0});var k=$(C);Y=x(k,"Required"),k.forEach(g),I.forEach(g),w.forEach(g),this.h()},h(){b(n,"class","flex items-center px-3 py-2"),b(n,"title","Remove question"),b(s,"class","ml-auto"),b(e,"class","flex p-1 border-b"),b(c,"class","mr-2"),b(N,"class","p-2 setup--question-text"),b(N,"placeholder","Input a question"),b(N,"type","text"),b(N,"rows","3"),b(V,"class","flex flex-col flex-1"),U(V,"height","100%"),b(r,"class","flex w-full p-5 question-selection-type-inputs"),U(r,"height","100%"),b(L,"type","checkbox"),b(Q,"class","ml-2"),b(R,"class","flex items-center px-3 py-2"),b(R,"tabindex","0"),b(H,"type","checkbox"),b(C,"class","ml-2"),b(F,"class","flex items-center px-3 py-2"),b(F,"tabindex","0"),b(S,"class","flex flex-col p-1 border-t md:flex-row")},m(u,p){y(u,e,p),w(e,s),w(s,n),E(l,n,null),y(u,i,p),y(u,r,p),w(r,c),w(c,o),w(c,a),w(r,q),w(r,V),w(V,N),t[8](N),P(N,t[0].text),w(V,A),nt.m(V,null),y(u,j,p),y(u,S,p),w(S,R),w(R,L),L.checked=t[0].multiline,w(R,M),w(R,Q),w(Q,X),w(S,_),w(S,F),w(F,H),H.checked=t[0].required,w(F,z),w(F,C),w(C,Y),G=!0,J||(K=[T(n,"click",t[7]),T(N,"input",t[9]),T(L,"change",t[10]),T(H,"change",t[11])],J=!0)},p(t,e){(!G||4&e)&&Z!==(Z=t[2]+1+"")&&B(o,Z),1&e&&P(N,t[0].text),st!==(st=et(t))&&(nt.d(1),nt=st(t),nt&&(nt.c(),nt.m(V,null))),1&e&&(L.checked=t[0].multiline),1&e&&(H.checked=t[0].required)},i(t){G||(I(l.$$.fragment,t),G=!0)},o(t){k(l.$$.fragment,t),G=!1},d(s){s&&g(e),D(l),s&&g(i),s&&g(r),t[8](null),nt.d(),s&&g(j),s&&g(S),J=!1,O(K)}}}function Jt(t){let e,s;return e=new at({props:{number:t[2]+1,question:t[0]}}),{c(){p(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,n){E(e,t,n),s=!0},p(t,s){const n={};4&s&&(n.number=t[2]+1),1&s&&(n.question=t[0]),e.$set(n)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){D(e,t)}}}function Kt(t){let e;return{c(){e=u("input"),this.h()},l(t){e=d(t,"INPUT",{disabled:!0,class:!0,placeholder:!0,type:!0}),this.h()},h(){e.disabled=!0,b(e,"class","p-2 mt-2 border border-gray-400"),b(e,"placeholder","Input your answer"),b(e,"type","text")},m(t,s){y(t,e,s)},d(t){t&&g(e)}}}function Wt(t){let e;return{c(){e=u("textarea"),this.h()},l(t){e=d(t,"TEXTAREA",{class:!0,disabled:!0,placeholder:!0,rows:!0}),$(e).forEach(g),this.h()},h(){b(e,"class","p-2 mt-2 border border-gray-400"),e.disabled=!0,b(e,"placeholder","Input your answer"),b(e,"rows","3")},m(t,s){y(t,e,s)},d(t){t&&g(e)}}}function Zt(t){let e,s,n,l,i,r;const c=[Jt,Gt],o=[];function a(t,e){return t[1]?0:1}return s=a(t),n=o[s]=c[s](t),{c(){e=u("div"),n.c(),this.h()},l(t){e=d(t,"DIV",{class:!0,tabindex:!0});var s=$(e);n.l(s),s.forEach(g),this.h()},h(){b(e,"class","flex flex-col mt-2 question-selection-type"),b(e,"tabindex","0"),A(e,"preview",t[1]),A(e,"bg-gray-100",!t[1])},m(n,c){y(n,e,c),o[s].m(e,null),t[12](e),l=!0,i||(r=[T(e,"click",t[6]),T(e,"focusout",t[13])],i=!0)},p(t,[l]){let i=s;s=a(t),s===i?o[s].p(t,l):(F(),k(o[i],1,1,(()=>{o[i]=null})),H(),n=o[s],n?n.p(t,l):(n=o[s]=c[s](t),n.c()),I(n,1),n.m(e,null)),2&l&&A(e,"preview",t[1]),2&l&&A(e,"bg-gray-100",!t[1])},i(t){l||(I(n),l=!0)},o(t){k(n),l=!1},d(n){n&&g(e),o[s].d(),t[12](null),i=!1,O(r)}}}function te(t,e,s){const n=V();let l,i,{question:c}=e,{index:o=0}=e,{preview:a=!1}=e;return t.$$set=t=>{"question"in t&&s(0,c=t.question),"index"in t&&s(2,o=t.index),"preview"in t&&s(1,a=t.preview)},[c,a,o,l,i,n,function(){return r(this,null,(function*(){const t=a;s(1,a=t&&!1),t&&(yield z(),i.focus())}))},()=>n("delete",o),function(t){N[t?"unshift":"push"]((()=>{i=t,s(4,i)}))},function(){c.text=this.value,s(0,c)},function(){c.multiline=this.checked,s(0,c)},function(){c.required=this.checked,s(0,c)},function(t){N[t?"unshift":"push"]((()=>{l=t,s(3,l)}))},t=>s(1,a=!l.contains(t.relatedTarget))]}class ee extends c{constructor(t){super(),o(this,t,te,Zt,a,{question:0,index:2,preview:1})}}function se(t){let e,s,n,l,i,r,c,o,a,q,V,N,U,P,j,S,R,L,M=t[1]?"Sending...":"Send";return l=new W({props:{path:tt}}),N=new W({props:{path:et}}),{c(){e=u("div"),s=u("div"),n=u("button"),p(l.$$.fragment),i=f(),r=u("span"),c=h("Delete Form"),o=f(),a=u("input"),q=f(),V=u("button"),p(N.$$.fragment),U=f(),P=u("button"),j=h(M),this.h()},l(t){e=d(t,"DIV",{class:!0});var u=$(e);s=d(u,"DIV",{class:!0});var p=$(s);n=d(p,"BUTTON",{class:!0,title:!0});var f=$(n);m(l.$$.fragment,f),i=v(f),r=d(f,"SPAN",{class:!0});var h=$(r);c=x(h,"Delete Form"),h.forEach(g),f.forEach(g),o=v(p),a=d(p,"INPUT",{class:!0,type:!0,value:!0,title:!0}),q=v(p),V=d(p,"BUTTON",{class:!0,title:!0});var b=$(V);m(N.$$.fragment,b),b.forEach(g),U=v(p),P=d(p,"BUTTON",{class:!0,title:!0});var y=$(P);j=x(y,M),y.forEach(g),p.forEach(g),u.forEach(g),this.h()},h(){b(r,"class","hidden mx-2 md:inline-block"),b(n,"class","flex items-center p-1 mx-2"),b(n,"title","Delete this form"),b(a,"class","px-4 py-2 border"),b(a,"type","text"),a.value=t[2],b(a,"title",t[2]),A(a,"hidden",!t[0]),b(V,"class","p-1"),b(V,"title","Copy form link"),b(P,"class","px-4 py-2 ml-auto font-bold btn btn--primary"),b(P,"title","Send form"),b(s,"class","flex margin-page"),b(e,"class","p-2 bg-white form-actions")},m(u,p){y(u,e,p),w(e,s),w(s,n),E(l,n,null),w(n,i),w(n,r),w(r,c),w(s,o),w(s,a),w(s,q),w(s,V),E(N,V,null),w(s,U),w(s,P),w(P,j),S=!0,R||(L=[T(n,"click",t[6]),T(a,"click",t[4]),T(V,"click",t[4]),T(P,"click",t[5])],R=!0)},p(t,[e]){(!S||4&e&&a.value!==t[2])&&(a.value=t[2]),(!S||4&e)&&b(a,"title",t[2]),1&e&&A(a,"hidden",!t[0]),(!S||2&e)&&M!==(M=t[1]?"Sending...":"Send")&&B(j,M)},i(t){S||(I(l.$$.fragment,t),I(N.$$.fragment,t),S=!0)},o(t){k(l.$$.fragment,t),k(N.$$.fragment,t),S=!1},d(t){t&&g(e),D(l),D(N),R=!1,O(L)}}}function ne(t,e,s){let n;const l=V();let{id:i=""}=e,r=!1;return t.$$set=t=>{"id"in t&&s(0,i=t.id)},t.$$.update=()=>{1&t.$$.dirty&&s(2,n="https://donnisnoni.github.io/simple-form-builder//#/form/"+i)},[i,r,n,l,function(){navigator.clipboard.writeText(n)},function(){s(1,r=!0),setTimeout((()=>{s(1,r=!1)}),2e3)},()=>confirm("Are you sure want to delete this form?")&&l("delete-form-clicked")]}class le extends c{constructor(t){super(),o(this,t,ne,se,a,{id:0})}}function ie(t,e,s){const n=t.slice();return n[22]=e[s],n}function re(t,e,s){const n=t.slice();return n[25]=e[s],n[27]=s,n}function ce(t,e,s){const n=t.slice();return n[6]=e[s],n[28]=e,n[27]=s,n}function oe(t){let e;return{c(){e=h("Questions")},l(t){e=x(t,"Questions")},m(t,s){y(t,e,s)},d(t){t&&g(e)}}}function ae(t){let e;return{c(){e=h("Answers")},l(t){e=x(t,"Answers")},m(t,s){y(t,e,s)},d(t){t&&g(e)}}}function ue(t){let e,s,n,l;return e=new qt({props:{$$slots:{default:[oe]},$$scope:{ctx:t}}}),n=new qt({props:{$$slots:{default:[ae]},$$scope:{ctx:t}}}),{c(){p(e.$$.fragment),s=f(),p(n.$$.fragment)},l(t){m(e.$$.fragment,t),s=v(t),m(n.$$.fragment,t)},m(t,i){E(e,t,i),y(t,s,i),E(n,t,i),l=!0},p(t,s){const l={};536870912&s&&(l.$$scope={dirty:s,ctx:t}),e.$set(l);const i={};536870912&s&&(i.$$scope={dirty:s,ctx:t}),n.$set(i)},i(t){l||(I(e.$$.fragment,t),I(n.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),k(n.$$.fragment,t),l=!1},d(t){D(e,t),t&&g(s),D(n,t)}}}function pe(t){let e,s,n,l;function i(e){t[15](e,t[6])}function r(e){t[16](e,t[6],t[28],t[27])}let c={index:t[27]};return void 0!==t[6].preview&&(c.preview=t[6].preview),void 0!==t[6]&&(c.question=t[6]),e=new ee({props:c}),N.push((()=>J(e,"preview",i))),N.push((()=>J(e,"question",r))),e.$on("delete",t[3]),{c(){p(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,s){E(e,t,s),l=!0},p(l,i){t=l;const r={};!s&&1&i&&(s=!0,r.preview=t[6].preview,K((()=>s=!1))),!n&&1&i&&(n=!0,r.question=t[6],K((()=>n=!1))),e.$set(r)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){D(e,t)}}}function fe(t){let e,s,n,l;function i(e){t[13](e,t[6])}function r(e){t[14](e,t[6],t[28],t[27])}let c={index:t[27]};return void 0!==t[6].preview&&(c.preview=t[6].preview),void 0!==t[6]&&(c.question=t[6]),e=new Yt({props:c}),N.push((()=>J(e,"preview",i))),N.push((()=>J(e,"question",r))),e.$on("delete",t[3]),{c(){p(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,s){E(e,t,s),l=!0},p(l,i){t=l;const r={};!s&&1&i&&(s=!0,r.preview=t[6].preview,K((()=>s=!1))),!n&&1&i&&(n=!0,r.question=t[6],K((()=>n=!1))),e.$set(r)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){D(e,t)}}}function he(t){let e,s,n,l;const i=[fe,pe],r=[];function c(t,e){return"selection"===t[6].type?0:"essay"===t[6].type?1:-1}return~(e=c(t))&&(s=r[e]=i[e](t)),{c(){s&&s.c(),n=_()},l(t){s&&s.l(t),n=_()},m(t,s){~e&&r[e].m(t,s),y(t,n,s),l=!0},p(t,l){let o=e;e=c(t),e===o?~e&&r[e].p(t,l):(s&&(F(),k(r[o],1,1,(()=>{r[o]=null})),H()),~e?(s=r[e],s?s.p(t,l):(s=r[e]=i[e](t),s.c()),I(s,1),s.m(n.parentNode,n)):s=null)},i(t){l||(I(s),l=!0)},o(t){k(s),l=!1},d(t){~e&&r[e].d(t),t&&g(n)}}}function de(t){let e,s,n,l,i,r,c,o,a;function h(e){t[11](e)}function x(e){t[12](e)}let T={};void 0!==t[0].title&&(T.title=t[0].title),void 0!==t[0].description&&(T.description=t[0].description),s=new vt({props:T}),N.push((()=>J(s,"title",h))),N.push((()=>J(s,"description",x)));let q=t[0].questions,O=[];for(let u=0;u<q.length;u+=1)O[u]=he(ce(t,q,u));const V=t=>k(O[t],1,1,(()=>{O[t]=null}));return o=new ht({}),o.$on("onSelectQuestionType",t[4]),{c(){e=u("div"),p(s.$$.fragment),i=f();for(let t=0;t<O.length;t+=1)O[t].c();r=f(),c=u("div"),p(o.$$.fragment),this.h()},l(t){e=d(t,"DIV",{class:!0,tabindex:!0});var n=$(e);m(s.$$.fragment,n),i=v(n);for(let e=0;e<O.length;e+=1)O[e].l(n);r=v(n),c=d(n,"DIV",{class:!0});var l=$(c);m(o.$$.fragment,l),l.forEach(g),n.forEach(g),this.h()},h(){b(c,"class","p-5"),b(e,"class","p-5 form-setup-panel"),b(e,"tabindex","0")},m(n,l){y(n,e,l),E(s,e,null),w(e,i);for(let t=0;t<O.length;t+=1)O[t].m(e,null);w(e,r),w(e,c),E(o,c,null),t[17](e),a=!0},p(t,i){const c={};if(!n&&1&i&&(n=!0,c.title=t[0].title,K((()=>n=!1))),!l&&1&i&&(l=!0,c.description=t[0].description,K((()=>l=!1))),s.$set(c),9&i){let s;for(q=t[0].questions,s=0;s<q.length;s+=1){const n=ce(t,q,s);O[s]?(O[s].p(n,i),I(O[s],1)):(O[s]=he(n),O[s].c(),I(O[s],1),O[s].m(e,r))}for(F(),s=q.length;s<O.length;s+=1)V(s);H()}},i(t){if(!a){I(s.$$.fragment,t);for(let t=0;t<q.length;t+=1)I(O[t]);I(o.$$.fragment,t),a=!0}},o(t){k(s.$$.fragment,t),O=O.filter(Boolean);for(let e=0;e<O.length;e+=1)k(O[e]);k(o.$$.fragment,t),a=!1},d(n){n&&g(e),D(s),C(O,n),D(o),t[17](null)}}}function $e(t){let e,s,n,l,i,r,c,o,a,p,m=t[27]+1+"",E=t[0].questions[t[27]].text+"",T=(t[0].questions[t[27]].multiple?t[25].filter(be).join(", "):t[25])+"";return{c(){e=u("div"),s=u("div"),n=h(m),l=h("."),i=f(),r=u("div"),c=h(E),o=f(),a=u("div"),p=h(T),this.h()},l(t){e=d(t,"DIV",{class:!0});var u=$(e);s=d(u,"DIV",{class:!0});var f=$(s);n=x(f,m),l=x(f,"."),f.forEach(g),i=v(u),r=d(u,"DIV",{class:!0});var h=$(r);c=x(h,E),h.forEach(g),u.forEach(g),o=v(t),a=d(t,"DIV",{class:!0});var b=$(a);p=x(b,T),b.forEach(g),this.h()},h(){b(s,"class","mr-1"),b(r,"class","whitespace-pre"),b(e,"class","flex p-1 font-bold"),b(a,"class","p-1 ml-4 whitespace-pre")},m(t,u){y(t,e,u),w(e,s),w(s,n),w(s,l),w(e,i),w(e,r),w(r,c),y(t,o,u),y(t,a,u),w(a,p)},p(t,e){1&e&&E!==(E=t[0].questions[t[27]].text+"")&&B(c,E),5&e&&T!==(T=(t[0].questions[t[27]].multiple?t[25].filter(be).join(", "):t[25])+"")&&B(p,T)},d(t){t&&g(e),t&&g(o),t&&g(a)}}}function me(t){let e,s,n,l,i,r,c,o,a=t[22].name+"",p=t[22].phoneNumber+"",m=t[22].answers,E=[];for(let u=0;u<m.length;u+=1)E[u]=$e(re(t,m,u));return{c(){e=u("details"),s=u("summary"),n=h(a),l=h(" ("),i=h(p),r=h(")"),c=f();for(let t=0;t<E.length;t+=1)E[t].c();o=f(),this.h()},l(t){e=d(t,"DETAILS",{class:!0});var u=$(e);s=d(u,"SUMMARY",{class:!0});var f=$(s);n=x(f,a),l=x(f," ("),i=x(f,p),r=x(f,")"),f.forEach(g),c=v(u);for(let e=0;e<E.length;e+=1)E[e].l(u);o=v(u),u.forEach(g),this.h()},h(){b(s,"class","py-1 text-lg"),b(e,"class","mb-3 ml-1")},m(t,a){y(t,e,a),w(e,s),w(s,n),w(s,l),w(s,i),w(s,r),w(e,c);for(let s=0;s<E.length;s+=1)E[s].m(e,null);w(e,o)},p(t,s){if(4&s&&a!==(a=t[22].name+"")&&B(n,a),4&s&&p!==(p=t[22].phoneNumber+"")&&B(i,p),5&s){let n;for(m=t[22].answers,n=0;n<m.length;n+=1){const l=re(t,m,n);E[n]?E[n].p(l,s):(E[n]=$e(l),E[n].c(),E[n].m(e,o))}for(;n<E.length;n+=1)E[n].d(1);E.length=m.length}},d(t){t&&g(e),C(E,t)}}}function ge(t){let e,s,n,l,i,r,c,o,a,p=t[2].length+"",m=t[2],E=[];for(let u=0;u<m.length;u+=1)E[u]=me(ie(t,m,u));return{c(){e=u("div"),s=u("h2"),n=h("Answers from ("),l=h(p),i=h(" respondents)"),r=f(),c=u("hr"),o=f(),a=u("div");for(let t=0;t<E.length;t+=1)E[t].c();this.h()},l(t){e=d(t,"DIV",{class:!0,tabindex:!0});var u=$(e);s=d(u,"H2",{class:!0});var f=$(s);n=x(f,"Answers from ("),l=x(f,p),i=x(f," respondents)"),f.forEach(g),r=v(u),c=d(u,"HR",{class:!0}),o=v(u),a=d(u,"DIV",{class:!0});var h=$(a);for(let e=0;e<E.length;e+=1)E[e].l(h);h.forEach(g),u.forEach(g),this.h()},h(){b(s,"class","text-xl"),b(c,"class","my-2"),b(a,"class","flex flex-col"),b(e,"class","p-5"),b(e,"tabindex","0")},m(t,u){y(t,e,u),w(e,s),w(s,n),w(s,l),w(s,i),w(e,r),w(e,c),w(e,o),w(e,a);for(let e=0;e<E.length;e+=1)E[e].m(a,null)},p(t,e){if(4&e&&p!==(p=t[2].length+"")&&B(l,p),5&e){let s;for(m=t[2],s=0;s<m.length;s+=1){const n=ie(t,m,s);E[s]?E[s].p(n,e):(E[s]=me(n),E[s].c(),E[s].m(a,null))}for(;s<E.length;s+=1)E[s].d(1);E.length=m.length}},d(t){t&&g(e),C(E,t)}}}function ve(t){let e,s,n,l,i,r;return e=new Dt({props:{$$slots:{default:[ue]},$$scope:{ctx:t}}}),n=new At({props:{$$slots:{default:[de]},$$scope:{ctx:t}}}),i=new At({props:{$$slots:{default:[ge]},$$scope:{ctx:t}}}),{c(){p(e.$$.fragment),s=f(),p(n.$$.fragment),l=f(),p(i.$$.fragment)},l(t){m(e.$$.fragment,t),s=v(t),m(n.$$.fragment,t),l=v(t),m(i.$$.fragment,t)},m(t,c){E(e,t,c),y(t,s,c),E(n,t,c),y(t,l,c),E(i,t,c),r=!0},p(t,s){const l={};536870912&s&&(l.$$scope={dirty:s,ctx:t}),e.$set(l);const r={};536870915&s&&(r.$$scope={dirty:s,ctx:t}),n.$set(r);const c={};536870917&s&&(c.$$scope={dirty:s,ctx:t}),i.$set(c)},i(t){r||(I(e.$$.fragment,t),I(n.$$.fragment,t),I(i.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),k(n.$$.fragment,t),k(i.$$.fragment,t),r=!1},d(t){D(e,t),t&&g(s),D(n,t),t&&g(l),D(i,t)}}}function xe(t){let e,s,n,l,i,r;return e=new le({props:{id:t[0].id}}),e.$on("delete-form-clicked",t[5]),i=new wt({props:{$$slots:{default:[ve]},$$scope:{ctx:t}}}),{c(){p(e.$$.fragment),s=f(),n=u("div"),l=u("div"),p(i.$$.fragment),this.h()},l(t){m(e.$$.fragment,t),s=v(t),n=d(t,"DIV",{class:!0});var r=$(n);l=d(r,"DIV",{class:!0,style:!0});var c=$(l);m(i.$$.fragment,c),c.forEach(g),r.forEach(g),this.h()},h(){b(l,"class","w-full mx-5 my-10 bg-white shadow-md"),U(l,"max-width","700px"),b(n,"class","flex flex-col items-center")},m(t,c){E(e,t,c),y(t,s,c),y(t,n,c),w(n,l),E(i,l,null),r=!0},p(t,[s]){const n={};1&s&&(n.id=t[0].id),e.$set(n);const l={};536870919&s&&(l.$$scope={dirty:s,ctx:t}),i.$set(l)},i(t){r||(I(e.$$.fragment,t),I(i.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),k(i.$$.fragment,t),r=!1},d(t){D(e,t),t&&g(s),t&&g(n),D(i)}}}const be=t=>!!t;function ye(t,e,s){let n,l;X(t,st,(t=>s(10,l=t)));let{params:c}=e,{id:o}=e,a=!1;const u={text:"Question",required:!1},p=i(i({},u),{multiline:!1}),f=i(i({},u),{options:[],hasOtherOption:!1,multiple:!1});let h,d=i({},ut);return c&&c.id&&(o=c.id,d.id=o),Y((()=>(lt(d.id)?s(0,d=rt(o)):it(d),document.body.classList.add("bg-color-2"),s(9,a=!0),()=>document.body.classList.remove("bg-color-2")))),t.$$set=t=>{"params"in t&&s(8,c=t.params),"id"in t&&s(7,o=t.id)},t.$$.update=()=>{641&t.$$.dirty&&a&&d&&o&&ct(o,d),1152&t.$$.dirty&&s(2,n=l.filter((t=>t.id===o)))},[d,h,n,function({detail:t}){const e=d.questions;e.splice(t,1),s(0,d.questions=e,d)},function({detail:t}){let e={type:t};switch(t){case"selection":e=i(i({},e),f);break;case"essay":e=i(i({},e),p)}!function(t){s(0,d.questions=[...d.questions,t],d)}(e),function(){r(this,null,(function*(){yield z(),document.activeElement.blur(),h.querySelector(".setup--question-text").focus()}))}()},function(){nt(d.id),G("/")},u,o,c,a,l,function(e){t.$$.not_equal(d.title,e)&&(d.title=e,s(0,d))},function(e){t.$$.not_equal(d.description,e)&&(d.description=e,s(0,d))},function(e,n){t.$$.not_equal(n.preview,e)&&(n.preview=e,s(0,d))},function(t,e,n,l){n[l]=t,s(0,d)},function(e,n){t.$$.not_equal(n.preview,e)&&(n.preview=e,s(0,d))},function(t,e,n,l){n[l]=t,s(0,d)},function(t){N[t?"unshift":"push"]((()=>{h=t,s(1,h)}))}]}export default class extends c{constructor(t){super(),o(this,t,ye,xe,a,{params:8,id:7})}}