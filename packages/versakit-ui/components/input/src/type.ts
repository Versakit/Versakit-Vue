export type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type InputVariant = 'outline' | 'filled' | 'underlined'

export type InputStatus = 'success' | 'warning' | 'error' | 'default'

export interface InputProps {
  /** 输入框大小 */
  size?: InputSize
  /** 输入框变体 */
  variant?: InputVariant
  /** 占位符文本 */
  placeholder?: string
  /** 输入框值 */
  modelValue?: string | number
  /** 是否禁用 */
  disabled?: boolean
  /** 是否只读 */
  readonly?: boolean
  /** 最大长度 */
  maxlength?: number
  /** 是否显示清除按钮 */
  clearable?: boolean
  /** 输入框状态 */
  status?: InputStatus
  /** 输入框类型 */
  type?: string
  /** 前缀文本 */
  prefixText?: string
  /** 后缀文本 */
  suffixText?: string
  /** 是否显示字数统计 */
  showCount?: boolean
  /** 是否自动获取焦点 */
  autofocus?: boolean
  /** 无障碍标签 */
  ariaLabel?: string
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

// PT (Pass Through) 类型定义
export type InputPassThroughAttributes = {
  root?: Record<string, unknown>
  input?: Record<string, unknown>
  prefix?: Record<string, unknown>
  suffix?: Record<string, unknown>
  clearButton?: Record<string, unknown>
  counter?: Record<string, unknown>
}

export interface InputSlots {
  prefix?: () => unknown
  suffix?: () => unknown
  clear?: () => unknown
}

export interface InputEvents {
  /** 值变更事件 */
  'update:modelValue'?: (value: string | number) => void
  /** 聚焦事件 */
  focus?: (event: FocusEvent) => void
  /** 失焦事件 */
  blur?: (event: FocusEvent) => void
  /** 输入事件 */
  input?: (event: Event) => void
  /** 清除事件 */
  clear?: () => void
}
