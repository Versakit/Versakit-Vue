import { ref, onUnmounted, watch } from 'vue'

export function useDialog(options?: { onClose?: () => void }) {
  const isOpen = ref(false)

  const open = () => (isOpen.value = true)
  const close = () => {
    isOpen.value = false
    options?.onClose?.()
  }

  const dialogRef = ref<HTMLElement | null>(null)
  const overlayRef = ref<HTMLElement | null>(null)

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close()
    }
  }

  watch(isOpen, (val) => {
    if (val) document.addEventListener('keydown', onKeyDown)
    else document.removeEventListener('keydown', onKeyDown)
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', onKeyDown)
  })

  const onOverlayClick = (e: MouseEvent) => {
    if (e.target === overlayRef.value) {
      close()
    }
  }

  return {
    isOpen,
    open,
    close,
    dialogRef,
    overlayRef,
    onOverlayClick,
  }
}
