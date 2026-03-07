<template>
  <label
    :class="[
      'group relative inline-flex cursor-pointer items-center select-none',
      isDisabled ? 'cursor-not-allowed opacity-50' : '',
    ]"
  >
    <input
      type="radio"
      class="peer sr-only"
      :value="label"
      :checked="isChecked"
      :disabled="isDisabled"
      @change="handleChange"
    />
    <div
      :class="[
        'relative flex items-center justify-center rounded-full border transition-all duration-200',
        sizeClasses,
        isChecked
          ? 'border-blue-500 bg-blue-500'
          : 'border-gray-300 bg-white group-hover:border-blue-500 dark:border-gray-600 dark:bg-gray-800',
      ]"
    >
      <div
        :class="[
          'rounded-full bg-white transition-transform duration-200',
          dotSizeClasses,
          isChecked ? 'scale-100' : 'scale-0',
        ]"
      ></div>
    </div>
    <span
      v-if="$slots.default || label"
      :class="['ml-2 text-gray-700 dark:text-gray-300', textSizeClasses]"
    >
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import type { RadioContext, RadioSize } from './type'

const props = withDefaults(
  defineProps<{
    modelValue?: string | number | boolean
    label?: string | number | boolean
    disabled?: boolean
    size?: RadioSize
  }>(),
  {
    disabled: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | boolean): void
  (e: 'change', value: string | number | boolean): void
}>()

const groupContext = inject<RadioContext | null>('radio-group', null)

const isChecked = computed(() => {
  if (groupContext) {
    return groupContext.modelValue.value === props.label
  }
  return props.modelValue === props.label
})

const isDisabled = computed(() => {
  return groupContext?.disabled.value || false || props.disabled
})

const currentSize = computed(() => {
  return groupContext?.size.value || props.size || 'md'
})

const sizeClasses = computed(() => {
  switch (currentSize.value) {
    case 'sm':
      return 'h-4 w-4'
    case 'lg':
      return 'h-6 w-6'
    default:
      return 'h-5 w-5'
  }
})

const dotSizeClasses = computed(() => {
  switch (currentSize.value) {
    case 'sm':
      return 'h-1.5 w-1.5'
    case 'lg':
      return 'h-2.5 w-2.5'
    default:
      return 'h-2 w-2'
  }
})

const textSizeClasses = computed(() => {
  switch (currentSize.value) {
    case 'sm':
      return 'text-sm'
    case 'lg':
      return 'text-lg'
    default:
      return 'text-base'
  }
})

const handleChange = () => {
  if (isDisabled.value) return
  const value = props.label ?? ''
  if (groupContext) {
    groupContext.changeEvent(value)
  } else {
    emit('update:modelValue', value)
    emit('change', value)
  }
}
</script>
