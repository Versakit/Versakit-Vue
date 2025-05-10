<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import type { ButtonProps, PtProps } from '../type/index'
import { VKIcon } from '@versakit/icons'

defineOptions({ name: 'VkButton' })

// 按钮类型映射
const TYPE_CLASS_MAP = {
  primary: 'vk-btn-primary',
  secondary: 'vk-btn-secondary',
  success: 'vk-btn-success',
  info: 'vk-btn-info',
  error: 'vk-btn-error',
  warn: 'vk-btn-warn',
} as const

const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  circle: false,
  size: 'md',
  icon: '',
  variant: '',
  type: '',
  unstyled: false,
  pt: () => ({}),
})

const attrs = useAttrs()

// 处理 pt 样式
const getPtClasses = (key: keyof PtProps) => {
  const ptValue = props.pt?.[key]
  if (!ptValue) return ''

  if (typeof ptValue === 'string') {
    return ptValue
  }

  if (typeof ptValue === 'object') {
    if (Array.isArray(ptValue)) {
      return ptValue.join(' ')
    }
    // 处理对象中的字符串值
    return Object.entries(ptValue)
      .filter(([, value]) => value)
      .map(([, value]) => (typeof value === 'string' ? value : ''))
      .filter(Boolean)
      .join(' ')
  }

  return ''
}

// 优化类名计算逻辑
const baseClass = computed(() => {
  const classes = []

  // 如果不是 unstyled，添加基础类名
  if (!props.unstyled) {
    classes.push('vk-btn')
    // 处理按钮类型
    classes.push(
      TYPE_CLASS_MAP[props.type as keyof typeof TYPE_CLASS_MAP] || '',
    )

    // 处理变体类名
    if (props.variant) {
      const variants = props.variant.split(' ').filter(Boolean)
      classes.push(...variants.map((v) => `is-${v}`))
    }

    // 处理其他状态类名
    if (props.circle) classes.push('is-circle')
    if (props.disabled) classes.push('is-disabled')
    if (props.size !== 'md') classes.push(`is-${props.size}`)
  }

  // 添加 root pt 类名
  const rootPtClasses = getPtClasses('root')
  if (rootPtClasses) {
    classes.push(rootPtClasses)
  }

  return classes.filter(Boolean)
})

// 优化根元素属性
const rootAttrs = computed(() => ({
  ...attrs,
  class: baseClass.value.join(' '),
  disabled: props.disabled || undefined,
  role: 'button',
  'aria-disabled': props.disabled,
  tabindex: props.disabled ? -1 : 0,
}))

// 优化键盘事件处理
const handleKeydown = (event: KeyboardEvent) => {
  const isActionKey = event.key === 'Enter' || event.key === ' '
  if (!isActionKey || props.disabled) return

  event.preventDefault()
  event.target?.dispatchEvent(new Event('click', { bubbles: true }))
}
</script>

<template>
  <button v-bind="rootAttrs" @keydown="handleKeydown">
    <VKIcon
      v-if="icon"
      :name="icon"
      :class="[icon, getPtClasses('icon')]"
      :style="{ marginRight: icon && $slots.default ? '5px' : '0' }"
      aria-hidden="true"
    />
    <span v-if="$slots.default" :class="getPtClasses('label')">
      <slot />
    </span>
  </button>
</template>

<style scoped>
@import '../style/index.css';
</style>
