const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.oyyoFjKP.js","assets/chunks/theme.BTaXhGXQ.js","assets/chunks/framework.C7cq1VHP.js"])))=>i.map(i=>d[i]);
import{p as r,D as g,v as y,ak as o,C as k,c as m,o as F,j as n,G as i,aj as e,a1 as c,a as u,a4 as v,k as t,w as p,al as b}from"./chunks/framework.C7cq1VHP.js";import{O as C,E as B}from"./chunks/index.CyVXp2Hl.js";const x=`<script setup lang="ts">
import { Timeline, TimelineItem } from '@versakit/vue'
import '@versakit/vue/style'
import { ref } from 'vue'

// 检测当前主题模式
const isDarkMode = ref(false)

// 监听系统主题变化
if (typeof window !== 'undefined') {
  // 初始化主题
  isDarkMode.value =
    document.documentElement.classList.contains('dark') ||
    window.matchMedia('(prefers-color-scheme: dark)').matches

  // 监听主题变化
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      isDarkMode.value = e.matches
    })
}
<\/script>

<template>
  <div class="space-y-12">
    <!-- 基础用法 -->
    <section class="example-section">
      <h2 class="example-title">基础用法</h2>
      <div class="example-container">
        <Timeline>
          <TimelineItem>
            <div class="font-medium">创建项目</div>
            <div class="text-sm text-opacity-70">2023-01-01</div>
            <div>项目初始化完成</div>
          </TimelineItem>
          <TimelineItem>
            <div class="font-medium">开发阶段</div>
            <div class="text-sm text-opacity-70">2023-02-15</div>
            <div>完成核心功能开发</div>
          </TimelineItem>
          <TimelineItem>
            <div class="font-medium">测试阶段</div>
            <div class="text-sm text-opacity-70">2023-03-20</div>
            <div>完成所有测试用例</div>
          </TimelineItem>
        </Timeline>
      </div>
    </section>

    <!-- 对齐方式 -->
    <section class="example-section">
      <h2 class="example-title">对齐方式</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="example-container">
          <h3 class="text-md font-medium mb-4">左侧对齐</h3>
          <Timeline align="left">
            <TimelineItem>
              <div class="font-medium">创建项目</div>
              <div class="text-sm text-opacity-70">2023-01-01</div>
            </TimelineItem>
            <TimelineItem>
              <div class="font-medium">开发阶段</div>
              <div class="text-sm text-opacity-70">2023-02-15</div>
            </TimelineItem>
            <TimelineItem>
              <div class="font-medium">测试阶段</div>
              <div class="text-sm text-opacity-70">2023-03-20</div>
            </TimelineItem>
          </Timeline>
        </div>

        <div class="example-container">
          <h3 class="text-md font-medium mb-4">右侧对齐</h3>
          <Timeline align="right">
            <TimelineItem>
              <div class="font-medium">创建项目</div>
              <div class="text-sm text-opacity-70">2023-01-01</div>
            </TimelineItem>
            <TimelineItem>
              <div class="font-medium">开发阶段</div>
              <div class="text-sm text-opacity-70">2023-02-15</div>
            </TimelineItem>
            <TimelineItem>
              <div class="font-medium">测试阶段</div>
              <div class="text-sm text-opacity-70">2023-03-20</div>
            </TimelineItem>
          </Timeline>
        </div>

        <div class="example-container">
          <h3 class="text-md font-medium mb-4">交替对齐</h3>
          <Timeline align="alternate">
            <TimelineItem>
              <div class="font-medium">创建项目</div>
              <div class="text-sm text-opacity-70">2023-01-01</div>
            </TimelineItem>
            <TimelineItem>
              <div class="font-medium">开发阶段</div>
              <div class="text-sm text-opacity-70">2023-02-15</div>
            </TimelineItem>
            <TimelineItem>
              <div class="font-medium">测试阶段</div>
              <div class="text-sm text-opacity-70">2023-03-20</div>
            </TimelineItem>
            <TimelineItem>
              <div class="font-medium">发布阶段</div>
              <div class="text-sm text-opacity-70">2023-04-10</div>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </section>

    <!-- 自定义点和线 -->
    <section class="example-section">
      <h2 class="example-title">自定义点和线</h2>
      <div class="example-container">
        <Timeline>
          <TimelineItem dot-color="#10b981">
            <template #dot>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </template>
            <div class="font-medium">任务完成</div>
            <div class="text-sm text-opacity-70">2023-01-01</div>
          </TimelineItem>
          <TimelineItem dot-color="#f59e0b" line-color="#f59e0b">
            <template #dot>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </template>
            <div class="font-medium">进行中</div>
            <div class="text-sm text-opacity-70">2023-02-15</div>
          </TimelineItem>
          <TimelineItem dot-color="#ef4444" line-color="#ef4444">
            <template #dot>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </template>
            <div class="font-medium">已取消</div>
            <div class="text-sm text-opacity-70">2023-03-20</div>
          </TimelineItem>
        </Timeline>
      </div>
    </section>

    <!-- 反向内容 -->
    <section class="example-section">
      <h2 class="example-title">反向内容</h2>
      <div class="example-container">
        <Timeline align="alternate">
          <TimelineItem>
            <template #opposite>
              <div class="font-bold text-blue-500 dark:text-blue-400">
                阶段 1
              </div>
            </template>
            <div class="font-medium">创建项目</div>
            <div class="text-sm text-opacity-70">2023-01-01</div>
          </TimelineItem>
          <TimelineItem>
            <template #opposite>
              <div class="font-bold text-green-500 dark:text-green-400">
                阶段 2
              </div>
            </template>
            <div class="font-medium">开发阶段</div>
            <div class="text-sm text-opacity-70">2023-02-15</div>
          </TimelineItem>
          <TimelineItem>
            <template #opposite>
              <div class="font-bold text-amber-500 dark:text-amber-400">
                阶段 3
              </div>
            </template>
            <div class="font-medium">测试阶段</div>
            <div class="text-sm text-opacity-70">2023-03-20</div>
          </TimelineItem>
        </Timeline>
      </div>
    </section>

    <!-- 自定义样式 -->
    <section class="example-section">
      <h2 class="example-title">自定义样式</h2>
      <div class="example-container">
        <Timeline
          :pt="{
            root: isDarkMode
              ? 'border-l-2 border-blue-400 pl-6 ml-6'
              : 'border-l-2 border-blue-500 pl-6 ml-6',
          }"
        >
          <TimelineItem
            :pt="{
              dot: isDarkMode
                ? 'bg-blue-400 border-gray-800'
                : 'bg-blue-500 border-white',
              line: isDarkMode ? 'bg-blue-400' : 'bg-blue-500',
            }"
          >
            <div class="font-medium">创建项目</div>
            <div class="text-sm text-opacity-70">2023-01-01</div>
          </TimelineItem>
          <TimelineItem
            :pt="{
              dot: isDarkMode
                ? 'bg-green-400 border-gray-800'
                : 'bg-green-500 border-white',
              line: isDarkMode ? 'bg-green-400' : 'bg-green-500',
            }"
          >
            <div class="font-medium">开发阶段</div>
            <div class="text-sm text-opacity-70">2023-02-15</div>
          </TimelineItem>
          <TimelineItem
            :pt="{
              dot: isDarkMode
                ? 'bg-amber-400 border-gray-800'
                : 'bg-amber-500 border-white',
              line: isDarkMode ? 'bg-amber-400' : 'bg-amber-500',
            }"
          >
            <div class="font-medium">测试阶段</div>
            <div class="text-sm text-opacity-70">2023-03-20</div>
          </TimelineItem>
        </Timeline>
      </div>
    </section>

    <!-- 无样式模式 -->
    <section class="example-section">
      <h2 class="example-title">无样式模式</h2>
      <div class="example-container">
        <Timeline
          unstyled
          :pt="{
            root: isDarkMode
              ? 'relative border-l-2 border-gray-600 ml-4 pl-8'
              : 'relative border-l-2 border-gray-300 ml-4 pl-8',
          }"
        >
          <TimelineItem
            unstyled
            :pt="{
              root: 'mb-8 relative',
              dot: isDarkMode
                ? 'absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-gray-800 border-4 border-blue-400'
                : 'absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-blue-500',
              content: isDarkMode
                ? 'bg-gray-800 p-4 rounded-md shadow-md border border-gray-700'
                : 'bg-white p-4 rounded-md shadow-md border border-gray-100',
              line: isDarkMode
                ? 'absolute top-6 bottom-0 -left-9 w-0.5 bg-gray-600'
                : 'absolute top-6 bottom-0 -left-9 w-0.5 bg-gray-300',
            }"
          >
            <div class="font-medium">创建项目</div>
            <div class="text-sm text-opacity-70">2023-01-01</div>
          </TimelineItem>
          <TimelineItem
            unstyled
            :pt="{
              root: 'mb-8 relative',
              dot: isDarkMode
                ? 'absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-gray-800 border-4 border-green-400'
                : 'absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-green-500',
              content: isDarkMode
                ? 'bg-gray-800 p-4 rounded-md shadow-md border border-gray-700'
                : 'bg-white p-4 rounded-md shadow-md border border-gray-100',
              line: isDarkMode
                ? 'absolute top-6 bottom-0 -left-9 w-0.5 bg-gray-600'
                : 'absolute top-6 bottom-0 -left-9 w-0.5 bg-gray-300',
            }"
          >
            <div class="font-medium">开发阶段</div>
            <div class="text-sm text-opacity-70">2023-02-15</div>
          </TimelineItem>
          <TimelineItem
            unstyled
            :pt="{
              root: 'mb-8 relative',
              dot: isDarkMode
                ? 'absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-gray-800 border-4 border-amber-400'
                : 'absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-amber-500',
              content: isDarkMode
                ? 'bg-gray-800 p-4 rounded-md shadow-md border border-gray-700'
                : 'bg-white p-4 rounded-md shadow-md border border-gray-100',
            }"
          >
            <div class="font-medium">测试阶段</div>
            <div class="text-sm text-opacity-70">2023-03-20</div>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  </div>
</template>

<style scoped>
:root {
  /* 基础颜色 */
  --example-primary: #4f46e5;
  --example-success: #10b981;
  --example-warning: #f59e0b;
  --example-danger: #ef4444;

  /* 文本颜色 */
  --example-text-primary: #111827;
  --example-text-secondary: #4b5563;
  --example-text-tertiary: #6b7280;

  /* 背景颜色 */
  --example-bg-primary: #ffffff;
  --example-bg-secondary: #f9fafb;

  /* 边框和阴影 */
  --example-border-color: #e5e7eb;
  --example-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --example-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.dark {
  /* 暗黑模式颜色覆盖 */
  --example-text-primary: #f9fafb;
  --example-text-secondary: #e5e7eb;
  --example-text-tertiary: #9ca3af;

  --example-bg-primary: #111827;
  --example-bg-secondary: #1f2937;

  --example-border-color: #374151;
  --example-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --example-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
}

.space-y-12 {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: var(--example-bg-secondary);
  min-height: 100vh;
}

.example-section {
  position: relative;
  padding: 2rem;
  margin-bottom: 3rem;
  background-color: var(--example-bg-primary);
  border-radius: 1rem;
  border: 1px solid var(--example-border-color);
  box-shadow: var(--example-shadow-md);
  transition: all 0.3s ease;
}

.example-section:last-child {
  margin-bottom: 0;
}

.example-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--example-text-primary);
  letter-spacing: -0.025em;
  position: relative;
  padding-bottom: 0.75rem;
}

.example-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 3rem;
  height: 2px;
  background-color: var(--example-primary);
  border-radius: 2px;
}

.example-container {
  padding: 1.5rem;
  background-color: var(--example-bg-secondary);
  border-radius: 0.75rem;
  border: 1px solid var(--example-border-color);
  box-shadow: var(--example-shadow-sm);
  transition: all 0.3s ease;
}

.example-container:hover {
  box-shadow: var(--example-shadow-md);
  transform: translateY(-2px);
}

/* 网格布局优化 */
.grid {
  display: grid;
  gap: 1.5rem;
}

.grid-cols-1 {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .md\\:grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 文本样式优化 */
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-md {
  font-size: 1rem;
  line-height: 1.5rem;
}

.font-medium {
  font-weight: 500;
  color: var(--example-text-primary);
}

.font-bold {
  font-weight: 700;
}

.text-opacity-70 {
  color: var(--example-text-tertiary);
}

/* 自定义颜色类 */
.text-blue-500 {
  color: #3b82f6;
}

.text-green-500 {
  color: #10b981;
}

.text-amber-500 {
  color: #f59e0b;
}

.dark .text-blue-400 {
  color: #60a5fa;
}

.dark .text-green-400 {
  color: #34d399;
}

.dark .text-amber-400 {
  color: #fbbf24;
}

/* 间距工具类 */
.mb-4 {
  margin-bottom: 1rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

/* 响应式布局调整 */
@media (max-width: 768px) {
  .space-y-12 {
    padding: 1rem;
  }

  .example-section {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }

  .example-title {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }

  .example-container {
    padding: 1rem;
  }

  .grid {
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .space-y-12 {
    padding: 0.75rem;
  }

  .example-section {
    padding: 1rem;
    margin-bottom: 1.5rem;
    border-radius: 0.75rem;
  }

  .example-container {
    padding: 0.75rem;
  }
}
</style>
`,T=JSON.parse('{"title":"Timeline 时间轴","description":"","frontmatter":{},"headers":[],"relativePath":"components/timeline/index.md","filePath":"components/timeline/index.md"}'),D={name:"components/timeline/index.md"},w=Object.assign(D,{setup(q){const l=r(!0),a=g();return y(async()=>{a.value=(await o(async()=>{const{default:h}=await import("./chunks/index.oyyoFjKP.js");return{default:h}},__vite__mapDeps([0,1,2]))).default}),(h,s)=>{const E=k("Link"),d=k("ClientOnly");return F(),m("div",null,[s[1]||(s[1]=n("h1",{id:"timeline-时间轴",tabindex:"-1"},[u("Timeline 时间轴 "),n("a",{class:"header-anchor",href:"#timeline-时间轴","aria-label":'Permalink to "Timeline 时间轴"'},"​")],-1)),s[2]||(s[2]=n("p",null,"时间轴组件用于垂直展示时间流或事件流信息，帮助用户了解事件发生的时间顺序和进展过程。",-1)),i(E,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-timeline-%E6%97%B6%E9%97%B4%E8%BD%B4--basic"}),s[3]||(s[3]=e("",3)),c(i(t(C),null,null,512),[[v,l.value]]),i(d,null,{default:p(()=>[i(t(B),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{l.value=!1}),vueCode:t(x)},b({_:2},[a.value?{name:"vue",fn:p(()=>[i(t(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[4]||(s[4]=e("",28))])}}});export{T as __pageData,w as default};
