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
  name: 'VKTooltip',
})

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'top',
  openDelay: 0,
  closeDelay: 100,
  disabled: false,
  trigger: 'hover',
  color: 'default',
  arrow: true,
})

const {
  isOpen,
  triggerRef,
  tooltipRef,
  tooltipId,
  onMouseEnter,
  onFocus,
  onMouseLeave,
  onBlur,
} = useTooltip({
  openDelay: props.openDelay,
  closeDelay: props.closeDelay,
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
  const style: Record<string, string> = {}

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
  <div :class="containerClass">
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
      <transition name="tooltip-fade">
        <div
          v-show="isOpen && !props.disabled"
          ref="tooltipRef"
          :class="contentClass"
          :style="contentStyle"
          :id="tooltipId"
          role="tooltip"
        >
          {{ props.content }}
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
</style>
