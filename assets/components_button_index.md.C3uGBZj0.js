const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.DZ4khfL-.js","assets/chunks/theme.Q5iyIVpb.js","assets/chunks/framework.CNU19GN3.js"])))=>i.map(i=>d[i]);
import{p,D as B,v as m,aj as h,C as u,c as v,o as f,j as n,G as e,ai as b,a0 as _,a,a3 as g,k as o,w as d,ak as k}from"./chunks/framework.CNU19GN3.js";import{O as y,E as x}from"./chunks/index.RciRc0iM.js";const E=`<template>
  <div class="space-y-8">
    <!-- 变体样式示例 -->
    <section>
      <h3 class="text-lg font-medium mb-4">变体样式</h3>
      <div class="flex flex-wrap gap-4">
        <Button>默认按钮</Button>
        <Button variant="secondary">次要按钮</Button>
        <Button variant="success">成功按钮</Button>
        <Button variant="warning">警告按钮</Button>
        <Button variant="info">信息按钮</Button>
        <Button variant="danger">危险按钮</Button>
        <Button variant="outline">描边按钮</Button>
        <Button variant="ghost">幽灵按钮</Button>
        <Button variant="link">链接按钮</Button>
      </div>
    </section>

    <!-- 尺寸示例 -->
    <section>
      <h3 class="text-lg font-medium mb-4">尺寸</h3>
      <div class="flex items-center flex-wrap gap-4">
        <Button size="xs">超小按钮</Button>
        <Button size="sm">小按钮</Button>
        <Button size="md">中按钮</Button>
        <Button size="lg">大按钮</Button>
      </div>
    </section>

    <!-- 状态示例 -->
    <section>
      <h3 class="text-lg font-medium mb-4">状态</h3>
      <div class="flex flex-wrap gap-4">
        <Button disabled>禁用按钮</Button>
        <Button loading>加载中</Button>
        <Button variant="outline" disabled>禁用描边</Button>
        <Button variant="outline" loading>加载中</Button>
      </div>
    </section>

    <!-- 圆角示例 -->
    <section>
      <h3 class="text-lg font-medium mb-4">圆角</h3>
      <div class="flex flex-wrap gap-4">
        <Button rounded>圆角按钮</Button>
        <Button size="xs" rounded>超小圆角</Button>
        <Button size="lg" rounded>大圆角</Button>
      </div>
    </section>

    <!-- 全宽示例 -->
    <section>
      <h3 class="text-lg font-medium mb-4">全宽</h3>
      <div class="space-y-2">
        <Button fullWidth>全宽按钮</Button>
        <Button variant="outline" fullWidth>全宽描边按钮</Button>
      </div>
    </section>

    <!-- 组合示例 -->
    <section>
      <h3 class="text-lg font-medium mb-4">组合使用</h3>
      <div class="space-y-2">
        <div class="flex flex-wrap gap-4">
          <Button variant="primary" size="sm" rounded>圆角小按钮</Button>
          <Button variant="danger" loading>危险加载</Button>
          <Button variant="outline" disabled rounded>禁用圆角描边</Button>
        </div>
        <Button variant="secondary" fullWidth size="lg">
          大号全宽次要按钮
        </Button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@versakit/vue'
<\/script>
`,A=JSON.parse('{"title":"Button","description":"","frontmatter":{},"headers":[],"relativePath":"components/button/index.md","filePath":"components/button/index.md"}'),C={name:"components/button/index.md"},D=Object.assign(C,{setup(V){const i=p(!0),s=B();return m(async()=>{s.value=(await h(async()=>{const{default:l}=await import("./chunks/index.DZ4khfL-.js");return{default:l}},__vite__mapDeps([0,1,2]))).default}),(l,t)=>{const r=u("Link"),c=u("ClientOnly");return f(),v("div",null,[t[1]||(t[1]=n("h1",{id:"button",tabindex:"-1"},[a("Button "),n("a",{class:"header-anchor",href:"#button","aria-label":'Permalink to "Button"'},"​")],-1)),t[2]||(t[2]=n("p",null,[a("Button 是用户界面中承载交互行为的基础元素，通过点击或触摸触发特定功能（如提交表单、导航页面、执行操作等）。它是连接用户意图与系统响应的桥梁，设计需兼顾"),n("em",null,"可识别性"),a("、"),n("em",null,"可操作性"),a("和"),n("em",null,"视觉引导性"),a("。")],-1)),e(r,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-button-%E6%8C%89%E9%92%AE--basic"}),t[3]||(t[3]=b('<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Button } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@versakit/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>',3)),_(e(o(y),null,null,512),[[g,i.value]]),e(c,null,{default:d(()=>[e(o(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{i.value=!1}),vueCode:o(E)},k({_:2},[s.value?{name:"vue",fn:d(()=>[e(o(s))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{A as __pageData,D as default};
