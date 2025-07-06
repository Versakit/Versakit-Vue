const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.C5mTdAyP.js","assets/chunks/theme.frOZSD7M.js","assets/chunks/framework.Cpyw2Gc9.js"])))=>i.map(i=>d[i]);
import{p as c,D as u,v as p,aj as b,B as o,c as v,o as g,j as a,G as n,ai as h,a1 as f,a as y,a2 as k,k as t,w as d,ak as _}from"./chunks/framework.Cpyw2Gc9.js";import{O as V,E as x}from"./chunks/index.CSC85q1C.js";const O=`<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from '@versakit/vue'
import '@versakit/vue/style'

// 基础用法示例
const basicValue = ref('选项1')
const basicOptions = ['选项1', '选项2', '选项3']

// 对象选项示例
const objectValue = ref('apple')
const objectOptions = [
  { value: 'apple', label: '苹果' },
  { value: 'banana', label: '香蕉' },
  { value: 'orange', label: '橙子' },
]

// 禁用选项示例
const disabledOptionValue = ref('a')
const disabledOptionOptions = [
  { value: 'a', label: '选项A' },
  { value: 'b', label: '选项B', disabled: true },
  { value: 'c', label: '选项C' },
]

// 不同大小示例
const sizeValue = ref('md')
const sizeOptions = [
  { value: 'sm', label: '小号' },
  { value: 'md', label: '中号' },
  { value: 'lg', label: '大号' },
]

// 禁用状态示例
const disabledValue = ref('1')
const isDisabled = ref(false)

// 块级显示示例
const blockValue = ref('left')
const blockOptions = [
  { value: 'left', label: '左对齐' },
  { value: 'center', label: '居中对齐' },
  { value: 'right', label: '右对齐' },
]

// 数字选项示例
const numberValue = ref(1)
const numberOptions = [1, 2, 3, 4, 5]

const toggleDisabled = () => {
  isDisabled.value = !isDisabled.value
}
<\/script>

<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <Segmented v-model="basicValue" :options="basicOptions" />
      <div class="mt-2 text-sm text-gray-500">当前选中: {{ basicValue }}</div>
    </section>

    <!-- 对象选项 -->
    <section>
      <h2 class="text-lg font-medium mb-4">对象选项</h2>
      <Segmented v-model="objectValue" :options="objectOptions" />
      <div class="mt-2 text-sm text-gray-500">当前选中: {{ objectValue }}</div>
    </section>

    <!-- 禁用选项 -->
    <section>
      <h2 class="text-lg font-medium mb-4">禁用选项</h2>
      <Segmented
        v-model="disabledOptionValue"
        :options="disabledOptionOptions"
      />
      <div class="mt-2 text-sm text-gray-500">
        当前选中: {{ disabledOptionValue }}
      </div>
    </section>

    <!-- 不同大小 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同大小</h2>
      <div class="space-y-4">
        <div>
          <Segmented v-model="sizeValue" :options="sizeOptions" size="sm" />
          <span class="ml-2 text-sm text-gray-500">小号 (sm)</span>
        </div>
        <div>
          <Segmented v-model="sizeValue" :options="sizeOptions" size="md" />
          <span class="ml-2 text-sm text-gray-500">中号 (md)</span>
        </div>
        <div>
          <Segmented v-model="sizeValue" :options="sizeOptions" size="lg" />
          <span class="ml-2 text-sm text-gray-500">大号 (lg)</span>
        </div>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">禁用状态</h2>
      <div class="space-y-4">
        <Segmented
          v-model="disabledValue"
          :options="['1', '2', '3']"
          :disabled="isDisabled"
        />
        <div>
          <button
            @click="toggleDisabled"
            class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            {{ isDisabled ? '启用' : '禁用' }}
          </button>
        </div>
      </div>
    </section>

    <!-- 块级显示 -->
    <section>
      <h2 class="text-lg font-medium mb-4">块级显示</h2>
      <Segmented v-model="blockValue" :options="blockOptions" block />
    </section>

    <!-- 数字选项 -->
    <section>
      <h2 class="text-lg font-medium mb-4">数字选项</h2>
      <Segmented v-model="numberValue" :options="numberOptions" />
      <div class="mt-2 text-sm text-gray-500">
        当前选中: {{ numberValue }} (类型: {{ typeof numberValue }})
      </div>
    </section>
  </div>
</template>
`,W=JSON.parse('{"title":"Segmented","description":"","frontmatter":{},"headers":[],"relativePath":"components/segmented/index.md","filePath":"components/segmented/index.md"}'),S={name:"components/segmented/index.md"},A=Object.assign(S,{setup(E){const l=c(!0),s=u();return p(async()=>{s.value=(await b(async()=>{const{default:i}=await import("./chunks/index.C5mTdAyP.js");return{default:i}},__vite__mapDeps([0,1,2]))).default}),(i,e)=>{const m=o("Link"),r=o("ClientOnly");return g(),v("div",null,[e[1]||(e[1]=a("h1",{id:"segmented",tabindex:"-1"},[y("Segmented "),a("a",{class:"header-anchor",href:"#segmented","aria-label":'Permalink to "Segmented"'},"​")],-1)),e[2]||(e[2]=a("p",null,"Segmented 是一种水平排列的选项卡控件，用于在多个互斥选项之间进行快速切换。它将相关操作或视图分类展示，用户通过点击选项即可触发对应功能，界面简洁且交互效率高。",-1)),n(m,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-segmented-%E5%88%86%E6%AE%B5%E6%8E%A7%E5%88%B6%E5%99%A8--basic"}),e[3]||(e[3]=h('<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Segmented } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@versakit/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>',3)),f(n(t(V),null,null,512),[[k,l.value]]),n(r,null,{default:d(()=>[n(t(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:t(O)},_({_:2},[s.value?{name:"vue",fn:d(()=>[n(t(s))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{W as __pageData,A as default};
