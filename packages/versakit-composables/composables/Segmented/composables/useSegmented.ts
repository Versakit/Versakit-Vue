import { ref } from 'vue'
import type { Ref } from 'vue'

// 定义返回类型接口，使用更通用的类型
interface UseSegmentedReturn<T extends string | number> {
  selected: Ref<T>
  isSelected: (val: T) => boolean
  select: (val: T) => void
  onKeydown: (e: KeyboardEvent) => void
}

export function useSegmented<T extends string | number>(
  options: Array<T>,
  props: {
    modelValue?: T
    onChange?: (val: T) => void
  },
): UseSegmentedReturn<T> {
  // 使用类型断言确保类型兼容性
  const selected = ref<T>(
    props.modelValue !== undefined ? props.modelValue : options[0],
  ) as Ref<T>

  const isSelected = (val: T): boolean => selected.value === val

  const select = (val: T): void => {
    selected.value = val
    props.onChange?.(val)
  }

  const onKeydown = (e: KeyboardEvent): void => {
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
