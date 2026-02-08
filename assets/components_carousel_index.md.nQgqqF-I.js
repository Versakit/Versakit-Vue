const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.BeowAIb9.js","assets/chunks/theme.Bvmz8KJB.js","assets/chunks/framework.DcQCqlea.js"])))=>i.map(i=>d[i]);
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
`,T=JSON.parse('{"title":"Carousel 轮播组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/carousel/index.md","filePath":"components/carousel/index.md"}'),_={name:"components/carousel/index.md"},E=Object.assign(_,{setup(A){const a=u(!0),i=p();return m(async()=>{i.value=(await f(async()=>{const{default:d}=await import("./chunks/index.BeowAIb9.js");return{default:d}},__vite__mapDeps([0,1,2]))).default}),(d,e)=>{const c=r("Link"),h=r("ClientOnly");return x(),v("div",null,[e[1]||(e[1]=t("h1",{id:"carousel-轮播组件",tabindex:"-1"},[b("Carousel 轮播组件 "),t("a",{class:"header-anchor",href:"#carousel-轮播组件","aria-label":'Permalink to "Carousel 轮播组件"'},"​")],-1)),e[2]||(e[2]=t("p",null,"Carousel 是一个内容轮播展示组件，支持自动轮播、手动切换、触摸滑动等交互方式。它可以用于展示一组图片、卡片或其他任何内容，并提供多种自定义选项。",-1)),n(c,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/components-carousel--basic"}),e[3]||(e[3]=s('<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Carousel } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@versakit/vue&#39;</span></span></code></pre></div><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2>',3)),g(n(l(w),null,null,512),[[k,a.value]]),n(h,null,{default:o(()=>[n(l(C),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{a.value=!1}),vueCode:l(F)},y({_:2},[i.value?{name:"vue",fn:o(()=>[n(l(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[4]||(e[4]=s('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>variant</td><td><code>&#39;default&#39; | &#39;dots&#39; | &#39;thumbnails&#39;</code></td><td><code>&#39;default&#39;</code></td><td>轮播图变体类型</td></tr><tr><td>size</td><td><code>&#39;sm&#39; | &#39;md&#39; | &#39;lg&#39;</code></td><td><code>&#39;md&#39;</code></td><td>轮播图尺寸</td></tr><tr><td>autoplay</td><td><code>boolean</code></td><td><code>false</code></td><td>是否自动播放</td></tr><tr><td>interval</td><td><code>number</code></td><td><code>3000</code></td><td>自动播放间隔时间（毫秒）</td></tr><tr><td>loop</td><td><code>boolean</code></td><td><code>true</code></td><td>是否循环播放</td></tr><tr><td>indicators</td><td><code>boolean</code></td><td><code>true</code></td><td>是否显示指示器</td></tr><tr><td>navigation</td><td><code>boolean</code></td><td><code>true</code></td><td>是否显示导航按钮</td></tr><tr><td>keyboardNavigation</td><td><code>boolean</code></td><td><code>true</code></td><td>是否启用键盘导航</td></tr><tr><td>touchSwipe</td><td><code>boolean</code></td><td><code>true</code></td><td>是否启用触摸滑动</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>是否禁用轮播图</td></tr><tr><td>initialIndex</td><td><code>number</code></td><td><code>0</code></td><td>初始激活的幻灯片索引</td></tr><tr><td>unstyled</td><td><code>boolean</code></td><td><code>false</code></td><td>是否使用无样式模式</td></tr><tr><td>pt</td><td><code>CarouselPT</code></td><td>-</td><td>自定义样式传递</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td><code>(currentIndex: number, prevIndex: number) =&gt; void</code></td><td>当前激活的幻灯片改变时触发</td></tr><tr><td>update:active-index</td><td><code>(index: number) =&gt; void</code></td><td>当前激活的幻灯片索引更新时触发</td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3>',6)),e[5]||(e[5]=t("table",{tabindex:"0"},[t("thead",null,[t("tr",null,[t("th",null,"插槽名"),t("th",null,"参数"),t("th",null,"说明")])]),t("tbody",null,[t("tr",null,[t("td",{n:""},"item-"),t("td",null,"-"),t("td",null,"幻灯片内容，n 为幻灯片索引，从 0 开始")]),t("tr",null,[t("td",null,"prev-icon"),t("td",null,"-"),t("td",null,"自定义上一张按钮图标")]),t("tr",null,[t("td",null,"next-icon"),t("td",null,"-"),t("td",null,"自定义下一张按钮图标")])])],-1)),e[6]||(e[6]=s(`<h3 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法名</th><th>参数</th><th>返回值</th><th>说明</th></tr></thead><tbody><tr><td>next</td><td>-</td><td><code>void</code></td><td>切换到下一张幻灯片</td></tr><tr><td>prev</td><td>-</td><td><code>void</code></td><td>切换到上一张幻灯片</td></tr><tr><td>goToSlide</td><td><code>(index: number) =&gt; void</code></td><td><code>void</code></td><td>切换到指定索引的幻灯片</td></tr></tbody></table><h3 id="样式传递" tabindex="-1">样式传递 <a class="header-anchor" href="#样式传递" aria-label="Permalink to &quot;样式传递&quot;">​</a></h3><p>通过 <code>pt</code> 属性可以自定义组件各部分的样式：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CarouselPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	root</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	container</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	navigation</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	prevButton</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	nextButton</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	indicators</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	indicator</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	activeIndicator</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="无障碍访问" tabindex="-1">无障碍访问 <a class="header-anchor" href="#无障碍访问" aria-label="Permalink to &quot;无障碍访问&quot;">​</a></h2><p>Carousel 组件遵循 WCAG 2.1 标准，支持以下无障碍特性：</p><ul><li>键盘导航：通过左右箭头键切换幻灯片</li><li>适当的 ARIA 属性：导航按钮和指示器都包含适当的 aria-label 和 aria-current 属性</li><li>可聚焦元素：导航按钮和指示器都可以通过键盘聚焦</li></ul>`,8))])}}});export{T as __pageData,E as default};
