import{o as e,c as t,a as s,p as a,b as r,F as o,r as n,w as c,t as l,d as i}from"./vendor.04525136.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(s){const a=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((s,o)=>{const n=new URL(e,a);if(self[t].moduleMap[n])return s(self[t].moduleMap[n]);const c=new Blob([`import * as m from '${n}';`,`${t}.moduleMap['${n}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){o(new Error(`Failed to import: ${e}`)),r(l)},onload(){s(self[t].moduleMap[n]),r(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/assets/");const d={},p={class:"h-screen w-screen bg-blue-500 flex justify-center items-center"},m=s("h1",{class:"bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text text-5xl font-black h-16 align-middle"}," HipyCas ",-1);d.render=function(s,a,r,o,n,c){return e(),t("div",p,[m])};const u={},f=c("data-v-13cba192");a("data-v-13cba192");const b={id:"main",class:"fixed top-0 w-screen"},v={class:"flex justify-end w-full mr-2"};r();const x=f(((a,r,c,i,d,p)=>(e(),t("div",b,[s("div",v,[(e(),t(o,null,n(10,(e=>s("a",{key:e,class:"text-sm text-gray-900 p-4 hover:bg-gray-200 hover:bg-opacity-20"},"Link "+l(e),1))),64))])]))));u.render=x,u.__scopeId="data-v-13cba192";i({expose:[],setup:a=>(a,r)=>(e(),t(o,null,[s(u),s(d)],64))}).mount("#app");
