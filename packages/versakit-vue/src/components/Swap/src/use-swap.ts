import { ref, computed } from 'vue'
import type { SwapProps } from './type'

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const useSwap = (props: SwapProps, emit: Function) => {
  const internalActive = ref(props.active || false)

  const isActive = computed({
    get: () =>
      props.active !== undefined ? props.active : internalActive.value,
    set: (value) => {
      if (props.disabled) return

      if (props.active === undefined) {
        internalActive.value = value
      }

      emit('update:active', value)
      emit('change', value)
    },
  })

  const toggle = () => {
    isActive.value = !isActive.value
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleTrigger = (_event?: Event) => {
    if (props.disabled) return

    if (props.trigger === 'click') {
      toggle()
    }
  }

  return {
    isActive,
    toggle,
    handleTrigger,
  }
}
