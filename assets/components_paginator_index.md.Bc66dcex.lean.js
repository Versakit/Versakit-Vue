const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.BIBcyiK7.js","assets/chunks/theme.Q5iyIVpb.js","assets/chunks/framework.CNU19GN3.js"])))=>i.map(i=>d[i]);
import{p as k,D as g,v as c,aj as u,C as l,c as m,o as y,j as n,G as a,ai as r,a0 as b,a as v,a3 as F,k as s,w as h,ak as P}from"./chunks/framework.CNU19GN3.js";import{O as x,E as B}from"./chunks/index.RciRc0iM.js";const f=`<template>
  <div class="space-y-8">
    <!-- 基础分页器 -->
    <section>
      <h3 class="text-lg font-medium mb-4">基础分页器</h3>
      <Paginator :totalPages="10" />
    </section>

    <!-- 分页器大小 -->
    <section>
      <h3 class="text-lg font-medium mb-4">分页器大小</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">小尺寸</p>
          <Paginator :totalPages="10" size="sm" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">中尺寸</p>
          <Paginator :totalPages="10" size="md" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">大尺寸</p>
          <Paginator :totalPages="10" size="lg" />
        </div>
      </div>
    </section>

    <!-- 分页器变体 -->
    <section>
      <h3 class="text-lg font-medium mb-4">分页器变体</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">默认样式</p>
          <Paginator :totalPages="10" variant="default" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">轮廓样式</p>
          <Paginator :totalPages="10" variant="outline" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">文本样式</p>
          <Paginator :totalPages="10" variant="text" />
        </div>
      </div>
    </section>

    <!-- 分页器形状 -->
    <section>
      <h3 class="text-lg font-medium mb-4">分页器形状</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">方形</p>
          <Paginator :totalPages="10" shape="square" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">圆角</p>
          <Paginator :totalPages="10" shape="rounded" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">圆形</p>
          <Paginator :totalPages="10" shape="circle" />
        </div>
      </div>
    </section>

    <!-- 可见页码数量 -->
    <section>
      <h3 class="text-lg font-medium mb-4">可见页码数量</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">显示3个页码</p>
          <Paginator :totalPages="20" :visiblePageCount="3" :modelValue="10" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">显示5个页码</p>
          <Paginator :totalPages="20" :visiblePageCount="5" :modelValue="10" />
        </div>
      </div>
    </section>

    <!-- 带页码跳转 -->
    <section>
      <h3 class="text-lg font-medium mb-4">带页码跳转</h3>
      <Paginator :totalPages="100" showJumper />
    </section>

    <!-- 受控分页器 -->
    <section>
      <h3 class="text-lg font-medium mb-4">受控分页器</h3>
      <div class="space-y-4">
        <p>当前页码: {{ currentPage }}</p>
        <Paginator :totalPages="10" v-model="currentPage" />
        <div class="flex gap-2">
          <button
            @click="currentPage = Math.max(1, currentPage - 1)"
            class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            上一页
          </button>
          <button
            @click="currentPage = Math.min(10, currentPage + 1)"
            class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            下一页
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Paginator } from '@versakit/vue'

const currentPage = ref(1)
<\/script>
`,D=JSON.parse('{"title":"Paginator","description":"","frontmatter":{},"headers":[],"relativePath":"components/paginator/index.md","filePath":"components/paginator/index.md"}'),C={name:"components/paginator/index.md"},V=Object.assign(C,{setup(_){const e=k(!0),i=g();return c(async()=>{i.value=(await u(async()=>{const{default:d}=await import("./chunks/index.BIBcyiK7.js");return{default:d}},__vite__mapDeps([0,1,2]))).default}),(d,t)=>{const p=l("Link"),o=l("ClientOnly");return y(),m("div",null,[t[1]||(t[1]=n("h1",{id:"paginator",tabindex:"-1"},[v("Paginator "),n("a",{class:"header-anchor",href:"#paginator","aria-label":'Permalink to "Paginator"'},"​")],-1)),t[2]||(t[2]=n("p",null,"Paginator 是一个分页导航组件，用于在大量数据中进行页面切换和导航。它提供了多种样式变体和自定义配置，支持不同的分页场景，如表格数据分页、内容列表分页等。",-1)),a(p,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-paginator-%E5%88%86%E9%A1%B5%E5%99%A8--basic"}),t[3]||(t[3]=r("",3)),b(a(s(x),null,null,512),[[F,e.value]]),a(o,null,{default:h(()=>[a(s(B),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{e.value=!1}),vueCode:s(f)},P({_:2},[i.value?{name:"vue",fn:h(()=>[a(s(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=r("",10))])}}});export{D as __pageData,V as default};
