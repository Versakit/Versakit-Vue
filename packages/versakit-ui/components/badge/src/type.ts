export type BadgeVariant =
  | 'primary'
  | 'success'
  | 'warning'
  | 'info'
  | 'error'
  | 'default'

export type BadgeSize = 'xs' | 'sm' | 'md' | 'lg'

export type BadgePosition =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'

export interface BadgeProps {
  /** 徽章内容 */
  content?: string | number
  /** 徽章变体样式 */
  variant?: BadgeVariant
  /** 徽章尺寸 */
  size?: BadgeSize
  /** 徽章位置 */
  position?: BadgePosition
  /** 是否显示为圆点 */
  dot?: boolean
  /** 最大值，超过后显示 {max}+ */
  max?: number
  /** 是否隐藏徽章 */
  hidden?: boolean
  /** 是否显示为独立徽章，不附加到其他元素上 */
  standalone?: boolean
}
