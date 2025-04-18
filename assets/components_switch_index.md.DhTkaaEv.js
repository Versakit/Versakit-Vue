import{d as w,p as r,c as W,o as p,G as t,k as o,_ as C,b as x,B as f,j as e,a5 as b,a,ad as c,w as i}from"./chunks/framework.Dr5ddTBW.js";import{$ as S,a6 as B}from"./chunks/theme.1WR6ZKfk.js";import{d as h,f as V}from"./chunks/index.Cy4GuBY3.js";const k=`<template>
  <div>
    <VKSegmented v-model="selectedValue" :options="options"></VKSegmented>

    <VKSwitch :size="selectedValue" v-model="value" />
  </div>
</template>

<script lang="ts" setup>
import { VKSwitch, VKSegmented } from '@versakit/ui'
import { ref } from 'vue'

const value = ref(false)
const selectedValue = ref('md')

const options = [
  { label: 'SM', value: 'sm' },
  { label: 'MD', value: 'md' },
  { label: 'LG', value: 'lg' },
]
<\/script>

<style scoped>
.ver-switch {
  margin: 0px 10px;
}
</style>
`,z=w({__name:"size",setup(v){const n=r(!1),u=r("md"),l=[{label:"SM",value:"sm"},{label:"MD",value:"md"},{label:"LG",value:"lg"}];return(d,s)=>(p(),W("div",null,[t(o(S),{modelValue:u.value,"onUpdate:modelValue":s[0]||(s[0]=m=>u.value=m),options:l},null,8,["modelValue"]),t(o(B),{size:u.value,modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=m=>n.value=m)},null,8,["size","modelValue"])]))}}),D=C(z,[["__scopeId","data-v-5b9f0e45"]]),g=`<template>
  <VKSwitch v-model="value" />
</template>

<script lang="ts" setup>
import { VKSwitch } from '@versakit/ui'
import { ref } from 'vue'

const value = ref(false)
<\/script>
`,y=w({__name:"base",setup(v){const n=r(!1);return(u,l)=>(p(),x(o(B),{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=d=>n.value=d)},null,8,["modelValue"]))}}),Z={tabindex:"0"},T=JSON.parse('{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch/index.md","filePath":"components/switch/index.md"}'),A={name:"components/switch/index.md"},X=Object.assign(A,{setup(v){const n=r(!0);return(u,l)=>{const d=f("ClientOnly"),s=f("Tool");return p(),W("div",null,[l[8]||(l[8]=e("h1",{id:"switch-开关",tabindex:"-1"},[a("Switch 开关 "),e("a",{class:"header-anchor",href:"#switch-开关","aria-label":'Permalink to "Switch 开关"'},"​")],-1)),l[9]||(l[9]=e("p",null,"表示两种相互对立的状态间的切换，多用于触发「开/关」。",-1)),l[10]||(l[10]=e("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),l[11]||(l[11]=e("p",null,[a("绑定 "),e("code",null,"v-model"),a(" 到一个 "),e("code",null,"Boolean"),a(" 类型的变量。")],-1)),b(t(o(h),null,null,512),[[c,n.value]]),t(d,null,{default:i(()=>[t(o(V),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:l[0]||(l[0]=()=>{n.value=!1}),vueCode:o(g)},{vue:i(()=>[t(y)]),_:1},8,["vueCode"])]),_:1}),l[12]||(l[12]=e("h2",{id:"尺寸",tabindex:"-1"},[a("尺寸 "),e("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1)),l[13]||(l[13]=e("p",null,[a("可以通过 "),e("code",null,"size"),a(" 属性来设置 switch 的大小。")],-1)),b(t(o(h),null,null,512),[[c,n.value]]),t(d,null,{default:i(()=>[t(o(V),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:l[1]||(l[1]=()=>{n.value=!1}),vueCode:o(k)},{vue:i(()=>[t(D)]),_:1},8,["vueCode"])]),_:1}),l[14]||(l[14]=e("h2",{id:"switch-api",tabindex:"-1"},[a("Switch API "),e("a",{class:"header-anchor",href:"#switch-api","aria-label":'Permalink to "Switch API"'},"​")],-1)),e("table",Z,[l[7]||(l[7]=e("thead",null,[e("tr",null,[e("th",null,"属性"),e("th",null,"说明"),e("th",null,"类型"),e("th",null,"默认值")])],-1)),e("tbody",null,[l[6]||(l[6]=e("tr",null,[e("td",null,[e("code",null,"v-model"),a(" / "),e("code",null,"modelValue")]),e("td",null,"绑定值"),e("td",null,[e("code",null,"boolean")]),e("td",null,"false")],-1)),e("tr",null,[l[3]||(l[3]=e("td",null,[e("code",null,"size")],-1)),l[4]||(l[4]=e("td",null,"设置尺寸",-1)),e("td",null,[l[2]||(l[2]=e("code",null,"enum",-1)),t(s,{value:"lg,md,sm"})]),l[5]||(l[5]=e("td",null,"md",-1))])])])])}}});export{T as __pageData,X as default};
