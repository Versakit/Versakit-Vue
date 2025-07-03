import { computed, ref, watch } from 'vue'
import type { SetupContext } from 'vue'
import type { CalendarProps, ICalendarEmits } from '../type'

export const useCalendar = (
  props: CalendarProps,
  emit: SetupContext<ICalendarEmits>['emit'],
) => {
  const currentDate = ref(props.modelValue || new Date())
  const currentMonth = ref(currentDate.value.getMonth())
  const currentYear = ref(currentDate.value.getFullYear())

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

      const isSelected =
        props.modelValue &&
        props.modelValue.getDate() === i &&
        props.modelValue.getMonth() === month &&
        props.modelValue.getFullYear() === year

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
        isDisabled,
      })
    }

    // 添加下个月的日期
    const nextMonthDays = 42 - days.length // 总是显示6行
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        day: i,
        isCurrentMonth: false,
        isToday: false,
        isSelected: false,
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

    currentDate.value = date
    emit('update:modelValue', date)
    emit('change', date)
  }

  watch(
    () => props.modelValue,
    (newValue) => {
      if (newValue) {
        currentDate.value = newValue
        currentMonth.value = newValue.getMonth()
        currentYear.value = newValue.getFullYear()
      }
    },
  )

  return {
    currentDate,
    currentMonth,
    currentYear,
    weekdays,
    daysInMonth,
    monthName,
    prevMonth,
    nextMonth,
    selectDate,
  }
}
