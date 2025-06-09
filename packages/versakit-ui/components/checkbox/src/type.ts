export type CheckboxSize = 'sm' | 'md' | 'lg'

export type CheckboxVariant =
  | 'primary'
  | 'success'
  | 'warning'
  | 'info'
  | 'error'
  | 'default'

export interface CheckboxProps {
  /** 是否选中 */
  modelValue?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 尺寸 */
  size?: CheckboxSize
  /** 样式变体 */
  variant?: CheckboxVariant
  /** 是否为不确定状态 */
  indeterminate?: boolean
  /** 无障碍标签 */
  ariaLabel?: string
  /** 是否使用无样式模式 */
  unstyled?: boolean
  /** 名称，原生 name 属性 */
  name?: string
  /** 值，用于组合时 */
  value?: string | number | boolean
}

// PT (Pass Through) 类型定义
export type CheckboxPassThroughAttributes = {
  root?: Record<string, unknown>
  input?: Record<string, unknown>
  box?: Record<string, unknown>
  label?: Record<string, unknown>
  checkmark?: Record<string, unknown>
}

export interface CheckboxSlots {
  default?: () => unknown
}
