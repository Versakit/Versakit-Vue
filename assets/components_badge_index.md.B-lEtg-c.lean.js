const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.BMLJ1wem.js","assets/chunks/theme.BWeibRO3.js","assets/chunks/framework.C6EVvWrU.js"])))=>i.map(i=>d[i]);
import{v as c,ao as v,C as o,o as u,c as h,j as t,a as p,E as e,a6 as b,a1 as y,a4 as m,k as n,w as r,ap as B,G as k,p as f}from"./chunks/framework.C6EVvWrU.js";import{O as _,E as w}from"./chunks/index.DS4uDY_R.js";const x=`<script setup lang="ts">
import { Badge } from '@versakit/vue'
import '@versakit/vue/style'
<\/script>

<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="flex gap-6">
        <Badge content="5">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="99+">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge dot>
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>
      </div>
    </section>

    <!-- 不同颜色 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同颜色</h2>
      <div class="flex gap-6">
        <Badge content="5" color="primary">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="5" color="secondary">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="5" color="success">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="5" color="warning">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="5" color="danger">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="5" color="info">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>
      </div>
    </section>

    <!-- 不同大小 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同大小</h2>
      <div class="flex gap-6 items-center">
        <Badge content="5" size="sm">
          <div class="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="5" size="md">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="5" size="lg">
          <div class="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>
      </div>
    </section>

    <!-- 不同位置 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同位置</h2>
      <div class="flex gap-6">
        <Badge content="5" position="top-right">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="5" position="top-left">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="5" position="bottom-right">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="5" position="bottom-left">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>
      </div>
    </section>

    <!-- 最大值 -->
    <section>
      <h2 class="text-lg font-medium mb-4">最大值</h2>
      <div class="flex gap-6">
        <Badge :content="100" :max="99">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge :content="1000" :max="999">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>
      </div>
    </section>

    <!-- 自定义内容 -->
    <section>
      <h2 class="text-lg font-medium mb-4">自定义内容</h2>
      <div class="flex gap-6">
        <Badge content="新">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="热">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>
      </div>
    </section>
  </div>
</template>
`,A=JSON.parse('{"title":"Badge","description":"","frontmatter":{},"headers":[],"relativePath":"components/badge/index.md","filePath":"components/badge/index.md"}'),V={name:"components/badge/index.md"},D=Object.assign(V,{setup(W){const s=f(!0),d=k();return c(async()=>{d.value=(await v(async()=>{const{default:i}=await import("./chunks/index.BMLJ1wem.js");return{default:i}},__vite__mapDeps([0,1,2]))).default}),(i,a)=>{const g=o("Link"),l=o("ClientOnly");return u(),h("div",null,[a[1]||(a[1]=t("h1",{id:"badge",tabindex:"-1"},[p("Badge "),t("a",{class:"header-anchor",href:"#badge","aria-label":'Permalink to "Badge"'},"​")],-1)),a[2]||(a[2]=t("p",null,"Badge 是一种用于显示状态标记或通知计数的小型视觉指示器，通常以圆形或椭圆形徽章形式出现在图标、文本或组件的右上角。它通过颜色、数字或图标传达额外信息，帮助用户快速识别重要状态变化。",-1)),e(g,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-badge-%E5%BE%BD%E7%AB%A0--basic"}),a[3]||(a[3]=b("",3)),y(e(n(_),null,null,512),[[m,s.value]]),e(l,null,{default:r(()=>[e(n(w),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:a[0]||(a[0]=()=>{s.value=!1}),vueCode:n(x)},B({_:2},[d.value?{name:"vue",fn:r(()=>[e(n(d))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{A as __pageData,D as default};
