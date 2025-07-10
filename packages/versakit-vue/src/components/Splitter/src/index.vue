<template>
  <div :class="classes" ref="_ref">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, toRefs, watch } from 'vue'
import { splitterStyle } from './index.variants'
import type { SplitterProps } from './type'
import { SplitterEmits } from './type'
import { useSplitter } from './use-splitter'

defineOptions({
  name: 'Splitter',
})

const props = withDefaults(defineProps<SplitterProps>(), {
  layout: 'horizontal',
  gutterSize: 4,
  minSize: 10,
  collapsible: false,
  stateful: false,
  stateKey: 'splitter-state',
  unstyled: false,
})

const emit = defineEmits(SplitterEmits)

const { layout } = toRefs(props)

const {
  _ref,
  paneRefs,
  paneSizes,
  paneCount,
  collapsedPanes,
  isDragging,
  registerPane,
  getPaneSize,
  togglePaneCollapse,
  loadPaneState,
} = useSplitter(props, emit)

// 提供上下文给子组件
provide('splitterContext', {
  layout: layout.value,
  registerPane,
  getPaneSize,
  togglePaneCollapse,
  collapsedPanes,
})

// 监听stateful属性，保存/加载面板状态
watch(
  () => props.stateful,
  (newValue) => {
    if (newValue) {
      loadPaneState()
    }
  },
  { immediate: true },
)

// 计算样式类
const classes = computed(() => {
  return props.unstyled
    ? props.pt?.root || ''
    : splitterStyle({
        layout: props.layout,
        class: props.pt?.root,
      })
})

defineExpose({
  _ref,
  paneRefs,
  paneSizes,
  paneCount,
  collapsedPanes,
  isDragging,
  togglePaneCollapse,
})
</script>
