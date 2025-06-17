// useTooltip.ts
import { ref, onUnmounted } from 'vue'

export function useTooltip(options?: {
  openDelay?: number
  closeDelay?: number
}) {
  const isOpen = ref(false)
  const triggerRef = ref<HTMLElement | null>(null)
  const tooltipRef = ref<HTMLElement | null>(null)

  let openTimer: ReturnType<typeof setTimeout> | null = null
  let closeTimer: ReturnType<typeof setTimeout> | null = null

  const open = () => {
    if (closeTimer) clearTimeout(closeTimer)
    openTimer = setTimeout(() => {
      isOpen.value = true
    }, options?.openDelay ?? 0)
  }

  const close = () => {
    if (openTimer) clearTimeout(openTimer)
    closeTimer = setTimeout(() => {
      isOpen.value = false
    }, options?.closeDelay ?? 100)
  }

  const onMouseEnter = () => open()
  const onFocus = () => open()
  const onMouseLeave = () => close()
  const onBlur = () => close()

  onUnmounted(() => {
    if (openTimer) clearTimeout(openTimer)
    if (closeTimer) clearTimeout(closeTimer)
  })

  const tooltipId = `tooltip-${Math.random().toString(36).slice(2, 9)}`

  return {
    isOpen,
    triggerRef,
    tooltipRef,
    tooltipId,
    onMouseEnter,
    onFocus,
    onMouseLeave,
    onBlur,
  }
}
