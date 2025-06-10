export type PopoverPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'

export type PopoverTrigger = 'click' | 'hover' | 'focus' | 'manual'

export interface PopoverProps {
  /** 是否显示 */
  modelValue?: boolean
  /** 弹出位置 */
  placement?: PopoverPlacement
  /** 触发方式 */
  trigger?: PopoverTrigger
  /** 弹出框标题 */
  title?: string
  /** 弹出框内容 */
  content?: string
  /** 是否显示箭头 */
  arrow?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 弹出延迟 (毫秒) */
  showDelay?: number
  /** 隐藏延迟 (毫秒) */
  hideDelay?: number
  /** 是否使用无样式模式 */
  unstyled?: boolean
  /** 宽度 */
  width?: string | number
  /** 最大宽度 */
  maxWidth?: string | number
  /** 自定义样式 */
  popperStyle?: Record<string, any>
  /** 自定义类名 */
  popperClass?: string
  /** 触发元素自定义类名 */
  triggerClass?: string
  /** 是否显示关闭按钮 */
  showClose?: boolean
  /** 点击外部是否关闭 */
  closeOnClickOutside?: boolean
  /** 按ESC是否关闭 */
  closeOnEsc?: boolean
  /** 是否保持内容挂载 */
  persistent?: boolean
}

// PT (Pass Through) 类型定义
export type PopoverPassThroughAttributes = {
  root?: Record<string, unknown>
  trigger?: Record<string, unknown>
  content?: Record<string, unknown>
  title?: Record<string, unknown>
  arrow?: Record<string, unknown>
  close?: Record<string, unknown>
}

export interface PopoverEmits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'show'): void
  (e: 'hide'): void
  (e: 'after-enter'): void
  (e: 'after-leave'): void
}

export interface PopoverSlots {
  default?: () => unknown
  content?: () => unknown
  title?: () => unknown
  arrow?: () => unknown
}
