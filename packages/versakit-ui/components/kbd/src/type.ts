export type KbdSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type KbdVariant = 'default' | 'outline' | 'ghost'

export interface KbdProps {
  /** 键盘按键尺寸 */
  size?: KbdSize
  /** 变体样式 */
  variant?: KbdVariant
  /** 是否禁用 */
  disabled?: boolean
  /** 无障碍标签 */
  ariaLabel?: string
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

// PT (Pass Through) 类型定义
export type KbdPassThroughAttributes = {
  root?: Record<string, unknown>
}

export interface KbdSlots {
  default?: () => unknown
}
