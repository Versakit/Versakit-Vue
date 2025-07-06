import { ref, onUnmounted, watch } from 'vue'

export interface UseDrawerOptions {
  onClose?: () => void
  onOpen?: () => void
  closeOnEsc?: boolean
  closeOnOverlayClick?: boolean
}

export function useDrawer(options?: UseDrawerOptions) {
  const isOpen = ref(false)
  const closeOnEsc = options?.closeOnEsc ?? true
  const closeOnOverlayClick = options?.closeOnOverlayClick ?? true

  const open = () => {
    isOpen.value = true
    options?.onOpen?.()
  }

  const close = () => {
    isOpen.value = false
    options?.onClose?.()
  }

  const drawerRef = ref<HTMLElement | null>(null)
  const overlayRef = ref<HTMLElement | null>(null)

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && closeOnEsc) close()
  }

  const onOverlayClick = (e: MouseEvent) => {
    if (e.target === overlayRef.value && closeOnOverlayClick) close()
  }

  watch(isOpen, (val) => {
    if (val) document.addEventListener('keydown', onKeyDown)
    else document.removeEventListener('keydown', onKeyDown)
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', onKeyDown)
  })

  return {
    isOpen,
    open,
    close,
    overlayRef,
    drawerRef,
    onOverlayClick,
  }
}
