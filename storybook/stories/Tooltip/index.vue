<script setup lang="ts">
import { Tooltip, Button } from '@versakit/vue'
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <div class="flex gap-4">
        <Tooltip content="这是一个基础的文字提示">
          <Button>悬停查看提示</Button>
        </Tooltip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同位置</h2>
      <div class="flex gap-4">
        <Tooltip content="这是一个顶部提示" placement="top">
          <Button>顶部提示</Button>
        </Tooltip>
        <Tooltip content="这是一个右侧提示" placement="right">
          <Button>右侧提示</Button>
        </Tooltip>
        <Tooltip content="这是一个底部提示" placement="bottom">
          <Button>底部提示</Button>
        </Tooltip>
        <Tooltip content="这是一个左侧提示" placement="left">
          <Button>左侧提示</Button>
        </Tooltip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同颜色</h2>
      <div class="flex gap-4">
        <Tooltip content="这是一个默认颜色的提示" color="default">
          <Button>默认颜色</Button>
        </Tooltip>
        <Tooltip content="这是一个主色调的提示" color="primary">
          <Button>主色调</Button>
        </Tooltip>
        <Tooltip content="这是一个成功色调的提示" color="success">
          <Button>成功色调</Button>
        </Tooltip>
        <Tooltip content="这是一个警告色调的提示" color="warning">
          <Button>警告色调</Button>
        </Tooltip>
        <Tooltip content="这是一个危险色调的提示" color="danger">
          <Button>危险色调</Button>
        </Tooltip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同触发方式</h2>
      <div class="flex gap-4">
        <Tooltip content="这是一个悬停触发的提示" trigger="hover">
          <Button>悬停触发</Button>
        </Tooltip>
        <Tooltip content="这是一个焦点触发的提示" trigger="focus">
          <Button>点击触发</Button>
        </Tooltip>
        <Tooltip content="这是一个同时支持悬停和焦点的提示" trigger="both">
          <Button>双重触发</Button>
        </Tooltip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">延迟显示和隐藏</h2>
      <div class="flex gap-4">
        <Tooltip content="延迟500毫秒显示" :openDelay="500">
          <Button>延迟显示</Button>
        </Tooltip>
        <Tooltip content="延迟500毫秒隐藏" :closeDelay="500">
          <Button>延迟隐藏</Button>
        </Tooltip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">禁用箭头</h2>
      <div class="flex gap-4">
        <Tooltip content="这是一个没有箭头的提示" :arrow="false">
          <Button>无箭头</Button>
        </Tooltip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">跟随鼠标</h2>
      <div class="flex gap-4">
        <Tooltip content="这个提示会跟随鼠标移动" :followCursor="true">
          <Button>跟随鼠标</Button>
        </Tooltip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">最大宽度</h2>
      <div class="flex gap-4">
        <Tooltip
          content="这是一个设置了最大宽度的提示，当内容较长时会自动换行显示，避免提示框过宽影响用户体验"
          maxWidth="200px"
        >
          <Button>最大宽度</Button>
        </Tooltip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <div class="flex gap-4">
        <Tooltip
          content="使用pt属性自定义样式"
          :pt="{
            content: 'bg-purple-700 text-white',
            arrow: 'border-purple-700',
          }"
        >
          <Button>自定义样式</Button>
        </Tooltip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="flex gap-4">
        <Tooltip
          content="使用unstyled属性移除所有默认样式"
          unstyled
          :pt="{
            content:
              'bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-lg text-white font-bold shadow-lg',
            arrow: 'border-pink-500',
          }"
        >
          <Button>渐变样式</Button>
        </Tooltip>
        <Tooltip
          content="自定义暗色主题样式"
          unstyled
          :pt="{
            content: 'bg-gray-800 text-gray-100 p-2 rounded-md shadow-md',
            arrow: 'border-gray-800',
          }"
        >
          <Button>暗黑主题</Button>
        </Tooltip>
        <Tooltip
          content="带有动画效果的提示"
          unstyled
          :pt="{
            content:
              'bg-blue-500 text-white p-2 rounded-md shadow-md animate-pulse',
            arrow: 'border-blue-500',
          }"
        >
          <Button>动画效果</Button>
        </Tooltip>
      </div>
    </section>
  </div>
</template>
