import{d as c,az as m,c as t,o as a,j as s,a5 as h,a as d,_ as g,p as F,B as u,G as l,aw as y,ad as b,k as o,w as p}from"./chunks/framework.Dr5ddTBW.js";import{d as v,f as z}from"./chunks/index.Cy4GuBY3.js";const E=`<script setup lang="ts">
const handleResize = (width: number, height: number) => {
  console.log(\`新尺寸: \${width}x\${height}\`)
}
<\/script>

<template>
  <div class="resize-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <div
        v-resize="{
          minWidth: 100,
          minHeight: 100,
          onResize: handleResize,
        }"
        class="resize-item"
      >
        拖动右下角调整大小
      </div>
    </div>

    <h3>限制最大尺寸</h3>
    <div class="demo-row">
      <div
        v-resize="{
          minWidth: 100,
          minHeight: 100,
          maxWidth: 300,
          maxHeight: 200,
          onResize: handleResize,
        }"
        class="resize-item"
      >
        拖动右下角调整大小（最大 300x200）
      </div>
    </div>

    <h3>多方向调整</h3>
    <div class="demo-row">
      <div
        v-resize="{
          minWidth: 100,
          minHeight: 100,
          handles: ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'],
          onResize: handleResize,
        }"
        class="resize-item"
      >
        可以从任意角落调整大小
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.resize-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.demo-row {
  margin-bottom: 20px;
}

.resize-item {
  width: 200px;
  height: 100px;
  background: #f5f7fa;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  position: relative;
  user-select: none;
}

:deep(.resize-handle) {
  background-color: #409eff;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #66b1ff;
  }
}
</style>
`,x={class:"resize-demo"},C={class:"demo-row"},f={class:"resize-item"},_={class:"demo-row"},A={class:"resize-item"},B={class:"demo-row"},w={class:"resize-item"},W=c({__name:"index",setup(k){const e=(r,i)=>{console.log(`新尺寸: ${r}x${i}`)};return(r,i)=>{const n=m("resize");return a(),t("div",x,[i[3]||(i[3]=s("h3",null,"基本用法",-1)),s("div",C,[h((a(),t("div",f,i[0]||(i[0]=[d(" 拖动右下角调整大小 ")]))),[[n,{minWidth:100,minHeight:100,onResize:e}]])]),i[4]||(i[4]=s("h3",null,"限制最大尺寸",-1)),s("div",_,[h((a(),t("div",A,i[1]||(i[1]=[d(" 拖动右下角调整大小（最大 300x200） ")]))),[[n,{minWidth:100,minHeight:100,maxWidth:300,maxHeight:200,onResize:e}]])]),i[5]||(i[5]=s("h3",null,"多方向调整",-1)),s("div",B,[h((a(),t("div",w,i[2]||(i[2]=[d(" 可以从任意角落调整大小 ")]))),[[n,{minWidth:100,minHeight:100,handles:["n","s","e","w","ne","nw","se","sw"],onResize:e}]])])])}}}),D=g(W,[["__scopeId","data-v-d3197f3f"]]),P=JSON.parse('{"title":"Resize 大小调整指令","description":"","frontmatter":{},"headers":[],"relativePath":"directives/resize/index.md","filePath":"directives/resize/index.md"}'),R={name:"directives/resize/index.md"},T=Object.assign(R,{setup(k){const e=F(!0);return(r,i)=>{const n=u("ClientOnly");return a(),t("div",null,[i[1]||(i[1]=s("h1",{id:"resize-大小调整指令",tabindex:"-1"},[d("Resize 大小调整指令 "),s("a",{class:"header-anchor",href:"#resize-大小调整指令","aria-label":'Permalink to "Resize 大小调整指令"'},"​")],-1)),i[2]||(i[2]=s("p",null,"大小调整指令用于使元素可以通过拖拽调整大小。支持八个方向的调整，可以限制最小和最大尺寸，并提供尺寸变化的回调函数。",-1)),i[3]||(i[3]=s("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),h(l(o(v),null,null,512),[[b,e.value]]),l(n,null,{default:p(()=>[l(o(z),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:i[0]||(i[0]=()=>{e.value=!1}),vueCode:o(E)},{vue:p(()=>[l(D)]),_:1},8,["vueCode"])]),_:1}),i[4]||(i[4]=y("",7))])}}});export{P as __pageData,T as default};
