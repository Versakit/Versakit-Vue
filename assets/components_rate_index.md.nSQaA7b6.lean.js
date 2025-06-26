const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.Bw8piTN7.js","assets/chunks/framework.dgRUQZ7Z.js"])))=>i.map(i=>d[i]);
import{p as d,D as c,v as r,aj as u,B as v,c as m,o as p,ai as h,a1 as f,G as a,a3 as b,k as n,w as i,ak as V}from"./chunks/framework.dgRUQZ7Z.js";import{O as _,E as k}from"./chunks/index.CtCYMtlW.js";const y=`<script setup>
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
`,W=JSON.parse('{"title":"Rate","description":"","frontmatter":{},"headers":[],"relativePath":"components/rate/index.md","filePath":"components/rate/index.md"}'),g={name:"components/rate/index.md"},C=Object.assign(g,{setup(x){const l=d(!0),t=c();return r(async()=>{t.value=(await u(async()=>{const{default:s}=await import("./chunks/index.Bw8piTN7.js");return{default:s}},__vite__mapDeps([0,1]))).default}),(s,e)=>{const o=v("ClientOnly");return p(),m("div",null,[e[1]||(e[1]=h("",5)),f(a(n(_),null,null,512),[[b,l.value]]),a(o,null,{default:i(()=>[a(n(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:n(y)},V({_:2},[t.value?{name:"vue",fn:i(()=>[a(n(t))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{W as __pageData,C as default};
