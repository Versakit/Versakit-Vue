import{d as k,az as g,c as i,o as l,j as e,a4 as r,a as o,_ as u,p as m,B as b,G as t,aw as v,aa as _,k as d,w as p}from"./chunks/framework.rcZoKwU1.js";import{O as f,E as y}from"./chunks/index.CpKg_UEU.js";const x=`<script setup lang="ts">
const handleLongPress = () => {
  console.log('长按触发')
}
<\/script>

<template>
  <div class="long-press-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <div v-long-press="{ callback: handleLongPress }" class="long-press-item">
        长按触发回调
      </div>
    </div>

    <h3>自定义时长</h3>
    <div class="demo-row">
      <div
        v-long-press="{ duration: 1000, callback: handleLongPress }"
        class="long-press-item"
      >
        长按1秒触发
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.long-press-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.demo-row {
  margin-bottom: 20px;
}

.long-press-item {
  display: inline-block;
  padding: 10px 20px;
  background: #f5f7fa;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #ecf5ff;
    border-color: #409eff;
    color: #409eff;
  }
}
</style>
`,C={class:"long-press-demo"},P={class:"demo-row"},E={class:"long-press-item"},A={class:"demo-row"},B={class:"long-press-item"},F=k({__name:"index",setup(h){const n=()=>{console.log("长按触发")};return(c,s)=>{const a=g("long-press");return l(),i("div",C,[s[2]||(s[2]=e("h3",null,"基本用法",-1)),e("div",P,[r((l(),i("div",E,s[0]||(s[0]=[o(" 长按触发回调 ")]))),[[a,{callback:n}]])]),s[3]||(s[3]=e("h3",null,"自定义时长",-1)),e("div",A,[r((l(),i("div",B,s[1]||(s[1]=[o(" 长按1秒触发 ")]))),[[a,{duration:1e3,callback:n}]])])])}}}),w=u(F,[["__scopeId","data-v-c8b9e5a0"]]),G=JSON.parse('{"title":"LongPress 长按指令","description":"","frontmatter":{},"headers":[],"relativePath":"directives/long-press/index.md","filePath":"directives/long-press/index.md"}'),D={name:"directives/long-press/index.md"},V=Object.assign(D,{setup(h){const n=m(!0);return(c,s)=>{const a=b("ClientOnly");return l(),i("div",null,[s[1]||(s[1]=e("h1",{id:"longpress-长按指令",tabindex:"-1"},[o("LongPress 长按指令 "),e("a",{class:"header-anchor",href:"#longpress-长按指令","aria-label":'Permalink to "LongPress 长按指令"'},"​")],-1)),s[2]||(s[2]=e("p",null,"长按指令用于检测元素的长按事件。支持自定义触发时长，同时支持移动端触摸事件和桌面端鼠标事件。",-1)),s[3]||(s[3]=e("h2",{id:"基础用法",tabindex:"-1"},[o("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),r(t(d(f),null,null,512),[[_,n.value]]),t(a,null,{default:p(()=>[t(d(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{n.value=!1}),vueCode:d(x)},{vue:p(()=>[t(w)]),_:1},8,["vueCode"])]),_:1}),s[4]||(s[4]=v("",7))])}}});export{G as __pageData,V as default};
