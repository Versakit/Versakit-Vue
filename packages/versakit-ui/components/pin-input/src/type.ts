export type PinInputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type PinInputVariant = 'outline' | 'filled' | 'underlined'

export type PinInputStatus = 'success' | 'warning' | 'error' | 'default'

export interface PinInputProps {
  /** 数量 */
  length?: number
  /** 尺寸 */
  size?: PinInputSize
  /** 变体 */
  variant?: PinInputVariant
  /** 当前值 */
  modelValue?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否只读 */
  readonly?: boolean
  /** 输入类型 */
  type?: 'text' | 'number' | 'password'
  /** 是否显示掩码 */
  mask?: boolean
  /** 掩码字符 */
  maskChar?: string
  /** 是否自动获取焦点 */
  autofocus?: boolean
  /** 输入框状态 */
  status?: PinInputStatus
  /** 分隔符 */
  separator?: string
  /** 无障碍标签 */
  ariaLabel?: string
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

// PT (Pass Through) 类型定义
export type PinInputPassThroughAttributes = {
  root?: Record<string, unknown>
  inputWrapper?: Record<string, unknown>
  input?: Record<string, unknown>
  separator?: Record<string, unknown>
}

export interface PinInputEvents {
  /** 值变更事件 */
  'update:modelValue'?: (value: string) => void
  /** 完成事件 */
  complete?: (value: string) => void
  /** 输入单个值事件 */
  change?: (value: string) => void
}
