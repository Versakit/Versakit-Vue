const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.DIS4ZPw1.js","assets/chunks/theme.DXf4p6wh.js","assets/chunks/framework.dgRUQZ7Z.js"])))=>i.map(i=>d[i]);
import{p as c,D as r,v as p,aj as d,B as u,c as v,o as x,ai as h,a1 as m,G as t,a3 as b,k as e,w as l,ak as g}from"./chunks/framework.dgRUQZ7Z.js";import{O as f,E as T}from"./chunks/index.CtCYMtlW.js";const y=`<script setup lang="ts">
// 直接从包根目录导入
import { Tooltip } from '@versakit/vue'
import '@versakit/vue/style'

// 示例数据
const longText =
  '这是一段较长的提示文本，用于演示文本换行和最大宽度的效果。当文本内容较多时，提示框会自动换行显示。'
<\/script>

<template>
  <div class="space-y-12">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="flex items-center space-x-4">
        <Tooltip content="这是一个基础提示">
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            悬停查看提示
          </div>
        </Tooltip>
      </div>
    </section>

    <!-- 不同位置 -->
    <section>
      <h2 class="text-lg font-medium mb-4">提示位置</h2>
      <div class="grid grid-cols-2 gap-6 max-w-md">
        <Tooltip content="顶部提示" placement="top">
          <div
            class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-center"
          >
            顶部
          </div>
        </Tooltip>

        <Tooltip content="右侧提示" placement="right">
          <div
            class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-center"
          >
            右侧
          </div>
        </Tooltip>

        <Tooltip content="底部提示" placement="bottom">
          <div
            class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-center"
          >
            底部
          </div>
        </Tooltip>

        <Tooltip content="左侧提示" placement="left">
          <div
            class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-center"
          >
            左侧
          </div>
        </Tooltip>
      </div>
    </section>

    <!-- 不同颜色 -->
    <section>
      <h2 class="text-lg font-medium mb-4">提示颜色</h2>
      <div class="flex flex-wrap gap-4">
        <Tooltip content="默认提示" color="default">
          <div class="px-4 py-2 bg-gray-500 text-white rounded cursor-pointer">
            默认
          </div>
        </Tooltip>

        <Tooltip content="主要提示" color="primary">
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            主要
          </div>
        </Tooltip>

        <Tooltip content="成功提示" color="success">
          <div class="px-4 py-2 bg-green-500 text-white rounded cursor-pointer">
            成功
          </div>
        </Tooltip>

        <Tooltip content="警告提示" color="warning">
          <div
            class="px-4 py-2 bg-yellow-500 text-white rounded cursor-pointer"
          >
            警告
          </div>
        </Tooltip>

        <Tooltip content="危险提示" color="danger">
          <div class="px-4 py-2 bg-red-500 text-white rounded cursor-pointer">
            危险
          </div>
        </Tooltip>
      </div>
    </section>

    <!-- 不同触发方式 -->
    <section>
      <h2 class="text-lg font-medium mb-4">触发方式</h2>
      <div class="flex items-center space-x-4">
        <Tooltip content="鼠标悬停触发" trigger="hover">
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            悬停触发
          </div>
        </Tooltip>

        <Tooltip content="获取焦点触发" trigger="focus">
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            焦点触发(点击)
          </button>
        </Tooltip>

        <Tooltip content="悬停或焦点都可触发" trigger="both">
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            双重触发
          </button>
        </Tooltip>
      </div>
    </section>

    <!-- 延迟显示和隐藏 -->
    <section>
      <h2 class="text-lg font-medium mb-4">显示延迟</h2>
      <div class="flex items-center space-x-4">
        <Tooltip content="延迟500毫秒显示" :openDelay="500">
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            延迟显示
          </div>
        </Tooltip>

        <Tooltip content="延迟500毫秒隐藏" :closeDelay="500">
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            延迟隐藏
          </div>
        </Tooltip>
      </div>
    </section>

    <!-- 跟随鼠标 -->
    <section>
      <h2 class="text-lg font-medium mb-4">跟随鼠标</h2>
      <div class="flex items-center space-x-4">
        <Tooltip content="跟随鼠标移动" :followCursor="true">
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            移动鼠标试试
          </div>
        </Tooltip>
      </div>
    </section>

    <!-- 自定义偏移量 -->
    <section>
      <h2 class="text-lg font-medium mb-4">自定义偏移量</h2>
      <div class="flex items-center space-x-4">
        <Tooltip content="距离元素20px" :offset="20">
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            大偏移
          </div>
        </Tooltip>

        <Tooltip content="距离元素4px" :offset="4">
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            小偏移
          </div>
        </Tooltip>
      </div>
    </section>

    <!-- 最大宽度和长文本 -->
    <section>
      <h2 class="text-lg font-medium mb-4">长文本与最大宽度</h2>
      <div class="flex items-center space-x-4">
        <Tooltip :content="longText" :maxWidth="200">
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            长文本提示
          </div>
        </Tooltip>
      </div>
    </section>

    <!-- 自定义内容 -->
    <section>
      <h2 class="text-lg font-medium mb-4">自定义内容</h2>
      <div class="flex items-center space-x-4">
        <Tooltip>
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            富文本提示
          </div>
          <template #content>
            <div class="p-1">
              <div class="font-bold text-yellow-300">自定义标题</div>
              <p class="mt-1">
                这里可以放
                <span class="text-red-300">任意HTML内容</span>
              </p>
            </div>
          </template>
        </Tooltip>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">禁用状态</h2>
      <div class="flex items-center space-x-4">
        <Tooltip content="这个提示不会显示" disabled>
          <div
            class="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed"
          >
            禁用提示
          </div>
        </Tooltip>
      </div>
    </section>

    <!-- 无箭头 -->
    <section>
      <h2 class="text-lg font-medium mb-4">无箭头样式</h2>
      <div class="flex items-center space-x-4">
        <Tooltip content="这个提示没有箭头" :arrow="false">
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            无箭头提示
          </div>
        </Tooltip>
      </div>
    </section>
  </div>
</template>
`,C=JSON.parse('{"title":"Tooltip","description":"","frontmatter":{},"headers":[],"relativePath":"components/tooltip/index.md","filePath":"components/tooltip/index.md"}'),w={name:"components/tooltip/index.md"},D=Object.assign(w,{setup(_){const i=c(!0),o=r();return p(async()=>{o.value=(await d(async()=>{const{default:s}=await import("./chunks/index.DIS4ZPw1.js");return{default:s}},__vite__mapDeps([0,1,2]))).default}),(s,n)=>{const a=u("ClientOnly");return x(),v("div",null,[n[1]||(n[1]=h('<h1 id="tooltip" tabindex="-1">Tooltip <a class="header-anchor" href="#tooltip" aria-label="Permalink to &quot;Tooltip&quot;">​</a></h1><p>Tooltip 是一种轻量级信息提示组件，当用户悬停、聚焦或点击元素时，会在其附近显示简短说明文本。它以半透明气泡形式呈现，不干扰主界面，用于提供即时的上下文帮助或补充信息，常见于图标解释、功能说明等场景。</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Tooltip } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@versakit/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>',5)),m(t(e(f),null,null,512),[[b,i.value]]),t(a,null,{default:l(()=>[t(e(T),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[0]||(n[0]=()=>{i.value=!1}),vueCode:e(y)},g({_:2},[o.value?{name:"vue",fn:l(()=>[t(e(o))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{C as __pageData,D as default};
