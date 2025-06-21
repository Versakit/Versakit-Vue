import { ref, onUnmounted, watch } from 'vue'

export interface UseModalOptions {
  onClose?: () => void
  closeOnEsc?: boolean
  closeOnOverlayClick?: boolean
}

export function useModal(options?: UseModalOptions) {
  const isOpen = ref(false)
  const closeOnEsc = options?.closeOnEsc ?? true
  const closeOnOverlayClick = options?.closeOnOverlayClick ?? true

  const open = () => {
    isOpen.value = true
  }

  const close = () => {
    isOpen.value = false
    options?.onClose?.()
  }

  const modalRef = ref<HTMLElement | null>(null)
  const overlayRef = ref<HTMLElement | null>(null)

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && closeOnEsc) {
      close()
    }
  }

  watch(isOpen, (val) => {
    if (val) {
      document.addEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', onKeyDown)
    document.body.style.overflow = ''
  })

  const onOverlayClick = (e: MouseEvent) => {
    if (e.target === overlayRef.value && closeOnOverlayClick) {
      close()
    }
  }

  return {
    isOpen,
    open,
    close,
    modalRef,
    overlayRef,
    onOverlayClick,
  }
}
