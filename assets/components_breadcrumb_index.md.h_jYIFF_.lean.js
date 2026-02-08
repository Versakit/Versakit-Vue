const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.BvyKbMTW.js","assets/chunks/theme.DBc_9c3I.js","assets/chunks/framework.UiYS8jYT.js"])))=>i.map(i=>d[i]);
import{p as d,D as g,v as y,al as c,C as k,c as o,o as m,j as n,G as i,a5 as e,a0 as u,a as b,a3 as F,k as a,w as p,am as B}from"./chunks/framework.UiYS8jYT.js";import{O as v,E as C}from"./chunks/index.DtJc6mnf.js";const A=`<script setup lang="ts">
import { Breadcrumb, BreadcrumbItem } from '@versakit/vue'
import '@versakit/vue/style'
import { h } from 'vue'

// 自定义图标组件代替第三方包
const ChevronRightIcon = {
  name: 'ChevronRightIcon',
  render() {
    return h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: '16',
        height: '16',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      [
        h('polyline', {
          points: '9 18 15 12 9 6',
        }),
      ],
    )
  },
}
<\/script>

<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="flex gap-6">
        <Breadcrumb>
          <BreadcrumbItem href="/">首页</BreadcrumbItem>
          <BreadcrumbItem href="/components">组件</BreadcrumbItem>
          <BreadcrumbItem>面包屑</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </section>

    <!-- 自定义分隔符 -->
    <section>
      <h2 class="text-lg font-medium mb-4">自定义分隔符</h2>
      <div class="flex gap-6">
        <Breadcrumb separator=">">
          <BreadcrumbItem href="/">首页</BreadcrumbItem>
          <BreadcrumbItem href="/components">组件</BreadcrumbItem>
          <BreadcrumbItem>面包屑</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </section>

    <!-- 图标分隔符 -->
    <section>
      <h2 class="text-lg font-medium mb-4">图标分隔符</h2>
      <div class="flex gap-6">
        <Breadcrumb :separator-icon="ChevronRightIcon">
          <BreadcrumbItem href="/">首页</BreadcrumbItem>
          <BreadcrumbItem href="/components">组件</BreadcrumbItem>
          <BreadcrumbItem>面包屑</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">禁用状态</h2>
      <div class="flex gap-6">
        <Breadcrumb>
          <BreadcrumbItem href="/">首页</BreadcrumbItem>
          <BreadcrumbItem disabled href="/components">组件</BreadcrumbItem>
          <BreadcrumbItem>面包屑</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </section>

    <!-- 激活状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">激活状态</h2>
      <div class="flex gap-6">
        <Breadcrumb>
          <BreadcrumbItem href="/">首页</BreadcrumbItem>
          <BreadcrumbItem href="/components">组件</BreadcrumbItem>
          <BreadcrumbItem active>面包屑</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </section>

    <!-- 自定义样式 -->
    <section>
      <h2 class="text-lg font-medium mb-4">自定义样式</h2>
      <div class="flex gap-6">
        <Breadcrumb :pt="{ root: 'bg-gray-100 p-3 rounded' }">
          <BreadcrumbItem href="/" :pt="{ root: 'text-blue-500' }">
            首页
          </BreadcrumbItem>
          <BreadcrumbItem href="/components">组件</BreadcrumbItem>
          <BreadcrumbItem>面包屑</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </section>

    <!-- 无样式模式 -->
    <section>
      <h2 class="text-lg font-medium mb-4">无样式模式</h2>
      <div class="flex gap-6">
        <Breadcrumb
          unstyled
          :pt="{
            root: 'flex p-2 bg-gray-50 rounded',
            list: 'flex items-center',
          }"
        >
          <BreadcrumbItem
            href="/"
            unstyled
            :pt="{
              root: 'text-blue-600 hover:underline',
              separator: 'mx-2 text-gray-400',
            }"
          >
            首页
          </BreadcrumbItem>
          <BreadcrumbItem
            href="/components"
            unstyled
            :pt="{
              root: 'text-blue-600 hover:underline',
              separator: 'mx-2 text-gray-400',
            }"
          >
            组件
          </BreadcrumbItem>
          <BreadcrumbItem
            unstyled
            :pt="{ root: 'text-gray-800 font-medium', content: 'font-medium' }"
          >
            面包屑
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </section>

    <!-- 自定义分隔符插槽 -->
    <section>
      <h2 class="text-lg font-medium mb-4">自定义分隔符插槽</h2>
      <div class="flex gap-6">
        <Breadcrumb>
          <BreadcrumbItem href="/">
            首页
            <template #separator>
              <span class="text-red-500 mx-2">•</span>
            </template>
          </BreadcrumbItem>
          <BreadcrumbItem href="/components">
            组件
            <template #separator>
              <span class="text-red-500 mx-2">•</span>
            </template>
          </BreadcrumbItem>
          <BreadcrumbItem>面包屑</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </section>
  </div>
</template>
`,I=JSON.parse('{"title":"Breadcrumb 面包屑导航","description":"","frontmatter":{},"headers":[],"relativePath":"components/breadcrumb/index.md","filePath":"components/breadcrumb/index.md"}'),D={name:"components/breadcrumb/index.md"},_=Object.assign(D,{setup(f){const h=d(!0),t=g();return y(async()=>{t.value=(await c(async()=>{const{default:l}=await import("./chunks/index.BvyKbMTW.js");return{default:l}},__vite__mapDeps([0,1,2]))).default}),(l,s)=>{const E=k("Link"),r=k("ClientOnly");return m(),o("div",null,[s[1]||(s[1]=n("h1",{id:"breadcrumb-面包屑导航",tabindex:"-1"},[b("Breadcrumb 面包屑导航 "),n("a",{class:"header-anchor",href:"#breadcrumb-面包屑导航","aria-label":'Permalink to "Breadcrumb 面包屑导航"'},"​")],-1)),s[2]||(s[2]=n("p",null,"面包屑导航用于显示当前页面在网站层级结构中的位置，并提供返回各级的导航能力。",-1)),i(E,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/navigation-breadcrumb--default"}),s[3]||(s[3]=e("",3)),u(i(a(v),null,null,512),[[F,h.value]]),i(r,null,{default:p(()=>[i(a(C),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{h.value=!1}),vueCode:a(A)},B({_:2},[t.value?{name:"vue",fn:p(()=>[i(a(t))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[4]||(s[4]=e("",40))])}}});export{I as __pageData,_ as default};
