import { ref, computed, watch, nextTick, onMounted } from 'vue'
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

  // 内部响应式的 modelValue，用于跟踪当前选中值
  const internalValue = ref(props.modelValue)

  // 监听外部 modelValue 变化，同步到内部值
  watch(
    () => props.modelValue,
    (newVal) => {
      internalValue.value = newVal
    },
    { immediate: true },
  )

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

    // 打印调试信息
    console.debug('查找选中选项：', {
      selectedValues: selectedValues.value,
      options: normalizedOptions.value.map((o) => ({
        value: o.value,
        label: o.label,
      })),
    })

    for (const val of selectedValues.value) {
      // 使用严格相等和类型转换后的相等进行匹配
      const option =
        normalizedOptions.value.find((o) => o.value === val) ||
        normalizedOptions.value.find((o) => String(o.value) === String(val))

      if (option) {
        result.push(option)
      } else {
        // 如果找不到，创建一个临时选项显示值
        console.warn(`没有找到值为 ${val} 的选项，创建临时选项`)

        const tempOption: SelectOption = {
          label: String(val),
          value: val as string | number,
        }

        result.push(tempOption)
      }
    }

    console.debug('找到选中选项结果：', result)
    return result
  })

  // 监听modelValue和options变化，确保选中项能实时更新
  watch(
    [() => props.modelValue, () => props.options],
    () => {
      console.debug('modelValue或options变化，更新选中项', {
        modelValue: props.modelValue,
        options: props.options,
        selectedValues: selectedValues.value,
        selectedOptions: selectedOptions.value,
      })
    },
    { immediate: true, deep: true },
  )

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

    let newValue: any

    if (props.multiple) {
      const values = [...selectedValues.value]
      // 使用类型无关的比较
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

    // 更新内部值
    internalValue.value = newValue
    // 触发外部回调
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
    // 更新内部值
    internalValue.value = newValue
    // 触发外部回调
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
    return selectedValues.value.some((val) => String(val) === String(value))
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

  // 组件挂载后立即检查 selectedOptions
  onMounted(() => {
    console.debug('组件挂载完成，选中的值：', selectedValues.value)
    console.debug('组件挂载完成，选中的选项：', selectedOptions.value)
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
