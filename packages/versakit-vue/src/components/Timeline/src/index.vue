<template>
  <div :class="classes" role="region" aria-label="时间线">
    <div :class="containerClasses">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { timelineStyle, timelineContainerStyle } from './index.variants'
import type { TimelineProps } from './type'
import { useTimeline } from './use-timeline'

const props = withDefaults(defineProps<TimelineProps>(), {
  orientation: 'vertical',
  align: 'left',
  reverse: false,
  unstyled: false,
})

// 使用ref包装props，以便在子组件中可以响应式地使用
const orientationRef = ref(props.orientation)
const alignRef = ref(props.align)
const reverseRef = ref(props.reverse)

// 使用hook提供上下文
useTimeline(orientationRef, alignRef, reverseRef)

// 计算样式类
const classes = computed(() => {
  return props.unstyled
    ? props.pt?.root || ''
    : timelineStyle({
        orientation: props.orientation,
        reverse: props.reverse,
        class: props.pt?.root,
      })
})

const containerClasses = computed(() => {
  return props.unstyled
    ? props.pt?.container || ''
    : timelineContainerStyle({
        class: props.pt?.container,
      })
})
</script>
