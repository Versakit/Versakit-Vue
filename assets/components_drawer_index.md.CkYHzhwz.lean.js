const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.JnzuQ71Y.js","assets/chunks/theme.DIqZOMlM.js","assets/chunks/framework.dgRUQZ7Z.js"])))=>i.map(i=>d[i]);
import{p,D as u,v as h,aj as w,B as l,c as m,o as b,j as r,G as t,ai as f,a1 as D,a as v,a3 as k,k as n,w as i,ak as x}from"./chunks/framework.dgRUQZ7Z.js";import{O as g,E as y}from"./chunks/index.CtCYMtlW.js";const _=`<script setup lang="ts">
import { Drawer } from '@versakit/vue'
import { ref } from 'vue'

// 基础用法
const showBasicDrawer = ref(false)

// 不同位置
const showLeftDrawer = ref(false)
const showRightDrawer = ref(false)
const showTopDrawer = ref(false)
const showBottomDrawer = ref(false)

// 带标题
const showTitleDrawer = ref(false)

// 自定义尺寸
const showCustomSizeDrawer = ref(false)

// 自定义头部和底部
const showCustomDrawer = ref(false)
<\/script>

<template>
  <div class="space-y-6">
    <!-- 基础用法 -->
    <div class="mb-4">
      <h3 class="text-lg font-medium mb-2">基础用法</h3>
      <button
        @click="showBasicDrawer = true"
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"
      >
        打开基础抽屉
      </button>

      <Drawer v-model="showBasicDrawer" @close="console.log('基础抽屉关闭了')">
        <p class="text-gray-600">这是一个基础抽屉，默认从右侧滑出。</p>
      </Drawer>
    </div>

    <!-- 不同位置 -->
    <div class="mb-4">
      <h3 class="text-lg font-medium mb-2">不同位置</h3>
      <div class="flex gap-2 flex-wrap">
        <button
          @click="showLeftDrawer = true"
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"
        >
          左侧抽屉
        </button>
        <button
          @click="showRightDrawer = true"
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"
        >
          右侧抽屉
        </button>
        <button
          @click="showTopDrawer = true"
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"
        >
          顶部抽屉
        </button>
        <button
          @click="showBottomDrawer = true"
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"
        >
          底部抽屉
        </button>
      </div>

      <Drawer v-model="showLeftDrawer" placement="left" title="左侧抽屉">
        <p class="text-gray-600">这是一个从左侧滑出的抽屉。</p>
      </Drawer>

      <Drawer v-model="showRightDrawer" placement="right" title="右侧抽屉">
        <p class="text-gray-600">这是一个从右侧滑出的抽屉。</p>
      </Drawer>

      <Drawer v-model="showTopDrawer" placement="top" title="顶部抽屉">
        <p class="text-gray-600">这是一个从顶部滑出的抽屉。</p>
      </Drawer>

      <Drawer v-model="showBottomDrawer" placement="bottom" title="底部抽屉">
        <p class="text-gray-600">这是一个从底部滑出的抽屉。</p>
      </Drawer>
    </div>

    <!-- 带标题 -->
    <div class="mb-4">
      <h3 class="text-lg font-medium mb-2">带标题</h3>
      <button
        @click="showTitleDrawer = true"
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"
      >
        打开带标题抽屉
      </button>

      <Drawer v-model="showTitleDrawer" title="这是标题">
        <p class="text-gray-600">这是一个带标题的抽屉。</p>
      </Drawer>
    </div>

    <!-- 自定义尺寸 -->
    <div class="mb-4">
      <h3 class="text-lg font-medium mb-2">自定义尺寸</h3>
      <button
        @click="showCustomSizeDrawer = true"
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"
      >
        打开宽抽屉
      </button>

      <Drawer v-model="showCustomSizeDrawer" title="宽抽屉" size="500px">
        <p class="text-gray-600">这是一个宽度为 500px 的抽屉。</p>
      </Drawer>
    </div>

    <!-- 自定义头部和底部 -->
    <div class="mb-4">
      <h3 class="text-lg font-medium mb-2">自定义头部和底部</h3>
      <button
        @click="showCustomDrawer = true"
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"
      >
        打开自定义抽屉
      </button>

      <Drawer v-model="showCustomDrawer">
        <template #header>
          <div class="flex items-center">
            <div class="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <h3 class="text-lg font-medium">自定义头部</h3>
          </div>
        </template>

        <p class="text-gray-600">这是一个带自定义头部和底部的抽屉。</p>

        <template #footer>
          <div class="flex justify-end gap-2">
            <button
              @click="showCustomDrawer = false"
              class="px-3 py-1 border border-gray-300 rounded"
            >
              取消
            </button>
            <button
              @click="showCustomDrawer = false"
              class="px-3 py-1 bg-blue-500 text-white rounded"
            >
              确认
            </button>
          </div>
        </template>
      </Drawer>
    </div>
  </div>
</template>
`,V=JSON.parse('{"title":"Drawer","description":"","frontmatter":{},"headers":[],"relativePath":"components/drawer/index.md","filePath":"components/drawer/index.md"}'),B={name:"components/drawer/index.md"},A=Object.assign(B,{setup(C){const s=p(!0),a=u();return h(async()=>{a.value=(await w(async()=>{const{default:o}=await import("./chunks/index.JnzuQ71Y.js");return{default:o}},__vite__mapDeps([0,1,2]))).default}),(o,e)=>{const c=l("Link"),d=l("ClientOnly");return b(),m("div",null,[e[1]||(e[1]=r("h1",{id:"drawer",tabindex:"-1"},[v("Drawer "),r("a",{class:"header-anchor",href:"#drawer","aria-label":'Permalink to "Drawer"'},"​")],-1)),e[2]||(e[2]=r("p",null,"Drawer（抽屉）组件是一种常见的移动端和桌面端交互组件，通常以侧边滑出或底部弹出的形式呈现，用于在不离开当前页面的情况下展示额外内容或功能选项，具有轻量化、非阻塞的特点。",-1)),t(c,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-drawer-%E6%8A%BD%E5%B1%89--basic"}),e[3]||(e[3]=f("",3)),D(t(n(g),null,null,512),[[k,s.value]]),t(d,null,{default:i(()=>[t(n(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{s.value=!1}),vueCode:n(_)},x({_:2},[a.value?{name:"vue",fn:i(()=>[t(n(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{V as __pageData,A as default};
