<template>
  <div :class="classes" ref="_ref">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { timelineStyle } from './index.variants'
import type { TimelineProps } from './type'
import { useTimeline } from './use-timeline'

defineOptions({
  name: 'VTimeline',
})

const props = withDefaults(defineProps<TimelineProps>(), {
  align: 'left',
  unstyled: false,
})

const { _ref, registerItem } = useTimeline(props)

const classes = computed(() => {
  return props.unstyled
    ? props.pt?.root || ''
    : timelineStyle({
        align: props.align,
        class: props.pt?.root,
      })
})

defineExpose({
  _ref,
  registerItem,
})
</script>
