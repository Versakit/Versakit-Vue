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
}
