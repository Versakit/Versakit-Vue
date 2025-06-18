import type { VNode } from 'vue'

export interface TabItem {
  label: string
  content: string | (() => string | VNode)
  disabled?: boolean
}

export interface TabsProps {
  items: TabItem[]
  initialIndex?: number
}
