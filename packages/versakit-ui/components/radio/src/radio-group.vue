<script setup lang="ts">
import { computed, provide } from 'vue'
import { radioGroup } from './index.variants'
import type { RadioGroupProps, RadioGroupPassThroughAttributes } from './type'

const props = withDefaults(
  defineProps<RadioGroupProps & { pt?: RadioGroupPassThroughAttributes }>(),
  {
    direction: 'vertical',
    variant: 'default',
    size: 'md',
    disabled: false,
    readonly: false,
    unstyled: false,
  },
)

const emit = defineEmits(['update:modelValue', 'change'])

// 计算样式
const classes = computed(() => {
  if (props.unstyled) {
    return {}
  }

  return radioGroup({
    direction: props.direction,
  })
})

// 更新模型值
const updateModelValue = (value: string | number | boolean) => {
  emit('update:modelValue', value)
  emit('change', value)
}

// 提供上下文给子组件
provide('vk-radio-group', {
  name: props.name,
  modelValue: props.modelValue,
  size: props.size,
  variant: props.variant,
  disabled: props.disabled,
  readonly: props.readonly,
  updateModelValue,
})
</script>

<template>
  <div
    :class="classes"
    role="radiogroup"
    v-bind="{ ...$attrs, ...props.pt?.root }"
  >
    <slot />
  </div>
</template>
