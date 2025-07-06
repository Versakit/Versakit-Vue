const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.nKfn33a5.js","assets/chunks/theme.frOZSD7M.js","assets/chunks/framework.Cpyw2Gc9.js"])))=>i.map(i=>d[i]);
import{p as m,D as v,v as u,aj as p,B as s,c as D,o as b,j as n,G as e,ai as i,a1 as f,a as _,a2 as y,k as a,w as r,ak as k}from"./chunks/framework.Cpyw2Gc9.js";import{O as g,E as x}from"./chunks/index.CSC85q1C.js";const C=`<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h3 class="text-lg font-medium mb-4">基础用法</h3>
      <div class="max-w-sm">
        <Calendar v-model="selectedDate" />
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
        <Calendar v-model="rangeDate" :min="minDate" :max="maxDate" />
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

    <!-- 周起始日 -->
    <section>
      <h3 class="text-lg font-medium mb-4">周起始日</h3>
      <div class="max-w-sm">
        <Calendar v-model="weekStartDate" :firstDayOfWeek="1" />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期:
          {{ weekStartDate ? weekStartDate.toLocaleDateString() : '未选择' }}
        </div>
        <div>周起始日: 周一</div>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h3 class="text-lg font-medium mb-4">禁用状态</h3>
      <div class="flex flex-wrap gap-8">
        <div>
          <div class="max-w-sm">
            <Calendar v-model="disabledDate" disabled />
          </div>
          <div class="mt-2">禁用状态</div>
        </div>
        <div>
          <div class="max-w-sm">
            <Calendar v-model="readonlyDate" readonly />
          </div>
          <div class="mt-2">只读状态</div>
        </div>
      </div>
    </section>

    <!-- 本地化 -->
    <section>
      <h3 class="text-lg font-medium mb-4">本地化</h3>
      <div class="max-w-sm">
        <Calendar v-model="localeDate" locale="zh-CN" />
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
import { Calendar } from '@versakit/vue'

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

// 周起始日
const weekStartDate = ref(new Date())

// 禁用状态
const disabledDate = ref(new Date())
const readonlyDate = ref(new Date())

// 本地化
const localeDate = ref(new Date())
<\/script>
`,W=JSON.parse('{"title":"Calendar 日历","description":"","frontmatter":{},"headers":[],"relativePath":"components/calendar/index.md","filePath":"components/calendar/index.md"}'),w={name:"components/calendar/index.md"},A=Object.assign(w,{setup(V){const l=m(!0),d=v();return u(async()=>{d.value=(await p(async()=>{const{default:o}=await import("./chunks/index.nKfn33a5.js");return{default:o}},__vite__mapDeps([0,1,2]))).default}),(o,t)=>{const c=s("Link"),h=s("ClientOnly");return b(),D("div",null,[t[1]||(t[1]=n("h1",{id:"calendar-日历",tabindex:"-1"},[_("Calendar 日历 "),n("a",{class:"header-anchor",href:"#calendar-日历","aria-label":'Permalink to "Calendar 日历"'},"​")],-1)),t[2]||(t[2]=n("p",null,"Calendar 日历组件用于展示日期并允许用户进行日期选择，支持月份导航、日期范围限制和多种自定义选项。",-1)),e(c,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-calendar-%E6%97%A5%E5%8E%86--basic"}),t[3]||(t[3]=i("",3)),f(e(a(g),null,null,512),[[y,l.value]]),e(h,null,{default:r(()=>[e(a(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{l.value=!1}),vueCode:a(C)},k({_:2},[d.value?{name:"vue",fn:r(()=>[e(a(d))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=i("",7))])}}});export{W as __pageData,A as default};
