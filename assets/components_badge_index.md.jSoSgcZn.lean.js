const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.DjTWzxmU.js","assets/chunks/theme.DXf4p6wh.js","assets/chunks/framework.dgRUQZ7Z.js"])))=>i.map(i=>d[i]);
import{p as o,D as g,v as l,aj as c,B as v,c as h,o as u,ai as p,a1 as b,G as n,a3 as y,k as e,w as i,ak as m}from"./chunks/framework.dgRUQZ7Z.js";import{O as B,E as k}from"./chunks/index.CtCYMtlW.js";const f=`<script setup lang="ts">
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
`,C=JSON.parse('{"title":"Badge","description":"","frontmatter":{},"headers":[],"relativePath":"components/badge/index.md","filePath":"components/badge/index.md"}'),_={name:"components/badge/index.md"},V=Object.assign(_,{setup(w){const t=o(!0),d=g();return l(async()=>{d.value=(await c(async()=>{const{default:s}=await import("./chunks/index.DjTWzxmU.js");return{default:s}},__vite__mapDeps([0,1,2]))).default}),(s,a)=>{const r=v("ClientOnly");return u(),h("div",null,[a[1]||(a[1]=p("",5)),b(n(e(B),null,null,512),[[y,t.value]]),n(r,null,{default:i(()=>[n(e(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:a[0]||(a[0]=()=>{t.value=!1}),vueCode:e(f)},m({_:2},[d.value?{name:"vue",fn:i(()=>[n(e(d))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{C as __pageData,V as default};
