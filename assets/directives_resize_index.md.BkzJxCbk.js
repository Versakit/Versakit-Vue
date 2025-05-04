import{d as c,az as m,c as t,o as a,j as s,a4 as h,a as d,_ as g,p as F,B as u,G as l,aw as y,aa as b,k as o,w as p}from"./chunks/framework.rcZoKwU1.js";import{O as v,E as z}from"./chunks/index.CpKg_UEU.js";const E=`<script setup lang="ts">
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
`,x={class:"resize-demo"},C={class:"demo-row"},_={class:"resize-item"},f={class:"demo-row"},A={class:"resize-item"},B={class:"demo-row"},w={class:"resize-item"},W=c({__name:"index",setup(k){const e=(r,i)=>{console.log(`新尺寸: ${r}x${i}`)};return(r,i)=>{const n=m("resize");return a(),t("div",x,[i[3]||(i[3]=s("h3",null,"基本用法",-1)),s("div",C,[h((a(),t("div",_,i[0]||(i[0]=[d(" 拖动右下角调整大小 ")]))),[[n,{minWidth:100,minHeight:100,onResize:e}]])]),i[4]||(i[4]=s("h3",null,"限制最大尺寸",-1)),s("div",f,[h((a(),t("div",A,i[1]||(i[1]=[d(" 拖动右下角调整大小（最大 300x200） ")]))),[[n,{minWidth:100,minHeight:100,maxWidth:300,maxHeight:200,onResize:e}]])]),i[5]||(i[5]=s("h3",null,"多方向调整",-1)),s("div",B,[h((a(),t("div",w,i[2]||(i[2]=[d(" 可以从任意角落调整大小 ")]))),[[n,{minWidth:100,minHeight:100,handles:["n","s","e","w","ne","nw","se","sw"],onResize:e}]])])])}}}),D=g(W,[["__scopeId","data-v-d3197f3f"]]),P=JSON.parse('{"title":"Resize 大小调整指令","description":"","frontmatter":{},"headers":[],"relativePath":"directives/resize/index.md","filePath":"directives/resize/index.md"}'),R={name:"directives/resize/index.md"},T=Object.assign(R,{setup(k){const e=F(!0);return(r,i)=>{const n=u("ClientOnly");return a(),t("div",null,[i[1]||(i[1]=s("h1",{id:"resize-大小调整指令",tabindex:"-1"},[d("Resize 大小调整指令 "),s("a",{class:"header-anchor",href:"#resize-大小调整指令","aria-label":'Permalink to "Resize 大小调整指令"'},"​")],-1)),i[2]||(i[2]=s("p",null,"大小调整指令用于使元素可以通过拖拽调整大小。支持八个方向的调整，可以限制最小和最大尺寸，并提供尺寸变化的回调函数。",-1)),i[3]||(i[3]=s("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),h(l(o(v),null,null,512),[[b,e.value]]),l(n,null,{default:p(()=>[l(o(z),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:i[0]||(i[0]=()=>{e.value=!1}),vueCode:o(E)},{vue:p(()=>[l(D)]),_:1},8,["vueCode"])]),_:1}),i[4]||(i[4]=y(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="指令值" tabindex="-1">指令值 <a class="header-anchor" href="#指令值" aria-label="Permalink to &quot;指令值&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>minWidth</td><td>最小宽度（像素）</td><td><code>number</code></td><td><code>50</code></td></tr><tr><td>minHeight</td><td>最小高度（像素）</td><td><code>number</code></td><td><code>50</code></td></tr><tr><td>maxWidth</td><td>最大宽度（像素）</td><td><code>number</code></td><td><code>Infinity</code></td></tr><tr><td>maxHeight</td><td>最大高度（像素）</td><td><code>number</code></td><td><code>Infinity</code></td></tr><tr><td>handles</td><td>可调整大小的方向</td><td><code>(&#39;n&#39; | &#39;s&#39; | &#39;e&#39; | &#39;w&#39; | &#39;ne&#39; | &#39;nw&#39; | &#39;se&#39; | &#39;sw&#39;)[]</code></td><td><code>[&#39;se&#39;]</code></td></tr><tr><td>onResize</td><td>大小变化时的回调函数</td><td><code>(width: number, height: number) =&gt; void</code></td><td>-</td></tr></tbody></table><h3 id="示例类型定义" tabindex="-1">示例类型定义 <a class="header-anchor" href="#示例类型定义" aria-label="Permalink to &quot;示例类型定义&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ResizeOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	minWidth</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	minHeight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	maxWidth</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	maxHeight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	handles</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;n&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;e&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;w&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ne&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;nw&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;se&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;sw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	onResize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">height</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h3><ol><li>元素必须具有定位属性（非 static）</li><li>支持八个方向的大小调整：上、下、左、右、左上、右上、左下、右下</li><li>可以限制最小和最大尺寸</li><li>拖拽时会实时触发 onResize 回调</li><li>调整手柄会自动创建和移除</li><li>支持自定义调整手柄的样式</li></ol>`,7))])}}});export{P as __pageData,T as default};
