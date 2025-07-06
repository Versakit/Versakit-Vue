<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MemberPage from './memberPage.vue'
import '@versakit/vue/style'
import { PinInput, Avatar, Badge, Switch, Chip, Alert } from '@versakit/vue'

interface Feature {
  icon: string
  title: string
  description: string
}

interface Stat {
  number: string
  label: string
}

// 组件示例数据
const componentExamples = ref([
  {
    name: 'PinInput',
    description: '验证码输入框，用于接收短信验证码等场景',
    component: 'PinInput',
    props: { length: 4 },
  },
  {
    name: 'Avatar',
    description: '用户头像组件，支持多种尺寸和形状',
    component: 'Avatar',
    props: { src: '/public/logo.svg', alt: 'User Avatar', size: 'lg' },
  },
  {
    name: 'Badge',
    description: '徽标组件，用于显示计数或标记状态',
    component: 'Badge',
    props: { content: 8 },
    children: '徽标',
  },
  {
    name: 'Switch',
    description: '开关组件，用于切换状态',
    component: 'Switch',
  },
  {
    name: 'Chip',
    description: '标签组件，用于标记和分类',
    component: 'Chip',
    props: { selectable: true },
    children: '可选标签',
  },
  {
    name: 'Alert',
    description: '警告提示组件，用于展示重要信息',
    component: 'Alert',
    props: { variant: 'success' },
    children: '这是一条信息提示',
  },
])

const features = ref<Feature[]>([
  {
    icon: '🚀',
    title: '函数驱动',
    description:
      '基于 Composition API 设计的函数式 API，提供灵活的逻辑复用能力',
  },
  {
    icon: '🎨',
    title: '无头组件',
    description:
      '提供纯逻辑组件，让开发者完全掌控 UI 渲染，实现最大的样式自由度',
  },
  {
    icon: '🛠️',
    title: '类型友好',
    description: '使用 TypeScript 构建，提供完整的类型定义，享受一流的开发体验',
  },
  {
    icon: '📦',
    title: '轻量高效',
    description: '无样式依赖，支持按需引入，让您的应用保持轻量快速',
  },
  {
    icon: '☃️',
    title: '国人开发',
    description: '由国人开发，提供完整的中英文文档和后勤支持',
  },
])

// 添加滚动动画
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    },
  )

  // 观察所有需要动画的元素
  document.querySelectorAll('.fade-in').forEach((el) => {
    observer.observe(el)
  })

  // 添加代码复制功能
  const copyBtn = document.querySelector('.copy-btn')
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const code = 'pnpm add @versakit/vue'
      navigator.clipboard.writeText(code).then(() => {
        // 显示复制成功提示
        const button = copyBtn as HTMLButtonElement
        const originalTitle = button.getAttribute('title')
        button.setAttribute('title', '复制成功!')
        button.classList.add('text-green-400')

        setTimeout(() => {
          button.setAttribute('title', originalTitle || '复制到剪贴板')
          button.classList.remove('text-green-400')
        }, 2000)
      })
    })
  }
})
</script>

