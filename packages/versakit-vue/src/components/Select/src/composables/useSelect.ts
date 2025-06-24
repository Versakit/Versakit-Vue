import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import type { SelectOption } from '../type'

export interface UseSelectProps {
  modelValue?: string | number | Array<string | number>
  options?: SelectOption[]
  multiple?: boolean
  filterable?: boolean
  disabled?: boolean
  readonly?: boolean
  onChange?: (val: any) => void
  onSearch?: (val: string) => void
  onDropdownVisibleChange?: (visible: boolean) => void
}

export function useSelect(props: UseSelectProps) {
  // 基础状态
  const isOpen = ref(false)
  const searchValue = ref('')
  const activeIndex = ref(0)
  const triggerRef = ref<HTMLElement | null>(null)
  const dropdownRef = ref<HTMLElement | null>(null)
  const internalValue = ref<
    string | number | Array<string | number> | undefined
  >(props.modelValue)

  // 监听外部 modelValue 变化
  watch(
    () => props.modelValue,
    (newVal) => {
      internalValue.value = newVal
    },
    { immediate: true },
  )

  // 处理选项数据
  const normalizedOptions = computed<SelectOption[]>(() => {
    return (
      props.options?.map((option) => ({
        ...option,
        disabled: option.disabled || false,
      })) || []
    )
  })

  // 分组选项
  const groupedOptions = computed(() => {
    const groups: Record<string, SelectOption[]> = {}
    const noGroup: SelectOption[] = []

    normalizedOptions.value.forEach((option) => {
      if (option.group) {
        if (!groups[option.group]) {
          groups[option.group] = []
        }
        groups[option.group].push(option)
      } else {
        noGroup.push(option)
      }
    })

    return { groups, noGroup }
  })

  // 处理选中值
  const selectedValues = computed(() => {
    if (props.multiple) {
      return Array.isArray(internalValue.value) ? internalValue.value : []
    } else {
      return internalValue.value !== undefined ? [internalValue.value] : []
    }
  })

  // 根据值找到对应的选项
  const selectedOptions = computed(() => {
    const result: SelectOption[] = []
    if (!selectedValues.value.length) return result

    for (const val of selectedValues.value) {
      // 使用严格相等和类型转换后的相等进行匹配
      const option = normalizedOptions.value.find(
        (o) => o.value === val || String(o.value) === String(val),
      )

      if (option) {
        result.push(option)
      } else if (val !== undefined && val !== null) {
        // 如果找不到，创建一个临时选项显示值
        // 修复类型问题，确保 value 只为 string 或 number
        if (typeof val === 'string' || typeof val === 'number') {
          const tempOption: SelectOption = {
            label: String(val),
            value: val,
            disabled: false,
          }
          result.push(tempOption)
        }
      }
    }

    return result
  })

  // 获取选项的标签显示
  const getOptionLabel = computed(() => {
    if (!selectedOptions.value || selectedOptions.value.length === 0) return ''
    return selectedOptions.value[0]?.label || ''
  })

  // 过滤选项
  const filteredOptions = computed(() => {
    if (!props.filterable || !searchValue.value) {
      return normalizedOptions.value
    }

    const query = searchValue.value.toLowerCase()
    return normalizedOptions.value.filter((option) =>
      option.label.toLowerCase().includes(query),
    )
  })

  // 选择选项
  const selectOption = (option: SelectOption) => {
    if (props.disabled || props.readonly || option.disabled) {
      return
    }

    let newValue: string | number | Array<string | number>

    if (props.multiple) {
      const values = [...selectedValues.value] as Array<string | number>
      const index = values.findIndex(
        (val) => String(val) === String(option.value),
      )

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

    internalValue.value = newValue
    props.onChange?.(newValue)

    // 清空搜索值
    if (props.filterable) {
      nextTick(() => {
        searchValue.value = ''
      })
    }
  }

  // 清空选择
  const clearSelection = (e?: Event) => {
    if (e) e.stopPropagation()
    if (props.disabled || props.readonly) return

    const newValue = props.multiple ? [] : undefined
    internalValue.value = newValue
    props.onChange?.(newValue)
  }

  // 切换下拉菜单
  const toggleDropdown = () => {
    if (props.disabled || props.readonly) return

    isOpen.value = !isOpen.value
    props.onDropdownVisibleChange?.(isOpen.value)

    if (isOpen.value) {
      nextTick(() => {
        resetActiveIndex()
      })
    }
  }

  // 打开下拉菜单
  const openDropdown = () => {
    if (props.disabled || props.readonly || isOpen.value) return

    isOpen.value = true
    props.onDropdownVisibleChange?.(true)

    nextTick(() => {
      resetActiveIndex()
    })
  }

  // 关闭下拉菜单
  const closeDropdown = () => {
    if (!isOpen.value) return

    isOpen.value = false
    searchValue.value = ''
    props.onDropdownVisibleChange?.(false)
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
    return selectedValues.value.some((val) => String(val) === String(value))
  }

  // 键盘导航
  const onKeyDown = (e: KeyboardEvent) => {
    if (props.disabled || props.readonly) return

    const options = filteredOptions.value

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        if (!isOpen.value) {
          openDropdown()
        } else {
          let nextIndex = activeIndex.value
          let count = 0
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
          let prevIndex = activeIndex.value
          let count = 0
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
    props.onSearch?.(value)
    resetActiveIndex()
  }

  // 点击外部关闭下拉菜单
  const handleClickOutside = (e: MouseEvent) => {
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
  const setupClickOutsideListener = () => {
    document.addEventListener('mousedown', handleClickOutside)
  }

  const removeClickOutsideListener = () => {
    document.removeEventListener('mousedown', handleClickOutside)
  }

  watch(isOpen, (val) => {
    if (val) {
      setupClickOutsideListener()
    } else {
      removeClickOutsideListener()
    }
  })

  // 清理事件监听
  const cleanup = () => {
    removeClickOutsideListener()
  }

  // 组件挂载时设置事件监听
  onMounted(() => {
    if (isOpen.value) {
      setupClickOutsideListener()
    }
  })

  // 组件卸载时清理事件监听
  onBeforeUnmount(() => {
    cleanup()
  })

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
    groupedOptions,
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
