export type CardVariant = 'default' | 'bordered' | 'elevated'
export type CardPadding = 'none' | 'sm' | 'md' | 'lg'
export type CardRadius = 'none' | 'sm' | 'md' | 'lg' | 'full'

export type CardProps = {
  variant?: CardVariant
  padding?: CardPadding
  radius?: CardRadius
  hover?: boolean
  unstyled?: boolean
  pt?: CardPT
}

export type CardPT = {
  root?: string
  header?: string
  body?: string
  footer?: string
}
