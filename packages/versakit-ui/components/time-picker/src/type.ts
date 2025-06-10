import type { CSSProperties } from 'vue'

export interface TimePickerProps {
  /** 当前选中的时间 */
  modelValue?: Date | string | null
  /** 占位符文本 */
  placeholder?: string
  /** 时间格式 */
  format?: string
  /** 是否显示清除按钮 */
  clearable?: boolean
  /** 输入框尺寸 */
  size?: 'sm' | 'md' | 'lg'
  /** 输入框状态 */
  status?: 'default' | 'error' | 'warning' | 'success'
  /** 是否禁用 */
  disabled?: boolean
  /** 是否只读 */
  readonly?: boolean
  /** 是否使用24小时制 */
  use24Hours?: boolean
  /** 分钟步长 */
  minuteStep?: number
  /** 秒步长 */
  secondStep?: number
  /** 是否显示秒选择 */
  showSeconds?: boolean
  /** 最小时间限制 */
  minTime?: Date | string
  /** 最大时间限制 */
  maxTime?: Date | string
  /** 自定义输入框类名 */
  inputClass?: string
  /** 自定义输入框样式 */
  inputStyle?: CSSProperties
  /** 是否使用无样式模式 */
  unstyled?: boolean
  /** Pass Through 属性 */
  pt?: TimePickerPassThroughAttributes
}

export interface TimePickerEmits {
  (e: 'update:modelValue', value: Date | null): void
  (e: 'change', value: Date | null): void
  (e: 'blur'): void
  (e: 'focus'): void
  (e: 'clear'): void
}

export type TimePickerPassThroughAttributes = {
  root?: Record<string, unknown>
  inputContainer?: Record<string, unknown>
  input?: Record<string, unknown>
  clearButton?: Record<string, unknown>
  clockIcon?: Record<string, unknown>
  popover?: Record<string, unknown>
  timeContainer?: Record<string, unknown>
  timeControls?: Record<string, unknown>
  timeSelector?: Record<string, unknown>
  timeValue?: Record<string, unknown>
  timeButton?: Record<string, unknown>
}
