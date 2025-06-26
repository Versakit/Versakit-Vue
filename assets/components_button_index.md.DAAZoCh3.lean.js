const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.B-TCZUxl.js","assets/chunks/theme.DXf4p6wh.js","assets/chunks/framework.dgRUQZ7Z.js"])))=>i.map(i=>d[i]);
import{p as u,D as d,v as r,aj as c,B as p,c as B,o as m,ai as h,a1 as v,G as n,a3 as f,k as e,w as i,ak as _}from"./chunks/framework.dgRUQZ7Z.js";import{O as b,E as g}from"./chunks/index.CtCYMtlW.js";const y=`<template>
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
`,C=JSON.parse('{"title":"Button","description":"","frontmatter":{},"headers":[],"relativePath":"components/button/index.md","filePath":"components/button/index.md"}'),k={name:"components/button/index.md"},E=Object.assign(k,{setup(x){const o=u(!0),a=d();return r(async()=>{a.value=(await c(async()=>{const{default:s}=await import("./chunks/index.B-TCZUxl.js");return{default:s}},__vite__mapDeps([0,1,2]))).default}),(s,t)=>{const l=p("ClientOnly");return m(),B("div",null,[t[1]||(t[1]=h("",5)),v(n(e(b),null,null,512),[[f,o.value]]),n(l,null,{default:i(()=>[n(e(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{o.value=!1}),vueCode:e(y)},_({_:2},[a.value?{name:"vue",fn:i(()=>[n(e(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{C as __pageData,E as default};
