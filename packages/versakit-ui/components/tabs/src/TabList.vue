<script setup lang="ts">
import { computed, inject } from 'vue'
import { tabList } from './index.variants'
import type { TabListPassThroughAttributes, TabsContext } from './type'

const props = defineProps<{
  pt?: TabListPassThroughAttributes
}>()

// 注入选项卡上下文
const tabsContext = inject<TabsContext>('vk-tabs', {
  activeTab: '',
  setActiveTab: () => {},
  variant: 'line',
  size: 'md',
  placement: 'top',
  disabled: false,
  closable: false,
})

// 计算样式类
const classes = computed(() => {
  return tabList({
    placement: tabsContext.placement,
    variant: tabsContext.variant,
    size: tabsContext.size,
  })
})
</script>

<template>
  <div
    :class="classes"
    role="tablist"
    :aria-orientation="
      tabsContext.placement === 'left' || tabsContext.placement === 'right'
        ? 'vertical'
        : 'horizontal'
    "
    v-bind="{ ...$attrs, ...props.pt?.root }"
  >
    <slot />
  </div>
</template>
