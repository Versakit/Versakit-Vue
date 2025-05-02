import{d as b,p as i,c as p,o as v,j as l,G as n,k as s,_ as h,B as f,a5 as V,a as c,ad as W,w as u}from"./chunks/framework.Dr5ddTBW.js";import{a1 as m}from"./chunks/theme.Bir5V9wV.js";import{d as w,f as x}from"./chunks/index.Cy4GuBY3.js";const C=`<template>
  <div class="select-demo">
    <h2>基础用法</h2>
    <div class="select-demo__row">
      <VKSelect
        v-model="value"
        :options="options"
        placeholder="请选择"
        class="select-demo__item"
      />
    </div>

    <h2>多选模式</h2>
    <div class="select-demo__row">
      <VKSelect
        v-model="multipleValue"
        :options="options"
        multiple
        clearable
        placeholder="请选择多个"
        class="select-demo__item"
      />
    </div>

    <h2>可搜索</h2>
    <div class="select-demo__row">
      <VKSelect
        v-model="searchValue"
        :options="options"
        filterable
        placeholder="可搜索"
        class="select-demo__item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VKSelect } from '@versakit/ui'

const value = ref('')
const multipleValue = ref<string[]>([])
const searchValue = ref('')

const options = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3', disabled: true },
  { label: '选项4', value: '4' },
]
<\/script>

<style scoped>
.select-demo {
  padding: 20px;
}

.select-demo h2 {
  margin: 20px 0;
  font-size: 18px;
  color: #333;
}

.select-demo__row {
  margin-bottom: 30px;
}

.select-demo__item {
  width: 240px;
}
</style>
`,B={class:"select-demo"},y={class:"select-demo__row"},Z={class:"select-demo__row"},k={class:"select-demo__row"},S=b({__name:"base",setup(_){const a=i(""),r=i([]),t=i(""),o=[{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3",disabled:!0},{label:"选项4",value:"4"}];return(N,e)=>(v(),p("div",B,[e[3]||(e[3]=l("h2",null,"基础用法",-1)),l("div",y,[n(s(m),{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=d=>a.value=d),options:o,placeholder:"请选择",class:"select-demo__item"},null,8,["modelValue"])]),e[4]||(e[4]=l("h2",null,"多选模式",-1)),l("div",Z,[n(s(m),{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=d=>r.value=d),options:o,multiple:"",clearable:"",placeholder:"请选择多个",class:"select-demo__item"},null,8,["modelValue"])]),e[5]||(e[5]=l("h2",null,"可搜索",-1)),l("div",k,[n(s(m),{modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=d=>t.value=d),options:o,filterable:"",placeholder:"可搜索",class:"select-demo__item"},null,8,["modelValue"])])]))}}),g=h(S,[["__scopeId","data-v-5db5214c"]]),A=JSON.parse('{"title":"Select 选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/select/index.md","filePath":"components/select/index.md"}'),z={name:"components/select/index.md"},T=Object.assign(z,{setup(_){const a=i(!0);return(r,t)=>{const o=f("ClientOnly");return v(),p("div",null,[t[1]||(t[1]=l("h1",{id:"select-选择器",tabindex:"-1"},[c("Select 选择器 "),l("a",{class:"header-anchor",href:"#select-选择器","aria-label":'Permalink to "Select 选择器"'},"​")],-1)),t[2]||(t[2]=l("h2",{id:"基本使用",tabindex:"-1"},[c("基本使用 "),l("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),V(n(s(w),null,null,512),[[W,a.value]]),n(o,null,{default:u(()=>[n(s(x),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:s(C)},{vue:u(()=>[n(g)]),_:1},8,["vueCode"])]),_:1})])}}});export{A as __pageData,T as default};
