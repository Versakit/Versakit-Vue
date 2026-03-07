const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.DtwMsGs5.js","assets/chunks/theme.B05OS8_W.js","assets/chunks/framework.DgFpiJ_E.js"])))=>i.map(i=>d[i]);
import{v as h,an as c,E as v,C as o,c as m,o as C,j as r,G as e,a6 as g,a1 as u,a as f,a4 as b,p as x,k as a,w as s,ao as w}from"./chunks/framework.DgFpiJ_E.js";import{O as y,E as k}from"./chunks/index.MUrVqN5r.js";const _=`<template>
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- 基础用法 -->
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-medium mb-4 border-b pb-2">基础用法</h3>
        <div class="flex flex-wrap gap-2">
          <Chip>默认芯片</Chip>
          <Chip color="primary">主色芯片</Chip>
          <Chip color="secondary">次要色芯片</Chip>
          <Chip color="success">成功芯片</Chip>
          <Chip color="warning">警告芯片</Chip>
          <Chip color="danger">危险芯片</Chip>
        </div>
      </div>

      <!-- 禁用状态 -->
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-medium mb-4 border-b pb-2">禁用状态</h3>
        <div class="flex flex-wrap gap-2">
          <Chip disabled>禁用芯片</Chip>
          <Chip color="primary" disabled>禁用主色</Chip>
          <Chip color="danger" disabled>禁用危险</Chip>
        </div>
      </div>

      <!-- 尺寸 -->
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-medium mb-4 border-b pb-2">尺寸</h3>
        <div class="flex items-center flex-wrap gap-3">
          <Chip size="sm" color="primary">小号</Chip>
          <Chip size="md" color="primary">中号</Chip>
          <Chip size="lg" color="primary">大号</Chip>
        </div>
      </div>

      <!-- 圆角 -->
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-medium mb-4 border-b pb-2">圆角</h3>
        <div class="flex flex-wrap gap-3">
          <Chip radius="none" color="primary">无圆角</Chip>
          <Chip radius="sm" color="primary">小圆角</Chip>
          <Chip radius="md" color="primary">中圆角</Chip>
          <Chip radius="lg" color="primary">大圆角</Chip>
          <Chip radius="full" color="primary">全圆角</Chip>
        </div>
      </div>

      <!-- 颜色 -->
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-medium mb-4 border-b pb-2">颜色</h3>
        <div class="flex flex-wrap gap-2">
          <Chip color="default">默认</Chip>
          <Chip color="primary">主色</Chip>
          <Chip color="secondary">次要色</Chip>
          <Chip color="success">成功</Chip>
          <Chip color="warning">警告</Chip>
          <Chip color="danger">危险</Chip>
        </div>
      </div>

      <!-- 自定义内容 -->
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-medium mb-4 border-b pb-2">自定义内容</h3>
        <div class="flex flex-wrap gap-3">
          <Chip color="primary">
            <template #startContent>
              <span class="text-primary-600">🔥</span>
            </template>
            热门话题
          </Chip>

          <Chip color="success">
            <template #startContent>
              <svg
                class="w-3.5 h-3.5 text-success-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </template>
            已完成
          </Chip>

          <Chip color="warning">
            需注意
            <template #endContent>
              <svg
                class="w-3.5 h-3.5 text-warning-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </template>
          </Chip>
        </div>
      </div>

      <!-- 带头像 -->
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-medium mb-4 border-b pb-2">带头像</h3>
        <div class="flex flex-wrap gap-3">
          <Chip color="primary">
            <template #avatar>
              <div
                class="flex items-center justify-center w-5 h-5 rounded-full bg-primary-500 text-white text-xs font-medium"
              >
                U
              </div>
            </template>
            用户
          </Chip>

          <Chip color="success">
            <template #avatar>
              <div
                class="flex items-center justify-center w-5 h-5 rounded-full bg-success-500 text-white text-xs font-medium"
              >
                A
              </div>
            </template>
            管理员
          </Chip>

          <Chip color="secondary">
            <template #avatar>
              <div
                class="flex items-center justify-center w-5 h-5 rounded-full bg-purple-500 text-white text-xs font-medium overflow-hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </template>
            访客
          </Chip>
        </div>
      </div>

      <!-- 关闭按钮 -->
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-medium mb-4 border-b pb-2">关闭按钮</h3>
        <div class="flex flex-wrap gap-3">
          <Chip closable @close="handleClose">可关闭芯片</Chip>
          <Chip closable color="primary" @close="handleClose">主色</Chip>
          <Chip closable color="danger" @close="handleClose">危险</Chip>
        </div>
      </div>

      <!-- 可选择 -->
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-medium mb-4 border-b pb-2">可选择</h3>
        <div class="flex flex-wrap gap-3">
          <Chip v-model="selected1" selectable color="primary">选项1</Chip>
          <Chip v-model="selected2" selectable color="secondary">选项2</Chip>
          <Chip v-model="selected3" selectable color="success">选项3</Chip>
        </div>
        <div class="mt-3 text-sm text-gray-500">
          已选择:
          {{
            [
              selected1 ? '选项1' : '',
              selected2 ? '选项2' : '',
              selected3 ? '选项3' : '',
            ]
              .filter(Boolean)
              .join(', ') || '无'
          }}
        </div>
      </div>

      <!-- 芯片列表 -->
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-medium mb-4 border-b pb-2">芯片列表</h3>
        <div class="flex flex-wrap gap-2">
          <Chip
            v-for="(tag, index) in tags"
            :key="index"
            closable
            @close="removeTag(index)"
          >
            {{ tag }}
          </Chip>
          <button
            @click="addTag"
            class="inline-flex items-center border border-dashed border-gray-300 rounded-full px-3 py-1 text-sm hover:bg-gray-50 transition-colors"
          >
            <span class="mr-1">+</span>
            添加标签
          </button>
        </div>
      </div>
    </div>

    <!-- 变体 - 占据整行 -->
    <div class="mt-8 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <h3 class="text-lg font-medium mb-4 border-b pb-2">变体</h3>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <div>
          <p class="text-sm text-gray-500 mb-2 font-medium">solid 变体</p>
          <div class="flex flex-wrap gap-2">
            <Chip variant="solid" color="default">默认</Chip>
            <Chip variant="solid" color="primary">主色</Chip>
            <Chip variant="solid" color="secondary">次要色</Chip>
            <Chip variant="solid" color="success">成功</Chip>
            <Chip variant="solid" color="warning">警告</Chip>
            <Chip variant="solid" color="danger">危险</Chip>
          </div>
        </div>
        <div>
          <p class="text-sm text-gray-500 mb-2 font-medium">bordered 变体</p>
          <div class="flex flex-wrap gap-2">
            <Chip variant="bordered" color="default">默认</Chip>
            <Chip variant="bordered" color="primary">主色</Chip>
            <Chip variant="bordered" color="secondary">次要色</Chip>
            <Chip variant="bordered" color="success">成功</Chip>
            <Chip variant="bordered" color="warning">警告</Chip>
            <Chip variant="bordered" color="danger">危险</Chip>
          </div>
        </div>
        <div>
          <p class="text-sm text-gray-500 mb-2 font-medium">light 变体</p>
          <div class="flex flex-wrap gap-2">
            <Chip variant="light" color="default">默认</Chip>
            <Chip variant="light" color="primary">主色</Chip>
            <Chip variant="light" color="secondary">次要色</Chip>
            <Chip variant="light" color="success">成功</Chip>
            <Chip variant="light" color="warning">警告</Chip>
            <Chip variant="light" color="danger">危险</Chip>
          </div>
        </div>
        <div>
          <p class="text-sm text-gray-500 mb-2 font-medium">flat 变体</p>
          <div class="flex flex-wrap gap-2">
            <Chip variant="flat" color="default">默认</Chip>
            <Chip variant="flat" color="primary">主色</Chip>
            <Chip variant="flat" color="secondary">次要色</Chip>
            <Chip variant="flat" color="success">成功</Chip>
            <Chip variant="flat" color="warning">警告</Chip>
            <Chip variant="flat" color="danger">危险</Chip>
          </div>
        </div>
        <div>
          <p class="text-sm text-gray-500 mb-2 font-medium">faded 变体</p>
          <div class="flex flex-wrap gap-2">
            <Chip variant="faded" color="default">默认</Chip>
            <Chip variant="faded" color="primary">主色</Chip>
            <Chip variant="faded" color="secondary">次要色</Chip>
            <Chip variant="faded" color="success">成功</Chip>
            <Chip variant="faded" color="warning">警告</Chip>
            <Chip variant="faded" color="danger">危险</Chip>
          </div>
        </div>
        <div>
          <p class="text-sm text-gray-500 mb-2 font-medium">shadow 变体</p>
          <div class="flex flex-wrap gap-2">
            <Chip variant="shadow" color="default">默认</Chip>
            <Chip variant="shadow" color="primary">主色</Chip>
            <Chip variant="shadow" color="secondary">次要色</Chip>
            <Chip variant="shadow" color="success">成功</Chip>
            <Chip variant="shadow" color="warning">警告</Chip>
            <Chip variant="shadow" color="danger">危险</Chip>
          </div>
        </div>
        <div>
          <p class="text-sm text-gray-500 mb-2 font-medium">dot 变体</p>
          <div class="flex flex-wrap gap-2">
            <Chip variant="dot" color="default">默认</Chip>
            <Chip variant="dot" color="primary">主色</Chip>
            <Chip variant="dot" color="secondary">次要色</Chip>
            <Chip variant="dot" color="success">成功</Chip>
            <Chip variant="dot" color="warning">警告</Chip>
            <Chip variant="dot" color="danger">危险</Chip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Chip } from '@versakit/vue'

const selected1 = ref(false)
const selected2 = ref(true)
const selected3 = ref(false)

const tags = ref(['Vue', 'React', 'Angular', 'Svelte'])

const handleClose = (event: Event) => {
  console.log('芯片被关闭', event)
}

const removeTag = (index: number) => {
  tags.value.splice(index, 1)
}

const addTag = () => {
  const frameworks = ['Next.js', 'Nuxt', 'Vite', 'Astro', 'SolidJS', 'Preact']
  const randomIndex = Math.floor(Math.random() * frameworks.length)
  if (!tags.value.includes(frameworks[randomIndex])) {
    tags.value.push(frameworks[randomIndex])
  }
}
<\/script>
`,A=JSON.parse('{"title":"Chip","description":"","frontmatter":{},"headers":[],"relativePath":"components/chip/index.md","filePath":"components/chip/index.md"}'),V={name:"components/chip/index.md"},T=Object.assign(V,{setup(B){const t=x(!0),i=v();return h(async()=>{i.value=(await c(async()=>{const{default:l}=await import("./chunks/index.DtwMsGs5.js");return{default:l}},__vite__mapDeps([0,1,2]))).default}),(l,n)=>{const d=o("Link"),p=o("ClientOnly");return C(),m("div",null,[n[1]||(n[1]=r("h1",{id:"chip",tabindex:"-1"},[f("Chip "),r("a",{class:"header-anchor",href:"#chip","aria-label":'Permalink to "Chip"'},"​")],-1)),n[2]||(n[2]=r("p",null,"Chip 是一种轻量化的标签组件，用于表示分类、标签、选择项或用户等信息。它通常以圆角矩形或胶囊形呈现，支持添加、删除或筛选操作，在有限空间内高效展示关键词或状态，常见于标签云、筛选条件、用户列表等场景。",-1)),e(d,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-chip-%E6%A0%87%E7%AD%BE--basic"}),n[3]||(n[3]=g('<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Chip } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@versakit/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>',3)),u(e(a(y),null,null,512),[[b,t.value]]),e(p,null,{default:s(()=>[e(a(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[0]||(n[0]=()=>{t.value=!1}),vueCode:a(_)},w({_:2},[i.value?{name:"vue",fn:s(()=>[e(a(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{A as __pageData,T as default};
