const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.ByfAng8q.js","assets/chunks/theme.DAOLVbAS.js","assets/chunks/framework.DLuSxX4C.js"])))=>i.map(i=>d[i]);
import{p as r,D as g,v as y,al as o,C as e,c as m,o as c,j as n,G as i,ak as k,a0 as F,a as u,a3 as v,k as t,w as p,am as b}from"./chunks/framework.DLuSxX4C.js";import{O as C,E as B}from"./chunks/index.Bhh2hZnL.js";const x=`<script setup lang="ts">
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
          <TimelineItem>
            <div class="timeline-title">创建项目</div>
            <div class="timeline-date">2023-01-01</div>
            <div class="timeline-content">项目初始化完成</div>
          </TimelineItem>
          <TimelineItem>
            <div class="timeline-title">开发阶段</div>
            <div class="timeline-date">2023-02-15</div>
            <div class="timeline-content">完成核心功能开发</div>
          </TimelineItem>
          <TimelineItem>
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
            <TimelineItem>
              <div class="timeline-title">创建项目</div>
              <div class="timeline-date">2023-01-01</div>
            </TimelineItem>
            <TimelineItem>
              <div class="timeline-title">开发阶段</div>
              <div class="timeline-date">2023-02-15</div>
            </TimelineItem>
            <TimelineItem>
              <div class="timeline-title">测试阶段</div>
              <div class="timeline-date">2023-03-20</div>
            </TimelineItem>
          </Timeline>
        </div>

        <div class="example-card">
          <h3 class="example-subtitle">右侧对齐</h3>
          <Timeline align="right">
            <TimelineItem>
              <div class="timeline-title">创建项目</div>
              <div class="timeline-date">2023-01-01</div>
            </TimelineItem>
            <TimelineItem>
              <div class="timeline-title">开发阶段</div>
              <div class="timeline-date">2023-02-15</div>
            </TimelineItem>
            <TimelineItem>
              <div class="timeline-title">测试阶段</div>
              <div class="timeline-date">2023-03-20</div>
            </TimelineItem>
          </Timeline>
        </div>

        <div class="example-card">
          <h3 class="example-subtitle">交替对齐</h3>
          <Timeline align="alternate">
            <TimelineItem>
              <div class="timeline-title">创建项目</div>
              <div class="timeline-date">2023-01-01</div>
            </TimelineItem>
            <TimelineItem>
              <div class="timeline-title">开发阶段</div>
              <div class="timeline-date">2023-02-15</div>
            </TimelineItem>
            <TimelineItem>
              <div class="timeline-title">测试阶段</div>
              <div class="timeline-date">2023-03-20</div>
            </TimelineItem>
            <TimelineItem>
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
          <TimelineItem dot-color="var(--example-success)">
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
          <TimelineItem>
            <template #opposite>
              <div class="timeline-tag timeline-tag-blue">阶段 1</div>
            </template>
            <div class="timeline-title">创建项目</div>
            <div class="timeline-date">2023-01-01</div>
          </TimelineItem>
          <TimelineItem>
            <template #opposite>
              <div class="timeline-tag timeline-tag-green">阶段 2</div>
            </template>
            <div class="timeline-title">开发阶段</div>
            <div class="timeline-date">2023-02-15</div>
          </TimelineItem>
          <TimelineItem>
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
            :pt="{
              dot: isDarkMode
                ? 'bg-blue-400 border-gray-800'
                : 'bg-blue-500 border-white',
              line: isDarkMode ? 'bg-blue-400' : 'bg-blue-500',
            }"
          >
            <div class="timeline-title">创建项目</div>
            <div class="timeline-date">2023-01-01</div>
          </TimelineItem>
          <TimelineItem
            :pt="{
              dot: isDarkMode
                ? 'bg-green-400 border-gray-800'
                : 'bg-green-500 border-white',
              line: isDarkMode ? 'bg-green-400' : 'bg-green-500',
            }"
          >
            <div class="timeline-title">开发阶段</div>
            <div class="timeline-date">2023-02-15</div>
          </TimelineItem>
          <TimelineItem
            :pt="{
              dot: isDarkMode
                ? 'bg-amber-400 border-gray-800'
                : 'bg-amber-500 border-white',
              line: isDarkMode ? 'bg-amber-400' : 'bg-amber-500',
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
            <div class="timeline-title">创建项目</div>
            <div class="timeline-date">2023-01-01</div>
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
            <div class="timeline-title">开发阶段</div>
            <div class="timeline-date">2023-02-15</div>
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
            <div class="timeline-title">测试阶段</div>
            <div class="timeline-date">2023-03-20</div>
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
`,T=JSON.parse('{"title":"Timeline 时间轴","description":"","frontmatter":{},"headers":[],"relativePath":"components/timeline/index.md","filePath":"components/timeline/index.md"}'),D={name:"components/timeline/index.md"},w=Object.assign(D,{setup(q){const l=r(!0),a=g();return y(async()=>{a.value=(await o(async()=>{const{default:h}=await import("./chunks/index.ByfAng8q.js");return{default:h}},__vite__mapDeps([0,1,2]))).default}),(h,s)=>{const E=e("Link"),d=e("ClientOnly");return c(),m("div",null,[s[1]||(s[1]=n("h1",{id:"timeline-时间轴",tabindex:"-1"},[u("Timeline 时间轴 "),n("a",{class:"header-anchor",href:"#timeline-时间轴","aria-label":'Permalink to "Timeline 时间轴"'},"​")],-1)),s[2]||(s[2]=n("p",null,"时间轴组件用于垂直展示时间流或事件流信息，帮助用户了解事件发生的时间顺序和进展过程。",-1)),i(E,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-timeline-%E6%97%B6%E9%97%B4%E8%BD%B4--basic"}),s[3]||(s[3]=k('<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Timeline, TimelineItem } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@versakit/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>',3)),F(i(t(C),null,null,512),[[v,l.value]]),i(d,null,{default:p(()=>[i(t(B),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{l.value=!1}),vueCode:t(x)},b({_:2},[a.value?{name:"vue",fn:p(()=>[i(t(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[4]||(s[4]=k(`<h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>基础的时间轴组件，默认左侧对齐。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Timeline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;创建项目&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-01-01&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;项目初始化完成&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;开发阶段&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-02-15&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;完成核心功能开发&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;测试阶段&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-03-20&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;完成所有测试用例&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Timeline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="对齐方式" tabindex="-1">对齐方式 <a class="header-anchor" href="#对齐方式" aria-label="Permalink to &quot;对齐方式&quot;">​</a></h2><p>通过 <code>align</code> 属性设置时间轴的对齐方式，支持 <code>left</code>、<code>right</code> 和 <code>alternate</code> 三种方式。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	&lt;!-- 左侧对齐 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Timeline</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;"> align</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;left&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;创建项目&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-01-01&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;开发阶段&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-02-15&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;测试阶段&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-03-20&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Timeline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	&lt;!-- 右侧对齐 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Timeline</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;"> align</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;right&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;创建项目&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-01-01&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;开发阶段&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-02-15&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;测试阶段&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-03-20&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Timeline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	&lt;!-- 交替对齐 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Timeline</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;"> align</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;alternate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;创建项目&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-01-01&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;开发阶段&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-02-15&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;测试阶段&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-03-20&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;发布阶段&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-04-10&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Timeline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="自定义点和线" tabindex="-1">自定义点和线 <a class="header-anchor" href="#自定义点和线" aria-label="Permalink to &quot;自定义点和线&quot;">​</a></h2><p>通过 <code>dot-color</code> 和 <code>line-color</code> 属性自定义时间轴点和线的颜色，也可以使用 <code>dot</code> 插槽自定义点的内容。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Timeline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dot-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#10b981&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					xmlns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://www.w3.org/2000/svg&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;16&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;16&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					viewBox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0 0 24 24&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;none&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					stroke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;currentColor&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					stroke-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					stroke-linecap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;round&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					stroke-linejoin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;round&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">path</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;M22 11.08V12a10 10 0 1 1-5.93-9.14&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">polyline</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> points</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;22 4 12 14.01 9 11.01&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">polyline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;任务完成&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-01-01&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dot-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#f59e0b&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> line-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#f59e0b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					xmlns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://www.w3.org/2000/svg&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;16&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;16&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					viewBox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0 0 24 24&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;none&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					stroke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;currentColor&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					stroke-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					stroke-linecap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;round&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					stroke-linejoin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;round&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">circle</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;12&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;12&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> r</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;10&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">circle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">line</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;12&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> y1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;8&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;12&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> y2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;12&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">line</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">line</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;12&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> y1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;16&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;12.01&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> y2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;16&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">line</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;进行中&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-02-15&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dot-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#ef4444&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> line-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#ef4444&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					xmlns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://www.w3.org/2000/svg&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;16&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;16&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					viewBox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0 0 24 24&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;none&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					stroke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;currentColor&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					stroke-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					stroke-linecap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;round&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">					stroke-linejoin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;round&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">circle</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;12&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;12&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> r</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;10&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">circle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">line</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;15&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> y1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;9&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;9&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> y2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;15&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">line</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">line</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;9&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> y1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;9&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;15&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> y2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;15&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">line</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;已取消&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-03-20&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Timeline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="反向内容" tabindex="-1">反向内容 <a class="header-anchor" href="#反向内容" aria-label="Permalink to &quot;反向内容&quot;">​</a></h2><p>在交替布局中，可以使用 <code>opposite</code> 插槽添加反向内容。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Timeline</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;"> align</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;alternate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">opposite</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-bold text-blue-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;阶段 1&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;创建项目&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-01-01&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">opposite</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-bold text-green-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;阶段 2&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;开发阶段&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-02-15&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">opposite</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-bold text-amber-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;阶段 3&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;测试阶段&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-03-20&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Timeline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="自定义样式" tabindex="-1">自定义样式 <a class="header-anchor" href="#自定义样式" aria-label="Permalink to &quot;自定义样式&quot;">​</a></h2><p>使用 <code>pt</code> 属性自定义组件样式。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Timeline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ root: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;border-l-2 border-blue-500 pl-6 ml-6&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ dot: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bg-blue-500 border-white&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, line: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bg-blue-500&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;创建项目&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-01-01&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ dot: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bg-green-500 border-white&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, line: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bg-green-500&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;开发阶段&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-02-15&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ dot: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bg-amber-500 border-white&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, line: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bg-amber-500&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;测试阶段&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-03-20&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Timeline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="无样式模式" tabindex="-1">无样式模式 <a class="header-anchor" href="#无样式模式" aria-label="Permalink to &quot;无样式模式&quot;">​</a></h2><p>通过 <code>unstyled</code> 属性移除默认样式，完全自定义组件外观。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Timeline</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		unstyled</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ root: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;relative border-l-2 border-gray-300 ml-4 pl-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">			unstyled</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				root: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mb-8 relative&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				dot: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-blue-500&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bg-white p-4 rounded-md shadow-md border border-gray-100&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				line: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;absolute top-6 bottom-0 -left-9 w-0.5 bg-gray-300&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;创建项目&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-01-01&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">			unstyled</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				root: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mb-8 relative&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				dot: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-green-500&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bg-white p-4 rounded-md shadow-md border border-gray-100&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				line: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;absolute top-6 bottom-0 -left-9 w-0.5 bg-gray-300&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;开发阶段&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-02-15&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">			unstyled</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				root: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mb-8 relative&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				dot: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-amber-500&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bg-white p-4 rounded-md shadow-md border border-gray-100&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;测试阶段&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-sm text-gray-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2023-03-20&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TimelineItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Timeline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="timeline-props" tabindex="-1">Timeline Props <a class="header-anchor" href="#timeline-props" aria-label="Permalink to &quot;Timeline Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>align</td><td>&#39;left&#39; | &#39;right&#39; | &#39;alternate&#39;</td><td>&#39;left&#39;</td><td>时间轴的对齐方式</td></tr><tr><td>unstyled</td><td>boolean</td><td>false</td><td>是否移除默认样式</td></tr><tr><td>pt</td><td>TimelinePT</td><td>-</td><td>传递样式类</td></tr></tbody></table><h3 id="timelineitem-props" tabindex="-1">TimelineItem Props <a class="header-anchor" href="#timelineitem-props" aria-label="Permalink to &quot;TimelineItem Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>dot</td><td>string</td><td>-</td><td>点的自定义内容</td></tr><tr><td>dotColor</td><td>string</td><td>-</td><td>点的颜色</td></tr><tr><td>line</td><td>boolean</td><td>true</td><td>是否显示线</td></tr><tr><td>lineColor</td><td>string</td><td>-</td><td>线的颜色</td></tr><tr><td>position</td><td>&#39;left&#39; | &#39;right&#39;</td><td>-</td><td>强制指定位置</td></tr><tr><td>unstyled</td><td>boolean</td><td>false</td><td>是否移除默认样式</td></tr><tr><td>pt</td><td>TimelineItemPT</td><td>-</td><td>传递样式类</td></tr></tbody></table><h3 id="timelineitem-events" tabindex="-1">TimelineItem Events <a class="header-anchor" href="#timelineitem-events" aria-label="Permalink to &quot;TimelineItem Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>click</td><td>(e: MouseEvent)</td><td>点击事件</td></tr></tbody></table><h3 id="timelineitem-slots" tabindex="-1">TimelineItem Slots <a class="header-anchor" href="#timelineitem-slots" aria-label="Permalink to &quot;TimelineItem Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>-</td><td>默认内容</td></tr><tr><td>dot</td><td>-</td><td>自定义点</td></tr><tr><td>opposite</td><td>-</td><td>反向内容</td></tr></tbody></table><p>&lt;/rewritten_file&gt;</p>`,28))])}}});export{T as __pageData,w as default};
