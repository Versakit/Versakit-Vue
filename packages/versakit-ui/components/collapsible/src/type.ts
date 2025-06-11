export interface CollapsibleProps {
  /** 是否展开 */
  modelValue?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 折叠动画持续时间(毫秒) */
  duration?: number
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

// PT (Pass Through) 类型定义
export type CollapsiblePassThroughAttributes = {
  root?: Record<string, unknown>
  content?: Record<string, unknown>
}

export interface CollapsibleSlots {
  default?: () => unknown
  trigger?: (props: { open: boolean; disabled: boolean }) => unknown
}

export interface CollapsibleTriggerProps {
  /** 是否禁用 */
  disabled?: boolean
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

export interface CollapsibleContentProps {
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

// 为了向上下文传递数据
export interface CollapsibleContext {
  open: boolean
  disabled: boolean
  toggle: () => void
}
