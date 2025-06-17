import { ref, onUnmounted, watch } from 'vue'

export function usePopover(options?: { onClose?: () => void }) {
  const isOpen = ref(false)
  const triggerRef = ref<HTMLElement | null>(null)
  const popoverRef = ref<HTMLElement | null>(null)

  const open = () => (isOpen.value = true)
  const close = () => {
    isOpen.value = false
    options?.onClose?.()
  }
  const toggle = () => (isOpen.value ? close() : open())

  const onClickOutside = (e: MouseEvent) => {
    if (
      !popoverRef.value?.contains(e.target as Node) &&
      !triggerRef.value?.contains(e.target as Node)
    ) {
      close()
    }
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') close()
  }

  watch(isOpen, (val) => {
    if (val) {
      document.addEventListener('click', onClickOutside)
      document.addEventListener('keydown', onKeyDown)
    } else {
      document.removeEventListener('click', onClickOutside)
      document.removeEventListener('keydown', onKeyDown)
    }
  })

  onUnmounted(() => {
    document.removeEventListener('click', onClickOutside)
    document.removeEventListener('keydown', onKeyDown)
  })

  return {
    isOpen,
    open,
    close,
    toggle,
    triggerRef,
    popoverRef,
  }
}
