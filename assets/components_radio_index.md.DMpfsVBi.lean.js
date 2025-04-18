import{d as B,p as s,c as u,o as m,G as a,k as o,w as n,a as r,B as _,j as l,a5 as v,aw as c,ad as f}from"./chunks/framework.Dr5ddTBW.js";import{D as i}from"./chunks/theme.C6wl5IZj.js";import{d as h,f as V}from"./chunks/index.Cy4GuBY3.js";const C=`<template>
  <div>
    <VKRadio disabled label="1" v-model="gender">男</VKRadio>
    <VKRadio disabled label="0" v-model="gender">女</VKRadio>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VKRadio } from '@versakit/ui'

const gender = ref(1)
<\/script>
`,k=B({__name:"disabled",setup(p){const t=s(1);return(b,e)=>(m(),u("div",null,[a(o(i),{disabled:"",label:"1",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=d=>t.value=d)},{default:n(()=>e[2]||(e[2]=[r("男")])),_:1},8,["modelValue"]),a(o(i),{disabled:"",label:"0",modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=d=>t.value=d)},{default:n(()=>e[3]||(e[3]=[r("女")])),_:1},8,["modelValue"])]))}}),g=`<template>
  <div>
    <VKRadio label="1" v-model="gender">男</VKRadio>
    <VKRadio label="0" v-model="gender">女</VKRadio>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VKRadio } from '@versakit/ui'

const gender = ref(1)
<\/script>
`,D=B({__name:"base",setup(p){const t=s(1);return(b,e)=>(m(),u("div",null,[a(o(i),{label:"1",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=d=>t.value=d)},{default:n(()=>e[2]||(e[2]=[r("男")])),_:1},8,["modelValue"]),a(o(i),{label:"0",modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=d=>t.value=d)},{default:n(()=>e[3]||(e[3]=[r("女")])),_:1},8,["modelValue"])]))}}),W=JSON.parse('{"title":"Radio 单选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/radio/index.md","filePath":"components/radio/index.md"}'),x={name:"components/radio/index.md"},X=Object.assign(x,{setup(p){const t=s(!0);return(b,e)=>{const d=_("ClientOnly");return m(),u("div",null,[e[2]||(e[2]=l("h1",{id:"radio-单选框",tabindex:"-1"},[r("Radio 单选框 "),l("a",{class:"header-anchor",href:"#radio-单选框","aria-label":'Permalink to "Radio 单选框"'},"​")],-1)),e[3]||(e[3]=l("p",null,"在一组备选项中进行单选。",-1)),e[4]||(e[4]=l("h2",{id:"基础使用",tabindex:"-1"},[r("基础使用 "),l("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),e[5]||(e[5]=l("p",null,"单选框的基本使用。",-1)),v(a(o(h),null,null,512),[[f,t.value]]),a(d,null,{default:n(()=>[a(o(V),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),vueCode:o(g)},{vue:n(()=>[a(D)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=l("h2",{id:"禁用状态",tabindex:"-1"},[r("禁用状态 "),l("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),e[7]||(e[7]=l("p",null,[l("code",null,"disabled"),r(" 属性可以用来控制单选框的禁用状态。")],-1)),v(a(o(h),null,null,512),[[f,t.value]]),a(d,null,{default:n(()=>[a(o(V),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{t.value=!1}),vueCode:o(C)},{vue:n(()=>[a(k)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=c("",3))])}}});export{W as __pageData,X as default};
