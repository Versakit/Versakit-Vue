import{d as C,p as r,c,o as h,G as l,k as n,B as V,j as d,a4 as b,a as p,aa as g,w as v}from"./chunks/framework.rcZoKwU1.js";import{w as u}from"./chunks/theme.BBSXUahi.js";import{O as _,E as x}from"./chunks/index.CpKg_UEU.js";const B=`<script setup lang="ts">
import { VKSlider } from '@versakit/ui'
import { ref } from 'vue'

const value = ref(0)
const value2 = ref(20)
const value3 = ref(50)

const handleChange = (val: number) => {
  console.log('Changed:', val)
}
<\/script>

<template>
  <div>
    <VKSlider v-model="value" />

    <VKSlider
      v-model="value2"
      :min="0"
      :max="200"
      :step="5"
      @change="handleChange"
    />

    <VKSlider v-model="value3" disabled @change="handleChange" />
  </div>
</template>
`,k=C({__name:"base",setup(f){const t=r(0),i=r(20),e=r(50),s=m=>{console.log("Changed:",m)};return(m,a)=>(h(),c("div",null,[l(n(u),{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=o=>t.value=o)},null,8,["modelValue"]),l(n(u),{modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=o=>i.value=o),min:0,max:200,step:5,onChange:s},null,8,["modelValue"]),l(n(u),{modelValue:e.value,"onUpdate:modelValue":a[2]||(a[2]=o=>e.value=o),disabled:"",onChange:s},null,8,["modelValue"])]))}}),W=JSON.parse('{"title":"Slider 滑块","description":"","frontmatter":{},"headers":[],"relativePath":"components/slider/index.md","filePath":"components/slider/index.md"}'),w={name:"components/slider/index.md"},A=Object.assign(w,{setup(f){const t=r(!0);return(i,e)=>{const s=V("ClientOnly");return h(),c("div",null,[e[1]||(e[1]=d("h1",{id:"slider-滑块",tabindex:"-1"},[p("Slider 滑块 "),d("a",{class:"header-anchor",href:"#slider-滑块","aria-label":'Permalink to "Slider 滑块"'},"​")],-1)),e[2]||(e[2]=d("h2",{id:"基本用法",tabindex:"-1"},[p("基本用法 "),d("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),b(l(n(_),null,null,512),[[g,t.value]]),l(s,null,{default:v(()=>[l(n(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),vueCode:n(B)},{vue:v(()=>[l(k)]),_:1},8,["vueCode"])]),_:1})])}}});export{W as __pageData,A as default};
