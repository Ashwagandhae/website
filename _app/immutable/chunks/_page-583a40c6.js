import{_ as t}from"./preload-helper-41c905a7.js";const n=(e,r)=>{const o=e[r];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((m,_)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(_.bind(null,new Error("Unknown variable dynamic import: "+r)))})};async function i({params:e}){const r=await n(Object.assign({"../content/blob-world.svg":()=>t(()=>import("./blob-world-d2867088.js"),[],import.meta.url),"../content/debate-flow.svg":()=>t(()=>import("./debate-flow-d1c67b67.js"),[],import.meta.url),"../content/docx-reader.svg":()=>t(()=>import("./docx-reader-e691ec25.js"),[],import.meta.url),"../content/evidencer.svg":()=>t(()=>import("./evidencer-17810125.js"),[],import.meta.url),"../content/smart-snake.svg":()=>t(()=>import("./smart-snake-337ab615.js"),[],import.meta.url)}),`../content/${e.slug}.svg`);return{...await n(Object.assign({"../content/blob-world.json":()=>t(()=>import("./blob-world-0b56961d.js"),[],import.meta.url),"../content/debate-flow.json":()=>t(()=>import("./debate-flow-01aefbfa.js"),[],import.meta.url),"../content/docx-reader.json":()=>t(()=>import("./docx-reader-e928a834.js"),[],import.meta.url),"../content/evidencer.json":()=>t(()=>import("./evidencer-9f4778db.js"),[],import.meta.url),"../content/smart-snake.json":()=>t(()=>import("./smart-snake-8b1c0ee1.js"),[],import.meta.url)}),`../content/${e.slug}.json`),icon:r.default}}const s=Object.freeze(Object.defineProperty({__proto__:null,load:i},Symbol.toStringTag,{value:"Module"}));export{s as _,i as l};