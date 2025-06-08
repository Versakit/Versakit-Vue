<script setup lang="ts">
import { computed } from 'vue'
import {
  avatar,
  avatarStatus,
  avatarImage,
  avatarFallback,
} from './index.variants'
import type { AvatarProps, AvatarSize } from './type'

const props = withDefaults(defineProps<AvatarProps>(), {
  size: 'md',
  shape: 'circle',
  variant: 'default',
  status: 'none',
  statusPosition: 'bottom-right',
  customClass: '',
  showFallback: true,
})

// 计算 Avatar 的样式
const avatarClasses = computed(() =>
  avatar({
    size:
      typeof props.size === 'string' ? (props.size as AvatarSize) : undefined,
    shape: props.shape,
    variant: props.variant,
    loading: props.loading,
    class: props.customClass,
  }),
)

// 计算 Avatar 的内联样式
const avatarStyle = computed(() => {
  const styles: Record<string, string> = {}

  if (typeof props.size === 'number') {
    styles.width = `${props.size}px`
    styles.height = `${props.size}px`
    styles.fontSize = `${Math.floor(props.size / 2.5)}px`
  }

  if (props.borderWidth) {
    styles.borderWidth =
      typeof props.borderWidth === 'number'
        ? `${props.borderWidth}px`
        : props.borderWidth
    styles.borderStyle = 'solid'
    styles.borderColor = props.borderColor || 'transparent'
  }

  return styles
})

// 计算状态指示器的样式
const statusClasses = computed(() =>
  avatarStatus({
    status: props.status,
    size: typeof props.size === 'string' ? (props.size as AvatarSize) : 'md',
    position: props.statusPosition,
  }),
)

// 计算图片样式
const imageClasses = computed(() => avatarImage())

// 计算回退UI样式
const fallbackClasses = computed(() => avatarFallback())

// 获取头像显示文本的首字母或缩写
const displayText = computed(() => {
  if (!props.text) return ''

  const words = props.text.split(' ')
  if (words.length === 1) {
    return props.text.charAt(0).toUpperCase()
  }

  return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase()
})
</script>

<template>
  <div :class="avatarClasses" :style="avatarStyle">
    <!-- 状态指示器 -->
    <span v-if="status !== 'none'" :class="statusClasses"></span>

    <!-- 图片 -->
    <img
      v-if="src"
      :src="src"
      :alt="text || 'avatar'"
      :class="imageClasses"
      @error="onError"
    />

    <!-- 回退UI (文本或自定义内容) -->
    <div v-else-if="showFallback" :class="fallbackClasses">
      <slot name="fallback">
        <template v-if="text">{{ displayText }}</template>
        <template v-else-if="fallback">{{ fallback }}</template>
        <template v-else-if="icon">
          <span class="avatar-icon">
            <slot name="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="w-1/2 h-1/2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </slot>
          </span>
        </template>
      </slot>
    </div>
  </div>
</template>
