const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.DVpfpcSm.js","assets/chunks/theme.Coj6KSFq.js","assets/chunks/framework.DLuSxX4C.js"])))=>i.map(i=>d[i]);
import{p as x,D as o,v as m,al as v,C as l,c as g,o as y,j as s,G as t,ak as f,a0 as u,a as h,a3 as w,k as a,w as d,am as k}from"./chunks/framework.DLuSxX4C.js";import{O as b,E as S}from"./chunks/index.Bhh2hZnL.js";const _=`<script setup>
import { Swap } from '@versakit/vue'
import '@versakit/vue/style'
import { ref } from 'vue'

const isActive = ref(false)
<\/script>

<template>
  <div class="space-y-4 text-sm">
    <!-- 基本用法和变体效果 -->
    <section>
      <h4 class="text-sm font-medium mb-2">变体效果</h4>
      <div class="flex flex-wrap items-start gap-4">
        <div class="flex flex-col items-center gap-1">
          <span class="text-xs text-gray-500 dark:text-gray-400">基础用法</span>
          <Swap v-model:active="isActive">
            <template #on>
              <div class="bg-primary-500 text-white rounded px-2 py-1 text-xs">
                开启
              </div>
            </template>
            <template #off>
              <div
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"
              >
                关闭
              </div>
            </template>
          </Swap>
        </div>

        <div class="flex flex-col items-center gap-1">
          <span class="text-xs text-gray-500 dark:text-gray-400">淡入淡出</span>
          <Swap variant="fade" v-model:active="isActive">
            <template #on>
              <div
                class="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
              >
                ✓
              </div>
            </template>
            <template #off>
              <div
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs"
              >
                ✗
              </div>
            </template>
          </Swap>
        </div>

        <div class="flex flex-col items-center gap-1">
          <span class="text-xs text-gray-500 dark:text-gray-400">翻转</span>
          <Swap variant="flip" v-model:active="isActive">
            <template #on>
              <div
                class="bg-primary-500 text-white rounded w-6 h-6 flex items-center justify-center text-xs"
              >
                A
              </div>
            </template>
            <template #off>
              <div
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded w-6 h-6 flex items-center justify-center text-xs"
              >
                B
              </div>
            </template>
          </Swap>
        </div>

        <div class="flex flex-col items-center gap-1">
          <span class="text-xs text-gray-500 dark:text-gray-400">旋转</span>
          <Swap variant="rotate" v-model:active="isActive">
            <template #on>
              <div
                class="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
              >
                +
              </div>
            </template>
            <template #off>
              <div
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs"
              >
                -
              </div>
            </template>
          </Swap>
        </div>

        <div class="flex flex-col items-center gap-1">
          <span class="text-xs text-gray-500 dark:text-gray-400">滑动</span>
          <Swap variant="slide" v-model:active="isActive">
            <template #on>
              <div class="bg-primary-500 text-white rounded px-2 py-1 text-xs">
                上
              </div>
            </template>
            <template #off>
              <div
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"
              >
                下
              </div>
            </template>
          </Swap>
        </div>
      </div>
    </section>

    <!-- 尺寸展示 -->
    <section class="border-t pt-2">
      <h4 class="text-sm font-medium mb-2">尺寸</h4>
      <div class="flex flex-wrap items-end gap-4">
        <div class="flex flex-col items-center gap-1">
          <span class="text-xs text-gray-500 dark:text-gray-400">小</span>
          <Swap size="sm" v-model:active="isActive">
            <template #on>
              <div
                class="bg-primary-500 text-white rounded flex items-center justify-center w-4 h-4 text-xs"
              >
                S
              </div>
            </template>
            <template #off>
              <div
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded flex items-center justify-center w-4 h-4 text-xs"
              >
                S
              </div>
            </template>
          </Swap>
        </div>

        <div class="flex flex-col items-center gap-1">
          <span class="text-xs text-gray-500 dark:text-gray-400">中</span>
          <Swap size="md" v-model:active="isActive">
            <template #on>
              <div
                class="bg-primary-500 text-white rounded flex items-center justify-center w-6 h-6 text-xs"
              >
                M
              </div>
            </template>
            <template #off>
              <div
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded flex items-center justify-center w-6 h-6 text-xs"
              >
                M
              </div>
            </template>
          </Swap>
        </div>

        <div class="flex flex-col items-center gap-1">
          <span class="text-xs text-gray-500 dark:text-gray-400">大</span>
          <Swap size="lg" v-model:active="isActive">
            <template #on>
              <div
                class="bg-primary-500 text-white rounded flex items-center justify-center w-8 h-8 text-xs"
              >
                L
              </div>
            </template>
            <template #off>
              <div
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded flex items-center justify-center w-8 h-8 text-xs"
              >
                L
              </div>
            </template>
          </Swap>
        </div>
      </div>
    </section>

    <!-- 触发方式 -->
    <section class="border-t pt-2">
      <h4 class="text-sm font-medium mb-2">触发方式</h4>
      <div class="flex flex-wrap items-center gap-4">
        <div class="flex flex-col items-center gap-1">
          <span class="text-xs text-gray-500 dark:text-gray-400">点击</span>
          <Swap trigger="click" v-model:active="isActive">
            <template #on>
              <div class="bg-primary-500 text-white rounded px-2 py-1 text-xs">
                点击状态
              </div>
            </template>
            <template #off>
              <div
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"
              >
                点击切换
              </div>
            </template>
          </Swap>
        </div>

        <div class="flex flex-col items-center gap-1">
          <span class="text-xs text-gray-500 dark:text-gray-400">悬停</span>
          <Swap trigger="hover" v-model:active="isActive">
            <template #on>
              <div class="bg-primary-500 text-white rounded px-2 py-1 text-xs">
                悬停状态
              </div>
            </template>
            <template #off>
              <div
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"
              >
                悬停切换
              </div>
            </template>
          </Swap>
        </div>

        <div class="flex flex-col items-center gap-1">
          <span class="text-xs text-gray-500 dark:text-gray-400">聚焦</span>
          <Swap trigger="focus" v-model:active="isActive">
            <template #on>
              <div class="bg-primary-500 text-white rounded px-2 py-1 text-xs">
                聚焦状态
              </div>
            </template>
            <template #off>
              <div
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"
              >
                点击聚焦
              </div>
            </template>
          </Swap>
        </div>
      </div>
    </section>

    <!-- 外部控制 -->
    <section class="border-t pt-2">
      <h4 class="text-sm font-medium mb-2">外部控制</h4>
      <div class="flex flex-wrap items-center gap-2">
        <Swap v-model:active="isActive">
          <template #on>
            <div class="bg-primary-500 text-white rounded px-2 py-1 text-xs">
              开启状态
            </div>
          </template>
          <template #off>
            <div
              class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"
            >
              关闭状态
            </div>
          </template>
        </Swap>
        <button
          @click="isActive = !isActive"
          class="px-2 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded text-xs"
        >
          {{ isActive ? '切换为关闭' : '切换为开启' }}
        </button>
      </div>
    </section>
  </div>
</template>

<style>
:root {
  --primary-500: #3b82f6;
}

.bg-primary-500 {
  background-color: var(--primary-500);
}
</style>
`,C=JSON.parse('{"title":"Swap","description":"","frontmatter":{},"headers":[],"relativePath":"components/swap/index.md","filePath":"components/swap/index.md"}'),A={name:"components/swap/index.md"},E=Object.assign(A,{setup(V){const i=x(!0),n=o();return m(async()=>{n.value=(await v(async()=>{const{default:r}=await import("./chunks/index.DVpfpcSm.js");return{default:r}},__vite__mapDeps([0,1,2]))).default}),(r,e)=>{const p=l("Link"),c=l("ClientOnly");return y(),g("div",null,[e[1]||(e[1]=s("h1",{id:"swap",tabindex:"-1"},[h("Swap "),s("a",{class:"header-anchor",href:"#swap","aria-label":'Permalink to "Swap"'},"​")],-1)),e[2]||(e[2]=s("p",null,"Swap 是一种用于在两种状态间切换内容显示的交互式组件。它允许用户通过点击、悬停或聚焦等方式在两种视觉状态之间进行切换，支持多种过渡动画效果，适用于主题切换、开关状态展示、展开/折叠内容等场景。",-1)),t(p,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-swap-%E8%B0%83%E6%8D%A2--basic"}),e[3]||(e[3]=f("",3)),u(t(a(b),null,null,512),[[w,i.value]]),t(c,null,{default:d(()=>[t(a(S),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{i.value=!1}),vueCode:a(_)},k({_:2},[n.value?{name:"vue",fn:d(()=>[t(a(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{C as __pageData,E as default};
