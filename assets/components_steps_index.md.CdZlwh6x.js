import{d as _,p as f,c as r,o,j as n,G as s,k as i,w as a,F as c,C as m,_ as k,B as g,a4 as y,a as S,aa as V}from"./chunks/framework.rcZoKwU1.js";import{a1 as x,a2 as b}from"./chunks/theme.BK5t6puo.js";import{O as K,E as z}from"./chunks/index.CpKg_UEU.js";const $=`<script setup lang="ts">
import { ref } from 'vue'
import { VKStepItem, VKSteps } from '@versakit/ui'

interface Step {
  title: string
  description?: string
  icon?: string
  status?: 'wait' | 'process' | 'finish' | 'error'
}

const currentStep = ref(0)
const steps = [
  { title: '订单确认', description: '确认订单详情' },
  { title: '支付处理', description: '完成支付流程' },
  { title: '订单完成', description: '等待商品送达' },
]

// 错误状态示例
const errorSteps: Step[] = [
  { title: '提交申请', description: '填写信息' },
  { title: '审核中', description: '等待审核结果', status: 'error' },
  { title: '申请结果', description: '查看申请结果' },
]

// 自定义图标示例
const iconSteps: Step[] = [
  { title: '账号注册', description: '创建您的账号', icon: '👤' },
  { title: '资料完善', description: '补充个人信息', icon: '📝' },
  { title: '邮箱验证', description: '验证您的邮箱', icon: '✉️' },
]
<\/script>

<template>
  <div class="container">
    <h2>基础用法</h2>
    <!-- Vertical Example -->
    <div class="example-box">
      <h3>垂直步骤条</h3>
      <VKSteps :steps="steps" :currentStep="currentStep" direction="vertical">
        <VKStepItem
          v-for="(_, index) in steps"
          :key="\`v-\${index}\`"
          :index="index"
          :clickable="true"
        />
      </VKSteps>
    </div>

    <!-- Horizontal Example -->
    <div class="example-box">
      <h3>水平步骤条</h3>
      <VKSteps :steps="steps" :currentStep="currentStep" direction="horizontal">
        <VKStepItem
          v-for="(_, index) in steps"
          :key="\`h-\${index}\`"
          :index="index"
        />
      </VKSteps>
    </div>

    <!-- Controls -->
    <div class="controls">
      <button @click="currentStep--" :disabled="currentStep === 0">
        上一步
      </button>
      <button
        @click="currentStep++"
        :disabled="currentStep === steps.length - 1"
      >
        下一步
      </button>
    </div>

    <h2>高级用法</h2>

    <!-- Error Status Example -->
    <div class="example-box">
      <h3>错误状态</h3>
      <VKSteps :steps="errorSteps" :currentStep="1" direction="horizontal">
        <VKStepItem
          v-for="(_, index) in errorSteps"
          :key="\`error-\${index}\`"
          :index="index"
        />
      </VKSteps>
    </div>

    <!-- Custom Icons Example -->
    <div class="example-box">
      <h3>自定义图标</h3>
      <VKSteps :steps="iconSteps" :currentStep="1" direction="horizontal">
        <VKStepItem
          v-for="(_, index) in iconSteps"
          :key="\`icon-\${index}\`"
          :index="index"
        />
      </VKSteps>
    </div>

    <!-- Different Size Example -->
    <div class="example-box">
      <h3>不同尺寸</h3>
      <div style="margin-bottom: 20px">
        <small>小尺寸</small>
        <VKSteps :steps="steps" :currentStep="1" size="small">
          <VKStepItem
            v-for="(_, index) in steps"
            :key="\`small-\${index}\`"
            :index="index"
          />
        </VKSteps>
      </div>
      <div style="margin-bottom: 20px">
        <small>默认尺寸</small>
        <VKSteps :steps="steps" :currentStep="1" size="default">
          <VKStepItem
            v-for="(_, index) in steps"
            :key="\`default-\${index}\`"
            :index="index"
          />
        </VKSteps>
      </div>
      <div>
        <small>大尺寸</small>
        <VKSteps :steps="steps" :currentStep="1" size="large">
          <VKStepItem
            v-for="(_, index) in steps"
            :key="\`large-\${index}\`"
            :index="index"
          />
        </VKSteps>
      </div>
    </div>

    <!-- Label Placement Example -->
    <div class="example-box">
      <h3>标签位置</h3>
      <div style="margin-bottom: 20px">
        <VKSteps :steps="steps" :currentStep="1" labelPlacement="horizontal">
          <VKStepItem
            v-for="(_, index) in steps"
            :key="\`h-label-\${index}\`"
            :index="index"
          />
        </VKSteps>
      </div>
      <div>
        <VKSteps :steps="steps" :currentStep="1" labelPlacement="vertical">
          <VKStepItem
            v-for="(_, index) in steps"
            :key="\`v-label-\${index}\`"
            :index="index"
          />
        </VKSteps>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

h2 {
  color: #333;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

h3 {
  color: #555;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.example-box {
  padding: 1.5rem;
  margin-bottom: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.controls {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

button {
  padding: 0.5rem 1rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover:not(:disabled) {
  background: #3ca876;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

small {
  display: block;
  margin-bottom: 0.5rem;
  color: #666;
}
</style>
`,C={class:"container"},B={class:"example-box"},I={class:"example-box"},X={class:"controls"},w=["disabled"],W=["disabled"],Z={class:"example-box"},D={class:"example-box"},E={class:"example-box"},N={style:{"margin-bottom":"20px"}},P={style:{"margin-bottom":"20px"}},A={class:"example-box"},O={style:{"margin-bottom":"20px"}},T=_({__name:"base",setup(h){const p=f(0),l=[{title:"订单确认",description:"确认订单详情"},{title:"支付处理",description:"完成支付流程"},{title:"订单完成",description:"等待商品送达"}],u=[{title:"提交申请",description:"填写信息"},{title:"审核中",description:"等待审核结果",status:"error"},{title:"申请结果",description:"查看申请结果"}],v=[{title:"账号注册",description:"创建您的账号",icon:"👤"},{title:"资料完善",description:"补充个人信息",icon:"📝"},{title:"邮箱验证",description:"验证您的邮箱",icon:"✉️"}];return(J,e)=>(o(),r("div",C,[e[11]||(e[11]=n("h2",null,"基础用法",-1)),n("div",B,[e[2]||(e[2]=n("h3",null,"垂直步骤条",-1)),s(i(x),{steps:l,currentStep:p.value,direction:"vertical"},{default:a(()=>[(o(),r(c,null,m(l,(d,t)=>s(i(b),{key:`v-${t}`,index:t,clickable:!0},null,8,["index"])),64))]),_:1},8,["currentStep"])]),n("div",I,[e[3]||(e[3]=n("h3",null,"水平步骤条",-1)),s(i(x),{steps:l,currentStep:p.value,direction:"horizontal"},{default:a(()=>[(o(),r(c,null,m(l,(d,t)=>s(i(b),{key:`h-${t}`,index:t},null,8,["index"])),64))]),_:1},8,["currentStep"])]),n("div",X,[n("button",{onClick:e[0]||(e[0]=d=>p.value--),disabled:p.value===0}," 上一步 ",8,w),n("button",{onClick:e[1]||(e[1]=d=>p.value++),disabled:p.value===l.length-1}," 下一步 ",8,W)]),e[12]||(e[12]=n("h2",null,"高级用法",-1)),n("div",Z,[e[4]||(e[4]=n("h3",null,"错误状态",-1)),s(i(x),{steps:u,currentStep:1,direction:"horizontal"},{default:a(()=>[(o(),r(c,null,m(u,(d,t)=>s(i(b),{key:`error-${t}`,index:t},null,8,["index"])),64))]),_:1})]),n("div",D,[e[5]||(e[5]=n("h3",null,"自定义图标",-1)),s(i(x),{steps:v,currentStep:1,direction:"horizontal"},{default:a(()=>[(o(),r(c,null,m(v,(d,t)=>s(i(b),{key:`icon-${t}`,index:t},null,8,["index"])),64))]),_:1})]),n("div",E,[e[9]||(e[9]=n("h3",null,"不同尺寸",-1)),n("div",N,[e[6]||(e[6]=n("small",null,"小尺寸",-1)),s(i(x),{steps:l,currentStep:1,size:"small"},{default:a(()=>[(o(),r(c,null,m(l,(d,t)=>s(i(b),{key:`small-${t}`,index:t},null,8,["index"])),64))]),_:1})]),n("div",P,[e[7]||(e[7]=n("small",null,"默认尺寸",-1)),s(i(x),{steps:l,currentStep:1,size:"default"},{default:a(()=>[(o(),r(c,null,m(l,(d,t)=>s(i(b),{key:`default-${t}`,index:t},null,8,["index"])),64))]),_:1})]),n("div",null,[e[8]||(e[8]=n("small",null,"大尺寸",-1)),s(i(x),{steps:l,currentStep:1,size:"large"},{default:a(()=>[(o(),r(c,null,m(l,(d,t)=>s(i(b),{key:`large-${t}`,index:t},null,8,["index"])),64))]),_:1})])]),n("div",A,[e[10]||(e[10]=n("h3",null,"标签位置",-1)),n("div",O,[s(i(x),{steps:l,currentStep:1,labelPlacement:"horizontal"},{default:a(()=>[(o(),r(c,null,m(l,(d,t)=>s(i(b),{key:`h-label-${t}`,index:t},null,8,["index"])),64))]),_:1})]),n("div",null,[s(i(x),{steps:l,currentStep:1,labelPlacement:"vertical"},{default:a(()=>[(o(),r(c,null,m(l,(d,t)=>s(i(b),{key:`v-label-${t}`,index:t},null,8,["index"])),64))]),_:1})])])]))}}),Y=k(T,[["__scopeId","data-v-98eb5563"]]),G=JSON.parse('{"title":"Steps 步骤条","description":"","frontmatter":{},"headers":[],"relativePath":"components/steps/index.md","filePath":"components/steps/index.md"}'),H={name:"components/steps/index.md"},F=Object.assign(H,{setup(h){const p=f(!0);return(l,u)=>{const v=g("ClientOnly");return o(),r("div",null,[u[1]||(u[1]=n("h1",{id:"steps-步骤条",tabindex:"-1"},[S("Steps 步骤条 "),n("a",{class:"header-anchor",href:"#steps-步骤条","aria-label":'Permalink to "Steps 步骤条"'},"​")],-1)),u[2]||(u[2]=n("h2",{id:"基本使用",tabindex:"-1"},[S("基本使用 "),n("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),y(s(i(K),null,null,512),[[V,p.value]]),s(v,null,{default:a(()=>[s(i(z),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:u[0]||(u[0]=()=>{p.value=!1}),vueCode:i($)},{vue:a(()=>[s(Y)]),_:1},8,["vueCode"])]),_:1})])}}});export{G as __pageData,F as default};
