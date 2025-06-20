<script setup lang="ts">
import { ref } from 'vue'
import { Drawer } from '@versakit/vue'
import '@versakit/vue/style'

const isDrawerOpen = ref(false)
const isLeftDrawerOpen = ref(false)
const isTopDrawerOpen = ref(false)
const isBottomDrawerOpen = ref(false)
const isNoOverlayDrawerOpen = ref(false)
const isCustomSizeDrawerOpen = ref(false)

const openDrawer = () => {
  isDrawerOpen.value = true
}

const openLeftDrawer = () => {
  isLeftDrawerOpen.value = true
}

const openTopDrawer = () => {
  isTopDrawerOpen.value = true
}

const openBottomDrawer = () => {
  isBottomDrawerOpen.value = true
}

const openNoOverlayDrawer = () => {
  isNoOverlayDrawerOpen.value = true
}

const openCustomSizeDrawer = () => {
  isCustomSizeDrawerOpen.value = true
}
</script>

<template>
  <div class="space-y-8">
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="flex gap-4">
        <button
          @click="openDrawer"
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"
        >
          打开右侧抽屉
        </button>

        <Drawer v-model="isDrawerOpen" title="右侧抽屉">
          <div class="p-4">
            <p>这是一个基础的右侧抽屉示例</p>
          </div>
        </Drawer>
      </div>
    </section>

    <section>
      <h2 class="text-lg font-medium mb-4">不同位置</h2>
      <div class="flex gap-4">
        <button
          @click="openLeftDrawer"
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"
        >
          左侧抽屉
        </button>

        <button
          @click="openTopDrawer"
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"
        >
          顶部抽屉
        </button>

        <button
          @click="openBottomDrawer"
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"
        >
          底部抽屉
        </button>

        <Drawer v-model="isLeftDrawerOpen" placement="left" title="左侧抽屉">
          <div class="p-4">
            <p>这是一个左侧抽屉示例</p>
          </div>
        </Drawer>

        <Drawer v-model="isTopDrawerOpen" placement="top" title="顶部抽屉">
          <div class="p-4">
            <p>这是一个顶部抽屉示例</p>
          </div>
        </Drawer>

        <Drawer
          v-model="isBottomDrawerOpen"
          placement="bottom"
          title="底部抽屉"
        >
          <div class="p-4">
            <p>这是一个底部抽屉示例</p>
          </div>
        </Drawer>
      </div>
    </section>

    <section>
      <h2 class="text-lg font-medium mb-4">无遮罩层</h2>
      <div class="flex gap-4">
        <button
          @click="openNoOverlayDrawer"
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"
        >
          无遮罩层抽屉
        </button>

        <Drawer
          v-model="isNoOverlayDrawerOpen"
          :showOverlay="false"
          title="无遮罩层"
        >
          <div class="p-4">
            <p>这是一个无遮罩层的抽屉示例</p>
            <p>点击关闭按钮关闭抽屉</p>
          </div>
        </Drawer>
      </div>
    </section>

    <section>
      <h2 class="text-lg font-medium mb-4">自定义大小</h2>
      <div class="flex gap-4">
        <button
          @click="openCustomSizeDrawer"
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"
        >
          自定义大小抽屉
        </button>

        <Drawer
          v-model="isCustomSizeDrawerOpen"
          size="500px"
          title="自定义大小"
        >
          <div class="p-4">
            <p>这是一个自定义大小的抽屉示例，宽度为500px</p>
          </div>
        </Drawer>
      </div>
    </section>

    <section>
      <h2 class="text-lg font-medium mb-4">自定义页脚</h2>
      <div class="flex gap-4">
        <button
          @click="isDrawerOpen = true"
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"
        >
          带页脚的抽屉
        </button>

        <Drawer v-model="isDrawerOpen" title="自定义页脚">
          <div class="p-4">
            <p>这是一个带有自定义页脚的抽屉示例</p>
          </div>

          <template #footer>
            <button
              @click="isDrawerOpen = false"
              class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              取消
            </button>
            <button
              @click="isDrawerOpen = false"
              class="px-4 py-2 bg-black text-white rounded"
            >
              确认
            </button>
          </template>
        </Drawer>
      </div>
    </section>
  </div>
</template>
