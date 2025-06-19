<script setup lang="ts">
import { Tooltip } from '@versakit/vue'
import '@versakit/vue/style'

// 示例数据
const longText =
  '这是一段较长的提示文本，用于演示文本换行和最大宽度的效果。当文本内容较多时，提示框会自动换行显示。'
</script>

<template>
  <div class="space-y-12">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="flex items-center space-x-4">
        <Tooltip content="这是一个基础提示">
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            悬停查看提示
          </div>
        </Tooltip>
      </div>
    </section>

    <!-- 不同位置 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同位置</h2>
      <div class="grid grid-cols-2 gap-6 max-w-md">
        <Tooltip content="顶部提示" placement="top">
          <div
            class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-center"
          >
            顶部
          </div>
        </Tooltip>

        <Tooltip content="右侧提示" placement="right">
          <div
            class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-center"
          >
            右侧
          </div>
        </Tooltip>

        <Tooltip content="底部提示" placement="bottom">
          <div
            class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-center"
          >
            底部
          </div>
        </Tooltip>

        <Tooltip content="左侧提示" placement="left">
          <div
            class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-center"
          >
            左侧
          </div>
        </Tooltip>
      </div>
    </section>

    <!-- 不同颜色 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同颜色</h2>
      <div class="flex flex-wrap gap-4">
        <Tooltip content="默认提示" color="default">
          <div class="px-4 py-2 bg-gray-500 text-white rounded cursor-pointer">
            默认
          </div>
        </Tooltip>

        <Tooltip content="主要提示" color="primary">
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            主要
          </div>
        </Tooltip>

        <Tooltip content="成功提示" color="success">
          <div class="px-4 py-2 bg-green-500 text-white rounded cursor-pointer">
            成功
          </div>
        </Tooltip>

        <Tooltip content="警告提示" color="warning">
          <div
            class="px-4 py-2 bg-yellow-500 text-white rounded cursor-pointer"
          >
            警告
          </div>
        </Tooltip>

        <Tooltip content="危险提示" color="danger">
          <div class="px-4 py-2 bg-red-500 text-white rounded cursor-pointer">
            危险
          </div>
        </Tooltip>
      </div>
    </section>

    <!-- 不同触发方式 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同触发方式</h2>
      <div class="flex items-center space-x-4">
        <Tooltip content="鼠标悬停触发" trigger="hover">
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            悬停触发
          </div>
        </Tooltip>

        <Tooltip content="获取焦点触发" trigger="focus">
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
          >
            焦点触发
          </button>
        </Tooltip>

        <Tooltip content="悬停或焦点都可触发" trigger="both">
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
          >
            双重触发
          </button>
        </Tooltip>
      </div>
    </section>

    <!-- 延迟显示和隐藏 -->
    <section>
      <h2 class="text-lg font-medium mb-4">延迟显示和隐藏</h2>
      <div class="flex items-center space-x-4">
        <Tooltip content="延迟500毫秒显示" :openDelay="500">
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            延迟显示
          </div>
        </Tooltip>

        <Tooltip content="延迟500毫秒隐藏" :closeDelay="500">
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            延迟隐藏
          </div>
        </Tooltip>
      </div>
    </section>

    <!-- 最大宽度和长文本 -->
    <section>
      <h2 class="text-lg font-medium mb-4">最大宽度和长文本</h2>
      <div class="flex items-center space-x-4">
        <Tooltip :content="longText" :maxWidth="200">
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            长文本提示
          </div>
        </Tooltip>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">禁用状态</h2>
      <div class="flex items-center space-x-4">
        <Tooltip content="这个提示不会显示" disabled>
          <div
            class="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed"
          >
            禁用提示
          </div>
        </Tooltip>
      </div>
    </section>

    <!-- 无箭头 -->
    <section>
      <h2 class="text-lg font-medium mb-4">无箭头</h2>
      <div class="flex items-center space-x-4">
        <Tooltip content="这个提示没有箭头" :arrow="false">
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            无箭头提示
          </div>
        </Tooltip>
      </div>
    </section>
  </div>
</template>
