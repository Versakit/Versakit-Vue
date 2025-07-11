const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.B_71mkRe.js","assets/chunks/theme.Coj6KSFq.js","assets/chunks/framework.DLuSxX4C.js"])))=>i.map(i=>d[i]);
import{p as r,D as g,v as y,al as o,C as k,c as F,o as m,j as n,G as i,ak as p,a0 as c,a as u,a3 as C,k as a,w as e,am as B}from"./chunks/framework.DLuSxX4C.js";import{O as v,E as q}from"./chunks/index.Bhh2hZnL.js";const b=`<script setup lang="ts">
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
  <div class="timeline-examples">
    <!-- 基础用法 -->
    <section class="example-section">
      <h2 class="example-title">基础用法</h2>
      <div class="example-container">
        <Timeline>
          <TimelineItem :position="0" :isLast="false">
            <div class="timeline-title">创建项目</div>
            <div class="timeline-date">2023-01-01</div>
            <div class="timeline-content">项目初始化完成</div>
          </TimelineItem>
          <TimelineItem :position="1" :isLast="false">
            <div class="timeline-title">开发阶段</div>
            <div class="timeline-date">2023-02-15</div>
            <div class="timeline-content">完成核心功能开发</div>
          </TimelineItem>
          <TimelineItem :position="2" :isLast="true">
            <div class="timeline-title">测试阶段</div>
            <div class="timeline-date">2023-03-20</div>
            <div class="timeline-content">完成所有测试用例</div>
          </TimelineItem>
        </Timeline>
      </div>
    </section>

    <!-- 对齐方式 -->
    <section class="example-section">
      <h2 class="example-title">对齐方式</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="example-card">
          <h3 class="example-subtitle">左侧对齐</h3>
          <Timeline align="left">
            <TimelineItem :position="0" :isLast="false">
              <div class="timeline-title">创建项目</div>
              <div class="timeline-date">2023-01-01</div>
            </TimelineItem>
            <TimelineItem :position="1" :isLast="false">
              <div class="timeline-title">开发阶段</div>
              <div class="timeline-date">2023-02-15</div>
            </TimelineItem>
            <TimelineItem :position="2" :isLast="true">
              <div class="timeline-title">测试阶段</div>
              <div class="timeline-date">2023-03-20</div>
            </TimelineItem>
          </Timeline>
        </div>

        <div class="example-card">
          <h3 class="example-subtitle">右侧对齐</h3>
          <Timeline align="right">
            <TimelineItem :position="0" :isLast="false">
              <div class="timeline-title">创建项目</div>
              <div class="timeline-date">2023-01-01</div>
            </TimelineItem>
            <TimelineItem :position="1" :isLast="false">
              <div class="timeline-title">开发阶段</div>
              <div class="timeline-date">2023-02-15</div>
            </TimelineItem>
            <TimelineItem :position="2" :isLast="true">
              <div class="timeline-title">测试阶段</div>
              <div class="timeline-date">2023-03-20</div>
            </TimelineItem>
          </Timeline>
        </div>

        <div class="example-card">
          <h3 class="example-subtitle">交替对齐</h3>
          <Timeline align="alternate">
            <TimelineItem :position="0" :isLast="false">
              <div class="timeline-title">创建项目</div>
              <div class="timeline-date">2023-01-01</div>
            </TimelineItem>
            <TimelineItem :position="1" :isLast="false">
              <div class="timeline-title">开发阶段</div>
              <div class="timeline-date">2023-02-15</div>
            </TimelineItem>
            <TimelineItem :position="2" :isLast="false">
              <div class="timeline-title">测试阶段</div>
              <div class="timeline-date">2023-03-20</div>
            </TimelineItem>
            <TimelineItem :position="3" :isLast="true">
              <div class="timeline-title">发布阶段</div>
              <div class="timeline-date">2023-04-10</div>
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
          <TimelineItem
            :position="0"
            :isLast="false"
            dot-color="var(--example-success)"
          >
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
                class="icon-check"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </template>
            <div class="timeline-title">任务完成</div>
            <div class="timeline-date">2023-01-01</div>
          </TimelineItem>
          <TimelineItem
            :position="1"
            :isLast="false"
            dot-color="var(--example-warning)"
            line-color="var(--example-warning)"
          >
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
                class="icon-alert"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </template>
            <div class="timeline-title">进行中</div>
            <div class="timeline-date">2023-02-15</div>
          </TimelineItem>
          <TimelineItem
            :position="2"
            :isLast="true"
            dot-color="var(--example-danger)"
            line-color="var(--example-danger)"
          >
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
                class="icon-cancel"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </template>
            <div class="timeline-title">已取消</div>
            <div class="timeline-date">2023-03-20</div>
          </TimelineItem>
        </Timeline>
      </div>
    </section>

    <!-- 反向内容 -->
    <section class="example-section">
      <h2 class="example-title">反向内容</h2>
      <div class="example-container">
        <Timeline align="alternate">
          <TimelineItem :position="0" :isLast="false">
            <template #opposite>
              <div class="timeline-tag timeline-tag-blue">阶段 1</div>
            </template>
            <div class="timeline-title">创建项目</div>
            <div class="timeline-date">2023-01-01</div>
          </TimelineItem>
          <TimelineItem :position="1" :isLast="false">
            <template #opposite>
              <div class="timeline-tag timeline-tag-green">阶段 2</div>
            </template>
            <div class="timeline-title">开发阶段</div>
            <div class="timeline-date">2023-02-15</div>
          </TimelineItem>
          <TimelineItem :position="2" :isLast="true">
            <template #opposite>
              <div class="timeline-tag timeline-tag-amber">阶段 3</div>
            </template>
            <div class="timeline-title">测试阶段</div>
            <div class="timeline-date">2023-03-20</div>
          </TimelineItem>
        </Timeline>
      </div>
    </section>

    <!-- 自定义样式 -->
    <section class="example-section">
      <h2 class="example-title">自定义样式</h2>
      <div class="example-container custom-timeline">
        <Timeline
          :pt="{
            root: isDarkMode
              ? 'border-l-2 border-blue-400 pl-6 ml-6'
              : 'border-l-2 border-blue-500 pl-6 ml-6',
          }"
        >
          <TimelineItem
            :position="0"
            :isLast="false"
            :pt="{
              dot: isDarkMode
                ? 'bg-blue-400 border-gray-800'
                : 'bg-blue-500 border-white',
              connector: isDarkMode ? 'bg-blue-400' : 'bg-blue-500',
            }"
          >
            <div class="timeline-title">创建项目</div>
            <div class="timeline-date">2023-01-01</div>
          </TimelineItem>
          <TimelineItem
            :position="1"
            :isLast="false"
            :pt="{
              dot: isDarkMode
                ? 'bg-green-400 border-gray-800'
                : 'bg-green-500 border-white',
              connector: isDarkMode ? 'bg-green-400' : 'bg-green-500',
            }"
          >
            <div class="timeline-title">开发阶段</div>
            <div class="timeline-date">2023-02-15</div>
          </TimelineItem>
          <TimelineItem
            :position="2"
            :isLast="true"
            :pt="{
              dot: isDarkMode
                ? 'bg-amber-400 border-gray-800'
                : 'bg-amber-500 border-white',
              connector: isDarkMode ? 'bg-amber-400' : 'bg-amber-500',
            }"
          >
            <div class="timeline-title">测试阶段</div>
            <div class="timeline-date">2023-03-20</div>
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
            :position="0"
            :isLast="false"
            unstyled
            :pt="{
              root: 'mb-8 relative',
              dot: isDarkMode
                ? 'absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-gray-800 border-4 border-blue-400'
                : 'absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-blue-500',
              content: isDarkMode
                ? 'bg-gray-800 p-4 rounded-md shadow-md border border-gray-700'
                : 'bg-white p-4 rounded-md shadow-md border border-gray-100',
              connector: isDarkMode
                ? 'absolute top-6 bottom-0 -left-9 w-0.5 bg-gray-600'
                : 'absolute top-6 bottom-0 -left-9 w-0.5 bg-gray-300',
            }"
          >
            <div class="timeline-title">创建项目</div>
            <div class="timeline-date">2023-01-01</div>
          </TimelineItem>
          <TimelineItem
            :position="1"
            :isLast="false"
            unstyled
            :pt="{
              root: 'mb-8 relative',
              dot: isDarkMode
                ? 'absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-gray-800 border-4 border-green-400'
                : 'absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-green-500',
              content: isDarkMode
                ? 'bg-gray-800 p-4 rounded-md shadow-md border border-gray-700'
                : 'bg-white p-4 rounded-md shadow-md border border-gray-100',
              connector: isDarkMode
                ? 'absolute top-6 bottom-0 -left-9 w-0.5 bg-gray-600'
                : 'absolute top-6 bottom-0 -left-9 w-0.5 bg-gray-300',
            }"
          >
            <div class="timeline-title">开发阶段</div>
            <div class="timeline-date">2023-02-15</div>
          </TimelineItem>
          <TimelineItem
            :position="2"
            :isLast="true"
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
            <div class="timeline-title">测试阶段</div>
            <div class="timeline-date">2023-03-20</div>
          </TimelineItem>
        </Timeline>
      </div>
    </section>

    <!-- 水平方向 -->
    <section class="example-section">
      <h2 class="example-title">水平方向</h2>
      <div class="example-container">
        <Timeline orientation="horizontal">
          <TimelineItem :position="0" :isLast="false">
            <div class="timeline-title">创建项目</div>
            <div class="timeline-date">2023-01-01</div>
          </TimelineItem>
          <TimelineItem :position="1" :isLast="false">
            <div class="timeline-title">开发阶段</div>
            <div class="timeline-date">2023-02-15</div>
          </TimelineItem>
          <TimelineItem :position="2" :isLast="false">
            <div class="timeline-title">测试阶段</div>
            <div class="timeline-date">2023-03-20</div>
          </TimelineItem>
          <TimelineItem :position="3" :isLast="true">
            <div class="timeline-title">发布阶段</div>
            <div class="timeline-date">2023-04-10</div>
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
  --example-shadow-lg:
    0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  /* 圆角 */
  --example-radius-sm: 0.375rem;
  --example-radius-md: 0.75rem;
  --example-radius-lg: 1rem;

  /* 过渡效果 */
  --example-transition: all 0.3s ease;
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
  --example-shadow-lg:
    0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
}

.timeline-examples {
  padding: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: var(--example-bg-secondary);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.example-section {
  position: relative;
  padding: 2.5rem;
  background-color: var(--example-bg-primary);
  border-radius: var(--example-radius-lg);
  border: 1px solid var(--example-border-color);
  box-shadow: var(--example-shadow-md);
  transition: var(--example-transition);
}

.example-section:hover {
  box-shadow: var(--example-shadow-lg);
  transform: translateY(-2px);
}

.example-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--example-text-primary);
  letter-spacing: -0.025em;
  position: relative;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--example-border-color);
}

.example-title::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 4rem;
  height: 2px;
  background-color: var(--example-primary);
  border-radius: 2px;
}

.example-subtitle {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: var(--example-text-primary);
}

.example-container {
  padding: 1.75rem;
  background-color: var(--example-bg-secondary);
  border-radius: var(--example-radius-md);
  border: 1px solid var(--example-border-color);
  box-shadow: var(--example-shadow-sm);
  transition: var(--example-transition);
}

.example-card {
  padding: 1.75rem;
  background-color: var(--example-bg-secondary);
  border-radius: var(--example-radius-md);
  border: 1px solid var(--example-border-color);
  box-shadow: var(--example-shadow-sm);
  transition: var(--example-transition);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.example-card:hover,
.example-container:hover {
  box-shadow: var(--example-shadow-md);
  transform: translateY(-3px);
}

/* 网格布局优化 */
.grid {
  display: grid;
  gap: 1.75rem;
}

.grid-cols-1 {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .md\\:grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 时间线项样式 */
.timeline-title {
  font-weight: 600;
  font-size: 1rem;
  color: var(--example-text-primary);
  margin-bottom: 0.25rem;
}

.timeline-date {
  font-size: 0.875rem;
  color: var(--example-text-tertiary);
  margin-bottom: 0.5rem;
}

.timeline-content {
  color: var(--example-text-secondary);
  margin-top: 0.5rem;
}

.timeline-tag {
  display: inline-block;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: var(--example-radius-sm);
  margin-bottom: 0.5rem;
}

.timeline-tag-blue {
  background-color: rgba(59, 130, 246, 0.15);
  color: #3b82f6;
}

.timeline-tag-green {
  background-color: rgba(16, 185, 129, 0.15);
  color: #10b981;
}

.timeline-tag-amber {
  background-color: rgba(245, 158, 11, 0.15);
  color: #f59e0b;
}

.dark .timeline-tag-blue {
  background-color: rgba(96, 165, 250, 0.15);
  color: #60a5fa;
}

.dark .timeline-tag-green {
  background-color: rgba(52, 211, 153, 0.15);
  color: #34d399;
}

.dark .timeline-tag-amber {
  background-color: rgba(251, 191, 36, 0.15);
  color: #fbbf24;
}

/* 自定义图标 */
.icon-check,
.icon-alert,
.icon-cancel {
  stroke-width: 2.5;
}

.custom-timeline :deep(.timeline-dot) {
  transform: scale(1.2);
  transition: var(--example-transition);
}

.custom-timeline :deep(.timeline-item:hover .timeline-dot) {
  transform: scale(1.4);
}

/* 响应式布局调整 */
@media (max-width: 1024px) {
  .timeline-examples {
    padding: 2rem;
    gap: 2.5rem;
  }

  .example-section {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .timeline-examples {
    padding: 1.5rem;
    gap: 2rem;
  }

  .example-section {
    padding: 1.75rem;
  }

  .example-title {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }

  .example-container,
  .example-card {
    padding: 1.25rem;
  }

  .grid {
    gap: 1.25rem;
  }
}

@media (max-width: 480px) {
  .timeline-examples {
    padding: 1rem;
    gap: 1.5rem;
  }

  .example-section {
    padding: 1.25rem;
    border-radius: var(--example-radius-md);
  }

  .example-container,
  .example-card {
    padding: 1rem;
    border-radius: var(--example-radius-sm);
  }

  .example-title {
    font-size: 1.125rem;
    margin-bottom: 1.25rem;
  }
}
</style>
`,T=JSON.parse('{"title":"Timeline 时间轴","description":"","frontmatter":{},"headers":[],"relativePath":"components/timeline/index.md","filePath":"components/timeline/index.md"}'),x={name:"components/timeline/index.md"},I=Object.assign(x,{setup(D){const l=r(!0),t=g();return y(async()=>{t.value=(await o(async()=>{const{default:h}=await import("./chunks/index.B_71mkRe.js");return{default:h}},__vite__mapDeps([0,1,2]))).default}),(h,s)=>{const E=k("Link"),d=k("ClientOnly");return m(),F("div",null,[s[1]||(s[1]=n("h1",{id:"timeline-时间轴",tabindex:"-1"},[u("Timeline 时间轴 "),n("a",{class:"header-anchor",href:"#timeline-时间轴","aria-label":'Permalink to "Timeline 时间轴"'},"​")],-1)),s[2]||(s[2]=n("p",null,"时间轴组件用于垂直展示时间流或事件流信息，帮助用户了解事件发生的时间顺序和进展过程。",-1)),i(E,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-timeline-%E6%97%B6%E9%97%B4%E8%BD%B4--basic"}),s[3]||(s[3]=p("",3)),c(i(a(v),null,null,512),[[C,l.value]]),i(d,null,{default:e(()=>[i(a(q),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{l.value=!1}),vueCode:a(b)},B({_:2},[t.value?{name:"vue",fn:e(()=>[i(a(t))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[4]||(s[4]=p("",28))])}}});export{T as __pageData,I as default};
