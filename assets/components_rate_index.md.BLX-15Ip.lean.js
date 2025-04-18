import{p as u,b as h,o as i,k as l,B as _,c as B,j as r,a5 as c,G as a,a as n,ad as p,w as s}from"./chunks/framework.Dr5ddTBW.js";import{V as b}from"./chunks/theme.1WR6ZKfk.js";import{d as f,f as v}from"./chunks/index.Cy4GuBY3.js";const C=`<script setup>
import { VKRate } from '@versakit/ui'
import { ref } from 'vue'

const customRate = ref(2)
<\/script>

<template>
  <VKRate
    v-model="customRate"
    character="♥"
    :colors="['#ff4d4f', '#ff7875', '#ff9c6e']"
  />
</template>
`,V={__name:"custom",setup(d){const t=u(2);return(m,e)=>(i(),h(l(b),{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o),character:"♥",colors:["#ff4d4f","#ff7875","#ff9c6e"]},null,8,["modelValue"]))}},k=`<script setup>
import { VKRate } from '@versakit/ui'
import { ref } from 'vue'

const basicRate = ref(3)
<\/script>

<template>
  <VKRate v-model="basicRate" />
</template>
`,x={__name:"base",setup(d){const t=u(3);return(m,e)=>(i(),h(l(b),{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o)},null,8,["modelValue"]))}},y=JSON.parse('{"title":"Rate 评分","description":"","frontmatter":{},"headers":[],"relativePath":"components/rate/index.md","filePath":"components/rate/index.md"}'),D={name:"components/rate/index.md"},w=Object.assign(D,{setup(d){const t=u(!0);return(m,e)=>{const o=_("ClientOnly");return i(),B("div",null,[e[2]||(e[2]=r("h1",{id:"rate-评分",tabindex:"-1"},[n("Rate 评分 "),r("a",{class:"header-anchor",href:"#rate-评分","aria-label":'Permalink to "Rate 评分"'},"​")],-1)),e[3]||(e[3]=r("h2",{id:"基本使用",tabindex:"-1"},[n("基本使用 "),r("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),c(a(l(f),null,null,512),[[p,t.value]]),a(o,null,{default:s(()=>[a(l(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),vueCode:l(k)},{vue:s(()=>[a(x)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=r("h2",{id:"自定义",tabindex:"-1"},[n("自定义 "),r("a",{class:"header-anchor",href:"#自定义","aria-label":'Permalink to "自定义"'},"​")],-1)),c(a(l(f),null,null,512),[[p,t.value]]),a(o,null,{default:s(()=>[a(l(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{t.value=!1}),vueCode:l(C)},{vue:s(()=>[a(V)]),_:1},8,["vueCode"])]),_:1})])}}});export{y as __pageData,w as default};
