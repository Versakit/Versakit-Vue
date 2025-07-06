<script setup lang="ts">
import { computed } from 'vue'
import { skeletonAvatarStyle } from './index.variants'
import type { SkeletonAvatarProps } from './type'

defineOptions({
  name: 'SkeletonAvatar',
})

const props = withDefaults(defineProps<SkeletonAvatarProps>(), {
  size: 'md',
  circle: true,
  animation: 'pulse',
  unstyled: false,
})

const classes = computed(() => {
  if (props.unstyled) {
    return props.pt?.root || ''
  }

  return skeletonAvatarStyle({
    size: props.size,
    circle: props.circle,
    animation: props.animation,
    class: props.pt?.root,
  })
})
</script>

<template>
  <div :class="classes"></div>
</template>
