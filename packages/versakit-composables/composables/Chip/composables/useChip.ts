import { ref, computed } from 'vue'

export function useChip(props: {
  modelValue?: boolean
  selectable?: boolean
  disabled?: boolean
  onDelete?: () => void
  onChange?: (val: boolean) => void
}) {
  const selected = ref(props.modelValue ?? false)

  const toggle = () => {
    if (props.disabled || !props.selectable) return
    selected.value = !selected.value
    props.onChange?.(selected.value)
  }

  const handleDelete = () => {
    if (props.disabled) return
    props.onDelete?.()
  }

  const isSelected = computed(() => selected.value)

  return {
    isSelected,
    toggle,
    handleDelete,
  }
}
