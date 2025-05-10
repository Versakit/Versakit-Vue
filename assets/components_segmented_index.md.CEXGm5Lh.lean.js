import{d as g,p as r,c,o as b,G as a,j as l,k as n,t as u,B as _,a4 as f,aw as V,a as m,aa as S,w as p}from"./chunks/framework.rcZoKwU1.js";import{n as h}from"./chunks/theme.BK5t6puo.js";import{O as x,E as k}from"./chunks/index.CpKg_UEU.js";const y=`<script setup lang="ts">
import { ref } from 'vue'
import { VKSegmented } from '@versakit/ui'

const selectedValue = ref('苹果')
const options = [
  { label: '苹果', value: '苹果' },
  { label: '芒果', value: '芒果' },
  { label: '西瓜', value: '西瓜' },
]

const selectedValue2 = ref('苹果1')
const options2 = [
  { label: '苹果1', value: '苹果1' },
  { label: '芒果1', value: '芒果1' },
  { label: '西瓜1', value: '西瓜1' },
]
<\/script>

<template>
  <div>
    <VKSegmented v-model="selectedValue" :options="options"></VKSegmented>

    <p class="selected-value">选择值: {{ selectedValue }}</p>

    <VKSegmented v-model="selectedValue2" :options="options2"></VKSegmented>

    <p class="selected-value">选择值: {{ selectedValue2 }}</p>
  </div>
</template>
`,C={class:"selected-value"},P={class:"selected-value"},A=g({__name:"base",setup(v){const t=r("苹果"),i=[{label:"苹果",value:"苹果"},{label:"芒果",value:"芒果"},{label:"西瓜",value:"西瓜"}],e=r("苹果1"),s=[{label:"苹果1",value:"苹果1"},{label:"芒果1",value:"芒果1"},{label:"西瓜1",value:"西瓜1"}];return(D,d)=>(b(),c("div",null,[a(n(h),{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=o=>t.value=o),options:i},null,8,["modelValue"]),l("p",C,"选择值: "+u(t.value),1),a(n(h),{modelValue:e.value,"onUpdate:modelValue":d[1]||(d[1]=o=>e.value=o),options:s},null,8,["modelValue"]),l("p",P,"选择值: "+u(e.value),1)]))}}),W=JSON.parse('{"title":"Segmented 分段控制器","description":"","frontmatter":{},"headers":[],"relativePath":"components/segmented/index.md","filePath":"components/segmented/index.md"}'),B={name:"components/segmented/index.md"},E=Object.assign(B,{setup(v){const t=r(!0);return(i,e)=>{const s=_("ClientOnly");return b(),c("div",null,[e[1]||(e[1]=l("h1",{id:"segmented-分段控制器",tabindex:"-1"},[m("Segmented 分段控制器 "),l("a",{class:"header-anchor",href:"#segmented-分段控制器","aria-label":'Permalink to "Segmented 分段控制器"'},"​")],-1)),e[2]||(e[2]=l("h2",{id:"基本使用",tabindex:"-1"},[m("基本使用 "),l("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),f(a(n(x),null,null,512),[[S,t.value]]),a(s,null,{default:p(()=>[a(n(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),vueCode:n(y)},{vue:p(()=>[a(A)]),_:1},8,["vueCode"])]),_:1}),e[3]||(e[3]=V("",7))])}}});export{W as __pageData,E as default};
