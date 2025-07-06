export type KbdSize = 'xs' | 'sm' | 'md' | 'lg'
export type KbdVariant = 'default'

export type KbdProps = {
  /**
   * 键盘按键的大小变体
   */
  size?: KbdSize
  /**
   * 键盘按键的样式变体
   */
  variant?: KbdVariant
  /**
   * 是否使用无样式模式
   * @default false
   */
  unstyled?: boolean
  /**
   * 传递模板样式
   */
  pt?: KbdPT
}

/**
 * Kbd组件模板样式类型
 */
export type KbdPT = {
  root?: string
}
