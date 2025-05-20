<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { Icon } from '@iconify/vue'
import type { IconsProps } from './type'

const attrs = useAttrs()

defineOptions({ name: 'VKIcon' })

const props = withDefaults(defineProps<IconsProps>(), {
  name: '',
  size: 14,
  color: '',
  variant: '',
})

const size = computed(() => `${props.size}px`)
</script>

<template>
  <Icon
    v-bind="attrs"
    :icon="name"
    :style="{
      width: size,
      height: size,
      color: props.color,
    }"
    :class="{
      'vk-icon-spin': props.spin,
    }"
  />
</template>

<style scoped>
@keyframes vk-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.vk-icon-spin {
  animation: vk-spin 1s linear infinite;
}
</style>
