export type ModalSize =
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | 'full'

export interface DialogProps {
  modelValue?: boolean
  onClose?: () => void
}

export interface ModalProps {
  modelValue?: boolean
  title?: string
  size?: ModalSize
  closeOnEsc?: boolean
  closeOnOverlayClick?: boolean
  hideCloseButton?: boolean
  class?: string
  contentClass?: string
  headerClass?: string
  bodyClass?: string
  footerClass?: string
  /**
   * 是否使用无样式模式
   * @default false
   */
  unstyled?: boolean
  /**
   * 传递模板样式
   */
  pt?: ModalPT
}

/**
 * Modal组件模板样式类型
 */
export type ModalPT = {
  overlay?: string
  content?: string
  header?: string
  title?: string
  body?: string
  footer?: string
  closeButton?: string
}
