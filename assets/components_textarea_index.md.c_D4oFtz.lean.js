import{d as b,p as x,b as v,o as s,k as l,_ as f,B as W,c as _,j as t,a5 as p,G as d,aw as X,a as r,ad as m,w as n}from"./chunks/framework.Dr5ddTBW.js";import{ab as Z}from"./chunks/theme.C6wl5IZj.js";import{d as h,f as c}from"./chunks/index.Cy4GuBY3.js";const y=`<template>
  <VKTextarea v-model="textarea" :maxlength="10" placeholder="请输入内容" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VKTextarea } from '@versakit/ui'
const textarea = ref('')
<\/script>

<style scoped>
.ver-textarea {
  width: 300px;
  height: 100px;
}
</style>
`,B=b({__name:"maxlength",setup(i){const a=x("");return(u,e)=>(s(),v(l(Z),{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value=o),maxlength:10,placeholder:"请输入内容"},null,8,["modelValue"]))}}),V=f(B,[["__scopeId","data-v-fc5ed737"]]),T=`<template>
  <VKTextarea disabled placeholder="请输入内容" />
</template>

<script lang="ts" setup>
import { VKTextarea } from '@versakit/ui'
<\/script>

<style scoped>
.ver-textarea {
  width: 300px;
  height: 100px;
}
</style>
`,C=b({__name:"disabled",setup(i){return(a,u)=>(s(),v(l(Z),{disabled:"",placeholder:"请输入内容"}))}}),k=f(C,[["__scopeId","data-v-b103c191"]]),A=`<template>
  <VKTextarea v-model="textareaVal" placeholder="请输入内容" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VKTextarea } from '@versakit/ui'
const textareaVal = ref('')
<\/script>

<style scoped>
.ver-textarea {
  width: 300px;
  height: 100px;
}
</style>
`,g=b({__name:"base",setup(i){const a=x("");return(u,e)=>(s(),v(l(Z),{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value=o),placeholder:"请输入内容"},null,8,["modelValue"]))}}),D=f(g,[["__scopeId","data-v-08cb8cd1"]]),Y=JSON.parse('{"title":"TextArea 文本域","description":"","frontmatter":{},"headers":[],"relativePath":"components/textarea/index.md","filePath":"components/textarea/index.md"}'),N={name:"components/textarea/index.md"},w=Object.assign(N,{setup(i){const a=x(!0);return(u,e)=>{const o=W("ClientOnly");return s(),_("div",null,[e[3]||(e[3]=t("h1",{id:"textarea-文本域",tabindex:"-1"},[r("TextArea 文本域 "),t("a",{class:"header-anchor",href:"#textarea-文本域","aria-label":'Permalink to "TextArea 文本域"'},"​")],-1)),e[4]||(e[4]=t("p",null,"多行纯文本编辑控件，适用于评论或反馈表单中的一段意见。",-1)),e[5]||(e[5]=t("h2",{id:"基础用法",tabindex:"-1"},[r("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),e[6]||(e[6]=t("p",null,"用于多行输入。",-1)),p(d(l(h),null,null,512),[[m,a.value]]),d(o,null,{default:n(()=>[d(l(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{a.value=!1}),vueCode:l(A)},{vue:n(()=>[d(D)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=t("h2",{id:"禁用状态",tabindex:"-1"},[r("禁用状态 "),t("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),e[8]||(e[8]=t("p",null,[r("使用 "),t("code",null,"disabled"),r(" 属性设置不可点击。")],-1)),p(d(l(h),null,null,512),[[m,a.value]]),d(o,null,{default:n(()=>[d(l(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{a.value=!1}),vueCode:l(T)},{vue:n(()=>[d(k)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=t("h2",{id:"限制长度",tabindex:"-1"},[r("限制长度 "),t("a",{class:"header-anchor",href:"#限制长度","aria-label":'Permalink to "限制长度"'},"​")],-1)),e[10]||(e[10]=t("p",null,[r("使用 "),t("code",null,"maxlength"),r(" 属性限制最大输入长度。")],-1)),p(d(l(h),null,null,512),[[m,a.value]]),d(o,null,{default:n(()=>[d(l(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{a.value=!1}),vueCode:l(y)},{vue:n(()=>[d(V)]),_:1},8,["vueCode"])]),_:1}),e[11]||(e[11]=X("",3))])}}});export{Y as __pageData,w as default};
