import{d as T,p as o,c as v,o as f,j as t,G as a,k as d,t as p,_,B as k,a5 as b,a as c,ad as D,w as u}from"./chunks/framework.Dr5ddTBW.js";import{c as r}from"./chunks/theme.1WR6ZKfk.js";import{d as V,f as x}from"./chunks/index.Cy4GuBY3.js";const y=`<template>
  <div class="datetime-picker-demo">
    <div class="demo-section">
      <h3>基础用法</h3>
      <VKDateTimePicker v-model="dateTime1" placeholder="请选择日期和时间" />
      <div class="value-display">选中的值: {{ dateTime1 }}</div>
    </div>

    <div class="demo-section">
      <h3>显示秒选择</h3>
      <VKDateTimePicker
        v-model="dateTime2"
        placeholder="请选择日期和时间"
        :hideSeconds="false"
      />
      <div class="value-display">选中的值: {{ dateTime2 }}</div>
    </div>

    <div class="demo-section">
      <h3>禁用状态</h3>
      <VKDateTimePicker v-model="dateTime3" placeholder="禁用状态" disabled />
    </div>

    <div class="demo-section">
      <h3>不可清除</h3>
      <VKDateTimePicker
        v-model="dateTime4"
        placeholder="不可清除"
        :clearable="false"
      />
      <div class="value-display">选中的值: {{ dateTime4 }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VKDateTimePicker } from '@versakit/ui'

// 基础用法
const dateTime1 = ref(new Date())

// 显示秒选择
const dateTime2 = ref(new Date())

// 禁用状态
const dateTime3 = ref(new Date())

// 不可清除
const dateTime4 = ref(new Date())
<\/script>

<style scoped>
.datetime-picker-demo {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.demo-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.value-display {
  margin-top: 8px;
  color: #606266;
  font-size: 14px;
}

h3 {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 500;
}
</style>
`,w={class:"datetime-picker-demo"},X={class:"demo-section"},Z={class:"value-display"},W={class:"demo-section"},B={class:"value-display"},C={class:"demo-section"},g={class:"demo-section"},N={class:"value-display"},P=T({__name:"base",setup(h){const i=o(new Date),m=o(new Date),n=o(new Date),s=o(new Date);return(A,e)=>(f(),v("div",w,[t("div",X,[e[4]||(e[4]=t("h3",null,"基础用法",-1)),a(d(r),{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=l=>i.value=l),placeholder:"请选择日期和时间"},null,8,["modelValue"]),t("div",Z,"选中的值: "+p(i.value),1)]),t("div",W,[e[5]||(e[5]=t("h3",null,"显示秒选择",-1)),a(d(r),{modelValue:m.value,"onUpdate:modelValue":e[1]||(e[1]=l=>m.value=l),placeholder:"请选择日期和时间",hideSeconds:!1},null,8,["modelValue"]),t("div",B,"选中的值: "+p(m.value),1)]),t("div",C,[e[6]||(e[6]=t("h3",null,"禁用状态",-1)),a(d(r),{modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=l=>n.value=l),placeholder:"禁用状态",disabled:""},null,8,["modelValue"])]),t("div",g,[e[7]||(e[7]=t("h3",null,"不可清除",-1)),a(d(r),{modelValue:s.value,"onUpdate:modelValue":e[3]||(e[3]=l=>s.value=l),placeholder:"不可清除",clearable:!1},null,8,["modelValue"]),t("div",N,"选中的值: "+p(s.value),1)])]))}}),z=_(P,[["__scopeId","data-v-2191cc25"]]),J=JSON.parse('{"title":"DateTime Picker 日期时间选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/datetimepicker/index.md","filePath":"components/datetimepicker/index.md"}'),S={name:"components/datetimepicker/index.md"},K=Object.assign(S,{setup(h){const i=o(!0);return(m,n)=>{const s=k("ClientOnly");return f(),v("div",null,[n[1]||(n[1]=t("h1",{id:"datetime-picker-日期时间选择器",tabindex:"-1"},[c("DateTime Picker 日期时间选择器 "),t("a",{class:"header-anchor",href:"#datetime-picker-日期时间选择器","aria-label":'Permalink to "DateTime Picker 日期时间选择器"'},"​")],-1)),n[2]||(n[2]=t("h2",{id:"基本使用",tabindex:"-1"},[c("基本使用 "),t("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),b(a(d(V),null,null,512),[[D,i.value]]),a(s,null,{default:u(()=>[a(d(x),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[0]||(n[0]=()=>{i.value=!1}),vueCode:d(y)},{vue:u(()=>[a(z)]),_:1},8,["vueCode"])]),_:1})])}}});export{J as __pageData,K as default};
