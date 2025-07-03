import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import type { SetupContext } from 'vue'
import type { DatePickerProps, IDatePickerEmits } from '../type'

export const useDatePicker = (
  props: DatePickerProps,
  emit: SetupContext<IDatePickerEmits>['emit'],
) => {
  const isOpen = ref(false)
  const inputRef = ref<HTMLInputElement | null>(null)
  const dropdownRef = ref<HTMLDivElement | null>(null)

  const formattedValue = computed(() => {
    if (!props.modelValue) return ''

    try {
      const locale = props.locale || 'default'
      const options: Intl.DateTimeFormatOptions = {}

      if (props.format) {
        // 简单的格式化选项
        if (props.format.includes('yyyy')) options.year = 'numeric'
        if (props.format.includes('MM')) options.month = '2-digit'
        else if (props.format.includes('M')) options.month = 'numeric'
        if (props.format.includes('dd')) options.day = '2-digit'
        else if (props.format.includes('d')) options.day = 'numeric'

        // 如果没有指定格式，使用短日期格式
        if (Object.keys(options).length === 0) {
          options.year = 'numeric'
          options.month = '2-digit'
          options.day = '2-digit'
        }
      } else {
        // 默认格式
        options.year = 'numeric'
        options.month = '2-digit'
        options.day = '2-digit'
      }

      return new Intl.DateTimeFormat(locale, options).format(props.modelValue)
    } catch (error) {
      console.error('Date formatting error:', error)
      return props.modelValue.toLocaleDateString()
    }
  })

  const toggleDropdown = () => {
    if (props.disabled || props.readonly) return
    isOpen.value = !isOpen.value
  }

  const closeDropdown = () => {
    isOpen.value = false
  }

  const handleDateChange = (date: Date | null) => {
    if (date === null) {
      emit('update:modelValue', null)
      emit('change', null)
    } else {
      emit('update:modelValue', date)
      emit('change', date)
    }
    closeDropdown()
  }

  const handleClear = (e: MouseEvent) => {
    e.stopPropagation()
    emit('update:modelValue', null)
    emit('change', null)
    emit('clear')
  }

  const handleFocus = (e: FocusEvent) => {
    emit('focus', e)
  }

  const handleBlur = (e: FocusEvent) => {
    emit('blur', e)
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (
      isOpen.value &&
      inputRef.value &&
      dropdownRef.value &&
      !inputRef.value.contains(e.target as Node) &&
      !dropdownRef.value.contains(e.target as Node)
    ) {
      closeDropdown()
    }
  }

  onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('mousedown', handleClickOutside)
  })

  watch(
    () => props.modelValue,
    (newValue) => {
      if (!newValue) {
        closeDropdown()
      }
    },
  )

  return {
    isOpen,
    inputRef,
    dropdownRef,
    formattedValue,
    toggleDropdown,
    closeDropdown,
    handleDateChange,
    handleClear,
    handleFocus,
    handleBlur,
  }
}
