<script setup lang="ts">
import { ref } from 'vue'
import { VKButton } from '@versakit/vue'
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
    title: '高质量组件',
    description: '提供20+个精心设计的高质量通用组件，满足桌面端开发需求',
  },
  {
    icon: '💪',
    title: '中国开发者',
    description: '由中国开发者开发，提供完整的中英文文档和后勤支持',
  },
  {
    icon: '🛠️',
    title: '丰富功能',
    description: '支持按需引入、主题定制、国际化、TypeScript、暗黑模式等特性',
  },
  {
    icon: '♿',
    title: '可访问性',
    description: '遵循 WAI-ARIA 标准，持续改进无障碍访问支持',
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
  'npm install @versakit/ui\n\n' +
  '# 使用 yarn\n' +
  'yarn add @versakit/ui\n\n' +
  '# 使用 pnpm\n' +
  'pnpm add @versakit/ui'
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero 区域 -->
    <section class="relative py-32 overflow-hidden">
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
            桌面端组件库
          </p>
          <p class="text-xl text-gray-400 leading-relaxed">
            开源、高质量、可定制的组件库，助力开发者构建令人惊叹的用户界面
          </p>
        </div>

        <!-- 操作按钮 -->
        <div class="mt-12 flex justify-center gap-6">
          <VKButton variant="primary" size="lg">开始使用</VKButton>
          <div class="flex items-center gap-2">
            <VKButton variant="outline" size="lg">查看组件</VKButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              class="iconify iconify--lucide"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h14m-7-7l7 7l-7 7"
              ></path>
            </svg>
          </div>
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
            class="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 backdrop-blur-sm text-center transform hover:scale-105"
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

        <div class="text-center mb-16">
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
            v-for="feature in features"
            :key="feature.title"
            class="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 backdrop-blur-sm"
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
        <div class="max-w-4xl mx-auto">
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
    <MemberPage />

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

/* 卡片悬停效果 */
.feature-card {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px -15px rgba(168, 85, 247, 0.25);
}

/* 文字发光效果 */
.hover-glow:hover {
  text-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
}
</style>
