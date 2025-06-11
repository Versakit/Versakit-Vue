<script setup lang="ts">
import { computed, inject } from 'vue'
import { collapsible } from './index.variants'
import type { CollapsibleTriggerProps, CollapsibleContext } from './type'

const props = withDefaults(defineProps<CollapsibleTriggerProps>(), {
  disabled: false,
  unstyled: false,
})

// 注入上下文
const context = inject<CollapsibleContext>('collapsible-context', {
  open: false,
  disabled: false,
  toggle: () => {},
})

// 计算最终的禁用状态 (优先使用props中的值)
const finalDisabled = computed(() => props.disabled || context.disabled)

// 计算样式
const classes = computed(() => {
  if (props.unstyled) {
    return {
      trigger: '',
      icon: '',
    }
  }
  return collapsible({
    disabled: finalDisabled.value,
    open: context.open,
  })
})

// 处理点击事件
const handleClick = () => {
  if (finalDisabled.value) return
  context.toggle()
}
</script>

<template>
  <button
    type="button"
    :class="classes.trigger"
    :aria-expanded="context.open"
    :disabled="finalDisabled"
    @click="handleClick"
  >
    <slot :open="context.open" :disabled="finalDisabled">
      <span>
        {{ context.open ? '收起' : '展开' }}
      </span>
      <svg
        :class="classes.icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd"
        />
      </svg>
    </slot>
  </button>
</template>
