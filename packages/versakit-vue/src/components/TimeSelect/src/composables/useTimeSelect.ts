import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import type { SetupContext } from 'vue'
import type { TimeSelectProps, ITimeSelectEmits } from '../type'

export const useTimeSelect = (
  props: TimeSelectProps,
  emit: SetupContext<ITimeSelectEmits>['emit'],
) => {
  const isOpen = ref(false)
  const inputRef = ref<HTMLInputElement | null>(null)
  const dropdownRef = ref<HTMLDivElement | null>(null)

  // 生成时间选项列表
  const timeOptions = computed(() => {
    // 如果提供了自定义选项，直接使用
    if (props.options && props.options.length > 0) {
      return props.options
    }

    // 否则根据开始时间、结束时间和步长生成
    const options: string[] = []
    const start = props.start || '00:00'
    const end = props.end || '23:59'
    const step = props.step || 30 // 默认30分钟间隔

    // 解析开始和结束时间
    const [startHour, startMinute] = start.split(':').map(Number)
    const [endHour, endMinute] = end.split(':').map(Number)

    // 计算总分钟数
    const startTotalMinutes = startHour * 60 + startMinute
    const endTotalMinutes = endHour * 60 + endMinute

    // 生成时间选项
    for (
      let minutes = startTotalMinutes;
      minutes <= endTotalMinutes;
      minutes += step
    ) {
      const hour = Math.floor(minutes / 60)
      const minute = minutes % 60

      // 格式化时间
      if (props.format === '12h') {
        const period = hour >= 12 ? 'PM' : 'AM'
        const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
        options.push(
          `${hour12.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${period}`,
        )
      } else {
        options.push(
          `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`,
        )
      }
    }

    return options
  })

  const toggleDropdown = () => {
    if (props.disabled || props.readonly) return
    isOpen.value = !isOpen.value
  }

  const closeDropdown = () => {
    isOpen.value = false
  }

  const selectOption = (option: string) => {
    emit('update:modelValue', option)
    emit('change', option)
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
    timeOptions,
    toggleDropdown,
    selectOption,
    handleClear,
    handleFocus,
    handleBlur,
  }
}
