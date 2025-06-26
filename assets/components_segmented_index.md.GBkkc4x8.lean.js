const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.BT9qNc6P.js","assets/chunks/theme.DXf4p6wh.js","assets/chunks/framework.dgRUQZ7Z.js"])))=>i.map(i=>d[i]);
import{p as d,D as c,v as m,aj as r,B as u,c as p,o as b,ai as v,a1 as h,G as n,a3 as g,k as t,w as i,ak as f}from"./chunks/framework.dgRUQZ7Z.js";import{O as y,E as _}from"./chunks/index.CtCYMtlW.js";const k=`<script setup lang="ts">
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
`,D=JSON.parse('{"title":"Segmented","description":"","frontmatter":{},"headers":[],"relativePath":"components/segmented/index.md","filePath":"components/segmented/index.md"}'),x={name:"components/segmented/index.md"},W=Object.assign(x,{setup(V){const s=d(!0),a=c();return m(async()=>{a.value=(await r(async()=>{const{default:l}=await import("./chunks/index.BT9qNc6P.js");return{default:l}},__vite__mapDeps([0,1,2]))).default}),(l,e)=>{const o=u("ClientOnly");return b(),p("div",null,[e[1]||(e[1]=v("",5)),h(n(t(y),null,null,512),[[g,s.value]]),n(o,null,{default:i(()=>[n(t(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{s.value=!1}),vueCode:t(k)},f({_:2},[a.value?{name:"vue",fn:i(()=>[n(t(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{D as __pageData,W as default};
