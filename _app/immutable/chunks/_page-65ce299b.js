import{_ as o}from"./preload-helper-41c905a7.js";const r=(e,n)=>{const t=e[n];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((m,_)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(_.bind(null,new Error("Unknown variable dynamic import: "+n)))})};async function i({params:e}){const n=await r(Object.assign({"../content/icons/advent-of-code.json":()=>o(()=>import("./advent-of-code-21a8caf9.js"),[],import.meta.url),"../content/icons/blob-world.json":()=>o(()=>import("./blob-world-5f5336c7.js"),[],import.meta.url),"../content/icons/debate-flow.json":()=>o(()=>import("./debate-flow-ddf16a4b.js"),[],import.meta.url),"../content/icons/docx-reader.json":()=>o(()=>import("./docx-reader-46193188.js"),[],import.meta.url),"../content/icons/evidencer.json":()=>o(()=>import("./evidencer-fda5c219.js"),[],import.meta.url),"../content/icons/jumpjumpjumpjump.json":()=>o(()=>import("./jumpjumpjumpjump-c845c538.js"),[],import.meta.url),"../content/icons/smart-snake.json":()=>o(()=>import("./smart-snake-7fbe1936.js"),[],import.meta.url)}),`../content/icons/${e.slug}.json`);return{...await r(Object.assign({"../content/blob-world.json":()=>o(()=>import("./blob-world-9e704310.js"),[],import.meta.url),"../content/debate-flow.json":()=>o(()=>import("./debate-flow-11ab0d7a.js"),[],import.meta.url),"../content/docx-reader.json":()=>o(()=>import("./docx-reader-2503a4fc.js"),[],import.meta.url),"../content/evidencer.json":()=>o(()=>import("./evidencer-f05bb782.js"),[],import.meta.url),"../content/jumpjumpjumpjump.json":()=>o(()=>import("./jumpjumpjumpjump-f82a14c0.js"),[],import.meta.url),"../content/smart-snake.json":()=>o(()=>import("./smart-snake-ed4d786b.js"),[],import.meta.url)}),`../content/${e.slug}.json`),icon:n}}const s=Object.freeze(Object.defineProperty({__proto__:null,load:i},Symbol.toStringTag,{value:"Module"}));export{s as _,i as l};