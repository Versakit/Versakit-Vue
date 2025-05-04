import{d as f,p as r,b,o as p,k as a,B,c as C,j as o,a4 as m,G as l,a as u,aa as v,w as s}from"./chunks/framework.rcZoKwU1.js";import{C as V}from"./chunks/theme.CbllQRZe.js";import{O as c,E as h}from"./chunks/index.CpKg_UEU.js";const _=`<script setup lang="ts">
import { ref } from 'vue'
import { VKInputOtp } from '@versakit/ui'

const otpValue = ref('1234')
<\/script>

<template>
  <VKInputOtp disabled v-model="otpValue" />
</template>
`,D=f({__name:"disabled",setup(d){const t=r("1234");return(i,e)=>(p(),b(a(V),{disabled:"",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=n=>t.value=n)},null,8,["modelValue"]))}}),W=`<script setup lang="ts">
import { ref } from 'vue'
import { VKInputOtp } from '@versakit/ui'

const otpValue = ref('')
<\/script>

<template>
  <VKInputOtp placeholder="*" v-model="otpValue" />
</template>

<style></style>
`,X=f({__name:"placeholder",setup(d){const t=r("");return(i,e)=>(p(),b(a(V),{placeholder:"*",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=n=>t.value=n)},null,8,["modelValue"]))}}),A=`<script setup lang="ts">
import { ref } from 'vue'
import { VKInputOtp } from '@versakit/ui'

const otpValue = ref('')
<\/script>

<template>
  <VKInputOtp :length="4" v-model="otpValue" />
</template>

<style></style>
`,k=f({__name:"length",setup(d){const t=r("");return(i,e)=>(p(),b(a(V),{length:4,modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=n=>t.value=n)},null,8,["modelValue"]))}}),Z=`<script setup lang="ts">
import { ref } from 'vue'
import { VKInputOtp } from '@versakit/ui'

const otpValue = ref('')
<\/script>

<template>
  <VKInputOtp v-model="otpValue" />
</template>

<style></style>
`,y=f({__name:"base",setup(d){const t=r("");return(i,e)=>(p(),b(a(V),{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=n=>t.value=n)},null,8,["modelValue"]))}}),T=JSON.parse('{"title":"InputOtp 个人识别码","description":"","frontmatter":{},"headers":[],"relativePath":"components/inputotp/index.md","filePath":"components/inputotp/index.md"}'),g={name:"components/inputotp/index.md"},z=Object.assign(g,{setup(d){const t=r(!0);return(i,e)=>{const n=B("ClientOnly");return p(),C("div",null,[e[4]||(e[4]=o("h1",{id:"inputotp-个人识别码",tabindex:"-1"},[u("InputOtp 个人识别码 "),o("a",{class:"header-anchor",href:"#inputotp-个人识别码","aria-label":'Permalink to "InputOtp 个人识别码"'},"​")],-1)),e[5]||(e[5]=o("h2",{id:"基本使用",tabindex:"-1"},[u("基本使用 "),o("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),m(l(a(c),null,null,512),[[v,t.value]]),l(n,null,{default:s(()=>[l(a(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),vueCode:a(Z)},{vue:s(()=>[l(y)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=o("h2",{id:"自定义长度-4位",tabindex:"-1"},[u("自定义长度 (4位) "),o("a",{class:"header-anchor",href:"#自定义长度-4位","aria-label":'Permalink to "自定义长度 (4位)"'},"​")],-1)),m(l(a(c),null,null,512),[[v,t.value]]),l(n,null,{default:s(()=>[l(a(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{t.value=!1}),vueCode:a(A)},{vue:s(()=>[l(k)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=o("h2",{id:"自定义占位符",tabindex:"-1"},[u("自定义占位符 "),o("a",{class:"header-anchor",href:"#自定义占位符","aria-label":'Permalink to "自定义占位符"'},"​")],-1)),m(l(a(c),null,null,512),[[v,t.value]]),l(n,null,{default:s(()=>[l(a(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{t.value=!1}),vueCode:a(W)},{vue:s(()=>[l(X)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=o("h2",{id:"禁用状态",tabindex:"-1"},[u("禁用状态 "),o("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),m(l(a(c),null,null,512),[[v,t.value]]),l(n,null,{default:s(()=>[l(a(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{t.value=!1}),vueCode:a(_)},{vue:s(()=>[l(D)]),_:1},8,["vueCode"])]),_:1})])}}});export{T as __pageData,z as default};
