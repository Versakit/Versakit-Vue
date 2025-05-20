<script setup lang="ts">
import { computed, inject } from 'vue'
import type { CheckboxProps, CheckboxGroupContext } from '../type'
import { getPtClasses } from '@versakit/shared'

defineOptions({
  name: 'VKCheckbox',
})

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  disabled: false,
  indeterminate: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean | string[]]
  change: [value: boolean | string[]]
}>()

// 注入 CheckboxGroup 上下文
const checkboxGroup = inject<CheckboxGroupContext | null>('checkboxGroup', null)

// 计算是否选中
const isChecked = computed(() => {
  if (checkboxGroup) {
    return checkboxGroup.modelValue.includes(props.value as string)
  }
  return props.modelValue as boolean
})

// 计算是否禁用
const isDisabled = computed(() => {
  return props.disabled || (checkboxGroup?.disabled ?? false)
})

// 处理变更事件
const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement

  if (checkboxGroup) {
    // 在 CheckboxGroup 中的处理逻辑
    const groupValue = [...checkboxGroup.modelValue]
    const value = props.value as string

    if (target.checked) {
      if (!groupValue.includes(value)) {
        groupValue.push(value)
      }
    } else {
      const index = groupValue.indexOf(value)
      if (index > -1) {
        groupValue.splice(index, 1)
      }
    }

    // 更新 CheckboxGroup 的值
    checkboxGroup.onChange(groupValue)
  } else {
    // 单独 Checkbox 的处理逻辑
    emit('update:modelValue', target.checked)
    emit('change', target.checked)
  }
}

// 组件无头化
const ptClasses = computed(() => {
  if (props.unstyled) {
    return {
      root: getPtClasses(props.pt, 'root'),
      input: getPtClasses(props.pt, 'input'),
      inner: getPtClasses(props.pt, 'inner'),
      label: getPtClasses(props.pt, 'label'),
      checked: getPtClasses(props.pt, 'checked'),
      disabled: getPtClasses(props.pt, 'disabled'),
      indeterminate: getPtClasses(props.pt, 'indeterminate'),
    }
  }
  return {
    root: 'vk-checkbox',
    input: 'vk-checkbox__input',
    inner: 'vk-checkbox__inner',
    label: 'vk-checkbox__label',
    checked: 'is-checked',
    disabled: 'is-disabled',
    indeterminate: 'is-indeterminate',
  }
})
</script>

<template>
  <label
    :class="[
      ptClasses.root,
      {
        [ptClasses.checked]: isChecked,
        [ptClasses.disabled]: isDisabled,
        [ptClasses.indeterminate]: props.indeterminate,
      },
    ]"
  >
    <span :class="ptClasses.input">
      <input
        type="checkbox"
        :checked="isChecked"
        :disabled="isDisabled"
        :name="name"
        :value="value"
        @change="handleChange"
      />
      <span :class="ptClasses.inner"></span>
    </span>
    <span v-if="label || $slots.default" :class="ptClasses.label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<style>
@import '../style/index.css';
</style>
