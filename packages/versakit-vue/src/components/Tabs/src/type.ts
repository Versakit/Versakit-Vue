import type { VNode } from 'vue'

export interface TabItem {
  label: string
  content: string | (() => string | VNode)
  disabled?: boolean
  icon?: string // 图标URL
}

export interface TabsProps {
  items: TabItem[]
  initialIndex?: number
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  block?: boolean
  /**
   * 是否使用无样式模式
   * @default false
   */
  unstyled?: boolean
  /**
   * 传递模板样式
   */
  pt?: TabsPT
}

/**
 * Tabs组件模板样式类型
 */
export type TabsPT = {
  container?: string
  trigger?: string
  panel?: string
  icon?: string
}
