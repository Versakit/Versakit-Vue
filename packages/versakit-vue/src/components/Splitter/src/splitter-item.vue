<template>
  <div
    :class="classes"
    ref="_ref"
    :style="{
      [splitterContext.layout === 'horizontal' ? 'width' : 'height']:
        size + '%',
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { splitterItemStyle } from './index.variants'
import type { SplitterItemProps } from './type'
import { useSplitterItem } from './use-splitter'

defineOptions({
  name: 'VSplitterItem',
})

const props = withDefaults(defineProps<SplitterItemProps>(), {
  size: 0,
  minSize: 10,
  unstyled: false,
})

const { _ref, splitterContext, panelIndex } = useSplitterItem()

// 在组件挂载后注册面板
onMounted(() => {
  if (splitterContext && typeof splitterContext.registerPanel === 'function') {
    const index = splitterContext.registerPanel(props.size, props.minSize)
    panelIndex.value = index
  }
})

// 计算样式类
const classes = computed(() => {
  return props.unstyled
    ? props.pt?.root || ''
    : splitterItemStyle({
        class: props.pt?.root,
      })
})

// 计算面板尺寸
const size = computed(() => {
  return props.size || 100
})

defineExpose({
  _ref,
})
</script>
