<template>
  <div v-if="loading || loading === undefined">
    <div
      :class="[classes.root, skeletonClass]"
      :style="skeletonStyle"
      v-bind="pt?.root"
    >
      <div
        v-for="i in repeatCount"
        :key="i"
        :class="[classes.item]"
        :style="itemStyle"
        v-bind="pt?.item"
      ></div>
    </div>
  </div>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { skeletonStyles } from './styles'
import type { SkeletonProps } from './type'

defineOptions({
  name: 'VKSkeleton',
})

const props = withDefaults(defineProps<SkeletonProps>(), {
  animated: true,
  variant: 'text',
  width: undefined,
  height: undefined,
  radius: undefined,
  unstyled: false,
  repeat: 1,
  loading: undefined,
  pt: () => ({}),
})

// 定义默认的空类名对象，用于unstyled模式
const emptyClasses = {
  root: '',
  item: '',
}

const classes = computed(() => {
  if (props.unstyled) {
    return emptyClasses
  }

  return skeletonStyles({
    animated: props.animated,
    variant: props.variant,
  })
})

// 计算项目样式
const itemStyle = computed(() => {
  const style: Record<string, string> = {}

  if (props.width !== undefined) {
    style.width =
      typeof props.width === 'number' ? `${props.width}px` : props.width
  }

  if (props.height !== undefined) {
    style.height =
      typeof props.height === 'number' ? `${props.height}px` : props.height
  }

  if (props.radius !== undefined) {
    style.borderRadius =
      typeof props.radius === 'number' ? `${props.radius}px` : props.radius
  }

  return style
})

// 计算重复次数
const repeatCount = computed(() => {
  return Math.max(1, props.repeat || 1)
})
</script>
