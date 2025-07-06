const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.CDLHi_uS.js","assets/chunks/theme.BTaXhGXQ.js","assets/chunks/framework.C7cq1VHP.js"])))=>i.map(i=>d[i]);
import{p,D as b,v,ak as m,C as o,c as u,o as f,j as i,G as e,aj as l,a1 as _,a as k,a4 as D,k as a,w as r,al as g}from"./chunks/framework.C7cq1VHP.js";import{O as x,E as y}from"./chunks/index.CyVXp2Hl.js";const V=`<template>
  <div class="flex flex-col gap-8">
    <!-- 基础分割线 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">基础分割线</h2>
      <Divider />
    </section>

    <!-- 带文本的分割线 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">带文本的分割线</h2>
      <Divider label="文本内容" />
    </section>

    <!-- 不同文本位置 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">不同文本位置</h2>
      <Divider label="左侧文本" labelPosition="start" class="mb-4" />
      <Divider label="居中文本" labelPosition="center" class="mb-4" />
      <Divider label="右侧文本" labelPosition="end" />
    </section>

    <!-- 不同样式 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">不同样式</h2>
      <Divider variant="solid" label="实线" class="mb-4" />
      <Divider variant="dashed" label="虚线" class="mb-4" />
      <Divider variant="dotted" label="点线" />
    </section>

    <!-- 不同粗细 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">不同粗细</h2>
      <Divider size="thin" label="细线" class="mb-4" />
      <Divider size="medium" label="中等" class="mb-4" />
      <Divider size="thick" label="粗线" />
    </section>

    <!-- 自定义颜色 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">自定义颜色</h2>
      <Divider color="#1677ff" label="蓝色" class="mb-4" />
      <Divider color="#52c41a" label="绿色" class="mb-4" />
      <Divider color="#f5222d" label="红色" />
    </section>

    <!-- 垂直分割线 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">垂直分割线</h2>
      <div class="flex items-center h-20">
        <span>左侧文本</span>
        <Divider orientation="vertical" class="mx-4 h-full" />
        <span>右侧文本</span>
      </div>
    </section>

    <!-- 自定义渲染元素 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">自定义渲染元素</h2>
      <p class="mb-2">默认水平分割线 (hr元素)</p>
      <Divider class="mb-4" />
      <p class="mb-2">自定义为span元素:</p>
      <Divider as="span" class="mb-4" />
    </section>

    <!-- 组合使用 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">组合使用</h2>
      <div class="flex items-center">
        <span>文本</span>
        <Divider orientation="vertical" variant="dashed" class="mx-4 h-6" />
        <span>链接</span>
        <Divider
          orientation="vertical"
          variant="dotted"
          color="#1677ff"
          class="mx-4 h-6"
        />
        <span>按钮</span>
      </div>
    </section>

    <!-- 分割内容区域 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">分割内容区域</h2>
      <div class="p-4 border rounded">
        <p>上方内容区域</p>
        <Divider />
        <p>下方内容区域</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Divider } from '@versakit/vue'
<\/script>
`,E=JSON.parse('{"title":"Divider 分割线","description":"","frontmatter":{},"headers":[],"relativePath":"components/divider/index.md","filePath":"components/divider/index.md"}'),P={name:"components/divider/index.md"},T=Object.assign(P,{setup(W){const d=p(!0),n=b();return v(async()=>{n.value=(await m(async()=>{const{default:s}=await import("./chunks/index.CDLHi_uS.js");return{default:s}},__vite__mapDeps([0,1,2]))).default}),(s,t)=>{const c=o("Link"),h=o("ClientOnly");return f(),u("div",null,[t[1]||(t[1]=i("h1",{id:"divider-分割线",tabindex:"-1"},[k("Divider 分割线 "),i("a",{class:"header-anchor",href:"#divider-分割线","aria-label":'Permalink to "Divider 分割线"'},"​")],-1)),t[2]||(t[2]=i("p",null,"Divider 是一种用于视觉分隔内容的界面元素，通过水平或垂直的线条、空白区域或装饰性元素划分不同内容区块，增强页面层次感和组织性。它不承载具体内容，而是通过空间关系引导用户注意力。",-1)),e(c,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-divider-%E5%88%86%E5%89%B2%E7%BA%BF--basic"}),t[3]||(t[3]=l('<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Divider } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@versakit/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>',3)),_(e(a(x),null,null,512),[[D,d.value]]),e(h,null,{default:r(()=>[e(a(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{d.value=!1}),vueCode:a(V)},g({_:2},[n.value?{name:"vue",fn:r(()=>[e(a(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=l('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>orientation</td><td>分割线方向</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>variant</td><td>线条样式</td><td><code>&#39;solid&#39; | &#39;dashed&#39; | &#39;dotted&#39;</code></td><td><code>&#39;solid&#39;</code></td></tr><tr><td>size</td><td>线条粗细</td><td><code>&#39;thin&#39; | &#39;medium&#39; | &#39;thick&#39;</code></td><td><code>&#39;medium&#39;</code></td></tr><tr><td>color</td><td>线条颜色</td><td><code>string</code></td><td>-</td></tr><tr><td>label</td><td>分割线文本</td><td><code>string</code></td><td>-</td></tr><tr><td>labelPosition</td><td>文本位置</td><td><code>&#39;start&#39; | &#39;center&#39; | &#39;end&#39;</code></td><td><code>&#39;center&#39;</code></td></tr><tr><td>as</td><td>自定义渲染元素</td><td><code>string</code></td><td>水平无文本时为<code>&#39;hr&#39;</code>，其他情况为<code>&#39;div&#39;</code></td></tr></tbody></table><h3 id="数据属性" tabindex="-1">数据属性 <a class="header-anchor" href="#数据属性" aria-label="Permalink to &quot;数据属性&quot;">​</a></h3><p>Divider 组件在根元素上添加以下数据属性：</p><ul><li><strong>data-orientation</strong>: 分割线的方向，基于 <code>orientation</code> 属性</li><li><strong>role</strong>: 设置为 <code>&quot;separator&quot;</code>，提供可访问性支持</li><li><strong>aria-orientation</strong>: 分割线的方向，提供可访问性支持</li></ul>',6))])}}});export{E as __pageData,T as default};
