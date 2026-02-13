const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.BrhmAJHn.js","assets/chunks/theme.DVizTi_Y.js","assets/chunks/framework.DcQCqlea.js"])))=>i.map(i=>d[i]);
import{p as u,D as p,v as m,al as f,C as r,c as v,o as x,j as t,G as n,a5 as s,a0 as g,a as b,a3 as k,k as l,w as o,am as y}from"./chunks/framework.DcQCqlea.js";import{O as w,E as C}from"./chunks/index.S9QYeH19.js";const F=`<template>
  <div class="space-y-8">
    <!-- 基础轮播 -->
    <section>
      <h3 class="text-lg font-medium mb-4">基础轮播</h3>
      <div class="h-64">
        <Carousel>
          <template #item-0>
            <div
              class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl"
            >
              幻灯片 1
            </div>
          </template>
          <template #item-1>
            <div
              class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl"
            >
              幻灯片 2
            </div>
          </template>
          <template #item-2>
            <div
              class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl"
            >
              幻灯片 3
            </div>
          </template>
        </Carousel>
      </div>
    </section>

    <!-- 自动播放 -->
    <section>
      <h3 class="text-lg font-medium mb-4">自动播放</h3>
      <div class="h-64">
        <Carousel :autoplay="true" :interval="3000">
          <template #item-0>
            <div
              class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl"
            >
              幻灯片 1
            </div>
          </template>
          <template #item-1>
            <div
              class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl"
            >
              幻灯片 2
            </div>
          </template>
          <template #item-2>
            <div
              class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl"
            >
              幻灯片 3
            </div>
          </template>
        </Carousel>
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section>
      <h3 class="text-lg font-medium mb-4">不同尺寸</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p class="mb-2 text-sm text-gray-600">小尺寸 (sm)</p>
          <Carousel size="sm">
            <template #item-0>
              <div
                class="w-full h-full bg-blue-500 flex items-center justify-center text-white"
              >
                幻灯片 1
              </div>
            </template>
            <template #item-1>
              <div
                class="w-full h-full bg-green-500 flex items-center justify-center text-white"
              >
                幻灯片 2
              </div>
            </template>
          </Carousel>
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-600">中尺寸 (md)</p>
          <Carousel size="md">
            <template #item-0>
              <div
                class="w-full h-full bg-blue-500 flex items-center justify-center text-white"
              >
                幻灯片 1
              </div>
            </template>
            <template #item-1>
              <div
                class="w-full h-full bg-green-500 flex items-center justify-center text-white"
              >
                幻灯片 2
              </div>
            </template>
          </Carousel>
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-600">大尺寸 (lg)</p>
          <Carousel size="lg">
            <template #item-0>
              <div
                class="w-full h-full bg-blue-500 flex items-center justify-center text-white"
              >
                幻灯片 1
              </div>
            </template>
            <template #item-1>
              <div
                class="w-full h-full bg-green-500 flex items-center justify-center text-white"
              >
                幻灯片 2
              </div>
            </template>
          </Carousel>
        </div>
      </div>
    </section>

    <!-- 控制选项 -->
    <section>
      <h3 class="text-lg font-medium mb-4">控制选项</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="h-48">
          <p class="mb-2 text-sm text-gray-600">无导航按钮</p>
          <Carousel :navigation="false">
            <template #item-0>
              <div
                class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-xl"
              >
                无导航按钮
              </div>
            </template>
            <template #item-1>
              <div
                class="w-full h-full bg-green-500 flex items-center justify-center text-white text-xl"
              >
                幻灯片 2
              </div>
            </template>
          </Carousel>
        </div>
        <div class="h-48">
          <p class="mb-2 text-sm text-gray-600">无指示器</p>
          <Carousel :indicators="false">
            <template #item-0>
              <div
                class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-xl"
              >
                无指示器
              </div>
            </template>
            <template #item-1>
              <div
                class="w-full h-full bg-green-500 flex items-center justify-center text-white text-xl"
              >
                幻灯片 2
              </div>
            </template>
          </Carousel>
        </div>
      </div>
    </section>

    <!-- 自定义导航图标 -->
    <section>
      <h3 class="text-lg font-medium mb-4">自定义导航图标</h3>
      <div class="h-64">
        <Carousel>
          <template #item-0>
            <div
              class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl"
            >
              幻灯片 1
            </div>
          </template>
          <template #item-1>
            <div
              class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl"
            >
              幻灯片 2
            </div>
          </template>
          <template #item-2>
            <div
              class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl"
            >
              幻灯片 3
            </div>
          </template>

          <template #prev-icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </template>

          <template #next-icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </template>
        </Carousel>
      </div>
    </section>

    <!-- 图片轮播 -->
    <section>
      <h3 class="text-lg font-medium mb-4">图片轮播</h3>
      <div class="h-64">
        <Carousel :autoplay="true" :interval="3000">
          <template
            v-for="(image, index) in images"
            :key="index"
            v-slot:[\`item-\${index}\`]
          >
            <div class="w-full h-full">
              <img
                :src="image"
                class="w-full h-full object-cover"
                :alt="\`图片 \${index + 1}\`"
              />
            </div>
          </template>
        </Carousel>
      </div>
    </section>

    <!-- 程序控制轮播 -->
    <section>
      <h3 class="text-lg font-medium mb-4">程序控制轮播</h3>
      <div class="h-64 mb-4">
        <Carousel ref="carouselRef" :navigation="false">
          <template #item-0>
            <div
              class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl"
            >
              幻灯片 1
            </div>
          </template>
          <template #item-1>
            <div
              class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl"
            >
              幻灯片 2
            </div>
          </template>
          <template #item-2>
            <div
              class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl"
            >
              幻灯片 3
            </div>
          </template>
        </Carousel>
      </div>

      <div class="flex gap-2">
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          @click="prevSlide"
        >
          上一项
        </button>
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          @click="nextSlide"
        >
          下一项
        </button>
        <div class="flex gap-2 ml-4">
          <button
            v-for="i in 3"
            :key="i"
            class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            @click="goToSlide(i - 1)"
          >
            {{ i }}
          </button>
        </div>
      </div>
    </section>

    <!-- 自定义样式 -->
    <section>
      <h3 class="text-lg font-medium mb-4">自定义样式</h3>
      <div class="h-64">
        <Carousel
          :pt="{
            root: 'rounded-lg shadow-xl overflow-hidden',
            prevButton: 'bg-black/50 text-white',
            nextButton: 'bg-black/50 text-white',
            indicator: 'w-3 h-3 bg-gray-300',
            activeIndicator: 'w-6 h-3 bg-white',
          }"
          :autoplay="true"
        >
          <template #item-0>
            <div
              class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl"
            >
              幻灯片 1
            </div>
          </template>
          <template #item-1>
            <div
              class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl"
            >
              幻灯片 2
            </div>
          </template>
          <template #item-2>
            <div
              class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl"
            >
              幻灯片 3
            </div>
          </template>
        </Carousel>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h3 class="text-lg font-medium mb-4">禁用状态</h3>
      <div class="h-64">
        <Carousel :disabled="true">
          <template #item-0>
            <div
              class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl"
            >
              已禁用轮播
            </div>
          </template>
          <template #item-1>
            <div
              class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl"
            >
              幻灯片 2
            </div>
          </template>
        </Carousel>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Carousel } from '@versakit/vue'

// 图片轮播数据
const images = [
  'https://picsum.photos/id/1018/800/400',
  'https://picsum.photos/id/1015/800/400',
  'https://picsum.photos/id/1019/800/400',
  'https://picsum.photos/id/1016/800/400',
]

// 程序控制轮播
const carouselRef = ref(null)

const nextSlide = () => {
  carouselRef.value?.next()
}

const prevSlide = () => {
  carouselRef.value?.prev()
}

const goToSlide = (index: number) => {
  carouselRef.value?.goToSlide(index)
}
<\/script>
`,T=JSON.parse('{"title":"Carousel 轮播组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/carousel/index.md","filePath":"components/carousel/index.md"}'),_={name:"components/carousel/index.md"},E=Object.assign(_,{setup(A){const a=u(!0),i=p();return m(async()=>{i.value=(await f(async()=>{const{default:d}=await import("./chunks/index.BrhmAJHn.js");return{default:d}},__vite__mapDeps([0,1,2]))).default}),(d,e)=>{const c=r("Link"),h=r("ClientOnly");return x(),v("div",null,[e[1]||(e[1]=t("h1",{id:"carousel-轮播组件",tabindex:"-1"},[b("Carousel 轮播组件 "),t("a",{class:"header-anchor",href:"#carousel-轮播组件","aria-label":'Permalink to "Carousel 轮播组件"'},"​")],-1)),e[2]||(e[2]=t("p",null,"Carousel 是一个内容轮播展示组件，支持自动轮播、手动切换、触摸滑动等交互方式。它可以用于展示一组图片、卡片或其他任何内容，并提供多种自定义选项。",-1)),n(c,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/components-carousel--basic"}),e[3]||(e[3]=s("",3)),g(n(l(w),null,null,512),[[k,a.value]]),n(h,null,{default:o(()=>[n(l(C),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{a.value=!1}),vueCode:l(F)},y({_:2},[i.value?{name:"vue",fn:o(()=>[n(l(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[4]||(e[4]=s("",6)),e[5]||(e[5]=t("table",{tabindex:"0"},[t("thead",null,[t("tr",null,[t("th",null,"插槽名"),t("th",null,"参数"),t("th",null,"说明")])]),t("tbody",null,[t("tr",null,[t("td",{n:""},"item-"),t("td",null,"-"),t("td",null,"幻灯片内容，n 为幻灯片索引，从 0 开始")]),t("tr",null,[t("td",null,"prev-icon"),t("td",null,"-"),t("td",null,"自定义上一张按钮图标")]),t("tr",null,[t("td",null,"next-icon"),t("td",null,"-"),t("td",null,"自定义下一张按钮图标")])])],-1)),e[6]||(e[6]=s("",8))])}}});export{T as __pageData,E as default};
