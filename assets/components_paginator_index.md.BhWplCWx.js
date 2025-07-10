const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.DvDThR6d.js","assets/chunks/theme.DAOLVbAS.js","assets/chunks/framework.DLuSxX4C.js"])))=>i.map(i=>d[i]);
import{p as k,D as g,v as c,al as u,C as l,c as m,o as y,j as n,G as a,ak as r,a0 as b,a as v,a3 as F,k as s,w as h,am as P}from"./chunks/framework.DLuSxX4C.js";import{O as x,E as B}from"./chunks/index.Bhh2hZnL.js";const f=`<template>
  <div class="space-y-8">
    <!-- 基础分页器 -->
    <section>
      <h3 class="text-lg font-medium mb-4">基础分页器</h3>
      <Paginator :totalPages="10" />
    </section>

    <!-- 分页器大小 -->
    <section>
      <h3 class="text-lg font-medium mb-4">分页器大小</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">小尺寸</p>
          <Paginator :totalPages="10" size="sm" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">中尺寸</p>
          <Paginator :totalPages="10" size="md" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">大尺寸</p>
          <Paginator :totalPages="10" size="lg" />
        </div>
      </div>
    </section>

    <!-- 分页器变体 -->
    <section>
      <h3 class="text-lg font-medium mb-4">分页器变体</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">默认样式</p>
          <Paginator :totalPages="10" variant="default" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">轮廓样式</p>
          <Paginator :totalPages="10" variant="outline" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">文本样式</p>
          <Paginator :totalPages="10" variant="text" />
        </div>
      </div>
    </section>

    <!-- 分页器形状 -->
    <section>
      <h3 class="text-lg font-medium mb-4">分页器形状</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">方形</p>
          <Paginator :totalPages="10" shape="square" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">圆角</p>
          <Paginator :totalPages="10" shape="rounded" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">圆形</p>
          <Paginator :totalPages="10" shape="circle" />
        </div>
      </div>
    </section>

    <!-- 可见页码数量 -->
    <section>
      <h3 class="text-lg font-medium mb-4">可见页码数量</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">显示3个页码</p>
          <Paginator :totalPages="20" :visiblePageCount="3" :modelValue="10" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">显示5个页码</p>
          <Paginator :totalPages="20" :visiblePageCount="5" :modelValue="10" />
        </div>
      </div>
    </section>

    <!-- 带页码跳转 -->
    <section>
      <h3 class="text-lg font-medium mb-4">带页码跳转</h3>
      <Paginator :totalPages="100" showJumper />
    </section>

    <!-- 受控分页器 -->
    <section>
      <h3 class="text-lg font-medium mb-4">受控分页器</h3>
      <div class="space-y-4">
        <p>当前页码: {{ currentPage }}</p>
        <Paginator :totalPages="10" v-model="currentPage" />
        <div class="flex gap-2">
          <button
            @click="currentPage = Math.max(1, currentPage - 1)"
            class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            上一页
          </button>
          <button
            @click="currentPage = Math.min(10, currentPage + 1)"
            class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            下一页
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Paginator } from '@versakit/vue'

const currentPage = ref(1)
<\/script>
`,D=JSON.parse('{"title":"Paginator","description":"","frontmatter":{},"headers":[],"relativePath":"components/paginator/index.md","filePath":"components/paginator/index.md"}'),C={name:"components/paginator/index.md"},V=Object.assign(C,{setup(_){const e=k(!0),i=g();return c(async()=>{i.value=(await u(async()=>{const{default:d}=await import("./chunks/index.DvDThR6d.js");return{default:d}},__vite__mapDeps([0,1,2]))).default}),(d,t)=>{const p=l("Link"),o=l("ClientOnly");return y(),m("div",null,[t[1]||(t[1]=n("h1",{id:"paginator",tabindex:"-1"},[v("Paginator "),n("a",{class:"header-anchor",href:"#paginator","aria-label":'Permalink to "Paginator"'},"​")],-1)),t[2]||(t[2]=n("p",null,"Paginator 是一个分页导航组件，用于在大量数据中进行页面切换和导航。它提供了多种样式变体和自定义配置，支持不同的分页场景，如表格数据分页、内容列表分页等。",-1)),a(p,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-paginator-%E5%88%86%E9%A1%B5%E5%99%A8--basic"}),t[3]||(t[3]=r('<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Paginator } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@versakit/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>',3)),b(a(s(x),null,null,512),[[F,e.value]]),a(o,null,{default:h(()=>[a(s(B),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{e.value=!1}),vueCode:s(f)},P({_:2},[i.value?{name:"vue",fn:h(()=>[a(s(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=r(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>当前页码</td><td>number</td><td>1</td></tr><tr><td>totalPages</td><td>总页数</td><td>number</td><td>-</td></tr><tr><td>visiblePageCount</td><td>显示的页码按钮数量</td><td>number</td><td>5</td></tr><tr><td>showEndButtons</td><td>是否显示首页和尾页按钮</td><td>boolean</td><td>true</td></tr><tr><td>showPrevNextButtons</td><td>是否显示上一页和下一页按钮</td><td>boolean</td><td>true</td></tr><tr><td>showJumper</td><td>是否显示页码跳转输入框</td><td>boolean</td><td>false</td></tr><tr><td>size</td><td>分页器大小</td><td>&#39;sm&#39; | &#39;md&#39; | &#39;lg&#39;</td><td>&#39;md&#39;</td></tr><tr><td>variant</td><td>分页器样式变体</td><td>&#39;default&#39; | &#39;outline&#39; | &#39;text&#39;</td><td>&#39;default&#39;</td></tr><tr><td>shape</td><td>分页器形状</td><td>&#39;square&#39; | &#39;rounded&#39; | &#39;circle&#39;</td><td>&#39;rounded&#39;</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>false</td></tr><tr><td>unstyled</td><td>是否使用无样式模式</td><td>boolean</td><td>false</td></tr><tr><td>pt</td><td>传递模板样式</td><td>PaginatorPT</td><td>-</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:modelValue</td><td>页码变化时触发</td><td>(page: number) =&gt; void</td></tr><tr><td>change</td><td>页码变化时触发</td><td>(page: number) =&gt; void</td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>first-button</td><td>自定义首页按钮</td></tr><tr><td>prev-button</td><td>自定义上一页按钮</td></tr><tr><td>next-button</td><td>自定义下一页按钮</td></tr><tr><td>last-button</td><td>自定义尾页按钮</td></tr></tbody></table><h3 id="样式定制" tabindex="-1">样式定制 <a class="header-anchor" href="#样式定制" aria-label="Permalink to &quot;样式定制&quot;">​</a></h3><p>当使用 <code>unstyled</code> 模式时，可以通过 <code>pt</code> 属性传递自定义样式：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PaginatorPT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	root</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	list</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	button</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	activeButton</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	prevButton</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	nextButton</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	firstButton</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	lastButton</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	ellipsis</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	jumper</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	jumperInput</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	jumperButton</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,10))])}}});export{D as __pageData,V as default};
