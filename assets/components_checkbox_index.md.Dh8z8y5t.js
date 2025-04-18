import{d as b,p as r,c as u,o as v,j as o,G as t,k as n,w as s,a as l,_ as h,B as x,a5 as f,ad as k}from"./chunks/framework.Dr5ddTBW.js";import{T as m,A as V}from"./chunks/theme.C6wl5IZj.js";import{d as C,f as _}from"./chunks/index.Cy4GuBY3.js";const g=`<script setup lang="ts">
import { ref } from 'vue'
import { VKCheckbox, VKCheckboxGroup } from '@versakit/ui'

const checked = ref(false)
const groupValue = ref<string[]>([])
<\/script>

<template>
  <div class="checkbox-demo">
    <div class="demo-section">
      <h3 class="demo-title">基础用法</h3>
      <div class="demo-content">
        <VKCheckbox v-model="checked">选项</VKCheckbox>
      </div>
    </div>

    <div class="demo-section">
      <h3 class="demo-title">禁用状态</h3>
      <div class="demo-content">
        <VKCheckbox v-model="checked" disabled>禁用</VKCheckbox>
      </div>
    </div>

    <div class="demo-section">
      <h3 class="demo-title">半选状态</h3>
      <div class="demo-content">
        <VKCheckbox v-model="checked" indeterminate>半选</VKCheckbox>
      </div>
    </div>

    <div class="demo-section">
      <h3 class="demo-title">复选框组</h3>
      <div class="demo-content">
        <VKCheckboxGroup v-model="groupValue">
          <VKCheckbox value="1">选项1</VKCheckbox>
          <VKCheckbox value="2">选项2</VKCheckbox>
          <VKCheckbox value="3" disabled>选项3</VKCheckbox>
          <VKCheckbox value="4">选项4</VKCheckbox>
        </VKCheckboxGroup>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.checkbox-demo {
  padding: 20px;
}

.demo-section {
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
}

.demo-title {
  margin: 0 0 16px;
  font-size: 16px;
  font-weight: 500;
  color: #1f2937;
}

.demo-content {
  padding: 16px;
  background-color: #f9fafb;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}
</style>
`,B={class:"checkbox-demo"},K={class:"demo-section"},X={class:"demo-content"},y={class:"demo-section"},W={class:"demo-content"},Z={class:"demo-section"},N={class:"demo-content"},Y={class:"demo-section"},D={class:"demo-content"},w=b({__name:"base",setup(p){const d=r(!1),c=r([]);return(a,e)=>(v(),u("div",B,[o("div",K,[e[5]||(e[5]=o("h3",{class:"demo-title"},"基础用法",-1)),o("div",X,[t(n(m),{modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=i=>d.value=i)},{default:s(()=>e[4]||(e[4]=[l("选项")])),_:1},8,["modelValue"])])]),o("div",y,[e[7]||(e[7]=o("h3",{class:"demo-title"},"禁用状态",-1)),o("div",W,[t(n(m),{modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=i=>d.value=i),disabled:""},{default:s(()=>e[6]||(e[6]=[l("禁用")])),_:1},8,["modelValue"])])]),o("div",Z,[e[9]||(e[9]=o("h3",{class:"demo-title"},"半选状态",-1)),o("div",N,[t(n(m),{modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=i=>d.value=i),indeterminate:""},{default:s(()=>e[8]||(e[8]=[l("半选")])),_:1},8,["modelValue"])])]),o("div",Y,[e[14]||(e[14]=o("h3",{class:"demo-title"},"复选框组",-1)),o("div",D,[t(n(V),{modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=i=>c.value=i)},{default:s(()=>[t(n(m),{value:"1"},{default:s(()=>e[10]||(e[10]=[l("选项1")])),_:1}),t(n(m),{value:"2"},{default:s(()=>e[11]||(e[11]=[l("选项2")])),_:1}),t(n(m),{value:"3",disabled:""},{default:s(()=>e[12]||(e[12]=[l("选项3")])),_:1}),t(n(m),{value:"4"},{default:s(()=>e[13]||(e[13]=[l("选项4")])),_:1})]),_:1},8,["modelValue"])])])]))}}),z=h(w,[["__scopeId","data-v-81c47423"]]),J=JSON.parse('{"title":"CheckBox 复选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/checkbox/index.md","filePath":"components/checkbox/index.md"}'),A={name:"components/checkbox/index.md"},O=Object.assign(A,{setup(p){const d=r(!0);return(c,a)=>{const e=x("ClientOnly");return v(),u("div",null,[a[1]||(a[1]=o("h1",{id:"checkbox-复选框",tabindex:"-1"},[l("CheckBox 复选框 "),o("a",{class:"header-anchor",href:"#checkbox-复选框","aria-label":'Permalink to "CheckBox 复选框"'},"​")],-1)),a[2]||(a[2]=o("h2",{id:"基本使用",tabindex:"-1"},[l("基本使用 "),o("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),f(t(n(C),null,null,512),[[k,d.value]]),t(e,null,{default:s(()=>[t(n(_),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:a[0]||(a[0]=()=>{d.value=!1}),vueCode:n(g)},{vue:s(()=>[t(z)]),_:1},8,["vueCode"])]),_:1})])}}});export{J as __pageData,O as default};
