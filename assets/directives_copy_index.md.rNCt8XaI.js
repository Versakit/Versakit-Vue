import{d as y,az as u,c as i,o as n,j as e,a5 as r,a,_ as v,p as m,B as g,G as d,aw as _,ad as f,k as p,w as h}from"./chunks/framework.Dr5ddTBW.js";import{d as b,f as x}from"./chunks/index.Cy4GuBY3.js";const C=`<script setup lang="ts">
const copySuccess = () => {
  console.log('复制成功')
}

const copyError = (err: Error) => {
  console.error('复制失败:', err)
}
<\/script>

<template>
  <div class="copy-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <div v-copy class="copy-item">点击复制这段文本</div>
    </div>

    <h3>自定义文本</h3>
    <div class="demo-row">
      <div v-copy="{ text: '这是自定义的复制文本' }" class="copy-item">
        点击复制自定义文本
      </div>
    </div>

    <h3>回调函数</h3>
    <div class="demo-row">
      <div
        v-copy="{
          text: '带回调的复制文本',
          success: copySuccess,
          error: copyError,
        }"
        class="copy-item"
      >
        点击复制并查看控制台输出
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.copy-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.demo-row {
  margin-bottom: 20px;
}

.copy-item {
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
`,E={class:"copy-demo"},F={class:"demo-row"},A={class:"copy-item"},B={class:"demo-row"},D={class:"copy-item"},w={class:"demo-row"},W={class:"copy-item"},S=y({__name:"index",setup(k){const o=()=>{console.log("复制成功")},c=t=>{console.error("复制失败:",t)};return(t,s)=>{const l=u("copy");return n(),i("div",E,[s[3]||(s[3]=e("h3",null,"基本用法",-1)),e("div",F,[r((n(),i("div",A,s[0]||(s[0]=[a("点击复制这段文本")]))),[[l]])]),s[4]||(s[4]=e("h3",null,"自定义文本",-1)),e("div",B,[r((n(),i("div",D,s[1]||(s[1]=[a(" 点击复制自定义文本 ")]))),[[l,{text:"这是自定义的复制文本"}]])]),s[5]||(s[5]=e("h3",null,"回调函数",-1)),e("div",w,[r((n(),i("div",W,s[2]||(s[2]=[a(" 点击复制并查看控制台输出 ")]))),[[l,{text:"带回调的复制文本",success:o,error:c}]])])])}}}),T=v(S,[["__scopeId","data-v-f0eebe94"]]),V=JSON.parse('{"title":"Copy 复制指令","description":"","frontmatter":{},"headers":[],"relativePath":"directives/copy/index.md","filePath":"directives/copy/index.md"}'),Z={name:"directives/copy/index.md"},z=Object.assign(Z,{setup(k){const o=m(!0);return(c,t)=>{const s=g("ClientOnly");return n(),i("div",null,[t[1]||(t[1]=e("h1",{id:"copy-复制指令",tabindex:"-1"},[a("Copy 复制指令 "),e("a",{class:"header-anchor",href:"#copy-复制指令","aria-label":'Permalink to "Copy 复制指令"'},"​")],-1)),t[2]||(t[2]=e("p",null,"复制指令用于快速实现点击复制文本的功能。支持复制元素内容或自定义文本，并提供复制成功和失败的回调函数。",-1)),t[3]||(t[3]=e("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),r(d(p(b),null,null,512),[[f,o.value]]),d(s,null,{default:h(()=>[d(p(x),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{o.value=!1}),vueCode:p(C)},{vue:h(()=>[d(T)]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=_(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="指令值" tabindex="-1">指令值 <a class="header-anchor" href="#指令值" aria-label="Permalink to &quot;指令值&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>要复制的文本，如果不传则使用元素的文本内容</td><td><code>string</code></td><td>-</td></tr><tr><td>success</td><td>复制成功的回调函数</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>error</td><td>复制失败的回调函数</td><td><code>(err: Error) =&gt; void</code></td><td>-</td></tr></tbody></table><h3 id="示例类型定义" tabindex="-1">示例类型定义 <a class="header-anchor" href="#示例类型定义" aria-label="Permalink to &quot;示例类型定义&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CopyOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	success</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	error</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,5))])}}});export{V as __pageData,z as default};
