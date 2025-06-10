export type SelectSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type SelectVariant = 'default' | 'filled' | 'outline' | 'ghost'

export interface SelectOption {
  /** 选项值 */
  value: string | number
  /** 选项标签 */
  label: string
  /** 是否禁用 */
  disabled?: boolean
  /** 选项图标 */
  icon?: string
  /** 分组标题 */
  group?: string
}

export interface SelectProps {
  /** 选择器值 */
  modelValue?: string | number | Array<string | number>
  /** 选项列表 */
  options?: SelectOption[]
  /** 尺寸 */
  size?: SelectSize
  /** 变体样式 */
  variant?: SelectVariant
  /** 是否禁用 */
  disabled?: boolean
  /** 是否为加载状态 */
  loading?: boolean
  /** 占位符 */
  placeholder?: string
  /** 是否多选 */
  multiple?: boolean
  /** 是否可搜索 */
  searchable?: boolean
  /** 是否可清除 */
  clearable?: boolean
  /** 最小宽度 */
  minWidth?: string | number
  /** 无障碍标签 */
  ariaLabel?: string
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

// PT (Pass Through) 类型定义
export type SelectPassThroughAttributes = {
  root?: Record<string, unknown>
  trigger?: Record<string, unknown>
  options?: Record<string, unknown>
  option?: Record<string, unknown>
  empty?: Record<string, unknown>
  loading?: Record<string, unknown>
}

export interface SelectSlots {
  /** 选项内容插槽 */
  option?: (props: { option: SelectOption }) => unknown
  /** 选中值内容插槽 */
  selected?: (props: {
    value: string | number | Array<string | number>
  }) => unknown
  /** 空状态插槽 */
  empty?: () => unknown
  /** 加载状态插槽 */
  loading?: () => unknown
  /** 前置图标插槽 */
  prefix?: () => unknown
  /** 后置图标插槽 */
  suffix?: () => unknown
}
