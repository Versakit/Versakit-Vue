export type BtnVariant =
  | 'primary'
  | 'success'
  | 'warning'
  | 'info'
  | 'error'
  | 'default'
  | 'text'
  | 'outline'
  | 'ghost'

export type BtnSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type BtnShape = 'default' | 'circle' | 'round'

export type IconPosition = 'left' | 'right'

export interface BtnProps {
  /** 按钮样式变体 */
  variant?: BtnVariant
  /** 按钮尺寸 */
  size?: BtnSize
  /** 按钮形状 */
  shape?: BtnShape
  /** 是否禁用 */
  disabled?: boolean
  /** 是否显示加载状态 */
  loading?: boolean
  /** 按钮类型 */
  type?: 'button' | 'submit' | 'reset'
  /** 无障碍标签 */
  ariaLabel?: string
  /** 是否为块级按钮 */
  block?: boolean
  /** 图标位置 */
  iconPosition?: IconPosition
  /** 自定义颜色（覆盖变体颜色） */
  color?: string
  /** 点击事件处理函数 */
  onClick?: (event: MouseEvent) => void
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

// PT (Pass Through) 类型定义
export type ButtonPassThroughAttributes = {
  root?: Record<string, unknown>
  icon?: Record<string, unknown>
  loading?: Record<string, unknown>
  content?: Record<string, unknown>
}

export interface ButtonSlots {
  icon?: (props: { iconPosition: IconPosition }) => unknown
  loading?: () => unknown
  default?: () => unknown
}
