const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.TzLJ9AOu.js","assets/chunks/theme.BRH0OaeS.js","assets/chunks/framework.dgRUQZ7Z.js"])))=>i.map(i=>d[i]);
import{p as i,D as r,v as c,aj as u,B as p,c as h,o as m,ai as b,a1 as v,G as n,a3 as f,k as t,w as o,ak as y}from"./chunks/framework.dgRUQZ7Z.js";import{O as x,E as g}from"./chunks/index.CtCYMtlW.js";const k=`<script setup lang="ts">
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
`,V=JSON.parse('{"title":"Model","description":"","frontmatter":{},"headers":[],"relativePath":"components/modal/index.md","filePath":"components/modal/index.md"}'),M={name:"components/modal/index.md"},W=Object.assign(M,{setup(_){const l=i(!0),a=r();return c(async()=>{a.value=(await u(async()=>{const{default:s}=await import("./chunks/index.TzLJ9AOu.js");return{default:s}},__vite__mapDeps([0,1,2]))).default}),(s,e)=>{const d=p("ClientOnly");return m(),h("div",null,[e[1]||(e[1]=b("",5)),v(n(t(x),null,null,512),[[f,l.value]]),n(d,null,{default:o(()=>[n(t(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:t(k)},y({_:2},[a.value?{name:"vue",fn:o(()=>[n(t(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{V as __pageData,W as default};
