export type TooltipPlacement =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'
  | 'right-start'
  | 'right-end'
export type TooltipTrigger = 'hover' | 'click' | 'focus' | 'manual'
export type TooltipTheme = 'light' | 'dark' | 'auto'
export type TooltipSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type TooltipVariant =
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'default'

export interface TooltipProps {
  /** 提示框内容 */
  content?: string
  /** 提示框位置 */
  placement?: TooltipPlacement
  /** 触发方式 */
  trigger?: TooltipTrigger
  /** 是否禁用 */
  disabled?: boolean
  /** 显示延迟(毫秒) */
  showDelay?: number
  /** 隐藏延迟(毫秒) */
  hideDelay?: number
  /** 提示框主题 */
  theme?: TooltipTheme
  /** 提示框尺寸 */
  size?: TooltipSize
  /** 提示框变体样式 */
  variant?: TooltipVariant
  /** 是否显示箭头 */
  arrow?: boolean
  /** 是否可交互 */
  interactive?: boolean
  /** 最大宽度 */
  maxWidth?: string | number
  /** z-index值 */
  zIndex?: number
  /** 偏移量 */
  offset?: number
  /** 是否显示(用于手动控制) */
  modelValue?: boolean
  /** 无障碍标签 */
  ariaLabel?: string
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

// PT (Pass Through) 类型定义
export type TooltipPassThroughAttributes = {
  root?: Record<string, unknown>
  trigger?: Record<string, unknown>
  content?: Record<string, unknown>
  arrow?: Record<string, unknown>
}

export interface TooltipSlots {
  /** 默认插槽(触发元素) */
  default?: () => unknown
  /** 内容插槽 */
  content?: () => unknown
  /** 箭头插槽 */
  arrow?: () => unknown
}
