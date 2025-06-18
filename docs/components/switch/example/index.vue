<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="flex gap-6 items-center">
        <VKSwitch v-model="checked" />
        <span>当前状态: {{ checked ? '开启' : '关闭' }}</span>
      </div>
    </section>

    <!-- 不同大小 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同大小</h2>
      <div class="flex gap-6 items-center">
        <VKSwitch v-model="checked" size="sm" />
        <VKSwitch v-model="checked" size="md" />
        <VKSwitch v-model="checked" size="lg" />
      </div>
    </section>

    <!-- 不同颜色 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同颜色</h2>
      <div class="flex gap-6 items-center flex-wrap">
        <VKSwitch v-model="checked" color="primary" />
        <VKSwitch v-model="checked" color="secondary" />
        <VKSwitch v-model="checked" color="success" />
        <VKSwitch v-model="checked" color="warning" />
        <VKSwitch v-model="checked" color="danger" />
        <VKSwitch v-model="checked" color="info" />
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">禁用状态</h2>
      <div class="flex gap-6 items-center">
        <VKSwitch v-model="checked" disabled />
        <VKSwitch :model-value="false" disabled />
        <button
          @click="disabled = !disabled"
          class="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
        >
          {{ disabled ? '启用' : '禁用' }}
        </button>
        <VKSwitch v-model="checked" :disabled="disabled" />
      </div>
    </section>

    <!-- 加载状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">加载状态</h2>
      <div class="flex gap-6 items-center">
        <VKSwitch v-model="checked" loading />
        <VKSwitch :model-value="false" loading />
        <button
          @click="loading = !loading"
          class="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
        >
          {{ loading ? '停止加载' : '开始加载' }}
        </button>
        <VKSwitch v-model="checked" :loading="loading" />
      </div>
    </section>

    <!-- 带标签 -->
    <section>
      <h2 class="text-lg font-medium mb-4">带标签</h2>
      <div class="flex gap-6 items-center flex-col space-y-4 items-start">
        <VKSwitch v-model="checked">开启自动保存</VKSwitch>
        <VKSwitch v-model="checked">接收通知</VKSwitch>
        <VKSwitch v-model="checked">深色模式</VKSwitch>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VKSwitch } from '@versakit/vue'
import '@versakit/vue/style'

const checked = ref(true)
const disabled = ref(false)
const loading = ref(false)
</script>

<style scoped>
.switch {
  width: 3rem;
  height: 1.5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  padding: 0 0.25rem;
  transition: background-color 0.2s;
  background-color: #d1d5db;
  border: none;
  cursor: pointer;
}

.switch--checked {
  background-color: #22c55e;
}

.switch--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.switch__thumb {
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background-color: white;
  transition: transform 0.2s;
  transform: translateX(0);
}

.switch__thumb--checked {
  transform: translateX(1.5rem);
}
</style>
