export type SwitchSize = 'sm' | 'md' | 'lg'

export type SwitchVariant =
  | 'primary'
  | 'success'
  | 'warning'
  | 'info'
  | 'error'
  | 'default'

export interface SwitchProps {
  /** 是否选中 */
  modelValue?: boolean
  /** 尺寸 */
  size?: SwitchSize
  /** 样式变体 */
  variant?: SwitchVariant
  /** 是否禁用 */
  disabled?: boolean
  /** 无障碍标签 */
  ariaLabel?: string
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

// PT (Pass Through) 类型定义
export type SwitchPassThroughAttributes = {
  root?: Record<string, unknown>
  thumb?: Record<string, unknown>
  label?: Record<string, unknown>
}

export interface SwitchSlots {
  default?: () => unknown
}
