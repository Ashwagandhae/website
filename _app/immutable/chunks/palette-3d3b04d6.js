var o=Object.defineProperty;var n=(e,t,s)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var i=(e,t,s)=>(n(e,typeof t!="symbol"?t+"":t,s),s);import{B as a}from"./index-a292518e.js";const g=a(null),r=3e3;class u{constructor(){i(this,"messages");i(this,"timeouts");this.messages=a([]),this.timeouts=[]}addMessage(t){this.messages.update(s=>(s.push({text:t,id:Date.now()}),s.length>3&&(s.shift(),clearTimeout(this.timeouts.shift())),this.timeouts.push(setTimeout(()=>{this.messages.update(h=>(h.shift(),h)),this.timeouts.shift()},r)),s))}}const c=new u,f=c.messages;function k(e){let t;if(e==null)t="";else{const[s,h,l]=e;t=`
    --back: hsl(${s}, 10%, 19%);
    --back-1: hsl(${s}, 20%, 26%);
    --back-1-hover: hsl(${s}, ${h}%, ${l}%);
    --back-2: hsl(${s}, 20%, 34%);
    --back-2-hover: hsl(${s}, ${h}%, ${l+5}%);
    --text: hsl(${s}, 29%, 88%);
    --text-strong: hsl(${s}, 0%, 100%);
    --text-weak: hsl(${s}, 18%, 70%);
    --link: hsl(${s}, 64%, 61%);
    --link-hover: hsl(${s}, 100%, 81%);
  `}return t}export{c as a,k as g,f as m,g as p};
