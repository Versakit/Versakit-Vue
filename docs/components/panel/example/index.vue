<template>
  <div class="space-y-8">
    <!-- 基础面板 -->
    <section>
      <h3 class="text-lg font-medium mb-4">基础面板</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Panel title="基础面板">
          <p>这是一个基础面板的内容区域。</p>
        </Panel>
        <Panel title="带边框面板" variant="bordered">
          <p>这是一个带边框面板的内容区域。</p>
        </Panel>
      </div>
    </section>

    <!-- 面板变体 -->
    <section>
      <h3 class="text-lg font-medium mb-4">面板变体</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Panel title="默认面板" variant="default">
          <p>这是默认样式的面板。</p>
        </Panel>
        <Panel title="带边框面板" variant="bordered">
          <p>这是带边框的面板。</p>
        </Panel>
        <Panel title="阴影面板" variant="elevated">
          <p>这是带阴影的面板。</p>
        </Panel>
      </div>
    </section>

    <!-- 可折叠面板 -->
    <section>
      <h3 class="text-lg font-medium mb-4">可折叠面板</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Panel title="可折叠面板" collapsible>
          <p>点击面板头部可以折叠/展开此内容。</p>
          <p class="mt-2">这是可折叠面板的更多内容。</p>
        </Panel>
        <Panel title="默认折叠面板" collapsible defaultCollapsed>
          <p>这个面板默认是折叠的，点击面板头部可以展开。</p>
          <p class="mt-2">这是默认折叠面板的更多内容。</p>
        </Panel>
      </div>
    </section>

    <!-- 不同内边距 -->
    <section>
      <h3 class="text-lg font-medium mb-4">不同内边距</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">无内边距</p>
          <Panel title="无内边距" padding="none" variant="bordered">
            <p>这是无内边距的面板内容。</p>
          </Panel>
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">大内边距</p>
          <Panel title="大内边距" padding="lg" variant="bordered">
            <p>这是大内边距的面板内容。</p>
          </Panel>
        </div>
      </div>
    </section>

    <!-- 自定义标题和图标 -->
    <section>
      <h3 class="text-lg font-medium mb-4">自定义标题和图标</h3>
      <Panel collapsible>
        <template #title>
          <div class="flex items-center gap-2">
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
              <path
                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
              ></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span class="text-blue-600 font-bold">自定义标题</span>
          </div>
        </template>
        <p>这个面板使用了自定义标题插槽。</p>
      </Panel>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Panel } from '@versakit/vue'
</script>
