<script setup lang="ts">
import { Alert } from '@versakit/vue'
</script>

<template>
  <div class="space-y-4 p-4">
    <h2 class="text-xl font-bold mb-4">基础用法</h2>
    <Alert title="信息提示" description="这是一条信息提示" />
    <Alert title="成功提示" description="这是一条成功提示" variant="success" />
    <Alert title="警告提示" description="这是一条警告提示" variant="warning" />
    <Alert title="错误提示" description="这是一条错误提示" variant="error" />

    <h2 class="text-xl font-bold mb-4 mt-8">不同尺寸</h2>
    <Alert title="小尺寸" description="这是小尺寸的提示" size="xs" />
    <Alert title="中小尺寸" description="这是中小尺寸的提示" size="sm" />
    <Alert title="中等尺寸" description="这是中等尺寸的提示" size="md" />
    <Alert title="大尺寸" description="这是大尺寸的提示" size="lg" />

    <h2 class="text-xl font-bold mb-4 mt-8">无图标</h2>
    <Alert
      title="无图标提示"
      description="这是一条没有图标的提示"
      :icon="false"
    />

    <h2 class="text-xl font-bold mb-4 mt-8">可关闭</h2>
    <Alert title="可关闭提示" description="这是一条可以关闭的提示" closable />

    <h2 class="text-xl font-bold mb-4 mt-8">不同圆角</h2>
    <div class="space-y-4">
      <Alert title="无圆角" description="这是无圆角的提示" rounded="none" />
      <Alert title="小圆角" description="这是小圆角的提示" rounded="sm" />
      <Alert title="中等圆角" description="这是中等圆角的提示" rounded="md" />
      <Alert title="大圆角" description="这是大圆角的提示" rounded="lg" />
      <Alert title="全圆角" description="这是全圆角的提示" rounded="full" />
    </div>

    <h2 class="text-xl font-bold mb-4 mt-8">无边框</h2>
    <Alert
      title="无边框提示"
      description="这是一条没有边框的提示"
      :border="false"
    />

    <h2 class="text-xl font-bold mb-4 mt-8">带阴影</h2>
    <Alert
      title="带阴影提示"
      description="这是一条带阴影的提示"
      :shadow="true"
    />

    <h2 class="text-xl font-bold mb-4 mt-8">自定义样式 (PT)</h2>
    <Alert
      title="自定义样式"
      description="使用pt属性自定义各部分样式"
      :pt="{
        root: 'bg-purple-100 border-purple-300 text-purple-800',
        icon: 'text-purple-500',
        title: 'font-bold',
        description: 'italic',
      }"
    />

    <h2 class="text-xl font-bold mb-4 mt-8">无样式模式</h2>
    <Alert
      title="无样式模式"
      description="使用unstyled属性移除所有默认样式，完全自定义"
      unstyled
      :pt="{
        root: 'bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-lg text-white',
        icon: 'text-white',
        title: 'font-bold text-lg',
        description: 'opacity-90',
      }"
    />
  </div>
</template>
