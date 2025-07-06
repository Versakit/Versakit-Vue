<script setup lang="ts">
import { Drawer } from '@versakit/vue'
import { ref } from 'vue'

// 基础用法
const showBasicDrawer = ref(false)

// 不同位置
const showLeftDrawer = ref(false)
const showRightDrawer = ref(false)
const showTopDrawer = ref(false)
const showBottomDrawer = ref(false)

// 带标题
const showTitleDrawer = ref(false)

// 自定义尺寸
const showCustomSizeDrawer = ref(false)

// 自定义头部和底部
const showCustomDrawer = ref(false)
</script>

<template>
  <div class="space-y-6">
    <!-- 基础用法 -->
    <div class="mb-4">
      <h3 class="text-lg font-medium mb-2">基础用法</h3>
      <button
        @click="showBasicDrawer = true"
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"
      >
        打开基础抽屉
      </button>

      <Drawer v-model="showBasicDrawer" @close="console.log('基础抽屉关闭了')">
        <p class="text-gray-600">这是一个基础抽屉，默认从右侧滑出。</p>
      </Drawer>
    </div>

    <!-- 不同位置 -->
    <div class="mb-4">
      <h3 class="text-lg font-medium mb-2">不同位置</h3>
      <div class="flex gap-2 flex-wrap">
        <button
          @click="showLeftDrawer = true"
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"
        >
          左侧抽屉
        </button>
        <button
          @click="showRightDrawer = true"
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"
        >
          右侧抽屉
        </button>
        <button
          @click="showTopDrawer = true"
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"
        >
          顶部抽屉
        </button>
        <button
          @click="showBottomDrawer = true"
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"
        >
          底部抽屉
        </button>
      </div>

      <Drawer v-model="showLeftDrawer" placement="left" title="左侧抽屉">
        <p class="text-gray-600">这是一个从左侧滑出的抽屉。</p>
      </Drawer>

      <Drawer v-model="showRightDrawer" placement="right" title="右侧抽屉">
        <p class="text-gray-600">这是一个从右侧滑出的抽屉。</p>
      </Drawer>

      <Drawer v-model="showTopDrawer" placement="top" title="顶部抽屉">
        <p class="text-gray-600">这是一个从顶部滑出的抽屉。</p>
      </Drawer>

      <Drawer v-model="showBottomDrawer" placement="bottom" title="底部抽屉">
        <p class="text-gray-600">这是一个从底部滑出的抽屉。</p>
      </Drawer>
    </div>

    <!-- 带标题 -->
    <div class="mb-4">
      <h3 class="text-lg font-medium mb-2">带标题</h3>
      <button
        @click="showTitleDrawer = true"
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"
      >
        打开带标题抽屉
      </button>

      <Drawer v-model="showTitleDrawer" title="这是标题">
        <p class="text-gray-600">这是一个带标题的抽屉。</p>
      </Drawer>
    </div>

    <!-- 自定义尺寸 -->
    <div class="mb-4">
      <h3 class="text-lg font-medium mb-2">自定义尺寸</h3>
      <button
        @click="showCustomSizeDrawer = true"
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"
      >
        打开宽抽屉
      </button>

      <Drawer v-model="showCustomSizeDrawer" title="宽抽屉" size="500px">
        <p class="text-gray-600">这是一个宽度为 500px 的抽屉。</p>
      </Drawer>
    </div>

    <!-- 自定义头部和底部 -->
    <div class="mb-4">
      <h3 class="text-lg font-medium mb-2">自定义头部和底部</h3>
      <button
        @click="showCustomDrawer = true"
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"
      >
        打开自定义抽屉
      </button>

      <Drawer v-model="showCustomDrawer">
        <template #header>
          <div class="flex items-center">
            <div class="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <h3 class="text-lg font-medium">自定义头部</h3>
          </div>
        </template>

        <p class="text-gray-600">这是一个带自定义头部和底部的抽屉。</p>

        <template #footer>
          <div class="flex justify-end gap-2">
            <button
              @click="showCustomDrawer = false"
              class="px-3 py-1 border border-gray-300 rounded"
            >
              取消
            </button>
            <button
              @click="showCustomDrawer = false"
              class="px-3 py-1 bg-blue-500 text-white rounded"
            >
              确认
            </button>
          </div>
        </template>
      </Drawer>
    </div>
  </div>
</template>
