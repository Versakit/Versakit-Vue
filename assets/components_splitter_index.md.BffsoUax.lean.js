const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.B3JGuLN_.js","assets/chunks/theme.Coj6KSFq.js","assets/chunks/framework.DLuSxX4C.js"])))=>i.map(i=>d[i]);
import{p as d,D as g,v as y,al as c,C as p,c as o,o as u,j as i,G as t,ak as l,a0 as v,a as m,a3 as F,k as a,w as k,am as b}from"./chunks/framework.DLuSxX4C.js";import{O as f,E as x}from"./chunks/index.Bhh2hZnL.js";const A=`<template>
  <div class="flex flex-col gap-8">
    <!-- 基本用法 -->
    <div class="space-y-2">
      <h3 class="text-lg font-medium">基础水平分割</h3>
      <Splitter class="h-64 border border-gray-200 rounded">
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-50 p-4">
            <div class="text-center">
              <div class="text-xl font-medium mb-2">左侧面板</div>
              <p class="text-gray-500">可拖动中间的分隔条调整面板大小</p>
            </div>
          </div>
        </SplitterPanel>
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-100 p-4">
            <div class="text-center">
              <div class="text-xl font-medium mb-2">右侧面板</div>
              <p class="text-gray-500">基础水平分割面板示例</p>
            </div>
          </div>
        </SplitterPanel>
      </Splitter>
    </div>

    <!-- 垂直分割 -->
    <div class="space-y-2">
      <h3 class="text-lg font-medium">垂直分割</h3>
      <Splitter
        direction="vertical"
        class="h-64 border border-gray-200 rounded"
      >
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-50 p-4">
            <div class="text-center">
              <div class="text-xl font-medium mb-2">上部面板</div>
              <p class="text-gray-500">通过direction="vertical"设置垂直分割</p>
            </div>
          </div>
        </SplitterPanel>
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-100 p-4">
            <div class="text-center">
              <div class="text-xl font-medium mb-2">下部面板</div>
              <p class="text-gray-500">垂直拖动分隔条调整大小</p>
            </div>
          </div>
        </SplitterPanel>
      </Splitter>
    </div>

    <!-- 多面板分割 -->
    <div class="space-y-2">
      <h3 class="text-lg font-medium">多面板分割</h3>
      <Splitter class="h-64 border border-gray-200 rounded">
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-50 p-4">
            <div class="text-center">
              <div class="text-xl font-medium">面板 1</div>
            </div>
          </div>
        </SplitterPanel>
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-100 p-4">
            <div class="text-center">
              <div class="text-xl font-medium">面板 2</div>
            </div>
          </div>
        </SplitterPanel>
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-200 p-4">
            <div class="text-center">
              <div class="text-xl font-medium">面板 3</div>
            </div>
          </div>
        </SplitterPanel>
      </Splitter>
    </div>

    <!-- 嵌套分割面板 -->
    <div class="space-y-2">
      <h3 class="text-lg font-medium">嵌套分割面板</h3>
      <Splitter class="h-64 border border-gray-200 rounded">
        <SplitterPanel :size="'40%'">
          <div class="h-full flex items-center justify-center bg-gray-50 p-4">
            <div class="text-center">
              <div class="text-xl font-medium mb-2">左侧面板</div>
              <p class="text-gray-500">占据40%宽度</p>
            </div>
          </div>
        </SplitterPanel>
        <SplitterPanel :size="'60%'">
          <Splitter direction="vertical" class="h-full">
            <SplitterPanel :size="'60%'">
              <div
                class="h-full flex items-center justify-center bg-gray-100 p-4"
              >
                <div class="text-center">
                  <div class="text-xl font-medium">右上面板</div>
                  <p class="text-gray-500">嵌套的垂直分割面板</p>
                </div>
              </div>
            </SplitterPanel>
            <SplitterPanel :size="'40%'">
              <div
                class="h-full flex items-center justify-center bg-gray-200 p-4"
              >
                <div class="text-center">
                  <div class="text-xl font-medium">右下面板</div>
                </div>
              </div>
            </SplitterPanel>
          </Splitter>
        </SplitterPanel>
      </Splitter>
    </div>

    <!-- 自定义配置 -->
    <div class="space-y-2">
      <h3 class="text-lg font-medium">自定义配置</h3>
      <Splitter
        class="h-64 border border-gray-200 rounded"
        :gutter-size="10"
        :panels="[
          { size: '30%', minSize: '20%', maxSize: '40%', collapsible: true },
          { size: '70%', minSize: '60%', resizable: true },
        ]"
      >
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-50 p-4">
            <div class="text-center">
              <div class="text-xl font-medium mb-2">可折叠面板</div>
              <p class="text-gray-500">配置了最小尺寸20%和最大尺寸40%</p>
            </div>
          </div>
        </SplitterPanel>
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-100 p-4">
            <div class="text-center">
              <div class="text-xl font-medium mb-2">主面板</div>
              <p class="text-gray-500">最小尺寸为60%</p>
            </div>
          </div>
        </SplitterPanel>
      </Splitter>
    </div>

    <!-- 自定义样式 -->
    <div class="space-y-2">
      <h3 class="text-lg font-medium">自定义样式</h3>
      <Splitter
        class="h-64"
        :pt="{
          root: 'border border-gray-300 rounded-lg overflow-hidden',
          gutter: 'bg-blue-500 hover:bg-blue-600 transition-colors',
          gutterHandler: 'h-10 w-1.5 bg-white rounded-full',
        }"
      >
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-50 p-4">
            <div class="text-center">
              <div class="text-xl font-medium mb-2">自定义样式面板</div>
              <p class="text-gray-500">通过pt属性自定义组件样式</p>
            </div>
          </div>
        </SplitterPanel>
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-100 p-4">
            <div class="text-center">
              <div class="text-xl font-medium mb-2">自定义分割条</div>
              <p class="text-gray-500">蓝色分割条带有悬停效果</p>
            </div>
          </div>
        </SplitterPanel>
      </Splitter>
    </div>

    <!-- 无样式模式 -->
    <div class="space-y-2">
      <h3 class="text-lg font-medium">无样式模式</h3>
      <Splitter
        class="h-64"
        unstyled
        :pt="{
          root: 'flex border-2 border-dashed border-gray-300 rounded-xl overflow-hidden',
          panel: 'flex-1',
          gutter:
            'w-2 bg-gray-50 hover:bg-gray-100 cursor-col-resize flex items-center justify-center',
          gutterHandler: 'h-16 w-1 bg-gray-400 rounded',
        }"
      >
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-50 p-4">
            <div class="text-center">
              <div class="text-xl font-medium mb-2">无样式模式</div>
              <p class="text-gray-500">使用unstyled属性移除默认样式</p>
            </div>
          </div>
        </SplitterPanel>
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-100 p-4">
            <div class="text-center">
              <div class="text-xl font-medium mb-2">完全自定义</div>
              <p class="text-gray-500">通过pt属性定义所有样式</p>
            </div>
          </div>
        </SplitterPanel>
      </Splitter>
    </div>
  </div>
</template>

<script setup>
import { Splitter, SplitterPanel } from '@versakit/vue'
<\/script>
`,q=JSON.parse('{"title":"Splitter 分割面板","description":"","frontmatter":{},"headers":[],"relativePath":"components/splitter/index.md","filePath":"components/splitter/index.md"}'),C={name:"components/splitter/index.md"},P=Object.assign(C,{setup(D){const e=d(!0),n=g();return y(async()=>{n.value=(await c(async()=>{const{default:h}=await import("./chunks/index.B3JGuLN_.js");return{default:h}},__vite__mapDeps([0,1,2]))).default}),(h,s)=>{const E=p("Link"),r=p("ClientOnly");return u(),o("div",null,[s[1]||(s[1]=i("h1",{id:"splitter-分割面板",tabindex:"-1"},[m("Splitter 分割面板 "),i("a",{class:"header-anchor",href:"#splitter-分割面板","aria-label":'Permalink to "Splitter 分割面板"'},"​")],-1)),s[2]||(s[2]=i("p",null,"Splitter 组件用于创建可调整大小的分割面板，允许用户通过拖动分隔条来重新分配面板空间，适用于需要灵活布局的界面，如代码编辑器、文件管理器等。",-1)),t(E,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-splitter-%E5%88%86%E5%89%B2%E9%9D%A2%E6%9D%BF--basic"}),s[3]||(s[3]=l("",3)),v(t(a(f),null,null,512),[[F,e.value]]),t(r,null,{default:k(()=>[t(a(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{e.value=!1}),vueCode:a(A)},b({_:2},[n.value?{name:"vue",fn:k(()=>[t(a(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[4]||(s[4]=l("",30)),s[5]||(s[5]=i("table",{tabindex:"0"},[i("thead",null,[i("tr",null,[i("th",null,"名称"),i("th",null,"参数"),i("th",null,"说明")])]),i("tbody",null,[i("tr",null,[i("td",{n:""},"panel-"),i("td",null,"-"),i("td",null,"面板内容，n 从 0 开始表示面板的索引")])])],-1)),s[6]||(s[6]=l("",1))])}}});export{q as __pageData,P as default};
