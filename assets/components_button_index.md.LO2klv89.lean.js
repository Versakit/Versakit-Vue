import{d as y,b as Z,o as p,w as u,G as e,k as n,_ as W,a,p as C,c as g,F as Y,ax as z,B as k,aw as D,a5 as v,j as t,ad as V}from"./chunks/framework.Dr5ddTBW.js";import{k as d,Y as i,$ as x}from"./chunks/theme.C6wl5IZj.js";import{d as f,f as B}from"./chunks/index.Cy4GuBY3.js";const X=`<script setup lang="ts">
import { VKButton, VKRow } from '@versakit/ui'
<\/script>

<template>
  <VKRow>
    <VKButton color="pink" circle icon="ep:apple" />
    <VKButton color="green" circle icon="ep:chrome-filled" />
    <VKButton circle icon="ep:cold-drink" />
  </VKRow>
</template>
<style scoped>
.ver-btn {
  margin: 0.5rem;
}
</style>
`,c=y({__name:"icon",setup(b){return(r,l)=>(p(),Z(n(i),null,{default:u(()=>[e(n(d),{color:"pink",circle:"",icon:"ep:apple"}),e(n(d),{color:"green",circle:"",icon:"ep:chrome-filled"}),e(n(d),{circle:"",icon:"ep:cold-drink"})]),_:1}))}}),A=W(c,[["__scopeId","data-v-36d7d1e0"]]),G=`<script setup lang="ts">
import { VKButton, VKRow } from '@versakit/ui'
<\/script>

<template>
  <VKRow class="mb-4">
    <VKButton color="blue-1">按 钮</VKButton>
    <VKButton color="blue-2">按 钮</VKButton>
    <VKButton color="blue-3">按 钮</VKButton>
    <VKButton color="blue-4">按 钮</VKButton>
    <VKButton color="blue-5">按 钮</VKButton>
  </VKRow>
</template>

<style scoped lang="scss">
.mb-4 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.ver-btn + .ver-btn {
  margin: 0px 6px;
}
</style>
`,T=y({__name:"ripple",setup(b){return(r,l)=>(p(),Z(n(i),{class:"mb-4"},{default:u(()=>[e(n(d),{color:"blue-1"},{default:u(()=>l[0]||(l[0]=[a("按 钮")])),_:1}),e(n(d),{color:"blue-2"},{default:u(()=>l[1]||(l[1]=[a("按 钮")])),_:1}),e(n(d),{color:"blue-3"},{default:u(()=>l[2]||(l[2]=[a("按 钮")])),_:1}),e(n(d),{color:"blue-4"},{default:u(()=>l[3]||(l[3]=[a("按 钮")])),_:1}),e(n(d),{color:"blue-5"},{default:u(()=>l[4]||(l[4]=[a("按 钮")])),_:1})]),_:1}))}}),R=W(T,[["__scopeId","data-v-d1ed96e4"]]),N=`<script setup lang="ts">
import { ref } from 'vue'
import { VKButton, VKSegmented } from '@versakit/ui'

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
    <VKSegmented v-model="selectedValue" :options="options"></VKSegmented>

    <VKButton class="mx-2" color="blue-5" :size="selectedValue">
      主要按钮
    </VKButton>
  </div>
</template>

<style scoped>
.ver-btn {
  margin: 10px 0px;
}
</style>
`,S=y({__name:"size",setup(b){const r=C("md"),l=[{label:"XS",value:"xs"},{label:"SM",value:"sm"},{label:"MD",value:"md"},{label:"LG",value:"lg"}];return(o,s)=>(p(),g("div",null,[e(n(x),{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=w=>r.value=w),options:l},null,8,["modelValue"]),e(n(d),{class:"mx-2",color:"blue-5",size:r.value},{default:u(()=>s[1]||(s[1]=[a(" 主要按钮 ")])),_:1},8,["size"])]))}}),J=W(S,[["__scopeId","data-v-edd49ea7"]]),L=`<script setup lang="ts">
import { VKButton, VKRow } from '@versakit/ui'
<\/script>

<template>
  <VKRow class="mb-4">
    <VKButton disabled color="red-5">按 钮</VKButton>
    <VKButton disabled variant="plain round" color="red-1">按 钮</VKButton>
  </VKRow>

  <VKRow class="mb-4">
    <VKButton disabled color="blue-5">按 钮</VKButton>
    <VKButton disabled variant="plain round" color="blue-1">按 钮</VKButton>
  </VKRow>

  <VKRow class="mb-4">
    <VKButton disabled color="green-5">按 钮</VKButton>
    <VKButton disabled variant="plain round" color="green-1">按 钮</VKButton>
  </VKRow>

  <VKRow class="mb-4">
    <VKButton disabled color="zinc-5">按 钮</VKButton>
    <VKButton disabled variant="plain round" color="zinc-1">按 钮</VKButton>
  </VKRow>

  <VKRow class="mb-4">
    <VKButton disabled color="violet-5">按 钮</VKButton>
    <VKButton disabled variant="plain round" color="violet-1">按 钮</VKButton>
  </VKRow>
</template>

<style scoped>
.mb-4 {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.ver-btn + .ver-btn {
  margin: 0px 10px;
}
</style>
`,I=y({__name:"disabled",setup(b){return(r,l)=>(p(),g(Y,null,[e(n(i),{class:"mb-4"},{default:u(()=>[e(n(d),{disabled:"",color:"red-5"},{default:u(()=>l[0]||(l[0]=[a("按 钮")])),_:1}),e(n(d),{disabled:"",variant:"plain round",color:"red-1"},{default:u(()=>l[1]||(l[1]=[a("按 钮")])),_:1})]),_:1}),e(n(i),{class:"mb-4"},{default:u(()=>[e(n(d),{disabled:"",color:"blue-5"},{default:u(()=>l[2]||(l[2]=[a("按 钮")])),_:1}),e(n(d),{disabled:"",variant:"plain round",color:"blue-1"},{default:u(()=>l[3]||(l[3]=[a("按 钮")])),_:1})]),_:1}),e(n(i),{class:"mb-4"},{default:u(()=>[e(n(d),{disabled:"",color:"green-5"},{default:u(()=>l[4]||(l[4]=[a("按 钮")])),_:1}),e(n(d),{disabled:"",variant:"plain round",color:"green-1"},{default:u(()=>l[5]||(l[5]=[a("按 钮")])),_:1})]),_:1}),e(n(i),{class:"mb-4"},{default:u(()=>[e(n(d),{disabled:"",color:"zinc-5"},{default:u(()=>l[6]||(l[6]=[a("按 钮")])),_:1}),e(n(d),{disabled:"",variant:"plain round",color:"zinc-1"},{default:u(()=>l[7]||(l[7]=[a("按 钮")])),_:1})]),_:1}),e(n(i),{class:"mb-4"},{default:u(()=>[e(n(d),{disabled:"",color:"violet-5"},{default:u(()=>l[8]||(l[8]=[a("按 钮")])),_:1}),e(n(d),{disabled:"",variant:"plain round",color:"violet-1"},{default:u(()=>l[9]||(l[9]=[a("按 钮")])),_:1})]),_:1})],64))}}),M=W(I,[["__scopeId","data-v-60161bf3"]]),q=`<template>
  <div>
    <VKSegmented v-model="typeValue" :options="typeOptions" />
    <VKSegmented v-model="variantValue" :options="variantOptions" />

    <VKButton :type="typeValue" :variant="variantValue">按 钮</VKButton>
  </div>
</template>
<script setup lang="ts">
import { VKButton, VKSegmented } from '@versakit/ui'
import { ref } from 'vue'

let typeValue = ref('primary')
let variantValue = ref('plain')

let typeOptions = [
  { label: 'primary', value: 'primary' },
  { label: 'success', value: 'success' },
  { label: 'error', value: 'error' },
  { label: 'warn', value: 'warn' },
  { label: 'info', value: 'info' },
]

let variantOptions = [
  { label: 'ghost', value: 'ghost' },
  { label: 'round', value: 'round' },
  { label: 'text', value: 'text' },
  { label: 'shade', value: 'shade' },
  { label: 'full', value: 'full' },
]
<\/script>
<style scoped></style>
`,E=y({__name:"style",setup(b){let r=C("primary"),l=C("plain"),o=[{label:"primary",value:"primary"},{label:"success",value:"success"},{label:"error",value:"error"},{label:"warn",value:"warn"},{label:"info",value:"info"}],s=[{label:"ghost",value:"ghost"},{label:"round",value:"round"},{label:"text",value:"text"},{label:"shade",value:"shade"},{label:"full",value:"full"}];return(w,m)=>(p(),g("div",null,[e(n(x),{modelValue:n(r),"onUpdate:modelValue":m[0]||(m[0]=K=>z(r)?r.value=K:r=K),options:n(o)},null,8,["modelValue","options"]),e(n(x),{modelValue:n(l),"onUpdate:modelValue":m[1]||(m[1]=K=>z(l)?l.value=K:l=K),options:n(s)},null,8,["modelValue","options"]),e(n(d),{type:n(r),variant:n(l)},{default:u(()=>m[2]||(m[2]=[a("按 钮")])),_:1},8,["type","variant"])]))}}),U=`<script setup lang="ts">
import { VKButton, VKRow } from '@versakit/ui'
<\/script>

<template>
  <VKRow class="mb-4">
    <VKButton type="primary">按 钮</VKButton>
    <VKButton variant="round" type="primary">按 钮</VKButton>
    <VKButton variant="ghost" type="primary">按 钮</VKButton>
    <VKButton variant="ghost round" type="primary">按 钮</VKButton>
  </VKRow>

  <VKRow class="mb-4">
    <VKButton type="error">按 钮</VKButton>
    <VKButton variant="round" type="error">按 钮</VKButton>
    <VKButton variant="ghost" type="error">按 钮</VKButton>
    <VKButton variant="ghost round" type="error">按 钮</VKButton>
  </VKRow>

  <VKRow class="mb-4">
    <VKButton type="success">按 钮</VKButton>
    <VKButton variant="round" type="success">按 钮</VKButton>

    <VKButton variant="ghost" type="success">按 钮</VKButton>
    <VKButton variant="ghost round" type="success">按 钮</VKButton>
  </VKRow>

  <VKRow class="mb-4">
    <VKButton type="info">按 钮</VKButton>
    <VKButton variant="round" type="info">按 钮</VKButton>
    <VKButton variant="ghost" type="info">按 钮</VKButton>
    <VKButton variant="ghost round" type="info">按 钮</VKButton>
  </VKRow>

  <VKRow class="mb-4">
    <VKButton type="warn">按 钮</VKButton>
    <VKButton variant="round" type="warn">按 钮</VKButton>
    <VKButton variant="ghost" type="warn">按 钮</VKButton>
    <VKButton variant="ghost round" type="warn">按 钮</VKButton>
  </VKRow>
</template>

<style scoped lang="scss">
.mb-4 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.vk-btn + .vk-btn {
  margin: 0px 6px;
}
</style>
`,P=y({__name:"base",setup(b){return(r,l)=>(p(),g(Y,null,[e(n(i),{class:"mb-4"},{default:u(()=>[e(n(d),{type:"primary"},{default:u(()=>l[0]||(l[0]=[a("按 钮")])),_:1}),e(n(d),{variant:"round",type:"primary"},{default:u(()=>l[1]||(l[1]=[a("按 钮")])),_:1}),e(n(d),{variant:"ghost",type:"primary"},{default:u(()=>l[2]||(l[2]=[a("按 钮")])),_:1}),e(n(d),{variant:"ghost round",type:"primary"},{default:u(()=>l[3]||(l[3]=[a("按 钮")])),_:1})]),_:1}),e(n(i),{class:"mb-4"},{default:u(()=>[e(n(d),{type:"error"},{default:u(()=>l[4]||(l[4]=[a("按 钮")])),_:1}),e(n(d),{variant:"round",type:"error"},{default:u(()=>l[5]||(l[5]=[a("按 钮")])),_:1}),e(n(d),{variant:"ghost",type:"error"},{default:u(()=>l[6]||(l[6]=[a("按 钮")])),_:1}),e(n(d),{variant:"ghost round",type:"error"},{default:u(()=>l[7]||(l[7]=[a("按 钮")])),_:1})]),_:1}),e(n(i),{class:"mb-4"},{default:u(()=>[e(n(d),{type:"success"},{default:u(()=>l[8]||(l[8]=[a("按 钮")])),_:1}),e(n(d),{variant:"round",type:"success"},{default:u(()=>l[9]||(l[9]=[a("按 钮")])),_:1}),e(n(d),{variant:"ghost",type:"success"},{default:u(()=>l[10]||(l[10]=[a("按 钮")])),_:1}),e(n(d),{variant:"ghost round",type:"success"},{default:u(()=>l[11]||(l[11]=[a("按 钮")])),_:1})]),_:1}),e(n(i),{class:"mb-4"},{default:u(()=>[e(n(d),{type:"info"},{default:u(()=>l[12]||(l[12]=[a("按 钮")])),_:1}),e(n(d),{variant:"round",type:"info"},{default:u(()=>l[13]||(l[13]=[a("按 钮")])),_:1}),e(n(d),{variant:"ghost",type:"info"},{default:u(()=>l[14]||(l[14]=[a("按 钮")])),_:1}),e(n(d),{variant:"ghost round",type:"info"},{default:u(()=>l[15]||(l[15]=[a("按 钮")])),_:1})]),_:1}),e(n(i),{class:"mb-4"},{default:u(()=>[e(n(d),{type:"warn"},{default:u(()=>l[16]||(l[16]=[a("按 钮")])),_:1}),e(n(d),{variant:"round",type:"warn"},{default:u(()=>l[17]||(l[17]=[a("按 钮")])),_:1}),e(n(d),{variant:"ghost",type:"warn"},{default:u(()=>l[18]||(l[18]=[a("按 钮")])),_:1}),e(n(d),{variant:"ghost round",type:"warn"},{default:u(()=>l[19]||(l[19]=[a("按 钮")])),_:1})]),_:1})],64))}}),H=W(P,[["__scopeId","data-v-bdd63f37"]]),O={tabindex:"0"},F=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button/index.md","filePath":"components/button/index.md"}'),_={name:"components/button/index.md"},h=Object.assign(_,{setup(b){const r=C(!0);return(l,o)=>{const s=k("ClientOnly"),w=k("Tool");return p(),g("div",null,[o[21]||(o[21]=D("",4)),v(e(n(f),null,null,512),[[V,r.value]]),e(s,null,{default:u(()=>[e(n(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:o[0]||(o[0]=()=>{r.value=!1}),vueCode:n(U)},{vue:u(()=>[e(H)]),_:1},8,["vueCode"])]),_:1}),o[22]||(o[22]=t("h2",{id:"按钮风格",tabindex:"-1"},[a("按钮风格 "),t("a",{class:"header-anchor",href:"#按钮风格","aria-label":'Permalink to "按钮风格"'},"​")],-1)),o[23]||(o[23]=t("p",null,[a("使用 "),t("code",null,"style"),a(" 和 "),t("code",null,"variant"),a(" 属性来改变按钮的视觉风格。")],-1)),v(e(n(f),null,null,512),[[V,r.value]]),e(s,null,{default:u(()=>[e(n(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:o[1]||(o[1]=()=>{r.value=!1}),vueCode:n(q)},{vue:u(()=>[e(E)]),_:1},8,["vueCode"])]),_:1}),o[24]||(o[24]=t("h2",{id:"禁止状态",tabindex:"-1"},[a("禁止状态 "),t("a",{class:"header-anchor",href:"#禁止状态","aria-label":'Permalink to "禁止状态"'},"​")],-1)),o[25]||(o[25]=t("p",null,[a("您可以使用 "),t("code",null,"disabled"),a(" 属性来定义按钮是否被禁用，该属性接受一个 "),t("code",null,"Boolean"),a(" 类型的值。")],-1)),v(e(n(f),null,null,512),[[V,r.value]]),e(s,null,{default:u(()=>[e(n(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:o[2]||(o[2]=()=>{r.value=!1}),vueCode:n(L)},{vue:u(()=>[e(M)]),_:1},8,["vueCode"])]),_:1}),o[26]||(o[26]=t("h2",{id:"按钮大小",tabindex:"-1"},[a("按钮大小 "),t("a",{class:"header-anchor",href:"#按钮大小","aria-label":'Permalink to "按钮大小"'},"​")],-1)),o[27]||(o[27]=t("p",null,[a("我们可以通过调整 "),t("code",null,"size"),a(" 属性来控制按钮大小。")],-1)),v(e(n(f),null,null,512),[[V,r.value]]),e(s,null,{default:u(()=>[e(n(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:o[3]||(o[3]=()=>{r.value=!1}),vueCode:n(N)},{vue:u(()=>[e(J)]),_:1},8,["vueCode"])]),_:1}),o[28]||(o[28]=t("h2",{id:"水波纹按钮",tabindex:"-1"},[a("水波纹按钮 "),t("a",{class:"header-anchor",href:"#水波纹按钮","aria-label":'Permalink to "水波纹按钮"'},"​")],-1)),o[29]||(o[29]=t("p",null,"按钮可以结合水波纹一起使用。",-1)),v(e(n(f),null,null,512),[[V,r.value]]),e(s,null,{default:u(()=>[e(n(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:o[4]||(o[4]=()=>{r.value=!1}),vueCode:n(G)},{vue:u(()=>[e(R)]),_:1},8,["vueCode"])]),_:1}),o[30]||(o[30]=t("h2",{id:"图标按钮",tabindex:"-1"},[a("图标按钮 "),t("a",{class:"header-anchor",href:"#图标按钮","aria-label":'Permalink to "图标按钮"'},"​")],-1)),o[31]||(o[31]=t("p",null,[a("使用 "),t("code",null,"icon"),a(" 属性来设置按钮的图标样式，您可以在我们的 "),t("code",null,"Icon"),a(" 组件中找到所需图标。")],-1)),v(e(n(f),null,null,512),[[V,r.value]]),e(s,null,{default:u(()=>[e(n(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:o[5]||(o[5]=()=>{r.value=!1}),vueCode:n(X)},{vue:u(()=>[e(A)]),_:1},8,["vueCode"])]),_:1}),o[32]||(o[32]=t("h2",{id:"button-api",tabindex:"-1"},[a("Button API "),t("a",{class:"header-anchor",href:"#button-api","aria-label":'Permalink to "Button API"'},"​")],-1)),o[33]||(o[33]=t("h3",{id:"button-属性",tabindex:"-1"},[a("Button 属性 "),t("a",{class:"header-anchor",href:"#button-属性","aria-label":'Permalink to "Button 属性"'},"​")],-1)),t("table",O,[o[20]||(o[20]=t("thead",null,[t("tr",null,[t("th",null,"属性"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"默认值")])],-1)),t("tbody",null,[t("tr",null,[o[7]||(o[7]=t("td",null,[t("code",null,"type")],-1)),o[8]||(o[8]=t("td",null,[a("按钮的类型，例如可以是 "),t("code",null,"primary"),a("（主要按钮）、"),t("code",null,"success"),a("（成功按钮）等不同分类来表示不同状态的样式风格")],-1)),t("td",null,[o[6]||(o[6]=t("code",null,"enum",-1)),e(w,{value:"primary,info,warning,error"})]),o[9]||(o[9]=t("td",null,"default",-1))]),o[10]||(o[10]=t("tr",null,[t("td",null,[t("code",null,"plain")]),t("td",null,"用于指示按钮是否为朴素按钮样式，朴素按钮通常是背景透明、只有文字和边框等简单样式呈现"),t("td",null,[t("code",null,"boolean")]),t("td",null,"false")],-1)),o[11]||(o[11]=t("tr",null,[t("td",null,[t("code",null,"round")]),t("td",null,"判断按钮是否呈现圆角的外观效果"),t("td",null,[t("code",null,"boolean")]),t("td",null,"false")],-1)),o[12]||(o[12]=t("tr",null,[t("td",null,[t("code",null,"disabled")]),t("td",null,"确定按钮是否处于禁用状态，禁用状态下按钮不可点击，常通过变灰等视觉样式体现"),t("td",null,[t("code",null,"boolean")]),t("td",null,"false")],-1)),o[13]||(o[13]=t("tr",null,[t("td",null,[t("code",null,"ghost")]),t("td",null,"是否为ghost"),t("td",null,[t("code",null,"boolean")]),t("td",null,"false")],-1)),o[14]||(o[14]=t("tr",null,[t("td",null,[t("code",null,"text")]),t("td",null,"是否为文本按钮"),t("td",null,[t("code",null,"boolean")]),t("td",null,"false")],-1)),o[15]||(o[15]=t("tr",null,[t("td",null,[t("code",null,"circle")]),t("td",null,"是否为圆角按钮"),t("td",null,[t("code",null,"boolean")]),t("td",null,"false")],-1)),o[16]||(o[16]=t("tr",null,[t("td",null,[t("code",null,"shade")]),t("td",null,"是否是阴影按钮"),t("td",null,[t("code",null,"boolean")]),t("td",null,"false")],-1)),o[17]||(o[17]=t("tr",null,[t("td",null,[t("code",null,"color")]),t("td",null,"自定义颜色按钮"),t("td",null,[t("code",null,"string")]),t("td",null,"-")],-1)),o[18]||(o[18]=t("tr",null,[t("td",null,[t("code",null,"icon")]),t("td",null,"自定义图标按钮"),t("td",null,[t("code",null,"string")]),t("td",null,"-")],-1)),o[19]||(o[19]=t("tr",null,[t("td",null,[t("code",null,"size")]),t("td",null,"自定义按钮大小"),t("td",null,[t("code",null,"string")]),t("td",null,"default")],-1))])])])}}});export{F as __pageData,h as default};
