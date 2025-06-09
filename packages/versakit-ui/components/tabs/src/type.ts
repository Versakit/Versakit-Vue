export type TabsVariant = 'line' | 'pill' | 'boxed' | 'soft'

export type TabsSize = 'sm' | 'md' | 'lg'

export type TabsPlacement = 'top' | 'bottom' | 'left' | 'right'

export interface TabsProps {
  /** 当前激活的标签的值 */
  modelValue?: string | number
  /** 选项卡样式变体 */
  variant?: TabsVariant
  /** 选项卡尺寸 */
  size?: TabsSize
  /** 选项卡位置 */
  placement?: TabsPlacement
  /** 是否禁用所有选项卡 */
  disabled?: boolean
  /** 是否可关闭选项卡 */
  closable?: boolean
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

export interface TabProps {
  /** 标签的值，用于标识 */
  value: string | number
  /** 是否禁用 */
  disabled?: boolean
  /** 是否可关闭 */
  closable?: boolean
  /** 图标位置 */
  iconPosition?: 'left' | 'right'
  /** 无障碍标签 */
  ariaLabel?: string
}

export interface TabItemProps {
  /** 标签的值，用于标识 */
  value: string | number
  /** 是否禁用 */
  disabled?: boolean
  /** 是否可关闭 */
  closable?: boolean
  /** 图标位置 */
  iconPosition?: 'left' | 'right'
  /** 无障碍标签 */
  ariaLabel?: string
  /** 是否延迟渲染，只有在选中时才渲染内容 */
  lazy?: boolean
}

export interface TabPanelProps {
  /** 面板的值，用于与标签匹配 */
  value: string | number
  /** 是否延迟渲染，只有在选中时才渲染 */
  lazy?: boolean
}

// PT (Pass Through) 类型定义
export type TabsPassThroughAttributes = {
  root?: Record<string, unknown>
}

export type TabListPassThroughAttributes = {
  root?: Record<string, unknown>
}

export type TabPassThroughAttributes = {
  root?: Record<string, unknown>
  icon?: Record<string, unknown>
  content?: Record<string, unknown>
  closeButton?: Record<string, unknown>
}

export type TabItemPassThroughAttributes = {
  root?: Record<string, unknown>
  icon?: Record<string, unknown>
  content?: Record<string, unknown>
  closeButton?: Record<string, unknown>
  panel?: Record<string, unknown>
}

export type TabPanelsPassThroughAttributes = {
  root?: Record<string, unknown>
}

export type TabPanelPassThroughAttributes = {
  root?: Record<string, unknown>
}

// 传递给Tab和TabPanel组件的上下文
export interface TabsContext {
  activeTab: string | number
  setActiveTab: (value: string | number) => void
  closeTab?: (value: string | number) => void
  variant?: TabsVariant
  size?: TabsSize
  placement?: TabsPlacement
  disabled?: boolean
  closable?: boolean
}

// 插槽类型
export interface TabsSlots {
  default?: () => unknown
}

export interface TabListSlots {
  default?: () => unknown
}

export interface TabSlots {
  default?: () => unknown
  icon?: () => unknown
  closeIcon?: () => unknown
}

export interface TabItemSlots {
  default?: () => unknown
  title?: () => unknown
  icon?: () => unknown
  closeIcon?: () => unknown
}

export interface TabPanelsSlots {
  default?: () => unknown
}

export interface TabPanelSlots {
  default?: () => unknown
}
