import { ref } from 'vue'

export function useSegmented<T extends string | number>(
  options: T[],
  props: {
    modelValue?: T
    onChange?: (val: T) => void
  },
) {
  const selected = ref<T>(props.modelValue ?? options[0])

  const isSelected = (val: T) => selected.value === val

  const select = (val: T) => {
    selected.value = val
    props.onChange?.(val)
  }

  const onKeydown = (e: KeyboardEvent) => {
    const idx = options.indexOf(selected.value)
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      const next = options[(idx + 1) % options.length]
      select(next)
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      const prev = options[(idx - 1 + options.length) % options.length]
      select(prev)
    }
  }

  return {
    selected,
    isSelected,
    select,
    onKeydown,
  }
}
