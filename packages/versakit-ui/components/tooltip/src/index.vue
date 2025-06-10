<script setup lang="ts">
import { computed, ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { tooltip } from './index.variants'
import type { TooltipProps, TooltipPassThroughAttributes } from './type'

const props = withDefaults(
  defineProps<TooltipProps & { pt?: TooltipPassThroughAttributes }>(),
  {
    placement: 'top',
    trigger: 'hover',
    disabled: false,
    showDelay: 200,
    hideDelay: 200,
    theme: 'auto',
    size: 'md',
    variant: 'primary',
    arrow: true,
    interactive: false,
    maxWidth: '300px',
    zIndex: 1000,
    offset: 8,
    unstyled: false,
  },
)

const emit = defineEmits(['update:modelValue', 'show', 'hide'])

// 内部状态
const isVisible = ref(false)
const triggerRef = ref<HTMLElement | null>(null)
const tooltipRef = ref<HTMLElement | null>(null)
const arrowRef = ref<HTMLElement | null>(null)
const showTimeoutId = ref<number | null>(null)
const hideTimeoutId = ref<number | null>(null)
const tooltipState = ref<'open' | 'closed'>('closed')

// 元素位置和样式
const tooltipStyles = ref({
  top: '0px',
  left: '0px',
  maxWidth:
    typeof props.maxWidth === 'number' ? `${props.maxWidth}px` : props.maxWidth,
  zIndex: props.zIndex,
})

const arrowStyles = ref<Record<string, string>>({
  top: '0px',
  left: '0px',
})

// 计算样式类
const classes = computed(() => {
  if (props.unstyled) {
    return {
      root: '',
      content: '',
      arrow: '',
    }
  }

  const tooltipStyles = tooltip({
    theme: props.theme,
    size: props.size,
    variant: props.variant,
    disabled: props.disabled,
    trigger: props.trigger,
  })

  return tooltipStyles
})

// 监听modelValue
watch(
  () => props.modelValue,
  (val) => {
    if (val === true) {
      showTooltip()
    } else if (val === false) {
      hideTooltip()
    }
  },
)

// 显示提示框
const showTooltip = () => {
  if (props.disabled) return

  // 清除任何现有的定时器
  if (showTimeoutId.value !== null) {
    clearTimeout(showTimeoutId.value)
    showTimeoutId.value = null
  }
  if (hideTimeoutId.value !== null) {
    clearTimeout(hideTimeoutId.value)
    hideTimeoutId.value = null
  }

  showTimeoutId.value = window.setTimeout(() => {
    isVisible.value = true
    tooltipState.value = 'open'
    emit('update:modelValue', true)
    emit('show')

    nextTick(() => {
      updatePosition()
    })
  }, props.showDelay)
}

// 隐藏提示框
const hideTooltip = () => {
  if (props.disabled) return

  // 清除任何现有的定时器
  if (showTimeoutId.value !== null) {
    clearTimeout(showTimeoutId.value)
    showTimeoutId.value = null
  }
  if (hideTimeoutId.value !== null) {
    clearTimeout(hideTimeoutId.value)
    hideTimeoutId.value = null
  }

  hideTimeoutId.value = window.setTimeout(() => {
    tooltipState.value = 'closed'

    // 给动画一点时间完成
    setTimeout(() => {
      isVisible.value = false
      emit('update:modelValue', false)
      emit('hide')
    }, 200)
  }, props.hideDelay)
}

// 更新提示框位置
const updatePosition = () => {
  if (!triggerRef.value || !tooltipRef.value) return

  const triggerRect = triggerRef.value.getBoundingClientRect()
  const tooltipRect = tooltipRef.value.getBoundingClientRect()
  const arrowSize =
    props.arrow && arrowRef.value ? arrowRef.value.offsetWidth : 0

  // 计算基本位置
  let top = 0
  let left = 0
  let arrowPos: Record<string, string> = {}

  // 根据不同位置计算
  switch (props.placement) {
    case 'top':
      top = triggerRect.top - tooltipRect.height - props.offset
      left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2
      if (props.arrow) {
        arrowPos = {
          bottom: `-${arrowSize / 2}px`,
          left: `calc(50% - ${arrowSize / 2}px)`,
        }
      }
      break
    case 'top-start':
      top = triggerRect.top - tooltipRect.height - props.offset
      left = triggerRect.left
      if (props.arrow) {
        arrowPos = {
          bottom: `-${arrowSize / 2}px`,
          left: `${Math.min(tooltipRect.width / 2, triggerRect.width / 2)}px`,
        }
      }
      break
    case 'top-end':
      top = triggerRect.top - tooltipRect.height - props.offset
      left = triggerRect.right - tooltipRect.width
      if (props.arrow) {
        arrowPos = {
          bottom: `-${arrowSize / 2}px`,
          right: `${Math.min(tooltipRect.width / 2, triggerRect.width / 2)}px`,
        }
      }
      break
    case 'bottom':
      top = triggerRect.bottom + props.offset
      left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2
      if (props.arrow) {
        arrowPos = {
          top: `-${arrowSize / 2}px`,
          left: `calc(50% - ${arrowSize / 2}px)`,
        }
      }
      break
    case 'bottom-start':
      top = triggerRect.bottom + props.offset
      left = triggerRect.left
      if (props.arrow) {
        arrowPos = {
          top: `-${arrowSize / 2}px`,
          left: `${Math.min(tooltipRect.width / 2, triggerRect.width / 2)}px`,
        }
      }
      break
    case 'bottom-end':
      top = triggerRect.bottom + props.offset
      left = triggerRect.right - tooltipRect.width
      if (props.arrow) {
        arrowPos = {
          top: `-${arrowSize / 2}px`,
          right: `${Math.min(tooltipRect.width / 2, triggerRect.width / 2)}px`,
        }
      }
      break
    case 'left':
      top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2
      left = triggerRect.left - tooltipRect.width - props.offset
      if (props.arrow) {
        arrowPos = {
          right: `-${arrowSize / 2}px`,
          top: `calc(50% - ${arrowSize / 2}px)`,
        }
      }
      break
    case 'left-start':
      top = triggerRect.top
      left = triggerRect.left - tooltipRect.width - props.offset
      if (props.arrow) {
        arrowPos = {
          right: `-${arrowSize / 2}px`,
          top: `${Math.min(tooltipRect.height / 2, triggerRect.height / 2)}px`,
        }
      }
      break
    case 'left-end':
      top = triggerRect.bottom - tooltipRect.height
      left = triggerRect.left - tooltipRect.width - props.offset
      if (props.arrow) {
        arrowPos = {
          right: `-${arrowSize / 2}px`,
          bottom: `${Math.min(tooltipRect.height / 2, triggerRect.height / 2)}px`,
        }
      }
      break
    case 'right':
      top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2
      left = triggerRect.right + props.offset
      if (props.arrow) {
        arrowPos = {
          left: `-${arrowSize / 2}px`,
          top: `calc(50% - ${arrowSize / 2}px)`,
        }
      }
      break
    case 'right-start':
      top = triggerRect.top
      left = triggerRect.right + props.offset
      if (props.arrow) {
        arrowPos = {
          left: `-${arrowSize / 2}px`,
          top: `${Math.min(tooltipRect.height / 2, triggerRect.height / 2)}px`,
        }
      }
      break
    case 'right-end':
      top = triggerRect.bottom - tooltipRect.height
      left = triggerRect.right + props.offset
      if (props.arrow) {
        arrowPos = {
          left: `-${arrowSize / 2}px`,
          bottom: `${Math.min(tooltipRect.height / 2, triggerRect.height / 2)}px`,
        }
      }
      break
  }

  // 边界调整，防止超出视口
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  // 水平边界调整
  if (left < 0) {
    left = 0
  } else if (left + tooltipRect.width > viewportWidth) {
    left = viewportWidth - tooltipRect.width
  }

  // 垂直边界调整
  if (top < 0) {
    top = 0
  } else if (top + tooltipRect.height > viewportHeight) {
    top = viewportHeight - tooltipRect.height
  }

  // 设置位置
  tooltipStyles.value = {
    ...tooltipStyles.value,
    top: `${top}px`,
    left: `${left}px`,
  }

  // 设置箭头位置
  if (props.arrow) {
    arrowStyles.value = arrowPos
  }
}

// 设置事件监听
const addEvents = () => {
  if (!triggerRef.value) return

  // 点击外部关闭处理函数
  const handleDocumentClick = (e: MouseEvent) => {
    if (
      isVisible.value &&
      triggerRef.value &&
      !triggerRef.value.contains(e.target as Node) &&
      tooltipRef.value &&
      !tooltipRef.value.contains(e.target as Node)
    ) {
      hideTooltip()
    }
  }

  // 点击触发切换显示/隐藏
  const handleClick = () => {
    if (isVisible.value) {
      hideTooltip()
    } else {
      showTooltip()
    }
  }

  // 根据触发方式添加事件监听
  if (props.trigger === 'hover') {
    triggerRef.value.addEventListener('mouseenter', showTooltip)
    triggerRef.value.addEventListener('mouseleave', hideTooltip)

    // 如果是交互式，添加tooltip本身的hover事件
    if (props.interactive && tooltipRef.value) {
      tooltipRef.value.addEventListener('mouseenter', showTooltip)
      tooltipRef.value.addEventListener('mouseleave', hideTooltip)
    }
  } else if (props.trigger === 'click') {
    triggerRef.value.addEventListener('click', handleClick)
    document.addEventListener('click', handleDocumentClick)
  } else if (props.trigger === 'focus') {
    triggerRef.value.addEventListener('focus', showTooltip)
    triggerRef.value.addEventListener('blur', hideTooltip)
  }

  // 窗口大小变化时更新位置
  window.addEventListener('resize', updatePosition)
  window.addEventListener('scroll', updatePosition, true)
}

// 移除事件监听
const removeEvents = () => {
  if (!triggerRef.value) return

  // 点击外部关闭处理函数
  const handleDocumentClick = (e: MouseEvent) => {
    if (
      isVisible.value &&
      triggerRef.value &&
      !triggerRef.value.contains(e.target as Node) &&
      tooltipRef.value &&
      !tooltipRef.value.contains(e.target as Node)
    ) {
      hideTooltip()
    }
  }

  // 点击触发切换显示/隐藏
  const handleClick = () => {
    if (isVisible.value) {
      hideTooltip()
    } else {
      showTooltip()
    }
  }

  // 根据触发方式移除事件监听
  if (props.trigger === 'hover') {
    triggerRef.value.removeEventListener('mouseenter', showTooltip)
    triggerRef.value.removeEventListener('mouseleave', hideTooltip)

    if (props.interactive && tooltipRef.value) {
      tooltipRef.value.removeEventListener('mouseenter', showTooltip)
      tooltipRef.value.removeEventListener('mouseleave', hideTooltip)
    }
  } else if (props.trigger === 'click') {
    triggerRef.value.removeEventListener('click', handleClick)
    document.removeEventListener('click', handleDocumentClick)
  } else if (props.trigger === 'focus') {
    triggerRef.value.removeEventListener('focus', showTooltip)
    triggerRef.value.removeEventListener('blur', hideTooltip)
  }

  // 移除窗口事件
  window.removeEventListener('resize', updatePosition)
  window.removeEventListener('scroll', updatePosition, true)
}

// 生命周期钩子
onMounted(() => {
  nextTick(() => {
    addEvents()

    // 如果初始设置为显示，则显示提示框
    if (props.modelValue) {
      showTooltip()
    }
  })
})

onBeforeUnmount(() => {
  removeEvents()

  // 清除任何存在的定时器
  if (showTimeoutId.value !== null) {
    clearTimeout(showTimeoutId.value)
    showTimeoutId.value = null
  }
  if (hideTimeoutId.value !== null) {
    clearTimeout(hideTimeoutId.value)
    hideTimeoutId.value = null
  }
})
</script>

<template>
  <div ref="triggerRef" :class="classes.root" v-bind="props.pt?.root">
    <slot></slot>

    <teleport to="body">
      <div
        v-if="isVisible"
        ref="tooltipRef"
        role="tooltip"
        :class="[classes.content, 'vk-tooltip-content']"
        :style="tooltipStyles"
        :aria-label="ariaLabel"
        :data-side="placement.split('-')[0]"
        :data-variant="variant"
        :data-state="tooltipState"
        :data-interactive="interactive ? 'true' : 'false'"
        :data-trigger="trigger"
        v-bind="props.pt?.content"
      >
        <slot name="content">
          {{ content }}
        </slot>

        <div
          v-if="arrow"
          ref="arrowRef"
          :class="[classes.arrow, 'vk-tooltip-arrow']"
          :style="arrowStyles"
          :data-variant="variant"
          :data-state="tooltipState"
          v-bind="props.pt?.arrow"
        >
          <slot name="arrow"></slot>
        </div>
      </div>
    </teleport>
  </div>
</template>
