import { ref, onUnmounted, watch, nextTick, onMounted } from 'vue'

// 位置类型定义
export type Placement = 'top' | 'right' | 'bottom' | 'left'

// 配置选项
export interface PopoverOptions {
  openDelay?: number
  closeDelay?: number
  placement?: Placement
  offset?: number
  onClose?: () => void
  followCursor?: boolean
  unbound?: boolean
}

// 定义usePopover的返回类型
export interface PopoverReturn {
  isOpen: import('vue').Ref<boolean>
  open: () => Promise<void>
  close: () => void
  toggle: () => Promise<void>
  triggerRef: import('vue').Ref<HTMLElement | null>
  popoverRef: import('vue').Ref<HTMLElement | null>
  popoverId: string
  updatePosition: () => void
  onMouseEnter: (e: MouseEvent) => void
  onFocus: () => void
  onMouseLeave: () => void
  onBlur: () => void
  setIsOpen: (value: boolean) => void
}

export function usePopover(options?: PopoverOptions): PopoverReturn {
  const isOpen = ref(false)
  const triggerRef = ref<HTMLElement | null>(null)
  const popoverRef = ref<HTMLElement | null>(null)

  let openTimer: ReturnType<typeof setTimeout> | null = null
  let closeTimer: ReturnType<typeof setTimeout> | null = null
  let mousePosX = 0
  let mousePosY = 0

  // 默认配置
  const defaultOptions: Required<Omit<PopoverOptions, 'onClose'>> = {
    openDelay: 0,
    closeDelay: 0,
    placement: 'bottom',
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

  // 打开Popover，添加延时
  const open = async () => {
    if (closeTimer) clearTimeout(closeTimer)

    openTimer = setTimeout(async () => {
      isOpen.value = true
      // 等待DOM更新后再计算位置
      await nextTick()
      updatePosition()
    }, config.openDelay)
  }

  // 关闭Popover，添加延时
  const close = () => {
    if (openTimer) clearTimeout(openTimer)

    closeTimer = setTimeout(() => {
      isOpen.value = false
      config.onClose?.()
    }, config.closeDelay)
  }

  // 切换Popover状态
  const toggle = async () => {
    if (isOpen.value) {
      close()
    } else {
      await open()
    }
  }

  // 手动设置打开状态
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

    // 如果没有绑定元素或需要跟随鼠标，则忽略triggerRef检查
    if (!config.unbound && !config.followCursor && !triggerRef.value) return

    // 获取弹出框的位置信息
    const popoverRect = popover.getBoundingClientRect()

    // 获取视窗尺寸
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    // 计算初始位置
    let top = 0
    let left = 0

    if (config.followCursor || config.unbound) {
      // 跟随鼠标模式或未绑定模式
      switch (config.placement) {
        case 'top':
          top = mousePosY - popoverRect.height - config.offset
          left = mousePosX - popoverRect.width / 2
          break
        case 'right':
          top = mousePosY - popoverRect.height / 2
          left = mousePosX + config.offset
          break
        case 'bottom':
          top = mousePosY + config.offset
          left = mousePosX - popoverRect.width / 2
          break
        case 'left':
          top = mousePosY - popoverRect.height / 2
          left = mousePosX - popoverRect.width - config.offset
          break
      }
    } else {
      // 固定在元素位置模式
      const trigger = triggerRef.value!
      const triggerRect = trigger.getBoundingClientRect()

      // 根据不同位置计算坐标
      switch (config.placement) {
        case 'top':
          top = triggerRect.top - popoverRect.height - config.offset
          left = triggerRect.left + (triggerRect.width - popoverRect.width) / 2
          break
        case 'bottom':
          top = triggerRect.bottom + config.offset
          left = triggerRect.left + (triggerRect.width - popoverRect.width) / 2
          break
        case 'left':
          // 优化左侧定位逻辑
          top = triggerRect.top + (triggerRect.height - popoverRect.height) / 2
          left = triggerRect.left - popoverRect.width - config.offset
          break
        case 'right':
          top = triggerRect.top + (triggerRect.height - popoverRect.height) / 2
          left = triggerRect.right + config.offset
          break
      }
    }

    // 防止超出视窗
    // 水平方向
    left = Math.max(8, left)
    left = Math.min(left, viewportWidth - popoverRect.width - 8)

    // 垂直方向
    top = Math.max(8, top)
    top = Math.min(top, viewportHeight - popoverRect.height - 8)

    // 应用位置 (使用transform可提高性能)
    popover.style.position = 'fixed'
    popover.style.top = '0'
    popover.style.left = '0'
    popover.style.transform = `translate3d(${left}px, ${top}px, 0)`
    popover.style.zIndex = '9999'
    popover.style.opacity = '1'
  }

  // 点击外部关闭
  const onClickOutside = (e: MouseEvent) => {
    if (
      !popoverRef.value?.contains(e.target as Node) &&
      !triggerRef.value?.contains(e.target as Node)
    ) {
      close()
    }
  }

  // 按ESC键关闭
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') close()
  }

  // 窗口大小变化时更新位置
  const onResize = () => {
    if (isOpen.value) {
      updatePosition()
    }
  }

  // 滚动时更新位置
  const onScroll = () => {
    if (isOpen.value) {
      updatePosition()
    }
  }

  // 事件处理函数
  const onMouseEnter = (e: MouseEvent) => {
    mousePosX = e.clientX
    mousePosY = e.clientY
    open()
  }

  const onFocus = () => open()
  const onMouseLeave = () => close()
  const onBlur = () => close()

  // 监听状态变化添加/移除事件监听
  watch(isOpen, (val) => {
    if (val) {
      document.addEventListener('click', onClickOutside)
      document.addEventListener('keydown', onKeyDown)
      window.addEventListener('resize', onResize)
      window.addEventListener('scroll', onScroll, true)
      if (config.followCursor || config.unbound) {
        window.addEventListener('mousemove', trackMouse)
      }
    } else {
      document.removeEventListener('click', onClickOutside)
      document.removeEventListener('keydown', onKeyDown)
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

  // 组件卸载时清理事件监听
  onUnmounted(() => {
    if (openTimer) clearTimeout(openTimer)
    if (closeTimer) clearTimeout(closeTimer)
    document.removeEventListener('click', onClickOutside)
    document.removeEventListener('keydown', onKeyDown)
    window.removeEventListener('resize', onResize)
    window.removeEventListener('scroll', onScroll, true)
    if (config.followCursor || config.unbound) {
      window.removeEventListener('mousemove', trackMouse)
    }
  })

  // 生成唯一ID
  const popoverId = `popover-${Math.random().toString(36).slice(2, 9)}`

  return {
    isOpen,
    open,
    close,
    toggle,
    triggerRef,
    popoverRef,
    popoverId,
    updatePosition,
    onMouseEnter,
    onFocus,
    onMouseLeave,
    onBlur,
    setIsOpen,
  }
}
