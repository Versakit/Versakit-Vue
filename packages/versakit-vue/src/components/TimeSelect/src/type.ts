export type TimeSelectProps = {
  modelValue?: string
  disabled?: boolean
  readonly?: boolean
  placeholder?: string
  options?: string[]
  start?: string
  end?: string
  step?: number
  format?: '12h' | '24h'
  clearable?: boolean
  unstyled?: boolean
  pt?: TimeSelectPT
}

export type TimeSelectPT = {
  root?: string
  input?: string
  inputWrapper?: string
  clearButton?: string
  dropdown?: string
  optionsList?: string
  option?: string
  optionSelected?: string
}

export const TimeSelectEmits = {
  'update:modelValue': (value: string | null) =>
    value === null || typeof value === 'string',
  change: (value: string | null) => value === null || typeof value === 'string',
  focus: (e: FocusEvent) => e instanceof FocusEvent,
  blur: (e: FocusEvent) => e instanceof FocusEvent,
  clear: () => true,
}

export type ITimeSelectEmits = typeof TimeSelectEmits
