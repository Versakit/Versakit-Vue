<script setup lang="ts">
import { Modal } from '@versakit/vue'
import { ref } from 'vue'

// 基础用法
const showBasicModal = ref(false)

// 带标题
const showTitleModal = ref(false)

// 不同尺寸
const showSmallModal = ref(false)
const showLargeModal = ref(false)

// 自定义头部和底部
const showCustomModal = ref(false)

// 禁用点击遮罩层关闭
const showNoOverlayCloseModal = ref(false)
</script>

<template>
  <div class="space-y-4">
    <!-- 基础用法 -->
    <div class="mb-4">
      <h3 class="text-lg font-medium mb-2">基础用法</h3>
      <button
        @click="showBasicModal = true"
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"
      >
        打开基础模态框
      </button>

      <Modal v-model="showBasicModal" @close="console.log('基础模态框关闭了')">
        <p class="text-gray-600">这是一个基础模态框，没有标题和底部。</p>
      </Modal>
    </div>

    <!-- 带标题 -->
    <div class="mb-4">
      <h3 class="text-lg font-medium mb-2">带标题</h3>
      <button
        @click="showTitleModal = true"
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"
      >
        打开带标题模态框
      </button>

      <Modal
        v-model="showTitleModal"
        title="这是标题"
        @close="console.log('带标题模态框关闭了')"
      >
        <p class="text-gray-600">这是一个带标题的模态框。</p>
      </Modal>
    </div>

    <!-- 不同尺寸 -->
    <div class="mb-4">
      <h3 class="text-lg font-medium mb-2">不同尺寸</h3>
      <div class="flex gap-2">
        <button
          @click="showSmallModal = true"
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"
        >
          小尺寸
        </button>
        <button
          @click="showLargeModal = true"
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"
        >
          大尺寸
        </button>
      </div>

      <Modal v-model="showSmallModal" title="小尺寸模态框" size="sm">
        <p class="text-gray-600">这是一个小尺寸的模态框。</p>
      </Modal>

      <Modal v-model="showLargeModal" title="大尺寸模态框" size="2xl">
        <p class="text-gray-600">这是一个大尺寸的模态框。</p>
      </Modal>
    </div>

    <!-- 自定义头部和底部 -->
    <div class="mb-4">
      <h3 class="text-lg font-medium mb-2">自定义头部和底部</h3>
      <button
        @click="showCustomModal = true"
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"
      >
        打开自定义模态框
      </button>

      <Modal v-model="showCustomModal">
        <template #header>
          <div class="flex items-center">
            <div class="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <h3 class="text-lg font-medium">自定义头部</h3>
          </div>
        </template>

        <p class="text-gray-600">这是一个带自定义头部和底部的模态框。</p>

        <template #footer>
          <div class="flex justify-end gap-2">
            <button
              @click="showCustomModal = false"
              class="px-3 py-1 border border-gray-300 rounded"
            >
              取消
            </button>
            <button
              @click="showCustomModal = false"
              class="px-3 py-1 bg-blue-500 text-white rounded"
            >
              确认
            </button>
          </div>
        </template>
      </Modal>
    </div>

    <!-- 禁用点击遮罩层关闭 -->
    <div class="mb-4">
      <h3 class="text-lg font-medium mb-2">禁用点击遮罩层关闭</h3>
      <button
        @click="showNoOverlayCloseModal = true"
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"
      >
        打开模态框
      </button>

      <Modal
        v-model="showNoOverlayCloseModal"
        title="禁用点击遮罩层关闭"
        :closeOnOverlayClick="false"
      >
        <p class="text-gray-600">
          点击遮罩层不会关闭此模态框，只能点击右上角的关闭按钮或按 ESC 键关闭。
        </p>
        <div class="mt-4 flex justify-end">
          <button
            @click="showNoOverlayCloseModal = false"
            class="px-3 py-1 bg-blue-500 text-white rounded"
          >
            关闭
          </button>
        </div>
      </Modal>
    </div>
  </div>
</template>
