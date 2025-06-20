<script setup lang="ts" generic="T extends string | number">
import { computed, watch } from 'vue'
import { useSegmented } from './composables/useSegmented.ts'
import { segmentedContainer, segmentedOption } from './index.variants'
import type { SegmentedProps } from './type'

defineOptions({
  name: 'Segmented',
})

const props = withDefaults(defineProps<SegmentedProps<T>>(), {
  size: 'md',
  disabled: false,
  block: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: T): void
  (e: 'change', value: T): void
}>()

// 处理选项格式
const normalizedOptions = computed(() => {
  return props.options.map((option) => {
    if (typeof option === 'object') {
      return {
        value: option.value,
        label: option.label,
        disabled: option.disabled || false,
      }
    }
    return {
      value: option,
      label: String(option),
      disabled: false,
    }
  })
})

// 获取选项值数组
const optionValues = computed(() => {
  return normalizedOptions.value.map((option) => option.value)
})

// 使用useSegmented
const { isSelected, select, onKeydown } = useSegmented(optionValues.value, {
  modelValue: props.modelValue,
  onChange: (val: any) => {
    emit('update:modelValue', val)
    emit('change', val)
  },
})

// 同步外部modelValue变化
watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal !== undefined && optionValues.value.includes(newVal)) {
      select(newVal)
    }
  },
)

// 计算容器样式
const containerClass = computed(() => {
  return segmentedContainer({
    size: props.size,
    disabled: props.disabled,
    block: props.block,
  })
})

// 计算选项样式
const getOptionClass = (value: T, disabled: boolean) => {
  return segmentedOption({
    selected: isSelected(value),
    disabled: props.disabled || disabled,
    size: props.size,
  })
}

// 处理选项点击
const handleOptionClick = (value: T, disabled: boolean) => {
  if (props.disabled || disabled) return
  select(value)
}
</script>

<template>
  <div :class="containerClass" role="tablist" @keydown="onKeydown">
    <button
      v-for="option in normalizedOptions"
      :key="String(option.value)"
      :class="getOptionClass(option.value, option.disabled)"
      :disabled="props.disabled || option.disabled"
      :aria-selected="isSelected(option.value)"
      :tabindex="isSelected(option.value) ? 0 : -1"
      role="tab"
      type="button"
      @click="handleOptionClick(option.value, option.disabled)"
    >
      {{ option.label }}
    </button>
  </div>
</template>
