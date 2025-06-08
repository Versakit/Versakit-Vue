export type DrawerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom'

export interface DrawerProps {
  /** 是否显示抽屉 */
  modelValue?: boolean
  /** 抽屉标题 */
  title?: string
  /** 抽屉宽度/高度，可以是具体数值如 '300px' 或预设尺寸 */
  size?: DrawerSize | string
  /** 抽屉位置 */
  placement?: DrawerPlacement
  /** 是否显示关闭按钮 */
  closable?: boolean
  /** 点击遮罩层是否关闭抽屉 */
  closeOnClickOverlay?: boolean
  /** 是否添加遮罩层 */
  overlay?: boolean
  /** 是否显示抽屉头部 */
  showHeader?: boolean
  /** 是否显示抽屉底部 */
  showFooter?: boolean
  /** 是否允许按Esc关闭抽屉 */
  closeOnEsc?: boolean
  /** 是否为圆角抽屉 */
  rounded?: boolean
  /** 是否启用无障碍功能 */
  a11y?: boolean
  /** 抽屉层级 */
  zIndex?: number
  /** 自定义类名 */
  customClass?: string
  /** 抽屉背景颜色 */
  bgColor?: string
  /** 遮罩层透明度 */
  overlayOpacity?: number
}