<template>
  <div class="min-h-screen smooth-scroll">
    <!-- Hero 区域 -->
    <section class="relative py-32 overflow-hidden fade-in">
      <div class="container mx-auto px-4 text-center">
        <!-- 版本徽章 -->
        <div class="flex justify-center mb-8">
          <span
            class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm group transition-all duration-300 hover:border-purple-500/50 hover:scale-105"
          >
            <span class="mr-1">🎉</span>
            <span
              class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent group-hover:text-white transition-colors"
            >
              v0.4
            </span>
          </span>
        </div>

        <!-- Logo -->
        <div class="relative mb-16 inline-block">
          <div
            class="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"
          ></div>

          <img
            src="/logo.svg"
            alt="Versakit Logo"
            class="w-48 h-48 relative animate-float"
          />
        </div>

        <!-- 标题区域 -->
        <div class="space-y-6 max-w-4xl mx-auto">
          <h1
            class="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 animate-gradient"
          >
            Versakit
          </h1>
          <p class="text-2xl text-gray-300 leading-relaxed">
            为 Vue3 打造的
            <span class="text-purple-400 font-semibold">现代化</span>
            组件库
          </p>
          <p class="text-xl text-gray-400 leading-relaxed">
            开源、函数驱动的无头组件库，提供纯逻辑复用能力，让开发者自由掌控UI渲染
          </p>
        </div>

        <!-- 操作按钮 -->
        <div class="mt-12 flex justify-center gap-6">
          <a href="/Versakit-Vue/guide/versakit/" class="action-button primary">
            <span class="button-content">
              <span>开始使用</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- 组件预览区域 - 全新设计 -->
    <section class="py-32 relative components-section fade-in">
      <div class="container mx-auto px-4 relative z-10">
        <!-- 标题区域 -->
        <div class="text-center mb-20 fade-in">
          <h2
            class="text-4xl md:text-5xl font-bold inline-block bg-clip-text text-transparent mb-4 animate-gradient main-title"
          >
            精心设计的组件库
          </h2>

          <div class="mt-6 subtitle max-w-2xl mx-auto">
            直观易用的组件，为您的Vue3应用增添现代感与实用性
          </div>
        </div>

        <!-- 安装代码展示 -->
        <div class="max-w-xl mx-auto mb-20 fade-in">
          <div class="flex items-center justify-center mb-4 subtitle">
            <span class="inline-block mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </span>
            快速安装
          </div>
          <div
            class="relative group overflow-hidden rounded-xl hover:shadow-xl transition-all duration-500"
          >
            <div
              class="relative rounded-xl overflow-hidden border transition-all duration-300 code-container"
            >
              <div
                class="flex items-center justify-between px-4 py-3 border-b code-header"
              >
                <div class="text-sm opacity-70 font-medium">安装命令</div>
              </div>
              <div class="p-4">
                <pre
                  class="language-bash text-sm font-mono overflow-x-auto"
                ><code><span class="text-blue-400">pnpm</span> add <span class="text-green-400">@versakit/vue</span></code></pre>
              </div>
            </div>
          </div>
        </div>

        <!-- 组件预览轮播 - 简化背景效果 -->
        <div class="components-showcase fade-in">
          <!-- 组件卡片容器 -->
          <div class="component-cards-container">
            <div
              v-for="(example, index) in componentExamples"
              :key="example.name"
              class="component-card-wrapper"
            >
              <div
                class="component-card"
                :style="{ '--delay': `${index * 0.1}s` }"
              >
                <!-- 组件卡片内容 -->
                <div class="card-header">
                  <div class="component-icon">
                    {{ example.name.charAt(0) }}
                  </div>
                  <h3 class="component-name">{{ example.name }}</h3>
                </div>

                <div class="card-description">
                  {{ example.description }}
                </div>

                <div class="card-preview">
                  <component
                    :is="example.component"
                    v-bind="example.props"
                    class="component-instance"
                  >
                    {{ example.children }}
                  </component>
                </div>

                <!-- 底部线条划过效果 -->
                <div class="card-underline"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 底部按钮 -->
        <div class="flex justify-center mt-16">
          <a href="/Versakit-Vue/components/overview/" class="explore-btn">
            <span>浏览全部组件</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- 特性展示 -->
    <section class="py-24 relative">
      <div class="container mx-auto px-6">
        <!-- 数据统计 -->
        <div
          class="mb-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="group stat-card p-8 rounded-2xl border hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 backdrop-blur-sm text-center transform hover:scale-105 fade-in slide-up"
          >
            <div class="relative">
              <div
                class="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
              ></div>
              <div class="relative">
                <div
                  class="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-3"
                >
                  {{ stat.number }}
                </div>
                <div class="text-lg text-gray-400">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mb-16 fade-in">
          <h2
            class="text-4xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
          >
            为什么选择 Versakit？
          </h2>
          <div class="mt-4 text-gray-400 max-w-2xl mx-auto">
            精心打造的现代化组件库，为您的项目提供完整的设计解决方案
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          <div
            v-for="(feature, index) in features"
            :key="feature.title"
            class="group feature-card relative p-6 rounded-2xl border hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 backdrop-blur-sm fade-in slide-up"
            :style="{ animationDelay: index * 100 + 'ms' }"
          >
            <div class="flex flex-col space-y-4">
              <div
                class="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 shadow-inner shadow-white/5"
              >
                <span class="text-2xl">
                  {{ feature.icon }}
                </span>
              </div>
              <div>
                <h3
                  class="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3"
                >
                  {{ feature.title }}
                </h3>
                <p class="text-sm text-gray-400/90 leading-relaxed">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队展示 -->
    <MemberPage class="fade-in" />

    <!-- 页脚 -->
    <footer class="py-12 text-center text-gray-500 border-t border-white/10">
      <p class="flex items-center justify-center gap-2">
        © {{ new Date().getFullYear() }} Versakit • 使用
        <a
          href="https://vitepress.dev/"
          class="text-purple-400 hover:text-purple-300 transition-colors"
        >
          VitePress
        </a>
        构建
      </p>
    </footer>
  </div>
