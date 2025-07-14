<template>
  <div
    :class="rootClasses"
    :style="rootStyles"
    @click="handleClick"
    role="img"
    :aria-label="alt"
  >
    <!-- 骨架屏 -->
    <div
      v-if="skeleton && isLoading"
      :class="skeletonClasses"
      :style="skeletonStyles"
    ></div>

    <!-- 图片 -->
    <img
      ref="imageRef"
      :src="src"
      :alt="alt"
      :class="imgClasses"
      :style="imgStyles"
      :loading="loading"
      @load="handleLoad"
      @error="handleError"
    />

    <!-- 模糊效果 -->
    <img
      v-if="blurred && isLoading"
      :src="src"
      :alt="alt"
      class="absolute inset-0 w-full h-full"
      :style="{
        filter: `blur(${blurAmount}px)`,
        transform: 'scale(1.1)',
        objectFit: fit,
      }"
    />

    <!-- 缩放覆盖层 -->
    <div v-if="isZoomable && isZoomed.valueOf()" :class="overlayClasses">
      <slot name="zoom-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-white"
        >
          <polyline points="15 3 21 3 21 9"></polyline>
          <polyline points="9 21 3 21 3 15"></polyline>
          <line x1="21" y1="3" x2="14" y2="10"></line>
          <line x1="3" y1="21" x2="10" y2="14"></line>
        </svg>
      </slot>
    </div>

    <!-- 错误状态 -->
    <div
      v-if="isError"
      class="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800"
    >
      <slot name="error">
        <div class="text-gray-400 flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="mb-2"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
          <span>{{ alt || '图片加载失败' }}</span>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  imageStyle,
  imageSkeletonStyle,
  imageOverlayStyle,
} from './index.variants'
import type { ImageProps } from './type'
import { ImageEmits } from './type'
import { useImage } from './use-image'

const props = withDefaults(defineProps<ImageProps>(), {
  alt: '',
  width: 'auto',
  height: 'auto',
  fit: 'cover',
  blurred: false,
  blurAmount: 10,
  loading: 'lazy',
  isZoomable: false,
  isZoomed: false,
  zoomScale: 1.5,
  skeleton: true,
  radius: 'md',
  unstyled: false,
})

const emit = defineEmits(ImageEmits)

const {
  imageRef,
  isLoading,
  isError,
  isZoomed,
  handleLoad,
  handleError,
  toggleZoom,
} = useImage(props, emit)

// 处理点击事件
const handleClick = () => {
  if (props.isZoomable) {
    toggleZoom()
  }
}

// 计算样式
const rootClasses = computed(() => {
  return props.unstyled
    ? props.pt?.root || ''
    : imageStyle({
        fit: props.fit,
        radius: props.radius as any,
        isZoomable: props.isZoomable,
        isZoomed: isZoomed.value,
        class: props.pt?.root,
      })
})

const imgClasses = computed(() => {
  return props.unstyled
    ? props.pt?.img || ''
    : `w-full h-full transition-transform ${isZoomed.value ? 'scale-' + props.zoomScale : ''} ${props.pt?.img || ''}`
})

const skeletonClasses = computed(() => {
  return props.unstyled
    ? props.pt?.skeleton || ''
    : imageSkeletonStyle({ class: props.pt?.skeleton })
})

const overlayClasses = computed(() => {
  return props.unstyled
    ? props.pt?.overlay || ''
    : imageOverlayStyle({ visible: isZoomed.value, class: props.pt?.overlay })
})

// 计算内联样式
const rootStyles = computed(() => {
  const styles: Record<string, string> = {}

  if (props.width !== 'auto') {
    styles.width =
      typeof props.width === 'number' ? `${props.width}px` : props.width
  }

  if (props.height !== 'auto') {
    styles.height =
      typeof props.height === 'number' ? `${props.height}px` : props.height
  }

  return styles
})

const imgStyles = computed(() => {
  return {
    objectFit: props.fit,
  }
})

const skeletonStyles = computed(() => {
  return props.skeletonColor ? { backgroundColor: props.skeletonColor } : {}
})

defineExpose({
  imageRef,
  isLoading,
  isError,
  isZoomed,
})
</script>
