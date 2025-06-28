export type DividerOrientation = 'horizontal' | 'vertical'
export type DividerVariant = 'solid' | 'dashed' | 'dotted'
export type DividerSize = 'thin' | 'medium' | 'thick'
export type DividerLabelPosition = 'start' | 'center' | 'end'

export type DividerProps = {
  orientation?: DividerOrientation
  variant?: DividerVariant
  size?: DividerSize
  color?: string
  label?: string
  labelPosition?: DividerLabelPosition
  /**
   * HTML元素类型
   * @default 'div'
   */
  as?: string
  /**
   * 是否使用无样式模式
   * @default false
   */
  unstyled?: boolean
  /**
   * 传递模板样式
   */
  pt?: DividerPT
}

/**
 * Divider组件CSS变体属性
 */
export interface DividerVariantProps {
  orientation?: DividerOrientation
  variant?: DividerVariant
  size?: DividerSize
  labelPosition?: DividerLabelPosition
  withLabel?: boolean
}

/**
 * Divider组件模板样式类型
 */
export type DividerPT = {
  root?: string
  label?: string
}