</template>

<style scoped>
:root {
  --vk-bg-card: rgba(255, 255, 255, 0.05);
  --vk-border-color: rgba(255, 255, 255, 0.1);
  --vk-text-primary: rgba(255, 255, 255, 0.9);
  --vk-text-secondary: rgba(255, 255, 255, 0.7);
  --vk-text-tertiary: rgba(255, 255, 255, 0.4);

  /* 组件展示区域变量 */
  --vk-component-bg: rgba(255, 255, 255, 0.05);
  --vk-component-border: rgba(255, 255, 255, 0.1);
  --vk-component-hover-border: rgba(124, 58, 237, 0.4);
  --vk-component-demo-bg-from: rgba(24, 24, 27, 0.7);
  --vk-component-demo-bg-to: rgba(39, 39, 42, 0.7);
  --vk-component-shadow: rgba(124, 58, 237, 0.15);
  --vk-code-bg: rgba(0, 0, 0, 0.3);
  --vk-code-border: rgba(255, 255, 255, 0.1);
  --vk-grid-line-color: rgba(124, 58, 237, 0.1);
}

html.dark {
  --vk-bg-card: rgba(255, 255, 255, 0.05);
  --vk-border-color: rgba(255, 255, 255, 0.1);
  --vk-text-primary: rgba(255, 255, 255, 0.9);
  --vk-text-secondary: rgba(255, 255, 255, 0.7);
  --vk-text-tertiary: rgba(255, 255, 255, 0.4);

  /* 深色模式组件展示区域变量 */
  --vk-component-bg: rgba(255, 255, 255, 0.05);
  --vk-component-border: rgba(255, 255, 255, 0.1);
  --vk-component-hover-border: rgba(124, 58, 237, 0.4);
  --vk-component-demo-bg-from: rgba(24, 24, 27, 0.7);
  --vk-component-demo-bg-to: rgba(39, 39, 42, 0.7);
  --vk-component-shadow: rgba(124, 58, 237, 0.15);
  --vk-code-bg: rgba(0, 0, 0, 0.3);
  --vk-code-border: rgba(255, 255, 255, 0.1);
  --vk-grid-line-color: rgba(124, 58, 237, 0.1);
}

html.light {
  --vk-bg-card: rgba(255, 255, 255, 0.9);
  --vk-border-color: rgba(0, 0, 0, 0.1);
  --vk-text-primary: rgba(0, 0, 0, 0.9);
  --vk-text-secondary: rgba(0, 0, 0, 0.7);
  --vk-text-tertiary: rgba(0, 0, 0, 0.4);

  /* 浅色模式组件展示区域变量 */
  --vk-component-bg: rgba(255, 255, 255, 0.8);
  --vk-component-border: rgba(0, 0, 0, 0.1);
  --vk-component-hover-border: rgba(124, 58, 237, 0.4);
  --vk-component-demo-bg-from: rgba(240, 240, 245, 0.7);
  --vk-component-demo-bg-to: rgba(235, 235, 240, 0.7);
  --vk-component-shadow: rgba(124, 58, 237, 0.12);
  --vk-code-bg: rgba(240, 240, 245, 0.8);
  --vk-code-border: rgba(0, 0, 0, 0.08);
  --vk-grid-line-color: rgba(124, 58, 237, 0.07);
}

.language-vue,
.language-bash {
  background: transparent !important;
  margin: 0 !important;
  padding: 0 !important;
  font-family: 'Fira Code', monospace;
}

.language-vue code,
.language-bash code {
  color: var(--vk-text-primary) !important;
  font-size: 0.9rem !important;
  line-height: 1.5 !important;
}

/* 代码块滚动条 */
pre::-webkit-scrollbar {
  height: 4px;
}

