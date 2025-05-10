<template>
  <div :class="baseClass" role="status">
    <slot />
    <!-- 通过上标文本标签实现徽标 -->
    <sup
      ref="verBadge"
      v-bind="rootAttrs"
      :class="[valueClass, getPtClasses('value')]"
      v-if="type !== 'dot'"
    >
      {{ displayValue }}
    </sup>
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import type { BadgeProps, BadgeType, PtProps } from '../type/index'

defineOptions({ name: 'VKBadge' })

// Badge类型映射
const TYPE_CLASS_MAP: Record<BadgeType, string> = {
  dot: 'vk-badge-dot',
  number: 'vk-badge-num',
  text: 'vk-badge-text',
} as const

const props = withDefaults(defineProps<BadgeProps>(), {
  type: 'dot',
  value: '',
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
    return Object.entries(ptValue)
      .filter(([, value]) => value)
      .map(([, value]) => (typeof value === 'string' ? value : ''))
      .filter(Boolean)
      .join(' ')
  }

  return ''
}

// 优化值的计算
const displayValue = computed(() => {
  if (typeof props.value !== 'number') return props.value
  return props.value > 99 ? '99+' : props.value
})

// 优化类名计算逻辑
const baseClass = computed(() => {
  const classes = []

  // 添加 root pt 类名
  const rootPtClasses = getPtClasses('root')
  if (rootPtClasses) {
    classes.push(rootPtClasses)
  }

  // 如果不是 unstyled，添加基础类名
  if (!props.unstyled) {
    classes.push('vk-badge')
  }

  return classes.filter(Boolean)
})

// 徽标值的类名计算
const valueClass = computed(() => {
  if (props.unstyled) return ''
  return TYPE_CLASS_MAP[props.type]
})

const rootAttrs = computed(() => ({
  ...attrs,
  'aria-label':
    props.ariaLabel ||
    (attrs['aria-label'] as string) ||
    (props.type === 'dot'
      ? 'Notification indicator'
      : `Badge value: ${displayValue.value}`),
  'aria-live': 'polite',
}))
</script>

<style scoped>
@import '../style/index.css';
</style>
