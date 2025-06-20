<script setup lang="ts">
import { computed, watch, onMounted, onUnmounted, ref, nextTick } from 'vue'
import { useTooltip } from './composables/useTooltip.ts'
import { tooltipContent, tooltipArrow } from './index.variants'
import type { TooltipProps } from './type'

defineOptions({
  name: 'Tooltip',
})

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'top',
  openDelay: 0,
  closeDelay: 0,
  disabled: false,
  trigger: 'hover',
  color: 'default',
  arrow: true,
  offset: 8,
  followCursor: false,
  unbound: false,
  modelValue: false,
})

// 定义emit事件
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

// 鼠标位置跟踪
const mouseX = ref(0)
const mouseY = ref(0)

// 手动控制tooltip的打开状态
const manualIsOpen = ref(false)

// 使用useTooltip，传递参数
const tooltipInstance = useTooltip({
  openDelay: props.openDelay,
  closeDelay: props.closeDelay,
  placement: props.placement,
  offset: props.offset,
  followCursor: props.followCursor,
  unbound: props.unbound,
})

// 从useTooltip中解构值
const isOpen = tooltipInstance.isOpen
const triggerRef = tooltipInstance.triggerRef
const tooltipRef = tooltipInstance.tooltipRef
const tooltipId = tooltipInstance.tooltipId

// 使用类型断言获取setIsOpen方法
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setIsOpen = (tooltipInstance as any).setIsOpen as (value: boolean) => void

// 手动控制tooltip显示隐藏
const showTooltip = () => {
  manualIsOpen.value = true
  setIsOpen(true)
  // 直接显示时立即更新位置
  nextTick(() => {
    updatePosition()
  })
}

const hideTooltip = () => {
  manualIsOpen.value = false
  setIsOpen(false)
}

const toggleTooltip = () => {
  if (manualIsOpen.value) {
    hideTooltip()
  } else {
    showTooltip()
  }
}

// 内容样式
const contentClass = computed(() => {
  return tooltipContent({
    color: props.color,
    visible: true,
  })
})

// 箭头样式
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

// 自定义更新位置函数
const updatePosition = () => {
  const tooltip = tooltipRef.value
  if (!tooltip || !isOpen.value) return

  // 获取当前鼠标位置
  const clientX = mouseX.value
  const clientY = mouseY.value

  // 如果是跟随鼠标或无绑定模式
  if (props.followCursor || props.unbound) {
    let top = 0
    let left = 0

    switch (props.placement) {
      case 'top':
        top = clientY - tooltip.offsetHeight - props.offset
        left = clientX - tooltip.offsetWidth / 2
        break
      case 'right':
        top = clientY - tooltip.offsetHeight / 2
        left = clientX + props.offset
        break
      case 'bottom':
        top = clientY + props.offset
        left = clientX - tooltip.offsetWidth / 2
        break
      case 'left':
        top = clientY - tooltip.offsetHeight / 2
        left = clientX - tooltip.offsetWidth - props.offset
        break
    }

    // 应用定位
    applyPosition(tooltip, top, left)
    return
  }

  // 如果是绑定到元素
  const trigger = triggerRef.value
  if (!trigger) return

  const triggerRect = trigger.getBoundingClientRect()

  // 根据placement计算位置
  let top = 0
  let left = 0

  switch (props.placement) {
    case 'top':
      top = triggerRect.top - tooltip.offsetHeight - props.offset
      left = triggerRect.left + triggerRect.width / 2 - tooltip.offsetWidth / 2
      break
    case 'right':
      top = triggerRect.top + triggerRect.height / 2 - tooltip.offsetHeight / 2
      left = triggerRect.right + props.offset
      break
    case 'bottom':
      top = triggerRect.bottom + props.offset
      left = triggerRect.left + triggerRect.width / 2 - tooltip.offsetWidth / 2
      break
    case 'left':
      top = triggerRect.top + triggerRect.height / 2 - tooltip.offsetHeight / 2
      left = triggerRect.left - tooltip.offsetWidth - props.offset
      break
  }

  // 应用定位
  applyPosition(tooltip, top, left)
}

