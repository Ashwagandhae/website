import{S as d,i as k,s as p,W as E,X as j,m as g,h as _,n as c,b as m,H as w,o as G,T as N,e as H,g as T,t as h,d as I,f as C,k as L,w as b,l as v,x as y,y as M,P as S,z as Z,Y as U,Z as q,_ as A,$ as O}from"./index-1a3b963f.js";import{a as P}from"./stores-a121d2fc.js";function W(a){let e,l;return{c(){e=E("svg"),this.h()},l(i){e=j(i,"svg",{style:!0,viewBox:!0,fill:!0,stroke:!0,class:!0}),g(e).forEach(_),this.h()},h(){c(e,"style",l=`width:${a[0]};height:${a[0]};`),c(e,"viewBox","0 0 "+500+" "+500),c(e,"fill","none"),c(e,"stroke","var(--text)"),c(e,"class","svelte-rh2wva")},m(i,t){m(i,e,t),a[3](e)},p(i,[t]){t&1&&l!==(l=`width:${i[0]};height:${i[0]};`)&&c(e,"style",l)},i:w,o:w,d(i){i&&_(e),a[3](null)}}}function X(a,e,l){let{name:i}=e,{size:t="1rem"}=e,s=[{name:"discord",svg:`
			<path fill-rule="evenodd" clip-rule="evenodd" d="M200 400C200 427.614 177.614 450 150 450H100C72.3857 450 50 427.614 50 400L50 100C50 72.3858 72.3858 50 100 50L400 50C427.614 50 450 72.3858 450 100L450 400C450 427.614 427.614 450 400 450H350C322.386 450 300 427.614 300 400C300 372.386 277.614 350 250 350C222.386 350 200 372.386 200 400ZM225 250C225 277.614 202.614 300 175 300C147.386 300 125 277.614 125 250C125 222.386 147.386 200 175 200C202.614 200 225 222.386 225 250ZM325 300C352.614 300 375 277.614 375 250C375 222.386 352.614 200 325 200C297.386 200 275 222.386 275 250C275 277.614 297.386 300 325 300Z" fill="currentColor"/>
			`},{name:"gitHub",svg:'<path d="M450 300C450 327.614 427.614 350 400 350H350L350 400C350 427.614 327.614 450 300 450L75 450C61.1929 450 50 438.807 50 425C50 411.193 61.1929 400 75 400H100C127.614 400 150 377.614 150 350H100C72.3857 350 50 327.614 50 300L50 100C50 72.3858 72.3858 50 100 50L125 50C138.807 50 150 61.1929 150 75C150 88.8071 161.193 100 175 100H325C338.807 100 350 88.8071 350 75C350 61.1929 361.193 50 375 50L400 50C427.614 50 450 72.3858 450 100V300Z" fill="currentColor"/>'},{name:"mail",svg:`<path d="M100 200C72.3858 200 50 177.614 50 150L50 100C50 72.3858 72.3858 50 100 50L400 50C427.614 50 450 72.3858 450 100L450 150C450 177.614 427.614 200 400 200L100 200Z" fill="currentColor"/>
<path d="M100 450C72.3858 450 50 427.614 50 400L50 300C50 272.386 72.3858 250 100 250L400 250C427.614 250 450 272.386 450 300L450 400C450 427.614 427.614 450 400 450L100 450Z" fill="currentColor"/>`},{name:"linkedIn",svg:`<path d="M150 400C150 427.614 127.614 450 100 450C72.3857 450 50 427.614 50 400L50 250C50 222.386 72.3858 200 100 200C127.614 200 150 222.386 150 250L150 400Z" fill="currentColor"/>
<path d="M100 150C72.3858 150 50 127.614 50 100C50 72.3858 72.3858 50 100 50C127.614 50 150 72.3858 150 100C150 127.614 127.614 150 100 150Z" fill="currentColor"/>
<path d="M450 400C450 427.614 427.614 450 400 450C372.386 450 350 427.614 350 400L350 175C350 161.193 338.807 150 325 150C311.193 150 300 161.193 300 175L300 400C300 427.614 277.614 450 250 450C222.386 450 200 427.614 200 400L200 100C200 72.3858 222.386 50 250 50L400 50C427.614 50 450 72.3858 450 100L450 400Z" fill="currentColor"/>`},{name:"browser",svg:`<path d="M450 100C450 127.614 427.614 150 400 150L250 150C222.386 150 200 127.614 200 100V100C200 72.3858 222.386 50 250 50L325 50L400 50C427.614 50 450 72.3858 450 100V100Z" fill="currentColor"/>
<path d="M150 100C150 127.614 127.614 150 100 150V150C72.3858 150 50 127.614 50 100V100C50 72.3858 72.3858 50 100 50V50V50C127.614 50 150 72.3858 150 100V100Z" fill="currentColor"/>
<path d="M450 400C450 427.614 427.614 450 400 450L100 450C72.3858 450 50 427.614 50 400L50 250C50 222.386 72.3858 200 100 200L400 200C427.614 200 450 222.386 450 250L450 400Z" fill="currentColor"/>`}],n;function o(){n=s.find(f=>f.name===i),n!=null&&r&&l(1,r.innerHTML=n.svg,r)}G(o);let r;function u(f){N[f?"unshift":"push"](()=>{r=f,l(1,r)})}return a.$$set=f=>{"name"in f&&l(2,i=f.name),"size"in f&&l(0,t=f.size)},a.$$.update=()=>{a.$$.dirty&4&&o()},[t,r,i,u]}class B extends d{constructor(e){super(),k(this,e,X,W,p,{name:2,size:0})}}function Y(a){let e,l,i,t,s;return l=new B({props:{name:a[0],size:"1.5rem"}}),{c(){e=L("button"),b(l.$$.fragment),this.h()},l(n){e=v(n,"BUTTON",{class:!0,"aria-label":!0});var o=g(e);y(l.$$.fragment,o),o.forEach(_),this.h()},h(){c(e,"class","link svelte-16tnjnx"),c(e,"aria-label",a[1])},m(n,o){m(n,e,o),M(l,e,null),i=!0,t||(s=S(e,"click",a[4]),t=!0)},p(n,o){const r={};o&1&&(r.name=n[0]),l.$set(r),(!i||o&2)&&c(e,"aria-label",n[1])},i(n){i||(C(l.$$.fragment,n),i=!0)},o(n){h(l.$$.fragment,n),i=!1},d(n){n&&_(e),Z(l),t=!1,s()}}}function D(a){let e,l,i;return l=new B({props:{name:a[0],size:"1.5rem"}}),{c(){e=L("a"),b(l.$$.fragment),this.h()},l(t){e=v(t,"A",{href:!0,target:!0,rel:!0,class:!0,"aria-label":!0});var s=g(e);y(l.$$.fragment,s),s.forEach(_),this.h()},h(){c(e,"href",a[2]),c(e,"target","_blank"),c(e,"rel",a[2]),c(e,"class","link svelte-16tnjnx"),c(e,"aria-label",a[1])},m(t,s){m(t,e,s),M(l,e,null),i=!0},p(t,s){const n={};s&1&&(n.name=t[0]),l.$set(n),(!i||s&4)&&c(e,"href",t[2]),(!i||s&4)&&c(e,"rel",t[2]),(!i||s&2)&&c(e,"aria-label",t[1])},i(t){i||(C(l.$$.fragment,t),i=!0)},o(t){h(l.$$.fragment,t),i=!1},d(t){t&&_(e),Z(l)}}}function F(a){let e,l,i,t;const s=[D,Y],n=[];function o(r,u){return r[2]?0:r[3]!=null?1:-1}return~(e=o(a))&&(l=n[e]=s[e](a)),{c(){l&&l.c(),i=H()},l(r){l&&l.l(r),i=H()},m(r,u){~e&&n[e].m(r,u),m(r,i,u),t=!0},p(r,[u]){let f=e;e=o(r),e===f?~e&&n[e].p(r,u):(l&&(T(),h(n[f],1,1,()=>{n[f]=null}),I()),~e?(l=n[e],l?l.p(r,u):(l=n[e]=s[e](r),l.c()),C(l,1),l.m(i.parentNode,i)):l=null)},i(r){t||(C(l),t=!0)},o(r){h(l),t=!1},d(r){~e&&n[e].d(r),r&&_(i)}}}function J(a,e,l){let{icon:i}=e,{label:t}=e,{link:s=null}=e,{copy:n=null}=e;function o(){navigator.clipboard.writeText(n),P.addMessage("Copied to clipboard")}return a.$$set=r=>{"icon"in r&&l(0,i=r.icon),"label"in r&&l(1,t=r.label),"link"in r&&l(2,s=r.link),"copy"in r&&l(3,n=r.copy)},[i,t,s,n,o]}class K extends d{constructor(e){super(),k(this,e,J,F,p,{icon:0,label:1,link:2,copy:3})}}function z(a,e,l){const i=a.slice();return i[1]=e[l],i}function V(a){let e,l;const i=[a[1]];let t={};for(let s=0;s<i.length;s+=1)t=q(t,i[s]);return e=new K({props:t}),{c(){b(e.$$.fragment)},l(s){y(e.$$.fragment,s)},m(s,n){M(e,s,n),l=!0},p(s,n){const o=n&1?A(i,[O(s[1])]):{};e.$set(o)},i(s){l||(C(e.$$.fragment,s),l=!0)},o(s){h(e.$$.fragment,s),l=!1},d(s){Z(e,s)}}}function Q(a){let e,l,i=a[0],t=[];for(let n=0;n<i.length;n+=1)t[n]=V(z(a,i,n));const s=n=>h(t[n],1,1,()=>{t[n]=null});return{c(){e=L("ul");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=v(n,"UL",{class:!0});var o=g(e);for(let r=0;r<t.length;r+=1)t[r].l(o);o.forEach(_),this.h()},h(){c(e,"class","links svelte-1tgn69z")},m(n,o){m(n,e,o);for(let r=0;r<t.length;r+=1)t[r].m(e,null);l=!0},p(n,[o]){if(o&1){i=n[0];let r;for(r=0;r<i.length;r+=1){const u=z(n,i,r);t[r]?(t[r].p(u,o),C(t[r],1)):(t[r]=V(u),t[r].c(),C(t[r],1),t[r].m(e,null))}for(T(),r=i.length;r<t.length;r+=1)s(r);I()}},i(n){if(!l){for(let o=0;o<i.length;o+=1)C(t[o]);l=!0}},o(n){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)h(t[o]);l=!1},d(n){n&&_(e),U(t,n)}}}function R(a,e,l){let{links:i=[]}=e;return a.$$set=t=>{"links"in t&&l(0,i=t.links)},[i]}class e0 extends d{constructor(e){super(),k(this,e,R,Q,p,{links:0})}}export{e0 as L};
