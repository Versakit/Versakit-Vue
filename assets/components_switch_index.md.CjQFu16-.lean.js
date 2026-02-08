const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.W-J7Mp6-.js","assets/chunks/theme.Bvmz8KJB.js","assets/chunks/framework.DcQCqlea.js"])))=>i.map(i=>d[i]);
import{p,D as m,v as h,al as u,C as c,c as v,o as f,j as a,G as n,a5 as x,a0 as b,a as w,a3 as y,k as t,w as o,am as _}from"./chunks/framework.DcQCqlea.js";import{O as S,E as g}from"./chunks/index.S9QYeH19.js";const k=`<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="flex items-center space-x-4">
        <Switch v-model="enabled" />
        <span class="text-sm">{{ enabled ? '开启' : '关闭' }}</span>
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同尺寸</h2>
      <div class="flex items-center space-x-8">
        <div class="flex flex-col items-center space-y-2">
          <Switch v-model="sizeEnabled.small" size="small" />
          <span class="text-sm">小型</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <Switch v-model="sizeEnabled.default" />
          <span class="text-sm">默认</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <Switch v-model="sizeEnabled.large" size="large" />
          <span class="text-sm">大型</span>
        </div>
      </div>
    </section>

    <!-- 不同颜色 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同颜色</h2>
      <div class="grid grid-cols-5 gap-6">
        <div class="flex flex-col items-center space-y-2">
          <Switch v-model="colorEnabled.blue" color="blue" />
          <span class="text-sm">蓝色</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <Switch v-model="colorEnabled.green" color="green" />
          <span class="text-sm">绿色</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <Switch v-model="colorEnabled.red" color="red" />
          <span class="text-sm">红色</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <Switch v-model="colorEnabled.yellow" color="yellow" />
          <span class="text-sm">黄色</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <Switch v-model="colorEnabled.purple" color="purple" />
          <span class="text-sm">紫色</span>
        </div>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">禁用状态</h2>
      <div class="flex items-center space-x-8">
        <div class="flex flex-col items-center space-y-2">
          <Switch disabled />
          <span class="text-sm">禁用关闭</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <Switch :model-value="true" disabled />
          <span class="text-sm">禁用开启</span>
        </div>
      </div>
    </section>

    <!-- 动画演示 -->
    <section>
      <h2 class="text-lg font-medium mb-4">动画演示</h2>
      <div class="flex flex-col space-y-4">
        <div class="flex items-center space-x-4">
          <button
            @click="toggleAllSwitches"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            {{ allEnabled ? '全部关闭' : '全部开启' }}
          </button>
        </div>
        <div class="flex items-center space-x-4 mt-4">
          <Switch v-for="(_, i) in 5" :key="i" v-model="animationSwitches[i]" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Switch } from '@versakit/vue'
import '@versakit/vue/style'
import { ref, computed } from 'vue'

// 基础用法
const enabled = ref(false)

// 不同尺寸
const sizeEnabled = ref({
  small: true,
  default: true,
  large: true,
})

// 不同颜色
const colorEnabled = ref({
  blue: true,
  green: true,
  red: true,
  yellow: true,
  purple: true,
})

// 动画演示
const animationSwitches = ref([false, false, false, false, false])

// 全部开关状态
const allEnabled = computed(() =>
  animationSwitches.value.every((state) => state === true),
)

// 切换所有开关
const toggleAllSwitches = () => {
  const newState = !allEnabled.value
  animationSwitches.value = animationSwitches.value.map(() => newState)
}
<\/script>
`,A=JSON.parse('{"title":"Switch","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch/index.md","filePath":"components/switch/index.md"}'),E={name:"components/switch/index.md"},D=Object.assign(E,{setup(B){const l=p(!0),s=m();return h(async()=>{s.value=(await u(async()=>{const{default:i}=await import("./chunks/index.W-J7Mp6-.js");return{default:i}},__vite__mapDeps([0,1,2]))).default}),(i,e)=>{const d=c("Link"),r=c("ClientOnly");return f(),v("div",null,[e[1]||(e[1]=a("h1",{id:"switch",tabindex:"-1"},[w("Switch "),a("a",{class:"header-anchor",href:"#switch","aria-label":'Permalink to "Switch"'},"​")],-1)),e[2]||(e[2]=a("p",null,'Switch（开关）组件是一种二元状态选择器，用于在两种状态间快速切换（如 "开 / 关"、"启用 / 禁用"），通过直观的视觉反馈降低用户操作认知成本，提升交互效率。',-1)),n(d,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-switch-%E5%BC%80%E5%85%B3--basic"}),e[3]||(e[3]=x("",3)),b(n(t(S),null,null,512),[[y,l.value]]),n(r,null,{default:o(()=>[n(t(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:t(k)},_({_:2},[s.value?{name:"vue",fn:o(()=>[n(t(s))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{A as __pageData,D as default};
