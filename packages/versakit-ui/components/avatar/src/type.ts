export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type AvatarShape = 'circle' | 'square' | 'rounded'
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away' | 'none'
export type AvatarVariant =
  | 'primary'
  | 'success'
  | 'warning'
  | 'info'
  | 'error'
  | 'default'

export interface AvatarProps {
  /** 头像大小 */
  size?: AvatarSize | number
  /** 头像形状 */
  shape?: AvatarShape
  /** 头像图片源 */
  src?: string
  /** 头像图片加载失败时显示的回退内容 */
  fallback?: string
  /** 头像显示的文本 */
  text?: string
  /** 头像颜色风格 */
  variant?: AvatarVariant
  /** 头像状态 */
  status?: AvatarStatus
  /** 状态显示位置 */
  statusPosition?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  /** 边框宽度 */
  borderWidth?: number | string
  /** 边框颜色 */
  borderColor?: string
  /** 自定义类名 */
  customClass?: string
  /** 图片加载失败时是否显示回退UI */
  showFallback?: boolean
  /** 图片加载失败时的事件 */
  onError?: (e: Event) => void
  /** 头像图标 */
  icon?: string
  /** 是否为加载状态 */
  loading?: boolean
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

// PT (Pass Through) 类型定义
export type AvatarPassThroughAttributes = {
  root?: Record<string, unknown>
  status?: Record<string, unknown>
  image?: Record<string, unknown>
  fallback?: Record<string, unknown>
  icon?: Record<string, unknown>
}

export interface AvatarSlots {
  fallback?: () => unknown
  icon?: () => unknown
}
