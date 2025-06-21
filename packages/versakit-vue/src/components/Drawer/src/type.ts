export interface DrawerProps {
  modelValue: boolean
  placement?: 'left' | 'right' | 'top' | 'bottom'
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
}
