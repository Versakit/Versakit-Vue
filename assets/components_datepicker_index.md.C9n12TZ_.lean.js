const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.5BQRBD2e.js","assets/chunks/theme.DAOLVbAS.js","assets/chunks/framework.DLuSxX4C.js"])))=>i.map(i=>d[i]);
import{p as h,D as v,v as D,al as u,C as l,c as p,o as k,j as n,G as e,ak as s,a0 as b,a as f,a3 as y,k as a,w as r,am as g}from"./chunks/framework.DLuSxX4C.js";import{O as _,E as x}from"./chunks/index.Bhh2hZnL.js";const P=`<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h3 class="text-lg font-medium mb-4">基础用法</h3>
      <div class="max-w-sm">
        <DatePicker v-model="selectedDate" />
      </div>
      <div class="mt-2">
        当前选择的日期:
        {{ selectedDate ? selectedDate.toLocaleDateString() : '未选择' }}
      </div>
    </section>

    <!-- 日期范围限制 -->
    <section>
      <h3 class="text-lg font-medium mb-4">日期范围限制</h3>
      <div class="max-w-sm">
        <DatePicker v-model="rangeDate" :min="minDate" :max="maxDate" />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期:
          {{ rangeDate ? rangeDate.toLocaleDateString() : '未选择' }}
        </div>
        <div>
          可选范围: {{ minDate.toLocaleDateString() }} 至
          {{ maxDate.toLocaleDateString() }}
        </div>
      </div>
    </section>

    <!-- 自定义格式 -->
    <section>
      <h3 class="text-lg font-medium mb-4">自定义格式</h3>
      <div class="max-w-sm">
        <DatePicker
          v-model="formatDate"
          format="yyyy年MM月dd日"
          placeholder="请选择日期"
        />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期:
          {{ formatDate ? formatDate.toLocaleDateString() : '未选择' }}
        </div>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h3 class="text-lg font-medium mb-4">禁用状态</h3>
      <div class="flex flex-wrap gap-8">
        <div>
          <div class="max-w-sm">
            <DatePicker v-model="disabledDate" disabled />
          </div>
          <div class="mt-2">禁用状态</div>
        </div>
        <div>
          <div class="max-w-sm">
            <DatePicker v-model="readonlyDate" readonly />
          </div>
          <div class="mt-2">只读状态</div>
        </div>
      </div>
    </section>

    <!-- 不可清空 -->
    <section>
      <h3 class="text-lg font-medium mb-4">不可清空</h3>
      <div class="max-w-sm">
        <DatePicker v-model="nonClearableDate" :clearable="false" />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期:
          {{
            nonClearableDate ? nonClearableDate.toLocaleDateString() : '未选择'
          }}
        </div>
      </div>
    </section>

    <!-- 本地化 -->
    <section>
      <h3 class="text-lg font-medium mb-4">本地化</h3>
      <div class="max-w-sm">
        <DatePicker v-model="localeDate" locale="zh-CN" />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期:
          {{ localeDate ? localeDate.toLocaleDateString() : '未选择' }}
        </div>
        <div>本地化: 中文</div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DatePicker } from '@versakit/vue'

// 基础用法
const selectedDate = ref(new Date())

// 日期范围限制
const rangeDate = ref(new Date())
const today = new Date()
const minDate = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
)
const maxDate = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + 7,
)

// 自定义格式
const formatDate = ref(new Date())

// 禁用状态
const disabledDate = ref(new Date())
const readonlyDate = ref(new Date())

// 不可清空
const nonClearableDate = ref(new Date())

// 本地化
const localeDate = ref(new Date())
<\/script>
`,W=JSON.parse('{"title":"DatePicker 日期选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/datepicker/index.md","filePath":"components/datepicker/index.md"}'),w={name:"components/datepicker/index.md"},A=Object.assign(w,{setup(V){const o=h(!0),d=v();return D(async()=>{d.value=(await u(async()=>{const{default:i}=await import("./chunks/index.5BQRBD2e.js");return{default:i}},__vite__mapDeps([0,1,2]))).default}),(i,t)=>{const c=l("Link"),m=l("ClientOnly");return k(),p("div",null,[t[1]||(t[1]=n("h1",{id:"datepicker-日期选择器",tabindex:"-1"},[f("DatePicker 日期选择器 "),n("a",{class:"header-anchor",href:"#datepicker-日期选择器","aria-label":'Permalink to "DatePicker 日期选择器"'},"​")],-1)),t[2]||(t[2]=n("p",null,"DatePicker 日期选择器用于让用户通过可视化界面选择日期，提供下拉式日历选择，支持日期范围限制和格式化显示。",-1)),e(c,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-datepicker-%E6%97%A5%E6%9C%9F%E9%80%89%E6%8B%A9%E5%99%A8--basic"}),t[3]||(t[3]=s("",3)),b(e(a(_),null,null,512),[[y,o.value]]),e(m,null,{default:r(()=>[e(a(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{o.value=!1}),vueCode:a(P)},g({_:2},[d.value?{name:"vue",fn:r(()=>[e(a(d))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=s("",7))])}}});export{W as __pageData,A as default};
