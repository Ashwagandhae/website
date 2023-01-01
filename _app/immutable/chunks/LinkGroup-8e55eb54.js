import{S as d,i as p,s as k,W as B,X as E,m as g,h as _,n as c,b as m,H as w,o as G,T as N,e as H,g as I,t as h,d as T,f as C,k as b,w as v,l as L,x as y,y as M,P as S,z as Z,Y as q,Z as A,_ as D,$ as O}from"./index-1a3b963f.js";import{a as P}from"./stores-a121d2fc.js";function U(a){let e,n;return{c(){e=B("svg"),this.h()},l(i){e=E(i,"svg",{style:!0,viewBox:!0,fill:!0,stroke:!0,class:!0}),g(e).forEach(_),this.h()},h(){c(e,"style",n=`width:${a[0]};height:${a[0]};`),c(e,"viewBox","0 0 "+500+" "+500),c(e,"fill","none"),c(e,"stroke","var(--text)"),c(e,"class","svelte-rh2wva")},m(i,t){m(i,e,t),a[3](e)},p(i,[t]){t&1&&n!==(n=`width:${i[0]};height:${i[0]};`)&&c(e,"style",n)},i:w,o:w,d(i){i&&_(e),a[3](null)}}}function W(a,e,n){let{name:i}=e,{size:t="1rem"}=e,s=[{name:"discord",svg:`
			<path fill-rule="evenodd" clip-rule="evenodd" d="M200 400C200 427.614 177.614 450 150 450H100C72.3857 450 50 427.614 50 400L50 100C50 72.3858 72.3858 50 100 50L400 50C427.614 50 450 72.3858 450 100L450 400C450 427.614 427.614 450 400 450H350C322.386 450 300 427.614 300 400C300 372.386 277.614 350 250 350C222.386 350 200 372.386 200 400ZM225 250C225 277.614 202.614 300 175 300C147.386 300 125 277.614 125 250C125 222.386 147.386 200 175 200C202.614 200 225 222.386 225 250ZM325 300C352.614 300 375 277.614 375 250C375 222.386 352.614 200 325 200C297.386 200 275 222.386 275 250C275 277.614 297.386 300 325 300Z" fill="currentColor"/>
			`},{name:"gitHub",svg:'<path d="M450 300C450 327.614 427.614 350 400 350H350L350 400C350 427.614 327.614 450 300 450L75 450C61.1929 450 50 438.807 50 425C50 411.193 61.1929 400 75 400H100C127.614 400 150 377.614 150 350H100C72.3857 350 50 327.614 50 300L50 100C50 72.3858 72.3858 50 100 50L125 50C138.807 50 150 61.1929 150 75C150 88.8071 161.193 100 175 100H325C338.807 100 350 88.8071 350 75C350 61.1929 361.193 50 375 50L400 50C427.614 50 450 72.3858 450 100V300Z" fill="currentColor"/>'},{name:"mail",svg:`<path d="M100 200C72.3858 200 50 177.614 50 150L50 100C50 72.3858 72.3858 50 100 50L400 50C427.614 50 450 72.3858 450 100L450 150C450 177.614 427.614 200 400 200L100 200Z" fill="currentColor"/>
<path d="M100 450C72.3858 450 50 427.614 50 400L50 300C50 272.386 72.3858 250 100 250L400 250C427.614 250 450 272.386 450 300L450 400C450 427.614 427.614 450 400 450L100 450Z" fill="currentColor"/>`},{name:"linkedIn",svg:`<path d="M150 400C150 427.614 127.614 450 100 450C72.3857 450 50 427.614 50 400L50 250C50 222.386 72.3858 200 100 200C127.614 200 150 222.386 150 250L150 400Z" fill="currentColor"/>
<path d="M100 150C72.3858 150 50 127.614 50 100C50 72.3858 72.3858 50 100 50C127.614 50 150 72.3858 150 100C150 127.614 127.614 150 100 150Z" fill="currentColor"/>
<path d="M450 400C450 427.614 427.614 450 400 450C372.386 450 350 427.614 350 400L350 175C350 161.193 338.807 150 325 150C311.193 150 300 161.193 300 175L300 400C300 427.614 277.614 450 250 450C222.386 450 200 427.614 200 400L200 100C200 72.3858 222.386 50 250 50L400 50C427.614 50 450 72.3858 450 100L450 400Z" fill="currentColor"/>`},{name:"browser",svg:`<path d="M450 100C450 127.614 427.614 150 400 150L250 150C222.386 150 200 127.614 200 100V100C200 72.3858 222.386 50 250 50L325 50L400 50C427.614 50 450 72.3858 450 100V100Z" fill="currentColor"/>
<path d="M150 100C150 127.614 127.614 150 100 150V150C72.3858 150 50 127.614 50 100V100C50 72.3858 72.3858 50 100 50V50V50C127.614 50 150 72.3858 150 100V100Z" fill="currentColor"/>
<path d="M450 400C450 427.614 427.614 450 400 450L100 450C72.3858 450 50 427.614 50 400L50 250C50 222.386 72.3858 200 100 200L400 200C427.614 200 450 222.386 450 250L450 400Z" fill="currentColor"/>`}],l;function o(){l=s.find(f=>f.name===i),l!=null&&r&&n(1,r.innerHTML=l.svg,r)}G(o);let r;function u(f){N[f?"unshift":"push"](()=>{r=f,n(1,r)})}return a.$$set=f=>{"name"in f&&n(2,i=f.name),"size"in f&&n(0,t=f.size)},a.$$.update=()=>{a.$$.dirty&4&&o()},[t,r,i,u]}class j extends d{constructor(e){super(),p(this,e,W,U,k,{name:2,size:0})}}function X(a){let e,n,i,t,s;return n=new j({props:{name:a[0],size:"1.5rem"}}),{c(){e=b("button"),v(n.$$.fragment),this.h()},l(l){e=L(l,"BUTTON",{class:!0,"aria-label":!0});var o=g(e);y(n.$$.fragment,o),o.forEach(_),this.h()},h(){c(e,"class","link svelte-16tnjnx"),c(e,"aria-label",a[1])},m(l,o){m(l,e,o),M(n,e,null),i=!0,t||(s=S(e,"click",a[4]),t=!0)},p(l,o){const r={};o&1&&(r.name=l[0]),n.$set(r),(!i||o&2)&&c(e,"aria-label",l[1])},i(l){i||(C(n.$$.fragment,l),i=!0)},o(l){h(n.$$.fragment,l),i=!1},d(l){l&&_(e),Z(n),t=!1,s()}}}function Y(a){let e,n,i;return n=new j({props:{name:a[0],size:"1.5rem"}}),{c(){e=b("a"),v(n.$$.fragment),this.h()},l(t){e=L(t,"A",{href:!0,target:!0,rel:!0,class:!0,"aria-label":!0});var s=g(e);y(n.$$.fragment,s),s.forEach(_),this.h()},h(){c(e,"href",a[2]),c(e,"target","_blank"),c(e,"rel",a[2]),c(e,"class","link svelte-16tnjnx"),c(e,"aria-label",a[1])},m(t,s){m(t,e,s),M(n,e,null),i=!0},p(t,s){const l={};s&1&&(l.name=t[0]),n.$set(l),(!i||s&4)&&c(e,"href",t[2]),(!i||s&4)&&c(e,"rel",t[2]),(!i||s&2)&&c(e,"aria-label",t[1])},i(t){i||(C(n.$$.fragment,t),i=!0)},o(t){h(n.$$.fragment,t),i=!1},d(t){t&&_(e),Z(n)}}}function F(a){let e,n,i,t;const s=[Y,X],l=[];function o(r,u){return r[2]?0:r[3]!=null?1:-1}return~(e=o(a))&&(n=l[e]=s[e](a)),{c(){n&&n.c(),i=H()},l(r){n&&n.l(r),i=H()},m(r,u){~e&&l[e].m(r,u),m(r,i,u),t=!0},p(r,[u]){let f=e;e=o(r),e===f?~e&&l[e].p(r,u):(n&&(I(),h(l[f],1,1,()=>{l[f]=null}),T()),~e?(n=l[e],n?n.p(r,u):(n=l[e]=s[e](r),n.c()),C(n,1),n.m(i.parentNode,i)):n=null)},i(r){t||(C(n),t=!0)},o(r){h(n),t=!1},d(r){~e&&l[e].d(r),r&&_(i)}}}function J(a,e,n){let{icon:i}=e,{label:t}=e,{link:s=null}=e,{copy:l=null}=e;function o(){navigator.clipboard.writeText(l),P.addMessage("Copied to clipboard")}return a.$$set=r=>{"icon"in r&&n(0,i=r.icon),"label"in r&&n(1,t=r.label),"link"in r&&n(2,s=r.link),"copy"in r&&n(3,l=r.copy)},[i,t,s,l,o]}class K extends d{constructor(e){super(),p(this,e,J,F,k,{icon:0,label:1,link:2,copy:3})}}function V(a,e,n){const i=a.slice();return i[1]=e[n],i}function z(a){let e,n;const i=[a[1]];let t={};for(let s=0;s<i.length;s+=1)t=A(t,i[s]);return e=new K({props:t}),{c(){v(e.$$.fragment)},l(s){y(e.$$.fragment,s)},m(s,l){M(e,s,l),n=!0},p(s,l){const o=l&1?D(i,[O(s[1])]):{};e.$set(o)},i(s){n||(C(e.$$.fragment,s),n=!0)},o(s){h(e.$$.fragment,s),n=!1},d(s){Z(e,s)}}}function Q(a){let e,n,i=a[0],t=[];for(let l=0;l<i.length;l+=1)t[l]=z(V(a,i,l));const s=l=>h(t[l],1,1,()=>{t[l]=null});return{c(){e=b("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=L(l,"DIV",{class:!0});var o=g(e);for(let r=0;r<t.length;r+=1)t[r].l(o);o.forEach(_),this.h()},h(){c(e,"class","top svelte-1rjyibt")},m(l,o){m(l,e,o);for(let r=0;r<t.length;r+=1)t[r].m(e,null);n=!0},p(l,[o]){if(o&1){i=l[0];let r;for(r=0;r<i.length;r+=1){const u=V(l,i,r);t[r]?(t[r].p(u,o),C(t[r],1)):(t[r]=z(u),t[r].c(),C(t[r],1),t[r].m(e,null))}for(I(),r=i.length;r<t.length;r+=1)s(r);T()}},i(l){if(!n){for(let o=0;o<i.length;o+=1)C(t[o]);n=!0}},o(l){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)h(t[o]);n=!1},d(l){l&&_(e),q(t,l)}}}function R(a,e,n){let{links:i=[]}=e;return a.$$set=t=>{"links"in t&&n(0,i=t.links)},[i]}class e0 extends d{constructor(e){super(),p(this,e,R,Q,k,{links:0})}}export{e0 as L};
