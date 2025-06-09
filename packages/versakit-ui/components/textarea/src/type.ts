export type TextareaSize = 'sm' | 'md' | 'lg'

export type TextareaStatus = 'default' | 'error' | 'success'

export interface TextareaProps {
  /** 文本域的值 */
  modelValue?: string
  /** 占位符 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否只读 */
  readonly?: boolean
  /** 最大输入长度 */
  maxLength?: number
  /** 尺寸 */
  size?: TextareaSize
  /** 状态 */
  status?: TextareaStatus
  /** 自动调整高度 */
  autoResize?: boolean
  /** 行数 */
  rows?: number
  /** 无障碍标签 */
  ariaLabel?: string
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

// PT (Pass Through) 类型定义
export type TextareaPassThroughAttributes = {
  root?: Record<string, unknown>
  textarea?: Record<string, unknown>
  counter?: Record<string, unknown>
}

export interface TextareaSlots {
  prefix?: () => unknown
  suffix?: () => unknown
}
