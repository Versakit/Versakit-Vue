<script setup lang="ts">
import { computed, provide, reactive, toRef } from 'vue'
import type { CheckboxGroupProps } from '../type'
import { getPtClasses } from '@versakit/shared'

defineOptions({
  name: 'VerCheckboxGroup',
})

const props = withDefaults(defineProps<CheckboxGroupProps>(), {
  disabled: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string[]]
  change: [value: string[]]
}>()

const onChange = (value: string[]) => {
  emit('update:modelValue', value)
  emit('change', value)
}

// 组件无头化处理
const ptClasses = computed(() => {
  if (props.unstyled) {
    return {
      root: getPtClasses(props.pt, 'root'),
    }
  }
  return {
    root: 'vk-checkbox-group',
  }
})

provide(
  'checkboxGroup',
  reactive({
    modelValue: toRef(props, 'modelValue'),
    disabled: toRef(props, 'disabled'),
    onChange,
  }),
)
</script>

<template>
  <div :class="ptClasses.root">
    <slot></slot>
  </div>
</template>

<style>
@import '../style/index.css';
</style>
