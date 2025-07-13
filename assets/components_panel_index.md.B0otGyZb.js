const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.IFTHufva.js","assets/chunks/theme.DiT8x9tc.js","assets/chunks/framework.BLoOr4aB.js"])))=>i.map(i=>d[i]);
import{p as c,D as k,v as u,am as g,C as d,c as m,o as b,j as s,G as a,al as r,a0 as v,a as y,a3 as f,k as e,w as o,an as _}from"./chunks/framework.BLoOr4aB.js";import{O as P,E as x}from"./chunks/index.ClrLodpm.js";const F=`<template>
  <div class="space-y-8">
    <!-- 基础面板 -->
    <section>
      <h3 class="text-lg font-medium mb-4">基础面板</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Panel title="基础面板">
          <p>这是一个基础面板的内容区域。</p>
        </Panel>
        <Panel title="带边框面板" variant="bordered">
          <p>这是一个带边框面板的内容区域。</p>
        </Panel>
      </div>
    </section>

    <!-- 面板变体 -->
    <section>
      <h3 class="text-lg font-medium mb-4">面板变体</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Panel title="默认面板" variant="default">
          <p>这是默认样式的面板。</p>
        </Panel>
        <Panel title="带边框面板" variant="bordered">
          <p>这是带边框的面板。</p>
        </Panel>
        <Panel title="阴影面板" variant="elevated">
          <p>这是带阴影的面板。</p>
        </Panel>
      </div>
    </section>

    <!-- 可折叠面板 -->
    <section>
      <h3 class="text-lg font-medium mb-4">可折叠面板</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Panel title="可折叠面板" collapsible>
          <p>点击面板头部可以折叠/展开此内容。</p>
          <p class="mt-2">这是可折叠面板的更多内容。</p>
        </Panel>
        <Panel title="默认折叠面板" collapsible defaultCollapsed>
          <p>这个面板默认是折叠的，点击面板头部可以展开。</p>
          <p class="mt-2">这是默认折叠面板的更多内容。</p>
        </Panel>
      </div>
    </section>

    <!-- 不同内边距 -->
    <section>
      <h3 class="text-lg font-medium mb-4">不同内边距</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">无内边距</p>
          <Panel title="无内边距" padding="none" variant="bordered">
            <p>这是无内边距的面板内容。</p>
          </Panel>
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">大内边距</p>
          <Panel title="大内边距" padding="lg" variant="bordered">
            <p>这是大内边距的面板内容。</p>
          </Panel>
        </div>
      </div>
    </section>

    <!-- 自定义标题和图标 -->
    <section>
      <h3 class="text-lg font-medium mb-4">自定义标题和图标</h3>
      <Panel collapsible>
        <template #title>
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
              ></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span class="text-blue-600 font-bold">自定义标题</span>
          </div>
        </template>
        <p>这个面板使用了自定义标题插槽。</p>
      </Panel>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Panel } from '@versakit/vue'
<\/script>
`,D=JSON.parse('{"title":"Panel","description":"","frontmatter":{},"headers":[],"relativePath":"components/panel/index.md","filePath":"components/panel/index.md"}'),C={name:"components/panel/index.md"},V=Object.assign(C,{setup(A){const i=c(!0),n=k();return u(async()=>{n.value=(await g(async()=>{const{default:l}=await import("./chunks/index.IFTHufva.js");return{default:l}},__vite__mapDeps([0,1,2]))).default}),(l,t)=>{const p=d("Link"),h=d("ClientOnly");return b(),m("div",null,[t[1]||(t[1]=s("h1",{id:"panel",tabindex:"-1"},[y("Panel "),s("a",{class:"header-anchor",href:"#panel","aria-label":'Permalink to "Panel"'},"​")],-1)),t[2]||(t[2]=s("p",null,"Panel 是一个可折叠的内容容器组件，用于组织和展示信息，支持多种样式变体和自定义配置。它可以有效地节省页面空间，提高用户体验，常用于分组展示相关内容、FAQ、设置面板等场景。",-1)),a(p,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-panel-%E9%9D%A2%E6%9D%BF--basic"}),t[3]||(t[3]=r('<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Panel } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@versakit/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>',3)),v(a(e(P),null,null,512),[[f,i.value]]),a(h,null,{default:o(()=>[a(e(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{i.value=!1}),vueCode:e(F)},_({_:2},[n.value?{name:"vue",fn:o(()=>[a(e(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=r(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>面板标题</td><td>string</td><td>-</td></tr><tr><td>variant</td><td>面板样式变体</td><td>&#39;default&#39; | &#39;bordered&#39; | &#39;elevated&#39;</td><td>&#39;default&#39;</td></tr><tr><td>padding</td><td>内边距大小</td><td>&#39;none&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39;</td><td>&#39;md&#39;</td></tr><tr><td>radius</td><td>圆角大小</td><td>&#39;none&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;full&#39;</td><td>&#39;md&#39;</td></tr><tr><td>collapsible</td><td>是否可折叠</td><td>boolean</td><td>false</td></tr><tr><td>defaultCollapsed</td><td>是否默认折叠</td><td>boolean</td><td>false</td></tr><tr><td>bordered</td><td>是否显示边框</td><td>boolean</td><td>true</td></tr><tr><td>unstyled</td><td>是否使用无样式模式</td><td>boolean</td><td>false</td></tr><tr><td>pt</td><td>传递模板样式</td><td>PanelPT</td><td>-</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:collapsed</td><td>折叠状态变化时触发</td><td>(collapsed: boolean) =&gt; void</td></tr><tr><td>collapse</td><td>折叠状态变化时触发</td><td>(collapsed: boolean) =&gt; void</td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>面板内容</td></tr><tr><td>title</td><td>自定义标题</td></tr><tr><td>icon</td><td>自定义折叠图标</td></tr></tbody></table><h3 id="样式定制" tabindex="-1">样式定制 <a class="header-anchor" href="#样式定制" aria-label="Permalink to &quot;样式定制&quot;">​</a></h3><p>当使用 <code>unstyled</code> 模式时，可以通过 <code>pt</code> 属性传递自定义样式：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PanelPT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	root</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	header</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	content</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	icon</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,10))])}}});export{D as __pageData,V as default};
