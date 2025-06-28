export interface SegmentedProps<T extends string | number = string | number> {
  modelValue?: T
  options: Array<T | { value: T; label: string; disabled?: boolean }>
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  block?: boolean
  /**
   * 是否使用无样式模式
   * @default false
   */
  unstyled?: boolean
  /**
   * 传递模板样式
   */
  pt?: SegmentedPT
}

/**
 * Segmented组件模板样式类型
 */
export type SegmentedPT = {
  container?: string
  option?: string
}
