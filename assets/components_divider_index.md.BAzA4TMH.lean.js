const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.CY032Mn7.js","assets/chunks/theme.9IXME9ou.js","assets/chunks/framework.Cpyw2Gc9.js"])))=>i.map(i=>d[i]);
import{p,D as b,v,aj as m,B as o,c as u,o as f,j as i,G as e,ai as l,a1 as _,a as k,a2 as D,k as a,w as r,ak as g}from"./chunks/framework.Cpyw2Gc9.js";import{O as x,E as y}from"./chunks/index.CSC85q1C.js";const V=`<template>
  <div class="flex flex-col gap-8">
    <!-- 基础分割线 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">基础分割线</h2>
      <Divider />
    </section>

    <!-- 带文本的分割线 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">带文本的分割线</h2>
      <Divider label="文本内容" />
    </section>

    <!-- 不同文本位置 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">不同文本位置</h2>
      <Divider label="左侧文本" labelPosition="start" class="mb-4" />
      <Divider label="居中文本" labelPosition="center" class="mb-4" />
      <Divider label="右侧文本" labelPosition="end" />
    </section>

    <!-- 不同样式 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">不同样式</h2>
      <Divider variant="solid" label="实线" class="mb-4" />
      <Divider variant="dashed" label="虚线" class="mb-4" />
      <Divider variant="dotted" label="点线" />
    </section>

    <!-- 不同粗细 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">不同粗细</h2>
      <Divider size="thin" label="细线" class="mb-4" />
      <Divider size="medium" label="中等" class="mb-4" />
      <Divider size="thick" label="粗线" />
    </section>

    <!-- 自定义颜色 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">自定义颜色</h2>
      <Divider color="#1677ff" label="蓝色" class="mb-4" />
      <Divider color="#52c41a" label="绿色" class="mb-4" />
      <Divider color="#f5222d" label="红色" />
    </section>

    <!-- 垂直分割线 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">垂直分割线</h2>
      <div class="flex items-center h-20">
        <span>左侧文本</span>
        <Divider orientation="vertical" class="mx-4 h-full" />
        <span>右侧文本</span>
      </div>
    </section>

    <!-- 自定义渲染元素 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">自定义渲染元素</h2>
      <p class="mb-2">默认水平分割线 (hr元素)</p>
      <Divider class="mb-4" />
      <p class="mb-2">自定义为span元素:</p>
      <Divider as="span" class="mb-4" />
    </section>

    <!-- 组合使用 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">组合使用</h2>
      <div class="flex items-center">
        <span>文本</span>
        <Divider orientation="vertical" variant="dashed" class="mx-4 h-6" />
        <span>链接</span>
        <Divider
          orientation="vertical"
          variant="dotted"
          color="#1677ff"
          class="mx-4 h-6"
        />
        <span>按钮</span>
      </div>
    </section>

    <!-- 分割内容区域 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">分割内容区域</h2>
      <div class="p-4 border rounded">
        <p>上方内容区域</p>
        <Divider />
        <p>下方内容区域</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Divider } from '@versakit/vue'
<\/script>
`,T=JSON.parse('{"title":"Divider 分割线","description":"","frontmatter":{},"headers":[],"relativePath":"components/divider/index.md","filePath":"components/divider/index.md"}'),B={name:"components/divider/index.md"},A=Object.assign(B,{setup(P){const d=p(!0),n=b();return v(async()=>{n.value=(await m(async()=>{const{default:s}=await import("./chunks/index.CY032Mn7.js");return{default:s}},__vite__mapDeps([0,1,2]))).default}),(s,t)=>{const c=o("Link"),h=o("ClientOnly");return f(),u("div",null,[t[1]||(t[1]=i("h1",{id:"divider-分割线",tabindex:"-1"},[k("Divider 分割线 "),i("a",{class:"header-anchor",href:"#divider-分割线","aria-label":'Permalink to "Divider 分割线"'},"​")],-1)),t[2]||(t[2]=i("p",null,"Divider 是一种用于视觉分隔内容的界面元素，通过水平或垂直的线条、空白区域或装饰性元素划分不同内容区块，增强页面层次感和组织性。它不承载具体内容，而是通过空间关系引导用户注意力。",-1)),e(c,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-divider-%E5%88%86%E5%89%B2%E7%BA%BF--basic"}),t[3]||(t[3]=l("",3)),_(e(a(x),null,null,512),[[D,d.value]]),e(h,null,{default:r(()=>[e(a(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{d.value=!1}),vueCode:a(V)},g({_:2},[n.value?{name:"vue",fn:r(()=>[e(a(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=l("",6))])}}});export{T as __pageData,A as default};
