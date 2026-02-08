const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.B2CpSy6s.js","assets/chunks/theme.deiFc2AJ.js","assets/chunks/framework.UiYS8jYT.js"])))=>i.map(i=>d[i]);
import{p as c,D as k,v as m,al as u,C as l,c as g,o as f,j as i,G as n,a5 as o,a0 as v,a as E,a3 as y,k as e,w as r,am as b}from"./chunks/framework.UiYS8jYT.js";import{O as x,E as L}from"./chunks/index.DtJc6mnf.js";const _=`<script setup lang="ts">
import { Link } from '@versakit/vue'
import '@versakit/vue/style'
<\/script>

<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="flex flex-wrap gap-6">
        <Link href="https://example.com">默认链接</Link>
        <Link href="https://example.com" variant="primary">主要链接</Link>
        <Link href="https://example.com" variant="secondary">次要链接</Link>
        <Link href="https://example.com" variant="success">成功链接</Link>
        <Link href="https://example.com" variant="danger">危险链接</Link>
        <Link href="https://example.com" variant="warning">警告链接</Link>
        <Link href="https://example.com" variant="info">信息链接</Link>
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同尺寸</h2>
      <div class="flex items-center gap-6">
        <Link href="https://example.com" size="sm">小尺寸链接</Link>
        <Link href="https://example.com" size="md">中等尺寸链接</Link>
        <Link href="https://example.com" size="lg">大尺寸链接</Link>
      </div>
    </section>

    <!-- 带下划线 -->
    <section>
      <h2 class="text-lg font-medium mb-4">带下划线</h2>
      <div class="flex gap-6">
        <Link href="https://example.com" underline>默认下划线链接</Link>
        <Link href="https://example.com" variant="primary" underline>
          主要下划线链接
        </Link>
      </div>
    </section>

    <!-- 外部链接 -->
    <section>
      <h2 class="text-lg font-medium mb-4">外部链接</h2>
      <div class="flex gap-6">
        <Link href="https://example.com" external>
          外部链接（自动添加图标）
        </Link>
        <Link href="https://example.com" external variant="primary">
          外部主要链接
        </Link>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">禁用状态</h2>
      <div class="flex gap-6">
        <Link href="https://example.com" disabled>禁用链接</Link>
        <Link href="https://example.com" variant="primary" disabled>
          禁用主要链接
        </Link>
      </div>
    </section>

    <!-- 带图标 -->
    <section>
      <h2 class="text-lg font-medium mb-4">带图标</h2>
      <div class="flex flex-col gap-4">
        <div>
          <Link href="https://example.com" iconPosition="left">
            <template #icon-left>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </template>
            左侧图标
          </Link>
        </div>
        <div>
          <Link
            href="https://example.com"
            variant="primary"
            iconPosition="right"
          >
            右侧图标
            <template #icon-right>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </template>
          </Link>
        </div>
      </div>
    </section>

    <!-- 自定义样式 -->
    <section>
      <h2 class="text-lg font-medium mb-4">自定义样式</h2>
      <div class="flex gap-6">
        <Link
          href="https://example.com"
          :pt="{
            root: 'text-purple-500 hover:text-purple-700 font-bold',
          }"
        >
          自定义颜色和字重
        </Link>
        <Link
          href="https://example.com"
          unstyled
          :pt="{
            root: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-shadow',
          }"
        >
          完全自定义样式
        </Link>
      </div>
    </section>
  </div>
</template>
`,P=JSON.parse('{"title":"Link 链接","description":"","frontmatter":{},"headers":[],"relativePath":"components/link/index.md","filePath":"components/link/index.md"}'),w={name:"components/link/index.md"},V=Object.assign(w,{setup(C){const s=c(!0),a=k();return m(async()=>{a.value=(await u(async()=>{const{default:d}=await import("./chunks/index.B2CpSy6s.js");return{default:d}},__vite__mapDeps([0,1,2]))).default}),(d,t)=>{const h=l("Link"),p=l("ClientOnly");return f(),g("div",null,[t[1]||(t[1]=i("h1",{id:"link-链接",tabindex:"-1"},[E("Link 链接 "),i("a",{class:"header-anchor",href:"#link-链接","aria-label":'Permalink to "Link 链接"'},"​")],-1)),t[2]||(t[2]=i("p",null,"Link 组件用于创建可点击的文本链接，支持多种样式变体、尺寸和图标位置，可用于导航或触发操作。",-1)),n(h,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-link-%E9%93%BE%E6%8E%A5--basic"}),t[3]||(t[3]=o("",3)),v(n(e(x),null,null,512),[[y,s.value]]),n(p,null,{default:r(()=>[n(e(L),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{s.value=!1}),vueCode:e(_)},b({_:2},[a.value?{name:"vue",fn:r(()=>[n(e(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=o("",10))])}}});export{P as __pageData,V as default};
