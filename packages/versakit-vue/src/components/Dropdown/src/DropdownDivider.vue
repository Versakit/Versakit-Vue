<template>
  <div :class="classes" role="separator"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { dropdownStyle } from './index.variants'
import type { DropdownDividerProps } from './type'

// 定义props
const props = withDefaults(defineProps<DropdownDividerProps>(), {
  unstyled: false,
})

// 计算样式
const classes = computed(() => {
  if (props.unstyled) {
    return props.pt?.root || ''
  }

  return [dropdownStyle().menuDivider(), props.pt?.root]
    .filter(Boolean)
    .join(' ')
})
</script>
