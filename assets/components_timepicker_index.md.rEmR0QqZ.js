const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.CSsBNulj.js","assets/chunks/theme.DbKNPrnQ.js","assets/chunks/framework.Cpyw2Gc9.js"])))=>i.map(i=>d[i]);
import{p as h,D as v,v as u,aj as p,B as s,c as b,o as k,j as a,G as e,ai as l,a1 as f,a as T,a2 as _,k as d,w as c,ak as y}from"./chunks/framework.Cpyw2Gc9.js";import{O as g,E as x}from"./chunks/index.CSC85q1C.js";const P=`<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h3 class="text-lg font-medium mb-4">基础用法</h3>
      <div class="max-w-sm">
        <TimePicker v-model="selectedTime" />
      </div>
      <div class="mt-2">当前选择的时间: {{ selectedTime || '未选择' }}</div>
    </section>

    <!-- 12小时制 -->
    <section>
      <h3 class="text-lg font-medium mb-4">12小时制</h3>
      <div class="max-w-sm">
        <TimePicker v-model="time12h" format="12h" />
      </div>
      <div class="mt-2">当前选择的时间: {{ time12h || '未选择' }}</div>
    </section>

    <!-- 显示秒选择器 -->
    <section>
      <h3 class="text-lg font-medium mb-4">显示秒选择器</h3>
      <div class="max-w-sm">
        <TimePicker v-model="timeWithSeconds" :showSeconds="true" />
      </div>
      <div class="mt-2">当前选择的时间: {{ timeWithSeconds || '未选择' }}</div>
    </section>

    <!-- 自定义步长 -->
    <section>
      <h3 class="text-lg font-medium mb-4">自定义步长</h3>
      <div class="max-w-sm">
        <TimePicker
          v-model="timeWithSteps"
          :hourStep="2"
          :minuteStep="15"
          :secondStep="30"
          :showSeconds="true"
        />
      </div>
      <div class="mt-2">
        <div>当前选择的时间: {{ timeWithSteps || '未选择' }}</div>
        <div>小时步长: 2, 分钟步长: 15, 秒步长: 30</div>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h3 class="text-lg font-medium mb-4">禁用状态</h3>
      <div class="flex flex-wrap gap-8">
        <div>
          <div class="max-w-sm">
            <TimePicker v-model="disabledTime" disabled />
          </div>
          <div class="mt-2">禁用状态</div>
        </div>
        <div>
          <div class="max-w-sm">
            <TimePicker v-model="readonlyTime" readonly />
          </div>
          <div class="mt-2">只读状态</div>
        </div>
      </div>
    </section>

    <!-- 不可清空 -->
    <section>
      <h3 class="text-lg font-medium mb-4">不可清空</h3>
      <div class="max-w-sm">
        <TimePicker v-model="nonClearableTime" :clearable="false" />
      </div>
      <div class="mt-2">
        <div>当前选择的时间: {{ nonClearableTime || '未选择' }}</div>
      </div>
    </section>

    <!-- 使用Date对象 -->
    <section>
      <h3 class="text-lg font-medium mb-4">使用Date对象</h3>
      <div class="max-w-sm">
        <TimePicker v-model="dateTime" />
      </div>
      <div class="mt-2">
        <div>
          当前选择的时间:
          {{ dateTime ? dateTime.toLocaleTimeString() : '未选择' }}
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimePicker } from '@versakit/vue'

// 基础用法
const selectedTime = ref('12:30')

// 12小时制
const time12h = ref('02:30 PM')

// 显示秒选择器
const timeWithSeconds = ref('12:30:45')

// 自定义步长
const timeWithSteps = ref('12:30:00')

// 禁用状态
const disabledTime = ref('12:30')
const readonlyTime = ref('12:30')

// 不可清空
const nonClearableTime = ref('12:30')

// 使用Date对象
const dateTime = ref(new Date())
<\/script>
`,E=JSON.parse('{"title":"TimePicker 时间选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/timepicker/index.md","filePath":"components/timepicker/index.md"}'),S={name:"components/timepicker/index.md"},D=Object.assign(S,{setup(W){const i=h(!0),n=v();return u(async()=>{n.value=(await p(async()=>{const{default:o}=await import("./chunks/index.CSsBNulj.js");return{default:o}},__vite__mapDeps([0,1,2]))).default}),(o,t)=>{const r=s("Link"),m=s("ClientOnly");return k(),b("div",null,[t[1]||(t[1]=a("h1",{id:"timepicker-时间选择器",tabindex:"-1"},[T("TimePicker 时间选择器 "),a("a",{class:"header-anchor",href:"#timepicker-时间选择器","aria-label":'Permalink to "TimePicker 时间选择器"'},"​")],-1)),t[2]||(t[2]=a("p",null,"TimePicker 时间选择器用于让用户选择特定的时间点，支持12小时制和24小时制，可自定义时间步长，提供小时、分钟和秒的精确选择。",-1)),e(r,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-timepicker-%E6%97%B6%E9%97%B4%E9%80%89%E6%8B%A9%E5%99%A8--basic"}),t[3]||(t[3]=l('<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { TimePicker } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@versakit/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>',3)),f(e(d(g),null,null,512),[[_,i.value]]),e(m,null,{default:c(()=>[e(d(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{i.value=!1}),vueCode:d(P)},y({_:2},[n.value?{name:"vue",fn:c(()=>[e(d(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=l('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>绑定值，选中的时间</td><td><code>string | Date</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>readonly</td><td>是否只读</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>占位文本</td><td><code>string</code></td><td><code>&#39;选择时间&#39;</code></td></tr><tr><td>format</td><td>时间格式</td><td><code>&#39;12h&#39; | &#39;24h&#39;</code></td><td><code>&#39;24h&#39;</code></td></tr><tr><td>hourStep</td><td>小时选择步长</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>minuteStep</td><td>分钟选择步长</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>secondStep</td><td>秒选择步长</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>showSeconds</td><td>是否显示秒选择器</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>clearable</td><td>是否可清空</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>unstyled</td><td>是否禁用默认样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pt</td><td>自定义样式配置</td><td><code>TimePickerPT</code></td><td>-</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:modelValue</td><td>选中时间变化时触发</td><td><code>(value: string | Date | null) =&gt; void</code></td></tr><tr><td>change</td><td>选中时间变化时触发</td><td><code>(value: string | Date | null) =&gt; void</code></td></tr><tr><td>focus</td><td>输入框获得焦点时触发</td><td><code>(e: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>输入框失去焦点时触发</td><td><code>(e: FocusEvent) =&gt; void</code></td></tr><tr><td>clear</td><td>点击清空按钮时触发</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><p>TimePicker 组件暂不提供插槽。</p>',7))])}}});export{E as __pageData,D as default};
