<script setup lang="ts">
import { computed } from 'vue'
import { skeletonStyle } from './index.variants'
import type { SkeletonProps } from './type'

defineOptions({
  name: 'Skeleton',
})

const props = withDefaults(defineProps<SkeletonProps>(), {
  animation: 'pulse',
  loading: true,
  rounded: false,
  unstyled: false,
})

const classes = computed(() => {
  if (props.unstyled) {
    return props.pt?.root || ''
  }

  return skeletonStyle({
    animation: props.animation,
    rounded: props.rounded,
    class: props.pt?.root,
  })
})

const contentClasses = computed(() => {
  return props.unstyled ? props.pt?.content || '' : ''
})

const inlineStyles = computed(() => {
  const styles: Record<string, string> = {}

  if (props.width) {
    styles.width =
      typeof props.width === 'number' ? `${props.width}px` : props.width
  }

  if (props.height) {
    styles.height =
      typeof props.height === 'number' ? `${props.height}px` : props.height
  }

  return styles
})
</script>

<template>
  <div v-if="loading" :class="classes" :style="inlineStyles">
    <div :class="contentClasses">
      <slot name="skeleton">
        <!-- 默认骨架屏内容 -->
      </slot>
    </div>
  </div>
  <div v-else>
    <slot></slot>
  </div>
</template>

<style>
/* 波浪动画效果 */
.skeleton-wave {
  position: relative;
  overflow: hidden;
}

.skeleton-wave::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.5) 60%,
    rgba(255, 255, 255, 0)
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>
