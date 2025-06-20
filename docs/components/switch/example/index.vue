<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="flex items-center space-x-4">
        <Switch v-model="enabled" />
        <span class="text-sm">{{ enabled ? '开启' : '关闭' }}</span>
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同尺寸</h2>
      <div class="flex items-center space-x-8">
        <div class="flex flex-col items-center space-y-2">
          <Switch v-model="sizeEnabled.small" size="small" />
          <span class="text-sm">小型</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <Switch v-model="sizeEnabled.default" />
          <span class="text-sm">默认</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <Switch v-model="sizeEnabled.large" size="large" />
          <span class="text-sm">大型</span>
        </div>
      </div>
    </section>

    <!-- 不同颜色 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同颜色</h2>
      <div class="grid grid-cols-5 gap-6">
        <div class="flex flex-col items-center space-y-2">
          <Switch v-model="colorEnabled.blue" color="blue" />
          <span class="text-sm">蓝色</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <Switch v-model="colorEnabled.green" color="green" />
          <span class="text-sm">绿色</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <Switch v-model="colorEnabled.red" color="red" />
          <span class="text-sm">红色</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <Switch v-model="colorEnabled.yellow" color="yellow" />
          <span class="text-sm">黄色</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <Switch v-model="colorEnabled.purple" color="purple" />
          <span class="text-sm">紫色</span>
        </div>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">禁用状态</h2>
      <div class="flex items-center space-x-8">
        <div class="flex flex-col items-center space-y-2">
          <Switch disabled />
          <span class="text-sm">禁用关闭</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <Switch :model-value="true" disabled />
          <span class="text-sm">禁用开启</span>
        </div>
      </div>
    </section>

    <!-- 动画演示 -->
    <section>
      <h2 class="text-lg font-medium mb-4">动画演示</h2>
      <div class="flex flex-col space-y-4">
        <div class="flex items-center space-x-4">
          <button
            @click="toggleAllSwitches"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            {{ allEnabled ? '全部关闭' : '全部开启' }}
          </button>
        </div>
        <div class="flex items-center space-x-4 mt-4">
          <Switch v-for="(_, i) in 5" :key="i" v-model="animationSwitches[i]" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Switch } from '@versakit/vue'
import '@versakit/vue/style'
import { ref, computed } from 'vue'

// 基础用法
const enabled = ref(false)

// 不同尺寸
const sizeEnabled = ref({
  small: true,
  default: true,
  large: true,
})

// 不同颜色
const colorEnabled = ref({
  blue: true,
  green: true,
  red: true,
  yellow: true,
  purple: true,
})

// 动画演示
const animationSwitches = ref([false, false, false, false, false])

// 全部开关状态
const allEnabled = computed(() =>
  animationSwitches.value.every((state) => state === true),
)

// 切换所有开关
const toggleAllSwitches = () => {
  const newState = !allEnabled.value
  animationSwitches.value = animationSwitches.value.map(() => newState)
}
</script>
