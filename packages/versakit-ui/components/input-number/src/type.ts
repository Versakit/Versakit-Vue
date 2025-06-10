import type { CSSProperties } from 'vue'

export interface InputNumberProps {
  /** 当前输入的值 */
  modelValue?: number | null
  /** 最小值 */
  min?: number
  /** 最大值 */
  max?: number
  /** 步长 */
  step?: number
  /** 精度，小数点位数 */
  precision?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 是否只读 */
  readonly?: boolean
  /** 占位符文本 */
  placeholder?: string
  /** 是否显示控制按钮 */
  controls?: boolean
  /** 控制按钮位置 */
  controlsPosition?: 'right' | 'both'
  /** 输入框尺寸 */
  size?: 'sm' | 'md' | 'lg'
  /** 输入框状态 */
  status?: 'default' | 'error' | 'warning' | 'success'
  /** 自定义输入框类名 */
  inputClass?: string
  /** 自定义输入框样式 */
  inputStyle?: CSSProperties
  /** 自定义控制按钮类名 */
  controlClass?: string
  /** 自定义控制按钮样式 */
  controlStyle?: CSSProperties
  /** 前缀文本 */
  prefix?: string
  /** 后缀文本 */
  suffix?: string
  /** 是否使用无样式模式 */
  unstyled?: boolean
  /** Pass Through 属性 */
  pt?: InputNumberPassThroughAttributes
}

export interface InputNumberEmits {
  (e: 'update:modelValue', value: number | null): void
  (e: 'change', value: number | null): void
  (e: 'blur'): void
  (e: 'focus'): void
}

export type InputNumberPassThroughAttributes = {
  root?: Record<string, unknown>
  inputContainer?: Record<string, unknown>
  prefix?: Record<string, unknown>
  input?: Record<string, unknown>
  suffix?: Record<string, unknown>
  controlsWrapper?: Record<string, unknown>
  incrementButton?: Record<string, unknown>
  decrementButton?: Record<string, unknown>
}
