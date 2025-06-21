import { ref, computed } from 'vue'

export interface UseChipProps {
  modelValue?: boolean
  selectable?: boolean
  disabled?: boolean
  closable?: boolean
  onClose?: (event: Event) => void
  onChange?: (val: boolean) => void
}

export function useChip(props: UseChipProps) {
  const selected = ref(props.modelValue ?? false)

  const toggle = () => {
    if (props.disabled || !props.selectable) return
    selected.value = !selected.value
    props.onChange?.(selected.value)
  }

  const handleClose = (event: Event) => {
    if (props.disabled) return
    event.stopPropagation()
    props.onClose?.(event)
  }

  const isSelected = computed(() => selected.value)
  const isClosable = computed(() => props.closable || !!props.onClose)

  return {
    isSelected,
    isClosable,
    toggle,
    handleClose,
  }
}
