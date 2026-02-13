const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.BeM-BSop.js","assets/chunks/theme.DVizTi_Y.js","assets/chunks/framework.DcQCqlea.js"])))=>i.map(i=>d[i]);
import{p as h,D as v,v as u,al as D,C as s,c as p,o as T,j as a,G as e,a5 as c,a0 as b,a as k,a3 as f,k as d,w as l,am as g}from"./chunks/framework.DcQCqlea.js";import{O as _,E as y}from"./chunks/index.S9QYeH19.js";const x=`<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h3 class="text-lg font-medium mb-4">基础用法</h3>
      <div class="max-w-sm">
        <DateTimePicker v-model="selectedDateTime" />
      </div>
      <div class="mt-2">
        当前选择的日期时间:
        {{ selectedDateTime ? selectedDateTime.toLocaleString() : '未选择' }}
      </div>
    </section>

    <!-- 日期范围限制 -->
    <section>
      <h3 class="text-lg font-medium mb-4">日期范围限制</h3>
      <div class="max-w-sm">
        <DateTimePicker
          v-model="rangeDateTime"
          :min="minDateTime"
          :max="maxDateTime"
        />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期时间:
          {{ rangeDateTime ? rangeDateTime.toLocaleString() : '未选择' }}
        </div>
        <div>
          可选范围: {{ minDateTime.toLocaleString() }} 至
          {{ maxDateTime.toLocaleString() }}
        </div>
      </div>
    </section>

    <!-- 12小时制 -->
    <section>
      <h3 class="text-lg font-medium mb-4">12小时制</h3>
      <div class="max-w-sm">
        <DateTimePicker v-model="time12hDateTime" timeFormat="12h" />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期时间:
          {{ time12hDateTime ? time12hDateTime.toLocaleString() : '未选择' }}
        </div>
      </div>
    </section>

    <!-- 显示秒选择器 -->
    <section>
      <h3 class="text-lg font-medium mb-4">显示秒选择器</h3>
      <div class="max-w-sm">
        <DateTimePicker v-model="secondsDateTime" :showSeconds="true" />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期时间:
          {{ secondsDateTime ? secondsDateTime.toLocaleString() : '未选择' }}
        </div>
      </div>
    </section>

    <!-- 自定义步长 -->
    <section>
      <h3 class="text-lg font-medium mb-4">自定义步长</h3>
      <div class="max-w-sm">
        <DateTimePicker
          v-model="stepsDateTime"
          :hourStep="2"
          :minuteStep="15"
          :secondStep="30"
          :showSeconds="true"
        />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期时间:
          {{ stepsDateTime ? stepsDateTime.toLocaleString() : '未选择' }}
        </div>
        <div>小时步长: 2, 分钟步长: 15, 秒步长: 30</div>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h3 class="text-lg font-medium mb-4">禁用状态</h3>
      <div class="flex flex-wrap gap-8">
        <div>
          <div class="max-w-sm">
            <DateTimePicker v-model="disabledDateTime" disabled />
          </div>
          <div class="mt-2">禁用状态</div>
        </div>
        <div>
          <div class="max-w-sm">
            <DateTimePicker v-model="readonlyDateTime" readonly />
          </div>
          <div class="mt-2">只读状态</div>
        </div>
      </div>
    </section>

    <!-- 不可清空 -->
    <section>
      <h3 class="text-lg font-medium mb-4">不可清空</h3>
      <div class="max-w-sm">
        <DateTimePicker v-model="nonClearableDateTime" :clearable="false" />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期时间:
          {{
            nonClearableDateTime
              ? nonClearableDateTime.toLocaleString()
              : '未选择'
          }}
        </div>
      </div>
    </section>

    <!-- 本地化 -->
    <section>
      <h3 class="text-lg font-medium mb-4">本地化</h3>
      <div class="max-w-sm">
        <DateTimePicker v-model="localeDateTime" locale="zh-CN" />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期时间:
          {{ localeDateTime ? localeDateTime.toLocaleString() : '未选择' }}
        </div>
        <div>本地化: 中文</div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DateTimePicker } from '@versakit/vue'

// 基础用法
const selectedDateTime = ref(new Date())

// 日期范围限制
const rangeDateTime = ref(new Date())
const today = new Date()
const minDateTime = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
)
const maxDateTime = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + 7,
)

// 12小时制
const time12hDateTime = ref(new Date())

// 显示秒选择器
const secondsDateTime = ref(new Date())

// 自定义步长
const stepsDateTime = ref(new Date())

// 禁用状态
const disabledDateTime = ref(new Date())
const readonlyDateTime = ref(new Date())

// 不可清空
const nonClearableDateTime = ref(new Date())

// 本地化
const localeDateTime = ref(new Date())
<\/script>
`,V=JSON.parse('{"title":"DateTimePicker 日期时间选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/datetimepicker/index.md","filePath":"components/datetimepicker/index.md"}'),w={name:"components/datetimepicker/index.md"},E=Object.assign(w,{setup(P){const i=h(!0),n=v();return u(async()=>{n.value=(await D(async()=>{const{default:o}=await import("./chunks/index.BeM-BSop.js");return{default:o}},__vite__mapDeps([0,1,2]))).default}),(o,t)=>{const r=s("Link"),m=s("ClientOnly");return T(),p("div",null,[t[1]||(t[1]=a("h1",{id:"datetimepicker-日期时间选择器",tabindex:"-1"},[k("DateTimePicker 日期时间选择器 "),a("a",{class:"header-anchor",href:"#datetimepicker-日期时间选择器","aria-label":'Permalink to "DateTimePicker 日期时间选择器"'},"​")],-1)),t[2]||(t[2]=a("p",null,"DateTimePicker 日期时间选择器用于让用户同时选择日期和时间，结合了日期选择和时间选择的功能，通过选项卡界面提供直观的操作体验。",-1)),e(r,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-datetimepicker-%E6%97%A5%E6%9C%9F%E6%97%B6%E9%97%B4%E9%80%89%E6%8B%A9%E5%99%A8--basic"}),t[3]||(t[3]=c('<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { DateTimePicker } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@versakit/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>',3)),b(e(d(_),null,null,512),[[f,i.value]]),e(m,null,{default:l(()=>[e(d(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{i.value=!1}),vueCode:d(x)},g({_:2},[n.value?{name:"vue",fn:l(()=>[e(d(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=c('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>绑定值，选中的日期时间</td><td><code>Date</code></td><td>-</td></tr><tr><td>min</td><td>可选择的最小日期时间</td><td><code>Date</code></td><td>-</td></tr><tr><td>max</td><td>可选择的最大日期时间</td><td><code>Date</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>readonly</td><td>是否只读</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>占位文本</td><td><code>string</code></td><td><code>&#39;选择日期时间&#39;</code></td></tr><tr><td>dateFormat</td><td>日期格式</td><td><code>string</code></td><td>-</td></tr><tr><td>timeFormat</td><td>时间格式</td><td><code>&#39;12h&#39; | &#39;24h&#39;</code></td><td><code>&#39;24h&#39;</code></td></tr><tr><td>firstDayOfWeek</td><td>一周的第一天，0表示周日，1表示周一</td><td><code>0 | 1 | 2 | 3 | 4 | 5 | 6</code></td><td><code>0</code></td></tr><tr><td>locale</td><td>本地化配置，影响月份和星期的显示</td><td><code>string</code></td><td>系统默认</td></tr><tr><td>hourStep</td><td>小时选择步长</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>minuteStep</td><td>分钟选择步长</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>secondStep</td><td>秒选择步长</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>showSeconds</td><td>是否显示秒选择器</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>clearable</td><td>是否可清空</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>unstyled</td><td>是否禁用默认样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pt</td><td>自定义样式配置</td><td><code>DateTimePickerPT</code></td><td>-</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:modelValue</td><td>选中日期时间变化时触发</td><td><code>(date: Date | null) =&gt; void</code></td></tr><tr><td>change</td><td>选中日期时间变化时触发</td><td><code>(date: Date | null) =&gt; void</code></td></tr><tr><td>focus</td><td>输入框获得焦点时触发</td><td><code>(e: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>输入框失去焦点时触发</td><td><code>(e: FocusEvent) =&gt; void</code></td></tr><tr><td>clear</td><td>点击清空按钮时触发</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><p>DateTimePicker 组件暂不提供插槽。</p>',7))])}}});export{V as __pageData,E as default};
