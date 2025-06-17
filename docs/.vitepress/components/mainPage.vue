<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MemberPage from './memberPage.vue'

interface Feature {
  icon: string
  title: string
  description: string
}

interface Stat {
  number: string
  label: string
}

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

const codeExample =
  '<script setup lang="ts">\n' +
  "import { createApp } from 'vue'\n" +
  "import App from './App.vue'\n" +
  "import Versakit from '@versakit/ui'\n" +
  "import '@versakit/ui/dist/style.css'\n\n" +
  'createApp(App)\n' +
  '  .use(Versakit)\n' +
  "  .mount('#app')\n" +
  '<\/script>'

const stats = ref<Stat[]>([
  { number: '20+', label: '精心设计的组件' },
  { number: '90%+', label: '单元测试覆盖率' },
  { number: '112+', label: 'GitHub Stars' },
])

const installCode =
  '# 使用 npm\n' +
  'npm install @versakit/composables\n\n' +
  '# 使用 yarn\n' +
  'yarn add @versakit/composables\n\n' +
  '# 使用 pnpm\n' +
  'pnpm add @versakit/composables'

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
          <a
            href="/Versakit-Vue/components/tabs/"
            class="action-button secondary"
          >
            <span class="button-content">
              <span>查看组件</span>
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
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
            class="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 backdrop-blur-sm text-center transform hover:scale-105 fade-in slide-up"
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
            class="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 backdrop-blur-sm fade-in slide-up"
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

    <!-- 安装指南 -->
    <section class="py-24 relative">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto fade-in slide-up">
          <div class="text-center mb-16">
            <h2
              class="text-4xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
            >
              快速开始
            </h2>
            <div class="mt-4 text-gray-400">
              只需几个简单的步骤，即可开始使用 Versakit
            </div>
          </div>

          <div class="space-y-8">
            <!-- 安装命令 -->
            <div class="relative">
              <div
                class="absolute -inset-px bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-xl blur opacity-20"
              ></div>
              <div
                class="relative rounded-xl bg-black/40 border border-white/10"
              >
                <div
                  class="flex items-center justify-between px-4 py-2 border-b border-white/10"
                >
                  <div class="text-sm text-gray-400">安装依赖</div>
                  <div class="flex space-x-2">
                    <button
                      class="text-gray-400 hover:text-white transition-colors"
                      title="复制代码"
                    >
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="p-4 overflow-x-auto">
                  <pre
                    class="language-bash text-sm"
                  ><code>{{ installCode }}</code></pre>
                </div>
              </div>
            </div>

            <!-- 使用示例 -->
            <div class="relative">
              <div
                class="absolute -inset-px bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-xl blur opacity-20"
              ></div>
              <div
                class="relative rounded-xl bg-black/40 border border-white/10"
              >
                <div
                  class="flex items-center justify-between px-4 py-2 border-b border-white/10"
                >
                  <div class="text-sm text-gray-400">基础用法</div>
                  <div class="flex space-x-2">
                    <button
                      class="text-gray-400 hover:text-white transition-colors"
                      title="复制代码"
                    >
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="p-4 overflow-x-auto">
                  <pre
                    class="language-vue text-sm"
                  ><code>{{ codeExample }}</code></pre>
                </div>
              </div>
            </div>

            <!-- 快速链接 -->
            <div class="flex justify-center space-x-4 mt-8">
              <a
                href="/guide/getting-started"
                class="text-purple-400 hover:text-purple-300 transition-colors"
              >
                查看完整文档 →
              </a>
              <a
                href="/components/"
                class="text-purple-400 hover:text-purple-300 transition-colors"
              >
                浏览所有组件 →
              </a>
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
.language-vue,
.language-bash {
  background: transparent !important;
  margin: 0 !important;
  padding: 0 !important;
  font-family: 'Fira Code', monospace;
}

.language-vue code,
.language-bash code {
  color: #a18cd1 !important;
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
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
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
</style>
