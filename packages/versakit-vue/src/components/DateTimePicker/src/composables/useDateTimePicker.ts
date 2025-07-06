import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import type { SetupContext } from 'vue'
import type { DateTimePickerProps, IDateTimePickerEmits } from '../type'

export const useDateTimePicker = (
  props: DateTimePickerProps,
  emit: SetupContext<IDateTimePickerEmits>['emit'],
) => {
  const isOpen = ref(false)
  const activeTab = ref<'date' | 'time'>('date')
  const inputRef = ref<HTMLInputElement | null>(null)
  const dropdownRef = ref<HTMLDivElement | null>(null)

  // 当前日期时间
  const currentDateTime = ref<Date>(props.modelValue || new Date())

  // 格式化显示日期时间
  const formattedValue = computed(() => {
    if (!props.modelValue) return ''

    try {
      const locale = props.locale || 'default'
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: '2-digit',
      }

      if (props.showSeconds) {
        options.second = '2-digit'
      }

      if (props.timeFormat === '12h') {
        options.hour12 = true
      } else {
        options.hour12 = false
      }

      return new Intl.DateTimeFormat(locale, options).format(props.modelValue)
    } catch (error) {
      console.error('DateTime formatting error:', error)
      return props.modelValue.toLocaleString()
    }
  })

  const toggleDropdown = () => {
    if (props.disabled || props.readonly) return
    isOpen.value = !isOpen.value

    if (isOpen.value) {
      // 打开时更新当前值
      currentDateTime.value = props.modelValue || new Date()
    }
  }

  const closeDropdown = () => {
    isOpen.value = false
  }

  const switchTab = (tab: 'date' | 'time') => {
    activeTab.value = tab
  }

  const handleDateChange = (date: Date | null) => {
    if (!date) return

    const newDate = new Date(currentDateTime.value)
    newDate.setFullYear(date.getFullYear())
    newDate.setMonth(date.getMonth())
    newDate.setDate(date.getDate())

    currentDateTime.value = newDate
    emit('update:modelValue', newDate)
    emit('change', newDate)

    // 自动切换到时间选择
    switchTab('time')
  }

  const handleTimeChange = (time: string | Date | null) => {
    if (!time) return

    const newDate = new Date(currentDateTime.value)

    if (time instanceof Date) {
      newDate.setHours(time.getHours())
      newDate.setMinutes(time.getMinutes())
      newDate.setSeconds(time.getSeconds())
    } else if (typeof time === 'string') {
      // 解析时间字符串 HH:MM:SS
      const parts = time.split(':')
      if (parts.length >= 2) {
        newDate.setHours(parseInt(parts[0]) || 0)
        newDate.setMinutes(parseInt(parts[1]) || 0)
        if (parts.length >= 3) {
          newDate.setSeconds(parseInt(parts[2]) || 0)
        }
      }
    }

    currentDateTime.value = newDate
    emit('update:modelValue', newDate)
    emit('change', newDate)

    // 完成时间选择后关闭下拉框
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
      } else {
        currentDateTime.value = newValue
      }
    },
  )

  return {
    isOpen,
    activeTab,
    inputRef,
    dropdownRef,
    currentDateTime,
    formattedValue,
    toggleDropdown,
    closeDropdown,
    switchTab,
    handleDateChange,
    handleTimeChange,
    handleClear,
    handleFocus,
    handleBlur,
  }
}
