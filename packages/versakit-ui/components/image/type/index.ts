export interface ImagePtProps {
  root?: string | Record<string, any>
}

export interface ImageProps {
  src: string
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  lazy?: boolean
  icon?: string
  unstyled?: boolean
  pt?: ImagePtProps
}
