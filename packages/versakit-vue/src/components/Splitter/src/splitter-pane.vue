<template>
  <div :class="classes" ref="_ref" :style="panelStyles">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { splitterPaneStyle } from './index.variants'
import type { SplitterPaneProps } from './type'
import { useSplitterPane } from './use-splitter'

defineOptions({
  name: 'SplitterPane',
})

const props = withDefaults(defineProps<SplitterPaneProps>(), {
  size: 0,
  minSize: 10,
  maxSize: 100,
  resizable: true,
  collapsible: false,
  collapsedSize: 36,
  unstyled: false,
})

const { _ref, splitterContext, panelIndex, collapsed } = useSplitterPane()

// 在组件挂载后注册面板
onMounted(() => {
  if (splitterContext && typeof splitterContext.registerPane === 'function') {
    const index = splitterContext.registerPane({
      size: props.size,
      minSize: props.minSize,
      maxSize: props.maxSize,
      resizable: props.resizable,
      collapsible: props.collapsible,
      collapsedSize: props.collapsedSize,
    })
    panelIndex.value = index
  }
})

// 计算样式类
const classes = computed(() => {
  return props.unstyled
    ? props.pt?.root || ''
    : splitterPaneStyle({
        collapsed: collapsed.value,
        class:
          collapsed.value && !props.unstyled
            ? props.pt?.collapsed
            : props.pt?.root,
      })
})

// 计算面板样式
const panelStyles = computed(() => {
  const styles: Record<string, string> = {}
  const dimension =
    splitterContext?.layout === 'horizontal' ? 'width' : 'height'

  if (splitterContext) {
    const size = splitterContext.getPaneSize(panelIndex.value)
    if (size !== undefined) {
      styles[dimension] = `${size}%`
    }
  }

  return styles
})
</script>