pre::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2px;
}

pre::-webkit-scrollbar-thumb {
  background: rgba(168, 85, 247, 0.3);
  border-radius: 2px;
}

pre::-webkit-scrollbar-thumb:hover {
  background: rgba(168, 85, 247, 0.5);
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(2deg);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  background-size: 200% auto;
  animation: gradient 10s linear infinite;
}

/* 特性卡片样式 */
.grid {
  --gap: 2rem;
  display: grid;
  gap: var(--gap);
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

.group {
  position: relative;
  backdrop-filter: blur(20px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  background: var(--vk-bg-card);
  border: 1px solid var(--vk-border-color);
  color: var(--vk-text-primary);
}

.group::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(168, 85, 247, 0.1),
    rgba(59, 130, 246, 0.1)
  );
  opacity: 0;
  transition: opacity 0.5s ease;
}

.group:hover::before {
  opacity: 1;
}

.group:hover {
  transform: translateY(-5px);
  border-color: rgba(168, 85, 247, 0.5);
  box-shadow:
    0 10px 30px -10px rgba(168, 85, 247, 0.3),
    0 0 0 1px rgba(168, 85, 247, 0.2);
}

/* 图标容器样式 */
.group .w-14 {
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(168, 85, 247, 0.2),
    rgba(59, 130, 246, 0.2)
  );
  border: 1px solid rgba(168, 85, 247, 0.3);
  transition: all 0.3s ease;
}

.group:hover .w-14 {
  transform: scale(1.1);
  background: linear-gradient(
    135deg,
    rgba(168, 85, 247, 0.3),
    rgba(59, 130, 246, 0.3)
  );
  border-color: rgba(168, 85, 247, 0.5);
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.2);
}

/* 标题样式 */
.group h3 {
  position: relative;
  transition: all 0.3s ease;
}

.group:hover h3 {
  transform: translateX(5px);
}

/* 描述文本样式 */
.group p {
  position: relative;
  transition: all 0.3s ease;
  line-height: 1.6;
}

.group:hover p {
  color: rgba(255, 255, 255, 0.7);
}

/* 文字发光效果 */
.hover-glow:hover {
  text-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
}

/* 操作按钮样式 */
.action-button {
  position: relative;
  padding: 0;
  border-radius: 12px;
  font-weight: 500;
  font-size: 1.05rem;
  transition: all 0.3s ease;
  overflow: hidden;
}

.action-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(168, 85, 247, 0.5),
    rgba(59, 130, 246, 0.5)
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.action-button:hover::before {
  opacity: 1;
}

.button-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
}

.action-button svg {
  transition: transform 0.3s ease;
}

.action-button:hover svg {
  transform: translateX(4px);
}

/* 主要按钮 */
.action-button.primary {
  background: linear-gradient(135deg, rgb(168, 85, 247), rgb(59, 130, 246));
  color: white;
  box-shadow:
    0 4px 12px rgba(168, 85, 247, 0.25),
    0 0 0 1px rgba(168, 85, 247, 0.1);
}

.action-button.primary:hover {
  box-shadow:
    0 8px 20px rgba(168, 85, 247, 0.35),
    0 0 0 1px rgba(168, 85, 247, 0.2);
  transform: translateY(-2px);
}

/* 次要按钮 */
.action-button.secondary {
  background: var(--vk-bg-card);
  color: var(--vk-text-primary);
  backdrop-filter: blur(10px);
  border: 1px solid var(--vk-border-color);
}

.action-button.secondary:hover {
  border-color: rgba(168, 85, 247, 0.5);
  color: white;
  box-shadow:
    0 8px 20px rgba(168, 85, 247, 0.2),
    0 0 0 1px rgba(168, 85, 247, 0.1);
  transform: translateY(-2px);
}

/* 平滑滚动 */
.smooth-scroll {
  scroll-behavior: smooth;
}

/* 基础动画类 */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, transform;
}

.fade-in.show {
  opacity: 1;
  transform: translateY(0);
}

/* 向上滑动动画 */
.slide-up {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, transform;
}

.slide-up.show {
  opacity: 1;
  transform: translateY(0);
}

/* 特性卡片的交错动画 */
.grid .group {
  transition-delay: var(--animation-delay, 0ms);
}

