<script setup lang="ts">
import { Tabs } from '@versakit/vue'

const defaultItems = [
  {
    label: '标签一',
    content: '标签一的内容区域。这是一个基础的标签页示例。',
  },
  {
    label: '标签二',
    content: '标签二的内容区域。您可以在这里放置任何内容。',
  },
  {
    label: '标签三',
    content: '标签三的内容区域。标签页是一种常用的导航组件。',
  },
]

const itemsWithIcons = [
  {
    label: '主页',
    content: '主页内容区域。这里通常放置概览信息。',
    icon: 'home',
  },
  {
    label: '设置',
    content: '设置内容区域。这里可以放置各种配置选项。',
    icon: 'settings',
  },
  {
    label: '用户',
    content: '用户内容区域。这里可以放置用户相关的信息。',
    icon: 'user',
  },
]
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <Tabs :items="defaultItems" />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
      <Tabs :items="defaultItems" disabled />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">禁用特定标签</h2>
      <Tabs
        :items="[
          {
            label: '标签一',
            content: '标签一的内容',
          },
          {
            label: '标签二',
            content: '标签二的内容',
            disabled: true,
          },
          {
            label: '标签三',
            content: '标签三的内容',
          },
        ]"
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同尺寸</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">小尺寸</p>
          <Tabs :items="defaultItems" size="sm" />
        </div>
        <div>
          <p class="mb-2">中等尺寸</p>
          <Tabs :items="defaultItems" size="md" />
        </div>
        <div>
          <p class="mb-2">大尺寸</p>
          <Tabs :items="defaultItems" size="lg" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">块级元素</h2>
      <Tabs :items="defaultItems" block />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">带图标</h2>
      <Tabs :items="itemsWithIcons" />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <Tabs
        :items="defaultItems"
        :pt="{
          trigger:
            'text-purple-700 hover:text-purple-900 border-b-2 border-transparent data-[selected=true]:border-purple-700',
          panel: 'p-4 border border-purple-200 rounded-md',
        }"
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="space-y-8">
        <div>
          <p class="mb-2">卡片式标签页</p>
          <Tabs
            :items="defaultItems"
            unstyled
            :pt="{
              container: 'flex flex-col',
              trigger:
                'px-4 py-2 rounded-t-lg bg-gray-100 text-gray-600 hover:bg-gray-200 data-[selected=true]:bg-blue-500 data-[selected=true]:text-white',
              panel: 'p-4 bg-white border border-gray-200 rounded-b-lg',
            }"
          />
        </div>
        <div>
          <p class="mb-2">底部边框标签页</p>
          <Tabs
            :items="defaultItems"
            unstyled
            :pt="{
              container: 'flex flex-col',
              trigger:
                'px-4 py-2 text-gray-500 border-b-2 border-transparent hover:text-gray-700 data-[selected=true]:text-purple-600 data-[selected=true]:border-purple-600',
              panel: 'p-4',
            }"
          />
        </div>
        <div>
          <p class="mb-2">按钮式标签页</p>
          <Tabs
            :items="defaultItems"
            unstyled
            :pt="{
              container: 'flex flex-col',
              trigger:
                'px-4 py-2 m-1 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 data-[selected=true]:bg-green-500 data-[selected=true]:text-white',
              panel: 'p-4 bg-white border-t border-gray-200',
            }"
          />
        </div>
      </div>
    </section>
  </div>
</template>
