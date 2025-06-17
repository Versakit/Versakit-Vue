import { ref, computed } from 'vue'

interface UseSwitchOptions {
  modelValue?: boolean
  disabled?: boolean
  onChange?: (val: boolean) => void
}

export function useSwitch(options?: UseSwitchOptions) {
  const internalChecked = ref(options?.modelValue ?? false)
  const isControlled = computed(() => options?.modelValue !== undefined)

  const checked = computed({
    get: () =>
      isControlled.value ? options!.modelValue! : internalChecked.value,
    set: (val: boolean) => {
      if (!isControlled.value) internalChecked.value = val
      options?.onChange?.(val)
    },
  })

  const disabled = ref(!!options?.disabled)

  const toggle = () => {
    if (disabled.value) return
    checked.value = !checked.value
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      toggle()
    }
  }

  return {
    checked,
    disabled,
    toggle,
    onKeyDown,
  }
}