/* 优化动画性能 */
@media (prefers-reduced-motion: reduce) {
  .smooth-scroll {
    scroll-behavior: auto;
  }

  .fade-in,
  .slide-up {
    transition: none;
    opacity: 1;
    transform: none;
  }
}

/* 修改文字颜色 */
.text-gray-400 {
  color: var(--vk-text-secondary);
}

.text-gray-300 {
  color: var(--vk-text-primary);
}

/* 修改安装指南区域 */
.relative.rounded-xl {
  background: var(--vk-bg-card);
  border-color: var(--vk-border-color);
}

/* 修改统计卡片 */
.stat-card {
  background: var(--vk-bg-card);
  border-color: var(--vk-border-color);
}

/* 修改特性卡片 */
.feature-card {
  background: var(--vk-bg-card);
  border-color: var(--vk-border-color);
}

/* 新增组件展示区域样式 */
.component-showcase {
  transform: perspective(1000px) rotateX(0) rotateY(0);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.group:hover .component-showcase {
  box-shadow: 0 25px 50px -12px rgba(124, 58, 237, 0.15);
}

/* 组件实例样式 */
.component-instance {
  transition: all 0.3s ease;
}

.group:hover .component-instance {
  transform: scale(1.05);
}

/* 组件演示区域 */
.component-demo {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.component-demo::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(124, 58, 237, 0.05) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
}

.group:hover .component-demo::before {
  opacity: 1;
}

/* 装饰元素增强 */
@keyframes pulse-subtle {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.15;
  }
}

/* 改善卡片悬停效果 */
.component-showcase:hover {
  transform: perspective(1000px) rotateX(2deg) rotateY(2deg) translateY(-5px);
}

/* 添加微妙的边框动画 */
@keyframes border-glow {
  0%,
  100% {
    border-color: rgba(124, 58, 237, 0.3);
  }
  50% {
    border-color: rgba(59, 130, 246, 0.3);
  }
}

.group:hover .component-showcase {
  animation: border-glow 2s infinite;
}

/* 连接线装饰效果 */
.connection-lines {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(to right, var(--vk-grid-line-color) 1px, transparent 1px),
    linear-gradient(to bottom, var(--vk-grid-line-color) 1px, transparent 1px);
  background-size: 80px 80px;
  mask-image: radial-gradient(
    circle at center,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 70%
  );
  opacity: 0.2;
}

/* 组件卡片进入动画 */
.component-card {
  opacity: 0;
  transform: translateY(20px);
  animation: card-enter 0.6s cubic-bezier(0.21, 1.11, 0.7, 1.2) forwards;
}

@keyframes card-enter {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 代码区域闪光效果 */
.code-shine {
  position: absolute;
  top: -100%;
  left: -100%;
  width: 50%;
  height: 50%;
  background: linear-gradient(
    225deg,
    transparent,
    rgba(255, 255, 255, 0.2) 30%,
    transparent 40%
  );
  transform: rotate(25deg);
  pointer-events: none;
  transition: 0.65s;
  z-index: 10;
}

.group:hover .code-shine {
  top: 200%;
  left: 200%;
  transition-timing-function: cubic-bezier(0.15, 0.5, 0.5, 1);
}

/* 组件图标样式 */
.component-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: linear-gradient(
    135deg,
    rgba(124, 58, 237, 0.3),
    rgba(99, 102, 241, 0.3)
  );
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  box-shadow: 0 0 10px rgba(124, 58, 237, 0.2);
  transition: all 0.3s ease;
}

html.light .component-icon {
  color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 10px rgba(124, 58, 237, 0.15);
}

.group:hover .component-icon {
  transform: scale(1.1);
  background: linear-gradient(
    135deg,
    rgba(124, 58, 237, 0.5),
    rgba(99, 102, 241, 0.5)
  );
  box-shadow: 0 0 15px rgba(124, 58, 237, 0.4);
}

/* 3D视角效果 */
.perspective-container {
  perspective: 1000px;
}

/* 新增组件展示区域样式 */
.component-showcase {
  transform: perspective(1000px) rotateX(0) rotateY(0);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  background: var(--vk-component-bg);
  border-color: var(--vk-component-border);
}

.group:hover .component-showcase {
  box-shadow: 0 25px 50px -12px var(--vk-component-shadow);
  border-color: var(--vk-component-hover-border);
}

