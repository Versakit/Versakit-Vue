<script setup lang="ts">
import { useData } from 'vitepress'
import Theme from 'vitepress/theme'
import { nextTick, provide } from 'vue'

const { isDark } = useData()

const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px at ${x}px ${y}px)`,
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
    },
  )
})
</script>

<template>
  <Theme.Layout />
</template>

<style>
/* 视图过渡动画 */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

/* 全局主题配置 */
:root {
  --primary-gradient: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%);
  --secondary-gradient: linear-gradient(135deg, #8ec5fc 0%, #e0c3fc 100%);
  --accent-color: #a18cd1;
  --accent-color-light: #fbc2eb;
  scroll-behavior: smooth;
}

/* 暗色模式配置 */
.dark {
  --vp-c-bg: #0a0a0a;
  --vp-c-bg-soft: #111111;
  --vp-c-bg-mute: #191919;
  --vp-c-text: rgba(255, 255, 255, 0.92);
  background: var(--vp-c-bg) !important;
}

.VPNavBar.top {
  border: none !important;
  background: transparent !important;
}

.VPNavBar:not(.home.top) .content-body {
  background: transparent !important;
}

.curtain {
  background: transparent !important;
}

/* 侧边栏样式 */
.VPSidebar {
  border: none !important;
  background: transparent !important;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

/* 内容区域样式 */
.VPContent {
  background:
    radial-gradient(
      circle at top right,
      rgba(161, 140, 209, 0.15),
      transparent 50%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(251, 194, 235, 0.15),
      transparent 50%
    );
  min-height: 100vh;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.VPDoc {
  margin-top: 1rem !important;
  padding: 1rem !important;
  overflow: visible !important;
  position: relative;
  transition: all 0.8s cubic-bezier(0.16, 0.85, 0.25, 1);
}

.vp-doc h2 {
  border: none;
}

/* 布局调整 */
.VPDoc.has-aside .container .content-container {
  max-width: 100%;
}

/* 全局动画过渡 */
* {
  transition:
    background-color 0.8s cubic-bezier(0.16, 0.85, 0.25, 1),
    color 0.8s cubic-bezier(0.16, 0.85, 0.25, 1),
    border-color 0.3s ease,
    transform 0.3s ease;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 0;
  height: 0;
  background: transparent;
}

::-webkit-scrollbar-track {
  display: none;
}

::-webkit-scrollbar-thumb {
  display: none;
}

::-webkit-scrollbar-thumb:hover {
  display: none;
}

/* 确保内容不会被隐藏的滚动条影响 */
.VPDoc:not(.has-sidebar) .container {
  max-width: 100%;
  margin-right: 0;
}

/* 文本选择样式 */
::selection {
  background: var(--accent-color);
  color: white;
  opacity: 0.7;
}

/* 链接样式 */
.dark .vp-doc a {
  color: var(--accent-color-light);
  text-decoration: none;
  transition: all 0.3s ease;
}

.dark .vp-doc a:hover {
  color: var(--accent-color);
  text-shadow: 0 0 8px rgba(161, 140, 209, 0.5);
}

/* 代码块样式 */
.dark .vp-doc div[class*='language-'] {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

/* 标题样式 */
.dark .vp-doc h1,
.dark .vp-doc h2,
.dark .vp-doc h3,
.dark .vp-doc h4 {
  background: var(--primary-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

/* 页面加载动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.VPContent {
  animation: fadeIn 0.8s ease-out;
}

/* 优化滚动体验 */
html {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

body {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  overflow-y: overlay;
}
</style>
