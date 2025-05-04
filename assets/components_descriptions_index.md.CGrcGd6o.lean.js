import{d as I,p as k,B as V,c,o as f,F as W,j as r,G as l,w as t,a as s,k as o,b as A,a4 as D,aa as z}from"./chunks/framework.rcZoKwU1.js";import{X as p,Q as n,k as b}from"./chunks/theme.CbllQRZe.js";import{O as K,E as g}from"./chunks/index.CpKg_UEU.js";const T=`<script setup lang="ts">
import { ref } from 'vue'
import { VKDescriptions, VKDescriptionsItem, VKTag } from '@versakit/ui'

const size = ref('default')
<\/script>

<template>
  <div style="margin-bottom: 20px">
    <VKRadio label="small" v-model="size">small</VKRadio>
    <VKRadio label="default" v-model="size">default</VKRadio>
    <VKRadio label="large" v-model="size">large</VKRadio>
  </div>
  <VKDescriptions
    title="Vertical list with border"
    direction="vertical"
    :column="4"
    :size="size"
    border
  >
    <VKDescriptionsItem label="Username">kooriookami</VKDescriptionsItem>
    <VKDescriptionsItem label="Telephone">18100000000</VKDescriptionsItem>
    <VKDescriptionsItem label="Place" :colspan="2">Suzhou</VKDescriptionsItem>
    <VKDescriptionsItem label="Remarks">
      <VKTag size="small">School</VKTag>
    </VKDescriptionsItem>
    <VKDescriptionsItem label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </VKDescriptionsItem>
  </VKDescriptions>
  <div style="margin-bottom: 20px"></div>
  <VKDescriptions
    title="Vertical list without border"
    :column="4"
    :size="size"
    direction="vertical"
  >
    <VKDescriptionsItem label="Username">kooriookami</VKDescriptionsItem>
    <VKDescriptionsItem label="Telephone">18100000000</VKDescriptionsItem>
    <VKDescriptionsItem label="Place" :colspan="2">Suzhou</VKDescriptionsItem>
    <VKDescriptionsItem label="Remarks">
      <VKTag size="small">School</VKTag>
    </VKDescriptionsItem>
    <VKDescriptionsItem label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </VKDescriptionsItem>
  </VKDescriptions>
</template>
`,x={style:{"margin-bottom":"20px"}},S=I({__name:"direction",setup(v){const i=k("default");return(a,e)=>{const u=V("VKRadio");return f(),c(W,null,[r("div",x,[l(u,{label:"small",modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=d=>i.value=d)},{default:t(()=>e[3]||(e[3]=[s("small")])),_:1},8,["modelValue"]),l(u,{label:"default",modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=d=>i.value=d)},{default:t(()=>e[4]||(e[4]=[s("default")])),_:1},8,["modelValue"]),l(u,{label:"large",modelValue:i.value,"onUpdate:modelValue":e[2]||(e[2]=d=>i.value=d)},{default:t(()=>e[5]||(e[5]=[s("large")])),_:1},8,["modelValue"])]),l(o(p),{title:"Vertical list with border",direction:"vertical",column:4,size:i.value,border:""},{default:t(()=>[l(o(n),{label:"Username"},{default:t(()=>e[6]||(e[6]=[s("kooriookami")])),_:1}),l(o(n),{label:"Telephone"},{default:t(()=>e[7]||(e[7]=[s("18100000000")])),_:1}),l(o(n),{label:"Place",colspan:2},{default:t(()=>e[8]||(e[8]=[s("Suzhou")])),_:1}),l(o(n),{label:"Remarks"},{default:t(()=>[l(o(b),{size:"small"},{default:t(()=>e[9]||(e[9]=[s("School")])),_:1})]),_:1}),l(o(n),{label:"Address"},{default:t(()=>e[10]||(e[10]=[s(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ")])),_:1})]),_:1},8,["size"]),e[16]||(e[16]=r("div",{style:{"margin-bottom":"20px"}},null,-1)),l(o(p),{title:"Vertical list without border",column:4,size:i.value,direction:"vertical"},{default:t(()=>[l(o(n),{label:"Username"},{default:t(()=>e[11]||(e[11]=[s("kooriookami")])),_:1}),l(o(n),{label:"Telephone"},{default:t(()=>e[12]||(e[12]=[s("18100000000")])),_:1}),l(o(n),{label:"Place",colspan:2},{default:t(()=>e[13]||(e[13]=[s("Suzhou")])),_:1}),l(o(n),{label:"Remarks"},{default:t(()=>[l(o(b),{size:"small"},{default:t(()=>e[14]||(e[14]=[s("School")])),_:1})]),_:1}),l(o(n),{label:"Address"},{default:t(()=>e[15]||(e[15]=[s(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ")])),_:1})]),_:1},8,["size"])],64)}}}),h=`<script setup lang="ts">
import { ref } from 'vue'
import { VKDescriptions, VKDescriptionsItem, VKTag } from '@versakit/ui'

const size = ref('default')
<\/script>

<template>
  <div style="margin-bottom: 20px">
    <VKRadio label="small" v-model="size">small</VKRadio>
    <VKRadio label="default" v-model="size">default</VKRadio>
    <VKRadio label="large" v-model="size">large</VKRadio>
  </div>
  <VKDescriptions title="User Info" extra="extra" :size="size" border>
    <VKDescriptionsItem label="Username">kooriookami</VKDescriptionsItem>
    <VKDescriptionsItem label="Telephone">18100000000</VKDescriptionsItem>
    <VKDescriptionsItem label="Place">Suzhou</VKDescriptionsItem>
    <VKDescriptionsItem label="Remarks">
      <VerTag size="small">School</VerTag>
    </VKDescriptionsItem>
    <VKDescriptionsItem label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </VKDescriptionsItem>
  </VKDescriptions>
  <div style="margin-bottom: 20px"></div>
  <VKDescriptions title="User Info" extra="extra" :size="size">
    <VKDescriptionsItem label="Username">kooriookami</VKDescriptionsItem>
    <VKDescriptionsItem label="Telephone">18100000000</VKDescriptionsItem>
    <VKDescriptionsItem label="Place">Suzhou</VKDescriptionsItem>
    <VKDescriptionsItem label="Remarks">
      <VKTag size="small">School</VKTag>
    </VKDescriptionsItem>
    <VKDescriptionsItem label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </VKDescriptionsItem>
  </VKDescriptions>
</template>
`,B={style:{"margin-bottom":"20px"}},R=I({__name:"size",setup(v){const i=k("default");return(a,e)=>{const u=V("VKRadio"),d=V("VerTag");return f(),c(W,null,[r("div",B,[l(u,{label:"small",modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=m=>i.value=m)},{default:t(()=>e[3]||(e[3]=[s("small")])),_:1},8,["modelValue"]),l(u,{label:"default",modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=m=>i.value=m)},{default:t(()=>e[4]||(e[4]=[s("default")])),_:1},8,["modelValue"]),l(u,{label:"large",modelValue:i.value,"onUpdate:modelValue":e[2]||(e[2]=m=>i.value=m)},{default:t(()=>e[5]||(e[5]=[s("large")])),_:1},8,["modelValue"])]),l(o(p),{title:"User Info",extra:"extra",size:i.value,border:""},{default:t(()=>[l(o(n),{label:"Username"},{default:t(()=>e[6]||(e[6]=[s("kooriookami")])),_:1}),l(o(n),{label:"Telephone"},{default:t(()=>e[7]||(e[7]=[s("18100000000")])),_:1}),l(o(n),{label:"Place"},{default:t(()=>e[8]||(e[8]=[s("Suzhou")])),_:1}),l(o(n),{label:"Remarks"},{default:t(()=>[l(d,{size:"small"},{default:t(()=>e[9]||(e[9]=[s("School")])),_:1})]),_:1}),l(o(n),{label:"Address"},{default:t(()=>e[10]||(e[10]=[s(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ")])),_:1})]),_:1},8,["size"]),e[16]||(e[16]=r("div",{style:{"margin-bottom":"20px"}},null,-1)),l(o(p),{title:"User Info",extra:"extra",size:i.value},{default:t(()=>[l(o(n),{label:"Username"},{default:t(()=>e[11]||(e[11]=[s("kooriookami")])),_:1}),l(o(n),{label:"Telephone"},{default:t(()=>e[12]||(e[12]=[s("18100000000")])),_:1}),l(o(n),{label:"Place"},{default:t(()=>e[13]||(e[13]=[s("Suzhou")])),_:1}),l(o(n),{label:"Remarks"},{default:t(()=>[l(o(b),{size:"small"},{default:t(()=>e[14]||(e[14]=[s("School")])),_:1})]),_:1}),l(o(n),{label:"Address"},{default:t(()=>e[15]||(e[15]=[s(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ")])),_:1})]),_:1},8,["size"])],64)}}}),C=`<script setup lang="ts">
import { VKDescriptions, VKDescriptionsItem, VKTag } from '@versakit/ui'
<\/script>

<template>
  <VKDescriptions title="User Info" extra="extra">
    <VKDescriptionsItem label="Username">kooriookami</VKDescriptionsItem>
    <VKDescriptionsItem label="Telephone">18100000000</VKDescriptionsItem>
    <VKDescriptionsItem label="Place">Suzhou</VKDescriptionsItem>
    <VKDescriptionsItem label="Remarks">
      <VKTag size="small">School</VKTag>
    </VKDescriptionsItem>
    <VKDescriptionsItem label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </VKDescriptionsItem>
  </VKDescriptions>
</template>
`,P=I({__name:"base",setup(v){return(i,a)=>(f(),A(o(p),{title:"User Info",extra:"extra"},{default:t(()=>[l(o(n),{label:"Username"},{default:t(()=>a[0]||(a[0]=[s("kooriookami")])),_:1}),l(o(n),{label:"Telephone"},{default:t(()=>a[1]||(a[1]=[s("18100000000")])),_:1}),l(o(n),{label:"Place"},{default:t(()=>a[2]||(a[2]=[s("Suzhou")])),_:1}),l(o(n),{label:"Remarks"},{default:t(()=>[l(o(b),{size:"small"},{default:t(()=>a[3]||(a[3]=[s("School")])),_:1})]),_:1}),l(o(n),{label:"Address"},{default:t(()=>a[4]||(a[4]=[s(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ")])),_:1})]),_:1}))}}),J=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/descriptions/index.md","filePath":"components/descriptions/index.md"}'),U={name:"components/descriptions/index.md"},Z=Object.assign(U,{setup(v){const i=k(!0);return(a,e)=>{const u=V("ClientOnly");return f(),c("div",null,[e[3]||(e[3]=r("h2",{id:"descriptions-描述列表",tabindex:"-1"},[s("Descriptions 描述列表 "),r("a",{class:"header-anchor",href:"#descriptions-描述列表","aria-label":'Permalink to "Descriptions 描述列表"'},"​")],-1)),e[4]||(e[4]=r("p",null,"列表形式展示多个字段。",-1)),e[5]||(e[5]=r("h3",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),r("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),D(l(o(K),null,null,512),[[z,i.value]]),l(u,null,{default:t(()=>[l(o(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{i.value=!1}),vueCode:o(C)},{vue:t(()=>[l(P)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=r("h3",{id:"不同尺寸",tabindex:"-1"},[s("不同尺寸 "),r("a",{class:"header-anchor",href:"#不同尺寸","aria-label":'Permalink to "不同尺寸"'},"​")],-1)),D(l(o(K),null,null,512),[[z,i.value]]),l(u,null,{default:t(()=>[l(o(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{i.value=!1}),vueCode:o(h)},{vue:t(()=>[l(R)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=r("h3",{id:"垂直列表",tabindex:"-1"},[s("垂直列表 "),r("a",{class:"header-anchor",href:"#垂直列表","aria-label":'Permalink to "垂直列表"'},"​")],-1)),D(l(o(K),null,null,512),[[z,i.value]]),l(u,null,{default:t(()=>[l(o(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{i.value=!1}),vueCode:o(T)},{vue:t(()=>[l(S)]),_:1},8,["vueCode"])]),_:1})])}}});export{J as __pageData,Z as default};
