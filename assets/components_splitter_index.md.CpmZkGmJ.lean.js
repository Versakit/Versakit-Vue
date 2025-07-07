const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.O96mM7mh.js","assets/chunks/theme.IAcmG15L.js","assets/chunks/framework.C7cq1VHP.js"])))=>i.map(i=>d[i]);
import{p as d,D as g,v as y,ak as o,C as h,c,o as u,j as i,G as t,aj as l,a1 as m,a as v,a4 as F,k as a,w as k,al as b}from"./chunks/framework.C7cq1VHP.js";import{O as f,E as x}from"./chunks/index.CyVXp2Hl.js";const D=`<script setup lang="ts">
import { Splitter, SplitterItem } from '@versakit/vue'
import '@versakit/vue/style'
import { ref, computed } from 'vue'

const horizontalSizes = ref<number[]>([])
const verticalSizes = ref<number[]>([])
const isDarkMode = ref(false)

// 监听系统主题变化
if (typeof window !== 'undefined') {
  isDarkMode.value =
    document.documentElement.classList.contains('dark') ||
    window.matchMedia('(prefers-color-scheme: dark)').matches

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      isDarkMode.value = e.matches
    })
}

const customStyle = computed(() => ({
  root: 'border rounded-lg overflow-hidden',
  gutter: isDarkMode.value ? 'bg-blue-600' : 'bg-blue-500',
  gutterHandler: isDarkMode.value ? 'bg-gray-300' : 'bg-white',
}))

const unstyledPt = computed(() => ({
  root: 'splitter-root',
  gutter: 'splitter-gutter',
  gutterHandler: 'splitter-handler',
}))
<\/script>

<template>
  <div class="examples">
    <!-- 基础用法 -->
    <section class="example-section">
      <h2 class="section-title">基础用法</h2>
      <div class="example-box">
        <Splitter @resize="horizontalSizes = $event">
          <SplitterItem>
            <div class="panel">
              <span>面板 1</span>
              <span v-if="horizontalSizes.length" class="size-label">
                {{ Math.round(horizontalSizes[0]) }}%
              </span>
            </div>
          </SplitterItem>
          <SplitterItem>
            <div class="panel panel-alt">
              <span>面板 2</span>
              <span v-if="horizontalSizes.length" class="size-label">
                {{ Math.round(horizontalSizes[1]) }}%
              </span>
            </div>
          </SplitterItem>
        </Splitter>
      </div>
    </section>

    <!-- 垂直布局 -->
    <section class="example-section">
      <h2 class="section-title">垂直布局</h2>
      <div class="example-box">
        <Splitter layout="vertical" @resize="verticalSizes = $event">
          <SplitterItem>
            <div class="panel">
              <span>面板 1</span>
              <span v-if="verticalSizes.length" class="size-label">
                {{ Math.round(verticalSizes[0]) }}%
              </span>
            </div>
          </SplitterItem>
          <SplitterItem>
            <div class="panel panel-alt">
              <span>面板 2</span>
              <span v-if="verticalSizes.length" class="size-label">
                {{ Math.round(verticalSizes[1]) }}%
              </span>
            </div>
          </SplitterItem>
        </Splitter>
      </div>
    </section>

    <!-- 多面板 -->
    <section class="example-section">
      <h2 class="section-title">多面板</h2>
      <div class="example-box">
        <Splitter>
          <SplitterItem>
            <div class="panel">面板 1</div>
          </SplitterItem>
          <SplitterItem>
            <div class="panel panel-alt">面板 2</div>
          </SplitterItem>
          <SplitterItem>
            <div class="panel panel-third">面板 3</div>
          </SplitterItem>
        </Splitter>
      </div>
    </section>

    <!-- 嵌套面板 -->
    <section class="example-section">
      <h2 class="section-title">嵌套面板</h2>
      <div class="example-box">
        <Splitter>
          <SplitterItem>
            <div class="panel panel-tall">面板 1</div>
          </SplitterItem>
          <SplitterItem>
            <Splitter layout="vertical">
              <SplitterItem>
                <div class="panel">面板 2.1</div>
              </SplitterItem>
              <SplitterItem>
                <div class="panel panel-alt">面板 2.2</div>
              </SplitterItem>
            </Splitter>
          </SplitterItem>
        </Splitter>
      </div>
    </section>

    <!-- 自定义分隔条 -->
    <section class="example-section">
      <h2 class="section-title">自定义分隔条</h2>
      <div class="example-box">
        <Splitter :gutter-size="8">
          <SplitterItem>
            <div class="panel">面板 1</div>
          </SplitterItem>
          <SplitterItem>
            <div class="panel panel-alt">面板 2</div>
          </SplitterItem>
        </Splitter>
      </div>
    </section>

    <!-- 初始尺寸和最小尺寸 -->
    <section class="example-section">
      <h2 class="section-title">初始尺寸和最小尺寸</h2>
      <div class="example-box">
        <Splitter :initial-sizes="[70, 30]" :min-size="[20, 10]">
          <SplitterItem>
            <div class="panel">
              <div>面板 1</div>
              <div class="panel-note">(初始 70%, 最小 20%)</div>
            </div>
          </SplitterItem>
          <SplitterItem>
            <div class="panel panel-alt">
              <div>面板 2</div>
              <div class="panel-note">(初始 30%, 最小 10%)</div>
            </div>
          </SplitterItem>
        </Splitter>
      </div>
    </section>

    <!-- 自定义样式 -->
    <section class="example-section">
      <h2 class="section-title">自定义样式</h2>
      <div class="example-box">
        <Splitter :pt="customStyle">
          <SplitterItem>
            <div class="panel">面板 1</div>
          </SplitterItem>
          <SplitterItem>
            <div class="panel panel-alt">面板 2</div>
          </SplitterItem>
        </Splitter>
      </div>
    </section>

    <!-- 无样式模式 -->
    <section class="example-section">
      <h2 class="section-title">无样式模式</h2>
      <div class="example-box">
        <Splitter unstyled :pt="unstyledPt">
          <SplitterItem>
            <div class="panel panel-custom">面板 1</div>
          </SplitterItem>
          <SplitterItem>
            <div class="panel panel-custom-alt">面板 2</div>
          </SplitterItem>
        </Splitter>
      </div>
    </section>
  </div>
</template>

<style scoped>
.examples {
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.example-section {
  margin-bottom: 40px;
  padding-bottom: 32px;
  border-bottom: 1px solid #e5e7eb;
}

.section-title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 24px;
  color: #1f2937;
}

.example-box {
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.panel {
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
  color: #1f2937;
  font-weight: 500;
  border-radius: 4px;
}

.panel-alt {
  background-color: #e5e7eb;
}

.panel-third {
  background-color: #d1d5db;
}

.panel-tall {
  height: 240px;
}

.panel-custom {
  background-color: #f9fafb;
}

.panel-custom-alt {
  background-color: #f3f4f6;
}

.size-label {
  font-size: 14px;
  color: #6b7280;
  margin-top: 8px;
}

.panel-note {
  font-size: 14px;
  color: #6b7280;
  margin-top: 8px;
  font-weight: normal;
}

/* 暗黑模式 */
:root[class~='dark'] .section-title {
  color: #f9fafb;
}

:root[class~='dark'] .example-box {
  background-color: #1f2937;
  border-color: #374151;
}

:root[class~='dark'] .example-section {
  border-color: #374151;
}

:root[class~='dark'] .panel {
  background-color: #374151;
  color: #f3f4f6;
}

:root[class~='dark'] .panel-alt {
  background-color: #4b5563;
}

:root[class~='dark'] .panel-third {
  background-color: #6b7280;
}

:root[class~='dark'] .panel-custom {
  background-color: #1f2937;
}

:root[class~='dark'] .panel-custom-alt {
  background-color: #374151;
}

:root[class~='dark'] .size-label,
:root[class~='dark'] .panel-note {
  color: #9ca3af;
}

/* 响应式布局 */
@media (max-width: 768px) {
  .examples {
    padding: 16px;
  }

  .example-section {
    margin-bottom: 24px;
    padding-bottom: 24px;
  }

  .example-box {
    padding: 16px;
  }

  .panel {
    height: 120px;
  }

  .panel-tall {
    height: 180px;
  }
}
</style>

<style>
.splitter-root {
  display: flex;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
}

.splitter-gutter {
  width: 8px;
  background-color: #f3f4f6;
  cursor: col-resize;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.splitter-gutter:hover {
  background-color: #e5e7eb;
}

.splitter-handler {
  height: 32px;
  width: 4px;
  background-color: #9ca3af;
  border-radius: 2px;
}

:root[class~='dark'] .splitter-root {
  border-color: #374151;
}

:root[class~='dark'] .splitter-gutter {
  background-color: #374151;
}

:root[class~='dark'] .splitter-gutter:hover {
  background-color: #4b5563;
}

:root[class~='dark'] .splitter-handler {
  background-color: #6b7280;
}
</style>
`,q=JSON.parse('{"title":"Splitter 分割面板","description":"","frontmatter":{},"headers":[],"relativePath":"components/splitter/index.md","filePath":"components/splitter/index.md"}'),C={name:"components/splitter/index.md"},_=Object.assign(C,{setup(A){const e=d(!0),n=g();return y(async()=>{n.value=(await o(async()=>{const{default:p}=await import("./chunks/index.O96mM7mh.js");return{default:p}},__vite__mapDeps([0,1,2]))).default}),(p,s)=>{const E=h("Link"),r=h("ClientOnly");return u(),c("div",null,[s[1]||(s[1]=i("h1",{id:"splitter-分割面板",tabindex:"-1"},[v("Splitter 分割面板 "),i("a",{class:"header-anchor",href:"#splitter-分割面板","aria-label":'Permalink to "Splitter 分割面板"'},"​")],-1)),s[2]||(s[2]=i("p",null,"Splitter 组件用于创建可调整大小的分割面板，允许用户通过拖动分隔条来重新分配面板空间，适用于需要灵活布局的界面，如代码编辑器、文件管理器等。",-1)),t(E,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-splitter-%E5%88%86%E5%89%B2%E9%9D%A2%E6%9D%BF--basic"}),s[3]||(s[3]=l("",3)),m(t(a(f),null,null,512),[[F,e.value]]),t(r,null,{default:k(()=>[t(a(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{e.value=!1}),vueCode:a(D)},b({_:2},[n.value?{name:"vue",fn:k(()=>[t(a(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[4]||(s[4]=l("",30)),s[5]||(s[5]=i("table",{tabindex:"0"},[i("thead",null,[i("tr",null,[i("th",null,"名称"),i("th",null,"参数"),i("th",null,"说明")])]),i("tbody",null,[i("tr",null,[i("td",{n:""},"panel-"),i("td",null,"-"),i("td",null,"面板内容，n 从 0 开始表示面板的索引")])])],-1)),s[6]||(s[6]=l("",1))])}}});export{q as __pageData,_ as default};
