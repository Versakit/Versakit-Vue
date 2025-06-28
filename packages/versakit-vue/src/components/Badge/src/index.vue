<script setup lang="ts">
import { computed } from 'vue'
import { useBadge } from './composables/useBadge'
import { badge } from './index.variants'
import type { BadgeProps } from './type'

defineOptions({
  name: 'Badge',
})

const props = withDefaults(defineProps<BadgeProps>(), {
  position: 'top-right',
  color: 'primary',
  size: 'md',
  dot: false,
  show: true,
  max: 99,
  unstyled: false,
})

const { visible, positionClass } = useBadge(props)

const rootClass = computed(() => {
  return props.unstyled ? props.pt?.root || '' : 'relative inline-block'
})

const badgeClass = computed(() => {
  return props.unstyled
    ? props.pt?.badge || ''
    : badge({
        color: props.color,
        size: props.size,
        dot: props.dot,
        class: [positionClass.value, props.pt?.badge],
      })
})

const formattedContent = computed(() => {
  if (props.dot) return ''

  if (
    typeof props.content === 'number' &&
    props.max &&
    props.content > props.max
  ) {
    return `${props.max}+`
  }

  return props.content
})
</script>

<template>
  <div :class="rootClass">
    <slot></slot>
    <span v-if="visible" :class="badgeClass" role="status" aria-live="polite">
      {{ formattedContent }}
    </span>
  </div>
</template>
