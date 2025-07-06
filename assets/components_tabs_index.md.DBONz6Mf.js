const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.BdAYiYP8.js","assets/chunks/theme.frOZSD7M.js","assets/chunks/framework.Cpyw2Gc9.js"])))=>i.map(i=>d[i]);
import{p as m,D as b,v as p,aj as o,B as h,c,o as g,ai as i,a1 as u,G as a,a2 as T,k as e,w as l,ak as k}from"./chunks/framework.Cpyw2Gc9.js";import{O as v,E as y}from"./chunks/index.CSC85q1C.js";const I=`<script setup lang="ts">
import { Tabs, TabItem } from '@versakit/vue'
import '@versakit/vue/style'
import { ref } from 'vue'

// 控制当前激活的标签页
const activeTab = ref('tab1')

// 处理标签页变化
const handleTabChange = (value: string | number) => {
  console.log('当前选中的标签:', value)
  activeTab.value = value as string
}
<\/script>

<template>
  <div class="tabs-examples space-y-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-3">基础用法</h2>
      <Tabs v-model="activeTab" @change="handleTabChange">
        <TabItem name="tab1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签1的内容</p>
            <p class="mt-2">当前选中的标签: {{ activeTab }}</p>
          </div>
        </TabItem>
        <TabItem name="tab2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签2的内容</p>
            <p class="mt-2">当前选中的标签: {{ activeTab }}</p>
          </div>
        </TabItem>
        <TabItem name="tab3" title="标签3">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签3的内容</p>
            <p class="mt-2">当前选中的标签: {{ activeTab }}</p>
          </div>
        </TabItem>
      </Tabs>
    </section>

    <!-- 不同变体 -->
    <section>
      <h2 class="text-lg font-medium mb-3">不同变体</h2>

      <h3 class="text-sm font-medium mb-2">默认样式 (default)</h3>
      <Tabs variant="default">
        <TabItem name="var1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>默认样式标签内容</p>
          </div>
        </TabItem>
        <TabItem name="var2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>默认样式标签内容</p>
          </div>
        </TabItem>
      </Tabs>

      <h3 class="text-sm font-medium mb-2 mt-4">胶囊样式 (pills)</h3>
      <Tabs variant="pills">
        <TabItem name="pill1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>胶囊样式标签内容</p>
          </div>
        </TabItem>
        <TabItem name="pill2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>胶囊样式标签内容</p>
          </div>
        </TabItem>
      </Tabs>

      <h3 class="text-sm font-medium mb-2 mt-4">下划线样式 (underline)</h3>
      <Tabs variant="underline">
        <TabItem name="under1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>下划线样式标签内容</p>
          </div>
        </TabItem>
        <TabItem name="under2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>下划线样式标签内容</p>
          </div>
        </TabItem>
      </Tabs>
    </section>

    <!-- 不同尺寸 -->
    <section>
      <h2 class="text-lg font-medium mb-3">不同尺寸</h2>

      <h3 class="text-sm font-medium mb-2">小尺寸 (sm)</h3>
      <Tabs size="sm">
        <TabItem name="sm1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>小尺寸标签内容</p>
          </div>
        </TabItem>
        <TabItem name="sm2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>小尺寸标签内容</p>
          </div>
        </TabItem>
      </Tabs>

      <h3 class="text-sm font-medium mb-2 mt-4">中尺寸 (md) - 默认</h3>
      <Tabs size="md">
        <TabItem name="md1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>中尺寸标签内容</p>
          </div>
        </TabItem>
        <TabItem name="md2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>中尺寸标签内容</p>
          </div>
        </TabItem>
      </Tabs>

      <h3 class="text-sm font-medium mb-2 mt-4">大尺寸 (lg)</h3>
      <Tabs size="lg">
        <TabItem name="lg1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>大尺寸标签内容</p>
          </div>
        </TabItem>
        <TabItem name="lg2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>大尺寸标签内容</p>
          </div>
        </TabItem>
      </Tabs>
    </section>

    <!-- 不同位置 -->
    <section>
      <h2 class="text-lg font-medium mb-3">不同位置</h2>

      <h3 class="text-sm font-medium mb-2">顶部位置 (top) - 默认</h3>
      <Tabs placement="top">
        <TabItem name="top1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>顶部位置标签内容</p>
          </div>
        </TabItem>
        <TabItem name="top2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>顶部位置标签内容</p>
          </div>
        </TabItem>
      </Tabs>

      <h3 class="text-sm font-medium mb-2 mt-4">底部位置 (bottom)</h3>
      <Tabs placement="bottom">
        <TabItem name="bottom1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>底部位置标签内容</p>
          </div>
        </TabItem>
        <TabItem name="bottom2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>底部位置标签内容</p>
          </div>
        </TabItem>
      </Tabs>

      <h3 class="text-sm font-medium mb-2 mt-4">左侧位置 (left)</h3>
      <Tabs placement="left">
        <TabItem name="left1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>左侧位置标签内容</p>
          </div>
        </TabItem>
        <TabItem name="left2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>左侧位置标签内容</p>
          </div>
        </TabItem>
      </Tabs>

      <h3 class="text-sm font-medium mb-2 mt-4">右侧位置 (right)</h3>
      <Tabs placement="right">
        <TabItem name="right1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>右侧位置标签内容</p>
          </div>
        </TabItem>
        <TabItem name="right2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>右侧位置标签内容</p>
          </div>
        </TabItem>
      </Tabs>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-lg font-medium mb-3">禁用状态</h2>

      <h3 class="text-sm font-medium mb-2">禁用单个标签</h3>
      <Tabs>
        <TabItem name="dis1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签1的内容</p>
          </div>
        </TabItem>
        <TabItem name="dis2" title="标签2" :disabled="true">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签2的内容（已禁用）</p>
          </div>
        </TabItem>
        <TabItem name="dis3" title="标签3">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签3的内容</p>
          </div>
        </TabItem>
      </Tabs>

      <h3 class="text-sm font-medium mb-2 mt-4">禁用整个标签组件</h3>
      <Tabs :disabled="true">
        <TabItem name="all-dis1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签1的内容（整个标签组已禁用）</p>
          </div>
        </TabItem>
        <TabItem name="all-dis2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签2的内容（整个标签组已禁用）</p>
          </div>
        </TabItem>
      </Tabs>
    </section>

    <!-- 全宽模式 -->
    <section>
      <h2 class="text-lg font-medium mb-3">全宽模式</h2>
      <Tabs :fullWidth="true">
        <TabItem name="full1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>全宽模式标签内容</p>
          </div>
        </TabItem>
        <TabItem name="full2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>全宽模式标签内容</p>
          </div>
        </TabItem>
        <TabItem name="full3" title="标签3">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>全宽模式标签内容</p>
          </div>
        </TabItem>
      </Tabs>
    </section>
  </div>
</template>

<style scoped>
.tabs-examples {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
</style>
`,C=JSON.parse('{"title":"Tabs 标签页","description":"","frontmatter":{},"headers":[],"relativePath":"components/tabs/index.md","filePath":"components/tabs/index.md"}'),f={name:"components/tabs/index.md"},F=Object.assign(f,{setup(_){const s=m(!0),n=b();return p(async()=>{n.value=(await o(async()=>{const{default:d}=await import("./chunks/index.BdAYiYP8.js");return{default:d}},__vite__mapDeps([0,1,2]))).default}),(d,t)=>{const r=h("ClientOnly");return g(),c("div",null,[t[1]||(t[1]=i(`<h1 id="tabs-标签页" tabindex="-1">Tabs 标签页 <a class="header-anchor" href="#tabs-标签页" aria-label="Permalink to &quot;Tabs 标签页&quot;">​</a></h1><p>Tabs（标签页）组件是一种常见的界面模式，用于在有限空间内组织和切换多个内容面板，使信息呈现更具条理且易于浏览。用户通过点击或滑动标签快速在不同内容区域间切换，提升交互效率。</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 引入组件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Tab, TabItem } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@versakit/vue&#39;</span></span></code></pre></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>使用<code>Tab</code>和<code>TabItem</code>组件可以灵活地自定义标签页内容。</p>`,6)),u(a(e(v),null,null,512),[[T,s.value]]),a(r,null,{default:l(()=>[a(e(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{s.value=!1}),vueCode:e(I)},k({_:2},[n.value?{name:"vue",fn:l(()=>[a(e(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[2]||(t[2]=i(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="tab-props" tabindex="-1">Tab Props <a class="header-anchor" href="#tab-props" aria-label="Permalink to &quot;Tab Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>initialIndex</td><td>初始选中的标签索引</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>size</td><td>标签页尺寸</td><td><code>&#39;sm&#39; | &#39;md&#39; | &#39;lg&#39;</code></td><td><code>&#39;md&#39;</code></td></tr><tr><td>disabled</td><td>是否禁用所有标签</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>block</td><td>是否块级显示（宽度100%）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>unstyled</td><td>是否使用无样式模式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pt</td><td>自定义样式</td><td><code>TabsPT</code></td><td>-</td></tr></tbody></table><h3 id="tabitem-props" tabindex="-1">TabItem Props <a class="header-anchor" href="#tabitem-props" aria-label="Permalink to &quot;TabItem Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>标签文本</td><td><code>string</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用该标签</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>icon</td><td>图标URL</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>当前激活的标签改变时触发</td><td><code>(index: number) =&gt; void</code></td></tr></tbody></table><h3 id="tabspt-类型定义" tabindex="-1">TabsPT 类型定义 <a class="header-anchor" href="#tabspt-类型定义" aria-label="Permalink to &quot;TabsPT 类型定义&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TabsPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	container</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	trigger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	panel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	icon</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,9))])}}});export{C as __pageData,F as default};
