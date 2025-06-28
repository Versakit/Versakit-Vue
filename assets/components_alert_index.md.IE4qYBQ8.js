const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.IMVk2ZmI.js","assets/chunks/theme.BRH0OaeS.js","assets/chunks/framework.dgRUQZ7Z.js"])))=>i.map(i=>d[i]);
import{p as o,D as c,v as h,aj as u,B as v,c as m,o as p,ai as r,a1 as b,G as e,a3 as A,k as n,w as s,ak as f}from"./chunks/framework.dgRUQZ7Z.js";import{O as _,E as g}from"./chunks/index.CtCYMtlW.js";const y=`<template>
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
`,V=JSON.parse('{"title":"Alert 警告提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/alert/index.md","filePath":"components/alert/index.md"}'),k={name:"components/alert/index.md"},T=Object.assign(k,{setup(x){const l=o(!0),a=c();return h(async()=>{a.value=(await u(async()=>{const{default:i}=await import("./chunks/index.IMVk2ZmI.js");return{default:i}},__vite__mapDeps([0,1,2]))).default}),(i,t)=>{const d=v("ClientOnly");return p(),m("div",null,[t[1]||(t[1]=r('<h1 id="alert-警告提示" tabindex="-1">Alert 警告提示 <a class="header-anchor" href="#alert-警告提示" aria-label="Permalink to &quot;Alert 警告提示&quot;">​</a></h1><p>Alert 是一种用于展示重要信息或操作结果的通知组件，通常以醒目的样式出现在页面中。它不打断用户当前操作，但需用户主动关注，用于传达成功、错误、警告或信息类反馈。</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Alert } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@versakit/vue&#39;</span></span></code></pre></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2>',5)),b(e(n(_),null,null,512),[[A,l.value]]),e(d,null,{default:s(()=>[e(n(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{l.value=!1}),vueCode:n(y)},f({_:2},[a.value?{name:"vue",fn:s(()=>[e(n(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[2]||(t[2]=r('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>variant</td><td>警告框的变体样式</td><td><code>&#39;success&#39;</code> | <code>&#39;error&#39;</code> | <code>&#39;warning&#39;</code> | <code>&#39;info&#39;</code></td><td><code>&#39;info&#39;</code></td></tr><tr><td>closable</td><td>是否可关闭</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>rounded</td><td>圆角大小</td><td><code>&#39;none&#39;</code> | <code>&#39;sm&#39;</code> | <code>&#39;md&#39;</code> | <code>&#39;lg&#39;</code> | <code>&#39;full&#39;</code></td><td><code>&#39;md&#39;</code></td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>close</td><td>关闭按钮点击时触发</td><td>-</td></tr></tbody></table><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>警告框的内容</td></tr><tr><td>title</td><td>警告框的标题</td></tr><tr><td>icon</td><td>自定义图标</td></tr></tbody></table>',6))])}}});export{V as __pageData,T as default};
