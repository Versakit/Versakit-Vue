<script setup lang="ts">
import { computed } from 'vue'
import { useBadge } from '@versakit/composables'
import { badge } from './index.variants'
import type { BadgeProps } from './type'

defineOptions({
  name: 'VKBadge',
})

const props = withDefaults(defineProps<BadgeProps>(), {
  position: 'top-right',
  color: 'primary',
  size: 'md',
  dot: false,
  show: true,
  max: 99,
})

const { visible, positionClass } = useBadge(props)

const badgeClass = computed(() => {
  return badge({
    color: props.color,
    size: props.size,
    dot: props.dot,
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
  <div class="relative inline-block">
    <slot></slot>
    <span
      v-if="visible"
      :class="[badgeClass, positionClass]"
      role="status"
      aria-live="polite"
    >
      {{ formattedContent }}
    </span>
  </div>
</template>
