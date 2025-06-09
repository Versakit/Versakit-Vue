export type DividerType = 'horizontal' | 'vertical'

export type DividerAlign = 'left' | 'center' | 'right'

// PT (Pass Through) 类型定义
export type DividerPassThroughAttributes = {
  root?: Record<string, unknown>
  line?: Record<string, unknown>
  content?: Record<string, unknown>
}

export interface DividerProps {
  /** 分割线类型：水平或垂直 */
  type?: DividerType
  /** 分割线对齐方式（仅在有内容时生效） */
  align?: DividerAlign
  /** 分割线颜色 */
  color?: string
  /** 分割线粗细 */
  thickness?: number | string
  /** 分割线样式：实线、虚线等 */
  lineStyle?: 'solid' | 'dashed' | 'dotted'
  /** 分割线两侧的间距 */
  spacing?: number | string
  /** 是否使用无样式模式 */
  unstyled?: boolean
  /** 是否有文本内容 */
  hasContent?: boolean
  /** Pass Through 属性 */
  pt?: DividerPassThroughAttributes
}

export interface DividerSlots {
  default?: () => unknown
}
