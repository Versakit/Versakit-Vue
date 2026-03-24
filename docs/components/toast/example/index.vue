<script setup lang="ts">
import { Toast } from '@versakit/vue'
import '@versakit/vue/style'

const showSuccess = () => {
  Toast.success('保存成功')
}

const showError = () => {
  Toast.error('请求失败，请稍后重试')
}

const showWarning = () => {
  Toast.warning('库存不足，请尽快补货')
}

const showInfo = () => {
  Toast.info('你有一条新的系统消息')
}

const showBottomCenter = () => {
  Toast.show({
    message: '这是底部居中的提示',
    type: 'info',
    position: 'bottom-center',
    duration: 4000,
  })
}

const showLongDuration = () => {
  Toast.show({
    message: '该提示将在 8 秒后自动关闭',
    type: 'success',
    duration: 8000,
  })
}

const clearAll = () => {
  Toast.removeAll()
}
</script>

<template>
  <div class="space-y-8">
    <section class="space-y-3">
      <h3 class="text-lg font-medium">基础类型</h3>
      <div class="flex flex-wrap gap-3">
        <button
          class="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          @click="showSuccess"
        >
          Success
        </button>
        <button
          class="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          @click="showError"
        >
          Error
        </button>
        <button
          class="rounded bg-amber-500 px-4 py-2 text-white hover:bg-amber-600"
          @click="showWarning"
        >
          Warning
        </button>
        <button
          class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          @click="showInfo"
        >
          Info
        </button>
      </div>
    </section>

    <section class="space-y-3">
      <h3 class="text-lg font-medium">位置与时长</h3>
      <div class="flex flex-wrap gap-3">
        <button
          class="rounded bg-zinc-700 px-4 py-2 text-white hover:bg-zinc-800"
          @click="showBottomCenter"
        >
          底部居中
        </button>
        <button
          class="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          @click="showLongDuration"
        >
          8 秒自动关闭
        </button>
      </div>
    </section>

    <section class="space-y-3">
      <h3 class="text-lg font-medium">控制</h3>
      <div class="flex flex-wrap gap-3">
        <button
          class="rounded bg-slate-600 px-4 py-2 text-white hover:bg-slate-700"
          @click="clearAll"
        >
          清空全部提示
        </button>
      </div>
    </section>
  </div>
</template>
