<template>
  <div class="space-y-8">
    <section>
      <h2 class="text-xl font-bold mb-4">基础面板</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Panel title="基础面板">
          <p>这是一个基础面板的内容区域。</p>
        </Panel>
        <Panel title="带边框面板" variant="bordered">
          <p>这是一个带边框面板的内容区域。</p>
        </Panel>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">面板变体</h2>
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

    <section>
      <h2 class="text-xl font-bold mb-4">可折叠面板</h2>
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

    <section>
      <h2 class="text-xl font-bold mb-4">不同内边距</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">无内边距</p>
          <Panel title="无内边距" padding="none" variant="bordered">
            <p>这是无内边距的面板内容。</p>
          </Panel>
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">小内边距</p>
          <Panel title="小内边距" padding="sm" variant="bordered">
            <p>这是小内边距的面板内容。</p>
          </Panel>
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">中内边距</p>
          <Panel title="中内边距" padding="md" variant="bordered">
            <p>这是中内边距的面板内容。</p>
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

    <section>
      <h2 class="text-xl font-bold mb-4">不同圆角</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Panel title="无圆角" radius="none" variant="bordered">
          <p>这是无圆角的面板内容。</p>
        </Panel>
        <Panel title="中圆角" radius="md" variant="bordered">
          <p>这是中圆角的面板内容。</p>
        </Panel>
        <Panel title="全圆角" radius="full" variant="bordered">
          <p>这是全圆角的面板内容。</p>
        </Panel>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义标题和图标</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        <Panel title="自定义图标" collapsible>
          <template #icon>
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
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 16 16 12 12 8"></polyline>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </template>
          <p>这个面板使用了自定义折叠图标。</p>
        </Panel>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <Panel
        title="无样式面板"
        unstyled
        :pt="{
          root: 'bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg',
          header:
            'bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-t-xl',
          title: 'text-white font-bold text-xl',
          content: 'p-6',
          icon: 'text-white',
        }"
        collapsible
      >
        <p>这是一个使用无样式模式的面板，通过pt属性自定义样式。</p>
      </Panel>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">嵌套面板</h2>
      <Panel title="父面板" collapsible variant="bordered">
        <p class="mb-4">这是父面板的内容。</p>
        <Panel title="子面板1" collapsible variant="bordered" class="mb-2">
          <p>这是子面板1的内容。</p>
        </Panel>
        <Panel title="子面板2" collapsible variant="bordered">
          <p>这是子面板2的内容。</p>
        </Panel>
      </Panel>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Panel } from '@versakit/vue'
</script>
