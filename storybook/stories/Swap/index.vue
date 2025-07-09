<script setup lang="ts">
import { Swap } from '@versakit/vue'
import { ref } from 'vue'

const isActive = ref(false)
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <div class="flex flex-wrap gap-4">
        <Swap v-model:active="isActive">
          <template #on>
            <div class="bg-blue-500 text-white rounded px-3 py-1.5">
              开启状态
            </div>
          </template>
          <template #off>
            <div
              class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-3 py-1.5"
            >
              关闭状态
            </div>
          </template>
        </Swap>
        <button
          @click="isActive = !isActive"
          class="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded"
        >
          {{ isActive ? '切换为关闭' : '切换为开启' }}
        </button>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">变体效果</h2>
      <div class="flex flex-wrap gap-6 items-end">
        <div class="flex flex-col items-center gap-2">
          <span class="text-sm text-gray-500 dark:text-gray-400">淡入淡出</span>
          <Swap variant="fade" v-model:active="isActive">
            <template #on>
              <div
                class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
              >
                ✓
              </div>
            </template>
            <template #off>
              <div
                class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
              >
                ✗
              </div>
            </template>
          </Swap>
        </div>

        <div class="flex flex-col items-center gap-2">
          <span class="text-sm text-gray-500 dark:text-gray-400">翻转</span>
          <Swap variant="flip" v-model:active="isActive">
            <template #on>
              <div
                class="bg-yellow-500 text-white rounded w-8 h-8 flex items-center justify-center"
              >
                A
              </div>
            </template>
            <template #off>
              <div
                class="bg-orange-500 text-white rounded w-8 h-8 flex items-center justify-center"
              >
                B
              </div>
            </template>
          </Swap>
        </div>

        <div class="flex flex-col items-center gap-2">
          <span class="text-sm text-gray-500 dark:text-gray-400">旋转</span>
          <Swap variant="rotate" v-model:active="isActive">
            <template #on>
              <div
                class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
              >
                +
              </div>
            </template>
            <template #off>
              <div
                class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
              >
                -
              </div>
            </template>
          </Swap>
        </div>

        <div class="flex flex-col items-center gap-2">
          <span class="text-sm text-gray-500 dark:text-gray-400">滑动</span>
          <Swap variant="slide" v-model:active="isActive">
            <template #on>
              <div class="bg-blue-500 text-white rounded px-3 py-1.5">向上</div>
            </template>
            <template #off>
              <div class="bg-cyan-500 text-white rounded px-3 py-1.5">向下</div>
            </template>
          </Swap>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">尺寸</h2>
      <div class="flex flex-wrap gap-6 items-end">
        <div class="flex flex-col items-center gap-2">
          <span class="text-sm text-gray-500 dark:text-gray-400">小 (sm)</span>
          <Swap size="sm" v-model:active="isActive">
            <template #on>
              <div
                class="bg-rose-500 text-white rounded flex items-center justify-center w-6 h-6"
              >
                S
              </div>
            </template>
            <template #off>
              <div
                class="bg-pink-500 text-white rounded flex items-center justify-center w-6 h-6"
              >
                S
              </div>
            </template>
          </Swap>
        </div>

        <div class="flex flex-col items-center gap-2">
          <span class="text-sm text-gray-500 dark:text-gray-400">中 (md)</span>
          <Swap size="md" v-model:active="isActive">
            <template #on>
              <div
                class="bg-rose-500 text-white rounded flex items-center justify-center w-8 h-8"
              >
                M
              </div>
            </template>
            <template #off>
              <div
                class="bg-pink-500 text-white rounded flex items-center justify-center w-8 h-8"
              >
                M
              </div>
            </template>
          </Swap>
        </div>

        <div class="flex flex-col items-center gap-2">
          <span class="text-sm text-gray-500 dark:text-gray-400">大 (lg)</span>
          <Swap size="lg" v-model:active="isActive">
            <template #on>
              <div
                class="bg-rose-500 text-white rounded flex items-center justify-center w-10 h-10"
              >
                L
              </div>
            </template>
            <template #off>
              <div
                class="bg-pink-500 text-white rounded flex items-center justify-center w-10 h-10"
              >
                L
              </div>
            </template>
          </Swap>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">触发方式</h2>
      <div class="flex flex-wrap gap-6">
        <div class="flex flex-col items-center gap-2">
          <span class="text-sm text-gray-500 dark:text-gray-400">
            点击 (click)
          </span>
          <Swap trigger="click">
            <template #on>
              <div class="bg-blue-500 text-white rounded px-3 py-1.5">
                点击状态
              </div>
            </template>
            <template #off>
              <div
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-3 py-1.5"
              >
                点击切换
              </div>
            </template>
          </Swap>
        </div>

        <div class="flex flex-col items-center gap-2">
          <span class="text-sm text-gray-500 dark:text-gray-400">
            悬停 (hover)
          </span>
          <Swap trigger="hover">
            <template #on>
              <div class="bg-teal-500 text-white rounded px-3 py-1.5">
                悬停状态
              </div>
            </template>
            <template #off>
              <div class="bg-emerald-500 text-white rounded px-3 py-1.5">
                悬停切换
              </div>
            </template>
          </Swap>
        </div>

        <div class="flex flex-col items-center gap-2">
          <span class="text-sm text-gray-500 dark:text-gray-400">
            聚焦 (focus)
          </span>
          <Swap trigger="focus">
            <template #on>
              <div class="bg-amber-500 text-white rounded px-3 py-1.5">
                聚焦状态
              </div>
            </template>
            <template #off>
              <div class="bg-yellow-500 text-white rounded px-3 py-1.5">
                点击聚焦
              </div>
            </template>
          </Swap>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
      <div class="flex flex-wrap gap-4">
        <Swap disabled>
          <template #on>
            <div class="bg-blue-500 text-white rounded px-3 py-1.5">
              开启状态
            </div>
          </template>
          <template #off>
            <div
              class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-3 py-1.5"
            >
              禁用状态
            </div>
          </template>
        </Swap>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <div class="flex flex-wrap gap-4">
        <Swap
          :pt="{
            root: 'shadow-lg hover:shadow-xl transition-all',
            on: 'transform-gpu transition-all',
            off: 'transform-gpu transition-all',
          }"
        >
          <template #on>
            <div
              class="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full"
            >
              🌙
            </div>
          </template>
          <template #off>
            <div
              class="bg-gradient-to-r from-orange-400 to-yellow-300 text-white p-3 rounded-full"
            >
              ☀️
            </div>
          </template>
        </Swap>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="flex flex-wrap gap-4">
        <Swap
          unstyled
          :pt="{
            root: 'relative inline-block',
            on: 'absolute top-0 left-0 transition-all duration-500 ease-in-out',
            off: 'transition-all duration-500 ease-in-out',
          }"
        >
          <template #on>
            <div
              class="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full text-white shadow-lg"
            >
              ✨
            </div>
          </template>
          <template #off>
            <div
              class="bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded-full text-white shadow-lg"
            >
              🔄
            </div>
          </template>
        </Swap>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">应用场景示例：主题切换</h2>
      <div class="flex items-center gap-4">
        <Swap variant="flip">
          <template #on>
            <div
              class="bg-blue-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
            >
              🌙
            </div>
          </template>
          <template #off>
            <div
              class="bg-amber-400 text-white rounded-full w-10 h-10 flex items-center justify-center"
            >
              ☀️
            </div>
          </template>
        </Swap>
        <span>切换深色/浅色模式</span>
      </div>
    </section>
  </div>
</template>
