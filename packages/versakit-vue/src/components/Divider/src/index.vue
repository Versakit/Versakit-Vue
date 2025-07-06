<template>
  <component
    :is="computedTag"
    :class="rootClass"
    :style="customStyle"
    role="separator"
    :aria-orientation="orientation"
    :data-orientation="orientation"
  >
    <div v-if="hasLabel" :class="labelClass">
      <slot>{{ label }}</slot>
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import type { Slots } from 'vue'
import { dividerStyle } from './index.variants'
import type { DividerProps } from './type'

const props = withDefaults(defineProps<DividerProps>(), {
  orientation: 'horizontal',
  variant: 'solid',
  size: 'medium',
  color: undefined,
  label: undefined,
  labelPosition: 'center',
  as: undefined,
  unstyled: false,
})

const slots: Slots = useSlots()

const hasLabel = computed((): boolean => {
  return !!props.label || !!slots.default?.()
})

// 根据orientation和是否有标签决定使用的HTML元素
const computedTag = computed((): string => {
  if (props.as) {
    return props.as
  }
  return props.orientation === 'horizontal' && !hasLabel.value ? 'hr' : 'div'
})

const rootClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.root || ''
  }

  return dividerStyle({
    orientation: props.orientation,
    variant: props.variant,
    size: props.size,
    labelPosition: props.labelPosition,
    withLabel: hasLabel.value,
    class: props.pt?.root,
  })
})

const labelClass = computed(() => {
  return props.unstyled ? props.pt?.label || '' : 'px-2 text-gray-500'
})

const customStyle = computed(() => {
  if (!props.unstyled && props.color) {
    return {
      borderColor: props.color,
      '--tw-border-opacity': 1,
      'before:border-color': props.color,
      'after:border-color': props.color,
    }
  }
  return {}
})
</script>
