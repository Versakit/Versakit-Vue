export interface SwitchProps {
  modelValue: boolean
  disabled?: boolean
  loading?: boolean
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
  name?: string
  id?: string
  required?: boolean
  ariaLabel?: string
}
