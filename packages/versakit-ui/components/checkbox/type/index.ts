export interface CheckboxProps {
  modelValue?: boolean | string[]
  label?: string
  disabled?: boolean
  indeterminate?: boolean
  value?: string
  name?: string
  unstyled?: boolean
  pt?: CheckboxPtProps
}

export interface CheckboxPtProps {
  root?: string | Record<string, any>
  input?: string | Record<string, any>
  inner?: string | Record<string, any>
  label?: string | Record<string, any>
  checked?: string | Record<string, any>
  disabled?: string | Record<string, any>
  indeterminate?: string | Record<string, any>
}

export interface CheckboxGroupProps {
  modelValue: string[]
  disabled?: boolean
  unstyled?: boolean
  pt?: CheckboxGroupPtProps
}

export interface CheckboxGroupPtProps {
  root?: string | Record<string, any>
}

export interface CheckboxGroupContext {
  modelValue: string[]
  disabled?: boolean
  onChange: (value: string[]) => void
}
