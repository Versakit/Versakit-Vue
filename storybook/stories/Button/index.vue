<script setup lang="ts">
import { Button } from '@versakit/vue'
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <div class="flex flex-wrap gap-4">
        <Button>默认按钮</Button>
        <Button color="primary">主要按钮</Button>
        <Button color="success">成功按钮</Button>
        <Button color="warning">警告按钮</Button>
        <Button color="danger">危险按钮</Button>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">按钮变体</h2>
      <div class="flex flex-wrap gap-4">
        <Button color="primary" variant="solid">实心按钮</Button>
        <Button color="primary" variant="outline">轮廓按钮</Button>
        <Button color="primary" variant="ghost">幽灵按钮</Button>
        <Button color="primary" variant="link">链接按钮</Button>
        <Button color="primary" variant="light">浅色按钮</Button>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">按钮尺寸</h2>
      <div class="flex flex-wrap gap-4 items-center">
        <Button size="xs">超小按钮</Button>
        <Button size="sm">小按钮</Button>
        <Button size="md">中等按钮</Button>
        <Button size="lg">大按钮</Button>
        <Button size="xl">超大按钮</Button>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">圆角样式</h2>
      <div class="flex flex-wrap gap-4">
        <Button rounded="none">无圆角</Button>
        <Button rounded="sm">小圆角</Button>
        <Button rounded="md">中圆角</Button>
        <Button rounded="lg">大圆角</Button>
        <Button rounded="full">全圆角</Button>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
      <div class="flex flex-wrap gap-4">
        <Button disabled>禁用按钮</Button>
        <Button color="primary" disabled>禁用主要按钮</Button>
        <Button color="primary" variant="outline" disabled>禁用轮廓按钮</Button>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">加载状态</h2>
      <div class="flex flex-wrap gap-4">
        <Button loading>加载中</Button>
        <Button color="primary" loading>加载中</Button>
        <Button color="success" loading>加载中</Button>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">块级按钮</h2>
      <div class="space-y-4">
        <Button block>块级按钮</Button>
        <Button color="primary" block>主要块级按钮</Button>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <div class="flex flex-wrap gap-4">
        <Button
          :pt="{
            root: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold',
          }"
        >
          渐变背景
        </Button>
        <Button
          :pt="{
            root: 'border-dashed border-2 border-purple-500 text-purple-500 hover:bg-purple-50',
          }"
        >
          虚线边框
        </Button>
        <Button
          color="primary"
          loading
          :pt="{
            loading: 'text-yellow-300',
          }"
        >
          自定义加载图标
        </Button>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="flex flex-wrap gap-4">
        <Button
          unstyled
          :pt="{
            root: 'bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300',
          }"
        >
          完全自定义按钮
        </Button>
        <Button
          unstyled
          :pt="{
            root: 'bg-transparent border-2 border-green-500 text-green-500 p-2 rounded-lg hover:bg-green-500 hover:text-white transition-colors',
          }"
        >
          自定义悬停效果
        </Button>
        <Button
          unstyled
          loading
          :pt="{
            root: 'bg-amber-500 text-white p-2 rounded-md',
            loading: 'animate-ping text-white',
          }"
        >
          自定义加载动画
        </Button>
      </div>
    </section>
  </div>
</template>
