export type BadgePosition =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
export type BadgeColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
export type BadgeSize = 'sm' | 'md' | 'lg'

export interface BadgeProps {
  content?: string | number
  dot?: boolean
  show?: boolean
  position?: BadgePosition
  color?: BadgeColor
  size?: BadgeSize
  max?: number
  unstyled?: boolean
  pt?: BadgePT
}

export type BadgePT = {
  root?: string
  badge?: string
}
