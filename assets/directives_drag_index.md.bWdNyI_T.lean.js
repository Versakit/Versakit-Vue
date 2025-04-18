import{d as v,az as b,c as n,o as a,j as d,a5 as o,a as r,_ as u,p as g,B as m,G as s,aw as _,ad as x,k as l,w as c}from"./chunks/framework.Dr5ddTBW.js";import{d as f,f as y}from"./chunks/index.Cy4GuBY3.js";const w=`<script setup lang="ts">
// 不需要导入 VKPanel，因为我们使用原生 div 元素
<\/script>

<template>
  <div class="drag-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <div class="drag-container">
        <div v-drag class="draggable">自由拖拽</div>
      </div>
    </div>

    <h3>限制方向</h3>
    <div class="demo-row">
      <div class="drag-container">
        <div v-drag="{ axis: 'x' }" class="draggable">只能水平拖拽</div>
      </div>
    </div>

    <h3>限制边界</h3>
    <div class="demo-row">
      <div class="drag-container">
        <div
          v-drag="{ boundary: { left: 0, right: 300, top: 0, bottom: 100 } }"
          class="draggable"
        >
          限制在容器内拖拽
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.drag-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.demo-row {
  margin-bottom: 20px;
}

.drag-container {
  position: relative;
  width: 400px;
  height: 200px;
  border: 1px dashed #dcdfe6;
  border-radius: 4px;
  background: #f5f7fa;
  overflow: hidden;
}

.draggable {
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: move;
  user-select: none;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
  }
}
</style>
`,C={class:"drag-demo"},Z={class:"demo-row"},k={class:"drag-container"},D={class:"draggable"},W={class:"demo-row"},T={class:"drag-container"},V={class:"draggable"},A={class:"demo-row"},B={class:"drag-container"},G={class:"draggable"},P=v({__name:"index",setup(h){return(i,e)=>{const t=b("drag");return a(),n("div",C,[e[3]||(e[3]=d("h3",null,"基本用法",-1)),d("div",Z,[d("div",k,[o((a(),n("div",D,e[0]||(e[0]=[r("自由拖拽")]))),[[t]])])]),e[4]||(e[4]=d("h3",null,"限制方向",-1)),d("div",W,[d("div",T,[o((a(),n("div",V,e[1]||(e[1]=[r("只能水平拖拽")]))),[[t,{axis:"x"}]])])]),e[5]||(e[5]=d("h3",null,"限制边界",-1)),d("div",A,[d("div",B,[o((a(),n("div",G,e[2]||(e[2]=[r(" 限制在容器内拖拽 ")]))),[[t,{boundary:{left:0,right:300,top:0,bottom:100}}]])])])])}}}),z=u(P,[["__scopeId","data-v-cc65852b"]]),I=JSON.parse('{"title":"Drag 拖拽","description":"","frontmatter":{},"headers":[],"relativePath":"directives/drag/index.md","filePath":"directives/drag/index.md"}'),N={name:"directives/drag/index.md"},J=Object.assign(N,{setup(h){const i=g(!0);return(e,t)=>{const p=m("ClientOnly");return a(),n("div",null,[t[1]||(t[1]=d("h1",{id:"drag-拖拽",tabindex:"-1"},[r("Drag 拖拽 "),d("a",{class:"header-anchor",href:"#drag-拖拽","aria-label":'Permalink to "Drag 拖拽"'},"​")],-1)),t[2]||(t[2]=d("p",null,"拖拽指令用于实现元素的拖拽功能，支持限制拖拽方向和边界。",-1)),t[3]||(t[3]=d("h2",{id:"基本使用",tabindex:"-1"},[r("基本使用 "),d("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),o(s(l(f),null,null,512),[[x,i.value]]),s(p,null,{default:c(()=>[s(l(y),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{i.value=!1}),vueCode:l(w)},{vue:c(()=>[s(z)]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=_("",3))])}}});export{I as __pageData,J as default};
