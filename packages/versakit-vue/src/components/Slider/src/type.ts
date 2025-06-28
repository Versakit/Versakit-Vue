export interface SliderProps {
  modelValue: number
  min?: number
  max?: number
  step?: number
  orientation?: 'horizontal' | 'vertical'
  disabled?: boolean
  showTooltip?: boolean
  showMarks?: boolean
  marks?: Record<number, string>
  formatTooltip?: (value: number) => string
  /**
   * 是否使用无样式模式
   * @default false
   */
  unstyled?: boolean
  /**
   * 传递模板样式
   */
  pt?: SliderPT
}

/**
 * Slider组件模板样式类型
 */
export type SliderPT = {
  container?: string
  track?: string
  fill?: string
  thumb?: string
  tooltip?: string
  marks?: string
  mark?: string
  markLabel?: string
}
