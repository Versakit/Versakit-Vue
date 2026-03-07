<template>
  <div
    :class="[
      'flex',
      direction === 'vertical' ? 'flex-col gap-2' : 'flex-row gap-4',
    ]"
    role="radiogroup"
    aria-label="radio-group"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, toRef } from 'vue'
import type { RadioDirection, RadioSize } from './type'

const props = withDefaults(
  defineProps<{
    modelValue?: string | number | boolean
    disabled?: boolean
    size?: RadioSize
    direction?: RadioDirection
  }>(),
  {
    direction: 'horizontal',
    disabled: false,
    size: 'md',
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | boolean): void
  (e: 'change', value: string | number | boolean): void
}>()

const changeEvent = (value: string | number | boolean) => {
  emit('update:modelValue', value)
  emit('change', value)
}

provide('radio-group', {
  modelValue: toRef(props, 'modelValue'),
  disabled: toRef(props, 'disabled'),
  size: toRef(props, 'size'),
  changeEvent,
})
</script>
