<template>
  <transition name="slide-fade" @after-leave="props.destroy">
    <div
      v-show="isVisable"
      :class="vkClass"
      :style="positionStyle"
      role="alert"
      aria-live="polite"
    >
      <div class="vk-notification-top">
        <VKIcon :size="25" :color="iconColor" :name="icon" aria-hidden="true" />
        <h2 class="vk-notification-title">{{ title }}</h2>
      </div>
      <div class="vk-notification-content">
        <span>{{ content }}</span>
      </div>
      <div
        class="vk-notification-closebtn"
        @click="handClose"
        aria-label="关闭通知"
      >
        <VKIcon name="cross" aria-hidden="true" />
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'

import { VKIcon } from '@versakit/icons'
import type { NotifivationProps } from '../type/index'

defineOptions({ name: 'VKNotification' })

const props = withDefaults(defineProps<NotifivationProps>(), {
  type: 'info',
  plain: false,
  title: '',
  icon: '',
  content: '',
  duration: 3000,
  offset: 25,
  position: 'top-right',
  destroy: () => {},
})

const height = ref(0)
const bottomOffset = computed(() => height.value)

// 根据传入的消息类型，计算对应的图标颜色
const iconColor = computed(() => {
  switch (props.type) {
    case 'success':
      return '#4ade80'
    case 'warn':
      return 'orange'
    case 'error':
      return 'red'
    default:
      return 'gray'
  }
})

// 使用对象展开语法结合类型断言返回样式对象
const positionStyle = computed(() => {
  return {} as Record<string, string>
})

const isVisable = ref(false)

const handClose = () => {
  isVisable.value = false
}

const vkClass = computed(() => {
  return [
    'vk-notification',
    props.plain === false ? '' : `vk-notification-${props.type}-plain`,
  ]
})

/**
 * 保证动画展示，需要在 mounted 之后进行展示
 */
onMounted(() => {
  isVisable.value = true
  /**
   * 延迟时间关闭
   */
  setTimeout(() => {
    isVisable.value = false
  }, props.duration)
})

defineExpose({
  bottomOffset,
})
</script>

<style>
@import '../style/index.css';
</style>
