import{j as a,F as s}from"./jsx-runtime-3efccc20.js";import"./index-a8142830.js";import{P as t}from"./index-1f6fda92.js";import{t as i,c as g}from"./style-020442b9.js";const l=({children:o,theme:e,outline:r,shape:n,disable:b,onClickFunc:u})=>{const d=i(g("flex items-center justify-center gap-2 box-border py-1 px-6 border border-solid border-current transition",{"text-neutral-500 bg-white hover:bg-neutral-100 active:bg-neutral-200 active:text-neutral-600":e=="neutral","text-neutral-500 bg-transprant hover:bg-neutral-100 active:bg-neutral-200 active:text-neutral-500":e=="neutral"&&r,"text-white bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-600 active:bg-blue-700 active:border-blue-700":e=="primary","text-blue-500 bg-transprant border-blue-500 hover:bg-blue-50 hover:border-blue-500 active:bg-blue-100 active:border-blue-500":e=="primary"&&r,"text-white bg-neutral-500 border-neutral-500 hover:bg-neutral-600 hover:border-neutral-600 active:bg-neutral-700 active:border-neutral-700":e=="secondary","text-neutral-500 bg-transparent border-neutral-500 hover:bg-neutral-50 hover:border-neutral-500 active:bg-neutral-100 active:border-neutral-500":e=="secondary"&&r,"text-white bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600 active:bg-green-700 active:border-green-700":e=="success","text-green-500 bg-transparent hover:bg-green-50 hover:border-green-500 active:bg-green-100 active:border-green-500":e=="success"&&r,"text-white bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600 active:bg-red-700 active:border-red-700":e=="danger","text-red-500 bg-transparent hover:bg-red-50 hover:text-red-500 active:bg-red-100 active:text-red-500":e=="danger"&&r,rounded:n=="rounded","rounded-full":n=="rounded-full","text-neutral-500 bg-neutral-100 border-transparent hover:text-neutral-500 hover:bg-neutral-100 hover:border-transparent active:text-neutral-500 active:bg-neutral-100 active:border-transparent cursor-not-allowed":b}));return a(s,{children:b?a("button",{className:d,disabled:!0,children:o}):a("button",{className:d,onClick:u,children:o})})};l.propTypes={theme:t.string,outline:t.bool,shape:t.oneOf(["rounded","rounded-full"]),disable:t.bool};l.__docgenInfo={description:"",methods:[],displayName:"Button",props:{theme:{type:{name:"string"},required:!1,description:""},outline:{type:{name:"bool"},required:!1,description:""},shape:{type:{name:"enum",value:[{value:'"rounded"',computed:!1},{value:'"rounded-full"',computed:!1}]},required:!1,description:""},disable:{type:{name:"bool"},required:!1,description:""}}};export{l as B};
//# sourceMappingURL=Button-7dddd438.js.map