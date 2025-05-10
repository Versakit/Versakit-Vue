import{d as V,b as y,o as c,w as n,G as l,k as t,j as s,_ as f,B as g,c as C,F as K,C as w,p as _,aw as W,a4 as p,aa as x,a as u}from"./chunks/framework.rcZoKwU1.js";import{C as d,K as b}from"./chunks/theme.BK5t6puo.js";import{O as m,E as v}from"./chunks/index.CpKg_UEU.js";const k=`<template>
  <VKRow :gutter="4">
    <VKCol :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="col-box"></div>
    </VKCol>
    <VKCol :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="col-box col-box-1"></div>
    </VKCol>
    <VKCol :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="col-box"></div>
    </VKCol>
    <VKCol :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="col-box col-box-1"></div>
    </VKCol>
  </VKRow>
</template>

<script setup lang="ts">
import { VKRow, VKCol } from '@versakit/ui'
<\/script>

<style scoped>
.col-box {
  border-radius: 4px;
  min-height: 36px;
  background-color: #d3dce6;
}

.col-box-1 {
  background-color: #e5e9f2;
}
</style>
`,B=V({__name:"reactive",setup(i){return(a,o)=>(c(),y(t(b),{gutter:4},{default:n(()=>[l(t(d),{xs:8,sm:6,md:4,lg:3,xl:1},{default:n(()=>o[0]||(o[0]=[s("div",{class:"col-box"},null,-1)])),_:1}),l(t(d),{xs:4,sm:6,md:8,lg:9,xl:11},{default:n(()=>o[1]||(o[1]=[s("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(t(d),{xs:4,sm:6,md:8,lg:9,xl:11},{default:n(()=>o[2]||(o[2]=[s("div",{class:"col-box"},null,-1)])),_:1}),l(t(d),{xs:8,sm:6,md:4,lg:3,xl:1},{default:n(()=>o[3]||(o[3]=[s("div",{class:"col-box col-box-1"},null,-1)])),_:1})]),_:1}))}}),Z=f(B,[["__scopeId","data-v-8da009df"]]),X=`<template>
  <VKRow class="mb-4">
    <VKCol :span="10"><div class="col-box col-box-1"></div></VKCol>
    <VKCol :span="14">
      <div class="col-box col-box-2"></div>
    </VKCol>
  </VKRow>
  <VKRow class="mb-4">
    <VKCol :span="6"><div class="col-box col-box-1"></div></VKCol>
    <VKCol :span="8"><div class="col-box col-box-2"></div></VKCol>
    <VerCol :span="10"><div class="col-box col-box-1"></div></VerCol>
  </VKRow>
  <VKRow class="mb-4">
    <VKCol :span="4"><div class="col-box col-box-1"></div></VKCol>
    <VKCol :span="16"><div class="col-box col-box-2"></div></VKCol>
    <VKCol :span="4"><div class="col-box col-box-1"></div></VKCol>
  </VKRow>
</template>

<script setup lang="ts">
import { VKRow, VKCol } from '@versakit/ui'
<\/script>

<style scoped>
.col-box {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  min-height: 36px;
  background-color: #99a9bf;
}

.col-box-1 {
  background-color: #d3dce6;
}

.col-box-2 {
  background-color: #e5e9f2;
}

.mb-4 {
  margin-bottom: 1rem;
}
</style>
`,D=V({__name:"mix",setup(i){return(a,o)=>{const e=g("VerCol");return c(),C(K,null,[l(t(b),{class:"mb-4"},{default:n(()=>[l(t(d),{span:10},{default:n(()=>o[0]||(o[0]=[s("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(t(d),{span:14},{default:n(()=>o[1]||(o[1]=[s("div",{class:"col-box col-box-2"},null,-1)])),_:1})]),_:1}),l(t(b),{class:"mb-4"},{default:n(()=>[l(t(d),{span:6},{default:n(()=>o[2]||(o[2]=[s("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(t(d),{span:8},{default:n(()=>o[3]||(o[3]=[s("div",{class:"col-box col-box-2"},null,-1)])),_:1}),l(e,{span:10},{default:n(()=>o[4]||(o[4]=[s("div",{class:"col-box col-box-1"},null,-1)])),_:1})]),_:1}),l(t(b),{class:"mb-4"},{default:n(()=>[l(t(d),{span:4},{default:n(()=>o[5]||(o[5]=[s("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(t(d),{span:16},{default:n(()=>o[6]||(o[6]=[s("div",{class:"col-box col-box-2"},null,-1)])),_:1}),l(t(d),{span:4},{default:n(()=>o[7]||(o[7]=[s("div",{class:"col-box col-box-1"},null,-1)])),_:1})]),_:1})],64)}}}),A=f(D,[["__scopeId","data-v-57e508c4"]]),T=`<template>
  <VKRow :gutter="20">
    <VKCol :span="6" v-for="n in 4" :key="n">
      <div class="col-box"></div>
    </VKCol>
  </VKRow>
</template>

<script setup lang="ts">
import { VKRow, VKCol } from '@versakit/ui'
<\/script>

<style scoped>
.col-box {
  border-radius: 4px;
  min-height: 36px;
  background-color: #99a9bf;
}
</style>
`,z=V({__name:"gutter",setup(i){return(a,o)=>(c(),y(t(b),{gutter:20},{default:n(()=>[(c(),C(K,null,w(4,e=>l(t(d),{span:6,key:e},{default:n(()=>o[0]||(o[0]=[s("div",{class:"col-box"},null,-1)])),_:2},1024)),64))]),_:1}))}}),Y=f(z,[["__scopeId","data-v-541010e6"]]),G=`<template>
  <VKRow class="mb-4">
    <VKCol :span="10"><div class="col-box col-box-1">10</div></VKCol>
    <VKCol :span="12" :offset="2">
      <div class="col-box col-box-2">12</div>
    </VKCol>
  </VKRow>
  <VKRow class="mb-4">
    <VKCol :span="8"><div class="col-box col-box-1">8</div></VKCol>
    <VKCol :span="8" :offset="8">
      <div class="col-box col-box-2">8</div>
    </VKCol>
  </VKRow>
</template>

<script setup lang="ts">
import { VKRow, VKCol } from '@versakit/ui'
<\/script>

<style scoped>
.col-box {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  min-height: 36px;
  background-color: #99a9bf;
}

.col-box-1 {
  background-color: #d3dce6;
}

.col-box-2 {
  background-color: #e5e9f2;
}

.mb-4 {
  margin-bottom: 1rem;
}
</style>
`,R=V({__name:"offset",setup(i){return(a,o)=>(c(),C(K,null,[l(t(b),{class:"mb-4"},{default:n(()=>[l(t(d),{span:10},{default:n(()=>o[0]||(o[0]=[s("div",{class:"col-box col-box-1"},"10",-1)])),_:1}),l(t(d),{span:12,offset:2},{default:n(()=>o[1]||(o[1]=[s("div",{class:"col-box col-box-2"},"12",-1)])),_:1})]),_:1}),l(t(b),{class:"mb-4"},{default:n(()=>[l(t(d),{span:8},{default:n(()=>o[2]||(o[2]=[s("div",{class:"col-box col-box-1"},"8",-1)])),_:1}),l(t(d),{span:8,offset:8},{default:n(()=>o[3]||(o[3]=[s("div",{class:"col-box col-box-2"},"8",-1)])),_:1})]),_:1})],64))}}),L=f(R,[["__scopeId","data-v-bbc76d94"]]),N=`<template>
  <VKRow class="mb-4">
    <VKCol :span="24">
      <div class="col-box"></div>
    </VKCol>
  </VKRow>
  <VKRow class="mb-4">
    <VKCol :span="12">
      <div class="col-box col-box-1"></div>
    </VKCol>
    <VKCol :span="12">
      <div class="col-box col-box-2"></div>
    </VKCol>
  </VKRow>
  <VKRow class="mb-4">
    <VKCol :span="8">
      <div class="col-box col-box-1"></div>
    </VKCol>
    <VKCol :span="8">
      <div class="col-box col-box-2"></div>
    </VKCol>
    <VKCol :span="8">
      <div class="col-box col-box-1"></div>
    </VKCol>
  </VKRow>
  <VKRow class="mb-4">
    <VKCol :span="6">
      <div class="col-box col-box-1"></div>
    </VKCol>
    <VKCol :span="6">
      <div class="col-box col-box-2"></div>
    </VKCol>
    <VKCol :span="6">
      <div class="col-box col-box-1"></div>
    </VKCol>
    <VKCol :span="6">
      <div class="col-box col-box-2"></div>
    </VKCol>
  </VKRow>
  <VKRow class="mb-4">
    <VKCol :span="4">
      <div class="col-box col-box-1"></div>
    </VKCol>
    <VKCol :span="4">
      <div class="col-box col-box-2"></div>
    </VKCol>
    <VKCol :span="4">
      <div class="col-box col-box-1"></div>
    </VKCol>
    <VKCol :span="4">
      <div class="col-box col-box-2"></div>
    </VKCol>
    <VKCol :span="4">
      <div class="col-box col-box-1"></div>
    </VKCol>
    <VKCol :span="4">
      <div class="col-box col-box-2"></div>
    </VKCol>
  </VKRow>
</template>

<script setup lang="ts">
import { VKRow, VKCol } from '@versakit/ui'
<\/script>

<style scoped>
.col-box {
  border-radius: 4px;
  min-height: 36px;
  background-color: #99a9bf;
}

.col-box-1 {
  background-color: #d3dce6;
}

.col-box-2 {
  background-color: #e5e9f2;
}

.mb-4 {
  margin-bottom: 1rem;
}
</style>
`,h=V({__name:"base",setup(i){return(a,o)=>(c(),C(K,null,[l(t(b),{class:"mb-4"},{default:n(()=>[l(t(d),{span:24},{default:n(()=>o[0]||(o[0]=[s("div",{class:"col-box"},null,-1)])),_:1})]),_:1}),l(t(b),{class:"mb-4"},{default:n(()=>[l(t(d),{span:12},{default:n(()=>o[1]||(o[1]=[s("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(t(d),{span:12},{default:n(()=>o[2]||(o[2]=[s("div",{class:"col-box col-box-2"},null,-1)])),_:1})]),_:1}),l(t(b),{class:"mb-4"},{default:n(()=>[l(t(d),{span:8},{default:n(()=>o[3]||(o[3]=[s("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(t(d),{span:8},{default:n(()=>o[4]||(o[4]=[s("div",{class:"col-box col-box-2"},null,-1)])),_:1}),l(t(d),{span:8},{default:n(()=>o[5]||(o[5]=[s("div",{class:"col-box col-box-1"},null,-1)])),_:1})]),_:1}),l(t(b),{class:"mb-4"},{default:n(()=>[l(t(d),{span:6},{default:n(()=>o[6]||(o[6]=[s("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(t(d),{span:6},{default:n(()=>o[7]||(o[7]=[s("div",{class:"col-box col-box-2"},null,-1)])),_:1}),l(t(d),{span:6},{default:n(()=>o[8]||(o[8]=[s("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(t(d),{span:6},{default:n(()=>o[9]||(o[9]=[s("div",{class:"col-box col-box-2"},null,-1)])),_:1})]),_:1}),l(t(b),{class:"mb-4"},{default:n(()=>[l(t(d),{span:4},{default:n(()=>o[10]||(o[10]=[s("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(t(d),{span:4},{default:n(()=>o[11]||(o[11]=[s("div",{class:"col-box col-box-2"},null,-1)])),_:1}),l(t(d),{span:4},{default:n(()=>o[12]||(o[12]=[s("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(t(d),{span:4},{default:n(()=>o[13]||(o[13]=[s("div",{class:"col-box col-box-2"},null,-1)])),_:1}),l(t(d),{span:4},{default:n(()=>o[14]||(o[14]=[s("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(t(d),{span:4},{default:n(()=>o[15]||(o[15]=[s("div",{class:"col-box col-box-2"},null,-1)])),_:1})]),_:1})],64))}}),I=f(h,[["__scopeId","data-v-d58e0b13"]]),q=JSON.parse('{"title":"Layout 布局","description":"","frontmatter":{},"headers":[],"relativePath":"components/layout/index.md","filePath":"components/layout/index.md"}'),J={name:"components/layout/index.md"},F=Object.assign(J,{setup(i){const a=_(!0);return(o,e)=>{const r=g("ClientOnly");return c(),C("div",null,[e[5]||(e[5]=W("",5)),p(l(t(m),null,null,512),[[x,a.value]]),l(r,null,{default:n(()=>[l(t(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{a.value=!1}),vueCode:t(N)},{vue:n(()=>[l(I)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=s("h2",{id:"列偏移",tabindex:"-1"},[u("列偏移 "),s("a",{class:"header-anchor",href:"#列偏移","aria-label":'Permalink to "列偏移"'},"​")],-1)),e[7]||(e[7]=s("p",null,[u("通过 "),s("code",null,"offset"),u(" 属性指定分栏偏移的栏数")],-1)),p(l(t(m),null,null,512),[[x,a.value]]),l(r,null,{default:n(()=>[l(t(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{a.value=!1}),vueCode:t(G)},{vue:n(()=>[l(L)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=s("h2",{id:"分栏间隔",tabindex:"-1"},[u("分栏间隔 "),s("a",{class:"header-anchor",href:"#分栏间隔","aria-label":'Permalink to "分栏间隔"'},"​")],-1)),e[9]||(e[9]=s("p",null,[u("行提供 "),s("code",null,"gutter"),u(" 属性来指定列之间的间距，其默认值为0。")],-1)),p(l(t(m),null,null,512),[[x,a.value]]),l(r,null,{default:n(()=>[l(t(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{a.value=!1}),vueCode:t(T)},{vue:n(()=>[l(Y)]),_:1},8,["vueCode"])]),_:1}),e[10]||(e[10]=s("h2",{id:"混合布局",tabindex:"-1"},[u("混合布局 "),s("a",{class:"header-anchor",href:"#混合布局","aria-label":'Permalink to "混合布局"'},"​")],-1)),e[11]||(e[11]=s("p",null,"通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。",-1)),p(l(t(m),null,null,512),[[x,a.value]]),l(r,null,{default:n(()=>[l(t(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{a.value=!1}),vueCode:t(X)},{vue:n(()=>[l(A)]),_:1},8,["vueCode"])]),_:1}),e[12]||(e[12]=s("h2",{id:"响应式布局",tabindex:"-1"},[u("响应式布局 "),s("a",{class:"header-anchor",href:"#响应式布局","aria-label":'Permalink to "响应式布局"'},"​")],-1)),e[13]||(e[13]=s("p",null,"参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。",-1)),p(l(t(m),null,null,512),[[x,a.value]]),l(r,null,{default:n(()=>[l(t(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[4]||(e[4]=()=>{a.value=!1}),vueCode:t(k)},{vue:n(()=>[l(Z)]),_:1},8,["vueCode"])]),_:1}),e[14]||(e[14]=W("",3))])}}});export{q as __pageData,F as default};
