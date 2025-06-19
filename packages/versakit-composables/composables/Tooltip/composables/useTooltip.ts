// useTooltip.ts
import { ref, onUnmounted, watch } from 'vue'

export interface UseTooltipOptions {
  openDelay?: number
  closeDelay?: number
  placement?: 'top' | 'right' | 'bottom' | 'left'
  offset?: number
}

export function useTooltip(options?: UseTooltipOptions) {
  const isOpen = ref(false)
  const triggerRef = ref<HTMLElement | null>(null)
  const tooltipRef = ref<HTMLElement | null>(null)

  let openTimer: ReturnType<typeof setTimeout> | null = null
  let closeTimer: ReturnType<typeof setTimeout> | null = null

  // 默认配置
  const defaultOptions: Required<UseTooltipOptions> = {
    openDelay: 0,
    closeDelay: 100,
    placement: 'top',
    offset: 8,
  }

  // 合并配置
  const config = {
    ...defaultOptions,
    ...options,
  }

  // 打开提示
  const open = () => {
    if (closeTimer) clearTimeout(closeTimer)
    openTimer = setTimeout(() => {
      isOpen.value = true
      // 在下一帧更新位置
      setTimeout(updatePosition, 0)
    }, config.openDelay)
  }

  // 关闭提示
  const close = () => {
    if (openTimer) clearTimeout(openTimer)
    closeTimer = setTimeout(() => {
      isOpen.value = false
    }, config.closeDelay)
  }

  // 计算并更新提示框位置
  const updatePosition = () => {
    if (!isOpen.value || !triggerRef.value || !tooltipRef.value) return

    const trigger = triggerRef.value
    const tooltip = tooltipRef.value

    const triggerRect = trigger.getBoundingClientRect()
    const tooltipRect = tooltip.getBoundingClientRect()

    // 根据placement计算位置
    let top = 0
    let left = 0
    const offset = config.offset

    switch (config.placement) {
      case 'top':
        top = triggerRect.top - tooltipRect.height - offset
        left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2
        break
      case 'right':
        top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2
        left = triggerRect.right + offset
        break
      case 'bottom':
        top = triggerRect.bottom + offset
        left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2
        break
      case 'left':
        top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2
        left = triggerRect.left - tooltipRect.width - offset
        break
    }

    // 调整位置避免超出视口
    // 确保不超出左侧
    left = Math.max(8, left)
    // 确保不超出右侧
    left = Math.min(left, window.innerWidth - tooltipRect.width - 8)
    // 确保不超出顶部
    top = Math.max(8, top)
    // 确保不超出底部
    top = Math.min(top, window.innerHeight - tooltipRect.height - 8)

    // 设置位置
    tooltip.style.top = `${top + window.scrollY}px`
    tooltip.style.left = `${left + window.scrollX}px`
  }

  // 监听窗口大小变化，更新位置
  const onResize = () => {
    if (isOpen.value) {
      updatePosition()
    }
  }

  // 监听滚动事件，更新位置
  const onScroll = () => {
    if (isOpen.value) {
      updatePosition()
    }
  }

  // 监听isOpen变化，添加/移除事件监听器
  watch(isOpen, (value) => {
    if (value) {
      window.addEventListener('resize', onResize)
      window.addEventListener('scroll', onScroll, true)
    } else {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll, true)
    }
  })

  // 事件处理函数
  const onMouseEnter = () => open()
  const onFocus = () => open()
  const onMouseLeave = () => close()
  const onBlur = () => close()

  // 清理
  onUnmounted(() => {
    if (openTimer) clearTimeout(openTimer)
    if (closeTimer) clearTimeout(closeTimer)
    window.removeEventListener('resize', onResize)
    window.removeEventListener('scroll', onScroll, true)
  })

  // 生成唯一ID
  const tooltipId = `tooltip-${Math.random().toString(36).slice(2, 9)}`

  return {
    isOpen,
    triggerRef,
    tooltipRef,
    tooltipId,
    updatePosition,
    onMouseEnter,
    onFocus,
    onMouseLeave,
    onBlur,
  }
}
