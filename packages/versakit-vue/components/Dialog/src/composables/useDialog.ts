import { ref, onUnmounted, watch } from 'vue'

export function useDialog(options?: { onClose?: () => void }) {
  const isOpen = ref(false)

  const open = () => {
    console.log('Dialog opening...')
    isOpen.value = true
    console.log('isOpen after open:', isOpen.value)
  }

  const close = () => {
    console.log('Dialog closing...')
    isOpen.value = false
    console.log('isOpen after close:', isOpen.value)
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
    console.log('isOpen changed to:', val)
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
