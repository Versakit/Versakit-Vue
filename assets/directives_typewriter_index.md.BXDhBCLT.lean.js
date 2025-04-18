import{d as k,az as m,c as o,o as p,j as s,a5 as t,_ as y,p as u,B as v,G as a,aw as g,a as r,ad as _,k as l,w as d}from"./chunks/framework.Dr5ddTBW.js";import{d as w,f as C}from"./chunks/index.Cy4GuBY3.js";const x=`<script setup lang="ts">
const handleComplete = () => {
  console.log('打字效果完成')
}
<\/script>

<template>
  <div class="typewriter-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <div
        v-typewriter="{
          text: '这是一个基本的打字机效果示例',
          speed: 100,
        }"
        class="typewriter-item"
      />
    </div>

    <h3>自定义光标</h3>
    <div class="demo-row">
      <div
        v-typewriter="{
          text: '使用自定义光标字符',
          cursorChar: '_',
          speed: 150,
        }"
        class="typewriter-item"
      />
    </div>

    <h3>延迟开始</h3>
    <div class="demo-row">
      <div
        v-typewriter="{
          text: '延迟1秒后开始打字效果',
          delay: 1000,
          onComplete: handleComplete,
        }"
        class="typewriter-item"
      />
    </div>

    <h3>无光标</h3>
    <div class="demo-row">
      <div
        v-typewriter="{
          text: '不显示光标的打字效果',
          cursor: false,
        }"
        class="typewriter-item"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.typewriter-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.demo-row {
  margin-bottom: 20px;
}

.typewriter-item {
  padding: 15px;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  min-height: 24px;
  line-height: 1.6;
  font-family: monospace;
}
</style>
`,b={class:"typewriter-demo"},F={class:"demo-row"},f={class:"typewriter-item"},A={class:"demo-row"},B={class:"typewriter-item"},D={class:"demo-row"},E={class:"typewriter-item"},T={class:"demo-row"},W={class:"typewriter-item"},Z=k({__name:"index",setup(h){const n=()=>{console.log("打字效果完成")};return(c,e)=>{const i=m("typewriter");return p(),o("div",b,[e[0]||(e[0]=s("h3",null,"基本用法",-1)),s("div",F,[t(s("div",f,null,512),[[i,{text:"这是一个基本的打字机效果示例",speed:100}]])]),e[1]||(e[1]=s("h3",null,"自定义光标",-1)),s("div",A,[t(s("div",B,null,512),[[i,{text:"使用自定义光标字符",cursorChar:"_",speed:150}]])]),e[2]||(e[2]=s("h3",null,"延迟开始",-1)),s("div",D,[t(s("div",E,null,512),[[i,{text:"延迟1秒后开始打字效果",delay:1e3,onComplete:n}]])]),e[3]||(e[3]=s("h3",null,"无光标",-1)),s("div",T,[t(s("div",W,null,512),[[i,{text:"不显示光标的打字效果",cursor:!1}]])])])}}}),P=y(Z,[["__scopeId","data-v-4e2d2a33"]]),q=JSON.parse('{"title":"Typewriter 打字机指令","description":"","frontmatter":{},"headers":[],"relativePath":"directives/typewriter/index.md","filePath":"directives/typewriter/index.md"}'),X={name:"directives/typewriter/index.md"},z=Object.assign(X,{setup(h){const n=u(!0);return(c,e)=>{const i=v("ClientOnly");return p(),o("div",null,[e[1]||(e[1]=s("h1",{id:"typewriter-打字机指令",tabindex:"-1"},[r("Typewriter 打字机指令 "),s("a",{class:"header-anchor",href:"#typewriter-打字机指令","aria-label":'Permalink to "Typewriter 打字机指令"'},"​")],-1)),e[2]||(e[2]=s("p",null,"打字机指令用于创建文字逐个显示的打字机效果。支持自定义打字速度、延迟开始时间、光标样式等。",-1)),e[3]||(e[3]=s("h2",{id:"基础用法",tabindex:"-1"},[r("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),t(a(l(w),null,null,512),[[_,n.value]]),a(i,null,{default:d(()=>[a(l(C),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{n.value=!1}),vueCode:l(x)},{vue:d(()=>[a(P)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=g("",7))])}}});export{q as __pageData,z as default};
