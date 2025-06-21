<script setup lang="ts">
import { computed, watch, onMounted, nextTick, ref, onUnmounted } from 'vue'
import {
  popoverTrigger,
  popoverContent,
  popoverArrow,
  popoverTitle,
  popoverBody,
} from './index.variants'
import type { PopoverProps } from './type'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { usePopover } from './composables/usePopover'

defineOptions({
  name: 'Popover',
})

const props = withDefaults(defineProps<PopoverProps>(), {
  modelValue: false,
  placement: 'bottom',
  trigger: 'click',
  showArrow: true,
  offset: 8,
  transition: 'none',
  teleport: true,
  zIndex: 1000,
  openDelay: 0,
  closeDelay: 0,
  followCursor: false,
  unbound: false,
  color: 'default',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

// 状态管理
const isOpen = ref(false)
const triggerRef = ref<HTMLElement | null>(null)
const popoverRef = ref<HTMLElement | null>(null)
const popoverId = `popover-${Math.random().toString(36).slice(2, 9)}`

// 计时器
let openTimer: ReturnType<typeof setTimeout> | null = null
let closeTimer: ReturnType<typeof setTimeout> | null = null

// 鼠标位置跟踪
const mouseX = ref(0)
const mouseY = ref(0)

// 打开Popover
const open = async () => {
  if (closeTimer) clearTimeout(closeTimer)
  if (props.disabled) return

  openTimer = setTimeout(() => {
    isOpen.value = true
    emit('update:modelValue', true)
    // 等待DOM更新后再计算位置
    nextTick(updatePosition)
  }, props.openDelay)
}

// 关闭Popover
const close = () => {
  if (openTimer) clearTimeout(openTimer)
  if (props.disabled) return

  closeTimer = setTimeout(() => {
    isOpen.value = false
    emit('update:modelValue', false)
  }, props.closeDelay)
}

// 切换Popover状态
const toggle = () => {
  if (isOpen.value) {
    close()
  } else {
    open()
  }
}

// 手动设置Popover状态
const setIsOpen = (value: boolean) => {
  if (value) {
    open()
  } else {
    close()
  }
}

// 计算和更新位置
const updatePosition = () => {
  const popover = popoverRef.value
  if (!popover || !isOpen.value) return

  // 获取当前鼠标位置
  const clientX = mouseX.value
  const clientY = mouseY.value

  // 如果是跟随鼠标或无绑定模式
  if (props.followCursor || props.unbound) {
    let top = 0
    let left = 0

    switch (props.placement) {
      case 'top':
        top = clientY - popover.offsetHeight - props.offset
        left = clientX - popover.offsetWidth / 2
        break
      case 'right':
        top = clientY - popover.offsetHeight / 2
        left = clientX + props.offset
        break
      case 'bottom':
        top = clientY + props.offset
        left = clientX - popover.offsetWidth / 2
        break
      case 'left':
        top = clientY - popover.offsetHeight / 2
        left = clientX - popover.offsetWidth - props.offset
        break
    }

    // 应用定位
    applyPosition(popover, top, left)
    return
  }

  // 如果是绑定到元素
  const trigger = triggerRef.value
  if (!trigger) return

  const triggerRect = trigger.getBoundingClientRect()
  const popoverRect = popover.getBoundingClientRect()

  // 根据placement计算位置
  let top = 0
  let left = 0

  // 计算中心点
  const triggerCenterX = triggerRect.left + triggerRect.width / 2
  const triggerCenterY = triggerRect.top + triggerRect.height / 2

  switch (props.placement) {
    case 'top':
      // 顶部中心对齐
      top = triggerRect.top - popoverRect.height - props.offset
      left = triggerCenterX - popoverRect.width / 2
      break
    case 'right':
      // 右侧中心对齐
      top = triggerCenterY - popoverRect.height / 2
      left = triggerRect.right + props.offset
      break
    case 'bottom':
      // 底部中心对齐
      top = triggerRect.bottom + props.offset
      left = triggerCenterX - popoverRect.width / 2
      break
    case 'left':
      // 左侧中心对齐
      top = triggerCenterY - popoverRect.height / 2
      left = triggerRect.left - popoverRect.width - props.offset
      break
  }

  // 应用定位
  applyPosition(popover, top, left)
}

// 应用定位并调整边界
const applyPosition = (element: HTMLElement, top: number, left: number) => {
  const arrowElement = element.querySelector(
    '[class*="popoverArrow"]',
  ) as HTMLElement

  // 边界检查
  left = Math.max(8, left)
  left = Math.min(left, window.innerWidth - element.offsetWidth - 8)
  top = Math.max(8, top)
  top = Math.min(top, window.innerHeight - element.offsetHeight - 8)

  // 设置定位样式
  element.style.position = 'fixed'
  element.style.top = `${top}px`
  element.style.left = `${left}px`
  element.style.zIndex = props.zIndex?.toString() || '1000'
  element.style.transition = 'none'

  // 如果有箭头且位置已经调整，需要修正箭头位置
  if (
    arrowElement &&
    props.showArrow &&
    !props.followCursor &&
    !props.unbound
  ) {
    // 获取触发元素
    const trigger = triggerRef.value
    if (!trigger) return

    const triggerRect = trigger.getBoundingClientRect()
    const popoverRect = element.getBoundingClientRect()

    // 设置箭头边框样式
    const borderColor = getComputedStyle(element).borderColor

    // 根据不同方向调整箭头位置和边框
    switch (props.placement) {
      case 'top':
      case 'bottom': {
        // 水平方向箭头居中对齐到触发元素
        const triggerCenter = triggerRect.left + triggerRect.width / 2
        const arrowLeft = triggerCenter - left
        // 确保箭头不会太靠近边缘
        const minArrowLeft = 12
        const maxArrowLeft = popoverRect.width - 12
        const safeArrowLeft = Math.max(
          minArrowLeft,
          Math.min(maxArrowLeft, arrowLeft),
        )
        arrowElement.style.left = `${safeArrowLeft}px`
        arrowElement.style.transform = 'rotate(45deg)'

        // 根据方向设置边框
        if (props.placement === 'top') {
          arrowElement.style.borderRight = `1px solid ${borderColor}`
          arrowElement.style.borderBottom = `1px solid ${borderColor}`
          arrowElement.style.borderLeft = 'none'
          arrowElement.style.borderTop = 'none'
        } else {
          arrowElement.style.borderLeft = `1px solid ${borderColor}`
          arrowElement.style.borderTop = `1px solid ${borderColor}`
          arrowElement.style.borderRight = 'none'
          arrowElement.style.borderBottom = 'none'
        }
        break
      }

      case 'left':
      case 'right': {
        // 垂直方向箭头居中对齐到触发元素
        const triggerMiddle = triggerRect.top + triggerRect.height / 2
        const arrowTop = triggerMiddle - top
        // 确保箭头不会太靠近边缘
        const minArrowTop = 12
        const maxArrowTop = popoverRect.height - 12
        const safeArrowTop = Math.max(
          minArrowTop,
          Math.min(maxArrowTop, arrowTop),
        )
        arrowElement.style.top = `${safeArrowTop}px`
        arrowElement.style.transform = 'rotate(45deg)'

        // 根据方向设置边框
        if (props.placement === 'left') {
          arrowElement.style.borderRight = `1px solid ${borderColor}`
          arrowElement.style.borderBottom = `1px solid ${borderColor}`
          arrowElement.style.borderLeft = 'none'
          arrowElement.style.borderTop = 'none'
        } else {
          arrowElement.style.borderLeft = `1px solid ${borderColor}`
          arrowElement.style.borderTop = `1px solid ${borderColor}`
          arrowElement.style.borderRight = 'none'
          arrowElement.style.borderBottom = 'none'
        }
        break
      }
    }
  }
}

// 事件处理函数
const handleMouseMove = (e: MouseEvent) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
  if ((props.followCursor || props.unbound) && isOpen.value) {
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

// 处理触发方式
const handleTriggerClick = () => {
  if (props.disabled) return
  if (props.trigger === 'click' || props.trigger === 'manual') {
    toggle()
  }
}

const handleTriggerMouseEnter = (e: MouseEvent) => {
  if (props.disabled) return
  mouseX.value = e.clientX
  mouseY.value = e.clientY
  if (props.trigger === 'hover') {
    open()
  }
}

const handleTriggerMouseLeave = () => {
  if (props.disabled) return
  if (props.trigger === 'hover') {
    close()
  }
}

const handleTriggerFocus = () => {
  if (props.disabled) return
  open()
}

const handleTriggerBlur = () => {
  if (props.disabled) return
  close()
}

// 监听点击外部事件
const handleClickOutside = (e: MouseEvent) => {
  if (
    isOpen.value &&
    !popoverRef.value?.contains(e.target as Node) &&
    !triggerRef.value?.contains(e.target as Node)
  ) {
    close()
  }
}

// 计算样式
const triggerClass = computed(() => {
  return popoverTrigger({
    disabled: props.disabled,
  })
})

const contentClass = computed(() => {
  return popoverContent({
    placement: props.placement,
    visible: isOpen.value,
    color: props.color,
  })
})

const arrowClass = computed(() => {
  return popoverArrow({
    placement: props.placement,
    color: props.color,
  })
})

const titleClass = computed(() => {
  return popoverTitle({
    color: props.color,
  })
})

const bodyClass = computed(() => {
  return popoverBody({
    color: props.color,
  })
})

// 计算内容样式
const contentStyle = computed(() => {
  const style: Record<string, string> = {
    zIndex: props.zIndex?.toString() || '1000',
    transition: 'none',
    boxShadow:
      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    maxWidth: '280px',
    overflow: 'hidden',
  }

  if (props.width) {
    style.width =
      typeof props.width === 'number' ? `${props.width}px` : props.width
  }

  return style
})

// 获取teleport目标
const getTeleportTo = computed(() => {
  if (props.teleport === false) return null
  if (typeof props.teleport === 'string') return props.teleport
  return 'body'
})

// 添加和移除事件监听
const addEventListeners = () => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', handleScroll, true)
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('mousemove', handleMouseMove)
}

const removeEventListeners = () => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', handleScroll, true)
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('mousemove', handleMouseMove)
}

// 生命周期钩子
onMounted(() => {
  addEventListeners()

  if (props.modelValue) {
    nextTick(() => {
      setIsOpen(true)
    })
  }
})

onUnmounted(() => {
  removeEventListeners()
  if (openTimer) clearTimeout(openTimer)
  if (closeTimer) clearTimeout(closeTimer)
})

// 监听modelValue变化
watch(
  () => props.modelValue,
  (val) => {
    if (val !== isOpen.value) {
      setIsOpen(val)
    }
  },
)

// 监听isOpen变化
watch(isOpen, (val) => {
  if (val) {
    nextTick(updatePosition)
  }
  // 与modelValue同步
  emit('update:modelValue', val)
})

// 当placement或offset等变化时，更新位置
watch(
  () => [props.placement, props.offset, props.followCursor, props.unbound],
  () => {
    if (isOpen.value) {
      nextTick(updatePosition)
    }
  },
)

// 向外部暴露方法
defineExpose({
  show: () => setIsOpen(true),
  hide: () => setIsOpen(false),
  toggle,
  updatePosition,
})
</script>

<template>
  <div class="relative inline-block" @mousemove="handleMouseMove">
    <!-- 触发元素，仅在非unbound模式下渲染 -->
    <div
      v-if="!unbound"
      ref="triggerRef"
      :class="triggerClass"
      :aria-describedby="popoverId"
      @click="handleTriggerClick"
      @mouseenter="handleTriggerMouseEnter"
      @mouseleave="handleTriggerMouseLeave"
      @focus="handleTriggerFocus"
      @blur="handleTriggerBlur"
    >
      <slot name="trigger"></slot>
    </div>

    <!-- 弹出内容 -->
    <teleport :to="getTeleportTo" :disabled="!getTeleportTo">
      <div
        v-if="isOpen && !disabled"
        ref="popoverRef"
        :class="contentClass"
        :style="contentStyle"
        :id="popoverId"
        role="tooltip"
        aria-live="polite"
      >
        <!-- 箭头元素 - 为了正确定位，重新排列DOM顺序，将箭头放在内容外面 -->
        <div
          v-if="showArrow && !followCursor && !unbound"
          :class="arrowClass"
        ></div>

        <div class="popover-inner">
          <!-- 标题 -->
          <div v-if="title" :class="titleClass">{{ title }}</div>

          <!-- 内容主体 -->
          <div :class="bodyClass">
            <slot>{{ content }}</slot>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>
