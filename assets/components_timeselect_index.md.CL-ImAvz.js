const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.Dv4Rvv3M.js","assets/chunks/theme.DAOLVbAS.js","assets/chunks/framework.DLuSxX4C.js"])))=>i.map(i=>d[i]);
import{p as h,D as v,v as u,al as p,C as o,c as b,o as f,j as a,G as e,ak as l,a0 as T,a as _,a3 as g,k as d,w as c,am as k}from"./chunks/framework.DLuSxX4C.js";import{O as y,E as x}from"./chunks/index.Bhh2hZnL.js";const S=`<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h3 class="text-lg font-medium mb-4">基础用法</h3>
      <div class="max-w-sm">
        <TimeSelect v-model="selectedTime" />
      </div>
      <div class="mt-2">当前选择的时间: {{ selectedTime || '未选择' }}</div>
    </section>

    <!-- 自定义时间范围和步长 -->
    <section>
      <h3 class="text-lg font-medium mb-4">自定义时间范围和步长</h3>
      <div class="max-w-sm">
        <TimeSelect
          v-model="customRangeTime"
          start="09:00"
          end="18:00"
          :step="15"
        />
      </div>
      <div class="mt-2">
        <div>当前选择的时间: {{ customRangeTime || '未选择' }}</div>
        <div>时间范围: 09:00 至 18:00，步长: 15分钟</div>
      </div>
    </section>

    <!-- 12小时制 -->
    <section>
      <h3 class="text-lg font-medium mb-4">12小时制</h3>
      <div class="max-w-sm">
        <TimeSelect v-model="time12h" format="12h" />
      </div>
      <div class="mt-2">当前选择的时间: {{ time12h || '未选择' }}</div>
    </section>

    <!-- 自定义选项 -->
    <section>
      <h3 class="text-lg font-medium mb-4">自定义选项</h3>
      <div class="max-w-sm">
        <TimeSelect v-model="customOptionsTime" :options="customOptions" />
      </div>
      <div class="mt-2">
        <div>当前选择的时间: {{ customOptionsTime || '未选择' }}</div>
        <div>自定义选项: {{ customOptions.join(', ') }}</div>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h3 class="text-lg font-medium mb-4">禁用状态</h3>
      <div class="flex flex-wrap gap-8">
        <div>
          <div class="max-w-sm">
            <TimeSelect v-model="disabledTime" disabled />
          </div>
          <div class="mt-2">禁用状态</div>
        </div>
        <div>
          <div class="max-w-sm">
            <TimeSelect v-model="readonlyTime" readonly />
          </div>
          <div class="mt-2">只读状态</div>
        </div>
      </div>
    </section>

    <!-- 不可清空 -->
    <section>
      <h3 class="text-lg font-medium mb-4">不可清空</h3>
      <div class="max-w-sm">
        <TimeSelect v-model="nonClearableTime" :clearable="false" />
      </div>
      <div class="mt-2">
        <div>当前选择的时间: {{ nonClearableTime || '未选择' }}</div>
      </div>
    </section>

    <!-- 自定义占位文本 -->
    <section>
      <h3 class="text-lg font-medium mb-4">自定义占位文本</h3>
      <div class="max-w-sm">
        <TimeSelect v-model="placeholderTime" placeholder="请选择预约时间" />
      </div>
      <div class="mt-2">
        <div>当前选择的时间: {{ placeholderTime || '未选择' }}</div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimeSelect } from '@versakit/vue'

// 基础用法
const selectedTime = ref('12:30')

// 自定义时间范围和步长
const customRangeTime = ref('09:00')

// 12小时制
const time12h = ref('02:30 PM')

// 自定义选项
const customOptionsTime = ref('09:00')
const customOptions = ['09:00', '12:00', '15:00', '18:00']

// 禁用状态
const disabledTime = ref('12:30')
const readonlyTime = ref('12:30')

// 不可清空
const nonClearableTime = ref('12:30')

// 自定义占位文本
const placeholderTime = ref('')
<\/script>
`,w=JSON.parse('{"title":"TimeSelect 时间选择","description":"","frontmatter":{},"headers":[],"relativePath":"components/timeselect/index.md","filePath":"components/timeselect/index.md"}'),V={name:"components/timeselect/index.md"},B=Object.assign(V,{setup(W){const i=h(!0),n=v();return u(async()=>{n.value=(await p(async()=>{const{default:s}=await import("./chunks/index.Dv4Rvv3M.js");return{default:s}},__vite__mapDeps([0,1,2]))).default}),(s,t)=>{const r=o("Link"),m=o("ClientOnly");return f(),b("div",null,[t[1]||(t[1]=a("h1",{id:"timeselect-时间选择",tabindex:"-1"},[_("TimeSelect 时间选择 "),a("a",{class:"header-anchor",href:"#timeselect-时间选择","aria-label":'Permalink to "TimeSelect 时间选择"'},"​")],-1)),t[2]||(t[2]=a("p",null,"TimeSelect 时间选择器用于从预定义的时间列表中选择时间，适用于需要限制用户只能选择特定时间点的场景。",-1)),e(r,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-timeselect-%E6%97%B6%E9%97%B4%E9%80%89%E6%8B%A9--basic"}),t[3]||(t[3]=l('<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { TimeSelect } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@versakit/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>',3)),T(e(d(y),null,null,512),[[g,i.value]]),e(m,null,{default:c(()=>[e(d(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{i.value=!1}),vueCode:d(S)},k({_:2},[n.value?{name:"vue",fn:c(()=>[e(d(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=l('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>绑定值，选中的时间</td><td><code>string</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>readonly</td><td>是否只读</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>占位文本</td><td><code>string</code></td><td><code>&#39;选择时间&#39;</code></td></tr><tr><td>options</td><td>可选时间选项列表</td><td><code>string[]</code></td><td>-</td></tr><tr><td>start</td><td>开始时间，格式为 HH:mm</td><td><code>string</code></td><td><code>&#39;00:00&#39;</code></td></tr><tr><td>end</td><td>结束时间，格式为 HH:mm</td><td><code>string</code></td><td><code>&#39;23:59&#39;</code></td></tr><tr><td>step</td><td>时间间隔，单位为分钟</td><td><code>number</code></td><td><code>30</code></td></tr><tr><td>format</td><td>时间格式</td><td><code>&#39;12h&#39; | &#39;24h&#39;</code></td><td><code>&#39;24h&#39;</code></td></tr><tr><td>clearable</td><td>是否可清空</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>unstyled</td><td>是否禁用默认样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pt</td><td>自定义样式配置</td><td><code>TimeSelectPT</code></td><td>-</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:modelValue</td><td>选中时间变化时触发</td><td><code>(value: string | null) =&gt; void</code></td></tr><tr><td>change</td><td>选中时间变化时触发</td><td><code>(value: string | null) =&gt; void</code></td></tr><tr><td>focus</td><td>输入框获得焦点时触发</td><td><code>(e: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>输入框失去焦点时触发</td><td><code>(e: FocusEvent) =&gt; void</code></td></tr><tr><td>clear</td><td>点击清空按钮时触发</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><p>TimeSelect 组件暂不提供插槽。</p>',7))])}}});export{w as __pageData,B as default};
