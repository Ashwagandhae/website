import{S as T,i as y,s as L,V as M,W as C,m as d,h as f,n as u,b as g,H as z,o as N,e as P,g as V,t as m,d as D,f as _,k,w as p,l as v,x as E,y as j,P as B,R as U,z as w,Z as S,_ as q,$ as F,a0 as G}from"./index-f9810a0e.js";import{_ as h}from"./preload-helper-41c905a7.js";/* empty css                                                */import{a as W}from"./accessibility-9adb4774.js";function Z(o){var l;let e,n=((l=o[1])==null?void 0:l.svg)+"",i;return{c(){e=M("svg"),this.h()},l(r){e=C(r,"svg",{style:!0,viewBox:!0,fill:!0,stroke:!0,class:!0});var t=d(e);t.forEach(f),this.h()},h(){u(e,"style",i=`width:${o[0]};height:${o[0]};`),u(e,"viewBox","0 0 "+500+" "+500),u(e,"fill","none"),u(e,"stroke","var(--text)"),u(e,"class","svelte-rh2wva")},m(r,t){g(r,e,t),e.innerHTML=n},p(r,[t]){var a;t&2&&n!==(n=((a=r[1])==null?void 0:a.svg)+"")&&(e.innerHTML=n),t&1&&i!==(i=`width:${r[0]};height:${r[0]};`)&&u(e,"style",i)},i:z,o:z,d(r){r&&f(e)}}}function $(o,e,n){let{name:i}=e,{size:l="1rem"}=e,r;const t=Object.entries(Object.assign({"/src/lib/icons/browser.json":()=>h(()=>import("./browser-03299244.js"),[],import.meta.url),"/src/lib/icons/discord.json":()=>h(()=>import("./discord-921d9295.js"),[],import.meta.url),"/src/lib/icons/gitHub.json":()=>h(()=>import("./gitHub-b8dc8153.js"),[],import.meta.url),"/src/lib/icons/linkedIn.json":()=>h(()=>import("./linkedIn-79a5417e.js"),[],import.meta.url),"/src/lib/icons/mail.json":()=>h(()=>import("./mail-bc52dd99.js"),[],import.meta.url),"/src/lib/icons/tag.json":()=>h(()=>import("./tag-fbcfab19.js"),[],import.meta.url)}));Promise.all(t.map(async([c,b])=>{var I;const H=await b();return[(I=c.split("/").pop())==null?void 0:I.replace(".json",""),H]})).then(c=>{n(3,r=Object.fromEntries(c))});let a;function s(){r!=null&&n(1,a=r[i])}return N(s),o.$$set=c=>{"name"in c&&n(2,i=c.name),"size"in c&&n(0,l=c.size)},o.$$.update=()=>{o.$$.dirty&12&&s()},[l,a,i,r]}class O extends T{constructor(e){super(),y(this,e,$,Z,L,{name:2,size:0})}}function J(o){let e,n,i,l,r;return n=new O({props:{name:o[0],size:"1.5rem"}}),{c(){e=k("button"),p(n.$$.fragment),this.h()},l(t){e=v(t,"BUTTON",{class:!0,"aria-label":!0});var a=d(e);E(n.$$.fragment,a),a.forEach(f),this.h()},h(){u(e,"class","link svelte-16tnjnx"),u(e,"aria-label",o[1])},m(t,a){g(t,e,a),j(n,e,null),i=!0,l||(r=B(e,"click",function(){U(o[4])&&o[4].apply(this,arguments)}),l=!0)},p(t,a){o=t;const s={};a&1&&(s.name=o[0]),n.$set(s),(!i||a&2)&&u(e,"aria-label",o[1])},i(t){i||(_(n.$$.fragment,t),i=!0)},o(t){m(n.$$.fragment,t),i=!1},d(t){t&&f(e),w(n),l=!1,r()}}}function K(o){let e,n,i,l,r;return n=new O({props:{name:o[0],size:"1.5rem"}}),{c(){e=k("button"),p(n.$$.fragment),this.h()},l(t){e=v(t,"BUTTON",{class:!0,"aria-label":!0});var a=d(e);E(n.$$.fragment,a),a.forEach(f),this.h()},h(){u(e,"class","link svelte-16tnjnx"),u(e,"aria-label",o[1])},m(t,a){g(t,e,a),j(n,e,null),i=!0,l||(r=B(e,"click",o[5]),l=!0)},p(t,a){const s={};a&1&&(s.name=t[0]),n.$set(s),(!i||a&2)&&u(e,"aria-label",t[1])},i(t){i||(_(n.$$.fragment,t),i=!0)},o(t){m(n.$$.fragment,t),i=!1},d(t){t&&f(e),w(n),l=!1,r()}}}function Q(o){let e,n,i;return n=new O({props:{name:o[0],size:"1.5rem"}}),{c(){e=k("a"),p(n.$$.fragment),this.h()},l(l){e=v(l,"A",{href:!0,target:!0,rel:!0,class:!0,"aria-label":!0});var r=d(e);E(n.$$.fragment,r),r.forEach(f),this.h()},h(){u(e,"href",o[2]),u(e,"target","_blank"),u(e,"rel",o[2]),u(e,"class","link svelte-16tnjnx"),u(e,"aria-label",o[1])},m(l,r){g(l,e,r),j(n,e,null),i=!0},p(l,r){const t={};r&1&&(t.name=l[0]),n.$set(t),(!i||r&4)&&u(e,"href",l[2]),(!i||r&4)&&u(e,"rel",l[2]),(!i||r&2)&&u(e,"aria-label",l[1])},i(l){i||(_(n.$$.fragment,l),i=!0)},o(l){m(n.$$.fragment,l),i=!1},d(l){l&&f(e),w(n)}}}function X(o){let e,n,i,l;const r=[Q,K,J],t=[];function a(s,c){return s[2]?0:s[3]!=null?1:s[4]!=null?2:-1}return~(e=a(o))&&(n=t[e]=r[e](o)),{c(){n&&n.c(),i=P()},l(s){n&&n.l(s),i=P()},m(s,c){~e&&t[e].m(s,c),g(s,i,c),l=!0},p(s,[c]){let b=e;e=a(s),e===b?~e&&t[e].p(s,c):(n&&(V(),m(t[b],1,1,()=>{t[b]=null}),D()),~e?(n=t[e],n?n.p(s,c):(n=t[e]=r[e](s),n.c()),_(n,1),n.m(i.parentNode,i)):n=null)},i(s){l||(_(n),l=!0)},o(s){m(n),l=!1},d(s){~e&&t[e].d(s),s&&f(i)}}}function Y(o,e,n){let{icon:i}=e,{label:l}=e,{link:r=null}=e,{copy:t=null}=e,{callback:a=null}=e;function s(){navigator.clipboard.writeText(t),W.addMessage("Copied to clipboard")}return o.$$set=c=>{"icon"in c&&n(0,i=c.icon),"label"in c&&n(1,l=c.label),"link"in c&&n(2,r=c.link),"copy"in c&&n(3,t=c.copy),"callback"in c&&n(4,a=c.callback)},[i,l,r,t,a,s]}class x extends T{constructor(e){super(),y(this,e,Y,X,L,{icon:0,label:1,link:2,copy:3,callback:4})}}function A(o,e,n){const i=o.slice();return i[1]=e[n],i}function R(o){let e,n;const i=[o[1]];let l={};for(let r=0;r<i.length;r+=1)l=q(l,i[r]);return e=new x({props:l}),{c(){p(e.$$.fragment)},l(r){E(e.$$.fragment,r)},m(r,t){j(e,r,t),n=!0},p(r,t){const a=t&1?F(i,[G(r[1])]):{};e.$set(a)},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){m(e.$$.fragment,r),n=!1},d(r){w(e,r)}}}function ee(o){let e,n,i=o[0],l=[];for(let t=0;t<i.length;t+=1)l[t]=R(A(o,i,t));const r=t=>m(l[t],1,1,()=>{l[t]=null});return{c(){e=k("ul");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=v(t,"UL",{class:!0});var a=d(e);for(let s=0;s<l.length;s+=1)l[s].l(a);a.forEach(f),this.h()},h(){u(e,"class","links svelte-1tgn69z")},m(t,a){g(t,e,a);for(let s=0;s<l.length;s+=1)l[s].m(e,null);n=!0},p(t,[a]){if(a&1){i=t[0];let s;for(s=0;s<i.length;s+=1){const c=A(t,i,s);l[s]?(l[s].p(c,a),_(l[s],1)):(l[s]=R(c),l[s].c(),_(l[s],1),l[s].m(e,null))}for(V(),s=i.length;s<l.length;s+=1)r(s);D()}},i(t){if(!n){for(let a=0;a<i.length;a+=1)_(l[a]);n=!0}},o(t){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)m(l[a]);n=!1},d(t){t&&f(e),S(l,t)}}}function te(o,e,n){let{links:i=[]}=e;return o.$$set=l=>{"links"in l&&n(0,i=l.links)},[i]}class ae extends T{constructor(e){super(),y(this,e,te,ee,L,{links:0})}}export{ae as L};