export type TimePickerProps = {
  modelValue?: string | Date
  disabled?: boolean
  readonly?: boolean
  placeholder?: string
  format?: '12h' | '24h'
  hourStep?: number
  minuteStep?: number
  secondStep?: number
  showSeconds?: boolean
  clearable?: boolean
  unstyled?: boolean
  pt?: TimePickerPT
}

export type TimePickerPT = {
  root?: string
  input?: string
  inputWrapper?: string
  clearButton?: string
  dropdown?: string
  timeSelector?: string
  column?: string
  item?: string
  itemSelected?: string
}

export const TimePickerEmits = {
  'update:modelValue': (value: string | Date | null) =>
    value === null || typeof value === 'string' || value instanceof Date,
  change: (value: string | Date | null) =>
    value === null || typeof value === 'string' || value instanceof Date,
  focus: (e: FocusEvent) => e instanceof FocusEvent,
  blur: (e: FocusEvent) => e instanceof FocusEvent,
  clear: () => true,
}

export type ITimePickerEmits = typeof TimePickerEmits
