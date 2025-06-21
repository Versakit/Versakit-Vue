export interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  title?: string
  description?: string
  icon?: boolean
  closable?: boolean
  class?: string
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  border?: boolean
  shadow?: boolean
}
