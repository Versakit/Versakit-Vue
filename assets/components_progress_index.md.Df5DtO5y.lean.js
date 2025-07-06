const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.QPiGjSQ9.js","assets/chunks/theme.BTaXhGXQ.js","assets/chunks/framework.C7cq1VHP.js"])))=>i.map(i=>d[i]);
import{p as c,D as u,v as m,ak as g,C as d,c as v,o as b,j as a,G as e,aj as l,a1 as k,a as y,a4 as x,k as s,w as o,al as f}from"./chunks/framework.C7cq1VHP.js";import{O as P,E as _}from"./chunks/index.CyVXp2Hl.js";const F=`<template>
  <div class="space-y-8">
    <!-- 基础进度条 -->
    <section>
      <h3 class="text-lg font-medium mb-4">基础进度条</h3>
      <Progress :value="40" />
    </section>

    <!-- 带文本的进度条 -->
    <section>
      <h3 class="text-lg font-medium mb-4">带文本的进度条</h3>
      <Progress :value="60" showText />
    </section>

    <!-- 不同大小的进度条 -->
    <section>
      <h3 class="text-lg font-medium mb-4">不同大小的进度条</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">小号进度条</p>
          <Progress :value="30" size="sm" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">中号进度条</p>
          <Progress :value="50" size="md" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">大号进度条</p>
          <Progress :value="70" size="lg" />
        </div>
      </div>
    </section>

    <!-- 不同形状的进度条 -->
    <section>
      <h3 class="text-lg font-medium mb-4">不同形状的进度条</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">方形进度条</p>
          <Progress :value="40" shape="flat" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">圆角进度条</p>
          <Progress :value="60" shape="rounded" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">胶囊形进度条</p>
          <Progress :value="80" shape="pill" />
        </div>
      </div>
    </section>

    <!-- 不同状态的进度条 -->
    <section>
      <h3 class="text-lg font-medium mb-4">不同状态的进度条</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">默认状态</p>
          <Progress :value="40" variant="default" showText />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">成功状态</p>
          <Progress :value="100" variant="success" showText />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">警告状态</p>
          <Progress :value="70" variant="warning" showText />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">危险状态</p>
          <Progress :value="20" variant="danger" showText />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">信息状态</p>
          <Progress :value="50" variant="info" showText />
        </div>
      </div>
    </section>

    <!-- 条纹进度条 -->
    <section>
      <h3 class="text-lg font-medium mb-4">条纹进度条</h3>
      <Progress :value="60" striped />
    </section>

    <!-- 动画进度条 -->
    <section>
      <h3 class="text-lg font-medium mb-4">动画进度条</h3>
      <Progress :value="60" striped animated />
    </section>

    <!-- 不确定状态进度条 -->
    <section>
      <h3 class="text-lg font-medium mb-4">不确定状态进度条</h3>
      <Progress indeterminate />
    </section>

    <!-- 自定义文本 -->
    <section>
      <h3 class="text-lg font-medium mb-4">自定义文本</h3>
      <Progress :value="75" showText>
        <template #text>
          <span class="font-bold">{{ Math.round(75) }}分 / 100分</span>
        </template>
      </Progress>
    </section>

    <!-- 动态进度条 -->
    <section>
      <h3 class="text-lg font-medium mb-4">动态进度条</h3>
      <div class="space-y-4">
        <Progress :value="dynamicValue" showText />
        <div class="flex items-center gap-4">
          <button
            @click="startProgress"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            :disabled="isProgressing"
          >
            开始进度
          </button>
          <button
            @click="resetProgress"
            class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            重置
          </button>
        </div>
      </div>
    </section>

    <!-- 无样式模式 -->
    <section>
      <h3 class="text-lg font-medium mb-4">无样式模式</h3>
      <Progress
        :value="50"
        unstyled
        :pt="{
          root: 'w-full',
          container: 'w-full h-4 bg-gray-100 rounded-full overflow-hidden',
          bar: 'h-full bg-gradient-to-r from-purple-500 to-pink-500',
          text: 'text-right text-sm font-medium text-purple-700 mt-1',
        }"
        showText
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Progress } from '@versakit/vue'

const dynamicValue = ref(0)
const isProgressing = ref(false)

const startProgress = () => {
  if (isProgressing.value) return

  isProgressing.value = true
  dynamicValue.value = 0

  const interval = setInterval(() => {
    dynamicValue.value += 1

    if (dynamicValue.value >= 100) {
      clearInterval(interval)
      isProgressing.value = false
    }
  }, 50)
}

const resetProgress = () => {
  dynamicValue.value = 0
}
<\/script>
`,E=JSON.parse('{"title":"Progress","description":"","frontmatter":{},"headers":[],"relativePath":"components/progress/index.md","filePath":"components/progress/index.md"}'),T={name:"components/progress/index.md"},w=Object.assign(T,{setup(C){const i=c(!0),n=u();return m(async()=>{n.value=(await g(async()=>{const{default:r}=await import("./chunks/index.QPiGjSQ9.js");return{default:r}},__vite__mapDeps([0,1,2]))).default}),(r,t)=>{const h=d("Link"),p=d("ClientOnly");return b(),v("div",null,[t[1]||(t[1]=a("h1",{id:"progress",tabindex:"-1"},[y("Progress "),a("a",{class:"header-anchor",href:"#progress","aria-label":'Permalink to "Progress"'},"​")],-1)),t[2]||(t[2]=a("p",null,"Progress 是一个进度条组件，用于展示操作的当前进度、状态和完成程度，帮助用户了解长时间任务的执行情况，常用于文件上传、数据加载、操作处理等场景。",-1)),e(h,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-progress-%E8%BF%9B%E5%BA%A6%E6%9D%A1--basic"}),t[3]||(t[3]=l("",3)),k(e(s(P),null,null,512),[[x,i.value]]),e(p,null,{default:o(()=>[e(s(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{i.value=!1}),vueCode:s(F)},f({_:2},[n.value?{name:"vue",fn:o(()=>[e(s(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=l("",10))])}}});export{E as __pageData,w as default};
