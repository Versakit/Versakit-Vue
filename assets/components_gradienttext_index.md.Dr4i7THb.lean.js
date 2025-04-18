import{c as u,o as p,G as t,w as d,a as o,k as a,F as T,p as h,j as l,B as G,a5 as b,aw as g,ad as f}from"./chunks/framework.Dr5ddTBW.js";import{n as s,$ as y}from"./chunks/theme.C6wl5IZj.js";import{d as x,f as v}from"./chunks/index.Cy4GuBY3.js";const c=`<template>
  <VKGradientText
    :gradient="{ rotate: 244, start: '#de344f 0%', end: '#68dada 100%' }"
  >
    自定义颜色
  </VKGradientText>
  <VKGradientText
    :gradient="{ rotate: 244, start: '#4774cf99 0%', end: '#68dada 100%' }"
  >
    Hello World
  </VKGradientText>
  <VKGradientText
    :gradient="{ rotate: 244, start: '#a299ff 0%', end: '#11fdd 100%' }"
  >
    你好，世界
  </VKGradientText>
</template>

<script setup>
import { VKGradientText } from '@versakit/ui'
<\/script>
`,B={__name:"color",setup(m){return(i,n)=>(p(),u(T,null,[t(a(s),{gradient:{rotate:244,start:"#de344f 0%",end:"#68dada 100%"}},{default:d(()=>n[0]||(n[0]=[o(" 自定义颜色 ")])),_:1}),t(a(s),{gradient:{rotate:244,start:"#4774cf99 0%",end:"#68dada 100%"}},{default:d(()=>n[1]||(n[1]=[o(" Hello World ")])),_:1}),t(a(s),{gradient:{rotate:244,start:"#a299ff 0%",end:"#11fdd 100%"}},{default:d(()=>n[2]||(n[2]=[o(" 你好，世界 ")])),_:1})],64))}},C=`<template>
  <VKSegmented v-model="selectedValue" :options="options"></VKSegmented>
  <br />
  <VKGradientText :size="selectedValue" type="success">哈哈哈哈</VKGradientText>
  <br />
  <VKGradientText :size="24" type="error">哈哈哈哈</VKGradientText>
</template>
<script setup>
import { ref } from 'vue'
import { VKGradientText } from '@versakit/ui'
import { VKSegmented } from '@versakit/ui'

const selectedValue = ref('md')
const options = [
  { label: 'XS', value: 'xs' },
  { label: 'SM', value: 'sm' },
  { label: 'MD', value: 'md' },
  { label: 'LG', value: 'lg' },
]
<\/script>
`,D={__name:"size",setup(m){const i=h("md"),n=[{label:"XS",value:"xs"},{label:"SM",value:"sm"},{label:"MD",value:"md"},{label:"LG",value:"lg"}];return(e,r)=>(p(),u(T,null,[t(a(y),{modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=V=>i.value=V),options:n},null,8,["modelValue"]),r[3]||(r[3]=l("br",null,null,-1)),t(a(s),{size:i.value,type:"success"},{default:d(()=>r[1]||(r[1]=[o("哈哈哈哈")])),_:1},8,["size"]),r[4]||(r[4]=l("br",null,null,-1)),t(a(s),{size:24,type:"error"},{default:d(()=>r[2]||(r[2]=[o("哈哈哈哈")])),_:1})],64))}},W=`<template>
  <VKGradientText type="error">炸了</VKGradientText>
  <VKGradientText type="info">炸了</VKGradientText>
  <VKGradientText type="warning">炸了</VKGradientText>
  <VKGradientText type="success">炸了</VKGradientText>
</template>

<script setup>
import { VKGradientText } from '@versakit/ui'
<\/script>
`,k={__name:"base",setup(m){return(i,n)=>(p(),u(T,null,[t(a(s),{type:"error"},{default:d(()=>n[0]||(n[0]=[o("炸了")])),_:1}),t(a(s),{type:"info"},{default:d(()=>n[1]||(n[1]=[o("炸了")])),_:1}),t(a(s),{type:"warning"},{default:d(()=>n[2]||(n[2]=[o("炸了")])),_:1}),t(a(s),{type:"success"},{default:d(()=>n[3]||(n[3]=[o("炸了")])),_:1})],64))}},z=JSON.parse('{"title":"GradientText 渐变文字","description":"","frontmatter":{},"headers":[],"relativePath":"components/gradienttext/index.md","filePath":"components/gradienttext/index.md"}'),K={name:"components/gradienttext/index.md"},w=Object.assign(K,{setup(m){const i=h(!0);return(n,e)=>{const r=G("ClientOnly");return p(),u("div",null,[e[3]||(e[3]=l("h1",{id:"gradienttext-渐变文字",tabindex:"-1"},[o("GradientText 渐变文字 "),l("a",{class:"header-anchor",href:"#gradienttext-渐变文字","aria-label":'Permalink to "GradientText 渐变文字"'},"​")],-1)),e[4]||(e[4]=l("p",null,"用于展示渐变色的文字。",-1)),e[5]||(e[5]=l("h2",{id:"基础用法",tabindex:"-1"},[o("基础用法 "),l("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),e[6]||(e[6]=l("p",null,"它有不同的类型。",-1)),b(t(a(x),null,null,512),[[f,i.value]]),t(r,null,{default:d(()=>[t(a(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{i.value=!1}),vueCode:a(W)},{vue:d(()=>[t(k)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=l("h2",{id:"尺寸",tabindex:"-1"},[o("尺寸 "),l("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1)),e[8]||(e[8]=l("p",null,"它可以自定义数值，也可以写规定尺寸。",-1)),b(t(a(x),null,null,512),[[f,i.value]]),t(r,null,{default:d(()=>[t(a(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{i.value=!1}),vueCode:a(C)},{vue:d(()=>[t(D)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=l("h2",{id:"自定义颜色",tabindex:"-1"},[o("自定义颜色 "),l("a",{class:"header-anchor",href:"#自定义颜色","aria-label":'Permalink to "自定义颜色"'},"​")],-1)),e[10]||(e[10]=l("p",null,"靠你的天马行空。",-1)),b(t(a(x),null,null,512),[[f,i.value]]),t(r,null,{default:d(()=>[t(a(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{i.value=!1}),vueCode:a(c)},{vue:d(()=>[t(B)]),_:1},8,["vueCode"])]),_:1}),e[11]||(e[11]=g("",5))])}}});export{z as __pageData,w as default};
