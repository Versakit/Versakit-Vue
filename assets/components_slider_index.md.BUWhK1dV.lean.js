const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.uWAWI8wX.js","assets/chunks/theme.Bvmz8KJB.js","assets/chunks/framework.DcQCqlea.js"])))=>i.map(i=>d[i]);
import{p as c,D as u,v,al as p,C as o,c as h,o as f,j as s,G as t,a5 as x,a0 as k,a as V,a3 as b,k as n,w as d,am as _}from"./chunks/framework.DcQCqlea.js";import{O as g,E as y}from"./chunks/index.S9QYeH19.js";const w=`<script setup lang="ts">
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
`,T=JSON.parse('{"title":"Slider","description":"","frontmatter":{},"headers":[],"relativePath":"components/slider/index.md","filePath":"components/slider/index.md"}'),S={name:"components/slider/index.md"},D=Object.assign(S,{setup(C){const l=c(!0),a=u();return v(async()=>{a.value=(await p(async()=>{const{default:i}=await import("./chunks/index.uWAWI8wX.js");return{default:i}},__vite__mapDeps([0,1,2]))).default}),(i,e)=>{const r=o("Link"),m=o("ClientOnly");return f(),h("div",null,[e[1]||(e[1]=s("h1",{id:"slider",tabindex:"-1"},[V("Slider "),s("a",{class:"header-anchor",href:"#slider","aria-label":'Permalink to "Slider"'},"​")],-1)),e[2]||(e[2]=s("p",null,"Slider 是一种允许用户通过拖动滑块在指定范围内选择连续或离散值的交互控件。它以可视化方式呈现数值范围，提供直观的调节体验，广泛应用于音量控制、进度调整、参数设置等场景。",-1)),t(r,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-slider-%E6%BB%91%E5%9D%97--basic"}),e[3]||(e[3]=x("",3)),k(t(n(g),null,null,512),[[b,l.value]]),t(m,null,{default:d(()=>[t(n(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:n(w)},_({_:2},[a.value?{name:"vue",fn:d(()=>[t(n(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{T as __pageData,D as default};
