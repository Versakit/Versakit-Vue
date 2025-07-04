const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.DFIZgy63.js","assets/chunks/theme.9IXME9ou.js","assets/chunks/framework.Cpyw2Gc9.js"])))=>i.map(i=>d[i]);
import{p as d,D as c,v as u,aj as v,B as l,c as h,o as g,j as s,G as t,ai as b,a1 as f,a as k,a2 as _,k as n,w as o,ak as A}from"./chunks/framework.Cpyw2Gc9.js";import{O as x,E as y}from"./chunks/index.CSC85q1C.js";const E=`<script setup lang="ts">
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
`,w=JSON.parse('{"title":"Avatar","description":"","frontmatter":{},"headers":[],"relativePath":"components/avatar/index.md","filePath":"components/avatar/index.md"}'),j={name:"components/avatar/index.md"},D=Object.assign(j,{setup(C){const r=d(!0),e=c();return u(async()=>{e.value=(await v(async()=>{const{default:i}=await import("./chunks/index.DFIZgy63.js");return{default:i}},__vite__mapDeps([0,1,2]))).default}),(i,a)=>{const p=l("Link"),m=l("ClientOnly");return g(),h("div",null,[a[1]||(a[1]=s("h1",{id:"avatar",tabindex:"-1"},[k("Avatar "),s("a",{class:"header-anchor",href:"#avatar","aria-label":'Permalink to "Avatar"'},"​")],-1)),a[2]||(a[2]=s("p",null,"是用于表示用户或对象身份的图形化标识，通常显示为圆形或方形的图片、图标或字母组合。它在界面中建立视觉识别符号，帮助用户快速区分不同个体或实体，广泛应用于社交、通信、协作等场景。",-1)),t(p,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-avatar-%E5%A4%B4%E5%83%8F--basic"}),a[3]||(a[3]=b("",3)),f(t(n(x),null,null,512),[[_,r.value]]),t(m,null,{default:o(()=>[t(n(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:a[0]||(a[0]=()=>{r.value=!1}),vueCode:n(E)},A({_:2},[e.value?{name:"vue",fn:o(()=>[t(n(e))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{w as __pageData,D as default};
