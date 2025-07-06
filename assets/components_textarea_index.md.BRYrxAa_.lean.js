const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.CVpXVsjL.js","assets/chunks/theme.BTaXhGXQ.js","assets/chunks/framework.C7cq1VHP.js"])))=>i.map(i=>d[i]);
import{p as h,D as p,v as u,ak as m,C as i,c as x,o as v,j as s,G as t,aj as b,a1 as f,a as _,a4 as T,k as a,w as r,al as k}from"./chunks/framework.C7cq1VHP.js";import{O as y,E as g}from"./chunks/index.CyVXp2Hl.js";const V=`<template>
  <div class="flex flex-col gap-8">
    <!-- 基础文本域 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">基础文本域</h2>
      <Textarea v-model="basicValue" placeholder="请输入内容..." />
    </section>

    <!-- 不同尺寸 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">不同尺寸</h2>
      <div class="space-y-4">
        <Textarea size="sm" placeholder="小尺寸" />
        <Textarea size="md" placeholder="中等尺寸（默认）" />
        <Textarea size="lg" placeholder="大尺寸" />
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">禁用状态</h2>
      <Textarea disabled placeholder="禁用状态" value="此文本域已被禁用" />
    </section>

    <!-- 只读状态 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">只读状态</h2>
      <Textarea readonly placeholder="只读状态" value="此文本域为只读" />
    </section>

    <!-- 不同行数 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">不同行数</h2>
      <div class="space-y-4">
        <Textarea :rows="2" placeholder="2行" />
        <Textarea :rows="4" placeholder="4行（默认）" />
        <Textarea :rows="6" placeholder="6行" />
      </div>
    </section>

    <!-- 字数限制与统计 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">字数限制与统计</h2>
      <Textarea
        v-model="limitedValue"
        placeholder="带字数限制的文本域"
        :maxLength="100"
        showCount
      />
    </section>

    <!-- 自动调整高度 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">自动调整高度</h2>
      <Textarea
        v-model="autosizeValue"
        placeholder="随着输入内容增加自动调整高度"
        :autosize="true"
      />
    </section>

    <!-- 调整大小方向 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">调整大小方向</h2>
      <div class="space-y-4">
        <Textarea resize="none" placeholder="不可调整大小" />
        <Textarea resize="horizontal" placeholder="只能水平调整大小" />
        <Textarea resize="vertical" placeholder="只能垂直调整大小（默认）" />
        <Textarea resize="both" placeholder="可以水平和垂直调整大小" />
      </div>
    </section>

    <!-- 不同状态 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">不同状态</h2>
      <div class="space-y-4">
        <Textarea
          status="error"
          placeholder="错误状态"
          value="这是一条错误信息"
        />
        <Textarea
          status="warning"
          placeholder="警告状态"
          value="这是一条警告信息"
        />
        <Textarea
          status="success"
          placeholder="成功状态"
          value="这是一条成功信息"
        />
      </div>
    </section>

    <!-- 结合表单使用 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">结合表单使用</h2>
      <div class="space-y-4">
        <div>
          <label class="block mb-1 font-medium">留言内容：</label>
          <Textarea
            v-model="formValue"
            placeholder="请输入留言内容..."
            :maxLength="200"
            showCount
          />
        </div>
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          提交
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Textarea } from '@versakit/vue'

// 示例数据
const basicValue = ref('')
const limitedValue = ref('')
const autosizeValue = ref('')
const formValue = ref('')
<\/script>
`,E=JSON.parse('{"title":"TextArea","description":"","frontmatter":{},"headers":[],"relativePath":"components/textarea/index.md","filePath":"components/textarea/index.md"}'),C={name:"components/textarea/index.md"},W=Object.assign(C,{setup(A){const l=h(!0),n=p();return u(async()=>{n.value=(await m(async()=>{const{default:o}=await import("./chunks/index.CVpXVsjL.js");return{default:o}},__vite__mapDeps([0,1,2]))).default}),(o,e)=>{const c=i("Link"),d=i("ClientOnly");return v(),x("div",null,[e[1]||(e[1]=s("h1",{id:"textarea",tabindex:"-1"},[_("TextArea "),s("a",{class:"header-anchor",href:"#textarea","aria-label":'Permalink to "TextArea"'},"​")],-1)),e[2]||(e[2]=s("p",null,"TextArea 是一种允许用户输入多行文本的表单组件，通常以矩形区域呈现，支持文本编辑、换行和滚动。与单行输入框（Input）相比，它更适合长文本输入场景，如评论、留言、描述填写等。",-1)),t(c,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-textarea-%E6%96%87%E6%9C%AC%E5%9F%9F--basic"}),e[3]||(e[3]=b("",2)),f(t(a(y),null,null,512),[[T,l.value]]),t(d,null,{default:r(()=>[t(a(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:a(V)},k({_:2},[n.value?{name:"vue",fn:r(()=>[t(a(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{E as __pageData,W as default};
