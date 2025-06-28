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
  --accent-color: #333333;
  --accent-color-light: #666666;
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

/* 毛玻璃效果：头部导航栏 */
.VPNavBar {
  background: rgba(255, 255, 255, 0.7) !important;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  border-bottom: 1px solid rgba(0,0,0,0.04);
  transition: background 0.3s, backdrop-filter 0.3s;
}

/* 暗色模式下毛玻璃效果 */
.dark .VPNavBar {
  background: rgba(20, 20, 20, 0.6) !important;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  border-bottom: 1px solid rgba(255,255,255,0.04);
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

.VPDoc:not(.has-sidebar) .container {
  margin: 0 auto !important;
  padding: 0 !important;
}

/* 内容区域样式 */
.VPContent {
  background: transparent;
  min-height: 100vh;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.VPDoc {
  margin-top: 1rem !important;
  padding: 1rem !important;
  overflow: visible !important;
  position: relative;
  transition: all 0.5s ease;
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
    background-color 0.5s ease,
    color 0.5s ease,
    border-color 0.3s ease,
    transform 0.3s ease;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  background: transparent;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}

/* 确保内容不会被隐藏的滚动条影响 */
.VPDoc:not(.has-sidebar) .container {
  max-width: 100%;
  margin-right: 0;
}

/* 文本选择样式 */
::selection {
  background: #333;
  color: white;
}

/* 链接样式 */
.dark .vp-doc a {
  color: #aaaaaa;
  text-decoration: none;
  transition: all 0.3s ease;
}

.dark .vp-doc a:hover {
  color: #ffffff;
}

/* 代码块样式 */
.dark .vp-doc div[class*='language-'] {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

/* 标题样式 */
.dark .vp-doc h1,
.dark .vp-doc h2,
.dark .vp-doc h3,
.dark .vp-doc h4 {
  color: #ffffff;
}

/* 页面加载动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.VPContent {
  animation: fadeIn 0.5s ease-out;
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

/* 表格样式优化 */
.vp-doc table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 24px 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  font-size: 14px;
}

.vp-doc table thead {
  background-color: rgba(0, 0, 0, 0.02);
}

.vp-doc table th {
  text-align: left;
  font-weight: 600;
  padding: 12px 16px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: inherit;
}

.vp-doc table td {
  padding: 12px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.vp-doc table tr:last-child td {
  border-bottom: none;
}

.vp-doc table tr:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.01);
}

.vp-doc table tr:hover {
  background-color: rgba(0, 0, 0, 0.03);
  transition: background-color 0.2s ease;
}

/* 响应式表格 */
@media (max-width: 640px) {
  .vp-doc table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  .vp-doc table th,
  .vp-doc table td {
    padding: 10px 12px;
  }
}

/* 暗色模式表格样式 */
.dark .vp-doc table {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.dark .vp-doc table thead {
  background-color: rgba(255, 255, 255, 0.05);
}

.dark .vp-doc table th {
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.95);
}

.dark .vp-doc table td {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.85);
}

.dark .vp-doc table tr:nth-child(odd) {
  background-color: rgba(255, 255, 255, 0.01);
}

.dark .vp-doc table tr:hover {
  background-color: rgba(255, 255, 255, 0.03);
}

/* 表格内代码样式 */
.vp-doc table code {
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.04);
  padding: 2px 4px;
  border-radius: 4px;
}

.dark .vp-doc table code {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
