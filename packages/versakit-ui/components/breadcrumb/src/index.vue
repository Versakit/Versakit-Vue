<script setup lang="ts">
import { computed, provide } from 'vue'
import type { BreadcrumbProps, BreadcrumbPtProps } from '../type/index.ts'

defineOptions({ name: 'VKBreadcrumb' })

const props = withDefaults(defineProps<BreadcrumbProps>(), {
  separator: '/',
  separatorIcon: '',
})

// 组件无头化
const getPtClass = (key: keyof BreadcrumbPtProps) => {
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

const rootClass = computed(() => {
  if (props.unstyled) {
    return getPtClass('root')
  } else {
    return 'breadcrumb'
  }
})

provide('breadcrumb', {
  separator: props.separator,
  separatorIcon: props.separatorIcon,
})
</script>

<template>
  <div :class="rootClass" role="navigation" aria-label="Breadcrumb">
    <slot></slot>
  </div>
</template>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 1.5;
  color: #666;
}
</style>
