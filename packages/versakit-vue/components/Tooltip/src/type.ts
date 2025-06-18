export interface TooltipProps {
  content: string
  placement?: 'top' | 'right' | 'bottom' | 'left'
  openDelay?: number
  closeDelay?: number
  disabled?: boolean
  trigger?: 'hover' | 'focus' | 'both'
  maxWidth?: string | number
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  arrow?: boolean
}
