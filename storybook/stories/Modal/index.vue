<script setup lang="ts">
import { ref } from 'vue'
import { Modal, Button } from '@versakit/vue'

const basicModalOpen = ref(false)
const sizeModalOpen = ref(false)
const customStyleModalOpen = ref(false)
const unstyledModalOpen = ref(false)
const footerModalOpen = ref(false)
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <Button @click="basicModalOpen = true">打开基础模态框</Button>
      <Modal v-model="basicModalOpen" title="基础模态框">
        <p>这是一个基础的模态框内容</p>
        <p class="mt-4">模态框支持按ESC键或点击遮罩层关闭</p>
      </Modal>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同尺寸</h2>
      <Button @click="sizeModalOpen = true">打开大尺寸模态框</Button>
      <Modal v-model="sizeModalOpen" title="大尺寸模态框" size="2xl">
        <p>这是一个大尺寸的模态框内容</p>
        <p class="mt-4">
          模态框支持多种尺寸：sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, full
        </p>
      </Modal>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义底部</h2>
      <Button @click="footerModalOpen = true">打开带底部的模态框</Button>
      <Modal v-model="footerModalOpen" title="带底部的模态框">
        <p>这是一个带底部按钮的模态框内容</p>
        <template #footer>
          <div class="flex justify-end gap-2">
            <Button variant="outline" @click="footerModalOpen = false">
              取消
            </Button>
            <Button @click="footerModalOpen = false">确认</Button>
          </div>
        </template>
      </Modal>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <Button @click="customStyleModalOpen = true">打开自定义样式模态框</Button>
      <Modal
        v-model="customStyleModalOpen"
        title="自定义样式"
        :pt="{
          overlay: 'bg-blue-900/50 backdrop-blur-md',
          content: 'border-2 border-blue-500',
          header: 'bg-blue-50 dark:bg-blue-900',
          title: 'text-blue-700 dark:text-blue-300',
          body: 'bg-white dark:bg-gray-800 p-6',
          footer: 'bg-blue-50 dark:bg-blue-900',
          closeButton:
            'text-blue-700 hover:bg-blue-100 dark:text-blue-300 dark:hover:bg-blue-800',
        }"
      >
        <p>这是一个使用pt属性自定义样式的模态框内容</p>
        <p class="mt-4">可以自定义遮罩层、内容区、标题、底部等样式</p>
        <template #footer>
          <div class="flex justify-end gap-2">
            <Button variant="outline" @click="customStyleModalOpen = false">
              取消
            </Button>
            <Button @click="customStyleModalOpen = false">确认</Button>
          </div>
        </template>
      </Modal>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <Button @click="unstyledModalOpen = true">打开无样式模态框</Button>
      <Modal
        v-model="unstyledModalOpen"
        title="无样式模式"
        unstyled
        :pt="{
          overlay:
            'fixed inset-0 bg-gradient-to-r from-purple-500/70 to-blue-500/70 backdrop-blur-sm z-40 flex items-center justify-center',
          content:
            'bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-lg transform transition-all duration-300 border border-purple-300 dark:border-purple-800',
          header:
            'px-6 py-4 border-b border-purple-200 dark:border-purple-800 flex items-center justify-between bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900',
          title:
            'text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400',
          body: 'p-6 text-gray-700 dark:text-gray-300',
          footer:
            'px-6 py-4 border-t border-purple-200 dark:border-purple-800 flex justify-end space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900',
          closeButton:
            'p-1 rounded-full hover:bg-purple-100 dark:hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400 text-purple-600 dark:text-purple-400',
        }"
      >
        <p>这是一个使用unstyled属性移除所有默认样式的模态框内容</p>
        <p class="mt-4">使用unstyled属性可以完全自定义模态框的样式</p>
        <template #footer>
          <div class="flex justify-end gap-2">
            <Button variant="outline" @click="unstyledModalOpen = false">
              取消
            </Button>
            <Button @click="unstyledModalOpen = false">确认</Button>
          </div>
        </template>
      </Modal>
    </section>
  </div>
</template>
