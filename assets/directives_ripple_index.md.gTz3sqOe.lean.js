import{d as _,az as f,c as u,o as a,j as n,a4 as r,b as i,w as s,a as o,k as t,_ as h,p as b,B as w,G as d,aa as x}from"./chunks/framework.rcZoKwU1.js";import{Q as p}from"./chunks/theme.BK5t6puo.js";import{O as W,E as g}from"./chunks/index.CpKg_UEU.js";const V=`<script setup lang="ts">
import { VKPanel } from '@versakit/ui'
<\/script>

<template>
  <div class="ripple-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <VKPanel v-ripple>点击查看涟漪效果</VKPanel>
    </div>

    <h3>自定义颜色</h3>
    <div class="demo-row">
      <VKPanel v-ripple="{ color: 'rgba(64, 158, 255, 0.3)' }">
        蓝色涟漪效果
      </VKPanel>
    </div>

    <h3>自定义持续时间</h3>
    <div class="demo-row">
      <VKPanel v-ripple="{ duration: 1000 }">慢速涟漪效果</VKPanel>
    </div>

    <h3>组合使用</h3>
    <div class="demo-row">
      <VKPanel v-ripple="{ color: 'rgba(103, 194, 58, 0.3)', duration: 800 }">
        绿色慢速涟漪效果
      </VKPanel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ripple-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.demo-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
</style>
`,k={class:"ripple-demo"},C={class:"demo-row"},y={class:"demo-row"},P={class:"demo-row"},B={class:"demo-row"},Z=_({__name:"index",setup(v){return(m,e)=>{const l=f("ripple");return a(),u("div",k,[e[4]||(e[4]=n("h3",null,"基本用法",-1)),n("div",C,[r((a(),i(t(p),null,{default:s(()=>e[0]||(e[0]=[o("点击查看涟漪效果")])),_:1})),[[l]])]),e[5]||(e[5]=n("h3",null,"自定义颜色",-1)),n("div",y,[r((a(),i(t(p),null,{default:s(()=>e[1]||(e[1]=[o(" 蓝色涟漪效果 ")])),_:1})),[[l,{color:"rgba(64, 158, 255, 0.3)"}]])]),e[6]||(e[6]=n("h3",null,"自定义持续时间",-1)),n("div",P,[r((a(),i(t(p),null,{default:s(()=>e[2]||(e[2]=[o("慢速涟漪效果")])),_:1})),[[l,{duration:1e3}]])]),e[7]||(e[7]=n("h3",null,"组合使用",-1)),n("div",B,[r((a(),i(t(p),null,{default:s(()=>e[3]||(e[3]=[o(" 绿色慢速涟漪效果 ")])),_:1})),[[l,{color:"rgba(103, 194, 58, 0.3)",duration:800}]])])])}}}),D=h(Z,[["__scopeId","data-v-9961da9b"]]),A=JSON.parse('{"title":"Ripple 水波纹","description":"","frontmatter":{},"headers":[],"relativePath":"directives/ripple/index.md","filePath":"directives/ripple/index.md"}'),X={name:"directives/ripple/index.md"},N=Object.assign(X,{setup(v){const m=b(!0);return(e,l)=>{const c=w("ClientOnly");return a(),u("div",null,[l[1]||(l[1]=n("h1",{id:"ripple-水波纹",tabindex:"-1"},[o("Ripple 水波纹 "),n("a",{class:"header-anchor",href:"#ripple-水波纹","aria-label":'Permalink to "Ripple 水波纹"'},"​")],-1)),l[2]||(l[2]=n("h2",{id:"基本使用",tabindex:"-1"},[o("基本使用 "),n("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),r(d(t(W),null,null,512),[[x,m.value]]),d(c,null,{default:s(()=>[d(t(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:l[0]||(l[0]=()=>{m.value=!1}),vueCode:t(V)},{vue:s(()=>[d(D)]),_:1},8,["vueCode"])]),_:1})])}}});export{A as __pageData,N as default};
