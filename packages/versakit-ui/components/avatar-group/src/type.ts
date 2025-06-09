import type {
  AvatarSize,
  AvatarShape,
  AvatarVariant,
} from '../../avatar/src/type'

export interface AvatarGroupProps {
  /** 头像大小 */
  size?: AvatarSize | number
  /** 头像形状 */
  shape?: AvatarShape
  /** 头像颜色风格 */
  variant?: AvatarVariant
  /** 最大显示数量 */
  max?: number
  /** 头像间距 */
  spacing?: number | string
  /** 自定义类名 */
  customClass?: string
  /** 溢出提示文本 */
  overflowText?: string
  /** 头像是否堆叠 */
  stack?: boolean
  /** 头像边框宽度 */
  borderWidth?: number | string
  /** 头像边框颜色 */
  borderColor?: string
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

// PT (Pass Through) 类型定义
export type AvatarGroupPassThroughAttributes = {
  root?: Record<string, unknown>
  overflow?: Record<string, unknown>
}

export interface AvatarGroupSlots {
  default?: () => unknown
  overflow?: () => unknown
}
