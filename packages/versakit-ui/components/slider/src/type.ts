export type SliderSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type SliderVariant =
  | 'primary'
  | 'success'
  | 'warning'
  | 'info'
  | 'error'
  | 'default'

export interface SliderProps {
  /** 当前值 */
  modelValue?: number | number[]
  /** 最小值 */
  min?: number
  /** 最大值 */
  max?: number
  /** 步长 */
  step?: number
  /** 变体 */
  variant?: SliderVariant
  /** 尺寸 */
  size?: SliderSize
  /** 是否为范围选择器 */
  range?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 是否显示标记 */
  marks?: boolean | Record<number, string>
  /** 是否显示提示 */
  tooltip?: boolean
  /** 是否始终显示提示 */
  tooltipAlways?: boolean
  /** 是否显示输入框 */
  showInput?: boolean
  /** 垂直方向 */
  vertical?: boolean
  /** 垂直高度 */
  height?: string
  /** 无障碍标签 */
  ariaLabel?: string
  /** 范围选择器的无障碍标签 */
  ariaLabelRange?: [string, string]
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

// PT (Pass Through) 类型定义
export type SliderPassThroughAttributes = {
  root?: Record<string, unknown>
  track?: Record<string, unknown>
  progress?: Record<string, unknown>
  handle?: Record<string, unknown>
  tooltip?: Record<string, unknown>
  mark?: Record<string, unknown>
  markLabel?: Record<string, unknown>
  input?: Record<string, unknown>
}

export interface SliderSlots {
  tooltip?: (props: { value: number }) => unknown
  mark?: (props: { value: number; label: string }) => unknown
  input?: () => unknown
}

export interface SliderEvents {
  /** 值变更事件 */
  'update:modelValue'?: (value: number | number[]) => void
  /** 拖动开始事件 */
  dragStart?: (value: number | number[]) => void
  /** 拖动事件 */
  drag?: (value: number | number[]) => void
  /** 拖动结束事件 */
  dragEnd?: (value: number | number[]) => void
  /** 改变事件 */
  change?: (value: number | number[]) => void
}
