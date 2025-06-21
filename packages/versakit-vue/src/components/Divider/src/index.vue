<template>
  <div :class="classes" :style="customStyle">
    <div v-if="label" class="px-2 text-gray-500">
      <slot>{{ label }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { dividerStyle } from './index.variants'
import type { DividerProps } from './type'

const props = withDefaults(defineProps<DividerProps>(), {
  orientation: 'horizontal',
  variant: 'solid',
  size: 'medium',
  color: undefined,
  label: undefined,
  labelPosition: 'center',
})

const classes = computed(() =>
  dividerStyle({
    orientation: props.orientation,
    variant: props.variant,
    size: props.size,
    labelPosition: props.labelPosition,
  }),
)

const customStyle = computed(() => {
  if (props.color) {
    return {
      borderColor: props.color,
    }
  }
  return {}
})
</script>
