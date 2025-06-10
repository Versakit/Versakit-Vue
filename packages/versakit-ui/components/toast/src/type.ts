export type ToastPosition =
  | 'top'
  | 'top-right'
  | 'top-left'
  | 'bottom'
  | 'bottom-right'
  | 'bottom-left'
export type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info'
export type ToastSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface ToastProps {
  /** 提示内容 */
  message?: string
  /** 标题 */
  title?: string
  /** 变体样式 */
  variant?: ToastVariant
  /** 尺寸 */
  size?: ToastSize
  /** 显示位置 */
  position?: ToastPosition
  /** 显示时长(毫秒)，0表示不自动关闭 */
  duration?: number
  /** 是否可关闭 */
  closable?: boolean
  /** 是否显示进度条 */
  progressBar?: boolean
  /** 是否可暂停(hover时) */
  pauseOnHover?: boolean
  /** 是否显示图标 */
  icon?: boolean
  /** 自定义图标 */
  customIcon?: string
  /** z-index值 */
  zIndex?: number
  /** 偏移量 */
  offset?: number
  /** 最大宽度 */
  maxWidth?: string | number
  /** 是否禁用 */
  disabled?: boolean
  /** 动画持续时间(毫秒) */
  animationDuration?: number
  /** Toast唯一ID */
  id?: string
  /** 无障碍标签 */
  ariaLabel?: string
  /** 是否使用无样式模式 */
  unstyled?: boolean
  /** 点击事件处理函数 */
  onClick?: (event: MouseEvent) => void
  /** 关闭事件处理函数 */
  onClose?: () => void
}

export interface ToastProviderProps {
  /** 默认提示位置 */
  defaultPosition?: ToastPosition
  /** 默认显示时长(毫秒) */
  defaultDuration?: number
  /** 最大显示数量 */
  maxCount?: number
  /** 默认尺寸 */
  defaultSize?: ToastSize
  /** 默认变体 */
  defaultVariant?: ToastVariant
  /** 默认偏移量 */
  defaultOffset?: number
  /** 默认z-index值 */
  defaultZIndex?: number
  /** 默认最大宽度 */
  defaultMaxWidth?: string | number
  /** 默认动画持续时间(毫秒) */
  defaultAnimationDuration?: number
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

// Toast服务类型
export interface ToastServiceMethod {
  (props: ToastProps | string): string
  success: (props: ToastProps | string) => string
  error: (props: ToastProps | string) => string
  warning: (props: ToastProps | string) => string
  info: (props: ToastProps | string) => string
  clear: (id?: string) => void
  clearAll: () => void
  update: (id: string, props: Partial<ToastProps>) => void
  isActive: (id: string) => boolean
}

// PT (Pass Through) 类型定义
export type ToastPassThroughAttributes = {
  root?: Record<string, unknown>
  container?: Record<string, unknown>
  icon?: Record<string, unknown>
  content?: Record<string, unknown>
  title?: Record<string, unknown>
  message?: Record<string, unknown>
  progress?: Record<string, unknown>
  close?: Record<string, unknown>
}

export type ToastProviderPassThroughAttributes = {
  root?: Record<string, unknown>
  container?: Record<string, unknown>
}

export interface ToastSlots {
  /** 标题插槽 */
  title?: () => unknown
  /** 消息插槽 */
  message?: () => unknown
  /** 图标插槽 */
  icon?: () => unknown
  /** 关闭按钮插槽 */
  closeButton?: () => unknown
  /** 进度条插槽 */
  progress?: () => unknown
}

export interface ToastProviderSlots {
  default?: () => unknown
}
