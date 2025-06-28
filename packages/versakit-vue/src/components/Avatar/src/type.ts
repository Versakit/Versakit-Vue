export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type AvatarShape = 'circle' | 'square'
export type AvatarStatus = 'online' | 'offline' | 'away' | 'busy' | 'none'

export interface AvatarProps {
  size?: AvatarSize
  src?: string
  alt?: string
  fallback?: string
  shape?: AvatarShape
  status?: AvatarStatus
  unstyled?: boolean
  pt?: AvatarPT
}

export type AvatarPT = {
  root?: string
  image?: string
  fallback?: string
  initials?: string
  icon?: string
}
