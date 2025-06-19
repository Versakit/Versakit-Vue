<script setup lang="ts">
import { Badge } from '@versakit/vue'
import '@versakit/vue/style'
</script>

<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="flex gap-6">
        <Badge content="5">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="99+">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <dge dot>
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </dge>
      </div>
    </section>

    <!-- 不同颜色 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同颜色</h2>
      <div class="flex gap-6">
        <Badge content="5" color="primary">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="5" color="secondary">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="5" color="success">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="5" color="warning">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="5" color="danger">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="5" color="info">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>
      </div>
    </section>

    <!-- 不同大小 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同大小</h2>
      <div class="flex gap-6 items-center">
        <Badge content="5" size="sm">
          <div class="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="5" size="md">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="5" size="lg">
          <div class="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>
      </div>
    </section>

    <!-- 不同位置 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同位置</h2>
      <div class="flex gap-6">
        <Badge content="5" position="top-right">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="5" position="top-left">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="5" position="bottom-right">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="5" position="bottom-left">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>
      </div>
    </section>

    <!-- 最大值 -->
    <section>
      <h2 class="text-lg font-medium mb-4">最大值</h2>
      <div class="flex gap-6">
        <Badge :content="100" :max="99">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge :content="1000" :max="999">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>
      </div>
    </section>

    <!-- 自定义内容 -->
    <section>
      <h2 class="text-lg font-medium mb-4">自定义内容</h2>
      <div class="flex gap-6">
        <Badge content="新">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>

        <Badge content="热">
          <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </Badge>
      </div>
    </section>
  </div>
</template>
