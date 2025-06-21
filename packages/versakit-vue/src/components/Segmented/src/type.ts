export interface SegmentedProps<T extends string | number = string | number> {
  modelValue?: T
  options: Array<T | { value: T; label: string; disabled?: boolean }>
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  block?: boolean
}
