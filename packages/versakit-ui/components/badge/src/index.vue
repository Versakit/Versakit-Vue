<script setup lang="ts">
import { computed } from 'vue'
import { badge } from './index.variants'
import type { BadgeProps, BadgePassThroughAttributes } from './type'

const props = withDefaults(
  defineProps<BadgeProps & { pt?: BadgePassThroughAttributes }>(),
  {
    variant: 'primary',
    size: 'md',
    position: 'top-right',
    dot: false,
    max: 99,
    hidden: false,
    standalone: false,
    unstyled: false,
  },
)

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

const classes = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return badge({
    variant: props.variant,
    size: props.size,
    position: props.position,
    dot: props.dot,
    standalone: props.standalone,
  })
})
</script>

<template>
  <div
    v-if="standalone"
    :class="classes"
    role="status"
    aria-live="polite"
    v-show="!hidden"
    v-bind="{ ...$attrs, ...props.pt?.root }"
  >
    <span v-bind="props.pt?.content">
      <slot name="content" v-if="$slots.content" />
      <template v-else>{{ displayContent }}</template>
    </span>
  </div>
  <div v-else class="relative inline-block" v-bind="props.pt?.wrapper">
    <slot />
    <span
      v-show="!hidden && (dot || content)"
      :class="classes"
      role="status"
      aria-live="polite"
      v-bind="props.pt?.badge"
    >
      <slot name="content" v-if="$slots.content" />
      <template v-else>{{ displayContent }}</template>
    </span>
  </div>
</template>
