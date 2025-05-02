import{d as I,p as l,az as D,c as f,o as V,j as e,G as d,k as o,w as r,a5 as c,ab as b,t as u,_ as C,B as Z,aw as w,a as h,ad as P}from"./chunks/framework.Dr5ddTBW.js";import{O as _}from"./chunks/theme.Bir5V9wV.js";import{d as T,f as k}from"./chunks/index.Cy4GuBY3.js";const A=`<script setup lang="ts">
import { ref } from 'vue'
import { VKPanel } from '@versakit/ui'

const inputValue = ref('')
const debouncedValue = ref('')
const immediateValue = ref('')
const immediateDebouncedValue = ref('')

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  debouncedValue.value = target.value
}

const handleImmediateInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  immediateDebouncedValue.value = target.value
}
<\/script>

<template>
  <div class="debounce-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <VKPanel>
        <input
          v-model="inputValue"
          v-debounce="{ delay: 500 }"
          @input="handleInput"
          placeholder="输入内容，500ms后更新"
        />
        <div class="result">
          <p>输入值: {{ inputValue }}</p>
          <p>防抖值: {{ debouncedValue }}</p>
        </div>
      </VKPanel>
    </div>

    <h3>立即执行</h3>
    <div class="demo-row">
      <VKPanel>
        <input
          v-model="immediateValue"
          v-debounce="{ delay: 500, immediate: true }"
          @input="handleImmediateInput"
          placeholder="输入内容，立即执行一次，之后500ms更新"
        />
        <div class="result">
          <p>输入值: {{ immediateValue }}</p>
          <p>防抖值: {{ immediateDebouncedValue }}</p>
        </div>
      </VKPanel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.debounce-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.demo-row {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  margin-bottom: 10px;
}

.result {
  margin-top: 10px;
  padding: 10px;
  background: #f5f7fa;
  border-radius: 4px;

  p {
    margin: 5px 0;
    color: #666;
  }
}
</style>
`,B={class:"debounce-demo"},W={class:"demo-row"},X={class:"result"},S={class:"demo-row"},E={class:"result"},q=I({__name:"index",setup(g){const a=l(""),p=l(""),t=l(""),s=l(""),x=i=>{const n=i.target;p.value=n.value},y=i=>{const n=i.target;s.value=n.value};return(i,n)=>{const v=D("debounce");return V(),f("div",B,[n[2]||(n[2]=e("h3",null,"基本用法",-1)),e("div",W,[d(o(_),null,{default:r(()=>[c(e("input",{"onUpdate:modelValue":n[0]||(n[0]=m=>a.value=m),onInput:x,placeholder:"输入内容，500ms后更新"},null,544),[[b,a.value],[v,{delay:500}]]),e("div",X,[e("p",null,"输入值: "+u(a.value),1),e("p",null,"防抖值: "+u(p.value),1)])]),_:1})]),n[3]||(n[3]=e("h3",null,"立即执行",-1)),e("div",S,[d(o(_),null,{default:r(()=>[c(e("input",{"onUpdate:modelValue":n[1]||(n[1]=m=>t.value=m),onInput:y,placeholder:"输入内容，立即执行一次，之后500ms更新"},null,544),[[b,t.value],[v,{delay:500,immediate:!0}]]),e("div",E,[e("p",null,"输入值: "+u(t.value),1),e("p",null,"防抖值: "+u(s.value),1)])]),_:1})])])}}}),z=C(q,[["__scopeId","data-v-cee7ae7e"]]),J=JSON.parse('{"title":"Debounce 防抖","description":"","frontmatter":{},"headers":[],"relativePath":"directives/debounce/index.md","filePath":"directives/debounce/index.md"}'),N={name:"directives/debounce/index.md"},K=Object.assign(N,{setup(g){const a=l(!0);return(p,t)=>{const s=Z("ClientOnly");return V(),f("div",null,[t[1]||(t[1]=e("h1",{id:"debounce-防抖",tabindex:"-1"},[h("Debounce 防抖 "),e("a",{class:"header-anchor",href:"#debounce-防抖","aria-label":'Permalink to "Debounce 防抖"'},"​")],-1)),t[2]||(t[2]=e("p",null,"防抖指令用于控制事件的触发频率，在指定时间内多次触发事件，只执行最后一次。",-1)),t[3]||(t[3]=e("h2",{id:"基本使用",tabindex:"-1"},[h("基本使用 "),e("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),c(d(o(T),null,null,512),[[P,a.value]]),d(s,null,{default:r(()=>[d(o(k),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:o(A)},{vue:r(()=>[d(z)]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=w('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>delay</td><td>延迟时间（毫秒）</td><td>number</td><td>300</td></tr><tr><td>immediate</td><td>是否立即执行</td><td>boolean</td><td>false</td></tr></tbody></table><p>&lt;/rewritten_file&gt;</p>',4))])}}});export{J as __pageData,K as default};
