<template>
  <div v-show="isActive" :class="rootClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import type { TabItemProps } from './type'

defineOptions({
  name: 'TabItem',
})

const props = withDefaults(defineProps<TabItemProps>(), {
  disabled: false,
  unstyled: false,
})

// 注入activeTab
const activeTab = inject<string | number>('activeTab', '')

// 判断当前标签页是否激活
const isActive = computed(() => activeTab === props.name)

// 计算根元素样式
const rootClass = computed(() => {
  return props.unstyled ? props.pt?.root || '' : ''
})
</script>
