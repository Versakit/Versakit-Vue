export type DatePickerProps = {
  modelValue?: Date
  min?: Date
  max?: Date
  disabled?: boolean
  readonly?: boolean
  placeholder?: string
  format?: string
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  locale?: string
  clearable?: boolean
  unstyled?: boolean
  pt?: DatePickerPT
}

export type DatePickerPT = {
  root?: string
  input?: string
  inputWrapper?: string
  clearButton?: string
  dropdown?: string
  calendar?: Record<string, string>
}

export const DatePickerEmits = {
  'update:modelValue': (date: Date | null) =>
    date === null || date instanceof Date,
  change: (date: Date | null) => date === null || date instanceof Date,
  focus: (e: FocusEvent) => e instanceof FocusEvent,
  blur: (e: FocusEvent) => e instanceof FocusEvent,
  clear: () => true,
}

export type IDatePickerEmits = typeof DatePickerEmits
