import type { CSSProperties } from 'vue'

export interface TimeOption {
  /** 时间选项的值，格式为 HH:mm 或 HH:mm:ss */
  value: string
  /** 时间选项的显示标签 */
  label?: string
  /** 是否禁用该选项 */
  disabled?: boolean
}

export interface TimeSelectProps {
  /** 当前选中的时间值 */
  modelValue?: string | null
  /** 占位符文本 */
  placeholder?: string
  /** 可选时间的开始时间 */
  start?: string
  /** 可选时间的结束时间 */
  end?: string
  /** 时间间隔，单位为分钟 */
  step?: number
  /** 最小可选时间 */
  minTime?: string
  /** 最大可选时间 */
  maxTime?: string
  /** 自定义时间选项列表 */
  options?: TimeOption[]
  /** 是否显示清除按钮 */
  clearable?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 是否只读 */
  readonly?: boolean
  /** 输入框尺寸 */
  size?: 'sm' | 'md' | 'lg'
  /** 输入框状态 */
  status?: 'default' | 'error' | 'warning' | 'success'
  /** 自定义输入框类名 */
  inputClass?: string
  /** 自定义输入框样式 */
  inputStyle?: CSSProperties
  /** 是否使用无样式模式 */
  unstyled?: boolean
  /** Pass Through 属性 */
  pt?: TimeSelectPassThroughAttributes
}

export interface TimeSelectEmits {
  (e: 'update:modelValue', value: string | null): void
  (e: 'change', value: string | null): void
  (e: 'blur'): void
  (e: 'focus'): void
  (e: 'clear'): void
}

export type TimeSelectPassThroughAttributes = {
  root?: Record<string, unknown>
  inputContainer?: Record<string, unknown>
  input?: Record<string, unknown>
  clearButton?: Record<string, unknown>
  clockIcon?: Record<string, unknown>
  dropdown?: Record<string, unknown>
  optionsList?: Record<string, unknown>
  option?: Record<string, unknown>
  emptyMessage?: Record<string, unknown>
}
