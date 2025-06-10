export type TooltipVariant =
  | 'primary'
  | 'success'
  | 'warning'
  | 'info'
  | 'error'
  | 'default'

export type TooltipSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type TooltipPlacement =
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

export type TooltipTrigger = 'hover' | 'click' | 'focus' | 'manual'

export type TooltipTheme = 'light' | 'dark' | 'auto'

// PT (Pass Through) 类型定义
export type TooltipPassThroughAttributes = {
  root?: Record<string, unknown>
  trigger?: Record<string, unknown>
  content?: Record<string, unknown>
  arrow?: Record<string, unknown>
}

export interface TooltipProps {
  /** 提示内容 */
  content?: string
  /** 提示位置 */
  placement?: TooltipPlacement
  /** 触发方式 */
  trigger?: TooltipTrigger
  /** 主题 */
  theme?: TooltipTheme
  /** 变体样式 */
  variant?: TooltipVariant
  /** 尺寸 */
  size?: TooltipSize
  /** 是否禁用 */
  disabled?: boolean
  /** 是否显示箭头 */
  arrow?: boolean
  /** 是否可交互 */
  interactive?: boolean
  /** 显示延迟(毫秒) */
  showDelay?: number
  /** 隐藏延迟(毫秒) */
  hideDelay?: number
  /** 最大宽度 */
  maxWidth?: string
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
  /** Pass Through 属性 */
  pt?: TooltipPassThroughAttributes
}

export interface TooltipSlots {
  default?: () => unknown
  content?: () => unknown
}
