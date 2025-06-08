export type BtnVariant = 'primary' | 'success' | 'warning' | 'info' | 'error'

export type BtnSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface BtnProps {
  variant?: BtnVariant
  size?: BtnSize
}
