import{S as O,i as Q,s as U,C as j,k as B,a as L,l as E,m as P,c as R,h as v,n as k,P as b,b as G,G as C,Q as y,D as z,E as K,F as N,f as W,H as le,J as te,t as X,R as se,q as V,r as H,T as ne,u as S,U as T,V as Y,o as ie}from"./index-893b3148.js";import{b as M}from"./paths-b4419565.js";import{r as ae,f as fe,g as ue,p as w}from"./accessibility-9fe6fc1a.js";function A(l){let e,t,n,a,h;return{c(){e=B("a"),t=V(l[0]),this.h()},l(i){e=E(i,"A",{"data-sveltekit-noscroll":!0,href:!0,class:!0});var s=P(e);t=H(s,l[0]),s.forEach(v),this.h()},h(){k(e,"data-sveltekit-noscroll",""),k(e,"href",n=M+"/"+l[1]),k(e,"class","svelte-1eipv7h")},m(i,s){G(i,e,s),C(e,t),a||(h=y(e,"click",function(){ne(l[7])&&l[7].apply(this,arguments)}),a=!0)},p(i,s){l=i,s&1&&S(t,l[0]),s&2&&n!==(n=M+"/"+l[1])&&k(e,"href",n)},d(i){i&&v(e),a=!1,h()}}}function F(l){let e,t;return{c(){e=B("h1"),t=V(l[0]),this.h()},l(n){e=E(n,"H1",{class:!0});var a=P(e);t=H(a,l[0]),a.forEach(v),this.h()},h(){k(e,"class","svelte-1eipv7h")},m(n,a){G(n,e,a),C(e,t)},p(n,a){a&1&&S(t,n[0])},d(n){n&&v(e)}}}function J(l){let e,t;return{c(){e=B("p"),t=V(l[2])},l(n){e=E(n,"P",{});var a=P(e);t=H(a,l[2]),a.forEach(v)},m(n,a){G(n,e,a),C(e,t)},p(n,a){a&4&&S(t,n[2])},d(n){n&&v(e)}}}function oe(l){let e,t,n,a,h,i,s,c,g,f=l[1]!=null&&A(l),r=l[0]!=null&&F(l),_=l[2]!=null&&J(l);const q=l[14].default,d=j(q,l,l[13],null);return{c(){e=B("div"),f&&f.c(),t=L(),r&&r.c(),n=L(),_&&_.c(),a=L(),h=B("div"),d&&d.c(),this.h()},l(m){e=E(m,"DIV",{class:!0,style:!0});var o=P(e);f&&f.l(o),t=R(o),r&&r.l(o),n=R(o),_&&_.l(o),a=R(o),h=E(o,"DIV",{class:!0});var D=P(h);d&&d.l(D),D.forEach(v),o.forEach(v),this.h()},h(){k(h,"class","content svelte-1eipv7h"),k(e,"class","card svelte-1eipv7h"),k(e,"style",l[10]),b(e,"hideBack",l[4]),b(e,"square",l[3]),b(e,"fullContent",l[5]),b(e,"hoverable",l[6]||l[1]!=null)},m(m,o){G(m,e,o),f&&f.m(e,null),C(e,t),r&&r.m(e,null),C(e,n),_&&_.m(e,null),C(e,a),C(e,h),d&&d.m(h,null),l[19](e),s=!0,c||(g=[y(e,"mouseenter",l[17]),y(e,"mouseleave",l[18]),y(e,"mouseenter",l[15]),y(e,"mouseleave",l[16])],c=!0)},p(m,[o]){l=m,l[1]!=null?f?f.p(l,o):(f=A(l),f.c(),f.m(e,t)):f&&(f.d(1),f=null),l[0]!=null?r?r.p(l,o):(r=F(l),r.c(),r.m(e,n)):r&&(r.d(1),r=null),l[2]!=null?_?_.p(l,o):(_=J(l),_.c(),_.m(e,a)):_&&(_.d(1),_=null),d&&d.p&&(!s||o&8192)&&z(d,q,l,l[13],s?N(q,l[13],o,null):K(l[13]),null),(!s||o&1024)&&k(e,"style",l[10]),(!s||o&16)&&b(e,"hideBack",l[4]),(!s||o&8)&&b(e,"square",l[3]),(!s||o&32)&&b(e,"fullContent",l[5]),(!s||o&66)&&b(e,"hoverable",l[6]||l[1]!=null)},i(m){s||(W(d,m),i||le(()=>{i=te(e,fe,{y:ae()?0:15,duration:800,delay:l[9].getBoundingClientRect().top+l[9].getBoundingClientRect().left*.5}),i.start()}),s=!0)},o(m){X(d,m),s=!1},d(m){m&&v(e),f&&f.d(),r&&r.d(),_&&_.d(),d&&d.d(m),l[19](null),c=!1,se(g)}}}function re(l,e,t){let n,{$$slots:a={},$$scope:h}=e,{title:i=null}=e,{path:s=null}=e,{subtitle:c=null}=e,{square:g=!1}=e,{hideBack:f=!1}=e,{palette:r=null}=e,{fullContent:_=!1}=e,{hoverable:q=!1}=e,{modifyGlobalPalette:d=!1}=e,{onLinkClick:m=()=>{}}=e,o;function D(){d&&(o?w.set(r):w.set(null))}let I;function Z(u){T.call(this,l,u)}function p(u){T.call(this,l,u)}const x=()=>t(8,o=!0),$=()=>t(8,o=!1);function ee(u){Y[u?"unshift":"push"](()=>{I=u,t(9,I)})}return l.$$set=u=>{"title"in u&&t(0,i=u.title),"path"in u&&t(1,s=u.path),"subtitle"in u&&t(2,c=u.subtitle),"square"in u&&t(3,g=u.square),"hideBack"in u&&t(4,f=u.hideBack),"palette"in u&&t(11,r=u.palette),"fullContent"in u&&t(5,_=u.fullContent),"hoverable"in u&&t(6,q=u.hoverable),"modifyGlobalPalette"in u&&t(12,d=u.modifyGlobalPalette),"onLinkClick"in u&&t(7,m=u.onLinkClick),"$$scope"in u&&t(13,h=u.$$scope)},l.$$.update=()=>{l.$$.dirty&2048&&t(10,n=ue(r)),l.$$.dirty&2304&&D()},[i,s,c,g,f,_,q,m,o,I,n,r,d,h,a,Z,p,x,$,ee]}class be extends O{constructor(e){super(),Q(this,e,re,oe,U,{title:0,path:1,subtitle:2,square:3,hideBack:4,palette:11,fullContent:5,hoverable:6,modifyGlobalPalette:12,onLinkClick:7})}}function he(l){let e,t,n,a;const h=l[4].default,i=j(h,l,l[3],null);return{c(){e=B("div"),i&&i.c(),this.h()},l(s){e=E(s,"DIV",{class:!0});var c=P(e);i&&i.l(c),c.forEach(v),this.h()},h(){k(e,"class","svelte-1b1mq84"),b(e,"stuck",l[2]),b(e,"single",l[0])},m(s,c){G(s,e,c),i&&i.m(e,null),l[6](e),t=!0,n||(a=y(e,"scroll",l[5]),n=!0)},p(s,[c]){i&&i.p&&(!t||c&8)&&z(i,h,s,s[3],t?N(h,s[3],c,null):K(s[3]),null),(!t||c&4)&&b(e,"stuck",s[2]),(!t||c&1)&&b(e,"single",s[0])},i(s){t||(W(i,s),t=!0)},o(s){X(i,s),t=!1},d(s){s&&v(e),i&&i.d(s),l[6](null),n=!1,a()}}}function _e(l,e,t){let{$$slots:n={},$$scope:a}=e,{single:h=!1}=e,i,s=!1;ie(()=>{new IntersectionObserver(([r])=>{t(2,s=r.intersectionRatio<1)},{threshold:[1]}).observe(i)});function c(f){T.call(this,l,f)}function g(f){Y[f?"unshift":"push"](()=>{i=f,t(1,i)})}return l.$$set=f=>{"single"in f&&t(0,h=f.single),"$$scope"in f&&t(3,a=f.$$scope)},[h,i,s,a,n,c,g]}class ve extends O{constructor(e){super(),Q(this,e,_e,he,U,{single:0})}}export{be as C,ve as T};