const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.Dv5nfSK-.js","assets/chunks/theme.PeSdtEEv.js","assets/chunks/framework.C6EVvWrU.js"])))=>i.map(i=>d[i]);
import{v as k,ao as c,C as d,o as g,c as u,j as a,a as m,E as s,a6 as h,a1 as y,a4 as b,k as i,w as r,ap as f,G as F,p as x}from"./chunks/framework.C6EVvWrU.js";import{O as A,E as v}from"./chunks/index.DS4uDY_R.js";const C=`<template>
  <div class="space-y-8">
    <!-- 基础文本跑马灯 -->
    <section>
      <h3 class="text-lg font-medium mb-4">基础文本跑马灯</h3>
      <Runhorselight
        :items="['欢迎使用 Versakit 组件库', '这是一个功能强大的 Vue 3 组件库', '支持 TypeScript 和 Tailwind CSS']"
        :height="'4rem'"
      />
    </section>

    <!-- 图片跑马灯 -->
    <section>
      <h3 class="text-lg font-medium mb-4">图片跑马灯</h3>
      <Runhorselight
        :items="logoItems"
        :height="'6rem'"
        :gap="'2rem'"
        :duration="25"
        :border-radius="'1rem'"
      />
    </section>

    <!-- 卡片跑马灯 -->
    <section>
      <h3 class="text-lg font-medium mb-4">卡片跑马灯</h3>
      <Runhorselight
        :items="cardItems"
        :height="'12rem'"
        :gap="'1.5rem'"
        :duration="30"
        :border-radius="'1rem'"
        background-color="#f3f4f6"
      />
    </section>

    <!-- 不同滚动方向 -->
    <section>
      <h3 class="text-lg font-medium mb-4">不同滚动方向</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-600">向左滚动 (默认)</p>
          <Runhorselight
            :items="['向左滚动的内容 1', '向左滚动的内容 2', '向左滚动的内容 3']"
            direction="left"
          />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-600">向右滚动</p>
          <Runhorselight
            :items="['向右滚动的内容 1', '向右滚动的内容 2', '向右滚动的内容 3']"
            direction="right"
          />
        </div>
      </div>
    </section>

    <!-- 不同速度 -->
    <section>
      <h3 class="text-lg font-medium mb-4">不同滚动速度</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-600">快速滚动 (10秒)</p>
          <Runhorselight
            :items="['快速滚动的内容 1', '快速滚动的内容 2', '快速滚动的内容 3']"
            :duration="10"
          />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-600">中速滚动 (20秒，默认)</p>
          <Runhorselight
            :items="['中速滚动的内容 1', '中速滚动的内容 2', '中速滚动的内容 3']"
            :duration="20"
          />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-600">慢速滚动 (40秒)</p>
          <Runhorselight
            :items="['慢速滚动的内容 1', '慢速滚动的内容 2', '慢速滚动的内容 3']"
            :duration="40"
          />
        </div>
      </div>
    </section>

    <!-- 带前缀和后缀 -->
    <section>
      <h3 class="text-lg font-medium mb-4">带前缀和后缀</h3>
      <Runhorselight
        :items="['新闻 1：重要通知', '新闻 2：系统更新', '新闻 3：新功能发布']"
        :prefix="{ type: 'text', content: '📢 最新消息：', textColor: '#ef4444' }"
        :suffix="{ type: 'text', content: '更多 »', textColor: '#3b82f6' }"
        :height="'3rem'"
        @prefix-click="handlePrefixClick"
        @suffix-click="handleSuffixClick"
      />
    </section>

    <!-- 悬停暂停 -->
    <section>
      <h3 class="text-lg font-medium mb-4">鼠标悬停暂停</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-600">启用悬停暂停 (默认)</p>
          <Runhorselight
            :items="['悬停时暂停滚动 1', '悬停时暂停滚动 2', '悬停时暂停滚动 3']"
            :pause-on-hover="true"
          />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-600">禁用悬停暂停</p>
          <Runhorselight
            :items="['不暂停滚动 1', '不暂停滚动 2', '不暂停滚动 3']"
            :pause-on-hover="false"
          />
        </div>
      </div>
    </section>

    <!-- 自定义样式 -->
    <section>
      <h3 class="text-lg font-medium mb-4">自定义样式</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-600">自定义背景色和文本色</p>
          <Runhorselight
            :items="['自定义样式内容 1', '自定义样式内容 2', '自定义样式内容 3']"
            :height="'3.5rem'"
            background-color="#1e293b"
            text-color="#ffffff"
            :border-radius="'0.5rem'"
          />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-600">通过 PT 传递自定义样式</p>
          <Runhorselight
            :items="['PT 样式内容 1', 'PT 样式内容 2', 'PT 样式内容 3']"
            :height="'3.5rem'"
            :pt="{
              root: 'bg-gradient-to-r from-purple-500 to-pink-500',
              text: 'text-white font-bold text-lg',
              item: 'px-6'
            }"
          />
        </div>
      </div>
    </section>

    <!-- 混合内容类型 -->
    <section>
      <h3 class="text-lg font-medium mb-4">混合内容类型</h3>
      <Runhorselight
        :items="mixedItems"
        :height="'6rem'"
        :gap="'1.5rem'"
        :duration="35"
        :border-radius="'0.75rem'"
      />
    </section>

    <!-- 无缝循环 -->
    <section>
      <h3 class="text-lg font-medium mb-4">无缝循环</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-600">启用无缝循环 (默认)</p>
          <Runhorselight
            :items="['无缝循环内容 1', '无缝循环内容 2', '无缝循环内容 3']"
            :loop="true"
          />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-600">禁用无缝循环</p>
          <Runhorselight
            :items="['不循环内容 1', '不循环内容 2', '不循环内容 3']"
            :loop="false"
          />
        </div>
      </div>
    </section>

    <!-- 自定义插槽 -->
    <section>
      <h3 class="text-lg font-medium mb-4">自定义插槽</h3>
      <Runhorselight
        :items="[]"
        :height="'5rem'"
        :gap="'2rem'"
      >
        <template #default>
          <div class="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
            <span>🚀</span>
            <span>自定义内容 1</span>
          </div>
          <div class="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full">
            <span>⭐</span>
            <span>自定义内容 2</span>
          </div>
          <div class="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full">
            <span>🎨</span>
            <span>自定义内容 3</span>
          </div>
          <div class="flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-800 rounded-full">
            <span>🔥</span>
            <span>自定义内容 4</span>
          </div>
        </template>
      </Runhorselight>
    </section>

    <!-- 自动填充 -->
    <section>
      <h3 class="text-lg font-medium mb-4">自动填充内容</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-600">启用自动填充</p>
          <Runhorselight
            :items="logoItems.slice(0, 2)"
            :height="'6rem'"
            :gap="'2rem'"
            :autofill="true"
            :border-radius="'0.5rem'"
          />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-600">禁用自动填充</p>
          <Runhorselight
            :items="logoItems.slice(0, 2)"
            :height="'6rem'"
            :gap="'2rem'"
            :autofill="false"
            :border-radius="'0.5rem'"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Runhorselight } from '@versakit/vue'
import type { RunhorselightAffixClickPayload } from '@versakit/vue'

// 图片跑马灯数据
const logoItems = [
  {
    type: 'image',
    src: 'https://picsum.photos/id/1018/200/80',
    alt: 'Logo 1',
  },
  {
    type: 'image',
    src: 'https://picsum.photos/id/1015/200/80',
    alt: 'Logo 2',
  },
  {
    type: 'image',
    src: 'https://picsum.photos/id/1019/200/80',
    alt: 'Logo 3',
  },
  {
    type: 'image',
    src: 'https://picsum.photos/id/1016/200/80',
    alt: 'Logo 4',
  },
  {
    type: 'image',
    src: 'https://picsum.photos/id/1021/200/80',
    alt: 'Logo 5',
  },
]

// 卡片跑马灯数据
const cardItems = [
  {
    type: 'card',
    title: 'Vue 3 发布',
    description: '新一代前端框架，更快的性能和更小的体积',
    backgroundColor: '#dbeafe',
    textColor: '#1e40af',
    borderRadius: '0.5rem',
  },
  {
    type: 'card',
    title: 'TypeScript 5.0',
    description: '更强大的类型系统和更好的开发体验',
    backgroundColor: '#dcfce7',
    textColor: '#166534',
    borderRadius: '0.5rem',
  },
  {
    type: 'card',
    title: 'Tailwind CSS 4.0',
    description: '实用优先的 CSS 框架，快速构建现代网站',
    backgroundColor: '#fef3c7',
    textColor: '#92400e',
    borderRadius: '0.5rem',
  },
  {
    type: 'card',
    title: 'Vite 6.0',
    description: '极速的开发服务器和构建工具',
    backgroundColor: '#fce7f3',
    textColor: '#9d174d',
    borderRadius: '0.5rem',
  },
]

// 混合内容类型数据
const mixedItems = [
  '纯文本内容',
  {
    type: 'image',
    src: 'https://picsum.photos/id/1018/100/60',
    alt: '混合图片',
  },
  {
    type: 'card',
    title: '重要通知',
    description: '系统维护时间：今晚 22:00-24:00',
    backgroundColor: '#fef2f2',
    textColor: '#991b1b',
  },
  '更多文本内容',
]

// 事件处理
const handlePrefixClick = (payload: RunhorselightAffixClickPayload) => {
  console.log('前缀点击:', payload)
  // 可以在这里添加跳转或其他逻辑
}

const handleSuffixClick = (payload: RunhorselightAffixClickPayload) => {
  console.log('后缀点击:', payload)
  // 可以在这里添加跳转或其他逻辑
}
<\/script>`,_=JSON.parse('{"title":"Runhorselight 跑马灯组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/runhorselight/index.md","filePath":"components/runhorselight/index.md"}'),D={name:"components/runhorselight/index.md"},P=Object.assign(D,{setup(E){const e=x(!0),n=F();return k(async()=>{n.value=(await c(async()=>{const{default:l}=await import("./chunks/index.Dv5nfSK-.js");return{default:l}},__vite__mapDeps([0,1,2]))).default}),(l,t)=>{const o=d("Link"),p=d("ClientOnly");return g(),u("div",null,[t[1]||(t[1]=a("h1",{id:"runhorselight-跑马灯组件",tabindex:"-1"},[m("Runhorselight 跑马灯组件 "),a("a",{class:"header-anchor",href:"#runhorselight-跑马灯组件","aria-label":'Permalink to "Runhorselight 跑马灯组件"'},"​")],-1)),t[2]||(t[2]=a("p",null,"Runhorselight 是一个无限循环滚动的跑马灯组件，支持文本、图片、卡片等多种内容类型。它可以用于展示公告、广告、合作伙伴 Logo、图片轮播等场景，并提供多种自定义选项和流畅的动画效果。",-1)),s(o,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/components-runhorselight--basic"}),t[3]||(t[3]=h("",3)),y(s(i(A),null,null,512),[[b,e.value]]),s(p,null,{default:r(()=>[s(i(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{e.value=!1}),vueCode:i(C)},f({_:2},[n.value?{name:"vue",fn:r(()=>[s(i(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=h("",25))])}}});export{_ as __pageData,P as default};
