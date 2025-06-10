import type { DatePickerProps } from '../../date-picker/src/type'

export interface DateTimePickerProps
  extends Omit<DatePickerProps, 'format' | 'pt'> {
  /** 当前选中的日期时间 */
  modelValue?: Date | string | null
  /** 日期时间格式 */
  format?: string
  /** 是否使用24小时制 */
  use24Hours?: boolean
  /** 分钟步长 */
  minuteStep?: number
  /** 秒步长 */
  secondStep?: number
  /** 是否显示秒选择 */
  showSeconds?: boolean
  /** 是否显示时间选择 */
  showTime?: boolean
  /** 时间选择器的位置 */
  timePosition?: 'bottom' | 'right'
  /** 是否使用无样式模式 */
  unstyled?: boolean
  /** Pass Through 属性 */
  pt?: DateTimePickerPassThroughAttributes
}

export interface DateTimePickerEmits {
  (e: 'update:modelValue', value: Date | null): void
  (e: 'change', value: Date | null): void
  (e: 'blur'): void
  (e: 'focus'): void
  (e: 'clear'): void
}

export type DateTimePickerPassThroughAttributes = {
  root?: Record<string, unknown>
  inputContainer?: Record<string, unknown>
  input?: Record<string, unknown>
  clearButton?: Record<string, unknown>
  calendarIcon?: Record<string, unknown>
  popover?: Record<string, unknown>
  calendar?: Record<string, unknown>
  timeContainer?: Record<string, unknown>
  timeHeader?: Record<string, unknown>
  timeControls?: Record<string, unknown>
  timeSelector?: Record<string, unknown>
  timeValue?: Record<string, unknown>
  timeButton?: Record<string, unknown>
}
