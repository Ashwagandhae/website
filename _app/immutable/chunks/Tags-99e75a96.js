import{S,i as q,s as w,e as b,b as v,K as y,h as f,k as m,q as E,l as g,m as d,r as A,n as h,G as k,u as D,U as T,f as u,g as I,d as N,t as p,T as P,w as U,x as V,y as j,z as B}from"./index-da3e65cf.js";import{b as C}from"./paths-b4419565.js";function G(l){let e,s;return{c(){e=m("span"),s=E(l[0]),this.h()},l(t){e=g(t,"SPAN",{class:!0});var n=d(e);s=A(n,l[0]),n.forEach(f),this.h()},h(){h(e,"class","tag svelte-zrze92")},m(t,n){v(t,e,n),k(e,s)},p(t,n){n&1&&D(s,t[0])},d(t){t&&f(e)}}}function K(l){let e,s;return{c(){e=m("a"),s=E(l[0]),this.h()},l(t){e=g(t,"A",{class:!0,"data-sveltekit-noscroll":!0,href:!0});var n=d(e);s=A(n,l[0]),n.forEach(f),this.h()},h(){h(e,"class","tag svelte-zrze92"),h(e,"data-sveltekit-noscroll",""),h(e,"href",C+"/projects?"+l[2].toString())},m(t,n){v(t,e,n),k(e,s)},p(t,n){n&1&&D(s,t[0])},d(t){t&&f(e)}}}function L(l){let e;function s(a,c){return a[1]?K:G}let t=s(l),n=t(l);return{c(){n.c(),e=b()},l(a){n.l(a),e=b()},m(a,c){n.m(a,c),v(a,e,c)},p(a,[c]){t===(t=s(a))&&n?n.p(a,c):(n.d(1),n=t(a),n&&(n.c(),n.m(e.parentNode,e)))},i:y,o:y,d(a){n.d(a),a&&f(e)}}}function R(l,e,s){let{name:t}=e,{interactive:n}=e,a=new URLSearchParams;return a.set("tags",t),l.$$set=c=>{"name"in c&&s(0,t=c.name),"interactive"in c&&s(1,n=c.interactive)},[t,n,a]}class F extends S{constructor(e){super(),q(this,e,R,L,w,{name:0,interactive:1})}}function W(l,e,s){const t=l.slice();return t[3]=e[s],t}function z(l){let e,s;return e=new F({props:{name:l[3],interactive:l[2]}}),{c(){U(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,n){j(e,t,n),s=!0},p(t,n){const a={};n&1&&(a.name=t[3]),n&4&&(a.interactive=t[2]),e.$set(a)},i(t){s||(u(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){B(e,t)}}}function H(l){let e,s,t,n=l[0],a=[];for(let i=0;i<n.length;i+=1)a[i]=z(W(l,n,i));const c=i=>p(a[i],1,1,()=>{a[i]=null});return{c(){e=m("div"),s=m("div");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){e=g(i,"DIV",{class:!0});var o=d(e);s=g(o,"DIV",{class:!0});var r=d(s);for(let _=0;_<a.length;_+=1)a[_].l(r);r.forEach(f),o.forEach(f),this.h()},h(){h(s,"class","row svelte-cmq3n5"),T(s,"capWidth",l[1]),h(e,"class","tags svelte-cmq3n5")},m(i,o){v(i,e,o),k(e,s);for(let r=0;r<a.length;r+=1)a[r].m(s,null);t=!0},p(i,[o]){if(o&5){n=i[0];let r;for(r=0;r<n.length;r+=1){const _=W(i,n,r);a[r]?(a[r].p(_,o),u(a[r],1)):(a[r]=z(_),a[r].c(),u(a[r],1),a[r].m(s,null))}for(I(),r=n.length;r<a.length;r+=1)c(r);N()}(!t||o&2)&&T(s,"capWidth",i[1])},i(i){if(!t){for(let o=0;o<n.length;o+=1)u(a[o]);t=!0}},o(i){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)p(a[o]);t=!1},d(i){i&&f(e),P(a,i)}}}function J(l,e,s){let{tags:t=[]}=e,{capWidth:n=!1}=e,{interactive:a=!1}=e;return l.$$set=c=>{"tags"in c&&s(0,t=c.tags),"capWidth"in c&&s(1,n=c.capWidth),"interactive"in c&&s(2,a=c.interactive)},[t,n,a]}class Q extends S{constructor(e){super(),q(this,e,J,H,w,{tags:0,capWidth:1,interactive:2})}}export{Q as T};
