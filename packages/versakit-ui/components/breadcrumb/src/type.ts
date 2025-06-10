export interface BreadcrumbProps {
  /** 分隔符 */
  separator?: string
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

export interface BreadcrumbItemProps {
  /** 链接地址 */
  href?: string
  /** 是否是当前活跃项 */
  active?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 点击事件 */
  onClick?: (event: MouseEvent) => void
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

// PT (Pass Through) 类型定义
export type BreadcrumbPassThroughAttributes = {
  root?: Record<string, unknown>
  separator?: Record<string, unknown>
  list?: Record<string, unknown>
}

export type BreadcrumbItemPassThroughAttributes = {
  root?: Record<string, unknown>
  link?: Record<string, unknown>
  content?: Record<string, unknown>
  separator?: Record<string, unknown>
}

export interface BreadcrumbSlots {
  default?: () => unknown
  separator?: () => unknown
}

export interface BreadcrumbItemSlots {
  default?: () => unknown
  icon?: () => unknown
}
