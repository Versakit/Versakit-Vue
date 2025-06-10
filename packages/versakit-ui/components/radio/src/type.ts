export type RadioSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type RadioVariant =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'

export interface RadioProps {
  /** 单选框值 */
  value?: string | number | boolean
  /** 单选框名称 */
  name?: string
  /** 是否选中 */
  checked?: boolean
  /** 尺寸 */
  size?: RadioSize
  /** 变体样式 */
  variant?: RadioVariant
  /** 是否禁用 */
  disabled?: boolean
  /** 是否只读 */
  readonly?: boolean
  /** 无障碍标签 */
  ariaLabel?: string
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

export interface RadioGroupProps {
  /** 单选组值 */
  modelValue?: string | number | boolean
  /** 单选组名称 */
  name?: string
  /** 单选组方向 */
  direction?: 'horizontal' | 'vertical'
  /** 尺寸 */
  size?: RadioSize
  /** 变体样式 */
  variant?: RadioVariant
  /** 是否禁用 */
  disabled?: boolean
  /** 是否只读 */
  readonly?: boolean
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

// PT (Pass Through) 类型定义
export type RadioPassThroughAttributes = {
  root?: Record<string, unknown>
  input?: Record<string, unknown>
  label?: Record<string, unknown>
}

export type RadioGroupPassThroughAttributes = {
  root?: Record<string, unknown>
  label?: Record<string, unknown>
}

export interface RadioSlots {
  default?: () => unknown
}

export interface RadioGroupSlots {
  default?: () => unknown
}
