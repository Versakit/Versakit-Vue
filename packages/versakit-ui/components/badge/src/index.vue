<script setup lang="ts">
import { computed } from 'vue'
import { badge } from './index.variants'
import type { BadgeProps } from './type'

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'primary',
  size: 'md',
  position: 'top-right',
  dot: false,
  max: 99,
  hidden: false,
  standalone: false,
})

const displayContent = computed(() => {
  if (props.dot) return ''
  if (props.content === undefined || props.content === null) return ''

  if (
    typeof props.content === 'number' &&
    props.max !== undefined &&
    props.content > props.max
  ) {
    return `${props.max}+`
  }

  return String(props.content)
})

const classes = computed(() =>
  badge({
    variant: props.variant,
    size: props.size,
    position: props.position,
    dot: props.dot,
    standalone: props.standalone,
  }),
)
</script>

<template>
  <div
    v-if="standalone"
    :class="classes"
    role="status"
    aria-live="polite"
    v-show="!hidden"
  >
    <span>{{ displayContent }}</span>
  </div>
  <div v-else class="relative inline-block">
    <slot />
    <span
      v-show="!hidden && (dot || content)"
      :class="classes"
      role="status"
      aria-live="polite"
    >
      {{ displayContent }}
    </span>
  </div>
</template>
