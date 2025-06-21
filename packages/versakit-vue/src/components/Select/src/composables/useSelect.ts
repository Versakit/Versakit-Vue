import { ref, computed, watch, nextTick } from 'vue'
import type { SelectOption } from '../type'

export interface UseSelectProps {
  modelValue?: string | number | Array<string | number>
  options?: SelectOption[]
  multiple?: boolean
  filterable?: boolean
  disabled?: boolean
  readonly?: boolean
  onChange?: (val: any) => void
}

export function useSelect(props: UseSelectProps) {
  const isOpen = ref(false)
  const searchValue = ref('')
  const activeIndex = ref(0)
  const triggerRef = ref<HTMLElement | null>(null)
  const dropdownRef = ref<HTMLElement | null>(null)

  // 处理选中值
  const selectedValues = computed(() => {
    if (props.multiple) {
      return Array.isArray(props.modelValue) ? props.modelValue : []
    } else {
      return props.modelValue !== undefined ? [props.modelValue] : []
    }
  })

  // 根据值找到对应的选项
  const selectedOptions = computed(() => {
    const options = props.options || []
    return options.filter((option) =>
      selectedValues.value.includes(option.value),
    )
  })

  // 获取选项的标签显示
  const getOptionLabel = computed(() => {
    if (props.multiple) {
      return selectedOptions.value.map((o) => o.label).join(', ')
    } else {
      return selectedOptions.value[0]?.label || ''
    }
  })

  // 过滤选项
  const filteredOptions = computed(() => {
    const options = props.options || []
    if (!props.filterable || !searchValue.value) {
      return options
    }

    const query = searchValue.value.toLowerCase()
    return options.filter((option) =>
      option.label.toLowerCase().includes(query),
    )
  })

  // 选择选项
  const selectOption = (option: SelectOption) => {
    if (props.disabled || props.readonly || option.disabled) {
      return
    }

    let newValue: any

    if (props.multiple) {
      const values = [...selectedValues.value]
      const index = values.indexOf(option.value)

      if (index > -1) {
        values.splice(index, 1)
      } else {
        values.push(option.value)
      }

      newValue = values
    } else {
      newValue = option.value
      closeDropdown()
    }

    props.onChange?.(newValue)

    // 清空搜索值
    if (props.filterable) {
      nextTick(() => {
        searchValue.value = ''
      })
    }
  }

  // 清空选择
  const clearSelection = () => {
    if (props.disabled || props.readonly) {
      return
    }

    const newValue = props.multiple ? [] : undefined
    props.onChange?.(newValue)
  }

  // 切换下拉菜单
  const toggleDropdown = () => {
    if (props.disabled || props.readonly) {
      return
    }

    isOpen.value = !isOpen.value

    if (isOpen.value) {
      nextTick(() => {
        // 重置activeIndex到第一个未禁用的选项
        resetActiveIndex()
      })
    }
  }

  // 打开下拉菜单
  const openDropdown = () => {
    if (props.disabled || props.readonly || isOpen.value) {
      return
    }

    isOpen.value = true

    // 重置activeIndex
    nextTick(() => {
      resetActiveIndex()
    })
  }

  // 关闭下拉菜单
  const closeDropdown = () => {
    isOpen.value = false
    searchValue.value = ''
  }

  // 重置激活选项
  const resetActiveIndex = () => {
    const options = filteredOptions.value
    for (let i = 0; i < options.length; i++) {
      if (!options[i].disabled) {
        activeIndex.value = i
        return
      }
    }
    activeIndex.value = -1
  }

  // 选项是否被选中
  const isSelected = (value: string | number) => {
    return selectedValues.value.includes(value)
  }

  // 键盘导航
  const onKeyDown = (e: KeyboardEvent) => {
    if (props.disabled || props.readonly) {
      return
    }

    const options = filteredOptions.value

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()

        if (!isOpen.value) {
          openDropdown()
        } else {
          // 向下导航到下一个未禁用选项
          let nextIndex = activeIndex.value
          let count = 0 // 防止死循环

          do {
            nextIndex = (nextIndex + 1) % options.length
            count++
          } while (options[nextIndex]?.disabled && count < options.length)

          activeIndex.value = nextIndex
        }
        break

      case 'ArrowUp':
        e.preventDefault()

        if (!isOpen.value) {
          openDropdown()
        } else {
          // 向上导航到上一个未禁用选项
          let prevIndex = activeIndex.value
          let count = 0 // 防止死循环

          do {
            prevIndex = prevIndex <= 0 ? options.length - 1 : prevIndex - 1
            count++
          } while (options[prevIndex]?.disabled && count < options.length)

          activeIndex.value = prevIndex
        }
        break

      case 'Enter':
      case ' ':
        e.preventDefault()

        if (
          isOpen.value &&
          activeIndex.value >= 0 &&
          options[activeIndex.value]
        ) {
          selectOption(options[activeIndex.value])
        } else {
          toggleDropdown()
        }
        break

      case 'Escape':
        e.preventDefault()
        closeDropdown()
        break

      case 'Tab':
        closeDropdown()
        break
    }
  }

  // 搜索框输入
  const onSearchInput = (value: string) => {
    searchValue.value = value
    resetActiveIndex()
  }

  // 点击外部关闭下拉菜单
  const clickOutside = (e: MouseEvent) => {
    if (
      isOpen.value &&
      triggerRef.value &&
      dropdownRef.value &&
      !triggerRef.value.contains(e.target as Node) &&
      !dropdownRef.value.contains(e.target as Node)
    ) {
      closeDropdown()
    }
  }

  // 添加点击外部事件监听
  watch(isOpen, (val) => {
    if (val) {
      document.addEventListener('click', clickOutside)
    } else {
      document.removeEventListener('click', clickOutside)
    }
  })

  // 组件销毁时清理事件监听
  const cleanup = () => {
    document.removeEventListener('click', clickOutside)
  }

  return {
    isOpen,
    searchValue,
    activeIndex,
    triggerRef,
    dropdownRef,
    selectedValues,
    selectedOptions,
    getOptionLabel,
    filteredOptions,
    selectOption,
    clearSelection,
    toggleDropdown,
    openDropdown,
    closeDropdown,
    isSelected,
    onKeyDown,
    onSearchInput,
    cleanup,
  }
}
