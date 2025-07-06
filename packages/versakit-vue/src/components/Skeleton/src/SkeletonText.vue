<script setup lang="ts">
import { computed } from 'vue'
import { skeletonTextStyle, skeletonTextLineStyle } from './index.variants'
import type { SkeletonTextProps } from './type'

defineOptions({
  name: 'SkeletonText',
})

const props = withDefaults(defineProps<SkeletonTextProps>(), {
  lines: 3,
  widths: () => ['100%', '100%', '80%'],
  lineHeight: '1rem',
  animation: 'pulse',
  rounded: false,
  unstyled: false,
})

const rootClasses = computed(() => {
  if (props.unstyled) {
    return props.pt?.root || ''
  }

  return skeletonTextStyle({
    rounded: props.rounded,
    class: props.pt?.root,
  })
})

const getLineClasses = () => {
  if (props.unstyled) {
    return props.pt?.line || ''
  }

  return skeletonTextLineStyle({
    animation: props.animation,
    rounded: props.rounded,
    class: props.pt?.line,
  })
}

const getLineWidth = (index: number) => {
  if (typeof props.widths === 'string' || typeof props.widths === 'number') {
    return props.widths
  }

  if (Array.isArray(props.widths) && props.widths.length > 0) {
    return props.widths[index % props.widths.length]
  }

  return '100%'
}

const getLineStyle = (index: number) => {
  const width = getLineWidth(index)
  const style: Record<string, string> = {
    width: typeof width === 'number' ? `${width}px` : width,
  }

  if (props.lineHeight) {
    style.height =
      typeof props.lineHeight === 'number'
        ? `${props.lineHeight}px`
        : props.lineHeight
  }

  return style
}
</script>

<template>
  <div :class="rootClasses">
    <div
      v-for="i in lines"
      :key="i"
      :class="getLineClasses()"
      :style="getLineStyle(i - 1)"
    ></div>
  </div>
</template>
