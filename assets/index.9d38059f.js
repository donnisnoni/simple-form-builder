import{S as e,i as t,s as l,e as s,p as a,a as n,d as r,b as c,f,g as o,l as i,q as m,h as d,c as u,m as h,t as p,j as x,k as g,u as v,n as w}from"./vendor.5cbd1b72.js";import{I as b,m as $,f as j}from"./store.f274ceb9.js";function y(e,t,l){const s=e.slice();return s[1]=t[l],s}function C(e){let t,l,u,h,p,x,g,v,w,b,$,j=e[1].description+"",y=e[1].title+"";return{c(){t=s("a"),l=s("div"),u=a(j),h=n(),p=s("div"),x=a(y),g=n(),r(l,"class","flex items-center justify-center new-form-card"),r(p,"class","my-2 text-center"),r(t,"class","relative flex flex-col w-full form-card"),r(t,"href",v="/form/edit/"+e[1].id),r(t,"title",w=e[1].title)},m(e,s){c(e,t,s),f(t,l),f(l,u),f(t,h),f(t,p),f(p,x),f(t,g),b||($=o(i.call(null,t)),b=!0)},p(e,l){1&l&&j!==(j=e[1].description+"")&&m(u,j),1&l&&y!==(y=e[1].title+"")&&m(x,y),1&l&&v!==(v="/form/edit/"+e[1].id)&&r(t,"href",v),1&l&&w!==(w=e[1].title)&&r(t,"title",w)},d(e){e&&d(t),b=!1,$()}}}function N(e){let t,l,a,m,w,j,N,k,q,F,I,R,S,z,A,B,D,E;k=new b({props:{path:$}});let G=e[0],H=[];for(let s=0;s<G.length;s+=1)H[s]=C(y(e,G,s));return{c(){t=s("main"),l=s("div"),a=s("h3"),a.textContent="New",m=n(),w=s("div"),j=s("a"),N=s("div"),u(k.$$.fragment),q=n(),F=s("div"),F.textContent="New form",I=n(),R=s("div"),S=s("h3"),S.textContent="Recent Forms",z=n(),A=s("div");for(let e=0;e<H.length;e+=1)H[e].c();r(a,"class","p-2 font-bold h3"),r(N,"class","flex items-center justify-center new-form-card"),r(F,"class","my-2 text-center"),r(j,"class","flex flex-col form-card"),r(j,"href","/form/edit/new"),r(j,"title","Create new form"),r(w,"class","m-3"),r(l,"class","mt-4"),r(S,"class","p-2 font-bold h3"),r(A,"class","flex flex-col gap-2 m-3 md:flex-row"),r(R,"class","mt-4"),r(t,"class","margin-page")},m(e,s){c(e,t,s),f(t,l),f(l,a),f(l,m),f(l,w),f(w,j),f(j,N),h(k,N,null),f(j,q),f(j,F),f(t,I),f(t,R),f(R,S),f(R,z),f(R,A);for(let t=0;t<H.length;t+=1)H[t].m(A,null);B=!0,D||(E=o(i.call(null,j)),D=!0)},p(e,[t]){if(1&t){let l;for(G=e[0],l=0;l<G.length;l+=1){const s=y(e,G,l);H[l]?H[l].p(s,t):(H[l]=C(s),H[l].c(),H[l].m(A,null))}for(;l<H.length;l+=1)H[l].d(1);H.length=G.length}},i(e){B||(p(k.$$.fragment,e),B=!0)},o(e){x(k.$$.fragment,e),B=!1},d(e){e&&d(t),g(k),v(H,e),D=!1,E()}}}function k(e,t,l){let s;return w(e,j,(e=>l(0,s=e))),[s]}export default class extends e{constructor(e){super(),t(this,e,k,N,l,{})}}
