var p=Object.defineProperty;var g=(e,s,t)=>s in e?p(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var a=(e,s,t)=>(g(e,typeof s!="symbol"?s+"":s,t),t);import{B as c}from"./index-da3e65cf.js";function k(e){const s=e-1;return s*s*s+1}function M(e){return Math.sin(e*Math.PI/2)}const T=c(null),h=3e3;class y{constructor(){a(this,"messages");a(this,"timeouts");this.messages=c([]),this.timeouts=[]}addMessage(s){this.messages.update(t=>{var o;return((o=t.at(-1))==null?void 0:o.text)===s?(t.at(-1).count++,clearTimeout(this.timeouts.at(-1)),this.timeouts[this.timeouts.length-1]=setTimeout(()=>{this.messages.update(i=>(i.shift(),i)),this.timeouts.shift()},h)):(t.push({text:s,id:Date.now(),count:1}),this.timeouts.push(setTimeout(()=>{this.messages.update(i=>(i.shift(),i)),this.timeouts.shift()},h))),t.length>3&&(t.shift(),clearTimeout(this.timeouts.shift())),t})}}const b=new y,v=b.messages;function O(e){let s;if(e==null)s="";else{const[t,o,i]=e;s=`
    --back: hsl(${t}, 10%, 19%);
    --back-1: hsl(${t}, 20%, 26%);
    --back-1-hover: hsl(${t}, ${o}%, ${i}%);
    --back-2: hsl(${t}, 20%, 34%);
    --back-2-hover: hsl(${t}, ${o}%, ${i+5}%);
    --text: hsl(${t}, 29%, 88%);
    --text-strong: hsl(${t}, 0%, 100%);
    --text-weak: hsl(${t}, 18%, 70%);
    --link: hsl(${t}, 64%, 61%);
    --link-hover: hsl(${t}, 100%, 81%);
  `}return s}function P(e,{delay:s=0,duration:t=400,easing:o=k,x:i=0,y:l=0,opacity:m=0}={}){const n=getComputedStyle(e),r=+n.opacity,f=n.transform==="none"?"":n.transform,$=r*(1-m);return{delay:s,duration:t,easing:o,css:(u,d)=>`
			transform: ${f} translate(${(1-u)*i}px, ${(1-u)*l}px);
			opacity: ${r-$*d}`}}const S=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;export{b as a,P as f,O as g,v as m,T as p,S as r,M as s};
