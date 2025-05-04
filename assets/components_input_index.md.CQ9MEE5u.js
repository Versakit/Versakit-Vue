import{d as b,p as r,b as f,o as u,w as o,G as a,k as l,B,c as C,j as n,a4 as m,aw as k,a as s,aa as c}from"./chunks/framework.rcZoKwU1.js";import{m as _,K as V}from"./chunks/theme.CbllQRZe.js";import{O as h,E as v}from"./chunks/index.CpKg_UEU.js";const w=`<template>
  <VKRow>
    <VKInput disabled v-model="value" placeholder="Please input" />
  </VKRow>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VKInput, VKRow } from '@versakit/ui'

const value = ref('')
<\/script>

<style scoped></style>
`,x=b({__name:"disabled",setup(i){const t=r("");return(p,e)=>(u(),f(l(V),null,{default:o(()=>[a(l(_),{disabled:"",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=d=>t.value=d),placeholder:"Please input"},null,8,["modelValue"])]),_:1}))}}),y=`<template>
  <VKRow>
    <VKInput v-model="value" placeholder="Please input" />
  </VKRow>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VKInput, VKRow } from '@versakit/ui'

const value = ref('')
<\/script>

<style scoped></style>
`,A=b({__name:"base",setup(i){const t=r("");return(p,e)=>(u(),f(l(V),null,{default:o(()=>[a(l(_),{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=d=>t.value=d),placeholder:"Please input"},null,8,["modelValue"])]),_:1}))}}),T=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input/index.md","filePath":"components/input/index.md"}'),D={name:"components/input/index.md"},W=Object.assign(D,{setup(i){const t=r(!0);return(p,e)=>{const d=B("ClientOnly");return u(),C("div",null,[e[2]||(e[2]=n("h1",{id:"input-输入框",tabindex:"-1"},[s("Input 输入框 "),n("a",{class:"header-anchor",href:"#input-输入框","aria-label":'Permalink to "Input 输入框"'},"​")],-1)),e[3]||(e[3]=n("h2",{id:"基础使用",tabindex:"-1"},[s("基础使用 "),n("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),e[4]||(e[4]=n("p",null,"通过鼠标或键盘输入字符.",-1)),m(a(l(h),null,null,512),[[c,t.value]]),a(d,null,{default:o(()=>[a(l(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),vueCode:l(y)},{vue:o(()=>[a(A)]),_:1},8,["vueCode"])]),_:1}),e[5]||(e[5]=n("h2",{id:"禁用状态",tabindex:"-1"},[s("禁用状态 "),n("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),e[6]||(e[6]=n("p",null,[s("通过 "),n("code",null,"disabled"),s(" 属性指定是否禁用 input 组件")],-1)),m(a(l(h),null,null,512),[[c,t.value]]),a(d,null,{default:o(()=>[a(l(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{t.value=!1}),vueCode:l(w)},{vue:o(()=>[a(x)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=k('<h2 id="input-api" tabindex="-1">Input API <a class="header-anchor" href="#input-api" aria-label="Permalink to &quot;Input API&quot;">​</a></h2><h3 id="input-属性" tabindex="-1">Input 属性 <a class="header-anchor" href="#input-属性" aria-label="Permalink to &quot;Input 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>placeholder</code></td><td>输入框中未输入时默认显示的文字</td><td><code>string</code></td><td>-</td></tr><tr><td><code>modelValue</code></td><td>输入框输入内容绑定的值</td><td><code>string</code></td><td>-</td></tr><tr><td><code>type</code></td><td>输入框的类型</td><td><code>string</code></td><td>text</td></tr><tr><td><code>disabled</code></td><td>是否禁用输入框</td><td><code>boolean</code></td><td>false</td></tr></tbody></table>',3))])}}});export{T as __pageData,W as default};
