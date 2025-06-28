export type AlertVariant = 'info' | 'success' | 'warning' | 'error'
export type AlertSize = 'xs' | 'sm' | 'md' | 'lg'
export type AlertRounded = 'none' | 'sm' | 'md' | 'lg' | 'full'

export type AlertPT = {
  root?: string
  icon?: string
  title?: string
  description?: string
  closeButton?: string
}

export interface AlertProps {
  variant?: AlertVariant
  size?: AlertSize
  title?: string
  description?: string
  icon?: boolean
  closable?: boolean
  class?: string
  rounded?: AlertRounded
  border?: boolean
  shadow?: boolean
  unstyled?: boolean
  pt?: AlertPT
}
