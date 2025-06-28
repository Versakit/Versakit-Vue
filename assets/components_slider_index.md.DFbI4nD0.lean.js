const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.DfTypghC.js","assets/chunks/theme.BRH0OaeS.js","assets/chunks/framework.dgRUQZ7Z.js"])))=>i.map(i=>d[i]);
import{p as d,D as r,v as m,aj as c,B as u,c as v,o as p,ai as h,a1 as f,G as t,a3 as x,k as n,w as i,ak as k}from"./chunks/framework.dgRUQZ7Z.js";import{O as _,E as b}from"./chunks/index.CtCYMtlW.js";const V=`<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from '@versakit/vue'
import '@versakit/vue/style'

// 基础用法示例
const basicValue = ref(50)

// 设置最小值最大值示例
const rangeValue = ref(30)

// 设置步长示例
const stepValue = ref(25)

// 垂直方向示例
const verticalValue = ref(60)

// 禁用状态示例
const disabledValue = ref(70)

// 显示提示示例
const tooltipValue = ref(40)

// 自定义提示示例
const customTooltipValue = ref(85)
const formatTooltip = (value: number) => \`\${value}%\`

// 显示刻度示例
const marksValue = ref(20)

// 自定义刻度示例
const customMarksValue = ref(25)
const marks = {
  0: '0°C',
  25: '25°C',
  50: '50°C',
  75: '75°C',
  100: '100°C',
}
<\/script>

<template>
  <div class="space-y-12">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="w-full max-w-md">
        <Slider v-model="basicValue" />
        <div class="mt-2 text-sm text-gray-500">当前值: {{ basicValue }}</div>
      </div>
    </section>

    <!-- 设置最小值最大值 -->
    <section>
      <h2 class="text-lg font-medium mb-4">设置最小值最大值</h2>
      <div class="w-full max-w-md">
        <Slider v-model="rangeValue" :min="20" :max="80" />
        <div class="mt-2 text-sm text-gray-500">
          当前值: {{ rangeValue }} (范围: 20-80)
        </div>
      </div>
    </section>

    <!-- 设置步长 -->
    <section>
      <h2 class="text-lg font-medium mb-4">设置步长</h2>
      <div class="w-full max-w-md">
        <Slider v-model="stepValue" :step="25" />
        <div class="mt-2 text-sm text-gray-500">
          当前值: {{ stepValue }} (步长: 25)
        </div>
      </div>
    </section>

    <!-- 垂直方向 -->
    <section>
      <h2 class="text-lg font-medium mb-4">垂直方向</h2>
      <div class="h-64">
        <Slider v-model="verticalValue" orientation="vertical" />
        <div class="mt-2 text-sm text-gray-500">
          当前值: {{ verticalValue }}
        </div>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">禁用状态</h2>
      <div class="w-full max-w-md">
        <Slider v-model="disabledValue" disabled />
        <div class="mt-2 text-sm text-gray-500">
          当前值: {{ disabledValue }}
        </div>
      </div>
    </section>

    <!-- 显示提示 -->
    <section>
      <h2 class="text-lg font-medium mb-4">显示提示</h2>
      <div class="w-full max-w-md">
        <Slider v-model="tooltipValue" show-tooltip />
        <div class="mt-2 text-sm text-gray-500">当前值: {{ tooltipValue }}</div>
      </div>
    </section>

    <!-- 自定义提示 -->
    <section>
      <h2 class="text-lg font-medium mb-4">自定义提示</h2>
      <div class="w-full max-w-md">
        <Slider
          v-model="customTooltipValue"
          show-tooltip
          :format-tooltip="formatTooltip"
        />
        <div class="mt-2 text-sm text-gray-500">
          当前值: {{ formatTooltip(customTooltipValue) }}
        </div>
      </div>
    </section>

    <!-- 显示刻度 -->
    <section>
      <h2 class="text-lg font-medium mb-4">显示刻度</h2>
      <div class="w-full max-w-md">
        <Slider v-model="marksValue" show-marks />
        <div class="mt-2 text-sm text-gray-500">当前值: {{ marksValue }}</div>
      </div>
    </section>

    <!-- 自定义刻度 -->
    <section>
      <h2 class="text-lg font-medium mb-4">自定义刻度</h2>
      <div class="w-full max-w-md">
        <Slider v-model="customMarksValue" show-marks :marks="marks" />
        <div class="mt-2 text-sm text-gray-500">
          当前值: {{ customMarksValue }}
        </div>
      </div>
    </section>
  </div>
</template>
`,C=JSON.parse('{"title":"Slider","description":"","frontmatter":{},"headers":[],"relativePath":"components/slider/index.md","filePath":"components/slider/index.md"}'),g={name:"components/slider/index.md"},T=Object.assign(g,{setup(y){const s=d(!0),a=r();return m(async()=>{a.value=(await c(async()=>{const{default:l}=await import("./chunks/index.DfTypghC.js");return{default:l}},__vite__mapDeps([0,1,2]))).default}),(l,e)=>{const o=u("ClientOnly");return p(),v("div",null,[e[1]||(e[1]=h("",5)),f(t(n(_),null,null,512),[[x,s.value]]),t(o,null,{default:i(()=>[t(n(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{s.value=!1}),vueCode:n(V)},k({_:2},[a.value?{name:"vue",fn:i(()=>[t(n(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{C as __pageData,T as default};
