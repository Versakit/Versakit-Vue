const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.CER2-8vX.js","assets/chunks/theme.DXf4p6wh.js","assets/chunks/framework.dgRUQZ7Z.js"])))=>i.map(i=>d[i]);
import{p as l,D as o,v as c,aj as p,B as m,c as u,o as v,ai as h,a1 as g,G as e,a3 as f,k as t,w as r,ak as x}from"./chunks/framework.dgRUQZ7Z.js";import{O as b,E as C}from"./chunks/index.CtCYMtlW.js";const y=`<template>
  <div class="space-y-8">
    <!-- 基础卡片 -->
    <section>
      <h3 class="text-lg font-medium mb-4">基础卡片</h3>
      <Card>
        <p>这是一个基础卡片，使用默认的样式和设置。</p>
      </Card>
    </section>

    <!-- 变体样式 -->
    <section>
      <h3 class="text-lg font-medium mb-4">变体样式</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card variant="default">
          <p class="font-medium">默认卡片</p>
          <p class="text-gray-600">不带边框和阴影</p>
        </Card>
        <Card variant="bordered">
          <p class="font-medium">带边框卡片</p>
          <p class="text-gray-600">有边框的卡片</p>
        </Card>
        <Card variant="elevated">
          <p class="font-medium">阴影卡片</p>
          <p class="text-gray-600">带阴影效果的卡片</p>
        </Card>
      </div>
    </section>

    <!-- 内边距设置 -->
    <section>
      <h3 class="text-lg font-medium mb-4">内边距设置</h3>
      <div class="flex flex-col gap-4">
        <Card variant="bordered" padding="none" class="overflow-hidden">
          <img
            src="https://picsum.photos/600/200"
            alt="无内边距卡片"
            class="w-full h-40 object-cover"
          />
          <div class="p-4">
            <p class="font-medium">无内边距</p>
            <p class="text-gray-600">内容可以自定义内边距</p>
          </div>
        </Card>
        <div class="grid grid-cols-3 gap-4">
          <Card variant="bordered" padding="sm">
            <p class="font-medium">小内边距</p>
          </Card>
          <Card variant="bordered" padding="md">
            <p class="font-medium">中内边距</p>
          </Card>
          <Card variant="bordered" padding="lg">
            <p class="font-medium">大内边距</p>
          </Card>
        </div>
      </div>
    </section>

    <!-- 圆角设置 -->
    <section>
      <h3 class="text-lg font-medium mb-4">圆角设置</h3>
      <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card variant="bordered" radius="none">
          <p class="font-medium">无圆角</p>
        </Card>
        <Card variant="bordered" radius="sm">
          <p class="font-medium">小圆角</p>
        </Card>
        <Card variant="bordered" radius="md">
          <p class="font-medium">中圆角</p>
        </Card>
        <Card variant="bordered" radius="lg">
          <p class="font-medium">大圆角</p>
        </Card>
        <Card variant="bordered" radius="full">
          <p class="font-medium">满圆角</p>
        </Card>
      </div>
    </section>

    <!-- 悬停效果 -->
    <section>
      <h3 class="text-lg font-medium mb-4">悬停效果</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card variant="bordered" hover>
          <p class="font-medium">悬停效果</p>
          <p class="text-gray-600">鼠标悬停时会有阴影效果</p>
        </Card>
        <Card variant="elevated" hover>
          <p class="font-medium">增强阴影</p>
          <p class="text-gray-600">悬停时阴影变大</p>
        </Card>
      </div>
    </section>

    <!-- 插槽使用 -->
    <section>
      <h3 class="text-lg font-medium mb-4">插槽使用</h3>
      <Card variant="bordered">
        <template #header>
          <div class="flex justify-between items-center">
            <h4 class="text-xl font-bold">卡片标题</h4>
            <button class="text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
          </div>
        </template>

        <p class="text-gray-600">这是卡片的主体内容区域，可以放置任何内容。</p>
        <p class="mt-2">支持多个段落或复杂布局。</p>

        <template #footer>
          <div class="flex gap-2">
            <button
              class="px-3 py-1 bg-primary-600 text-white rounded-md text-sm"
            >
              确认
            </button>
            <button class="px-3 py-1 border border-gray-300 rounded-md text-sm">
              取消
            </button>
          </div>
        </template>
      </Card>
    </section>

    <!-- 综合示例 -->
    <section>
      <h3 class="text-lg font-medium mb-4">综合示例</h3>
      <div class="flex flex-col gap-6">
        <!-- 产品卡片 -->
        <Card
          variant="bordered"
          radius="lg"
          hover
          padding="none"
          class="overflow-hidden"
        >
          <img
            src="https://picsum.photos/600/300"
            alt="产品图片"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h4 class="font-bold text-lg">产品标题</h4>
            <p class="text-gray-600 mt-1">产品描述文字</p>
            <div class="mt-4 flex justify-between items-center">
              <span class="font-bold text-lg">¥199.00</span>
              <button
                class="px-3 py-1 bg-primary-600 text-white rounded-md text-sm"
              >
                加入购物车
              </button>
            </div>
          </div>
        </Card>

        <!-- 文章卡片 -->
        <Card variant="elevated" radius="md" hover>
          <template #header>
            <h4 class="font-bold text-lg">文章标题</h4>
            <div class="flex items-center gap-2 mt-1 text-sm text-gray-500">
              <span>作者名称</span>
              <span>•</span>
              <span>2023-06-15</span>
            </div>
          </template>

          <p class="text-gray-600">
            这是文章摘要，简要介绍文章的主要内容和观点，吸引读者点击阅读全文...
          </p>

          <template #footer>
            <div class="flex justify-between items-center w-full">
              <div class="flex gap-3 text-gray-500">
                <span class="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  128
                </span>
                <span class="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                    />
                  </svg>
                  36
                </span>
              </div>
              <button class="text-primary-600 text-sm">阅读全文</button>
            </div>
          </template>
        </Card>

        <!-- 统计卡片 -->
        <Card variant="bordered" radius="md">
          <template #header>
            <div class="flex justify-between items-center">
              <h4 class="font-bold">月度统计</h4>
              <div
                class="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full"
              >
                +12.5%
              </div>
            </div>
          </template>

          <div class="flex justify-between items-center my-2">
            <div>
              <div class="text-3xl font-bold">1,568</div>
              <div class="text-sm text-gray-500">总访问量</div>
            </div>
            <div class="h-16 w-24 bg-gray-100 rounded"></div>
          </div>

          <template #footer>
            <button class="w-full text-center text-sm text-primary-600">
              查看详情
            </button>
          </template>
        </Card>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Card } from '@versakit/vue'
<\/script>
`,V=JSON.parse('{"title":"Card","description":"","frontmatter":{},"headers":[],"relativePath":"components/card/index.md","filePath":"components/card/index.md"}'),w={name:"components/card/index.md"},j=Object.assign(w,{setup(k){const s=l(!0),a=o();return c(async()=>{a.value=(await p(async()=>{const{default:d}=await import("./chunks/index.CER2-8vX.js");return{default:d}},__vite__mapDeps([0,1,2]))).default}),(d,n)=>{const i=m("ClientOnly");return v(),u("div",null,[n[1]||(n[1]=h("",5)),g(e(t(b),null,null,512),[[f,s.value]]),e(i,null,{default:r(()=>[e(t(C),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[0]||(n[0]=()=>{s.value=!1}),vueCode:t(y)},x({_:2},[a.value?{name:"vue",fn:r(()=>[e(t(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{V as __pageData,j as default};
