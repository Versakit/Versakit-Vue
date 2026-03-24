const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.BkYR3Qc0.js","assets/chunks/theme.C5wo75LW.js","assets/chunks/framework.CGvGDOMX.js"])))=>i.map(i=>d[i]);
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
`,A=JSON.parse('{"title":"Toast 轻提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/toast/index.md","filePath":"components/toast/index.md"}'),x={name:"components/toast/index.md"},W=Object.assign(x,{setup(k){const s=v(!0),n=h();return c(async()=>{n.value=(await l(async()=>{const{default:a}=await import("./chunks/index.BkYR3Qc0.js");return{default:a}},__vite__mapDeps([0,1,2]))).default}),(a,t)=>{const r=p("ClientOnly");return m(),u("div",null,[t[1]||(t[1]=d('<h1 id="toast-轻提示" tabindex="-1">Toast 轻提示 <a class="header-anchor" href="#toast-轻提示" aria-label="Permalink to &quot;Toast 轻提示&quot;">​</a></h1><p>Toast 是一种轻量级的全局反馈组件，用于展示操作结果或状态信息，不会打断当前页面流程。</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Toast } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@versakit/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>',5)),g(e(o(f),null,null,512),[[b,s.value]]),e(r,null,{default:i(()=>[e(o(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{s.value=!1}),vueCode:o(T)},_({_:2},[n.value?{name:"vue",fn:i(()=>[e(o(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[2]||(t[2]=d('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="toast-方法" tabindex="-1">Toast 方法 <a class="header-anchor" href="#toast-方法" aria-label="Permalink to &quot;Toast 方法&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>Toast.success</code></td><td>成功类型提示</td><td><code>(message: string, options?: Omit&lt;ToastOptions, &#39;message&#39; | &#39;type&#39;&gt;)</code></td></tr><tr><td><code>Toast.error</code></td><td>错误类型提示</td><td><code>(message: string, options?: Omit&lt;ToastOptions, &#39;message&#39; | &#39;type&#39;&gt;)</code></td></tr><tr><td><code>Toast.warning</code></td><td>警告类型提示</td><td><code>(message: string, options?: Omit&lt;ToastOptions, &#39;message&#39; | &#39;type&#39;&gt;)</code></td></tr><tr><td><code>Toast.info</code></td><td>信息类型提示</td><td><code>(message: string, options?: Omit&lt;ToastOptions, &#39;message&#39; | &#39;type&#39;&gt;)</code></td></tr><tr><td><code>Toast.show</code></td><td>自定义类型与配置</td><td><code>(options: ToastOptions)</code></td></tr><tr><td><code>Toast.remove</code></td><td>根据 id 移除提示</td><td><code>(id: string)</code></td></tr><tr><td><code>Toast.removeAll</code></td><td>移除全部提示</td><td><code>()</code></td></tr></tbody></table><h3 id="toastoptions" tabindex="-1">ToastOptions <a class="header-anchor" href="#toastoptions" aria-label="Permalink to &quot;ToastOptions&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>message</td><td>提示内容</td><td><code>string</code></td><td>-</td></tr><tr><td>type</td><td>提示类型</td><td><code>&#39;success&#39; | &#39;warning&#39; | &#39;info&#39; | &#39;error&#39;</code></td><td><code>&#39;info&#39;</code></td></tr><tr><td>duration</td><td>自动关闭时长（毫秒）</td><td><code>number</code></td><td><code>3000</code></td></tr><tr><td>position</td><td>显示位置</td><td><code>&#39;top-left&#39; | &#39;top-right&#39; | &#39;bottom-left&#39; | &#39;bottom-right&#39; | &#39;top-center&#39; | &#39;bottom-center&#39;</code></td><td><code>&#39;top-right&#39;</code></td></tr><tr><td>onClose</td><td>关闭回调</td><td><code>(id: string) =&gt; void</code></td><td>-</td></tr></tbody></table>',5))])}}});export{A as __pageData,W as default};
