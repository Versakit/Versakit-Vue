const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.BtBCEiC0.js","assets/chunks/theme.frOZSD7M.js","assets/chunks/framework.Cpyw2Gc9.js"])))=>i.map(i=>d[i]);
import{p as u,D as p,v as h,aj as m,B as d,c as b,o as v,j as l,G as n,ai as f,a1 as y,a as k,a2 as x,k as t,w as i,ak as g}from"./chunks/framework.Cpyw2Gc9.js";import{O as M,E as w}from"./chunks/index.CSC85q1C.js";const _=`<script setup lang="ts">
import { Modal } from '@versakit/vue'
import { ref } from 'vue'

// 基础用法
const showBasicModal = ref(false)

// 带标题
const showTitleModal = ref(false)

// 不同尺寸
const showSmallModal = ref(false)
const showLargeModal = ref(false)

// 自定义头部和底部
const showCustomModal = ref(false)

// 禁用点击遮罩层关闭
const showNoOverlayCloseModal = ref(false)
<\/script>

<template>
  <div class="space-y-4">
    <!-- 基础用法 -->
    <div class="mb-4">
      <h3 class="text-lg font-medium mb-2">基础用法</h3>
      <button
        @click="showBasicModal = true"
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"
      >
        打开基础模态框
      </button>

      <Modal v-model="showBasicModal" @close="console.log('基础模态框关闭了')">
        <p class="text-gray-600">这是一个基础模态框，没有标题和底部。</p>
      </Modal>
    </div>

    <!-- 带标题 -->
    <div class="mb-4">
      <h3 class="text-lg font-medium mb-2">带标题</h3>
      <button
        @click="showTitleModal = true"
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"
      >
        打开带标题模态框
      </button>

      <Modal
        v-model="showTitleModal"
        title="这是标题"
        @close="console.log('带标题模态框关闭了')"
      >
        <p class="text-gray-600">这是一个带标题的模态框。</p>
      </Modal>
    </div>

    <!-- 不同尺寸 -->
    <div class="mb-4">
      <h3 class="text-lg font-medium mb-2">不同尺寸</h3>
      <div class="flex gap-2">
        <button
          @click="showSmallModal = true"
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"
        >
          小尺寸
        </button>
        <button
          @click="showLargeModal = true"
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"
        >
          大尺寸
        </button>
      </div>

      <Modal v-model="showSmallModal" title="小尺寸模态框" size="sm">
        <p class="text-gray-600">这是一个小尺寸的模态框。</p>
      </Modal>

      <Modal v-model="showLargeModal" title="大尺寸模态框" size="2xl">
        <p class="text-gray-600">这是一个大尺寸的模态框。</p>
      </Modal>
    </div>

    <!-- 自定义头部和底部 -->
    <div class="mb-4">
      <h3 class="text-lg font-medium mb-2">自定义头部和底部</h3>
      <button
        @click="showCustomModal = true"
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"
      >
        打开自定义模态框
      </button>

      <Modal v-model="showCustomModal">
        <template #header>
          <div class="flex items-center">
            <div class="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <h3 class="text-lg font-medium">自定义头部</h3>
          </div>
        </template>

        <p class="text-gray-600">这是一个带自定义头部和底部的模态框。</p>

        <template #footer>
          <div class="flex justify-end gap-2">
            <button
              @click="showCustomModal = false"
              class="px-3 py-1 border border-gray-300 rounded"
            >
              取消
            </button>
            <button
              @click="showCustomModal = false"
              class="px-3 py-1 bg-blue-500 text-white rounded"
            >
              确认
            </button>
          </div>
        </template>
      </Modal>
    </div>

    <!-- 禁用点击遮罩层关闭 -->
    <div class="mb-4">
      <h3 class="text-lg font-medium mb-2">禁用点击遮罩层关闭</h3>
      <button
        @click="showNoOverlayCloseModal = true"
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"
      >
        打开模态框
      </button>

      <Modal
        v-model="showNoOverlayCloseModal"
        title="禁用点击遮罩层关闭"
        :closeOnOverlayClick="false"
      >
        <p class="text-gray-600">
          点击遮罩层不会关闭此模态框，只能点击右上角的关闭按钮或按 ESC 键关闭。
        </p>
        <div class="mt-4 flex justify-end">
          <button
            @click="showNoOverlayCloseModal = false"
            class="px-3 py-1 bg-blue-500 text-white rounded"
          >
            关闭
          </button>
        </div>
      </Modal>
    </div>
  </div>
</template>
`,T=JSON.parse('{"title":"Model","description":"","frontmatter":{},"headers":[],"relativePath":"components/modal/index.md","filePath":"components/modal/index.md"}'),C={name:"components/modal/index.md"},W=Object.assign(C,{setup(B){const s=u(!0),a=p();return h(async()=>{a.value=(await m(async()=>{const{default:o}=await import("./chunks/index.BtBCEiC0.js");return{default:o}},__vite__mapDeps([0,1,2]))).default}),(o,e)=>{const r=d("Link"),c=d("ClientOnly");return v(),b("div",null,[e[1]||(e[1]=l("h1",{id:"model",tabindex:"-1"},[k("Model "),l("a",{class:"header-anchor",href:"#model","aria-label":'Permalink to "Model"'},"​")],-1)),e[2]||(e[2]=l("p",null,"Modal 是一种覆盖在主界面上方的浮动容器，用于展示需要用户专注处理的内容（如表单、确认框、详情页等）。它通过半透明背景（遮罩层）阻断主界面交互，强制用户完成当前操作后才能返回，是现代 UI 设计中实现层级交互的重要组件。",-1)),n(r,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-modal-%E5%AF%B9%E8%AF%9D%E6%A1%86--basic"}),e[3]||(e[3]=f("",3)),y(n(t(M),null,null,512),[[x,s.value]]),n(c,null,{default:i(()=>[n(t(w),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{s.value=!1}),vueCode:t(_)},g({_:2},[a.value?{name:"vue",fn:i(()=>[n(t(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{T as __pageData,W as default};
