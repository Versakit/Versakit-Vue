<script setup lang="ts">
import { computed } from 'vue'
import { useTooltip } from '@versakit/composables'
import {
  tooltipContainer,
  tooltipContent,
  tooltipArrow,
} from './index.variants'
import type { TooltipProps } from './type'

defineOptions({
  name: 'Tooltip',
})

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'top',
  openDelay: 0,
  closeDelay: 100,
  disabled: false,
  trigger: 'hover',
  color: 'default',
  arrow: true,
  offset: 8,
})

const {
  isOpen,
  triggerRef,
  tooltipRef,
  tooltipId,
  updatePosition,
  onMouseEnter,
  onFocus,
  onMouseLeave,
  onBlur,
} = useTooltip({
  openDelay: props.openDelay,
  closeDelay: props.closeDelay,
  placement: props.placement,
  offset: props.offset,
})

// 计算样式
const containerClass = computed(() => {
  return tooltipContainer()
})

const contentClass = computed(() => {
  return tooltipContent({
    color: props.color,
    placement: props.placement,
    visible: isOpen.value && !props.disabled,
  })
})

const arrowClass = computed(() => {
  return tooltipArrow({
    color: props.color,
    placement: props.placement,
  })
})

// 计算内容样式
const contentStyle = computed(() => {
  const style: Record<string, string> = {
    position: 'absolute',
    zIndex: '9999',
    top: '0',
    left: '0',
  }

  if (props.maxWidth) {
    style.maxWidth =
      typeof props.maxWidth === 'number'
        ? `${props.maxWidth}px`
        : props.maxWidth
  }

  return style
})

// 处理事件
const handleMouseEnter = () => {
  if (props.disabled) return
  if (props.trigger === 'hover' || props.trigger === 'both') {
    onMouseEnter()
  }
}

const handleFocus = () => {
  if (props.disabled) return
  if (props.trigger === 'focus' || props.trigger === 'both') {
    onFocus()
  }
}

const handleMouseLeave = () => {
  if (props.disabled) return
  if (props.trigger === 'hover' || props.trigger === 'both') {
    onMouseLeave()
  }
}

const handleBlur = () => {
  if (props.disabled) return
  if (props.trigger === 'focus' || props.trigger === 'both') {
    onBlur()
  }
}
</script>

<template>
  <div
    :class="containerClass"
    style="display: inline-block; position: relative"
  >
    <!-- 触发元素 -->
    <div
      ref="triggerRef"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @focus="handleFocus"
      @blur="handleBlur"
      :aria-describedby="tooltipId"
    >
      <slot></slot>
    </div>

    <!-- 提示内容 -->
    <teleport to="body">
      <transition name="tooltip-fade" @after-enter="updatePosition">
        <div
          v-show="isOpen && !props.disabled"
          ref="tooltipRef"
          :class="contentClass"
          :style="contentStyle"
          :id="tooltipId"
          role="tooltip"
        >
          <slot name="content">{{ props.content }}</slot>
          <div v-if="props.arrow" :class="arrowClass"></div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<style scoped>
.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
  transition:
    opacity 0.15s,
    transform 0.15s;
}

.tooltip-fade-enter-from,
.tooltip-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
