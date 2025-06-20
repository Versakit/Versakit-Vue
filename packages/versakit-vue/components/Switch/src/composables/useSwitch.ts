// composables/useSwitch.ts
import { ref, computed, watch } from 'vue'

export function useSwitch(props: {
  modelValue?: boolean
  disabled?: boolean
  onChange?: (val: boolean) => void
}) {
  const state = ref(props.modelValue ?? false)

  const toggle = () => {
    if (props.disabled) return
    state.value = !state.value
    props.onChange?.(state.value)
  }

  watch(
    () => props.modelValue,
    (val) => {
      if (val !== undefined) state.value = val
    },
  )

  const checked = computed(() => !!state.value)

  return {
    checked,
    disabled: computed(() => !!props.disabled),
    toggle,
    onKeyDown: (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        toggle()
      }
    },
  }
}
