export type SegmentedControlSize = 'sm' | 'md' | 'lg'
export type SegmentedControlVariant =
  | 'primary'
  | 'success'
  | 'warning'
  | 'info'
  | 'error'
  | 'default'

export interface SegmentedControlOption {
  /** 选项值 */
  value: string | number
  /** 选项文本 */
  label: string
  /** 选项图标 */
  icon?: string
  /** 是否禁用 */
  disabled?: boolean
}

// PT (Pass Through) 类型定义
export type SegmentedControlPassThroughAttributes = {
  root?: Record<string, unknown>
  thumb?: Record<string, unknown>
  item?: Record<string, unknown>
  icon?: Record<string, unknown>
}

export interface SegmentedControlProps {
  /** 当前值 */
  modelValue?: string | number
  /** 选项数组 */
  options: SegmentedControlOption[]
  /** 大小 */
  size?: SegmentedControlSize
  /** 颜色风格 */
  variant?: SegmentedControlVariant
  /** 是否禁用 */
  disabled?: boolean
  /** 是否全宽度 */
  fullWidth?: boolean
  /** 圆角程度 */
  rounded?: boolean
  /** 是否显示图标 */
  showIcon?: boolean
  /** 自定义类名 */
  customClass?: string
  /** 是否显示动画 */
  animated?: boolean
  /** 动画持续时间(ms) */
  animationDuration?: number
  /** 是否允许取消选择 */
  allowDeselect?: boolean
  /** 是否使用无样式模式 */
  unstyled?: boolean
  /** Pass Through 属性 */
  pt?: SegmentedControlPassThroughAttributes
}

// PT (Pass Through) 类型定义

export interface SegmentedControlSlots {
  default?: () => unknown
  icon?: (props: { icon: string }) => unknown
}
