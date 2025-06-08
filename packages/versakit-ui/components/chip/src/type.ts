export type ChipVariant =
  | 'primary'
  | 'success'
  | 'warning'
  | 'info'
  | 'error'
  | 'default'

export type ChipSize = 'sm' | 'md' | 'lg'

export interface ChipProps {
  /** 标签变体样式 */
  variant?: ChipVariant
  /** 标签尺寸 */
  size?: ChipSize
  /** 是否可关闭 */
  closable?: boolean
  /** 是否显示边框 */
  outlined?: boolean
  /** 是否圆角 */
  rounded?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 是否显示图标 */
  icon?: boolean
  /** 点击关闭按钮的回调 */
  onClose?: () => void
}
