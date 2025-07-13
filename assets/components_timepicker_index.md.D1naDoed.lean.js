const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.D3acKQ6h.js","assets/chunks/theme.DiT8x9tc.js","assets/chunks/framework.BLoOr4aB.js"])))=>i.map(i=>d[i]);
import{p as h,D as v,v as u,am as p,C as s,c as b,o as k,j as a,G as e,al as l,a0 as f,a as T,a3 as _,k as d,w as c,an as y}from"./chunks/framework.BLoOr4aB.js";import{O as g,E as x}from"./chunks/index.ClrLodpm.js";const P=`<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h3 class="text-lg font-medium mb-4">基础用法</h3>
      <div class="max-w-sm">
        <TimePicker v-model="selectedTime" />
      </div>
      <div class="mt-2">当前选择的时间: {{ selectedTime || '未选择' }}</div>
    </section>

    <!-- 12小时制 -->
    <section>
      <h3 class="text-lg font-medium mb-4">12小时制</h3>
      <div class="max-w-sm">
        <TimePicker v-model="time12h" format="12h" />
      </div>
      <div class="mt-2">当前选择的时间: {{ time12h || '未选择' }}</div>
    </section>

    <!-- 显示秒选择器 -->
    <section>
      <h3 class="text-lg font-medium mb-4">显示秒选择器</h3>
      <div class="max-w-sm">
        <TimePicker v-model="timeWithSeconds" :showSeconds="true" />
      </div>
      <div class="mt-2">当前选择的时间: {{ timeWithSeconds || '未选择' }}</div>
    </section>

    <!-- 自定义步长 -->
    <section>
      <h3 class="text-lg font-medium mb-4">自定义步长</h3>
      <div class="max-w-sm">
        <TimePicker
          v-model="timeWithSteps"
          :hourStep="2"
          :minuteStep="15"
          :secondStep="30"
          :showSeconds="true"
        />
      </div>
      <div class="mt-2">
        <div>当前选择的时间: {{ timeWithSteps || '未选择' }}</div>
        <div>小时步长: 2, 分钟步长: 15, 秒步长: 30</div>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h3 class="text-lg font-medium mb-4">禁用状态</h3>
      <div class="flex flex-wrap gap-8">
        <div>
          <div class="max-w-sm">
            <TimePicker v-model="disabledTime" disabled />
          </div>
          <div class="mt-2">禁用状态</div>
        </div>
        <div>
          <div class="max-w-sm">
            <TimePicker v-model="readonlyTime" readonly />
          </div>
          <div class="mt-2">只读状态</div>
        </div>
      </div>
    </section>

    <!-- 不可清空 -->
    <section>
      <h3 class="text-lg font-medium mb-4">不可清空</h3>
      <div class="max-w-sm">
        <TimePicker v-model="nonClearableTime" :clearable="false" />
      </div>
      <div class="mt-2">
        <div>当前选择的时间: {{ nonClearableTime || '未选择' }}</div>
      </div>
    </section>

    <!-- 使用Date对象 -->
    <section>
      <h3 class="text-lg font-medium mb-4">使用Date对象</h3>
      <div class="max-w-sm">
        <TimePicker v-model="dateTime" />
      </div>
      <div class="mt-2">
        <div>
          当前选择的时间:
          {{ dateTime ? dateTime.toLocaleTimeString() : '未选择' }}
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimePicker } from '@versakit/vue'

// 基础用法
const selectedTime = ref('12:30')

// 12小时制
const time12h = ref('02:30 PM')

// 显示秒选择器
const timeWithSeconds = ref('12:30:45')

// 自定义步长
const timeWithSteps = ref('12:30:00')

// 禁用状态
const disabledTime = ref('12:30')
const readonlyTime = ref('12:30')

// 不可清空
const nonClearableTime = ref('12:30')

// 使用Date对象
const dateTime = ref(new Date())
<\/script>
`,E=JSON.parse('{"title":"TimePicker 时间选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/timepicker/index.md","filePath":"components/timepicker/index.md"}'),S={name:"components/timepicker/index.md"},C=Object.assign(S,{setup(W){const i=h(!0),n=v();return u(async()=>{n.value=(await p(async()=>{const{default:o}=await import("./chunks/index.D3acKQ6h.js");return{default:o}},__vite__mapDeps([0,1,2]))).default}),(o,t)=>{const r=s("Link"),m=s("ClientOnly");return k(),b("div",null,[t[1]||(t[1]=a("h1",{id:"timepicker-时间选择器",tabindex:"-1"},[T("TimePicker 时间选择器 "),a("a",{class:"header-anchor",href:"#timepicker-时间选择器","aria-label":'Permalink to "TimePicker 时间选择器"'},"​")],-1)),t[2]||(t[2]=a("p",null,"TimePicker 时间选择器用于让用户选择特定的时间点，支持12小时制和24小时制，可自定义时间步长，提供小时、分钟和秒的精确选择。",-1)),e(r,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-timepicker-%E6%97%B6%E9%97%B4%E9%80%89%E6%8B%A9%E5%99%A8--basic"}),t[3]||(t[3]=l("",3)),f(e(d(g),null,null,512),[[_,i.value]]),e(m,null,{default:c(()=>[e(d(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{i.value=!1}),vueCode:d(P)},y({_:2},[n.value?{name:"vue",fn:c(()=>[e(d(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=l("",7))])}}});export{E as __pageData,C as default};
