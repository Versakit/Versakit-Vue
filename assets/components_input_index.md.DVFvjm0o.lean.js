const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.DnPsl66g.js","assets/chunks/theme.BTaXhGXQ.js","assets/chunks/framework.C7cq1VHP.js"])))=>i.map(i=>d[i]);
import{p,D as c,v as m,ak as h,C as o,c as f,o as v,j as a,G as e,aj as b,a1 as x,a as g,a4 as y,k as t,w as r,al as I}from"./chunks/framework.C7cq1VHP.js";import{O as _,E as k}from"./chunks/index.CyVXp2Hl.js";const w=`<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="max-w-md">
        <Input v-model="inputValue" placeholder="请输入内容" />
        <div class="text-sm text-gray-500 mt-2">
          当前输入值: {{ inputValue || '空' }}
        </div>
      </div>
    </section>

    <!-- 不同类型 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同类型</h2>
      <div class="grid grid-cols-2 gap-4 max-w-2xl">
        <Input v-model="inputText" placeholder="文本输入框" type="text" />
        <Input
          v-model="inputPassword"
          placeholder="密码输入框"
          type="password"
        />
        <Input v-model="inputEmail" placeholder="邮箱输入框" type="email" />
        <Input v-model="inputNumber" placeholder="数字输入框" type="number" />
        <Input v-model="inputSearch" placeholder="搜索输入框" type="search" />
        <Input v-model="inputUrl" placeholder="URL输入框" type="url" />
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同尺寸</h2>
      <div class="grid grid-cols-1 gap-4 max-w-md">
        <Input v-model="inputSize" size="small" placeholder="小型输入框" />
        <Input
          v-model="inputSize"
          size="default"
          placeholder="默认尺寸输入框"
        />
        <Input v-model="inputSize" size="large" placeholder="大型输入框" />
      </div>
    </section>

    <!-- 前缀和后缀 -->
    <section>
      <h2 class="text-lg font-medium mb-4">前缀和后缀</h2>
      <div class="grid grid-cols-1 gap-4 max-w-md">
        <Input
          v-model="inputPrefix"
          placeholder="带前缀图标"
          prefixIcon="i-heroicons-user"
        />
        <Input
          v-model="inputSuffix"
          placeholder="带后缀图标"
          suffixIcon="i-heroicons-magnifying-glass"
        />
        <Input
          v-model="inputBoth"
          placeholder="前后缀都有"
          prefixIcon="i-heroicons-envelope"
          suffixIcon="i-heroicons-paper-airplane"
        />
      </div>
    </section>

    <!-- 可清空 -->
    <section>
      <h2 class="text-lg font-medium mb-4">可清空</h2>
      <div class="max-w-md">
        <Input
          v-model="inputClearable"
          placeholder="输入后显示清除按钮"
          clearable
        />
      </div>
    </section>

    <!-- 字数统计 -->
    <section>
      <h2 class="text-lg font-medium mb-4">字数统计</h2>
      <div class="max-w-md">
        <Input
          v-model="inputCount"
          placeholder="最多输入20个字符"
          maxlength="20"
          showCount
        />
      </div>
    </section>

    <!-- 不同状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同状态</h2>
      <div class="grid grid-cols-2 gap-4 max-w-2xl">
        <Input v-model="inputNormal" placeholder="默认状态" />
        <Input v-model="inputSuccess" placeholder="成功状态" status="success" />
        <Input v-model="inputWarning" placeholder="警告状态" status="warning" />
        <Input v-model="inputError" placeholder="错误状态" status="error" />
      </div>
    </section>

    <!-- 禁用和只读 -->
    <section>
      <h2 class="text-lg font-medium mb-4">禁用和只读</h2>
      <div class="grid grid-cols-2 gap-4 max-w-2xl">
        <Input v-model="inputDisabled" placeholder="禁用状态" disabled />
        <Input v-model="inputReadonly" placeholder="只读状态" readonly />
      </div>
    </section>

    <!-- 自动聚焦 -->
    <section>
      <h2 class="text-lg font-medium mb-4">自动聚焦</h2>
      <div class="max-w-md flex space-x-4">
        <Input v-model="inputAutofocus" placeholder="自动获取焦点" autofocus />
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          @click="handleResetAutofocus"
        >
          重置
        </button>
      </div>
    </section>

    <!-- 表单应用示例 -->
    <section>
      <h2 class="text-lg font-medium mb-4">表单应用示例</h2>
      <div class="max-w-md space-y-4 border p-6 rounded-md">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            用户名
          </label>
          <Input v-model="formUsername" placeholder="请输入用户名" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            密码
          </label>
          <Input
            v-model="formPassword"
            type="password"
            placeholder="请输入密码"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            邮箱
          </label>
          <Input
            v-model="formEmail"
            type="email"
            placeholder="请输入邮箱"
            :status="isValidEmail ? 'success' : formEmail ? 'error' : undefined"
          />
          <div
            v-if="formEmail && !isValidEmail"
            class="text-sm text-red-500 mt-1"
          >
            请输入有效的邮箱地址
          </div>
        </div>
        <div>
          <button
            class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
            :disabled="!formIsValid"
          >
            提交
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Input } from '@versakit/vue'
// 基础用法
const inputValue = ref('')

// 不同类型
const inputText = ref('')
const inputPassword = ref('')
const inputEmail = ref('')
const inputNumber = ref('')
const inputSearch = ref('')
const inputUrl = ref('')

// 不同尺寸
const inputSize = ref('')

// 前缀和后缀
const inputPrefix = ref('')
const inputSuffix = ref('')
const inputBoth = ref('')

// 可清空
const inputClearable = ref('')

// 字数统计
const inputCount = ref('')

// 不同状态
const inputNormal = ref('')
const inputSuccess = ref('成功状态示例')
const inputWarning = ref('警告状态示例')
const inputError = ref('错误状态示例')

// 禁用和只读
const inputDisabled = ref('禁用状态示例')
const inputReadonly = ref('只读状态示例')

// 自动聚焦
const inputAutofocus = ref('')
const handleResetAutofocus = () => {
  inputAutofocus.value = ''
  // 模拟组件重新渲染，实际使用中可能需要更复杂的处理
  setTimeout(() => {
    const input = document.querySelector('input[autofocus]')
    if (input) {
      input.focus()
    }
  }, 0)
}

// 表单应用示例
const formUsername = ref('')
const formPassword = ref('')
const formEmail = ref('')

// 邮箱验证
const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
const isValidEmail = computed(() => {
  if (!formEmail.value) return true // 空值不验证
  return emailRegex.test(formEmail.value)
})

// 表单验证
const formIsValid = computed(() => {
  return (
    formUsername.value &&
    formPassword.value &&
    formEmail.value &&
    isValidEmail.value
  )
})
<\/script>
`,A=JSON.parse('{"title":"Input","description":"","frontmatter":{},"headers":[],"relativePath":"components/input/index.md","filePath":"components/input/index.md"}'),E={name:"components/input/index.md"},S=Object.assign(E,{setup(V){const l=p(!0),s=c();return m(async()=>{s.value=(await h(async()=>{const{default:i}=await import("./chunks/index.DnPsl66g.js");return{default:i}},__vite__mapDeps([0,1,2]))).default}),(i,n)=>{const d=o("Link"),u=o("ClientOnly");return v(),f("div",null,[n[1]||(n[1]=a("h1",{id:"input",tabindex:"-1"},[g("Input "),a("a",{class:"header-anchor",href:"#input","aria-label":'Permalink to "Input"'},"​")],-1)),n[2]||(n[2]=a("p",null,"Input 是一种允许用户输入文本或数值的表单组件，通常以矩形框形式呈现，支持单行输入（默认）或通过属性扩展为多行（TextArea）。它是用户与系统进行文本交互的基础入口，广泛应用于表单填写、搜索框、数据录入等场景。",-1)),e(d,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-input-%E8%BE%93%E5%85%A5%E6%A1%86--basic"}),n[3]||(n[3]=b("",3)),x(e(t(_),null,null,512),[[y,l.value]]),e(u,null,{default:r(()=>[e(t(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[0]||(n[0]=()=>{l.value=!1}),vueCode:t(w)},I({_:2},[s.value?{name:"vue",fn:r(()=>[e(t(s))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{A as __pageData,S as default};
