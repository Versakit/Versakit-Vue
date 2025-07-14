export type LinkVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'

export type LinkSize = 'sm' | 'md' | 'lg'

export type LinkProps = {
  /**
   * 链接的目标地址
   */
  href?: string
  /**
   * 链接的变体样式
   * @default 'default'
   */
  variant?: LinkVariant
  /**
   * 链接的尺寸
   * @default 'md'
   */
  size?: LinkSize
  /**
   * 是否在新标签页中打开链接
   * @default false
   */
  external?: boolean
  /**
   * 是否显示下划线
   * @default false
   */
  underline?: boolean
  /**
   * 是否禁用链接
   * @default false
   */
  disabled?: boolean
  /**
   * 链接的图标位置
   * @default undefined
   */
  iconPosition?: 'left' | 'right'
  /**
   * 是否禁用默认样式
   * @default false
   */
  unstyled?: boolean
  /**
   * 自定义样式传递
   */
  pt?: LinkPT
}

export type LinkPT = {
  root?: string
  icon?: string
}

export const LinkEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type LinkEmits = typeof LinkEmits
