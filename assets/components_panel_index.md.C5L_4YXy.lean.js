const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.Cm4j3ciU.js","assets/chunks/theme.Bvmz8KJB.js","assets/chunks/framework.DcQCqlea.js"])))=>i.map(i=>d[i]);
import{p as c,D as k,v as u,al as g,C as d,c as m,o as b,j as s,G as a,a5 as r,a0 as v,a as y,a3 as f,k as e,w as o,am as _}from"./chunks/framework.DcQCqlea.js";import{O as P,E as x}from"./chunks/index.S9QYeH19.js";const F=`<template>
  <div class="space-y-8">
    <!-- 基础面板 -->
    <section>
      <h3 class="text-lg font-medium mb-4">基础面板</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Panel title="基础面板">
          <p>这是一个基础面板的内容区域。</p>
        </Panel>
        <Panel title="带边框面板" variant="bordered">
          <p>这是一个带边框面板的内容区域。</p>
        </Panel>
      </div>
    </section>

    <!-- 面板变体 -->
    <section>
      <h3 class="text-lg font-medium mb-4">面板变体</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Panel title="默认面板" variant="default">
          <p>这是默认样式的面板。</p>
        </Panel>
        <Panel title="带边框面板" variant="bordered">
          <p>这是带边框的面板。</p>
        </Panel>
        <Panel title="阴影面板" variant="elevated">
          <p>这是带阴影的面板。</p>
        </Panel>
      </div>
    </section>

    <!-- 可折叠面板 -->
    <section>
      <h3 class="text-lg font-medium mb-4">可折叠面板</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Panel title="可折叠面板" collapsible>
          <p>点击面板头部可以折叠/展开此内容。</p>
          <p class="mt-2">这是可折叠面板的更多内容。</p>
        </Panel>
        <Panel title="默认折叠面板" collapsible defaultCollapsed>
          <p>这个面板默认是折叠的，点击面板头部可以展开。</p>
          <p class="mt-2">这是默认折叠面板的更多内容。</p>
        </Panel>
      </div>
    </section>

    <!-- 不同内边距 -->
    <section>
      <h3 class="text-lg font-medium mb-4">不同内边距</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">无内边距</p>
          <Panel title="无内边距" padding="none" variant="bordered">
            <p>这是无内边距的面板内容。</p>
          </Panel>
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">大内边距</p>
          <Panel title="大内边距" padding="lg" variant="bordered">
            <p>这是大内边距的面板内容。</p>
          </Panel>
        </div>
      </div>
    </section>

    <!-- 自定义标题和图标 -->
    <section>
      <h3 class="text-lg font-medium mb-4">自定义标题和图标</h3>
      <Panel collapsible>
        <template #title>
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
              ></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span class="text-blue-600 font-bold">自定义标题</span>
          </div>
        </template>
        <p>这个面板使用了自定义标题插槽。</p>
      </Panel>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Panel } from '@versakit/vue'
<\/script>
`,D=JSON.parse('{"title":"Panel","description":"","frontmatter":{},"headers":[],"relativePath":"components/panel/index.md","filePath":"components/panel/index.md"}'),C={name:"components/panel/index.md"},V=Object.assign(C,{setup(A){const i=c(!0),n=k();return u(async()=>{n.value=(await g(async()=>{const{default:l}=await import("./chunks/index.Cm4j3ciU.js");return{default:l}},__vite__mapDeps([0,1,2]))).default}),(l,t)=>{const p=d("Link"),h=d("ClientOnly");return b(),m("div",null,[t[1]||(t[1]=s("h1",{id:"panel",tabindex:"-1"},[y("Panel "),s("a",{class:"header-anchor",href:"#panel","aria-label":'Permalink to "Panel"'},"​")],-1)),t[2]||(t[2]=s("p",null,"Panel 是一个可折叠的内容容器组件，用于组织和展示信息，支持多种样式变体和自定义配置。它可以有效地节省页面空间，提高用户体验，常用于分组展示相关内容、FAQ、设置面板等场景。",-1)),a(p,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-panel-%E9%9D%A2%E6%9D%BF--basic"}),t[3]||(t[3]=r("",3)),v(a(e(P),null,null,512),[[f,i.value]]),a(h,null,{default:o(()=>[a(e(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{i.value=!1}),vueCode:e(F)},_({_:2},[n.value?{name:"vue",fn:o(()=>[a(e(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=r("",10))])}}});export{D as __pageData,V as default};
