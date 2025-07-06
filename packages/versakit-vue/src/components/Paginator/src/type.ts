export type PaginatorSize = 'sm' | 'md' | 'lg'
export type PaginatorVariant = 'default' | 'outline' | 'text'
export type PaginatorShape = 'square' | 'rounded' | 'circle'

export interface PaginatorProps {
  /**
   * 当前页码
   * @default 1
   */
  modelValue?: number

  /**
   * 总页数
   * @default 1
   */
  totalPages: number

  /**
   * 显示的页码按钮数量
   * @default 5
   */
  visiblePageCount?: number

  /**
   * 是否显示首页和尾页按钮
   * @default true
   */
  showEndButtons?: boolean

  /**
   * 是否显示上一页和下一页按钮
   * @default true
   */
  showPrevNextButtons?: boolean

  /**
   * 是否显示页码跳转输入框
   * @default false
   */
  showJumper?: boolean

  /**
   * 分页器大小
   * @default 'md'
   */
  size?: PaginatorSize

  /**
   * 分页器样式变体
   * @default 'default'
   */
  variant?: PaginatorVariant

  /**
   * 分页器形状
   * @default 'rounded'
   */
  shape?: PaginatorShape

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean

  /**
   * 是否使用无样式模式
   * @default false
   */
  unstyled?: boolean

  /**
   * 传递模板样式
   */
  pt?: PaginatorPT
}

/**
 * Paginator组件模板样式类型
 */
export type PaginatorPT = {
  root?: string
  list?: string
  item?: string
  button?: string
  activeButton?: string
  prevButton?: string
  nextButton?: string
  firstButton?: string
  lastButton?: string
  ellipsis?: string
  jumper?: string
  jumperInput?: string
  jumperButton?: string
}

export const PaginatorEmits = {
  'update:modelValue': (value: number) => typeof value === 'number',
  change: (value: number) => typeof value === 'number',
}

export type IPaginatorEmits = typeof PaginatorEmits
