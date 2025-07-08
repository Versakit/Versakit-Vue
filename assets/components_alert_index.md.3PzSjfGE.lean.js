const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.B0jpBT2Y.js","assets/chunks/theme.HFHU-vLT.js","assets/chunks/framework.EjIRsQ6G.js"])))=>i.map(i=>d[i]);
import{p as u,D as v,v as m,aq as p,C as s,c as b,o as A,j as l,G as e,ap as o,a1 as f,a as g,a4 as _,k as n,w as d,ar as y}from"./chunks/framework.EjIRsQ6G.js";import{O as k,E as x}from"./chunks/index.CypwxoU1.js";const w=`<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h3 class="text-lg font-medium mb-3">基础类型</h3>
      <div class="space-y-3">
        <Alert variant="info" title="信息提示">
          这是一条信息提示，用于展示普通信息。
        </Alert>
        <Alert variant="success" title="成功提示">
          这是一条成功提示，用于展示操作成功的信息。
        </Alert>
        <Alert variant="warning" title="警告提示">
          这是一条警告提示，用于展示需要注意的信息。
        </Alert>
        <Alert variant="error" title="错误提示">
          这是一条错误提示，用于展示操作失败的信息。
        </Alert>
      </div>
    </section>

    <!-- 可关闭的提示 -->
    <section>
      <h3 class="text-lg font-medium mb-3">可关闭的提示</h3>
      <div class="space-y-3">
        <Alert
          v-for="alert in closableAlerts"
          :key="alert.id"
          :variant="alert.variant"
          :title="alert.title"
          closable
          @close="handleClose(alert.id)"
        >
          {{ alert.content }}
        </Alert>
      </div>
      <div class="mt-3" v-if="closableAlerts.length === 0">
        <button
          @click="resetClosableAlerts"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          重置提示
        </button>
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section>
      <h3 class="text-lg font-medium mb-3">不同尺寸</h3>
      <div class="space-y-3">
        <Alert variant="info" title="超小尺寸 (xs)" size="xs">
          这是一个超小尺寸的提示框，适合紧凑型界面。
        </Alert>
        <Alert variant="info" title="小尺寸 (sm)" size="sm">
          这是一个小尺寸的提示框，适合一般界面。
        </Alert>
        <Alert variant="info" title="中等尺寸 (md)" size="md">
          这是一个中等尺寸的提示框，这是默认尺寸。
        </Alert>
        <Alert variant="info" title="大尺寸 (lg)" size="lg">
          这是一个大尺寸的提示框，适合重要信息展示。
        </Alert>
      </div>
    </section>

    <!-- 无图标和自定义图标 -->
    <section>
      <h3 class="text-lg font-medium mb-3">图标定制</h3>
      <div class="space-y-3">
        <Alert variant="success" title="无图标提示" :icon="false">
          这是一个没有图标的提示框，适合简洁风格。
        </Alert>
        <Alert variant="info" title="自定义图标">
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
              ></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </template>
          这是一个带自定义图标的提示框，可以根据需要自定义图标。
        </Alert>
      </div>
    </section>

    <!-- 不同边框样式 -->
    <section>
      <h3 class="text-lg font-medium mb-3">边框与阴影</h3>
      <div class="space-y-3">
        <Alert
          variant="warning"
          title="标准边框"
          description="这是默认的边框样式。"
        />
        <Alert
          variant="warning"
          title="无边框"
          :border="false"
          description="这是没有边框的样式。"
        />
        <Alert
          variant="warning"
          title="带阴影"
          :shadow="true"
          description="这是带阴影效果的提示框。"
        />
        <Alert
          variant="warning"
          title="无边框带阴影"
          :border="false"
          :shadow="true"
          description="这是没有边框但带阴影的提示框。"
        />
      </div>
    </section>

    <!-- 不同圆角 -->
    <section>
      <h3 class="text-lg font-medium mb-3">圆角样式</h3>
      <div class="space-y-3">
        <Alert variant="success" title="无圆角 (none)" rounded="none">
          这是一个没有圆角的提示框，适合方正风格。
        </Alert>
        <Alert variant="success" title="小圆角 (sm)" rounded="sm">
          这是一个小圆角的提示框。
        </Alert>
        <Alert variant="success" title="中等圆角 (md)" rounded="md">
          这是一个中等圆角的提示框，这是默认圆角。
        </Alert>
        <Alert variant="success" title="大圆角 (lg)" rounded="lg">
          这是一个大圆角的提示框。
        </Alert>
        <Alert variant="success" title="满圆角 (full)" rounded="full">
          这是一个满圆角的提示框，适合圆润风格。
        </Alert>
      </div>
    </section>

    <!-- 组合使用 -->
    <section>
      <h3 class="text-lg font-medium mb-3">组合样式</h3>
      <div class="space-y-3">
        <Alert
          variant="error"
          title="重要错误提示"
          size="lg"
          rounded="lg"
          :shadow="true"
          closable
        >
          这是一个重要的错误提示，使用了大尺寸、大圆角和阴影效果，并且可以关闭。
        </Alert>
        <Alert
          variant="info"
          :icon="false"
          :border="false"
          :shadow="true"
          rounded="full"
          class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30"
        >
          <div class="font-medium">自定义渐变背景</div>
          这是一个使用自定义类添加渐变背景的提示框，同时移除了图标和边框，添加了阴影和满圆角。
        </Alert>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Alert } from '@versakit/vue'
import { ref } from 'vue'

// 可关闭的提示数据
const initialClosableAlerts = [
  {
    id: 1,
    variant: 'info',
    title: '信息提示',
    content: '这是一条可以关闭的信息提示。',
  },
  {
    id: 2,
    variant: 'success',
    title: '成功提示',
    content: '这是一条可以关闭的成功提示。',
  },
  {
    id: 3,
    variant: 'warning',
    title: '警告提示',
    content: '这是一条可以关闭的警告提示。',
  },
  {
    id: 4,
    variant: 'error',
    title: '错误提示',
    content: '这是一条可以关闭的错误提示。',
  },
]

const closableAlerts = ref([...initialClosableAlerts])

// 处理关闭事件
const handleClose = (id: number) => {
  closableAlerts.value = closableAlerts.value.filter((alert) => alert.id !== id)
}

// 重置提示
const resetClosableAlerts = () => {
  closableAlerts.value = [...initialClosableAlerts]
}
<\/script>
`,E=JSON.parse('{"title":"Alert 警告提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/alert/index.md","filePath":"components/alert/index.md"}'),C={name:"components/alert/index.md"},D=Object.assign(C,{setup(V){const i=u(!0),a=v();return m(async()=>{a.value=(await p(async()=>{const{default:r}=await import("./chunks/index.B0jpBT2Y.js");return{default:r}},__vite__mapDeps([0,1,2]))).default}),(r,t)=>{const c=s("Link"),h=s("ClientOnly");return A(),b("div",null,[t[1]||(t[1]=l("h1",{id:"alert-警告提示",tabindex:"-1"},[g("Alert 警告提示 "),l("a",{class:"header-anchor",href:"#alert-警告提示","aria-label":'Permalink to "Alert 警告提示"'},"​")],-1)),t[2]||(t[2]=l("p",null,"Alert 是一种用于展示重要信息或操作结果的通知组件，通常以醒目的样式出现在页面中。它不打断用户当前操作，但需用户主动关注，用于传达成功、错误、警告或信息类反馈。",-1)),e(c,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-alert-%E8%AD%A6%E5%91%8A%E6%8F%90%E7%A4%BA--basic"}),t[3]||(t[3]=o("",3)),f(e(n(k),null,null,512),[[_,i.value]]),e(h,null,{default:d(()=>[e(n(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{i.value=!1}),vueCode:n(w)},y({_:2},[a.value?{name:"vue",fn:d(()=>[e(n(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=o("",6))])}}});export{E as __pageData,D as default};
