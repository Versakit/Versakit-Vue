<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue'
import {
  calendar,
  calendarHeader,
  calendarTitle,
  calendarNavigation,
  calendarNavigationButton,
  calendarWeekDays,
  calendarWeekDay,
  calendarDaysGrid,
  calendarDay,
} from './index.variants'
import type { CalendarProps, CalendarEmits } from './type'

const props = withDefaults(defineProps<CalendarProps>(), {
  modelValue: undefined,
  minDate: undefined,
  maxDate: undefined,
  disabled: false,
  readonly: false,
  initialView: undefined,
  showAdjacentDays: true,
  weekStart: 0,
  dayClass: undefined,
  dayStyle: undefined,
  disabledDate: undefined,
  highlightDate: undefined,
  unstyled: false,
})

const emit = defineEmits<CalendarEmits>()

// 当前显示的年和月
const currentMonth = ref(new Date().getMonth())
const currentYear = ref(new Date().getFullYear())

// 选中的日期
const selectedDate = ref<Date | undefined>(props.modelValue)

// 初始化当前视图
onMounted(() => {
  if (props.initialView) {
    currentMonth.value = props.initialView.getMonth()
    currentYear.value = props.initialView.getFullYear()
  } else if (props.modelValue) {
    currentMonth.value = props.modelValue.getMonth()
    currentYear.value = props.modelValue.getFullYear()
  }
})

// 监听modelValue变化
watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal) {
      selectedDate.value = new Date(newVal)
    } else {
      selectedDate.value = undefined
    }
  },
)

// 计算当前月份的天数
const daysInMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
})

// 计算当前月份的第一天是星期几
const firstDayOfMonth = computed(() => {
  const firstDay = new Date(currentYear.value, currentMonth.value, 1).getDay()
  // 调整为指定的星期起始日
  return (firstDay - props.weekStart + 7) % 7
})

// 计算日历网格
const calendarDays = computed(() => {
  const days = []
  const totalDays = daysInMonth.value
  const firstDay = firstDayOfMonth.value

  // 添加上个月的日期
  if (props.showAdjacentDays && firstDay > 0) {
    const prevMonthDays = new Date(
      currentYear.value,
      currentMonth.value,
      0,
    ).getDate()
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = prevMonthDays - i
      const date = new Date(currentYear.value, currentMonth.value - 1, day)
      days.push({
        date,
        day,
        type: 'adjacent' as const,
      })
    }
  }

  // 添加当前月的日期
  for (let i = 1; i <= totalDays; i++) {
    const date = new Date(currentYear.value, currentMonth.value, i)
    const isToday = isDateToday(date)
    const isSelected = isDateSelected(date)

    days.push({
      date,
      day: i,
      type: isSelected
        ? ('selected' as const)
        : isToday
          ? ('today' as const)
          : ('default' as const),
    })
  }

  // 添加下个月的日期
  if (props.showAdjacentDays) {
    const remainingDays = 7 - (days.length % 7 || 7)
    if (remainingDays < 7) {
      for (let i = 1; i <= remainingDays; i++) {
        const date = new Date(currentYear.value, currentMonth.value + 1, i)
        days.push({
          date,
          day: i,
          type: 'adjacent' as const,
        })
      }
    }
  }

  return days
})

// 计算星期名称
const weekDays = computed(() => {
  const days = ['日', '一', '二', '三', '四', '五', '六']
  const result = []

  // 根据weekStart调整星期顺序
  for (let i = 0; i < 7; i++) {
    result.push(days[(i + props.weekStart) % 7])
  }

  return result
})

// 检查日期是否为今天
const isDateToday = (date: Date) => {
  const today = new Date()
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  )
}

// 检查日期是否被选中
const isDateSelected = (date: Date) => {
  if (!selectedDate.value) return false
  return (
    date.getDate() === selectedDate.value.getDate() &&
    date.getMonth() === selectedDate.value.getMonth() &&
    date.getFullYear() === selectedDate.value.getFullYear()
  )
}

// 检查日期是否被禁用
const isDateDisabled = (date: Date) => {
  if (props.disabled) return true
  if (props.disabledDate && props.disabledDate(date)) return true

  if (props.minDate) {
    const min = new Date(props.minDate)
    min.setHours(0, 0, 0, 0)
    if (date < min) return true
  }

  if (props.maxDate) {
    const max = new Date(props.maxDate)
    max.setHours(23, 59, 59, 999)
    if (date > max) return true
  }

  return false
}

// 检查日期是否被高亮
const isDateHighlighted = (date: Date) => {
  return props.highlightDate ? props.highlightDate(date) : false
}

// 获取自定义日期类名
const getDayClass = (date: Date) => {
  if (typeof props.dayClass === 'function') {
    return props.dayClass(date)
  }
  return props.dayClass || ''
}

// 获取自定义日期样式
const getDayStyle = (date: Date) => {
  if (typeof props.dayStyle === 'function') {
    return props.dayStyle(date)
  }
  return props.dayStyle || {}
}

// 前一个月
const prevMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
  emit('month-change', currentYear.value, currentMonth.value)
}

// 下一个月
const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
  emit('month-change', currentYear.value, currentMonth.value)
}

// 选择日期
const selectDate = (date: Date) => {
  if (props.disabled || props.readonly || isDateDisabled(date)) return

  selectedDate.value = new Date(date)
  emit('update:modelValue', new Date(date))
  emit('change', new Date(date))
}

// 格式化月份名称
const formattedMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value).toLocaleString(
    'zh-CN',
    {
      month: 'long',
    },
  )
})

// 计算样式
const classes = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return {
    root: calendar(),
    header: calendarHeader(),
    title: calendarTitle(),
    navigation: calendarNavigation(),
    prevButton: calendarNavigationButton(),
    nextButton: calendarNavigationButton(),
    weekDays: calendarWeekDays(),
    weekDay: calendarWeekDay(),
    daysGrid: calendarDaysGrid(),
  }
})
</script>

<template>
  <div :class="classes.root" v-bind="{ ...$attrs, ...props.pt?.root }">
    <!-- 日历头部 -->
    <div :class="classes.header" v-bind="props.pt?.header">
      <div :class="classes.title" v-bind="props.pt?.title">
        {{ currentYear }}年 {{ formattedMonth }}
      </div>
      <div :class="classes.navigation" v-bind="props.pt?.navigation">
        <button
          type="button"
          :class="classes.prevButton"
          @click="prevMonth"
          :disabled="disabled"
          v-bind="props.pt?.prevButton"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          type="button"
          :class="classes.nextButton"
          @click="nextMonth"
          :disabled="disabled"
          v-bind="props.pt?.nextButton"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>

    <!-- 星期标题行 -->
    <div :class="classes.weekDays" v-bind="props.pt?.weekDays">
      <div
        v-for="(day, index) in weekDays"
        :key="index"
        :class="classes.weekDay"
        v-bind="props.pt?.weekDay"
      >
        {{ day }}
      </div>
    </div>

    <!-- 日期网格 -->
    <div :class="classes.daysGrid" v-bind="props.pt?.daysGrid">
      <button
        v-for="(day, index) in calendarDays"
        :key="index"
        type="button"
        :class="[
          calendarDay({
            type: day.type,
            disabled: isDateDisabled(day.date),
            highlighted: isDateHighlighted(day.date),
          }),
          getDayClass(day.date),
        ]"
        :style="getDayStyle(day.date)"
        @click="selectDate(day.date)"
        :disabled="isDateDisabled(day.date)"
        v-bind="props.pt?.day"
      >
        {{ day.day }}
      </button>
    </div>
  </div>
</template>
