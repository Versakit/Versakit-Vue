import { computed, ref, watch } from 'vue'
import type { SetupContext } from 'vue'
import type { RangeCalendarProps, IRangeCalendarEmits } from '../type'

export const useRangeCalendar = (
  props: RangeCalendarProps,
  emit: SetupContext<IRangeCalendarEmits>['emit'],
) => {
  const startDate = ref<Date | null>(props.modelValue?.[0] || null)
  const endDate = ref<Date | null>(props.modelValue?.[1] || null)
  const currentMonth = ref((startDate.value || new Date()).getMonth())
  const currentYear = ref((startDate.value || new Date()).getFullYear())
  const selectionMode = ref<'start' | 'end'>('start')

  const weekdays = computed(() => {
    const locale = props.locale || 'default'
    const firstDay = props.firstDayOfWeek || 0
    const weekdays = []

    for (let i = 0; i < 7; i++) {
      const day = (i + firstDay) % 7
      weekdays.push(
        new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(
          new Date(2021, 0, day + 3), // 2021-01-03 is a Sunday
        ),
      )
    }

    return weekdays
  })

  const daysInMonth = computed(() => {
    const year = currentYear.value
    const month = currentMonth.value
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const firstDayOfWeek = props.firstDayOfWeek || 0
    const days = []

    // 添加上个月的日期
    const prevMonthDays = new Date(year, month, 0).getDate()
    const prevMonthOffset = (firstDay - firstDayOfWeek + 7) % 7

    for (let i = prevMonthDays - prevMonthOffset + 1; i <= prevMonthDays; i++) {
      days.push({
        date: new Date(year, month - 1, i),
        day: i,
        isCurrentMonth: false,
        isToday: false,
        isSelected: false,
        isRangeStart: false,
        isRangeEnd: false,
        isInRange: false,
        isDisabled: false,
      })
    }

    // 添加当前月的日期
    const today = new Date()
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i)
      const isToday =
        today.getDate() === i &&
        today.getMonth() === month &&
        today.getFullYear() === year

      const isRangeStart =
        startDate.value &&
        date.getDate() === startDate.value.getDate() &&
        date.getMonth() === startDate.value.getMonth() &&
        date.getFullYear() === startDate.value.getFullYear()

      const isRangeEnd =
        endDate.value &&
        date.getDate() === endDate.value.getDate() &&
        date.getMonth() === endDate.value.getMonth() &&
        date.getFullYear() === endDate.value.getFullYear()

      const isInRange =
        startDate.value &&
        endDate.value &&
        date > startDate.value &&
        date < endDate.value

      const isSelected = isRangeStart || isRangeEnd

      const isDisabled =
        props.disabled ||
        (props.min && date < props.min) ||
        (props.max && date > props.max)

      days.push({
        date,
        day: i,
        isCurrentMonth: true,
        isToday,
        isSelected,
        isRangeStart,
        isRangeEnd,
        isInRange,
        isDisabled,
      })
    }

    // 添加下个月的日期
    const nextMonthDays = 42 - days.length // 总是显示6行
    for (let i = 1; i <= nextMonthDays; i++) {
      const date = new Date(year, month + 1, i)

      const isRangeStart =
        startDate.value &&
        date.getDate() === startDate.value.getDate() &&
        date.getMonth() === startDate.value.getMonth() &&
        date.getFullYear() === startDate.value.getFullYear()

      const isRangeEnd =
        endDate.value &&
        date.getDate() === endDate.value.getDate() &&
        date.getMonth() === endDate.value.getMonth() &&
        date.getFullYear() === endDate.value.getFullYear()

      const isInRange =
        startDate.value &&
        endDate.value &&
        date > startDate.value &&
        date < endDate.value

      const isSelected = isRangeStart || isRangeEnd

      days.push({
        date,
        day: i,
        isCurrentMonth: false,
        isToday: false,
        isSelected,
        isRangeStart,
        isRangeEnd,
        isInRange,
        isDisabled: false,
      })
    }

    return days
  })

  const monthName = computed(() => {
    const locale = props.locale || 'default'
    return new Intl.DateTimeFormat(locale, { month: 'long' }).format(
      new Date(currentYear.value, currentMonth.value),
    )
  })

  const prevMonth = () => {
    if (currentMonth.value === 0) {
      currentMonth.value = 11
      currentYear.value--
    } else {
      currentMonth.value--
    }
  }

  const nextMonth = () => {
    if (currentMonth.value === 11) {
      currentMonth.value = 0
      currentYear.value++
    } else {
      currentMonth.value++
    }
  }

  const selectDate = (date: Date) => {
    if (props.disabled || props.readonly) return
    if (props.min && date < props.min) return
    if (props.max && date > props.max) return

    if (selectionMode.value === 'start') {
      startDate.value = date
      endDate.value = null
      selectionMode.value = 'end'
    } else {
      // 如果选择的结束日期早于开始日期，则交换
      if (startDate.value && date < startDate.value) {
        endDate.value = startDate.value
        startDate.value = date
      } else {
        endDate.value = date
      }
      selectionMode.value = 'start'
    }

    emit('update:modelValue', [startDate.value, endDate.value])
    emit('change', [startDate.value, endDate.value])
  }

  const resetSelection = () => {
    startDate.value = null
    endDate.value = null
    selectionMode.value = 'start'
    emit('update:modelValue', [null, null])
    emit('change', [null, null])
  }

  watch(
    () => props.modelValue,
    (newValue) => {
      if (newValue) {
        startDate.value = newValue[0]
        endDate.value = newValue[1]

        if (startDate.value) {
          currentMonth.value = startDate.value.getMonth()
          currentYear.value = startDate.value.getFullYear()
        }

        selectionMode.value = endDate.value ? 'start' : 'end'
      }
    },
  )

  return {
    startDate,
    endDate,
    currentMonth,
    currentYear,
    selectionMode,
    weekdays,
    daysInMonth,
    monthName,
    prevMonth,
    nextMonth,
    selectDate,
    resetSelection,
  }
}
