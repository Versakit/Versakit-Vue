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
}
