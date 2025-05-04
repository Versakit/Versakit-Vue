import{d as b,c,o as d,G as t,k as n,_ as f,p as y,B as l,j as o,a4 as g,a as i,w as r,aa as x}from"./chunks/framework.rcZoKwU1.js";import{G as a}from"./chunks/theme.CbllQRZe.js";import{O as _,E as v}from"./chunks/index.CpKg_UEU.js";const B=`<script setup lang="ts">
import { VKNoticeBar } from '@versakit/ui'
<\/script>

<template>
  <div class="notice-examples">
    <!-- Basic types -->
    <VKNoticeBar text="This is an info notice" type="info" />

    <VKNoticeBar
      text="Success! Your operation has been completed."
      type="success"
    />

    <VKNoticeBar
      text="Warning: Please backup your data before proceeding."
      type="warning"
    />

    <VKNoticeBar
      text="Error: Failed to save changes. Please try again."
      type="error"
    />

    <!-- Horizontal scrolling -->
    <VKNoticeBar
      text="This is a very long notice that will scroll horizontally when the content exceeds the container width. It demonstrates the horizontal scrolling feature."
      type="info"
      scrollable
      direction="horizontal"
    />

    <!-- Vertical scrolling -->
    <VKNoticeBar
      :text="[
        'First notification message',
        'Second notification message',
        'Third notification message',
      ]"
      type="info"
      scrollable
      direction="vertical"
      :speed="100"
    />

    <!-- With close button -->
    <VKNoticeBar text="This notice can be closed" type="info" closable />
  </div>
</template>

<style scoped>
.notice-examples > * {
  margin-bottom: 16px;
}
</style>
`,N={class:"notice-examples"},V=b({__name:"base",setup(p){return(s,m)=>(d(),c("div",N,[t(n(a),{text:"This is an info notice",type:"info"}),t(n(a),{text:"Success! Your operation has been completed.",type:"success"}),t(n(a),{text:"Warning: Please backup your data before proceeding.",type:"warning"}),t(n(a),{text:"Error: Failed to save changes. Please try again.",type:"error"}),t(n(a),{text:"This is a very long notice that will scroll horizontally when the content exceeds the container width. It demonstrates the horizontal scrolling feature.",type:"info",scrollable:"",direction:"horizontal"}),t(n(a),{text:["First notification message","Second notification message","Third notification message"],type:"info",scrollable:"",direction:"vertical",speed:100}),t(n(a),{text:"This notice can be closed",type:"info",closable:""})]))}}),W=f(V,[["__scopeId","data-v-84c27ac6"]]),w={id:"noticebar-通知栏-alpha",tabindex:"-1"},K=JSON.parse('{"title":"NoticeBar 通知栏 Alpha","description":"","frontmatter":{},"headers":[],"relativePath":"components/noticebar/index.md","filePath":"components/noticebar/index.md"}'),z={name:"components/noticebar/index.md"},Y=Object.assign(z,{setup(p){const s=y(!0);return(m,e)=>{const h=l("VK-tag"),u=l("ClientOnly");return d(),c("div",null,[o("h1",w,[e[2]||(e[2]=i("NoticeBar 通知栏 ")),t(h,{type:"warn"},{default:r(()=>e[1]||(e[1]=[i("Alpha")])),_:1}),e[3]||(e[3]=i()),e[4]||(e[4]=o("a",{class:"header-anchor",href:"#noticebar-通知栏-alpha","aria-label":'Permalink to "NoticeBar 通知栏 <VK-tag type="warn">Alpha</VK-tag>"'},"​",-1))]),e[5]||(e[5]=o("h2",{id:"基本使用",tabindex:"-1"},[i("基本使用 "),o("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),g(t(n(_),null,null,512),[[x,s.value]]),t(u,null,{default:r(()=>[t(n(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{s.value=!1}),vueCode:n(B)},{vue:r(()=>[t(W)]),_:1},8,["vueCode"])]),_:1})])}}});export{K as __pageData,Y as default};
