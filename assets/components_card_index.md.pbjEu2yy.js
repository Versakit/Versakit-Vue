const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.BaXyqtwt.js","assets/chunks/theme.frOZSD7M.js","assets/chunks/framework.Cpyw2Gc9.js"])))=>i.map(i=>d[i]);
import{p,D as m,v as u,aj as v,B as i,c as h,o as g,j as s,G as e,ai as f,a1 as x,a as b,a2 as C,k as t,w as l,ak as y}from"./chunks/framework.Cpyw2Gc9.js";import{O as k,E as w}from"./chunks/index.CSC85q1C.js";const _=`<template>
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
`,j=JSON.parse('{"title":"Card","description":"","frontmatter":{},"headers":[],"relativePath":"components/card/index.md","filePath":"components/card/index.md"}'),B={name:"components/card/index.md"},D=Object.assign(B,{setup(V){const d=p(!0),a=m();return u(async()=>{a.value=(await v(async()=>{const{default:r}=await import("./chunks/index.BaXyqtwt.js");return{default:r}},__vite__mapDeps([0,1,2]))).default}),(r,n)=>{const o=i("Link"),c=i("ClientOnly");return g(),h("div",null,[n[1]||(n[1]=s("h1",{id:"card",tabindex:"-1"},[b("Card "),s("a",{class:"header-anchor",href:"#card","aria-label":'Permalink to "Card"'},"​")],-1)),n[2]||(n[2]=s("p",null,"Card 是一种将相关信息聚合在一起的容器组件，通常以矩形卡片形式呈现，具有独立的视觉边界。它通过分组内容创造清晰的视觉层次，支持多样化的内容结构（如图片、文本、按钮），广泛应用于信息展示、内容聚合和操作入口场景。",-1)),e(o,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-card-%E5%8D%A1%E7%89%87--basic"}),n[3]||(n[3]=f('<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Card } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@versakit/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>',3)),x(e(t(k),null,null,512),[[C,d.value]]),e(c,null,{default:l(()=>[e(t(w),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[0]||(n[0]=()=>{d.value=!1}),vueCode:t(_)},y({_:2},[a.value?{name:"vue",fn:l(()=>[e(t(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{j as __pageData,D as default};
