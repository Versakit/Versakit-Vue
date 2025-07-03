import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import type { SetupContext } from 'vue'
import type { TimePickerProps, ITimePickerEmits } from '../type'

export const useTimePicker = (
  props: TimePickerProps,
  emit: SetupContext<ITimePickerEmits>['emit'],
) => {
  const isOpen = ref(false)
  const inputRef = ref<HTMLInputElement | null>(null)
  const dropdownRef = ref<HTMLDivElement | null>(null)

  const hourRef = ref<HTMLDivElement | null>(null)
  const minuteRef = ref<HTMLDivElement | null>(null)
  const secondRef = ref<HTMLDivElement | null>(null)
  const ampmRef = ref<HTMLDivElement | null>(null)

  // 解析当前时间值
  const currentTime = computed(() => {
    let hours = 0
    let minutes = 0
    let seconds = 0

    if (props.modelValue) {
      if (props.modelValue instanceof Date) {
        hours = props.modelValue.getHours()
        minutes = props.modelValue.getMinutes()
        seconds = props.modelValue.getSeconds()
      } else if (typeof props.modelValue === 'string') {
        const parts = props.modelValue.split(':')
        hours = parseInt(parts[0]) || 0
        minutes = parseInt(parts[1]) || 0
        seconds = parts[2] ? parseInt(parts[2]) : 0
      }
    }

    return { hours, minutes, seconds }
  })

  // 当前选择的时间
  const selectedHour = ref(currentTime.value.hours)
  const selectedMinute = ref(currentTime.value.minutes)
  const selectedSecond = ref(currentTime.value.seconds)
  const selectedAmPm = ref(currentTime.value.hours >= 12 ? 'pm' : 'am')

  // 生成小时列表
  const hourList = computed(() => {
    const list = []
    const step = props.hourStep || 1
    const is12h = props.format === '12h'

    const start = is12h ? 1 : 0
    const end = is12h ? 12 : 23

    for (let i = start; i <= end; i += step) {
      list.push(i)
    }

    return list
  })

  // 生成分钟列表
  const minuteList = computed(() => {
    const list = []
    const step = props.minuteStep || 1

    for (let i = 0; i <= 59; i += step) {
      list.push(i)
    }

    return list
  })

  // 生成秒钟列表
  const secondList = computed(() => {
    const list = []
    const step = props.secondStep || 1

    for (let i = 0; i <= 59; i += step) {
      list.push(i)
    }

    return list
  })

  // 格式化显示时间
  const formattedValue = computed(() => {
    if (!props.modelValue) return ''

    try {
      if (props.modelValue instanceof Date) {
        const options: Intl.DateTimeFormatOptions = {
          hour: 'numeric',
          minute: '2-digit',
        }

        if (props.showSeconds) {
          options.second = '2-digit'
        }

        if (props.format === '12h') {
          options.hour12 = true
        } else {
          options.hour12 = false
        }

        return new Intl.DateTimeFormat('default', options).format(
          props.modelValue,
        )
      } else {
        // 如果是字符串，直接返回
        return props.modelValue
      }
    } catch (error) {
      console.error('Time formatting error:', error)
      return props.modelValue instanceof Date
        ? props.modelValue.toLocaleTimeString()
        : props.modelValue
    }
  })

  const toggleDropdown = () => {
    if (props.disabled || props.readonly) return
    isOpen.value = !isOpen.value

    if (isOpen.value) {
      // 打开时更新选择的值
      selectedHour.value = currentTime.value.hours
      selectedMinute.value = currentTime.value.minutes
      selectedSecond.value = currentTime.value.seconds
      selectedAmPm.value = currentTime.value.hours >= 12 ? 'pm' : 'am'

      // 滚动到当前选择的位置
      setTimeout(() => {
        scrollToSelected()
      }, 50)
    }
  }

  const closeDropdown = () => {
    isOpen.value = false
  }

  const scrollToSelected = () => {
    const scrollToItem = (container: HTMLElement | null, index: number) => {
      if (!container) return
      const items = container.querySelectorAll('div')
      const item = items[index]
      if (item) {
        container.scrollTop =
          item.offsetTop - container.offsetHeight / 2 + item.offsetHeight / 2
      }
    }

    if (props.format === '12h') {
      const hour12 =
        selectedHour.value > 12
          ? selectedHour.value - 12
          : selectedHour.value === 0
            ? 12
            : selectedHour.value
      scrollToItem(hourRef.value, hourList.value.indexOf(hour12))
    } else {
      scrollToItem(hourRef.value, hourList.value.indexOf(selectedHour.value))
    }

    scrollToItem(
      minuteRef.value,
      minuteList.value.indexOf(selectedMinute.value),
    )

    if (props.showSeconds && secondRef.value) {
      scrollToItem(
        secondRef.value,
        secondList.value.indexOf(selectedSecond.value),
      )
    }

    if (props.format === '12h' && ampmRef.value) {
      scrollToItem(ampmRef.value, selectedAmPm.value === 'am' ? 0 : 1)
    }
  }

  const updateTimeValue = () => {
    let hours = selectedHour.value

    // 处理12小时制
    if (props.format === '12h') {
      if (selectedAmPm.value === 'pm' && hours < 12) {
        hours += 12
      } else if (selectedAmPm.value === 'am' && hours === 12) {
        hours = 0
      }
    }

    let timeValue: string | Date

    if (props.modelValue instanceof Date) {
      const date = new Date(props.modelValue)
      date.setHours(hours)
      date.setMinutes(selectedMinute.value)
      date.setSeconds(props.showSeconds ? selectedSecond.value : 0)
      timeValue = date
    } else {
      // 格式化为字符串 HH:MM:SS
      const hoursStr = hours.toString().padStart(2, '0')
      const minutesStr = selectedMinute.value.toString().padStart(2, '0')

      if (props.showSeconds) {
        const secondsStr = selectedSecond.value.toString().padStart(2, '0')
        timeValue = `${hoursStr}:${minutesStr}:${secondsStr}`
      } else {
        timeValue = `${hoursStr}:${minutesStr}`
      }
    }

    emit('update:modelValue', timeValue)
    emit('change', timeValue)
  }

  const selectHour = (hour: number) => {
    selectedHour.value = hour
    updateTimeValue()
  }

  const selectMinute = (minute: number) => {
    selectedMinute.value = minute
    updateTimeValue()
  }

  const selectSecond = (second: number) => {
    selectedSecond.value = second
    updateTimeValue()
  }

  const selectAmPm = (value: 'am' | 'pm') => {
    selectedAmPm.value = value
    updateTimeValue()
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
        // 更新选择的值
        selectedHour.value = currentTime.value.hours
        selectedMinute.value = currentTime.value.minutes
        selectedSecond.value = currentTime.value.seconds
        selectedAmPm.value = currentTime.value.hours >= 12 ? 'pm' : 'am'
      }
    },
  )

  return {
    isOpen,
    inputRef,
    dropdownRef,
    hourRef,
    minuteRef,
    secondRef,
    ampmRef,
    formattedValue,
    hourList,
    minuteList,
    secondList,
    selectedHour,
    selectedMinute,
    selectedSecond,
    selectedAmPm,
    toggleDropdown,
    closeDropdown,
    selectHour,
    selectMinute,
    selectSecond,
    selectAmPm,
    handleClear,
    handleFocus,
    handleBlur,
  }
}
