const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.mvihqWZp.js","assets/chunks/theme.CdPqtW-T.js","assets/chunks/framework.CGvGDOMX.js"])))=>i.map(i=>d[i]);
import{v as c,ao as l,E as h,C as p,c as u,o as m,a6 as d,a1 as g,G as e,a4 as b,p as v,k as o,w as i,ap as _}from"./chunks/framework.CGvGDOMX.js";import{O as f,E as y}from"./chunks/index.DY3a6271.js";const T=`<script setup lang="ts">
import { Toast } from '@versakit/vue'
import '@versakit/vue/style'

const showSuccess = () => {
  Toast.success('保存成功')
}

const showError = () => {
  Toast.error('请求失败，请稍后重试')
}

const showWarning = () => {
  Toast.warning('库存不足，请尽快补货')
}

const showInfo = () => {
  Toast.info('你有一条新的系统消息')
}

const showBottomCenter = () => {
  Toast.show({
    message: '这是底部居中的提示',
    type: 'info',
    position: 'bottom-center',
    duration: 4000,
  })
}

const showLongDuration = () => {
  Toast.show({
    message: '该提示将在 8 秒后自动关闭',
    type: 'success',
    duration: 8000,
  })
}

const clearAll = () => {
  Toast.removeAll()
}
<\/script>

<template>
  <div class="space-y-8">
    <section class="space-y-3">
      <h3 class="text-lg font-medium">基础类型</h3>
      <div class="flex flex-wrap gap-3">
        <button
          class="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          @click="showSuccess"
        >
          Success
        </button>
        <button
          class="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          @click="showError"
        >
          Error
        </button>
        <button
          class="rounded bg-amber-500 px-4 py-2 text-white hover:bg-amber-600"
          @click="showWarning"
        >
          Warning
        </button>
        <button
          class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          @click="showInfo"
        >
          Info
        </button>
      </div>
    </section>

    <section class="space-y-3">
      <h3 class="text-lg font-medium">位置与时长</h3>
      <div class="flex flex-wrap gap-3">
        <button
          class="rounded bg-zinc-700 px-4 py-2 text-white hover:bg-zinc-800"
          @click="showBottomCenter"
        >
          底部居中
        </button>
        <button
          class="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          @click="showLongDuration"
        >
          8 秒自动关闭
        </button>
      </div>
    </section>

    <section class="space-y-3">
      <h3 class="text-lg font-medium">控制</h3>
      <div class="flex flex-wrap gap-3">
        <button
          class="rounded bg-slate-600 px-4 py-2 text-white hover:bg-slate-700"
          @click="clearAll"
        >
          清空全部提示
        </button>
      </div>
    </section>
  </div>
</template>
`,A=JSON.parse('{"title":"Toast 轻提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/toast/index.md","filePath":"components/toast/index.md"}'),x={name:"components/toast/index.md"},W=Object.assign(x,{setup(k){const s=v(!0),n=h();return c(async()=>{n.value=(await l(async()=>{const{default:a}=await import("./chunks/index.mvihqWZp.js");return{default:a}},__vite__mapDeps([0,1,2]))).default}),(a,t)=>{const r=p("ClientOnly");return m(),u("div",null,[t[1]||(t[1]=d("",5)),g(e(o(f),null,null,512),[[b,s.value]]),e(r,null,{default:i(()=>[e(o(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{s.value=!1}),vueCode:o(T)},_({_:2},[n.value?{name:"vue",fn:i(()=>[e(o(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[2]||(t[2]=d("",5))])}}});export{A as __pageData,W as default};
