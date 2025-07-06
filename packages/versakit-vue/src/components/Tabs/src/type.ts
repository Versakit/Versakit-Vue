export type TabsVariant = 'default' | 'pills' | 'underline'
export type TabsSize = 'sm' | 'md' | 'lg'
export type TabsPlacement = 'top' | 'bottom' | 'left' | 'right'

export interface TabsProps {
  /**
   * 当前激活的标签页名称
   */
  modelValue?: string | number
  /**
   * 标签页样式变体
   * @default 'default'
   */
  variant?: TabsVariant
  /**
   * 标签页大小
   * @default 'md'
   */
  size?: TabsSize
  /**
   * 标签页位置
   * @default 'top'
   */
  placement?: TabsPlacement
  /**
   * 是否禁用所有标签页
   * @default false
   */
  disabled?: boolean
  /**
   * 是否占满宽度
   * @default false
   */
  fullWidth?: boolean
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
  nav?: string
  navItem?: string
  content?: string
}

export interface TabItemProps {
  /**
   * 标签页名称，作为标识符
   */
  name: string | number
  /**
   * 标签页标题
   */
  title: string
  /**
   * 标签页标题（别名，与title相同）
   */
  label?: string
  /**
   * 是否禁用此标签页
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
  pt?: TabItemPT
}

/**
 * TabItem组件模板样式类型
 */
export type TabItemPT = {
  root?: string
}

export const TabsEmits = {
  'update:modelValue': (value: string | number) =>
    typeof value === 'string' || typeof value === 'number',
  change: (value: string | number) =>
    typeof value === 'string' || typeof value === 'number',
}

export type ITabsEmits = typeof TabsEmits
