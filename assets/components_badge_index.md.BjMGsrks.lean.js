const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.B4RWhCMg.js","assets/chunks/theme.DiT8x9tc.js","assets/chunks/framework.BLoOr4aB.js"])))=>i.map(i=>d[i]);
import{p as c,D as v,v as u,am as h,C as r,c as b,o as p,j as t,G as n,al as y,a0 as m,a as B,a3 as k,k as e,w as o,an as f}from"./chunks/framework.BLoOr4aB.js";import{O as _,E as w}from"./chunks/index.ClrLodpm.js";const x=`<script setup lang="ts">
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
`,D=JSON.parse('{"title":"Badge","description":"","frontmatter":{},"headers":[],"relativePath":"components/badge/index.md","filePath":"components/badge/index.md"}'),V={name:"components/badge/index.md"},A=Object.assign(V,{setup(W){const s=c(!0),d=v();return u(async()=>{d.value=(await h(async()=>{const{default:i}=await import("./chunks/index.B4RWhCMg.js");return{default:i}},__vite__mapDeps([0,1,2]))).default}),(i,a)=>{const g=r("Link"),l=r("ClientOnly");return p(),b("div",null,[a[1]||(a[1]=t("h1",{id:"badge",tabindex:"-1"},[B("Badge "),t("a",{class:"header-anchor",href:"#badge","aria-label":'Permalink to "Badge"'},"​")],-1)),a[2]||(a[2]=t("p",null,"Badge 是一种用于显示状态标记或通知计数的小型视觉指示器，通常以圆形或椭圆形徽章形式出现在图标、文本或组件的右上角。它通过颜色、数字或图标传达额外信息，帮助用户快速识别重要状态变化。",-1)),n(g,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-badge-%E5%BE%BD%E7%AB%A0--basic"}),a[3]||(a[3]=y("",3)),m(n(e(_),null,null,512),[[k,s.value]]),n(l,null,{default:o(()=>[n(e(w),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:a[0]||(a[0]=()=>{s.value=!1}),vueCode:e(x)},f({_:2},[d.value?{name:"vue",fn:o(()=>[n(e(d))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{D as __pageData,A as default};