// 应用定位并调整边界
const applyPosition = (element: HTMLElement, top: number, left: number) => {
  // 边界检查
  left = Math.max(8, left)
  left = Math.min(left, window.innerWidth - element.offsetWidth - 8)
  top = Math.max(8, top)
  top = Math.min(top, window.innerHeight - element.offsetHeight - 8)

  // 设置定位样式 - 直接使用top和left而不是transform
  element.style.position = 'fixed'
  element.style.top = `${top}px`
  element.style.left = `${left}px`
  element.style.zIndex = '9999'
  // 移除过渡效果
  element.style.transition = 'none'
}

// 处理鼠标移动
const handleMouseMove = (e: MouseEvent) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY

  if (isOpen.value && (props.followCursor || props.unbound)) {
    updatePosition()
  }
}

// 处理窗口大小变化
const handleResize = () => {
  if (isOpen.value) {
    updatePosition()
  }
}

// 处理滚动事件
const handleScroll = () => {
  if (isOpen.value) {
    updatePosition()
  }
}

// 处理事件
const handleMouseEnter = (e: MouseEvent) => {
  if (props.disabled) return

  // 记录鼠标位置
  mouseX.value = e.clientX
  mouseY.value = e.clientY

  if (props.trigger === 'hover' || props.trigger === 'both') {
    setIsOpen(true)
    // 立即更新位置
    nextTick(updatePosition)
  }
}

const handleFocus = () => {
  if (props.disabled) return
  if (props.trigger === 'focus' || props.trigger === 'both') {
    setIsOpen(true)
    // 立即更新位置
    nextTick(updatePosition)
  }
}

const handleMouseLeave = () => {
  if (props.disabled) return
  if (props.trigger === 'hover' || props.trigger === 'both') {
    setIsOpen(false)
  }
}

const handleBlur = () => {
  if (props.disabled) return
  if (props.trigger === 'focus' || props.trigger === 'both') {
    setIsOpen(false)
  }
}

// 添加和移除事件监听
const addEventListeners = () => {
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', handleScroll, true)
}

const removeEventListeners = () => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', handleScroll, true)
}

// 事件监听
onMounted(() => {
  addEventListeners()

  // 如果是无绑定模式且有初始值，则设置初始状态
  if (props.unbound && props.modelValue) {
    manualIsOpen.value = true
    setIsOpen(true)
    // 立即更新位置
    nextTick(updatePosition)
  }
})

onUnmounted(() => {
  removeEventListeners()
})

// 监听isOpen确保准确显示
watch(isOpen, (value) => {
  if (value) {
    // 确保位置准确 - 立即更新位置而不是使用延时
    nextTick(updatePosition)
  }

  // 当为无绑定模式时，向外发送modelValue更新事件
  if (props.unbound) {
    emit('update:modelValue', value)
    manualIsOpen.value = value
  }
})

// 监听modelValue变化，当为无绑定模式时
watch(
  () => props.modelValue,
  (value) => {
    if (props.unbound) {
      manualIsOpen.value = value
      setIsOpen(value)
      if (value) {
        // 立即更新位置
        nextTick(updatePosition)
      }
    }
  },
)

// 向外部暴露方法
defineExpose({
  show: showTooltip,
  hide: hideTooltip,
  toggle: toggleTooltip,
  updatePosition,
})
</script>

<template>
  <!-- 触发元素包装器，仅在非unbound模式下渲染 -->
  <span
    v-if="!unbound"
    ref="triggerRef"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @focus="handleFocus"
    @blur="handleBlur"
    :aria-describedby="tooltipId"
    class="inline-block"
    role="button"
    tabindex="0"
  >
    <slot></slot>
  </span>

  <!-- 提示内容，没有过渡效果 -->
  <teleport to="body">
    <div
      v-if="isOpen && !disabled"
      ref="tooltipRef"
      :class="contentClass"
      :style="contentStyle"
      :id="tooltipId"
      role="tooltip"
      aria-live="polite"
    >
      <slot name="content">{{ content }}</slot>
      <div v-if="arrow && !followCursor && !unbound" :class="arrowClass"></div>
    </div>
  </teleport>
</template>
