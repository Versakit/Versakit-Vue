<script setup lang="ts">
import { computed, inject } from 'vue'
import { tabPanels } from './index.variants'
import type { TabPanelsPassThroughAttributes, TabsContext } from './type'

const props = defineProps<{
  pt?: TabPanelsPassThroughAttributes
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
  return tabPanels({
    placement: tabsContext.placement,
  })
})
</script>

<template>
  <div :class="classes" v-bind="{ ...$attrs, ...props.pt?.root }">
    <slot />
  </div>
</template>
