<template>
  <div :class="vkCalendarClass.root" role="grid" aria-label="日历">
    <slot
      name="header"
      :date="currentDate"
      :prev-month="prevMonth"
      :next-month="nextMonth"
      :today="today"
      :prev-year="prevYear"
      :next-year="nextYear"
    >
      <div :class="vkCalendarClass.header">
        <VKButton
          type="primary"
          size="sm"
          @click="prevMonth"
          aria-label="上个月"
        >
          上个月
        </VKButton>
        <span :class="vkCalendarClass.title">
          {{ currentYear }}年{{ currentMonth + 1 }}月
        </span>
        <VKButton
          type="primary"
          size="sm"
          @click="nextMonth"
          aria-label="下个月"
        >
          下个月
        </VKButton>
      </div>
    </slot>

    <div :class="vkCalendarClass.body">
      <div :class="vkCalendarClass.weeks" role="row">
        <span v-for="week in weeks" :key="week" role="columnheader">
          {{ week }}
        </span>
      </div>

      <div :class="vkCalendarClass.dates">
        <div
          v-for="cell in dates"
          :key="cell.date.toISOString()"
          :class="[
            `${vkCalendarClass.cell}`,
            `${vkCalendarClass.cell}-${cell.type}`,
            {
              'is-selected': isSelected(cell.date),
            },
          ]"
          role="gridcell"
          :aria-selected="isSelected(cell.date)"
          @click="handleDateClick(cell)"
        >
          <slot name="date-cell" :data="getCellData(cell)">
            {{ cell.text }}
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type {
  CalendarProps,
  CalendarEmits,
  DateCell,
  DateCellData,
  CalendarPtProps,
} from '../type/index'
import { VKButton } from '../../button/index'

defineOptions({ name: 'VerCalendar' })

const props = withDefaults(defineProps<CalendarProps>(), {
  modelValue: () => new Date(),
  readonly: false,
  unstyled: false,
})

const emit = defineEmits<CalendarEmits>()

// 星期
const weeks = ['日', '一', '二', '三', '四', '五', '六']

// 当前显示的年月
const currentDate = ref(new Date(props.modelValue))
const currentYear = computed(() => currentDate.value.getFullYear())
const currentMonth = computed(() => currentDate.value.getMonth())

// 生成日历数据
const dates = computed(() => {
  const ret: DateCell[] = []
  const firstDay = new Date(currentYear.value, currentMonth.value, 1)
  const firstDayWeek = firstDay.getDay()

  // 上月剩余日期
  const prevMonthDays = new Date(
    currentYear.value,
    currentMonth.value,
    0,
  ).getDate()
  for (let i = firstDayWeek - 1; i >= 0; i--) {
    const date = new Date(
      currentYear.value,
      currentMonth.value - 1,
      prevMonthDays - i,
    )
    ret.push({
      text: prevMonthDays - i,
      type: 'prev',
      date,
    })
  }

  // 本月日期
  const currentMonthDays = new Date(
    currentYear.value,
    currentMonth.value + 1,
    0,
  ).getDate()
  for (let i = 1; i <= currentMonthDays; i++) {
    const date = new Date(currentYear.value, currentMonth.value, i)
    ret.push({
      text: i,
      type: 'current',
      date,
    })
  }

  // 下月日期
  const nextMonthDays = 42 - ret.length
  for (let i = 1; i <= nextMonthDays; i++) {
    const date = new Date(currentYear.value, currentMonth.value + 1, i)
    ret.push({
      text: i,
      type: 'next',
      date,
    })
  }

  return ret
})

// 切换月份
const prevMonth = () => {
  currentDate.value = new Date(currentYear.value, currentMonth.value - 1)
}

const nextMonth = () => {
  currentDate.value = new Date(currentYear.value, currentMonth.value + 1)
}
const today = () => {
  currentDate.value = new Date()
}
// 切换年份
const prevYear = () => {
  currentDate.value = new Date(currentYear.value - 1, currentMonth.value)
}

const nextYear = () => {
  currentDate.value = new Date(currentYear.value + 1, currentMonth.value)
}
defineExpose({
  prevYear,
  nextYear,
  prevMonth,
  nextMonth,
  today,
})
// 日期点击
const handleDateClick = (cell: DateCell) => {
  if (props.readonly) return
  emit('update:modelValue', cell.date)
  emit('change', cell.date)
}

// 判断日期是否选中
const isSelected = (date: Date) => {
  return date.toDateString() === props.modelValue.toDateString()
}

// 格式化日期为 YYYY-MM-DD
const formatDate = (date: Date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// 获取单元格数据
const getCellData = (cell: DateCell): DateCellData => {
  return {
    type: `${cell.type}-month` as 'prev-month' | 'current-month' | 'next-month',
    isSelected: isSelected(cell.date),
    day: formatDate(cell.date),
    date: cell.date,
  }
}

// 组件无头化处理
const vkCalendarClass = computed(() => {
  if (props.unstyled) {
    return {
      root: getPtClass('root'),
      header: getPtClass('header'),
      title: getPtClass('title'),
      body: getPtClass('body'),
      weeks: getPtClass('weeks'),
      dates: getPtClass('dates'),
      cell: getPtClass('cell'),
    }
  }

  return {
    root: 'vk-calendar',
    header: 'vk-calendar-header',
    title: 'vk-calendar-title',
    body: 'vk-calendar-body',
    weeks: 'vk-calendar-weeks',
    dates: 'vk-calendar-dates',
    cell: 'vk-calendar-cell',
  }
})

const getPtClass = (key: keyof CalendarPtProps) => {
  const ptValue = props.pt?.[key]
  if (!ptValue) return ''
  return ptValue
}
</script>

<style>
@import '../style/index.css';
</style>
