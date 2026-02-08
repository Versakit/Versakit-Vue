const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.D-j16k6H.js","assets/chunks/framework.UiYS8jYT.js"])))=>i.map(i=>d[i]);
import{p as u,D as v,v as m,al as p,C as o,c as h,o as f,j as l,G as a,a5 as b,a0 as V,a as k,a3 as y,k as n,w as d,am as _}from"./chunks/framework.UiYS8jYT.js";import{O as g,E as x}from"./chunks/index.DtJc6mnf.js";const w=`<script setup>
import { ref } from 'vue'

const basicValue = ref(3)
const halfValue = ref(3.5)
const readonlyValue = ref(4)
const disabledValue = ref(2)
const colorValue = ref(3)
const customValue = ref(4)
const maxValue = ref(6)
const scoreValue = ref(3.5)

const formatTooltip = (value) => {
  return \`\${value} 分\`
}
<\/script>

<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <div>
      <h2 class="text-lg font-medium mb-2">基础用法</h2>
      <Rate v-model="basicValue" />
      <div class="mt-2 text-sm text-gray-500">当前评分：{{ basicValue }}</div>
    </div>

    <!-- 半星 -->
    <div>
      <h2 class="text-lg font-medium mb-2">半星评分</h2>
      <Rate v-model="halfValue" :allow-half="true" />
      <div class="mt-2 text-sm text-gray-500">当前评分：{{ halfValue }}</div>
    </div>

    <!-- 只读状态 -->
    <div>
      <h2 class="text-lg font-medium mb-2">只读状态</h2>
      <Rate v-model="readonlyValue" :readonly="true" />
    </div>

    <!-- 禁用状态 -->
    <div>
      <h2 class="text-lg font-medium mb-2">禁用状态</h2>
      <Rate v-model="disabledValue" :disabled="true" />
    </div>

    <!-- 自定义颜色 -->
    <div>
      <h2 class="text-lg font-medium mb-2">自定义颜色</h2>
      <div class="space-y-2">
        <div>
          <span class="inline-block w-20">黄色（默认）:</span>
          <Rate v-model="colorValue" color="yellow" />
        </div>
        <div>
          <span class="inline-block w-20">蓝色:</span>
          <Rate v-model="colorValue" color="blue" />
        </div>
        <div>
          <span class="inline-block w-20">绿色:</span>
          <Rate v-model="colorValue" color="green" />
        </div>
        <div>
          <span class="inline-block w-20">红色:</span>
          <Rate v-model="colorValue" color="red" />
        </div>
        <div>
          <span class="inline-block w-20">紫色:</span>
          <Rate v-model="colorValue" color="purple" />
        </div>
      </div>
    </div>

    <!-- 自定义字符 -->
    <div>
      <h2 class="text-lg font-medium mb-2">自定义字符</h2>
      <div class="space-y-2">
        <Rate v-model="customValue" character="好" />
      </div>
    </div>

    <!-- 自定义尺寸 -->
    <div>
      <h2 class="text-lg font-medium mb-2">自定义尺寸</h2>
      <div class="space-y-2">
        <div>
          <span class="inline-block w-20">小:</span>
          <Rate v-model="colorValue" size="small" />
        </div>
        <div>
          <span class="inline-block w-20">默认:</span>
          <Rate v-model="colorValue" size="default" />
        </div>
        <div>
          <span class="inline-block w-20">大:</span>
          <Rate v-model="colorValue" size="large" />
        </div>
      </div>
    </div>

    <!-- 自定义最大值 -->
    <div>
      <h2 class="text-lg font-medium mb-2">自定义最大值</h2>
      <Rate v-model="maxValue" :max="10" />
      <div class="mt-2 text-sm text-gray-500">当前评分：{{ maxValue }}/10</div>
    </div>

    <!-- 显示分数 -->
    <div>
      <h2 class="text-lg font-medium mb-2">显示分数</h2>
      <div class="space-y-2">
        <div>
          <span class="inline-block w-32">默认格式:</span>
          <Rate v-model="scoreValue" :allow-half="true" :show-score="true" />
        </div>
        <div>
          <span class="inline-block w-32">自定义格式:</span>
          <Rate
            v-model="scoreValue"
            :allow-half="true"
            :show-score="true"
            :format-tooltip="formatTooltip"
          />
        </div>
      </div>
    </div>
  </div>
</template>
`,B=JSON.parse('{"title":"Rate","description":"","frontmatter":{},"headers":[],"relativePath":"components/rate/index.md","filePath":"components/rate/index.md"}'),R={name:"components/rate/index.md"},T=Object.assign(R,{setup(W){const s=u(!0),t=v();return m(async()=>{t.value=(await p(async()=>{const{default:i}=await import("./chunks/index.D-j16k6H.js");return{default:i}},__vite__mapDeps([0,1]))).default}),(i,e)=>{const r=o("Link"),c=o("ClientOnly");return f(),h("div",null,[e[1]||(e[1]=l("h1",{id:"rate",tabindex:"-1"},[k("Rate "),l("a",{class:"header-anchor",href:"#rate","aria-label":'Permalink to "Rate"'},"​")],-1)),e[2]||(e[2]=l("p",null,"Rate 是一种允许用户通过选择星号、数字或其他符号来表达评价等级的交互组件，常用于商品评价、服务评分、内容反馈等场景。它将抽象的评价转化为可视化的量化指标，帮助用户快速传递主观感受，同时为系统提供数据收集入口。",-1)),a(r,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-rate-%E8%AF%84%E5%88%86--basic"}),e[3]||(e[3]=b('<h2 id="引用" tabindex="-1">引用 <a class="header-anchor" href="#引用" aria-label="Permalink to &quot;引用&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Rate } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@versakit/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>',3)),V(a(n(g),null,null,512),[[y,s.value]]),a(c,null,{default:d(()=>[a(n(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{s.value=!1}),vueCode:n(w)},_({_:2},[t.value?{name:"vue",fn:d(()=>[a(n(t))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{B as __pageData,T as default};
