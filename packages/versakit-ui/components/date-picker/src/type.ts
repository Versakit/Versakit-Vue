import type { CSSProperties } from 'vue'
import type { CalendarProps } from '../../calendar/src/type'

export interface DatePickerProps
  extends Omit<CalendarProps, 'modelValue' | 'pt'> {
  /** 当前选中的日期，可以是日期对象或日期字符串 */
  modelValue?: Date | string | null
  /** 占位符文本 */
  placeholder?: string
  /** 日期格式 */
  format?: string
  /** 是否显示清除按钮 */
  clearable?: boolean
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
  pt?: DatePickerPassThroughAttributes
}

export interface DatePickerEmits {
  (e: 'update:modelValue', value: Date | null): void
  (e: 'change', value: Date | null): void
  (e: 'blur'): void
  (e: 'focus'): void
  (e: 'clear'): void
}

export type DatePickerPassThroughAttributes = {
  root?: Record<string, unknown>
  inputContainer?: Record<string, unknown>
  input?: Record<string, unknown>
  clearButton?: Record<string, unknown>
  calendarIcon?: Record<string, unknown>
  popover?: Record<string, unknown>
  calendar?: Record<string, unknown>
}
