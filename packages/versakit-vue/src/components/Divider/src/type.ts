export type DividerProps = {
  orientation?: 'horizontal' | 'vertical'
  variant?: 'solid' | 'dashed' | 'dotted'
  size?: 'thin' | 'medium' | 'thick'
  color?: string
  label?: string
  labelPosition?: 'start' | 'center' | 'end'
  /**
   * HTML元素类型
   * @default 'div'
   */
  as?: string
}

/**
 * Divider组件CSS变体属性
 */
export interface DividerVariantProps {
  orientation?: 'horizontal' | 'vertical'
  variant?: 'solid' | 'dashed' | 'dotted'
  size?: 'thin' | 'medium' | 'thick'
  labelPosition?: 'start' | 'center' | 'end'
  withLabel?: boolean
}
