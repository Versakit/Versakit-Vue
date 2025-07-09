<script setup>
import { Swap } from '@versakit/vue'
import '@versakit/vue/style'
import { ref } from 'vue'

const isActive = ref(false)
</script>

<template>
  <div class="space-y-4 text-sm">
    <!-- 基本用法和变体效果 -->
    <section>
      <h4 class="text-sm font-medium mb-2">变体效果</h4>
      <div class="flex flex-wrap items-start gap-4">
        <div class="flex flex-col items-center gap-1">
          <span class="text-xs text-gray-500 dark:text-gray-400">基础用法</span>
          <Swap v-model:active="isActive">
            <template #on>
              <div class="bg-primary-500 text-white rounded px-2 py-1 text-xs">
                开启
              </div>
            </template>
            <template #off>
              <div
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"
              >
                关闭
              </div>
            </template>
          </Swap>
        </div>

        <div class="flex flex-col items-center gap-1">
          <span class="text-xs text-gray-500 dark:text-gray-400">淡入淡出</span>
          <Swap variant="fade" v-model:active="isActive">
            <template #on>
              <div
                class="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
              >
                ✓
              </div>
            </template>
            <template #off>
              <div
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs"
              >
                ✗
              </div>
            </template>
          </Swap>
        </div>

        <div class="flex flex-col items-center gap-1">
          <span class="text-xs text-gray-500 dark:text-gray-400">翻转</span>
          <Swap variant="flip" v-model:active="isActive">
            <template #on>
              <div
                class="bg-primary-500 text-white rounded w-6 h-6 flex items-center justify-center text-xs"
              >
                A
              </div>
            </template>
            <template #off>
              <div
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded w-6 h-6 flex items-center justify-center text-xs"
              >
                B
              </div>
            </template>
          </Swap>
        </div>

        <div class="flex flex-col items-center gap-1">
          <span class="text-xs text-gray-500 dark:text-gray-400">旋转</span>
          <Swap variant="rotate" v-model:active="isActive">
            <template #on>
              <div
                class="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
              >
                +
              </div>
            </template>
            <template #off>
              <div
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs"
              >
                -
              </div>
            </template>
          </Swap>
        </div>

        <div class="flex flex-col items-center gap-1">
          <span class="text-xs text-gray-500 dark:text-gray-400">滑动</span>
          <Swap variant="slide" v-model:active="isActive">
            <template #on>
              <div class="bg-primary-500 text-white rounded px-2 py-1 text-xs">
                上
              </div>
            </template>
            <template #off>
              <div
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"
              >
                下
              </div>
            </template>
          </Swap>
        </div>
      </div>
    </section>

    <!-- 尺寸展示 -->
    <section class="border-t pt-2">
      <h4 class="text-sm font-medium mb-2">尺寸</h4>
      <div class="flex flex-wrap items-end gap-4">
        <div class="flex flex-col items-center gap-1">
          <span class="text-xs text-gray-500 dark:text-gray-400">小</span>
          <Swap size="sm" v-model:active="isActive">
            <template #on>
              <div
                class="bg-primary-500 text-white rounded flex items-center justify-center w-4 h-4 text-xs"
              >
                S
              </div>
            </template>
            <template #off>
              <div
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded flex items-center justify-center w-4 h-4 text-xs"
              >
                S
              </div>
            </template>
          </Swap>
        </div>

        <div class="flex flex-col items-center gap-1">
          <span class="text-xs text-gray-500 dark:text-gray-400">中</span>
          <Swap size="md" v-model:active="isActive">
            <template #on>
              <div
                class="bg-primary-500 text-white rounded flex items-center justify-center w-6 h-6 text-xs"
              >
                M
              </div>
            </template>
            <template #off>
              <div
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded flex items-center justify-center w-6 h-6 text-xs"
              >
                M
              </div>
            </template>
          </Swap>
        </div>

        <div class="flex flex-col items-center gap-1">
          <span class="text-xs text-gray-500 dark:text-gray-400">大</span>
          <Swap size="lg" v-model:active="isActive">
            <template #on>
              <div
                class="bg-primary-500 text-white rounded flex items-center justify-center w-8 h-8 text-xs"
              >
                L
              </div>
            </template>
            <template #off>
              <div
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded flex items-center justify-center w-8 h-8 text-xs"
              >
                L
              </div>
            </template>
          </Swap>
        </div>
      </div>
    </section>

    <!-- 触发方式 -->
    <section class="border-t pt-2">
      <h4 class="text-sm font-medium mb-2">触发方式</h4>
      <div class="flex flex-wrap items-center gap-4">
        <div class="flex flex-col items-center gap-1">
          <span class="text-xs text-gray-500 dark:text-gray-400">点击</span>
          <Swap trigger="click" v-model:active="isActive">
            <template #on>
              <div class="bg-primary-500 text-white rounded px-2 py-1 text-xs">
                点击状态
              </div>
            </template>
            <template #off>
              <div
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"
              >
                点击切换
              </div>
            </template>
          </Swap>
        </div>

        <div class="flex flex-col items-center gap-1">
          <span class="text-xs text-gray-500 dark:text-gray-400">悬停</span>
          <Swap trigger="hover" v-model:active="isActive">
            <template #on>
              <div class="bg-primary-500 text-white rounded px-2 py-1 text-xs">
                悬停状态
              </div>
            </template>
            <template #off>
              <div
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"
              >
                悬停切换
              </div>
            </template>
          </Swap>
        </div>

        <div class="flex flex-col items-center gap-1">
          <span class="text-xs text-gray-500 dark:text-gray-400">聚焦</span>
          <Swap trigger="focus" v-model:active="isActive">
            <template #on>
              <div class="bg-primary-500 text-white rounded px-2 py-1 text-xs">
                聚焦状态
              </div>
            </template>
            <template #off>
              <div
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"
              >
                点击聚焦
              </div>
            </template>
          </Swap>
        </div>
      </div>
    </section>

    <!-- 外部控制 -->
    <section class="border-t pt-2">
      <h4 class="text-sm font-medium mb-2">外部控制</h4>
      <div class="flex flex-wrap items-center gap-2">
        <Swap v-model:active="isActive">
          <template #on>
            <div class="bg-primary-500 text-white rounded px-2 py-1 text-xs">
              开启状态
            </div>
          </template>
          <template #off>
            <div
              class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"
            >
              关闭状态
            </div>
          </template>
        </Swap>
        <button
          @click="isActive = !isActive"
          class="px-2 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded text-xs"
        >
          {{ isActive ? '切换为关闭' : '切换为开启' }}
        </button>
      </div>
    </section>
  </div>
</template>

<style>
:root {
  --primary-500: #3b82f6;
}

.bg-primary-500 {
  background-color: var(--primary-500);
}
</style>
