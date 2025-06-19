import { ref, computed, watch } from 'vue'

interface UseSwitchOptions {
  modelValue?: boolean
  disabled?: boolean
  onChange?: (val: boolean) => void
}

export function useSwitch(options?: UseSwitchOptions) {
  const internalChecked = ref(options?.modelValue ?? false)
  const isControlled = computed(() => options?.modelValue !== undefined)

  // 当外部 modelValue 变化时更新内部状态
  watch(
    () => options?.modelValue,
    (newVal) => {
      if (newVal !== undefined && newVal !== internalChecked.value) {
        internalChecked.value = newVal
      }
    },
  )

  const checked = computed({
    get: () =>
      isControlled.value ? options!.modelValue! : internalChecked.value,
    set: (val: boolean) => {
      if (!isControlled.value) internalChecked.value = val
      options?.onChange?.(val)
    },
  })

  const disabled = ref(!!options?.disabled)

  // 监听外部 disabled 变化
  watch(
    () => options?.disabled,
    (newVal) => {
      if (newVal !== undefined) {
        disabled.value = newVal
      }
    },
  )

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
