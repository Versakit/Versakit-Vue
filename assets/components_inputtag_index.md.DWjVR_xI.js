import{d as c,p as i,c as p,o as d,G as a,k as s,B as f,j as n,a5 as v,a as o,ad as h,w as r}from"./chunks/framework.Dr5ddTBW.js";import{W as g}from"./chunks/theme.C6wl5IZj.js";import{d as _,f as b}from"./chunks/index.Cy4GuBY3.js";const B=`<script setup lang="ts">
import { ref } from 'vue'
import { VKInputTag } from '@versakit/ui'

const tags = ref<string[]>(['Vue', 'TypeScript'])
<\/script>

<template>
  <div>
    <VKInputTag v-model="tags" placeholder="Enter tags..." />
  </div>
</template>

<style scoped></style>
`,C=c({__name:"base",setup(u){const t=i(["Vue","TypeScript"]);return(m,e)=>(d(),p("div",null,[a(s(g),{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l),placeholder:"Enter tags..."},null,8,["modelValue"])]))}}),k=JSON.parse('{"title":"InputTag 标签输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/inputtag/index.md","filePath":"components/inputtag/index.md"}'),T={name:"components/inputtag/index.md"},W=Object.assign(T,{setup(u){const t=i(!0);return(m,e)=>{const l=f("ClientOnly");return d(),p("div",null,[e[1]||(e[1]=n("h1",{id:"inputtag-标签输入框",tabindex:"-1"},[o("InputTag 标签输入框 "),n("a",{class:"header-anchor",href:"#inputtag-标签输入框","aria-label":'Permalink to "InputTag 标签输入框"'},"​")],-1)),e[2]||(e[2]=n("h2",{id:"基本用法",tabindex:"-1"},[o("基本用法 "),n("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),v(a(s(_),null,null,512),[[h,t.value]]),a(l,null,{default:r(()=>[a(s(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),vueCode:s(B)},{vue:r(()=>[a(C)]),_:1},8,["vueCode"])]),_:1})])}}});export{k as __pageData,W as default};
