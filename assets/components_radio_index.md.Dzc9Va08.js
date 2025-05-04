import{d as c,p as s,c as u,o as m,G as t,k as o,w as n,a as r,B,j as d,a4 as v,aw as _,aa as f}from"./chunks/framework.rcZoKwU1.js";import{y as i}from"./chunks/theme.CbllQRZe.js";import{O as h,E as V}from"./chunks/index.CpKg_UEU.js";const C=`<template>
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
`,k=c({__name:"disabled",setup(p){const a=s(1);return(b,e)=>(m(),u("div",null,[t(o(i),{disabled:"",label:"1",modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l)},{default:n(()=>e[2]||(e[2]=[r("男")])),_:1},8,["modelValue"]),t(o(i),{disabled:"",label:"0",modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=l=>a.value=l)},{default:n(()=>e[3]||(e[3]=[r("女")])),_:1},8,["modelValue"])]))}}),g=`<template>
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
`,x=c({__name:"base",setup(p){const a=s(1);return(b,e)=>(m(),u("div",null,[t(o(i),{label:"1",modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l)},{default:n(()=>e[2]||(e[2]=[r("男")])),_:1},8,["modelValue"]),t(o(i),{label:"0",modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=l=>a.value=l)},{default:n(()=>e[3]||(e[3]=[r("女")])),_:1},8,["modelValue"])]))}}),T=JSON.parse('{"title":"Radio 单选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/radio/index.md","filePath":"components/radio/index.md"}'),A={name:"components/radio/index.md"},W=Object.assign(A,{setup(p){const a=s(!0);return(b,e)=>{const l=B("ClientOnly");return m(),u("div",null,[e[2]||(e[2]=d("h1",{id:"radio-单选框",tabindex:"-1"},[r("Radio 单选框 "),d("a",{class:"header-anchor",href:"#radio-单选框","aria-label":'Permalink to "Radio 单选框"'},"​")],-1)),e[3]||(e[3]=d("p",null,"在一组备选项中进行单选。",-1)),e[4]||(e[4]=d("h2",{id:"基础使用",tabindex:"-1"},[r("基础使用 "),d("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),e[5]||(e[5]=d("p",null,"单选框的基本使用。",-1)),v(t(o(h),null,null,512),[[f,a.value]]),t(l,null,{default:n(()=>[t(o(V),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{a.value=!1}),vueCode:o(g)},{vue:n(()=>[t(x)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=d("h2",{id:"禁用状态",tabindex:"-1"},[r("禁用状态 "),d("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),e[7]||(e[7]=d("p",null,[d("code",null,"disabled"),r(" 属性可以用来控制单选框的禁用状态。")],-1)),v(t(o(h),null,null,512),[[f,a.value]]),t(l,null,{default:n(()=>[t(o(V),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{a.value=!1}),vueCode:o(C)},{vue:n(()=>[t(k)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=_('<h2 id="radio-api" tabindex="-1">Radio API <a class="header-anchor" href="#radio-api" aria-label="Permalink to &quot;Radio API&quot;">​</a></h2><h3 id="radio-属性" tabindex="-1">Radio 属性 <a class="header-anchor" href="#radio-属性" aria-label="Permalink to &quot;Radio 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code> / <code>model-value</code></td><td>选中项绑定值</td><td><code>string</code> / <code>number</code> / <code>boolean</code></td><td>-</td></tr><tr><td><code>disabled</code></td><td>是否禁用单选框</td><td><code>boolean</code></td><td>false</td></tr></tbody></table>',3))])}}});export{T as __pageData,W as default};
