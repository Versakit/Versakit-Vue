// useTooltip.ts
import { ref, onUnmounted, watch, onMounted } from 'vue'

export interface UseTooltipOptions {
  openDelay?: number
  closeDelay?: number
  placement?: 'top' | 'right' | 'bottom' | 'left'
  offset?: number
  followCursor?: boolean
  unbound?: boolean
}

export function useTooltip(options?: UseTooltipOptions) {
  const isOpen = ref(false)
  const triggerRef = ref<HTMLElement | null>(null)
  const tooltipRef = ref<HTMLElement | null>(null)

  let openTimer: ReturnType<typeof setTimeout> | null = null
  let closeTimer: ReturnType<typeof setTimeout> | null = null
  let mousePosX = 0
  let mousePosY = 0

  // 默认配置
  const defaultOptions: Required<UseTooltipOptions> = {
    openDelay: 0,
    closeDelay: 100,
    placement: 'top',
    offset: 8,
    followCursor: false,
    unbound: false,
  }

  // 合并配置
  const config = {
    ...defaultOptions,
    ...options,
  }

  // 跟踪鼠标位置
  const trackMouse = (e: MouseEvent) => {
    mousePosX = e.clientX
    mousePosY = e.clientY
    if ((config.followCursor || config.unbound) && isOpen.value) {
      updatePosition()
    }
  }

  // 打开提示
  const open = () => {
    if (closeTimer) clearTimeout(closeTimer)
    openTimer = setTimeout(() => {
      isOpen.value = true
      // 在下一帧更新位置
      requestAnimationFrame(updatePosition)
    }, config.openDelay)
  }

  // 关闭提示
  const close = () => {
    if (openTimer) clearTimeout(openTimer)
    closeTimer = setTimeout(() => {
      isOpen.value = false
    }, config.closeDelay)
  }

  // 手动设置打开状态
  const setIsOpen = (value: boolean) => {
    if (value) {
      open()
    } else {
      close()
    }
  }

  // 计算并更新提示框位置
  const updatePosition = () => {
    if (!isOpen.value || !tooltipRef.value) return

    // 如果没有绑定元素或需要跟随鼠标，则忽略triggerRef检查
    if (!config.unbound && !config.followCursor && !triggerRef.value) return

    const tooltip = tooltipRef.value

    // 获取触发元素和提示框的尺寸和位置
    const tooltipRect = tooltip.getBoundingClientRect()

    // 根据placement计算位置
    let top = 0
    let left = 0
    const offset = config.offset

    if (config.followCursor || config.unbound) {
      // 跟随鼠标模式或未绑定模式
      switch (config.placement) {
        case 'top':
          top = mousePosY - tooltipRect.height - offset
          left = mousePosX - tooltipRect.width / 2
          break
        case 'right':
          top = mousePosY - tooltipRect.height / 2
          left = mousePosX + offset
          break
        case 'bottom':
          top = mousePosY + offset
          left = mousePosX - tooltipRect.width / 2
          break
        case 'left':
          top = mousePosY - tooltipRect.height / 2
          left = mousePosX - tooltipRect.width - offset
          break
      }
    } else {
      // 固定在元素位置模式
      const trigger = triggerRef.value!
      const triggerRect = trigger.getBoundingClientRect()

      switch (config.placement) {
        case 'top':
          top = triggerRect.top - tooltipRect.height - offset
          left =
            triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2
          break
        case 'right':
          top =
            triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2
          left = triggerRect.right + offset
          break
        case 'bottom':
          top = triggerRect.bottom + offset
          left =
            triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2
          break
        case 'left':
          top =
            triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2
          left = triggerRect.left - tooltipRect.width - offset
          break
      }
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

    // 设置位置 (使用transform可提高性能)
    tooltip.style.position = 'fixed'
    tooltip.style.top = '0'
    tooltip.style.left = '0'
    tooltip.style.transform = `translate3d(${left}px, ${top}px, 0)`
    tooltip.style.zIndex = '9999'
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
      if (config.followCursor || config.unbound) {
        window.addEventListener('mousemove', trackMouse)
      }
    } else {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll, true)
      if (config.followCursor || config.unbound) {
        window.removeEventListener('mousemove', trackMouse)
      }
    }
  })

  // 如果triggerRef变化，重新计算位置
  watch(triggerRef, (newTrigger) => {
    if (newTrigger && isOpen.value && !config.unbound) {
      updatePosition()
    }
  })

  // 初始化事件监听
  onMounted(() => {
    if (config.followCursor || config.unbound) {
      window.addEventListener('mousemove', trackMouse)
    }
  })

  // 事件处理函数
  const onMouseEnter = (e: MouseEvent) => {
    mousePosX = e.clientX
    mousePosY = e.clientY
    open()
  }
  const onFocus = () => open()
  const onMouseLeave = () => close()
  const onBlur = () => close()

  // 清理
  onUnmounted(() => {
    if (openTimer) clearTimeout(openTimer)
    if (closeTimer) clearTimeout(closeTimer)
    window.removeEventListener('resize', onResize)
    window.removeEventListener('scroll', onScroll, true)
    if (config.followCursor || config.unbound) {
      window.removeEventListener('mousemove', trackMouse)
    }
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
    setIsOpen,
  }
}
