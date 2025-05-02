import{d as g,p as h,c as p,o as u,G as a,k as l,w as i,j as t,B as y,a5 as m,aw as V,a as d,ad as f}from"./chunks/framework.Dr5ddTBW.js";import{B as b,L as o}from"./chunks/theme.Bir5V9wV.js";import{d as C,f as v}from"./chunks/index.Cy4GuBY3.js";const B=`<script setup lang="ts">
import { VKCollapse, VKCollapseItem } from '@versakit/ui'

import { ref } from 'vue'

const activeNames = ref(['1'])
<\/script>

<template>
  <div>
    <VKCollapse v-model="activeNames" accordion>
      <VKCollapseItem title="Consistency" name="1" icon="ep:caret-right">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VKCollapseItem>
      <VKCollapseItem title="Consistency" name="2" icon="ep:caret-right">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VKCollapseItem>
      <VKCollapseItem title="Consistency" name="3" icon="ep:caret-right">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VKCollapseItem>
    </VKCollapse>
  </div>
</template>
`,I=g({__name:"accordion",setup(c){const s=h(["1"]);return(r,e)=>(u(),p("div",null,[a(l(b),{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=n=>s.value=n),accordion:""},{default:i(()=>[a(l(o),{title:"Consistency",name:"1",icon:"ep:caret-right"},{default:i(()=>e[1]||(e[1]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1}),a(l(o),{title:"Consistency",name:"2",icon:"ep:caret-right"},{default:i(()=>e[2]||(e[2]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1}),a(l(o),{title:"Consistency",name:"3",icon:"ep:caret-right"},{default:i(()=>e[3]||(e[3]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1})]),_:1},8,["modelValue"])]))}}),_=`<script setup lang="ts">
import { VKCollapse, VKCollapseItem } from '@versakit/ui'

import { ref } from 'vue'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
<\/script>

<template>
  <div>
    <VKCollapse v-model="activeNames" @change="handleChange">
      <VKCollapseItem title="Consistency 1" name="1" icon="ep:caret-right">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VKCollapseItem>
      <VKCollapseItem title="Consistency 2" name="2" icon="ep:caret-right">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VKCollapseItem>
      <VKCollapseItem title="Consistency 3" name="3" icon="ep:caret-right">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VKCollapseItem>
    </VKCollapse>
  </div>
</template>
`,K=g({__name:"base",setup(c){const s=h(["1"]),r=e=>{console.log(e)};return(e,n)=>(u(),p("div",null,[a(l(b),{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=w=>s.value=w),onChange:r},{default:i(()=>[a(l(o),{title:"Consistency 1",name:"1",icon:"ep:caret-right"},{default:i(()=>n[1]||(n[1]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1}),a(l(o),{title:"Consistency 2",name:"2",icon:"ep:caret-right"},{default:i(()=>n[2]||(n[2]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1}),a(l(o),{title:"Consistency 3",name:"3",icon:"ep:caret-right"},{default:i(()=>n[3]||(n[3]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1})]),_:1},8,["modelValue"])]))}}),D=JSON.parse('{"title":"Collapse 折叠面板","description":"","frontmatter":{},"headers":[],"relativePath":"components/collapse/index.md","filePath":"components/collapse/index.md"}'),N={name:"components/collapse/index.md"},T=Object.assign(N,{setup(c){const s=h(!0);return(r,e)=>{const n=y("ClientOnly");return u(),p("div",null,[e[2]||(e[2]=t("h1",{id:"collapse-折叠面板",tabindex:"-1"},[d("Collapse 折叠面板 "),t("a",{class:"header-anchor",href:"#collapse-折叠面板","aria-label":'Permalink to "Collapse 折叠面板"'},"​")],-1)),e[3]||(e[3]=t("p",null,"通过折叠面板收纳内容区域。",-1)),e[4]||(e[4]=t("h2",{id:"基本使用",tabindex:"-1"},[d("基本使用 "),t("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),e[5]||(e[5]=t("p",null,"可同时展开多个面板，面板之间不影响。",-1)),m(a(l(C),null,null,512),[[f,s.value]]),a(n,null,{default:i(()=>[a(l(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{s.value=!1}),vueCode:l(_)},{vue:i(()=>[a(K)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=t("h2",{id:"手风琴效果",tabindex:"-1"},[d("手风琴效果 "),t("a",{class:"header-anchor",href:"#手风琴效果","aria-label":'Permalink to "手风琴效果"'},"​")],-1)),e[7]||(e[7]=t("p",null,"每次只能展开一个面板",-1)),e[8]||(e[8]=t("p",null,[d("通过 "),t("code",null,"accordion"),d(" 属性来设置是否以手风琴模式显示。")],-1)),m(a(l(C),null,null,512),[[f,s.value]]),a(n,null,{default:i(()=>[a(l(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{s.value=!1}),vueCode:l(B)},{vue:i(()=>[a(I)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=V("",3))])}}});export{D as __pageData,T as default};
