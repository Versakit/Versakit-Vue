import { computed } from 'vue'
import type { BadgePosition } from '../type'

export function useBadge(props: {
  content?: string | number
  dot?: boolean
  show?: boolean
  position?: BadgePosition
}) {
  const visible = computed(() => {
    if (props.dot) return props.show !== false
    return (
      props.show !== false &&
      props.content !== undefined &&
      props.content !== ''
    )
  })

  const positionClass = computed(() => {
    switch (props.position) {
      case 'top-left':
        return 'top-0 left-0 -translate-x-1/2 -translate-y-1/2'
      case 'bottom-right':
        return 'bottom-0 right-0 translate-x-1/2 translate-y-1/2'
      case 'bottom-left':
        return 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2'
      case 'top-right':
      default:
        return 'top-0 right-0 translate-x-1/2 -translate-y-1/2'
    }
  })

  return {
    visible,
    positionClass,
  }
}
