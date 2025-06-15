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
}

/* 暗色模式配置 */
.dark {
  --vp-c-bg: #0a0a0a;
  --vp-c-bg-soft: #111111;
  --vp-c-bg-mute: #191919;
  --vp-c-text: rgba(255, 255, 255, 0.92);
  background: var(--vp-c-bg) !important;
}

/* 导航栏样式 */
.VPNavBar.has-sidebar .content {
  background: transparent !important;
}

.VPNavBar.top {
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

/* 侧边栏样式 */
.VPSidebar {
  background: rgba(10, 10, 10, 0.8) !important;
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
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
}

.VPDoc {
  padding: 0 !important;
  overflow: visible !important;
  position: relative;
  transition: all 0.8s cubic-bezier(0.16, 0.85, 0.25, 1);
}

/* 布局调整 */
.VPDoc.has-aside .container .content-container {
  max-width: 100%;
}

.VPDoc.has-aside .container .content {
  padding: 0;
}

/* 全局动画过渡 */
* {
  transition:
    background-color 0.8s cubic-bezier(0.16, 0.85, 0.25, 1),
    color 0.8s cubic-bezier(0.16, 0.85, 0.25, 1),
    border-color 0.3s ease,
    transform 0.3s ease;
}

/* 滚动条美化 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: var(--accent-color);
  border-radius: 3px;
  opacity: 0.5;
}

::-webkit-scrollbar-thumb:hover {
  opacity: 0.8;
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
</style>
