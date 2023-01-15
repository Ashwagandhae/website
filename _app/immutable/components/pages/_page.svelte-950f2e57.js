import{S as M,i as T,s as P,k as h,l as v,m as g,h as u,n as d,b,G as $,g as B,t as j,H as A,d as z,f as y,V as N,W as U,L as W,M as X,N as Y,w,x as k,y as x,z as I,q as H,a as E,r as L,c as C,X as F,J as K,Y as O}from"../../chunks/index-f9810a0e.js";import{C as D,T as Q}from"../../chunks/TopCards-c5853af6.js";import{L as R}from"../../chunks/LinkGroup-24aada74.js";import{f as J,p as S}from"../../chunks/accessibility-9adb4774.js";function q(o){let t,r,s=o[0].icon.svg+"",n,e,a;return{c(){t=h("div"),r=N("svg"),this.h()},l(l){t=v(l,"DIV",{class:!0});var f=g(t);r=U(f,"svg",{viewBox:!0,fill:!0,xmlns:!0,class:!0});var p=g(r);p.forEach(u),f.forEach(u),this.h()},h(){d(r,"viewBox","0 0 500 500"),d(r,"fill","none"),d(r,"xmlns","http://www.w3.org/2000/svg"),d(r,"class","svelte-5hxx6j"),d(t,"class","transition svelte-5hxx6j")},m(l,f){b(l,t,f),$(t,r),r.innerHTML=s,a=!0},p(l,f){o=l,(!a||f&1)&&s!==(s=o[0].icon.svg+"")&&(r.innerHTML=s)},i(l){a||(l&&W(()=>{e&&e.end(1),n=X(t,J,{...o[2],duration:400,delay:400}),n.start()}),a=!0)},o(l){n&&n.invalidate(),l&&(e=Y(t,J,{...o[3],duration:400})),a=!1},d(l){l&&u(t),l&&e&&e.end()}}}function Z(o){let t,r,s=o[1],n=q(o);return{c(){t=h("div"),r=h("div"),n.c(),this.h()},l(e){t=v(e,"DIV",{class:!0});var a=g(t);r=v(a,"DIV",{class:!0});var l=g(r);n.l(l),l.forEach(u),a.forEach(u),this.h()},h(){d(r,"class","icon svelte-5hxx6j"),d(t,"class","display svelte-5hxx6j")},m(e,a){b(e,t,a),$(t,r),n.m(r,null)},p(e,[a]){a&2&&P(s,s=e[1])?(B(),j(n,1,1,A),z(),n=q(e),n.c(),y(n,1),n.m(r,null)):n.p(e,a)},i(e){y(n)},o(e){j(n)},d(e){e&&u(t),n.d(e)}}}function ee(o,t,r){let{project:s}=t,n=!1;const e=[{x:15,y:0},{x:-15,y:0},{x:0,y:15},{x:0,y:-15}];let a=Math.floor(Math.random()*e.length),l,f;function p(){a+=Math.floor(Math.random()*3)+1,a%=e.length,r(2,l=e[a]),r(3,f={x:-l.x,y:-l.y}),r(1,n=!n)}return o.$$set=i=>{"project"in i&&r(0,s=i.project)},o.$$.update=()=>{o.$$.dirty&1&&p()},[s,n,l,f]}class te extends M{constructor(t){super(),T(this,t,ee,Z,P,{project:0})}}function se(o){let t,r,s,n,e,a,l,f,p,i;return p=new te({props:{project:o[0]}}),{c(){t=h("div"),r=h("div"),s=h("h1"),n=H("Projects"),e=E(),a=h("p"),l=H("Things that I have created"),f=E(),w(p.$$.fragment),this.h()},l(c){t=v(c,"DIV",{class:!0});var m=g(t);r=v(m,"DIV",{class:!0});var _=g(r);s=v(_,"H1",{});var V=g(s);n=L(V,"Projects"),V.forEach(u),e=C(_),a=v(_,"P",{});var G=g(a);l=L(G,"Things that I have created"),G.forEach(u),_.forEach(u),f=C(m),k(p.$$.fragment,m),m.forEach(u),this.h()},h(){d(r,"class","text"),d(t,"class","projects svelte-wtf7t0")},m(c,m){b(c,t,m),$(t,r),$(r,s),$(s,n),$(r,e),$(r,a),$(a,l),$(t,f),x(p,t,null),i=!0},p(c,m){const _={};m&1&&(_.project=c[0]),p.$set(_)},i(c){i||(y(p.$$.fragment,c),i=!0)},o(c){j(p.$$.fragment,c),i=!1},d(c){c&&u(t),I(p)}}}function re(o){let t,r;return t=new D({props:{path:"projects",palette:o[0].icon.color,fullContent:!0,modifyGlobalPalette:!0,$$slots:{default:[se]},$$scope:{ctx:o}}}),{c(){w(t.$$.fragment)},l(s){k(t.$$.fragment,s)},m(s,n){x(t,s,n),r=!0},p(s,[n]){const e={};n&1&&(e.palette=s[0].icon.color),n&9&&(e.$$scope={dirty:n,ctx:s}),t.$set(e)},i(s){r||(y(t.$$.fragment,s),r=!0)},o(s){j(t.$$.fragment,s),r=!1},d(s){I(t,s)}}}function ae(o,t,r){let s,{projects:n}=t,e=0;return setInterval(()=>{r(2,e=(e+1)%n.length)},2500),o.$$set=a=>{"projects"in a&&r(1,n=a.projects)},o.$$.update=()=>{o.$$.dirty&6&&r(0,s=n[e])},[s,n,e]}class ne extends M{constructor(t){super(),T(this,t,ae,re,P,{projects:1})}}function le(o){let t,r,s,n,e;return n=new R({props:{links:[{icon:"gitHub",link:"https://github.com/Ashwagandhae/",label:"Link to GitHub"},{icon:"linkedIn",link:"https://www.linkedin.com/in/julian-bauer-32823b246/",label:"Link to LinkedIn"},{icon:"mail",copy:"julianlianbauer@gmail.com",label:"Copy email"}]}}),{c(){t=h("h2"),r=H("Contacts"),s=E(),w(n.$$.fragment),this.h()},l(a){t=v(a,"H2",{class:!0});var l=g(t);r=L(l,"Contacts"),l.forEach(u),s=C(a),k(n.$$.fragment,a),this.h()},h(){d(t,"class","svelte-1h09blo")},m(a,l){b(a,t,l),$(t,r),b(a,s,l),x(n,a,l),e=!0},p:A,i(a){e||(y(n.$$.fragment,a),e=!0)},o(a){j(n.$$.fragment,a),e=!1},d(a){a&&u(t),a&&u(s),I(n,a)}}}function oe(o){let t,r,s,n;return t=new D({props:{title:"Hello, I'm Julian",subtitle:"Coder, student, human"}}),s=new D({props:{$$slots:{default:[le]},$$scope:{ctx:o}}}),{c(){w(t.$$.fragment),r=E(),w(s.$$.fragment)},l(e){k(t.$$.fragment,e),r=C(e),k(s.$$.fragment,e)},m(e,a){x(t,e,a),b(e,r,a),x(s,e,a),n=!0},p(e,a){const l={};a&4&&(l.$$scope={dirty:a,ctx:e}),s.$set(l)},i(e){n||(y(t.$$.fragment,e),y(s.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),j(s.$$.fragment,e),n=!1},d(e){I(t,e),e&&u(r),I(s,e)}}}function ie(o){let t,r,s,n,e,a,l,f,p;return s=new Q({props:{$$slots:{default:[oe]},$$scope:{ctx:o}}}),a=new ne({props:{projects:o[0].projects}}),f=new D({props:{title:"Skills",subtitle:"Stuff that I have learned",path:"skills"}}),{c(){t=h("meta"),r=E(),w(s.$$.fragment),n=E(),e=h("div"),w(a.$$.fragment),l=E(),w(f.$$.fragment),this.h()},l(i){const c=F("svelte-1fev5ch",document.head);t=v(c,"META",{name:!0,content:!0}),c.forEach(u),r=C(i),k(s.$$.fragment,i),n=C(i),e=v(i,"DIV",{class:!0});var m=g(e);k(a.$$.fragment,m),l=C(m),k(f.$$.fragment,m),m.forEach(u),this.h()},h(){document.title="Julian's website",d(t,"name","description"),d(t,"content","Julian's personal website"),d(e,"class","content svelte-1h09blo")},m(i,c){$(document.head,t),b(i,r,c),x(s,i,c),b(i,n,c),b(i,e,c),x(a,e,null),$(e,l),x(f,e,null),p=!0},p(i,[c]){const m={};c&4&&(m.$$scope={dirty:c,ctx:i}),s.$set(m);const _={};c&1&&(_.projects=i[0].projects),a.$set(_)},i(i){p||(y(s.$$.fragment,i),y(a.$$.fragment,i),y(f.$$.fragment,i),p=!0)},o(i){j(s.$$.fragment,i),j(a.$$.fragment,i),j(f.$$.fragment,i),p=!1},d(i){u(t),i&&u(r),I(s,i),i&&u(n),i&&u(e),I(a),I(f)}}}function ce(o,t,r){let s;K(o,S,e=>r(1,s=e)),O(S,s=null,s);let{data:n}=t;return o.$$set=e=>{"data"in e&&r(0,n=e.data)},[n]}class de extends M{constructor(t){super(),T(this,t,ce,ie,P,{data:0})}}export{de as default};
