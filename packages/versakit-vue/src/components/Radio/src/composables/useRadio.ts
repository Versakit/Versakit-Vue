import { computed } from 'vue'

export function useRadio(props: {
  modelValue?: string | number | boolean
  value?: string | number | boolean
  disabled?: boolean
  onChange?: (val: string | number | boolean) => void
}) {
  const isChecked = computed(() => props.modelValue === props.value)

  const toggle = () => {
    if (props.disabled || isChecked.value) return
    props.onChange?.(props.value as string | number | boolean)
  }

  return {
    checked: isChecked,
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