/* 组件实例样式 */
.component-instance {
  transition: all 0.3s ease;
}

.group:hover .component-instance {
  transform: scale(1.05);
}

/* 组件演示区域 */
.component-demo {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  background: linear-gradient(
    135deg,
    var(--vk-component-demo-bg-from),
    var(--vk-component-demo-bg-to)
  );
}

.component-demo::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(124, 58, 237, 0.05) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
}

.group:hover .component-demo::before {
  opacity: 1;
}

/* 装饰元素增强 */
@keyframes pulse-subtle {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.15;
  }
}

/* 改善卡片悬停效果 */
.component-showcase:hover {
  transform: perspective(1000px) rotateX(2deg) rotateY(2deg) translateY(-5px);
}

/* 添加微妙的边框动画 */
@keyframes border-glow {
  0%,
  100% {
    border-color: rgba(124, 58, 237, 0.3);
  }
  50% {
    border-color: rgba(59, 130, 246, 0.3);
  }
}

.group:hover .component-showcase {
  animation: border-glow 2s infinite;
}

/* 代码块样式适配深浅色模式 */
pre {
  background: var(--vk-code-bg) !important;
  border-color: var(--vk-code-border);
}

html.light pre {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

html.light pre code {
  color: #334155 !important;
}

html.light pre code .text-blue-400 {
  color: #4f46e5 !important;
}

html.light pre code .text-green-400 {
  color: #16a34a !important;
}

html.light pre code .text-purple-100 {
  color: #334155 !important;
}

/* 组件展示区域在浅色模式的额外样式 */
html.light .component-showcase {
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.05),
    0 2px 4px -1px rgba(0, 0, 0, 0.03);
}

html.light .component-demo {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.04);
}

html.light .component-icon {
  box-shadow: 0 2px 4px rgba(124, 58, 237, 0.15);
}

/* 标题和副标题样式适配 */
.main-title {
  color: var(--vk-text-primary);
}

.subtitle {
  color: var(--vk-text-secondary);
}

html.light .badge-text {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

html.dark .badge-text {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

/* 代码块样式适配深浅色模式 */
pre {
  background: var(--vk-code-bg) !important;
  border-color: var(--vk-code-border);
}

html.light pre {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

html.light pre code {
  color: #334155 !important;
}

html.light pre code .text-blue-400 {
  color: #4f46e5 !important;
}

html.light pre code .text-green-400 {
  color: #16a34a !important;
}

html.light pre code .text-purple-100 {
  color: #334155 !important;
}

/* 组件展示区域在浅色模式的额外样式 */
html.light .component-showcase {
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.05),
    0 2px 4px -1px rgba(0, 0, 0, 0.03);
}

html.light .component-demo {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.04);
}

html.light .component-icon {
  box-shadow: 0 2px 4px rgba(124, 58, 237, 0.15);
}

/* 组件卡片容器 */
.components-showcase {
  margin: 0 auto;
  max-width: 100%;
  overflow: hidden;
  position: relative;
}

.component-cards-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  padding: 1rem;
  position: relative;
}

/* 卡片间视觉连接线 */
.components-showcase::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--vk-component-border),
    transparent
  );
  opacity: 0.3;
  z-index: -1;
}

@media (min-width: 640px) {
  .component-cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .component-cards-container {
    grid-template-columns: repeat(3, 1fr);
  }

  /* 在大屏幕上添加更多的视觉连接线 */
  .components-showcase::after {
    content: '';
    position: absolute;
    left: 33.33%;
    right: 33.33%;
    top: 0;
    bottom: 0;
    width: 1px;
    background: linear-gradient(
      180deg,
      transparent,
      var(--vk-component-border),
      transparent
    );
    opacity: 0.2;
    z-index: -1;
  }
}

/* 组件卡片 - 精致优化 */
.component-card {
  position: relative;
  background: var(--vk-component-bg);
  border-radius: 1.25rem;
  border: 1px solid var(--vk-component-border);
  padding: 1.75rem;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.06);
  opacity: 0;
  transform: translateY(30px);
  animation: card-enter 1s forwards cubic-bezier(0.25, 1, 0.5, 1);
  animation-delay: var(--delay);
  isolation: isolate;
}

