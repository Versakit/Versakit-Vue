export type TextareaProps = {
  modelValue?: string
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  rows?: number
  maxLength?: number
  minLength?: number
  autosize?: boolean
  resize?: 'none' | 'both' | 'horizontal' | 'vertical'
  showCount?: boolean
  size?: 'sm' | 'md' | 'lg'
  status?: 'error' | 'warning' | 'success'
  /**
   * 是否使用无样式模式
   * @default false
   */
  unstyled?: boolean
  /**
   * 传递模板样式
   */
  pt?: TextareaPT
}

/**
 * Textarea组件模板样式类型
 */
export type TextareaPT = {
  root?: string
  textarea?: string
  counter?: string
}
