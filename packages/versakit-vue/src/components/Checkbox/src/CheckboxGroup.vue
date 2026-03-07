<template>
  <div
    class="flex flex-wrap"
    :class="[direction === 'vertical' ? 'flex-col gap-2' : 'flex-row gap-4']"
    role="group"
    aria-label="checkbox-group"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, toRef } from 'vue'
import type { CheckboxDirection, CheckboxSize, CheckboxColor } from './type'

const props = withDefaults(
  defineProps<{
    modelValue?: (string | number | boolean)[]
    disabled?: boolean
    size?: CheckboxSize
    color?: CheckboxColor
    direction?: CheckboxDirection
    min?: number
    max?: number
  }>(),
  {
    modelValue: () => [],
    direction: 'horizontal',
    disabled: false,
    size: 'default',
    color: 'blue',
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: (string | number | boolean)[]): void
  (e: 'change', value: (string | number | boolean)[]): void
}>()

const changeEvent = (value: (string | number | boolean)[]) => {
  emit('update:modelValue', value)
  emit('change', value)
}

provide('checkbox-group', {
  modelValue: toRef(props, 'modelValue'),
  disabled: toRef(props, 'disabled'),
  size: toRef(props, 'size'),
  color: toRef(props, 'color'),
  min: toRef(props, 'min'),
  max: toRef(props, 'max'),
  changeEvent,
})
</script>
