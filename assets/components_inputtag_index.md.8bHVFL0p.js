const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.De15rCpb.js","assets/chunks/framework.EjIRsQ6G.js","assets/chunks/theme.ZgN51Vax.js"])))=>i.map(i=>d[i]);
import{p as h,D as u,v as g,aq as m,C as l,c as k,o as b,j as a,G as e,ap as o,a1 as f,a as v,a4 as x,k as n,w as r,ar as y}from"./chunks/framework.EjIRsQ6G.js";import{O as T,E as F}from"./chunks/index.CypwxoU1.js";const _=`<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="max-w-md">
        <InputTag v-model="tagValue" placeholder="请输入标签后按回车" />
        <div class="text-sm text-gray-500 mt-2">
          当前标签值: {{ tagValue.join(', ') || '空' }}
        </div>
      </div>
    </section>

    <!-- 预设标签 -->
    <section>
      <h2 class="text-lg font-medium mb-4">预设标签</h2>
      <div class="max-w-md">
        <InputTag v-model="presetTags" placeholder="请输入更多标签" />
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同尺寸</h2>
      <div class="grid grid-cols-1 gap-4 max-w-md">
        <InputTag
          v-model="sizeTags"
          size="small"
          placeholder="小型标签输入框"
        />
        <InputTag
          v-model="sizeTags"
          size="default"
          placeholder="默认尺寸标签输入框"
        />
        <InputTag
          v-model="sizeTags"
          size="large"
          placeholder="大型标签输入框"
        />
      </div>
    </section>

    <!-- 前缀和后缀 -->
    <section>
      <h2 class="text-lg font-medium mb-4">前缀和后缀</h2>
      <div class="grid grid-cols-1 gap-4 max-w-md">
        <InputTag v-model="prefixTags" placeholder="带前缀">
          <template #prefix>标签:</template>
        </InputTag>
        <InputTag v-model="suffixTags" placeholder="带后缀">
          <template #suffix>+</template>
        </InputTag>
      </div>
    </section>

    <!-- 最大数量和计数 -->
    <section>
      <h2 class="text-lg font-medium mb-4">最大数量和计数</h2>
      <div class="max-w-md">
        <InputTag
          v-model="maxCountTags"
          :maxCount="5"
          showCount
          placeholder="最多添加5个标签"
        />
      </div>
    </section>

    <!-- 不可关闭 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不可关闭标签</h2>
      <div class="max-w-md">
        <InputTag
          v-model="fixedTags"
          :closable="false"
          placeholder="标签不可删除"
        />
      </div>
    </section>

    <!-- 不同状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同状态</h2>
      <div class="grid grid-cols-1 gap-4 max-w-md">
        <InputTag v-model="statusTags" status="error" placeholder="错误状态" />
        <InputTag
          v-model="statusTags"
          status="warning"
          placeholder="警告状态"
        />
        <InputTag
          v-model="statusTags"
          status="success"
          placeholder="成功状态"
        />
      </div>
    </section>

    <!-- 禁用和只读 -->
    <section>
      <h2 class="text-lg font-medium mb-4">禁用和只读</h2>
      <div class="grid grid-cols-1 gap-4 max-w-md">
        <InputTag v-model="disabledTags" disabled placeholder="禁用状态" />
        <InputTag v-model="readonlyTags" readonly placeholder="只读状态" />
      </div>
    </section>

    <!-- 自定义样式 -->
    <section>
      <h2 class="text-lg font-medium mb-4">自定义样式 (PT)</h2>
      <div class="max-w-md">
        <InputTag
          v-model="customTags"
          placeholder="自定义样式"
          :pt="{
            wrapper:
              'border-purple-500 focus-within:border-purple-700 focus-within:ring-purple-200',
            tag: 'bg-purple-100 text-purple-800 border border-purple-300',
            tagClose: 'text-purple-800 hover:text-purple-950',
          }"
        />
      </div>
    </section>

    <!-- 无样式模式 -->
    <section>
      <h2 class="text-lg font-medium mb-4">无样式模式</h2>
      <div class="max-w-md">
        <InputTag
          v-model="unstyledTags"
          placeholder="自定义所有样式"
          unstyled
          :pt="{
            root: 'w-full',
            wrapper:
              'bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 rounded-md flex flex-wrap items-center',
            input: 'px-3 py-1 bg-white flex-grow outline-none rounded-sm',
            tag: 'bg-blue-100 text-blue-800 rounded-full px-3 py-1 m-1 flex items-center',
            tagClose: 'ml-1 text-blue-500 hover:text-blue-700 font-bold',
          }"
        />
      </div>
    </section>

    <!-- 实际应用案例 -->
    <section>
      <h2 class="text-lg font-medium mb-4">实际应用案例: 文章标签</h2>
      <div class="max-w-lg border p-4 rounded-md shadow-sm bg-white">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            文章标题
          </label>
          <input
            type="text"
            v-model="article.title"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="请输入文章标题"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            文章标签
            <span class="text-xs text-gray-500">(最多5个)</span>
          </label>
          <InputTag
            v-model="article.tags"
            :maxCount="5"
            showCount
            placeholder="输入标签后按回车"
          />
        </div>

        <div>
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            :disabled="!article.title || article.tags.length === 0"
          >
            发布文章
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputTag } from '@versakit/vue'

// 基础用法
const tagValue = ref<string[]>([])

// 预设标签
const presetTags = ref<string[]>(['JavaScript', 'Vue', 'React'])

// 不同尺寸
const sizeTags = ref<string[]>(['小', '中', '大'])

// 前缀和后缀
const prefixTags = ref<string[]>(['前缀示例'])
const suffixTags = ref<string[]>(['后缀示例'])

// 最大数量和计数
const maxCountTags = ref<string[]>(['限制数量'])

// 不可关闭
const fixedTags = ref<string[]>(['固定标签1', '固定标签2'])

// 不同状态
const statusTags = ref<string[]>(['状态示例'])

// 禁用和只读
const disabledTags = ref<string[]>(['禁用标签'])
const readonlyTags = ref<string[]>(['只读标签'])

// 自定义样式
const customTags = ref<string[]>(['自定义', '样式'])

// 无样式模式
const unstyledTags = ref<string[]>(['完全', '自定义'])

// 实际应用案例
const article = ref({
  title: '',
  tags: ['Vue3', 'TypeScript'],
})
<\/script>
`,I=JSON.parse('{"title":"InputTag 标签输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/inputtag/index.md","filePath":"components/inputtag/index.md"}'),C={name:"components/inputtag/index.md"},B=Object.assign(C,{setup(w){const d=h(!0),s=u();return g(async()=>{s.value=(await m(async()=>{const{default:i}=await import("./chunks/index.De15rCpb.js");return{default:i}},__vite__mapDeps([0,1,2]))).default}),(i,t)=>{const p=l("Link"),c=l("ClientOnly");return b(),k("div",null,[t[1]||(t[1]=a("h1",{id:"inputtag-标签输入框",tabindex:"-1"},[v("InputTag 标签输入框 "),a("a",{class:"header-anchor",href:"#inputtag-标签输入框","aria-label":'Permalink to "InputTag 标签输入框"'},"​")],-1)),t[2]||(t[2]=a("p",null,"InputTag 是一个用于输入和展示多个标签的组件，常用于关键词、标签、邮箱等需要多值输入的场景。",-1)),e(p,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-inputtag-%E6%A0%87%E7%AD%BE%E8%BE%93%E5%85%A5%E6%A1%86--basic"}),t[3]||(t[3]=o('<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { InputTag } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@versakit/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>',3)),f(e(n(T),null,null,512),[[x,d.value]]),e(c,null,{default:r(()=>[e(n(F),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{d.value=!1}),vueCode:n(_)},y({_:2},[s.value?{name:"vue",fn:r(()=>[e(n(s))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=o(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>标签值数组</td><td><code>string[]</code></td><td><code>[]</code></td></tr><tr><td>placeholder</td><td>占位符文本</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>readonly</td><td>是否只读</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>输入框尺寸</td><td><code>&#39;small&#39; | &#39;default&#39; | &#39;large&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>prefixIcon</td><td>前缀图标</td><td><code>string</code></td><td>-</td></tr><tr><td>suffixIcon</td><td>后缀图标</td><td><code>string</code></td><td>-</td></tr><tr><td>closable</td><td>是否可关闭标签</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>maxCount</td><td>最大标签数量</td><td><code>number</code></td><td>-</td></tr><tr><td>showCount</td><td>是否显示数量统计</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>autofocus</td><td>自动获取焦点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>status</td><td>输入框状态</td><td><code>&#39;error&#39; | &#39;warning&#39; | &#39;success&#39;</code></td><td>-</td></tr><tr><td>unstyled</td><td>是否使用无样式模式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pt</td><td>传递模板样式</td><td><code>InputTagPT</code></td><td>-</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>update:modelValue</td><td>更新标签值时触发</td><td><code>(value: string[])</code></td></tr><tr><td>change</td><td>标签值变化时触发</td><td><code>(value: string[])</code></td></tr><tr><td>add</td><td>添加标签时触发</td><td><code>(value: string)</code></td></tr><tr><td>remove</td><td>移除标签时触发</td><td><code>(value: string, index: number)</code></td></tr><tr><td>focus</td><td>获得焦点时触发</td><td><code>(event: FocusEvent)</code></td></tr><tr><td>blur</td><td>失去焦点时触发</td><td><code>(event: FocusEvent)</code></td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>prefix</td><td>前缀内容</td></tr><tr><td>suffix</td><td>后缀内容</td></tr></tbody></table><h3 id="样式接口" tabindex="-1">样式接口 <a class="header-anchor" href="#样式接口" aria-label="Permalink to &quot;样式接口&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> InputTagPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	root</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	wrapper</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	input</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	prefix</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	suffix</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	tag</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	tagClose</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,9))])}}});export{I as __pageData,B as default};
