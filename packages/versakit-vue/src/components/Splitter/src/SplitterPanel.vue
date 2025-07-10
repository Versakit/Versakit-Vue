<template>
  <div ref="panelRef" :class="classes">
    <div :class="contentClasses">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, ref, watch } from 'vue'
import type { SplitterPanelProps } from './type'
import { SplitterPanelEmits } from './type'
import { splitterStyle } from './index.variants'

// 定义props和emits
const props = withDefaults(defineProps<SplitterPanelProps>(), {
  size: '1fr',
  minSize: '0',
  maxSize: '1fr',
  resizable: true,
  collapsible: false,
  collapsed: false,
})

const emit = defineEmits(SplitterPanelEmits)

// 注入父Splitter上下文
const panelRef = ref<HTMLElement | null>(null)
const splitter = inject('splitter', {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  registerPanel: (panel: HTMLElement, index: number) => {},
  direction: 'horizontal',
  index: -1,
})

// 监听props变化
watch(
  () => props.size,
  (newSize) => {
    if (newSize !== undefined && panelRef.value) {
      if (splitter.direction === 'horizontal') {
        panelRef.value.style.width = newSize
      } else {
        panelRef.value.style.height = newSize
      }
    }
  },
)

watch(
  () => props.collapsed,
  (newCollapsed) => {
    emit('update:collapsed', newCollapsed)
  },
)

// 注册面板
onMounted(() => {
  if (panelRef.value && splitter.index >= 0) {
    splitter.registerPanel(panelRef.value, splitter.index)
  }
})

// 计算样式
const classes = computed(() => {
  if (props.unstyled) {
    return props.pt?.root || ''
  }

  return splitterStyle().panel()
})

const contentClasses = computed(() => {
  if (props.unstyled) {
    return props.pt?.content || ''
  }

  return 'h-full w-full'
})
</script>
