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
  mode?: 'default' | 'card' | 'underline' | 'pills' // 标签页显示模式
}
