<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
// @ts-ignore - Vue component with script setup
import Threads from '../Threads.vue'

const isDark = ref(false)

const checkDarkMode = () => {
  isDark.value = document.documentElement.classList.contains('dark')
}

const threadColor = computed(() => {
  return isDark.value
    ? ([1, 1, 1] as [number, number, number])
    : ([0.1, 0.1, 0.1] as [number, number, number])
})

let observer: MutationObserver | null = null

onMounted(() => {
  checkDarkMode()

  observer = new MutationObserver(() => {
    checkDarkMode()
  })

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <div class="home">
    <section class="hero">
      <!-- Background Decoration -->
      <div class="hero-bg">
        <Threads
          :color="threadColor"
          :amplitude="1"
          :distance="0"
          :enableMouseInteraction="false"
        />
      </div>

      <div class="hero-content">
        <div class="hero-badge">
          <span class="hero-badge-text">Headless Design ❤️</span>
        </div>
        <h1 class="hero-title">
          <span class="hero-title-main">Versakit UI</span>
          <span class="hero-title-sub">无头组件库</span>
        </h1>
        <p class="hero-subtitle">完全解耦逻辑与样式，提供 100% 样式控制权</p>
        <p class="hero-description">
          基于 Vue3 + TypeScript 构建，50+
          无头组件，支持完全自定义样式，开箱即用或深度定制
        </p>

        <div class="hero-stats">
          <div class="hero-stat">
            <div class="hero-stat-number">50+</div>
            <div class="hero-stat-label">组件</div>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <div class="hero-stat-number">100%</div>
            <div class="hero-stat-label">TypeScript</div>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <div class="hero-stat-number">∞</div>
            <div class="hero-stat-label">可定制</div>
          </div>
        </div>

        <div class="hero-actions">
          <a
            href="/Versakit-Vue/guide/getting-started/quickstart"
            class="btn-primary"
          >
            开始使用
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="btn-icon"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="/Versakit-Vue/guide/getting-started/introduction"
            class="btn-secondary"
          >
            查看文档
          </a>
        </div>

        <div class="hero-features-preview">
          <div class="hero-feature-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="hero-feature-icon"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span>无头设计</span>
          </div>
          <div class="hero-feature-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="hero-feature-icon"
            >
              <circle cx="12" cy="12" r="3" />
              <path
                d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"
              />
            </svg>
            <span>完全定制</span>
          </div>
          <div class="hero-feature-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="hero-feature-icon"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15 15 0 0 0 8 20M12 2a15 15 0 0 1-8 20" />
              <path d="M2 12h20" />
            </svg>
            <span>无障碍访问</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  background: #ffffff;
  transition: background-color 0.3s ease;
}

.dark .home {
  background: #0a0a0a;
}

/* Hero Section */
.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 80px 24px;
  text-align: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.6;
}

.dark .hero-bg {
  opacity: 0.4;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 16px;
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin-bottom: 24px;
  transition: all 0.3s ease;
}

.dark .hero-badge {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
}

.hero-badge-text {
  font-size: 0.875rem;
  font-weight: 500;
  color: #666666;
  transition: color 0.3s ease;
}

.dark .hero-badge-text {
  color: rgba(255, 255, 255, 0.6);
}

.hero-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 0 0 24px 0;
  transition: color 0.3s ease;
}

.hero-title-main {
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.1;
  color: #000000;
  letter-spacing: -0.03em;
  transition: color 0.3s ease;
}

.dark .hero-title-main {
  color: #ffffff;
}

.hero-title-sub {
  font-size: 1.5rem;
  font-weight: 400;
  color: #666666;
  letter-spacing: 0.1em;
  transition: color 0.3s ease;
}

.dark .hero-title-sub {
  color: rgba(255, 255, 255, 0.5);
}

.hero-subtitle {
  font-size: 1.5rem;
  line-height: 1.6;
  margin: 0 0 16px 0;
  color: #333333;
  font-weight: 500;
  transition: color 0.3s ease;
}

.dark .hero-subtitle {
  color: rgba(255, 255, 255, 0.9);
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.6;
  margin: 0 0 48px 0;
  color: #666666;
  transition: color 0.3s ease;
}

.dark .hero-description {
  color: rgba(255, 255, 255, 0.6);
}

.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin: 0 0 48px 0;
  padding: 32px 0;
  flex-wrap: wrap;
}

.hero-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.hero-stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #000000;
  line-height: 1;
  transition: color 0.3s ease;
}

.dark .hero-stat-number {
  color: #ffffff;
}

.hero-stat-label {
  font-size: 0.875rem;
  color: #666666;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: color 0.3s ease;
}

.dark .hero-stat-label {
  color: rgba(255, 255, 255, 0.6);
}

.hero-stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.dark .hero-stat-divider {
  background: rgba(255, 255, 255, 0.1);
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  padding: 14px 32px;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
}

.btn-icon {
  width: 18px;
  height: 18px;
}

.btn-primary {
  background: #000000;
  color: #ffffff;
}

.btn-primary:hover {
  background: #333333;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.dark .btn-primary {
  background: #ffffff;
  color: #000000;
}

.dark .btn-primary:hover {
  background: #e5e5e5;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.15);
}

.btn-secondary {
  background: transparent;
  color: #000000;
  border: 2px solid #000000;
}

.btn-secondary:hover {
  background: #000000;
  color: #ffffff;
  transform: translateY(-2px);
}

.dark .btn-secondary {
  color: #ffffff;
  border-color: #ffffff;
}

.dark .btn-secondary:hover {
  background: #ffffff;
  color: #000000;
}

.hero-features-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-top: 48px;
  flex-wrap: wrap;
}

.hero-feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9375rem;
  color: #666666;
  transition: color 0.3s ease;
}

.dark .hero-feature-item {
  color: rgba(255, 255, 255, 0.6);
}

.hero-feature-icon {
  width: 18px;
  height: 18px;
  color: #000000;
  transition: color 0.3s ease;
}

.dark .hero-feature-icon {
  color: #ffffff;
}
</style>
