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
}
