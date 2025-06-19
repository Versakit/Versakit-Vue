<script setup lang="ts">
import { ref } from 'vue'
// 暂时不管导入错误，后面再解决
import { Popover } from '@versakit/vue'
import '@versakit/vue/style'

// 基础用法示例
const isBasicOpen = ref(false)

// 不同位置示例
// 我们不再使用这个变量，因为我们现在手动创建每个位置的Popover
// const positions = [
//   'top',
//   'right',
//   'bottom',
//   'left',
//   'top-start',
//   'top-end',
//   'right-start',
//   'right-end',
//   'bottom-start',
//   'bottom-end',
//   'left-start',
//   'left-end',
// ]

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
      <div class="flex justify-center w-full mb-10">
        <div class="grid grid-cols-3 gap-3 w-[600px]">
          <!-- 顶部行 -->
          <div class="col-start-1 col-span-1 flex justify-center">
            <Popover placement="top-start">
              <template #trigger>
                <div
                  class="px-3 py-2 bg-blue-500 text-white rounded cursor-pointer text-sm"
                >
                  top-start
                </div>
              </template>
              弹出位置: top-start
            </Popover>
          </div>
          <div class="col-span-1 flex justify-center">
            <Popover placement="top">
              <template #trigger>
                <div
                  class="px-3 py-2 bg-blue-500 text-white rounded cursor-pointer text-sm"
                >
                  top
                </div>
              </template>
              弹出位置: top
            </Popover>
          </div>
          <div class="col-span-1 flex justify-center">
            <Popover placement="top-end">
              <template #trigger>
                <div
                  class="px-3 py-2 bg-blue-500 text-white rounded cursor-pointer text-sm"
                >
                  top-end
                </div>
              </template>
              弹出位置: top-end
            </Popover>
          </div>

          <!-- 中间行 -->
          <div class="flex justify-start items-center mt-8 mb-8">
            <Popover placement="left-start">
              <template #trigger>
                <div
                  class="px-3 py-2 bg-blue-500 text-white rounded cursor-pointer text-sm"
                >
                  left-start
                </div>
              </template>
              弹出位置: left-start
            </Popover>
          </div>
          <div class="col-span-1"></div>
          <div class="flex justify-end items-center">
            <Popover placement="right-start">
              <template #trigger>
                <div
                  class="px-3 py-2 bg-blue-500 text-white rounded cursor-pointer text-sm"
                >
                  right-start
                </div>
              </template>
              弹出位置: right-start
            </Popover>
          </div>

          <div class="flex justify-start items-center mb-8">
            <Popover placement="left">
              <template #trigger>
                <div
                  class="px-3 py-2 bg-blue-500 text-white rounded cursor-pointer text-sm"
                >
                  left
                </div>
              </template>
              弹出位置: left
            </Popover>
          </div>
          <div class="col-span-1"></div>
          <div class="flex justify-end items-center">
            <Popover placement="right">
              <template #trigger>
                <div
                  class="px-3 py-2 bg-blue-500 text-white rounded cursor-pointer text-sm"
                >
                  right
                </div>
              </template>
              弹出位置: right
            </Popover>
          </div>

          <div class="flex justify-start items-center">
            <Popover placement="left-end">
              <template #trigger>
                <div
                  class="px-3 py-2 bg-blue-500 text-white rounded cursor-pointer text-sm"
                >
                  left-end
                </div>
              </template>
              弹出位置: left-end
            </Popover>
          </div>
          <div class="col-span-1"></div>
          <div class="flex justify-end items-center">
            <Popover placement="right-end">
              <template #trigger>
                <div
                  class="px-3 py-2 bg-blue-500 text-white rounded cursor-pointer text-sm"
                >
                  right-end
                </div>
              </template>
              弹出位置: right-end
            </Popover>
          </div>

          <!-- 底部行 -->
          <div class="col-start-1 col-span-1 flex justify-center mt-8">
            <Popover placement="bottom-start">
              <template #trigger>
                <div
                  class="px-3 py-2 bg-blue-500 text-white rounded cursor-pointer text-sm"
                >
                  bottom-start
                </div>
              </template>
              弹出位置: bottom-start
            </Popover>
          </div>
          <div class="col-span-1 flex justify-center">
            <Popover placement="bottom">
              <template #trigger>
                <div
                  class="px-3 py-2 bg-blue-500 text-white rounded cursor-pointer text-sm"
                >
                  bottom
                </div>
              </template>
              弹出位置: bottom
            </Popover>
          </div>
          <div class="col-span-1 flex justify-center">
            <Popover placement="bottom-end">
              <template #trigger>
                <div
                  class="px-3 py-2 bg-blue-500 text-white rounded cursor-pointer text-sm"
                >
                  bottom-end
                </div>
              </template>
              弹出位置: bottom-end
            </Popover>
          </div>
        </div>
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
