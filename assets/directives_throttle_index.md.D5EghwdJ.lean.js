import{d as T,p as d,az as I,c as f,o as V,j as t,G as l,k as o,w as u,a4 as h,ac as v,t as i,_ as C,B as w,aw as P,a as _,aa as k}from"./chunks/framework.rcZoKwU1.js";import{I as b}from"./chunks/theme.CbllQRZe.js";import{O as Z,E as A}from"./chunks/index.CpKg_UEU.js";const B=`<script setup lang="ts">
import { ref } from 'vue'
import { VKPanel } from '@versakit/ui'

const inputValue = ref('')
const throttledValue = ref('')
const immediateValue = ref('')
const immediateThrottledValue = ref('')

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  throttledValue.value = target.value
}

const handleImmediateInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  immediateThrottledValue.value = target.value
}
<\/script>

<template>
  <div class="throttle-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <VKPanel>
        <input
          v-model="inputValue"
          v-throttle="{ delay: 500 }"
          @input="handleInput"
          placeholder="输入内容，每500ms最多执行一次"
        />
        <div class="result">
          <p>输入值: {{ inputValue }}</p>
          <p>节流值: {{ throttledValue }}</p>
        </div>
      </VKPanel>
    </div>

    <h3>立即执行</h3>
    <div class="demo-row">
      <VKPanel>
        <input
          v-model="immediateValue"
          v-throttle="{ delay: 500, immediate: true }"
          @input="handleImmediateInput"
          placeholder="输入内容，立即执行一次，之后每500ms最多执行一次"
        />
        <div class="result">
          <p>输入值: {{ immediateValue }}</p>
          <p>节流值: {{ immediateThrottledValue }}</p>
        </div>
      </VKPanel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.throttle-demo {
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
`,D={class:"throttle-demo"},E={class:"demo-row"},W={class:"result"},X={class:"demo-row"},S={class:"result"},G=T({__name:"index",setup(g){const a=d(""),p=d(""),e=d(""),r=d(""),x=s=>{const n=s.target;p.value=n.value},y=s=>{const n=s.target;r.value=n.value};return(s,n)=>{const c=I("throttle");return V(),f("div",D,[n[2]||(n[2]=t("h3",null,"基本用法",-1)),t("div",E,[l(o(b),null,{default:u(()=>[h(t("input",{"onUpdate:modelValue":n[0]||(n[0]=m=>a.value=m),onInput:x,placeholder:"输入内容，每500ms最多执行一次"},null,544),[[v,a.value],[c,{delay:500}]]),t("div",W,[t("p",null,"输入值: "+i(a.value),1),t("p",null,"节流值: "+i(p.value),1)])]),_:1})]),n[3]||(n[3]=t("h3",null,"立即执行",-1)),t("div",X,[l(o(b),null,{default:u(()=>[h(t("input",{"onUpdate:modelValue":n[1]||(n[1]=m=>e.value=m),onInput:y,placeholder:"输入内容，立即执行一次，之后每500ms最多执行一次"},null,544),[[v,e.value],[c,{delay:500,immediate:!0}]]),t("div",S,[t("p",null,"输入值: "+i(e.value),1),t("p",null,"节流值: "+i(r.value),1)])]),_:1})])])}}}),q=C(G,[["__scopeId","data-v-b76d632a"]]),O=JSON.parse('{"title":"Throttle 节流","description":"","frontmatter":{},"headers":[],"relativePath":"directives/throttle/index.md","filePath":"directives/throttle/index.md"}'),z={name:"directives/throttle/index.md"},J=Object.assign(z,{setup(g){const a=d(!0);return(p,e)=>{const r=w("ClientOnly");return V(),f("div",null,[e[1]||(e[1]=t("h1",{id:"throttle-节流",tabindex:"-1"},[_("Throttle 节流 "),t("a",{class:"header-anchor",href:"#throttle-节流","aria-label":'Permalink to "Throttle 节流"'},"​")],-1)),e[2]||(e[2]=t("p",null,"节流指令用于控制事件的触发频率，在指定时间内只执行一次事件处理函数。",-1)),e[3]||(e[3]=t("h2",{id:"基本使用",tabindex:"-1"},[_("基本使用 "),t("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),h(l(o(Z),null,null,512),[[k,a.value]]),l(r,null,{default:u(()=>[l(o(A),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{a.value=!1}),vueCode:o(B)},{vue:u(()=>[l(q)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=P("",4))])}}});export{O as __pageData,J as default};
