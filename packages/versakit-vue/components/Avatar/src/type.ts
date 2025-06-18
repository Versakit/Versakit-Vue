export interface AvatarProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  src?: string
  alt?: string
  fallback?: string
  shape?: 'circle' | 'square'
  status?: 'online' | 'offline' | 'away' | 'busy' | 'none'
}
