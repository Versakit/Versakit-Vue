export type AlertVariant =
  | 'primary'
  | 'success'
  | 'warning'
  | 'info'
  | 'error'
  | 'default'

export interface AlertProps {
  /** 提示类型 */
  variant?: AlertVariant
  /** 标题 */
  title?: string
  /** 是否显示图标 */
  showIcon?: boolean
  /** 是否可关闭 */
  closable?: boolean
  /** 是否显示边框 */
  bordered?: boolean
  /** 是否显示阴影 */
  shadow?: boolean
  /** 是否占满宽度 */
  fullWidth?: boolean
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

// PT (Pass Through) 类型定义
export type AlertPassThroughAttributes = {
  root?: Record<string, unknown>
  icon?: Record<string, unknown>
  title?: Record<string, unknown>
  content?: Record<string, unknown>
  closeButton?: Record<string, unknown>
}

export interface AlertSlots {
  default?: () => unknown
  icon?: () => unknown
  title?: () => unknown
  closeButton?: () => unknown
}
