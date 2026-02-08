<template>
  <div :class="classes" :style="styles">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
import { timelineStyle } from './index.variants'
import type { TimelineProps } from './type'
import { TimelineEmits } from './type'

defineOptions({
  name: 'Timeline',
})

const props = withDefaults(defineProps<TimelineProps>(), {
  orientation: 'vertical',
  align: 'left',
  reverse: false,
  unstyled: false,
})

defineEmits(TimelineEmits)

// Provide context to children
provide('timelineAlign', props.align)
provide('timelineOrientation', props.orientation)

const classes = computed(() => {
  return props.unstyled
    ? props.pt?.root || ''
    : timelineStyle({
        orientation: props.orientation,
        align: props.align,
        class: props.pt?.root,
      })
})

const styles = computed(() => {
  if (props.reverse) {
    return { flexDirection: 'column-reverse' }
  }
  return {}
})
</script>
