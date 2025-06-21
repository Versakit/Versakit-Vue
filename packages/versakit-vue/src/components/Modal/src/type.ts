export interface DialogProps {
  modelValue?: boolean
  onClose?: () => void
}

export interface ModalProps {
  modelValue?: boolean
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full'
  closeOnEsc?: boolean
  closeOnOverlayClick?: boolean
  hideCloseButton?: boolean
  class?: string
  contentClass?: string
  headerClass?: string
  bodyClass?: string
  footerClass?: string
}
