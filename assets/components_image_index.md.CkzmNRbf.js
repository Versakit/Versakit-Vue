const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.BAj2kN0d.js","assets/chunks/theme.DVizTi_Y.js","assets/chunks/framework.DcQCqlea.js"])))=>i.map(i=>d[i]);
import{p,D as m,v as g,al as u,C as o,c as k,o as b,j as d,G as e,a5 as l,a0 as v,a as E,a3 as y,k as s,w as r,am as x}from"./chunks/framework.DcQCqlea.js";import{O as f,E as _}from"./chunks/index.S9QYeH19.js";const F=`<script setup lang="ts">
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
`,Z=JSON.parse('{"title":"Image 图片","description":"","frontmatter":{},"headers":[],"relativePath":"components/image/index.md","filePath":"components/image/index.md"}'),C={name:"components/image/index.md"},V=Object.assign(C,{setup(I){const n=p(!0),a=m();return g(async()=>{a.value=(await u(async()=>{const{default:i}=await import("./chunks/index.BAj2kN0d.js");return{default:i}},__vite__mapDeps([0,1,2]))).default}),(i,t)=>{const h=o("Link"),c=o("ClientOnly");return b(),k("div",null,[t[1]||(t[1]=d("h1",{id:"image-图片",tabindex:"-1"},[E("Image 图片 "),d("a",{class:"header-anchor",href:"#image-图片","aria-label":'Permalink to "Image 图片"'},"​")],-1)),t[2]||(t[2]=d("p",null,"Image 组件是一个增强的图片显示组件，提供了模糊加载、缩放、骨架屏等功能，为用户提供更好的图片浏览体验。",-1)),e(h,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-image-%E5%9B%BE%E7%89%87--basic"}),t[3]||(t[3]=l('<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Image } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@versakit/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>',3)),v(e(s(f),null,null,512),[[y,n.value]]),e(c,null,{default:r(()=>[e(s(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{n.value=!1}),vueCode:s(F)},x({_:2},[a.value?{name:"vue",fn:r(()=>[e(s(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=l(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>src</td><td>图片源地址</td><td><code>string</code></td><td>-</td></tr><tr><td>alt</td><td>图片加载失败时的替代文本</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>width</td><td>图片宽度</td><td><code>string | number</code></td><td><code>&#39;auto&#39;</code></td></tr><tr><td>height</td><td>图片高度</td><td><code>string | number</code></td><td><code>&#39;auto&#39;</code></td></tr><tr><td>fit</td><td>图片填充模式</td><td><code>&#39;fill&#39; | &#39;contain&#39; | &#39;cover&#39; | &#39;none&#39; | &#39;scale-down&#39;</code></td><td><code>&#39;cover&#39;</code></td></tr><tr><td>blurred</td><td>是否启用模糊加载效果</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>blurAmount</td><td>模糊加载的模糊度</td><td><code>number</code></td><td><code>10</code></td></tr><tr><td>loading</td><td>图片加载策略</td><td><code>&#39;lazy&#39; | &#39;eager&#39;</code></td><td><code>&#39;lazy&#39;</code></td></tr><tr><td>isZoomable</td><td>是否启用缩放功能</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>isZoomed</td><td>是否当前处于缩放状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>zoomScale</td><td>缩放比例</td><td><code>number</code></td><td><code>1.5</code></td></tr><tr><td>skeleton</td><td>是否显示骨架屏</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>skeletonColor</td><td>骨架屏背景色</td><td><code>string</code></td><td>-</td></tr><tr><td>radius</td><td>图片圆角</td><td><code>&#39;none&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39; | &#39;full&#39;</code></td><td><code>&#39;md&#39;</code></td></tr><tr><td>unstyled</td><td>是否禁用默认样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pt</td><td>自定义样式传递</td><td><code>ImagePT</code></td><td>-</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>load</td><td>图片加载成功时触发</td><td><code>(event: Event) =&gt; void</code></td></tr><tr><td>error</td><td>图片加载失败时触发</td><td><code>(event: Event) =&gt; void</code></td></tr><tr><td>zoom</td><td>图片缩放状态变化时触发</td><td><code>(zoomed: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>默认插槽，通常不需要使用</td></tr><tr><td>error</td><td>图片加载失败时显示的内容</td></tr><tr><td>zoom-icon</td><td>缩放图标的自定义内容</td></tr></tbody></table><h3 id="样式定制" tabindex="-1">样式定制 <a class="header-anchor" href="#样式定制" aria-label="Permalink to &quot;样式定制&quot;">​</a></h3><p>可以通过 <code>pt</code> 属性传递自定义样式：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Image</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;...&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		root: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;custom-root-class&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		img: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;custom-img-class&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		skeleton: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;custom-skeleton-class&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		overlay: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;custom-overlay-class&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div>`,10))])}}});export{Z as __pageData,V as default};
