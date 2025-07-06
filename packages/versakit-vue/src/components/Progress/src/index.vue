<template>
  <div :class="rootClass">
    <!-- 进度条容器 -->
    <div :class="containerClass">
      <!-- 进度条 -->
      <div
        :class="barClass"
        :style="progressWidth"
        role="progressbar"
        :aria-valuenow="indeterminate ? undefined : percentage"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <!-- 进度文本 -->
    <div v-if="showText" :class="textClass">
      <slot name="text">{{ formattedPercentage }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  progressStyle,
  progressContainerStyle,
  progressBarStyle,
  progressTextStyle,
} from './index.variants'
import type { ProgressProps } from './type'
import { ProgressEmits } from './type'
import { useProgress } from './use-progress'

defineOptions({
  name: 'VKProgress',
})

const props = withDefaults(defineProps<ProgressProps>(), {
  value: 0,
  max: 100,
  showText: false,
  variant: 'default',
  size: 'md',
  shape: 'rounded',
  striped: false,
  animated: false,
  indeterminate: false,
  unstyled: false,
})

defineEmits(ProgressEmits)

const { percentage, formattedPercentage, progressWidth } = useProgress(props)

// 根元素样式
const rootClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.root || ''
  }

  return progressStyle({
    unstyled: props.unstyled,
    class: props.pt?.root,
  })
})

// 容器样式
const containerClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.container || ''
  }

  return progressContainerStyle({
    size: props.size,
    shape: props.shape,
    unstyled: props.unstyled,
    class: props.pt?.container,
  })
})

// 进度条样式
const barClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.bar || ''
  }

  return progressBarStyle({
    variant: props.variant,
    striped: props.striped,
    animated: props.animated,
    indeterminate: props.indeterminate,
    unstyled: props.unstyled,
    class: props.pt?.bar,
  })
})

// 文本样式
const textClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.text || ''
  }

  return progressTextStyle({
    variant: props.variant,
    unstyled: props.unstyled,
    class: props.pt?.text,
  })
})
</script>
