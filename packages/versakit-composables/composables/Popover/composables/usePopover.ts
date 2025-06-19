import { ref, onUnmounted, watch, nextTick } from 'vue'

// 位置类型定义
export type Placement =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'top-start'
  | 'top-end'
  | 'right-start'
  | 'right-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'

// 配置选项
export interface PopoverOptions {
  placement?: Placement
  offset?: number
  onClose?: () => void
}

export function usePopover(options?: PopoverOptions) {
  const isOpen = ref(false)
  const triggerRef = ref<HTMLElement | null>(null)
  const popoverRef = ref<HTMLElement | null>(null)

  const placement = options?.placement || 'bottom'
  const offset = options?.offset || 8

  // 打开Popover
  const open = async () => {
    isOpen.value = true
    // 等待DOM更新后再计算位置
    await nextTick()
    updatePosition()
  }

  // 关闭Popover
  const close = () => {
    isOpen.value = false
    options?.onClose?.()
  }

  // 切换Popover状态
  const toggle = async () => {
    if (isOpen.value) {
      close()
    } else {
      await open()
    }
  }

  // 计算和更新位置
  const updatePosition = () => {
    const trigger = triggerRef.value
    const popover = popoverRef.value

    if (!trigger || !popover || !isOpen.value) return

    // 获取触发元素和弹出框的位置信息
    const triggerRect = trigger.getBoundingClientRect()
    const popoverRect = popover.getBoundingClientRect()

    // 获取视窗尺寸
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    // 计算初始位置
    let top = 0
    let left = 0

    // 根据不同位置计算坐标
    switch (placement) {
      case 'top':
        top = triggerRect.top - popoverRect.height - offset
        left = triggerRect.left + (triggerRect.width - popoverRect.width) / 2
        break
      case 'top-start':
        top = triggerRect.top - popoverRect.height - offset
        left = triggerRect.left
        break
      case 'top-end':
        top = triggerRect.top - popoverRect.height - offset
        left = triggerRect.right - popoverRect.width
        break
      case 'bottom':
        top = triggerRect.bottom + offset
        left = triggerRect.left + (triggerRect.width - popoverRect.width) / 2
        break
      case 'bottom-start':
        top = triggerRect.bottom + offset
        left = triggerRect.left
        break
      case 'bottom-end':
        top = triggerRect.bottom + offset
        left = triggerRect.right - popoverRect.width
        break
      case 'left':
        top = triggerRect.top + (triggerRect.height - popoverRect.height) / 2
        left = triggerRect.left - popoverRect.width - offset
        break
      case 'left-start':
        top = triggerRect.top
        left = triggerRect.left - popoverRect.width - offset
        break
      case 'left-end':
        top = triggerRect.bottom - popoverRect.height
        left = triggerRect.left - popoverRect.width - offset
        break
      case 'right':
        top = triggerRect.top + (triggerRect.height - popoverRect.height) / 2
        left = triggerRect.right + offset
        break
      case 'right-start':
        top = triggerRect.top
        left = triggerRect.right + offset
        break
      case 'right-end':
        top = triggerRect.bottom - popoverRect.height
        left = triggerRect.right + offset
        break
    }

    // 防止超出视窗
    // 水平方向
    if (left < 0) {
      left = Math.min(triggerRect.left, 4)
    } else if (left + popoverRect.width > viewportWidth) {
      left = Math.max(
        viewportWidth - popoverRect.width - 4,
        triggerRect.right - popoverRect.width,
      )
    }

    // 垂直方向
    if (top < 0) {
      top = Math.min(triggerRect.bottom + offset, 4)
    } else if (top + popoverRect.height > viewportHeight) {
      top = Math.max(
        viewportHeight - popoverRect.height - 4,
        triggerRect.top - popoverRect.height - offset,
      )
    }

    // 应用位置
    popover.style.position = 'fixed'
    popover.style.top = `${top}px`
    popover.style.left = `${left}px`
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

  // 监听状态变化添加/移除事件监听
  watch(isOpen, (val) => {
    if (val) {
      document.addEventListener('click', onClickOutside)
      document.addEventListener('keydown', onKeyDown)
      window.addEventListener('resize', onResize)
      window.addEventListener('scroll', onScroll, true)
    } else {
      document.removeEventListener('click', onClickOutside)
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll, true)
    }
  })

  // 组件卸载时清理事件监听
  onUnmounted(() => {
    document.removeEventListener('click', onClickOutside)
    document.removeEventListener('keydown', onKeyDown)
    window.removeEventListener('resize', onResize)
    window.removeEventListener('scroll', onScroll, true)
  })

  return {
    isOpen,
    open,
    close,
    toggle,
    triggerRef,
    popoverRef,
    updatePosition,
  }
}
