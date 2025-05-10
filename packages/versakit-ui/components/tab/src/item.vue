<script setup lang="ts">
import { inject, onMounted, onUnmounted } from 'vue'
import type { TabItemPt, TabItemProps } from '../type'

const props = defineProps<TabItemProps>()

const { activeTab, registerTab, unregisterTab } = inject('tabs') as any

// 组件无头化处理
const getPtClass = (key: keyof TabItemPt) => {
  const ptVal = props.pt?.[key]
  return typeof ptVal === 'string' ? ptVal : ''
}

onMounted(() => {
  registerTab(props)
})

onUnmounted(() => {
  unregisterTab(props.name)
})
</script>

<template>
  <div
    v-show="activeTab === name"
    :class="[props.unstyled ? '' : 'tabs-pane', getPtClass('root')]"
    role="tabpanel"
    :aria-labelledby="`tab-${name}`"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.tabs-pane {
  padding: 16px;
}
</style>
