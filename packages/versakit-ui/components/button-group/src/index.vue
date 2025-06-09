<script setup lang="ts">
import { computed, provide } from 'vue'
import { buttonGroup } from './index.variants'
import type { ButtonGroupProps, ButtonGroupPassThroughAttributes } from './type'

const props = withDefaults(
  defineProps<ButtonGroupProps & { pt?: ButtonGroupPassThroughAttributes }>(),
  {
    direction: 'horizontal',
    spacing: 'default',
    unstyled: false,
  },
)

// 提供按钮组的上下文给子按钮
provide('vk-button-group', {
  variant: props.variant,
  size: props.size,
  shape: props.shape,
  disabled: props.disabled,
})

const classes = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return buttonGroup({
    direction: props.direction,
    spacing: props.spacing,
  })
})
</script>

<template>
  <div :class="classes" role="group" v-bind="{ ...$attrs, ...props.pt?.root }">
    <slot />
  </div>
</template>
