import{d as C,b as X,o as i,w as d,c as p,F as v,C as k,j as l,k as a,_ as z,p as x,h as K,G as t,a4 as y,a as r,aa as g,B as Z}from"./chunks/framework.rcZoKwU1.js";import{_ as B,y as f,a as A,o as w}from"./chunks/theme.CbllQRZe.js";import{O as c,E as W}from"./chunks/index.CpKg_UEU.js";const G=`<script setup lang="ts">
import { VKFlex } from '@versakit/ui'
<\/script>
<template>
  <VKFlex wrap="wrap">
    <div v-for="n in 20" :key="n" class="flex-item" />
  </VKFlex>
</template>

<style scoped>
.flex-item {
  width: 80px;
  height: 40px;
  background-color: var(--theme-primary-500, var(--vk-primary-500));
}
</style>
`,h=C({__name:"wrap",setup(V){return(n,m)=>(i(),X(a(B),{wrap:"wrap"},{default:d(()=>[(i(),p(v,null,k(20,e=>l("div",{key:e,class:"flex-item"})),64))]),_:1}))}}),S=z(h,[["__scopeId","data-v-fb47dbcf"]]),D=`<script setup lang="ts">
import { ref, computed } from 'vue'
import { VKRadio, VKSlider, VKFlex } from '@versakit/ui'

const gapSize = ref<'small' | 'middle' | 'large' | 'custom'>('small')
const customGapSize = ref(16)

const computedGap = computed<number | 'small' | 'middle' | 'large'>(() => {
  if (gapSize.value === 'custom') {
    return customGapSize.value
  }
  return gapSize.value
})
<\/script>
<template>
  <div>
    <VKRadio label="small" v-model="gapSize">small</VKRadio>
    <VKRadio label="middle" v-model="gapSize">middle</VKRadio>
    <VKRadio label="large" v-model="gapSize">large</VKRadio>
    <VKRadio label="custom" v-model="gapSize">custom</VKRadio>
    <VKSlider v-model="customGapSize" v-show="gapSize === 'custom'"></VKSlider>
  </div>
  <VKFlex :gap="computedGap" style="margin-top: 10px">
    <div v-for="n in 4" :key="n" class="flex-item" />
  </VKFlex>
</template>

<style scoped>
.flex-item {
  width: 80px;
  height: 40px;
  background-color: var(--theme-primary-500, var(--vk-primary-500));
}
</style>
`,F=C({__name:"gap",setup(V){const n=x("small"),m=x(16),e=K(()=>n.value==="custom"?m.value:n.value);return(s,o)=>(i(),p(v,null,[l("div",null,[t(a(f),{label:"small",modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=u=>n.value=u)},{default:d(()=>o[5]||(o[5]=[r("small")])),_:1},8,["modelValue"]),t(a(f),{label:"middle",modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=u=>n.value=u)},{default:d(()=>o[6]||(o[6]=[r("middle")])),_:1},8,["modelValue"]),t(a(f),{label:"large",modelValue:n.value,"onUpdate:modelValue":o[2]||(o[2]=u=>n.value=u)},{default:d(()=>o[7]||(o[7]=[r("large")])),_:1},8,["modelValue"]),t(a(f),{label:"custom",modelValue:n.value,"onUpdate:modelValue":o[3]||(o[3]=u=>n.value=u)},{default:d(()=>o[8]||(o[8]=[r("custom")])),_:1},8,["modelValue"]),y(t(a(A),{modelValue:m.value,"onUpdate:modelValue":o[4]||(o[4]=u=>m.value=u)},null,8,["modelValue"]),[[g,n.value==="custom"]])]),t(a(B),{gap:e.value,style:{"margin-top":"10px"}},{default:d(()=>[(i(),p(v,null,k(4,u=>l("div",{key:u,class:"flex-item"})),64))]),_:1},8,["gap"])],64))}}),T=z(F,[["__scopeId","data-v-77e5d023"]]),J=`<script setup lang="ts">
import { ref } from 'vue'
import { VKSegmented, VKFlex } from '@versakit/ui'
import { AlignProps, JustifyProps } from '@versakit/ui/components/flex/type'

const justify = ref<JustifyProps>('flex-start')
const justifyOptions = [
  { label: 'flex-start', value: 'flex-start' },
  { label: 'center', value: 'center' },
  { label: 'flex-end', value: 'flex-end' },
  { label: 'space-between', value: 'space-between' },
  { label: 'space-around', value: 'space-around' },
  { label: 'space-evenly', value: 'space-evenly' },
]

const align = ref<AlignProps>('flex-start')
const alignOptions = [
  { label: 'flex-start', value: 'flex-start' },
  { label: 'center', value: 'center' },
  { label: 'flex-end', value: 'flex-end' },
]
<\/script>
<template>
  <div style="line-height: 36px">justify-content:</div>
  <VKSegmented v-model="justify" :options="justifyOptions"></VKSegmented>
  <div style="line-height: 36px">align-items:</div>
  <VKSegmented v-model="align" :options="alignOptions"></VKSegmented>
  <VKFlex class="flex-container" :align="align" :justify="justify">
    <div v-for="n in 4" :key="n" class="flex-item" />
  </VKFlex>
</template>
<style scoped>
.flex-container {
  height: 150px;
  border-radius: 5px;
  border: 1px dotted var(--theme-primary-500, var(--vk-primary-500));
  margin-top: 15px;
}

.flex-item {
  width: 80px;
  height: 40px;
  background-color: var(--theme-primary-500, var(--vk-primary-500));
}
</style>
`,N=C({__name:"align",setup(V){const n=x("flex-start"),m=[{label:"flex-start",value:"flex-start"},{label:"center",value:"center"},{label:"flex-end",value:"flex-end"},{label:"space-between",value:"space-between"},{label:"space-around",value:"space-around"},{label:"space-evenly",value:"space-evenly"}],e=x("flex-start"),s=[{label:"flex-start",value:"flex-start"},{label:"center",value:"center"},{label:"flex-end",value:"flex-end"}];return(o,u)=>(i(),p(v,null,[u[2]||(u[2]=l("div",{style:{"line-height":"36px"}},"justify-content:",-1)),t(a(w),{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=b=>n.value=b),options:m},null,8,["modelValue"]),u[3]||(u[3]=l("div",{style:{"line-height":"36px"}},"align-items:",-1)),t(a(w),{modelValue:e.value,"onUpdate:modelValue":u[1]||(u[1]=b=>e.value=b),options:s},null,8,["modelValue"]),t(a(B),{class:"flex-container",align:e.value,justify:n.value},{default:d(()=>[(i(),p(v,null,k(4,b=>l("div",{key:b,class:"flex-item"})),64))]),_:1},8,["align","justify"])],64))}}),Y=z(N,[["__scopeId","data-v-81ea5904"]]),L=`<script setup lang="ts">
import { ref } from 'vue'
import { VKFlex, VKRadio } from '@versakit/ui'

const direction = ref('horizontal')
<\/script>

<template>
  <div>
    <VKRadio label="horizontal" v-model="direction">horizontal</VKRadio>
    <VKRadio label="vertical" v-model="direction">vertical</VKRadio>
  </div>
  <VKFlex :vertical="direction === 'vertical'">
    <div v-for="n in 4" :key="n" class="flex-item" />
  </VKFlex>
</template>

<style scoped>
.flex-item {
  width: 25%;
  height: 80px;
  background-color: var(--theme-primary-500, var(--vk-primary-500));
}
</style>
`,j=C({__name:"base",setup(V){const n=x("horizontal");return(m,e)=>(i(),p(v,null,[l("div",null,[t(a(f),{label:"horizontal",modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=s=>n.value=s)},{default:d(()=>e[2]||(e[2]=[r("horizontal")])),_:1},8,["modelValue"]),t(a(f),{label:"vertical",modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=s=>n.value=s)},{default:d(()=>e[3]||(e[3]=[r("vertical")])),_:1},8,["modelValue"])]),t(a(B),{vertical:n.value==="vertical"},{default:d(()=>[(i(),p(v,null,k(4,s=>l("div",{key:s,class:"flex-item"})),64))]),_:1},8,["vertical"])],64))}}),I=z(j,[["__scopeId","data-v-a2e1fcf8"]]),P={tabindex:"0"},U=JSON.parse('{"title":"Flex 弹性布局","description":"","frontmatter":{},"headers":[],"relativePath":"components/flex/index.md","filePath":"components/flex/index.md"}'),R={name:"components/flex/index.md"},q=Object.assign(R,{setup(V){const n=x(!0);return(m,e)=>{const s=Z("ClientOnly"),o=Z("Tool");return i(),p("div",null,[e[22]||(e[22]=l("h1",{id:"flex-弹性布局",tabindex:"-1"},[r("Flex 弹性布局 "),l("a",{class:"header-anchor",href:"#flex-弹性布局","aria-label":'Permalink to "Flex 弹性布局"'},"​")],-1)),e[23]||(e[23]=l("h2",{id:"基本使用",tabindex:"-1"},[r("基本使用 "),l("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),y(t(a(c),null,null,512),[[g,n.value]]),t(s,null,{default:d(()=>[t(a(W),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{n.value=!1}),vueCode:a(L)},{vue:d(()=>[t(I)]),_:1},8,["vueCode"])]),_:1}),e[24]||(e[24]=l("h2",{id:"对齐方式",tabindex:"-1"},[r("对齐方式 "),l("a",{class:"header-anchor",href:"#对齐方式","aria-label":'Permalink to "对齐方式"'},"​")],-1)),y(t(a(c),null,null,512),[[g,n.value]]),t(s,null,{default:d(()=>[t(a(W),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{n.value=!1}),vueCode:a(J)},{vue:d(()=>[t(Y)]),_:1},8,["vueCode"])]),_:1}),e[25]||(e[25]=l("h2",{id:"间隙设置",tabindex:"-1"},[r("间隙设置 "),l("a",{class:"header-anchor",href:"#间隙设置","aria-label":'Permalink to "间隙设置"'},"​")],-1)),y(t(a(c),null,null,512),[[g,n.value]]),t(s,null,{default:d(()=>[t(a(W),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{n.value=!1}),vueCode:a(D)},{vue:d(()=>[t(T)]),_:1},8,["vueCode"])]),_:1}),e[26]||(e[26]=l("h2",{id:"自动换行",tabindex:"-1"},[r("自动换行 "),l("a",{class:"header-anchor",href:"#自动换行","aria-label":'Permalink to "自动换行"'},"​")],-1)),y(t(a(c),null,null,512),[[g,n.value]]),t(s,null,{default:d(()=>[t(a(W),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{n.value=!1}),vueCode:a(G)},{vue:d(()=>[t(S)]),_:1},8,["vueCode"])]),_:1}),e[27]||(e[27]=l("h2",{id:"flex-api",tabindex:"-1"},[r("Flex API "),l("a",{class:"header-anchor",href:"#flex-api","aria-label":'Permalink to "Flex API"'},"​")],-1)),l("table",P,[e[21]||(e[21]=l("thead",null,[l("tr",null,[l("th",null,"属性"),l("th",null,"说明"),l("th",null,"类型"),l("th",null,"默认值")])],-1)),l("tbody",null,[e[20]||(e[20]=l("tr",null,[l("td",null,[l("code",null,"vertical")]),l("td",null,[l("code",null,"flex"),r(" 主轴的方向是否垂直")]),l("td",null,[l("code",null,"boolean")]),l("td",null,"false")],-1)),l("tr",null,[e[5]||(e[5]=l("td",null,[l("code",null,"wrap")],-1)),e[6]||(e[6]=l("td",null,[r("设置元素单行显示还是多行显示；参考 "),l("code",null,"flex-wrap")],-1)),l("td",null,[e[4]||(e[4]=l("code",null,"enum",-1)),t(o,{value:"nowrap,wrap,wrap-reverse"})]),e[7]||(e[7]=l("td",null,"nowrap",-1))]),l("tr",null,[e[9]||(e[9]=l("td",null,[l("code",null,"justify")],-1)),e[10]||(e[10]=l("td",null,[r("设置元素在主轴方向上的对齐方式；参考 "),l("code",null,"justify-content")],-1)),l("td",null,[e[8]||(e[8]=l("code",null,"enum",-1)),t(o,{value:"normal,flex-start,center,flex-end,space-between,space-around,space-evenly"})]),e[11]||(e[11]=l("td",null,"normal",-1))]),l("tr",null,[e[13]||(e[13]=l("td",null,[l("code",null,"align")],-1)),e[14]||(e[14]=l("td",null,[r("设置元素在交叉轴方向上的对齐方式；参考 "),l("code",null,"align-items")],-1)),l("td",null,[e[12]||(e[12]=l("code",null,"enum",-1)),t(o,{value:"normal,flex-start,center,flex-end"})]),e[15]||(e[15]=l("td",null,"normal",-1))]),l("tr",null,[e[17]||(e[17]=l("td",null,[l("code",null,"gap")],-1)),e[18]||(e[18]=l("td",null,[r("设置网格之间的间隙，数组时表示: "),l("code",null,"[水平间距, 垂直间距]")],-1)),l("td",null,[e[16]||(e[16]=l("code",null,"enum",-1)),t(o,{value:"number,number[],small,middle,large"})]),e[19]||(e[19]=l("td",null,"middle",-1))])])])])}}});export{U as __pageData,q as default};
