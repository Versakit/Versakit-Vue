<script setup lang="ts">
import { Badge } from '@versakit/vue'
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <div class="flex space-x-8">
        <Badge content="5">
          <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
        </Badge>
        <Badge content="99+">
          <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
        </Badge>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">小圆点</h2>
      <Badge dot>
        <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
      </Badge>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同位置</h2>
      <div class="flex space-x-8">
        <Badge content="5" position="top-right">
          <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
        </Badge>
        <Badge content="5" position="top-left">
          <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
        </Badge>
        <Badge content="5" position="bottom-right">
          <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
        </Badge>
        <Badge content="5" position="bottom-left">
          <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
        </Badge>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同颜色</h2>
      <div class="flex space-x-8">
        <Badge content="5" color="primary">
          <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
        </Badge>
        <Badge content="5" color="secondary">
          <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
        </Badge>
        <Badge content="5" color="success">
          <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
        </Badge>
        <Badge content="5" color="warning">
          <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
        </Badge>
        <Badge content="5" color="danger">
          <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
        </Badge>
        <Badge content="5" color="info">
          <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
        </Badge>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同尺寸</h2>
      <div class="flex space-x-8">
        <Badge content="5" size="sm">
          <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
        </Badge>
        <Badge content="5" size="md">
          <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
        </Badge>
        <Badge content="5" size="lg">
          <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
        </Badge>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">最大值</h2>
      <div class="flex space-x-8">
        <Badge :content="100" :max="99">
          <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
        </Badge>
        <Badge :content="1000" :max="999">
          <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
        </Badge>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <div class="flex space-x-8">
        <Badge
          content="5"
          :pt="{
            badge: 'bg-purple-500',
          }"
        >
          <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
        </Badge>
        <Badge
          content="NEW"
          :pt="{
            badge: 'bg-green-500 text-xs',
          }"
        >
          <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
        </Badge>
        <Badge
          dot
          :pt="{
            badge: 'bg-blue-500',
          }"
        >
          <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
        </Badge>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="flex space-x-8">
        <Badge
          content="5"
          unstyled
          :pt="{
            badge:
              'absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs flex items-center justify-center',
          }"
        >
          <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
        </Badge>
        <Badge
          content="HOT"
          unstyled
          :pt="{
            badge:
              'absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded',
          }"
        >
          <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
        </Badge>
        <Badge
          dot
          unstyled
          :pt="{
            badge:
              'absolute top-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white',
          }"
        >
          <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
        </Badge>
      </div>
    </section>
  </div>
</template>
