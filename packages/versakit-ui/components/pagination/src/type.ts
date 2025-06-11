export type PaginationSize = 'sm' | 'md' | 'lg'

export type PaginationVariant = 'filled' | 'outline' | 'ghost'

export interface PaginationProps {
  /** 当前页码 */
  modelValue?: number
  /** 总页数 */
  total: number
  /** 每页显示条目个数 */
  pageSize?: number
  /** 尺寸 */
  size?: PaginationSize
  /** 样式变体 */
  variant?: PaginationVariant
  /** 是否禁用 */
  disabled?: boolean
  /** 页码按钮的数量 */
  pagerCount?: number
  /** 是否显示快速跳转 */
  showQuickJumper?: boolean
  /** 是否显示每页条数选择器 */
  showSizeChanger?: boolean
  /** 每页显示条目数选项列表 */
  pageSizeOptions?: number[]
  /** 是否显示总条目数 */
  showTotal?: boolean
  /** 是否显示简洁模式 */
  simple?: boolean
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

// PT (Pass Through) 类型定义
export type PaginationPassThroughAttributes = {
  root?: Record<string, unknown>
  prev?: Record<string, unknown>
  next?: Record<string, unknown>
  pageButtons?: Record<string, unknown>
  quickJumper?: Record<string, unknown>
  sizeChanger?: Record<string, unknown>
  total?: Record<string, unknown>
}

export interface PaginationSlots {
  prev?: () => unknown
  next?: () => unknown
  pageItem?: (props: { page: number; active: boolean }) => unknown
  sizeChanger?: () => unknown
  total?: (props: { total: number; range: [number, number] }) => unknown
}
