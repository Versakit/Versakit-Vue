import { ref, onUnmounted, watch } from 'vue'

export function useDrawer(options?: { onClose?: () => void }) {
  const isOpen = ref(false)

  const open = () => (isOpen.value = true)
  const close = () => {
    isOpen.value = false
    options?.onClose?.()
  }

  const drawerRef = ref<HTMLElement | null>(null)
  const overlayRef = ref<HTMLElement | null>(null)

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') close()
  }

  const onOverlayClick = (e: MouseEvent) => {
    if (e.target === overlayRef.value) close()
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
