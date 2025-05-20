export interface DatapickerProps {
  modelValue: Date | string | null
  placeholder?: string
  disabled?: boolean
  unstyled?: boolean
  pt?: DatapickerPtrProps
}

export interface DatapickerPtrProps {
  root?: string | Record<string, any>
}
