import{d as V,b as W,o as p,w as d,G as n,k as a,a as l,_ as y,p as C,c,B as T,j as e,a5 as x,ad as f}from"./chunks/framework.Dr5ddTBW.js";import{aa as r,Y as B,$ as X}from"./chunks/theme.C6wl5IZj.js";import{d as v,f as b}from"./chunks/index.Cy4GuBY3.js";const D=`<script setup lang="ts">
import { VKRow, VKText } from '@versakit/ui'
<\/script>

<template>
  <VKRow>
    <VKText class="w-100px" truncated>Self element set width 100px</VKText>
  </VKRow>
</template>

<style scoped>
.w-100px {
  width: 100px;
}
</style>
`,g=V({__name:"truncated",setup(m){return(u,s)=>(p(),W(a(B),null,{default:d(()=>[n(a(r),{class:"w-100px",truncated:""},{default:d(()=>s[0]||(s[0]=[l("Self element set width 100px")])),_:1})]),_:1}))}}),w=y(g,[["__scopeId","data-v-4d29b53e"]]),z=`<script setup lang="ts">
import { ref } from 'vue'
import { VKText, VKSegmented } from '@versakit/ui'

const selectedValue = ref('md')
const options = [
  { label: 'XS', value: 'xs' },
  { label: 'SM', value: 'sm' },
  { label: 'MD', value: 'md' },
  { label: 'LG', value: 'lg' },
]
<\/script>

<template>
  <div>
    <VKSegmented :options="options" v-model="selectedValue" />

    <VKText class="mx4" :size="selectedValue">我是文本</VKText>
  </div>
</template>

<style scoped>
.mx4 {
  margin: 0px 10px;
}
</style>
`,G=V({__name:"size",setup(m){const u=C("md"),s=[{label:"XS",value:"xs"},{label:"SM",value:"sm"},{label:"MD",value:"md"},{label:"LG",value:"lg"}];return(t,o)=>(p(),c("div",null,[n(a(X),{options:s,modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=i=>u.value=i)},null,8,["modelValue"]),n(a(r),{class:"mx4",size:u.value},{default:d(()=>o[1]||(o[1]=[l("我是文本")])),_:1},8,["size"])]))}}),K=y(G,[["__scopeId","data-v-b607316a"]]),k=`<script setup lang="ts">
import { VKRow, VKText } from '@versakit/ui'
<\/script>

<template>
  <VKRow>
    <VKText class="mx4">Default</VKText>
    <VKText class="mx4" type="primary">Primary</VKText>
    <VKText class="mx4" type="success">Success</VKText>
    <VKText class="mx4" type="info">Info</VKText>
    <VKText class="mx4" type="warn">Warning</VKText>
    <VKText class="mx4" type="error">Danger</VKText>
  </VKRow>
</template>

<style scoped lang="scss">
.mx4 {
  margin: 0px 10px;
}
</style>
`,Z=V({__name:"base",setup(m){return(u,s)=>(p(),W(a(B),null,{default:d(()=>[n(a(r),{class:"mx4"},{default:d(()=>s[0]||(s[0]=[l("Default")])),_:1}),n(a(r),{class:"mx4",type:"primary"},{default:d(()=>s[1]||(s[1]=[l("Primary")])),_:1}),n(a(r),{class:"mx4",type:"success"},{default:d(()=>s[2]||(s[2]=[l("Success")])),_:1}),n(a(r),{class:"mx4",type:"info"},{default:d(()=>s[3]||(s[3]=[l("Info")])),_:1}),n(a(r),{class:"mx4",type:"warn"},{default:d(()=>s[4]||(s[4]=[l("Warning")])),_:1}),n(a(r),{class:"mx4",type:"error"},{default:d(()=>s[5]||(s[5]=[l("Danger")])),_:1})]),_:1}))}}),A=y(Z,[["__scopeId","data-v-85b145cd"]]),N={tabindex:"0"},L=JSON.parse('{"title":"Text 文本","description":"","frontmatter":{},"headers":[],"relativePath":"components/text/index.md","filePath":"components/text/index.md"}'),S={name:"components/text/index.md"},I=Object.assign(S,{setup(m){const u=C(!0);return(s,t)=>{const o=T("ClientOnly"),i=T("Tool");return p(),c("div",null,[t[13]||(t[13]=e("h1",{id:"text-文本",tabindex:"-1"},[l("Text 文本 "),e("a",{class:"header-anchor",href:"#text-文本","aria-label":'Permalink to "Text 文本"'},"​")],-1)),t[14]||(t[14]=e("h2",{id:"基础使用",tabindex:"-1"},[l("基础使用 "),e("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),t[15]||(t[15]=e("p",null,[l("由 "),e("code",null,"type"),l(" 属性来选择 Text 的类型。")],-1)),x(n(a(v),null,null,512),[[f,u.value]]),n(o,null,{default:d(()=>[n(a(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{u.value=!1}),vueCode:a(k)},{vue:d(()=>[n(A)]),_:1},8,["vueCode"])]),_:1}),t[16]||(t[16]=e("h2",{id:"尺寸",tabindex:"-1"},[l("尺寸 "),e("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1)),t[17]||(t[17]=e("p",null,[l("使用 "),e("code",null,"size"),l(" 属性配置尺寸，可选的尺寸大小有："),e("code",null,"large"),l("， "),e("code",null,"default"),l(" 或 "),e("code",null,"small"),l("。")],-1)),x(n(a(v),null,null,512),[[f,u.value]]),n(o,null,{default:d(()=>[n(a(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{u.value=!1}),vueCode:a(z)},{vue:d(()=>[n(K)]),_:1},8,["vueCode"])]),_:1}),t[18]||(t[18]=e("h2",{id:"省略",tabindex:"-1"},[l("省略 "),e("a",{class:"header-anchor",href:"#省略","aria-label":'Permalink to "省略"'},"​")],-1)),t[19]||(t[19]=e("p",null,[l("通过 "),e("code",null,"truncated"),l(" 属性,在文本超过视图或最大宽度设置时展示省略符。")],-1)),x(n(a(v),null,null,512),[[f,u.value]]),n(o,null,{default:d(()=>[n(a(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{u.value=!1}),vueCode:a(D)},{vue:d(()=>[n(w)]),_:1},8,["vueCode"])]),_:1}),t[20]||(t[20]=e("h2",{id:"text-api",tabindex:"-1"},[l("Text API "),e("a",{class:"header-anchor",href:"#text-api","aria-label":'Permalink to "Text API"'},"​")],-1)),t[21]||(t[21]=e("h3",{id:"text属性",tabindex:"-1"},[l("Text属性 "),e("a",{class:"header-anchor",href:"#text属性","aria-label":'Permalink to "Text属性"'},"​")],-1)),e("table",N,[t[12]||(t[12]=e("thead",null,[e("tr",null,[e("th",null,"属性"),e("th",null,"说明"),e("th",null,"类型"),e("th",null,"默认值")])],-1)),e("tbody",null,[e("tr",null,[t[4]||(t[4]=e("td",null,[e("code",null,"type")],-1)),t[5]||(t[5]=e("td",null,"文本的类型",-1)),e("td",null,[t[3]||(t[3]=e("code",null,"enum",-1)),n(i,{value:"default,primary,secondary"})]),t[6]||(t[6]=e("td",null,"default",-1))]),e("tr",null,[t[8]||(t[8]=e("td",null,[e("code",null,"size")],-1)),t[9]||(t[9]=e("td",null,"用于调整文本的大小",-1)),e("td",null,[t[7]||(t[7]=e("code",null,"enum",-1)),n(i,{value:"lg,md,sm,xs"})]),t[10]||(t[10]=e("td",null,"default",-1))]),t[11]||(t[11]=e("tr",null,[e("td",null,[e("code",null,"truncated ")]),e("td",null,"在文本超过视图或最大宽度设置时展示省略符。"),e("td",null,[e("code",null,"boolean")]),e("td",null,"false")],-1))])])])}}});export{L as __pageData,I as default};
