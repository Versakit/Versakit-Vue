export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom'

export interface DrawerProps {
  modelValue: boolean
  placement?: DrawerPlacement
  size?: string | number
  showOverlay?: boolean
  closeOnEsc?: boolean
  closeOnOverlayClick?: boolean
  preventScroll?: boolean
  zIndex?: number
  title?: string
  hideCloseButton?: boolean
  class?: string
  contentClass?: string
  headerClass?: string
  bodyClass?: string
  footerClass?: string
  overlayClass?: string
  /**
   * 是否使用无样式模式
   * @default false
   */
  unstyled?: boolean
  /**
   * 传递模板样式
   */
  pt?: DrawerPT
}

/**
 * Drawer组件模板样式类型
 */
export type DrawerPT = {
  overlay?: string
  container?: string
  header?: string
  title?: string
  closeButton?: string
  body?: string
  footer?: string
}
