var d=Object.defineProperty;var p=(e,s,t)=>s in e?d(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var r=(e,s,t)=>(p(e,typeof s!="symbol"?s+"":s,t),t);import{B as h}from"./index-f9810a0e.js";const M=h(null),g=3e3;class k{constructor(){r(this,"messages");r(this,"timeouts");this.messages=h([]),this.timeouts=[]}addMessage(s){this.messages.update(t=>(t.push({text:s,id:Date.now()}),t.length>3&&(t.shift(),clearTimeout(this.timeouts.shift())),this.timeouts.push(setTimeout(()=>{this.messages.update(o=>(o.shift(),o)),this.timeouts.shift()},g)),t))}}const y=new k,v=y.messages;function S(e){let s;if(e==null)s="";else{const[t,o,n]=e;s=`
    --back: hsl(${t}, 10%, 19%);
    --back-1: hsl(${t}, 20%, 26%);
    --back-1-hover: hsl(${t}, ${o}%, ${n}%);
    --back-2: hsl(${t}, 20%, 34%);
    --back-2-hover: hsl(${t}, ${o}%, ${n+5}%);
    --text: hsl(${t}, 29%, 88%);
    --text-strong: hsl(${t}, 0%, 100%);
    --text-weak: hsl(${t}, 18%, 70%);
    --link: hsl(${t}, 64%, 61%);
    --link-hover: hsl(${t}, 100%, 81%);
  `}return s}function b(e){const s=e-1;return s*s*s+1}function T(e,{delay:s=0,duration:t=400,easing:o=b,x:n=0,y:l=0,opacity:u=0}={}){const a=getComputedStyle(e),i=+a.opacity,m=a.transform==="none"?"":a.transform,f=i*(1-u);return{delay:s,duration:t,easing:o,css:(c,$)=>`
			transform: ${m} translate(${(1-c)*n}px, ${(1-c)*l}px);
			opacity: ${i-f*$}`}}const B=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;export{y as a,T as f,S as g,v as m,M as p,B as r};
