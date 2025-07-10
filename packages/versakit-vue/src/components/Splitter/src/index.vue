<template>
  <div
    ref="rootRef"
    :class="styles.root"
    role="separator"
    :aria-orientation="
      props.direction === 'vertical' ? 'horizontal' : 'vertical'
    "
  >
    <template v-for="(_, index) in panelsCount" :key="index">
      <!-- 面板 -->
      <div
        v-if="index < panelsCount"
        :ref="(el) => el && registerPanel(el as HTMLElement, index)"
        :class="styles.wrapper"
        :style="getPanelStyle(index)"
      >
        <slot :name="`panel-${index}`">
          <div :class="styles.panel">
            <slot :name="`panel-${index}-content`">Panel {{ index + 1 }}</slot>
          </div>
        </slot>
      </div>

      <!-- 分割条 -->
      <div
        v-if="index < panelsCount - 1"
        :ref="(el) => el && registerGutter(el as HTMLElement, index)"
        :class="styles.gutter"
        @mousedown="onGutterMouseDown($event, index)"
        @touchstart="onGutterMouseDown($event, index)"
        tabindex="0"
        :aria-label="`调整${isHorizontal ? '宽度' : '高度'}`"
        :aria-controls="`panel-${index},panel-${index + 1}`"
        @keydown.left="handleGutterKeyDown($event, index, -1)"
        @keydown.right="handleGutterKeyDown($event, index, 1)"
        @keydown.up="handleGutterKeyDown($event, index, -1)"
        @keydown.down="handleGutterKeyDown($event, index, 1)"
      >
        <slot :name="`gutter-${index}`">
          <div :class="styles.gutterHandle">
            <slot :name="`gutter-${index}-handle`">
              <svg
                v-if="isHorizontal"
                :class="styles.gutterIcon"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="8" y1="9" x2="8" y2="15"></line>
                <line x1="16" y1="9" x2="16" y2="15"></line>
              </svg>
              <svg
                v-else
                :class="styles.gutterIcon"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <line x1="9" y1="8" x2="15" y2="8"></line>
                <line x1="9" y1="16" x2="15" y2="16"></line>
              </svg>
            </slot>
          </div>
        </slot>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, useSlots } from 'vue'
import { splitterStyle } from './index.variants'
import type { SplitterProps } from './type'
import { SplitterEmits } from './type'
import { useSplitter } from './use-splitter'

// 定义props和emits
const props = withDefaults(defineProps<SplitterProps>(), {
  direction: 'horizontal',
  size: 'md',
  solid: false,
  resizable: true,
  dotted: false,
  dashed: false,
  showIndicator: true,
  unstyled: false,
  panels: () => [],
})

const emit = defineEmits(SplitterEmits)

// 使用splitter hook
const {
  rootRef,
  panelSizes,
  isHorizontal,
  registerPanel,
  registerGutter,
  onGutterMouseDown,
  toggleCollapse,
  initPanelSizes,
} = useSplitter(props, emit)

// 计算面板数量
const panelsCount = computed(() => {
  // 从slots数量推断面板数量
  const slots = useSlots()
  const slotsCount =
    Object.keys(slots).filter((name) => name.startsWith('panel-')).length / 2

  // 如果有明确配置的panels，使用其长度
  const configCount = props.panels?.length || 0

  // 使用更大的值，确保有足够的面板
  return Math.max(slotsCount, configCount, 2) // 至少2个面板
})

// 获取面板样式
const getPanelStyle = (index: number) => {
  const panelSize = panelSizes[index] || {}
  const sizeProperty = isHorizontal.value ? 'width' : 'height'

  const style: Record<string, string> = {}

  // 如果有指定大小
  if (panelSize.size) {
    style[sizeProperty] = panelSize.size
  }

  // 如果已折叠
  if (panelSize.collapsed) {
    style[sizeProperty] = '0'
    style.overflow = 'hidden'
  }

  return style
}

// 处理键盘事件
const handleGutterKeyDown = (
  event: KeyboardEvent,
  gutterIndex: number,
  direction: number,
) => {
  // 仅在组件可调整大小时处理
  if (!props.resizable) return

  event.preventDefault()

  const step = event.shiftKey ? 10 : 1 // 按住Shift键时移动更大距离

  // 获取相关面板
  const leftPanel = panelSizes[gutterIndex]
  const rightPanel = panelSizes[gutterIndex + 1]

  if (!leftPanel || !rightPanel) return

  // 获取当前尺寸
  const leftSize = parseFloat(leftPanel.size || '0')
  const rightSize = parseFloat(rightPanel.size || '0')

  // 根据方向调整大小
  const change = step * direction

  // 更新大小
  leftPanel.size = `${leftSize + change}px`
  rightPanel.size = `${rightSize - change}px`

  // 通知变化
  initPanelSizes()
}

// 计算样式
const styles = computed(() => {
  if (props.unstyled) {
    return {
      root: props.pt?.root || '',
      wrapper: props.pt?.wrapper || '',
      panel: props.pt?.panel || '',
      gutter: props.pt?.gutter || '',
      gutterHandle: props.pt?.gutterHandle || '',
      gutterIcon: props.pt?.gutterIcon || '',
    }
  }

  const { root, wrapper, panel, gutter, gutterHandle, gutterIcon } =
    splitterStyle({
      direction: props.direction,
      size: props.size,
      solid: props.solid,
      dotted: props.dotted,
      dashed: props.dashed,
      disabled: !props.resizable,
    })

  return {
    root: root(),
    wrapper: wrapper(),
    panel: panel(),
    gutter: gutter(),
    gutterHandle: gutterHandle(),
    gutterIcon: gutterIcon(),
  }
})

// 暴露方法
defineExpose({
  toggleCollapse,
  initPanelSizes,
})

// 为子组件提供上下文
provide('splitter', {
  registerPanel,
  direction: props.direction,
})
</script>

<style>
.horizontal-splitter-gutter {
  cursor: col-resize;
}

.vertical-splitter-gutter {
  cursor: row-resize;
}
</style>
