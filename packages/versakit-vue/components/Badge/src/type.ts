export interface BadgeProps {
  content?: string | number
  dot?: boolean
  show?: boolean
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
  size?: 'sm' | 'md' | 'lg'
  max?: number
}
