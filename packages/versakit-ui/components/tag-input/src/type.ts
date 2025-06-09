export type TagInputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type TagInputVariant = 'outline' | 'filled' | 'underlined'

export type TagInputStatus = 'success' | 'warning' | 'error' | 'default'

export type Tag = {
  id: string | number
  label: string
  [key: string]: unknown
}

export interface TagInputProps {
  /** 当前标签列表 */
  modelValue?: Tag[]
  /** 输入框大小 */
  size?: TagInputSize
  /** 输入框变体 */
  variant?: TagInputVariant
  /** 占位符文本 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否只读 */
  readonly?: boolean
  /** 最大标签数量 */
  max?: number
  /** 是否允许重复标签 */
  allowDuplicates?: boolean
  /** 标签分隔符，用于键盘输入 */
  delimiters?: string[]
  /** 是否支持自由输入 */
  freeInput?: boolean
  /** 可选的标签列表，当不支持自由输入时使用 */
  options?: Tag[]
  /** 输入框状态 */
  status?: TagInputStatus
  /** 无障碍标签 */
  ariaLabel?: string
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

// PT (Pass Through) 类型定义
export type TagInputPassThroughAttributes = {
  root?: Record<string, unknown>
  inputWrapper?: Record<string, unknown>
  input?: Record<string, unknown>
  tag?: Record<string, unknown>
  tagContent?: Record<string, unknown>
  tagDelete?: Record<string, unknown>
}

export interface TagInputSlots {
  tag?: (props: {
    tag: Tag
    index: number
    handleRemove: (index: number) => void
  }) => unknown
}

export interface TagInputEvents {
  /** 标签列表变更事件 */
  'update:modelValue'?: (value: Tag[]) => void
  /** 添加标签事件 */
  add?: (tag: Tag) => void
  /** 删除标签事件 */
  remove?: (tag: Tag, index: number) => void
  /** 输入事件 */
  input?: (event: Event) => void
  /** 聚焦事件 */
  focus?: (event: FocusEvent) => void
  /** 失焦事件 */
  blur?: (event: FocusEvent) => void
}