@keyframes card-enter {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  60% {
    opacity: 1;
    transform: translateY(-5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.component-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: var(--vk-component-hover-border);
  box-shadow:
    0 14px 24px rgba(0, 0, 0, 0.1),
    0 2px 6px rgba(124, 58, 237, 0.15);
  z-index: 1;
}

/* 卡片头部 */
.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  position: relative;
}

.component-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  background: linear-gradient(
    135deg,
    rgba(124, 58, 237, 0.7),
    rgba(99, 102, 241, 0.7)
  );
  border-radius: 0.875rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  margin-right: 1rem;
  box-shadow:
    0 3px 8px rgba(124, 58, 237, 0.25),
    0 0 0 1px rgba(124, 58, 237, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

/* 图标内部装饰 */
.component-icon::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.3) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
}

.component-card:hover .component-icon {
  transform: scale(1.15) rotate(-5deg);
  box-shadow:
    0 6px 12px rgba(124, 58, 237, 0.35),
    0 0 0 2px rgba(124, 58, 237, 0.2);
}

.component-card:hover .component-icon::after {
  opacity: 0.3;
}

.component-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vk-text-primary);
  transition: all 0.3s ease;
  letter-spacing: -0.01em;
}

.component-card:hover .component-name {
  color: rgb(124, 58, 237);
  transform: translateX(3px);
}

/* 卡片描述 */
.card-description {
  font-size: 0.875rem;
  color: var(--vk-text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1;
  max-width: 95%;
  transition: all 0.3s ease;
}

.component-card:hover .card-description {
  color: var(--vk-text-primary);
}

/* 组件预览区域 - 优化 */
.card-preview {
  background: linear-gradient(
    135deg,
    var(--vk-component-demo-bg-from),
    var(--vk-component-demo-bg-to)
  );
  border-radius: 1rem;
  padding: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 9rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.card-preview::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at center,
    rgba(124, 58, 237, 0.08) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.6s ease;
}

.component-card:hover .card-preview {
  border-color: rgba(124, 58, 237, 0.2);
  box-shadow: inset 0 1px 8px rgba(0, 0, 0, 0.08);
}

.component-card:hover .card-preview::before {
  opacity: 1;
}

.component-instance {
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 1;
  position: relative;
}

.component-card:hover .component-instance {
  transform: scale(1.08);
}

/* 底部线条划过效果 - 优化 */
.card-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2.5px;
  background: linear-gradient(90deg, #8b5cf6, #6d66f1, #d946ef);
  transition: width 0.7s cubic-bezier(0.19, 1, 0.22, 1);
  transform-origin: left;
  z-index: 3;
}

.component-card:hover .card-underline {
  width: 100%;
}

/* 浏览按钮样式 - 优化 */
.explore-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  background: rgb(124, 58, 237);
  color: white;
  padding: 0.875rem 1.75rem;
  border-radius: 0.625rem;
  font-weight: 500;
  transition: all 0.35s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow:
    0 4px 12px rgba(124, 58, 237, 0.25),
    0 1px 3px rgba(124, 58, 237, 0.1);
  position: relative;
  overflow: hidden;
}

.explore-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.6s ease;
}

.explore-btn:hover {
  transform: translateY(-3px);
  box-shadow:
    0 8px 20px rgba(124, 58, 237, 0.35),
    0 2px 5px rgba(124, 58, 237, 0.15);
  background: rgb(109, 40, 217);
}

.explore-btn:hover::before {
  left: 100%;
}

.explore-btn .icon {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.explore-btn:hover .icon {
  transform: translateX(5px);
}

/* 适配深色和浅色模式 - 优化 */
html.light .component-card {
  background: rgba(255, 255, 255, 0.9);
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.06),
    0 1px 4px rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(8px);
}

html.dark .component-card {
  background: rgba(30, 30, 40, 0.35);
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.15),
    0 1px 5px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(10px);
}

html.light .main-title {
  background-image: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7);
  text-shadow: 0 1px 2px rgba(99, 102, 241, 0.1);
}

html.dark .main-title {
  background-image: linear-gradient(135deg, #8b5cf6, #a855f7, #d946ef);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

html.light .card-preview {
  background: rgba(245, 245, 250, 0.7);
}

html.dark .card-preview {
  background: rgba(15, 15, 25, 0.5);
}
</style>
