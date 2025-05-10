import{d as c,p as s,c as b,o as h,F as x,j as e,G as a,k as l,t as i,_,B as f,a4 as V,aw as y,a as u,aa as N,w as m}from"./chunks/framework.rcZoKwU1.js";import{v as p}from"./chunks/theme.BBSXUahi.js";import{O as X,E as C}from"./chunks/index.CpKg_UEU.js";const W=`<script setup lang="ts">
import { ref } from 'vue'
import { VKInputNumber } from '@versakit/ui'

const numberValue = ref(1)
const decimalValue = ref(0.5)
<\/script>

<template>
  <div class="example-box">
    <h3>整数输入示例</h3>
    <VKInputNumber v-model="numberValue" :min="0" :max="10" :step="1" />
    <div>当前值: {{ numberValue }}</div>
  </div>

  <div class="example-box">
    <h3>小数输入示例</h3>
    <VKInputNumber
      v-model="decimalValue"
      :min="0"
      :max="1"
      :step="0.1"
      :precision="1"
    />
    <div>当前值: {{ decimalValue }}</div>
  </div>
</template>

<style scoped>
.example-box {
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
}
</style>
`,B={class:"example-box"},I={class:"example-box"},Z=c({__name:"base",setup(v){const n=s(1),r=s(.5);return(t,d)=>(h(),b(x,null,[e("div",B,[d[2]||(d[2]=e("h3",null,"整数输入示例",-1)),a(l(p),{modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=o=>n.value=o),min:0,max:10,step:1},null,8,["modelValue"]),e("div",null,"当前值: "+i(n.value),1)]),e("div",I,[d[3]||(d[3]=e("h3",null,"小数输入示例",-1)),a(l(p),{modelValue:r.value,"onUpdate:modelValue":d[1]||(d[1]=o=>r.value=o),min:0,max:1,step:.1,precision:1},null,8,["modelValue"]),e("div",null,"当前值: "+i(r.value),1)])],64))}}),k=_(Z,[["__scopeId","data-v-d37aeed0"]]),w=JSON.parse('{"title":"InputNumber 数字输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/inputnumber/index.md","filePath":"components/inputnumber/index.md"}'),g={name:"components/inputnumber/index.md"},A=Object.assign(g,{setup(v){const n=s(!0);return(r,t)=>{const d=f("ClientOnly");return h(),b("div",null,[t[1]||(t[1]=e("h1",{id:"inputnumber-数字输入框",tabindex:"-1"},[u("InputNumber 数字输入框 "),e("a",{class:"header-anchor",href:"#inputnumber-数字输入框","aria-label":'Permalink to "InputNumber 数字输入框"'},"​")],-1)),t[2]||(t[2]=e("p",null,"仅允许输入标准的数字值，可定义范围",-1)),t[3]||(t[3]=e("h2",{id:"基础用法",tabindex:"-1"},[u("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),V(a(l(X),null,null,512),[[N,n.value]]),a(d,null,{default:m(()=>[a(l(C),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{n.value=!1}),vueCode:l(W)},{vue:m(()=>[a(k)]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=y("",4))])}}});export{w as __pageData,A as default};
