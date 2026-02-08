const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.OZbnCkD6.js","assets/chunks/theme.deiFc2AJ.js","assets/chunks/framework.UiYS8jYT.js"])))=>i.map(i=>d[i]);
import{p,D as m,v as g,al as u,C as o,c as k,o as b,j as d,G as e,a5 as l,a0 as v,a as E,a3 as y,k as s,w as r,am as x}from"./chunks/framework.UiYS8jYT.js";import{O as f,E as _}from"./chunks/index.DtJc6mnf.js";const F=`<script setup lang="ts">
import { ref } from 'vue'
import { Image } from '@versakit/vue'
import '@versakit/vue/style'

const isZoomed = ref(false)
const toggleZoom = () => {
  isZoomed.value = !isZoomed.value
}
<\/script>

<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p class="mb-2 text-sm">默认图片：</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="200px"
          />
        </div>
        <div>
          <p class="mb-2 text-sm">不同填充模式：</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="200px"
            fit="contain"
          />
        </div>
      </div>
    </section>

    <!-- 模糊加载效果 -->
    <section>
      <h2 class="text-lg font-medium mb-4">模糊加载效果</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p class="mb-2 text-sm">启用模糊加载：</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="200px"
            :blurred="true"
          />
        </div>
        <div>
          <p class="mb-2 text-sm">自定义模糊度：</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="200px"
            :blurred="true"
            :blurAmount="20"
          />
        </div>
      </div>
    </section>

    <!-- 缩放功能 -->
    <section>
      <h2 class="text-lg font-medium mb-4">缩放功能</h2>
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <button
            @click="toggleZoom"
            class="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            {{ isZoomed ? '取消缩放' : '缩放图片' }}
          </button>
          <span class="text-sm text-gray-500">点击按钮或图片切换缩放状态</span>
        </div>

        <div class="grid grid-cols-1 gap-6">
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="300px"
            :isZoomable="true"
            :isZoomed="isZoomed"
            :zoomScale="1.8"
            @zoom="isZoomed = $event"
          />
        </div>
      </div>
    </section>

    <!-- 骨架屏 -->
    <section>
      <h2 class="text-lg font-medium mb-4">骨架屏</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p class="mb-2 text-sm">默认骨架屏：</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="200px"
            :skeleton="true"
          />
        </div>
        <div>
          <p class="mb-2 text-sm">自定义骨架屏颜色：</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="200px"
            :skeleton="true"
            skeletonColor="#e0f2fe"
          />
        </div>
      </div>
    </section>

    <!-- 不同圆角 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同圆角</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <p class="mb-2 text-sm">无圆角：</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="150px"
            radius="none"
          />
        </div>
        <div>
          <p class="mb-2 text-sm">中等圆角（默认）：</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="150px"
            radius="md"
          />
        </div>
        <div>
          <p class="mb-2 text-sm">大圆角：</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="150px"
            radius="xl"
          />
        </div>
      </div>
    </section>

    <!-- 错误状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">错误状态</h2>
      <div>
        <Image
          src="invalid-image-url.jpg"
          alt="无效图片"
          width="100%"
          height="200px"
        />
      </div>
    </section>
  </div>
</template>
`,Z=JSON.parse('{"title":"Image 图片","description":"","frontmatter":{},"headers":[],"relativePath":"components/image/index.md","filePath":"components/image/index.md"}'),C={name:"components/image/index.md"},V=Object.assign(C,{setup(I){const n=p(!0),a=m();return g(async()=>{a.value=(await u(async()=>{const{default:i}=await import("./chunks/index.OZbnCkD6.js");return{default:i}},__vite__mapDeps([0,1,2]))).default}),(i,t)=>{const h=o("Link"),c=o("ClientOnly");return b(),k("div",null,[t[1]||(t[1]=d("h1",{id:"image-图片",tabindex:"-1"},[E("Image 图片 "),d("a",{class:"header-anchor",href:"#image-图片","aria-label":'Permalink to "Image 图片"'},"​")],-1)),t[2]||(t[2]=d("p",null,"Image 组件是一个增强的图片显示组件，提供了模糊加载、缩放、骨架屏等功能，为用户提供更好的图片浏览体验。",-1)),e(h,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-image-%E5%9B%BE%E7%89%87--basic"}),t[3]||(t[3]=l("",3)),v(e(s(f),null,null,512),[[y,n.value]]),e(c,null,{default:r(()=>[e(s(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{n.value=!1}),vueCode:s(F)},x({_:2},[a.value?{name:"vue",fn:r(()=>[e(s(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=l("",10))])}}});export{Z as __pageData,V as default};
