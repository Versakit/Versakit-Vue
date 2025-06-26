const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.DjPToCI0.js","assets/chunks/theme.DXf4p6wh.js","assets/chunks/framework.dgRUQZ7Z.js"])))=>i.map(i=>d[i]);
import{p as o,D as p,v as m,aj as d,B as c,c as u,o as v,ai as h,a1 as g,G as t,a3 as f,k as n,w as i,ak as b}from"./chunks/framework.dgRUQZ7Z.js";import{O as _,E as A}from"./chunks/index.CtCYMtlW.js";const k=`<script setup lang="ts">
import { ref } from 'vue'
import { Avatar } from '@versakit/vue'
import '@versakit/vue/style'

const imageError = ref(false)
const toggleError = () => {
  imageError.value = !imageError.value
}
<\/script>

<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="flex gap-6 items-center">
        <Avatar
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="用户头像"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/women/1.jpg"
          alt="用户头像"
        />
        <Avatar alt="张三" />
        <Avatar />
      </div>
    </section>

    <!-- 不同大小 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同大小</h2>
      <div class="flex gap-6 items-end">
        <Avatar
          src="https://randomuser.me/api/portraits/men/2.jpg"
          alt="用户头像"
          size="xs"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/men/3.jpg"
          alt="用户头像"
          size="sm"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/men/4.jpg"
          alt="用户头像"
          size="md"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/men/5.jpg"
          alt="用户头像"
          size="lg"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/men/6.jpg"
          alt="用户头像"
          size="xl"
        />
      </div>
    </section>

    <!-- 不同形状 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同形状</h2>
      <div class="flex gap-6 items-center">
        <Avatar
          src="https://randomuser.me/api/portraits/men/7.jpg"
          alt="用户头像"
          shape="circle"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/men/8.jpg"
          alt="用户头像"
          shape="square"
        />
      </div>
    </section>

    <!-- 状态指示器 -->
    <section>
      <h2 class="text-lg font-medium mb-4">状态指示器</h2>
      <div class="flex gap-6 items-center">
        <Avatar
          src="https://randomuser.me/api/portraits/women/2.jpg"
          alt="用户头像"
          status="online"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/women/3.jpg"
          alt="用户头像"
          status="offline"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/women/4.jpg"
          alt="用户头像"
          status="away"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/women/5.jpg"
          alt="用户头像"
          status="busy"
        />
      </div>
    </section>

    <!-- 回退显示 -->
    <section>
      <h2 class="text-lg font-medium mb-4">回退显示</h2>
      <div class="flex flex-col space-y-4">
        <div class="flex items-center gap-4">
          <button
            @click="toggleError"
            class="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            {{ imageError ? '加载正确图片' : '模拟加载失败' }}
          </button>
          <span class="text-sm text-gray-500">点击按钮切换图片加载状态</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p class="mb-2 text-sm">图片加载失败时显示文字缩写：</p>
            <Avatar
              :src="
                imageError
                  ? 'invalid-url.jpg'
                  : 'https://randomuser.me/api/portraits/men/9.jpg'
              "
              alt="李四"
            />
          </div>

          <div>
            <p class="mb-2 text-sm">图片加载失败时显示备用图片：</p>
            <Avatar
              :src="
                imageError
                  ? 'invalid-url.jpg'
                  : 'https://randomuser.me/api/portraits/men/10.jpg'
              "
              alt="王五"
              fallback="https://via.placeholder.com/150/CCCCCC/808080?text=Fallback"
            />
          </div>

          <div>
            <p class="mb-2 text-sm">图片加载失败时显示默认图标：</p>
            <Avatar
              :src="
                imageError
                  ? 'invalid-url.jpg'
                  : 'https://randomuser.me/api/portraits/men/11.jpg'
              "
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
`,j=JSON.parse('{"title":"Avatar","description":"","frontmatter":{},"headers":[],"relativePath":"components/avatar/index.md","filePath":"components/avatar/index.md"}'),x={name:"components/avatar/index.md"},w=Object.assign(x,{setup(y){const s=o(!0),e=p();return m(async()=>{e.value=(await d(async()=>{const{default:r}=await import("./chunks/index.DjPToCI0.js");return{default:r}},__vite__mapDeps([0,1,2]))).default}),(r,a)=>{const l=c("ClientOnly");return v(),u("div",null,[a[1]||(a[1]=h("",5)),g(t(n(_),null,null,512),[[f,s.value]]),t(l,null,{default:i(()=>[t(n(A),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:a[0]||(a[0]=()=>{s.value=!1}),vueCode:n(k)},b({_:2},[e.value?{name:"vue",fn:i(()=>[t(n(e))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{j as __pageData,w as default};
