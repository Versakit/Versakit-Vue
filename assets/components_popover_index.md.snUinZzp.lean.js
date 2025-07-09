const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.Bf44TuRY.js","assets/chunks/theme.ZgN51Vax.js","assets/chunks/framework.EjIRsQ6G.js"])))=>i.map(i=>d[i]);
import{p as c,D as v,v as u,aq as m,C as r,c as h,o as g,j as o,G as n,ap as b,a1 as f,a as x,a4 as y,k as t,w as l,ar as _}from"./chunks/framework.EjIRsQ6G.js";import{O as k,E as P}from"./chunks/index.CypwxoU1.js";const w=`<script setup lang="ts">
import { ref } from 'vue'
// 暂时不管导入错误，后面再解决
import { Popover } from '@versakit/vue'
import '@versakit/vue/style'

// 基础用法示例
const isBasicOpen = ref(false)

// 不同触发方式示例
const isManualOpen = ref(false)

const toggleManual = () => {
  isManualOpen.value = !isManualOpen.value
}

// 带标题示例
const isWithTitleOpen = ref(false)

// 自定义宽度示例
const isCustomWidthOpen = ref(false)

// 禁用状态示例
const isDisabledOpen = ref(false)
<\/script>

<template>
  <div class="space-y-12">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="flex items-center space-x-4">
        <Popover v-model="isBasicOpen">
          <template #trigger>
            <div
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              点击显示弹出框
            </div>
          </template>
          这是一个基础的弹出框内容
        </Popover>
      </div>
    </section>

    <!-- 不同位置 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同位置</h2>
      <div class="flex justify-center items-center space-x-8 mb-6">
        <!-- 顶部 -->
        <Popover placement="top">
          <template #trigger>
            <div
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              顶部
            </div>
          </template>
          弹出位置: 顶部 (top)
        </Popover>

        <!-- 右侧 -->
        <Popover placement="right">
          <template #trigger>
            <div
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              右侧
            </div>
          </template>
          弹出位置: 右侧 (right)
        </Popover>

        <!-- 底部 -->
        <Popover placement="bottom">
          <template #trigger>
            <div
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              底部
            </div>
          </template>
          弹出位置: 底部 (bottom)
        </Popover>

        <!-- 左侧 -->
        <Popover placement="left">
          <template #trigger>
            <div
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              左侧
            </div>
          </template>
          弹出位置: 左侧 (left)
        </Popover>
      </div>
    </section>

    <!-- 不同触发方式 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同触发方式</h2>
      <div class="flex items-center space-x-4">
        <Popover trigger="click">
          <template #trigger>
            <div
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              点击触发
            </div>
          </template>
          点击触发的弹出框
        </Popover>

        <Popover trigger="hover">
          <template #trigger>
            <div
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              悬停触发
            </div>
          </template>
          悬停触发的弹出框
        </Popover>

        <Popover v-model="isManualOpen" trigger="manual">
          <template #trigger>
            <div
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
              @click="toggleManual"
            >
              手动触发
            </div>
          </template>
          手动控制的弹出框
        </Popover>
      </div>
    </section>

    <!-- 带标题 -->
    <section>
      <h2 class="text-lg font-medium mb-4">带标题</h2>
      <div class="flex items-center space-x-4">
        <Popover v-model="isWithTitleOpen" title="弹出框标题">
          <template #trigger>
            <div
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              带标题的弹出框
            </div>
          </template>
          这是带有标题的弹出框内容
        </Popover>
      </div>
    </section>

    <!-- 自定义宽度 -->
    <section>
      <h2 class="text-lg font-medium mb-4">自定义宽度</h2>
      <div class="flex items-center space-x-4">
        <Popover v-model="isCustomWidthOpen" :width="300">
          <template #trigger>
            <div
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              自定义宽度
            </div>
          </template>
          这是一个宽度为300px的弹出框，可以显示更多的内容。你可以根据需要自定义弹出框的宽度，以适应不同的内容展示需求。
        </Popover>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">禁用状态</h2>
      <div class="flex items-center space-x-4">
        <Popover v-model="isDisabledOpen" disabled>
          <template #trigger>
            <div
              class="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed"
            >
              禁用状态
            </div>
          </template>
          这个弹出框被禁用了，无法显示
        </Popover>
      </div>
    </section>
  </div>
</template>
`,O=JSON.parse('{"title":"Popover","description":"","frontmatter":{},"headers":[],"relativePath":"components/popover/index.md","filePath":"components/popover/index.md"}'),W={name:"components/popover/index.md"},E=Object.assign(W,{setup(B){const a=c(!0),s=v();return u(async()=>{s.value=(await m(async()=>{const{default:i}=await import("./chunks/index.Bf44TuRY.js");return{default:i}},__vite__mapDeps([0,1,2]))).default}),(i,e)=>{const p=r("Link"),d=r("ClientOnly");return g(),h("div",null,[e[1]||(e[1]=o("h1",{id:"popover",tabindex:"-1"},[x("Popover "),o("a",{class:"header-anchor",href:"#popover","aria-label":'Permalink to "Popover"'},"​")],-1)),e[2]||(e[2]=o("p",null,"Popover 是一种轻量级的浮动层组件，用于在触发元素（如按钮、图标）附近显示额外信息或操作选项。它通常以箭头指向触发元素，支持多种触发方式（点击、悬停、聚焦），在不占用主视图空间的前提下提供上下文相关内容。",-1)),n(p,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-popover-%E5%BC%B9%E5%87%BA%E6%A1%86--basic"}),e[3]||(e[3]=b("",3)),f(n(t(k),null,null,512),[[y,a.value]]),n(d,null,{default:l(()=>[n(t(P),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{a.value=!1}),vueCode:t(w)},_({_:2},[s.value?{name:"vue",fn:l(()=>[n(t(s))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{O as __pageData,E as default};
