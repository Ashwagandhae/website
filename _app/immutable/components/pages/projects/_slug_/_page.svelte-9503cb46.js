import{S as X,i as Z,s as J,w as D,a as T,k as g,x as I,c as C,l as h,m as $,h as o,n as u,y as L,b as _,G as p,f as d,t as b,z as M,M as K,Z as G,o as O,a2 as Q,e as F,g as U,d as Y,W as y,q as V,X as x,r as q,u as P,a3 as j}from"../../../../chunks/index-893b3148.js";import{T as ee,C as B}from"../../../../chunks/TopCards-acedb3e4.js";import{T as te}from"../../../../chunks/Tags-e3a79130.js";import{L as se}from"../../../../chunks/LinkGroup-5c5965db.js";import{p as H}from"../../../../chunks/accessibility-9fe6fc1a.js";import{b as le}from"../../../../chunks/paths-b4419565.js";function ae(n){let t,r,l,e=n[0].icon.svg+"",s,a,f=n[0].name+"",i,c,v,w=n[0].description+"",E;return{c(){t=g("div"),r=g("div"),l=y("svg"),s=T(),a=g("h1"),i=V(f),c=T(),v=g("p"),E=V(w),this.h()},l(k){t=h(k,"DIV",{class:!0});var m=$(t);r=h(m,"DIV",{class:!0});var S=$(r);l=x(S,"svg",{viewBox:!0,fill:!0,xmlns:!0});var W=$(l);W.forEach(o),S.forEach(o),s=C(m),a=h(m,"H1",{class:!0});var z=$(a);i=q(z,f),z.forEach(o),c=C(m),v=h(m,"P",{class:!0});var A=$(v);E=q(A,w),A.forEach(o),m.forEach(o),this.h()},h(){u(l,"viewBox","0 0 500 500"),u(l,"fill","none"),u(l,"xmlns","http://www.w3.org/2000/svg"),u(r,"class","icon svelte-hppmgc"),u(a,"class","svelte-hppmgc"),u(v,"class","svelte-hppmgc"),u(t,"class","header svelte-hppmgc")},m(k,m){_(k,t,m),p(t,r),p(r,l),l.innerHTML=e,p(t,s),p(t,a),p(a,i),p(t,c),p(t,v),p(v,E)},p(k,m){m&1&&e!==(e=k[0].icon.svg+"")&&(l.innerHTML=e),m&1&&f!==(f=k[0].name+"")&&P(i,f),m&1&&w!==(w=k[0].description+"")&&P(E,w)},d(k){k&&o(t)}}}function re(n){let t,r,l,e,s;return e=new se({props:{links:n[0].links}}),{c(){t=g("h2"),r=V("Links"),l=T(),D(e.$$.fragment)},l(a){t=h(a,"H2",{});var f=$(t);r=q(f,"Links"),f.forEach(o),l=C(a),I(e.$$.fragment,a)},m(a,f){_(a,t,f),p(t,r),_(a,l,f),L(e,a,f),s=!0},p(a,f){const i={};f&1&&(i.links=a[0].links),e.$set(i)},i(a){s||(d(e.$$.fragment,a),s=!0)},o(a){b(e.$$.fragment,a),s=!1},d(a){a&&o(t),a&&o(l),M(e,a)}}}function ne(n){let t,r,l,e;return t=new B({props:{path:"./projects",$$slots:{default:[ae]},$$scope:{ctx:n}}}),l=new B({props:{$$slots:{default:[re]},$$scope:{ctx:n}}}),{c(){D(t.$$.fragment),r=T(),D(l.$$.fragment)},l(s){I(t.$$.fragment,s),r=C(s),I(l.$$.fragment,s)},m(s,a){L(t,s,a),_(s,r,a),L(l,s,a),e=!0},p(s,a){const f={};a&9&&(f.$$scope={dirty:a,ctx:s}),t.$set(f);const i={};a&9&&(i.$$scope={dirty:a,ctx:s}),l.$set(i)},i(s){e||(d(t.$$.fragment,s),d(l.$$.fragment,s),e=!0)},o(s){b(t.$$.fragment,s),b(l.$$.fragment,s),e=!1},d(s){M(t,s),s&&o(r),M(l,s)}}}function ie(n){let t,r,l;return{c(){t=g("img"),this.h()},l(e){t=h(e,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){j(t.src,r=le+"/images/"+n[1])||u(t,"src",r),u(t,"alt",l=n[0].name),u(t,"class","svelte-hppmgc")},m(e,s){_(e,t,s)},p(e,s){s&1&&l!==(l=e[0].name)&&u(t,"alt",l)},d(e){e&&o(t)}}}function fe(n){let t,r,l;return{c(){t=g("iframe"),this.h()},l(e){t=h(e,"IFRAME",{title:!0,src:!0,class:!0}),$(t).forEach(o),this.h()},h(){u(t,"title",r=n[0].name),j(t.src,l=n[0].iframe)||u(t,"src",l),u(t,"class","svelte-hppmgc")},m(e,s){_(e,t,s)},p(e,s){s&1&&r!==(r=e[0].name)&&u(t,"title",r),s&1&&!j(t.src,l=e[0].iframe)&&u(t,"src",l)},d(e){e&&o(t)}}}function oe(n){let t;function r(s,a){if(s[0].iframe!=null)return fe;if(s[1]!=null)return ie}let l=r(n),e=l&&l(n);return{c(){e&&e.c(),t=F()},l(s){e&&e.l(s),t=F()},m(s,a){e&&e.m(s,a),_(s,t,a)},p(s,a){l===(l=r(s))&&e?e.p(s,a):(e&&e.d(1),e=l&&l(s),e&&(e.c(),e.m(t.parentNode,t)))},d(s){e&&e.d(s),s&&o(t)}}}function N(n){let t,r=n[0].longDescription+"",l;return{c(){t=g("p"),l=V(r)},l(e){t=h(e,"P",{});var s=$(t);l=q(s,r),s.forEach(o)},m(e,s){_(e,t,s),p(t,l)},p(e,s){s&1&&r!==(r=e[0].longDescription+"")&&P(l,r)},d(e){e&&o(t)}}}function R(n){let t,r;return t=new te({props:{tags:n[0].tags,interactive:!0}}),{c(){D(t.$$.fragment)},l(l){I(t.$$.fragment,l)},m(l,e){L(t,l,e),r=!0},p(l,e){const s={};e&1&&(s.tags=l[0].tags),t.$set(s)},i(l){r||(d(t.$$.fragment,l),r=!0)},o(l){b(t.$$.fragment,l),r=!1},d(l){M(t,l)}}}function ce(n){let t,r,l,e=n[0].longDescription!=null&&N(n),s=n[0].tags!=null&&R(n);return{c(){t=g("div"),e&&e.c(),r=T(),s&&s.c(),this.h()},l(a){t=h(a,"DIV",{class:!0});var f=$(t);e&&e.l(f),r=C(f),s&&s.l(f),f.forEach(o),this.h()},h(){u(t,"class","details svelte-hppmgc")},m(a,f){_(a,t,f),e&&e.m(t,null),p(t,r),s&&s.m(t,null),l=!0},p(a,f){a[0].longDescription!=null?e?e.p(a,f):(e=N(a),e.c(),e.m(t,r)):e&&(e.d(1),e=null),a[0].tags!=null?s?(s.p(a,f),f&1&&d(s,1)):(s=R(a),s.c(),d(s,1),s.m(t,null)):s&&(U(),b(s,1,1,()=>{s=null}),Y())},i(a){l||(d(s),l=!0)},o(a){b(s),l=!1},d(a){a&&o(t),e&&e.d(),s&&s.d()}}}function ue(n){let t,r,l,e,s,a,f;return t=new ee({props:{$$slots:{default:[ne]},$$scope:{ctx:n}}}),e=new B({props:{hideBack:!0,$$slots:{default:[oe]},$$scope:{ctx:n}}}),a=new B({props:{$$slots:{default:[ce]},$$scope:{ctx:n}}}),{c(){D(t.$$.fragment),r=T(),l=g("div"),D(e.$$.fragment),s=T(),D(a.$$.fragment),this.h()},l(i){I(t.$$.fragment,i),r=C(i),l=h(i,"DIV",{class:!0});var c=$(l);I(e.$$.fragment,c),s=C(c),I(a.$$.fragment,c),c.forEach(o),this.h()},h(){u(l,"class","content svelte-hppmgc")},m(i,c){L(t,i,c),_(i,r,c),_(i,l,c),L(e,l,null),p(l,s),L(a,l,null),f=!0},p(i,[c]){const v={};c&9&&(v.$$scope={dirty:c,ctx:i}),t.$set(v);const w={};c&9&&(w.$$scope={dirty:c,ctx:i}),e.$set(w);const E={};c&9&&(E.$$scope={dirty:c,ctx:i}),a.$set(E)},i(i){f||(d(t.$$.fragment,i),d(e.$$.fragment,i),d(a.$$.fragment,i),f=!0)},o(i){b(t.$$.fragment,i),b(e.$$.fragment,i),b(a.$$.fragment,i),f=!1},d(i){M(t,i),i&&o(r),i&&o(l),M(e),M(a)}}}function me(n,t,r){let l;K(n,H,a=>r(2,l=a));let{data:e}=t;G(H,l=e.icon.color,l),O(()=>{G(H,l=e.icon.color,l)}),Q(()=>{G(H,l=null,l)});let s=e.image==null?null:typeof e.image=="string"?e.image:e.slug+".jpg";return n.$$set=a=>{"data"in a&&r(0,e=a.data)},[e,s]}class ve extends X{constructor(t){super(),Z(this,t,me,ue,J,{data:0})}}export{ve as default};