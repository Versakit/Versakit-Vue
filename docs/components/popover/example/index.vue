<script setup lang="ts">
import { ref } from 'vue'
// 暂时不管导入错误，后面再解决
import { Popover } from '@versakit/vue'
import '@versakit/vue/style'

// 基础用法示例
const isBasicOpen = ref(false)

// 不同触发方式示例
const isManualOpen = ref(false)

const toggleManual = () => {
  isManualOpen.value = !isManualOpen.value
}

// 带标题示例
const isWithTitleOpen = ref(false)

// 自定义宽度示例
const isCustomWidthOpen = ref(false)

// 禁用状态示例
const isDisabledOpen = ref(false)
</script>

<template>
  <div class="space-y-12">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="flex items-center space-x-4">
        <Popover v-model="isBasicOpen">
          <template #trigger>
            <div
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              点击显示弹出框
            </div>
          </template>
          这是一个基础的弹出框内容
        </Popover>
      </div>
    </section>

    <!-- 不同位置 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同位置</h2>
      <div class="flex justify-center items-center space-x-8 mb-6">
        <!-- 顶部 -->
        <Popover placement="top">
          <template #trigger>
            <div
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              顶部
            </div>
          </template>
          弹出位置: 顶部 (top)
        </Popover>

        <!-- 右侧 -->
        <Popover placement="right">
          <template #trigger>
            <div
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              右侧
            </div>
          </template>
          弹出位置: 右侧 (right)
        </Popover>

        <!-- 底部 -->
        <Popover placement="bottom">
          <template #trigger>
            <div
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              底部
            </div>
          </template>
          弹出位置: 底部 (bottom)
        </Popover>

        <!-- 左侧 -->
        <Popover placement="left">
          <template #trigger>
            <div
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              左侧
            </div>
          </template>
          弹出位置: 左侧 (left)
        </Popover>
      </div>
    </section>

    <!-- 不同触发方式 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同触发方式</h2>
      <div class="flex items-center space-x-4">
        <Popover trigger="click">
          <template #trigger>
            <div
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              点击触发
            </div>
          </template>
          点击触发的弹出框
        </Popover>

        <Popover trigger="hover">
          <template #trigger>
            <div
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              悬停触发
            </div>
          </template>
          悬停触发的弹出框
        </Popover>

        <Popover v-model="isManualOpen" trigger="manual">
          <template #trigger>
            <div
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
              @click="toggleManual"
            >
              手动触发
            </div>
          </template>
          手动控制的弹出框
        </Popover>
      </div>
    </section>

    <!-- 带标题 -->
    <section>
      <h2 class="text-lg font-medium mb-4">带标题</h2>
      <div class="flex items-center space-x-4">
        <Popover v-model="isWithTitleOpen" title="弹出框标题">
          <template #trigger>
            <div
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              带标题的弹出框
            </div>
          </template>
          这是带有标题的弹出框内容
        </Popover>
      </div>
    </section>

    <!-- 自定义宽度 -->
    <section>
      <h2 class="text-lg font-medium mb-4">自定义宽度</h2>
      <div class="flex items-center space-x-4">
        <Popover v-model="isCustomWidthOpen" :width="300">
          <template #trigger>
            <div
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              自定义宽度
            </div>
          </template>
          这是一个宽度为300px的弹出框，可以显示更多的内容。你可以根据需要自定义弹出框的宽度，以适应不同的内容展示需求。
        </Popover>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">禁用状态</h2>
      <div class="flex items-center space-x-4">
        <Popover v-model="isDisabledOpen" disabled>
          <template #trigger>
            <div
              class="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed"
            >
              禁用状态
            </div>
          </template>
          这个弹出框被禁用了，无法显示
        </Popover>
      </div>
    </section>
  </div>
</template>
