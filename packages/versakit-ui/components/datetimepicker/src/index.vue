<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { DatetimepickerProps } from '../type'
import { getPtClasses } from '@versakit/shared'

defineOptions({ name: 'VKDateTimePicker' })

const props = withDefaults(defineProps<DatetimepickerProps>(), {
  modelValue: null,
  placeholder: 'Select date & time',
  disabled: false,
  format: 'YYYY-MM-DD HH:mm',
  clearable: true,
  hideSeconds: true,
})

const emit = defineEmits(['update:modelValue'])

const showPicker = ref(false)
const selectedDate = ref<Date | null>(null)
const currentMonth = ref(new Date().getMonth())
const currentYear = ref(new Date().getFullYear())
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
const activeTab = ref('date') // 'date' or 'time'

// 生成0-23小时选项
const hourOptions = computed(() => {
  return Array.from({ length: 24 }, (_, i) => i)
})

// 生成0-59分钟选项
const minuteOptions = computed(() => {
  return Array.from({ length: 60 }, (_, i) => i)
})

// 生成0-59秒选项
const secondOptions = computed(() => {
  return Array.from({ length: 60 }, (_, i) => i)
})

const daysInMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
})

const firstDayOfMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value, 1).getDay()
})

const monthName = computed(() => {
  return new Date(currentYear.value, currentMonth.value).toLocaleString(
    'default',
    { month: 'long' },
  )
})

const days = computed(() => {
  const daysArray = []
  const prevMonthDays = new Date(
    currentYear.value,
    currentMonth.value,
    0,
  ).getDate()

  // Previous month days
  for (let i = 0; i < firstDayOfMonth.value; i++) {
    daysArray.push({
      day: prevMonthDays - firstDayOfMonth.value + i + 1,
      currentMonth: false,
    })
  }

  // Current month days
  for (let i = 1; i <= daysInMonth.value; i++) {
    daysArray.push({
      day: i,
      currentMonth: true,
    })
  }

  // Add days to complete calendar grid (6 rows x 7 columns)
  const totalCells = 42
  const nextMonthDays = totalCells - daysArray.length
  for (let i = 1; i <= nextMonthDays; i++) {
    daysArray.push({
      day: i,
      currentMonth: false,
    })
  }

  return daysArray
})

const formattedDateTime = computed(() => {
  if (!selectedDate.value) return ''

  const date = selectedDate.value
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hour = String(hours.value).padStart(2, '0')
  const minute = String(minutes.value).padStart(2, '0')
  const second = String(seconds.value).padStart(2, '0')

  if (props.hideSeconds) {
    return `${year}-${month}-${day} ${hour}:${minute}`
  } else {
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
  }
})

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      const date = val instanceof Date ? val : new Date(val)
      selectedDate.value = date
      hours.value = date.getHours()
      minutes.value = date.getMinutes()
      seconds.value = date.getSeconds()
    } else {
      selectedDate.value = null
      hours.value = 0
      minutes.value = 0
      seconds.value = 0
    }
  },
  { immediate: true },
)

const updateDateTime = () => {
  if (selectedDate.value) {
    const newDate = new Date(selectedDate.value)
    newDate.setHours(hours.value)
    newDate.setMinutes(minutes.value)
    newDate.setSeconds(seconds.value)
    selectedDate.value = newDate
    emit('update:modelValue', newDate)
  }
}

const selectDate = (day: number, isCurrentMonth: boolean) => {
  if (!isCurrentMonth) {
    if (day > 15) {
      // Previous month
      prevMonth()
    } else {
      // Next month
      nextMonth()
    }
    setTimeout(() => selectDate(day, true), 0)
    return
  }

  const newDate = selectedDate.value ? new Date(selectedDate.value) : new Date()
  newDate.setFullYear(currentYear.value)
  newDate.setMonth(currentMonth.value)
  newDate.setDate(day)

  // Preserve time if already set
  if (selectedDate.value) {
    newDate.setHours(hours.value)
    newDate.setMinutes(minutes.value)
    newDate.setSeconds(seconds.value)
  } else {
    hours.value = newDate.getHours()
    minutes.value = newDate.getMinutes()
    seconds.value = newDate.getSeconds()
  }

  selectedDate.value = newDate
  emit('update:modelValue', newDate)

  // Switch to time tab after selecting date
  activeTab.value = 'time'
}

const setTime = (type: 'hour' | 'minute' | 'second', value: number) => {
  if (type === 'hour') hours.value = value
  if (type === 'minute') minutes.value = value
  if (type === 'second') seconds.value = value

  if (selectedDate.value) {
    updateDateTime()
  } else {
    // If no date selected, use today's date
    const today = new Date()
    today.setHours(hours.value)
    today.setMinutes(minutes.value)
    today.setSeconds(seconds.value)
    selectedDate.value = today
    currentMonth.value = today.getMonth()
    currentYear.value = today.getFullYear()
    emit('update:modelValue', today)
  }
}

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

const today = () => {
  const now = new Date()
  selectedDate.value = now
  currentMonth.value = now.getMonth()
  currentYear.value = now.getFullYear()
  hours.value = now.getHours()
  minutes.value = now.getMinutes()
  seconds.value = now.getSeconds()
  emit('update:modelValue', now)
}

const clearValue = () => {
  selectedDate.value = null
  emit('update:modelValue', null)
  showPicker.value = false
}

const confirm = () => {
  updateDateTime()
  showPicker.value = false
}

// 无头化处理
const ptClasses = computed(() => {
  if (props.unstyled) {
    return {
      root: getPtClasses(props.pt, 'root'),
      timeInput: getPtClasses(props.pt, 'timeInput'),
      calendarIcon: getPtClasses(props.pt, 'calendarIcon'),
      clearIcon: getPtClasses(props.pt, 'clearIcon'),
      dateTimePanel: getPtClasses(props.pt, 'dateTimePanel'),
      timePanel: getPtClasses(props.pt, 'timePanel'),
      tabs: getPtClasses(props.pt, 'tabs'),
      tab: getPtClasses(props.pt, 'tab'),
      dataPanel: getPtClasses(props.pt, 'dataPanel'),
      calendarHeader: getPtClasses(props.pt, 'calendarHeader'),
      monthYear: getPtClasses(props.pt, 'monthYear'),
      weekdays: getPtClasses(props.pt, 'weekdays'),
      days: getPtClasses(props.pt, 'days'),
      day: getPtClasses(props.pt, 'day'),
      currentMonth: getPtClasses(props.pt, 'currentMonth'),
      calendarFooter: getPtClasses(props.pt, 'calendarFooter'),
      timeColumns: getPtClasses(props.pt, 'timeColumns'),
      timeColumn: getPtClasses(props.pt, 'timeColumn'),
      hours: getPtClasses(props.pt, 'hours'),
      minutes: getPtClasses(props.pt, 'minutes'),
      seconds: getPtClasses(props.pt, 'seconds'),
      timeColumnHeader: getPtClasses(props.pt, 'timeColumnHeader'),
      timeColumnContent: getPtClasses(props.pt, 'timeColumnContent'),
      timeItem: getPtClasses(props.pt, 'timeItem'),
      panelFooter: getPtClasses(props.pt, 'panelFooter'),
      cancelBtn: getPtClasses(props.pt, 'cancelBtn'),
      confirmBtn: getPtClasses(props.pt, 'confirmBtn'),
    }
  }

  return {
    root: 'date-time-picker',
    timeInput: 'date-time-input',
    calendarIcon: 'calendar-icon',
    clearIcon: 'clear-icon',
    dateTimePanel: 'date-time-panel',
    tabs: 'panel-tabs',
    tab: 'tab',
    dataPanel: 'date-panel',
    calendarHeader: 'calendar-header',
    monthYear: 'month-year',
    weekdays: 'weekdays',
    days: 'days',
    day: 'day',
    currentMonth: 'current-month',
    calendarFooter: 'calendar-footer',
    timePanel: 'time-panel',
    timeColumns: 'time-columns',
    timeColumn: 'time-column',
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds',
    timeColumnHeader: 'time-column-header',
    timeColumnContent: 'time-column-content',
    timeItem: 'time-item',
    panelFooter: 'panel-footer',
    cancelBtn: 'cancel-btn',
    confirmBtn: 'confirm-btn',
  }
})
</script>

<template>
  <div :class="ptClasses.root">
    <div
      @click="showPicker = !showPicker"
      :class="[ptClasses.timeInput, { disabled: disabled }]"
    >
      <input
        type="text"
        :value="formattedDateTime"
        :placeholder="placeholder"
        readonly
        :disabled="disabled"
      />
      <span :class="ptClasses.calendarIcon">🗓️</span>
      <span
        v-if="clearable && formattedDateTime && !disabled"
        :class="ptClasses.clearIcon"
        @click.stop="clearValue"
      >
        ✕
      </span>
    </div>

    <div :class="ptClasses.dateTimePanel" v-if="showPicker && !disabled">
      <div :class="ptClasses.tabs">
        <div
          :class="[{ active: activeTab === 'date' }, ptClasses.tab]"
          @click="activeTab = 'date'"
        >
          日期
        </div>
        <div
          :class="[ptClasses.tab, { active: activeTab === 'time' }]"
          @click="activeTab = 'time'"
        >
          时间
        </div>
      </div>

      <!-- 日期面板 -->
      <div :class="ptClasses.dataPanel" v-show="activeTab === 'date'">
        <div :class="ptClasses.calendarHeader">
          <button @click="prevMonth">&lt;</button>
          <div :class="ptClasses.monthYear">
            {{ monthName }} {{ currentYear }}
          </div>
          <button @click="nextMonth">&gt;</button>
        </div>

        <div :class="ptClasses.weekdays">
          <div
            v-for="day in ['日', '一', '二', '三', '四', '五', '六']"
            :key="day"
          >
            {{ day }}
          </div>
        </div>

        <div :class="ptClasses.days">
          <div
            v-for="(day, index) in days"
            :key="index"
            :class="[
              ptClasses.day,
              {
                [ptClasses.currentMonth]: day.currentMonth,
                selected:
                  day.currentMonth &&
                  selectedDate &&
                  selectedDate.getDate() === day.day &&
                  selectedDate.getMonth() === currentMonth &&
                  selectedDate.getFullYear() === currentYear,
              },
            ]"
            @click="selectDate(day.day, day.currentMonth)"
          >
            {{ day.day }}
          </div>
        </div>

        <div :class="ptClasses.calendarFooter">
          <button @click="today">今天</button>
        </div>
      </div>

      <!-- 时间面板 -->
      <div :class="ptClasses.timePanel" v-show="activeTab === 'time'">
        <div :class="ptClasses.timeColumns">
          <div :class="[ptClasses.timeColumn, ptClasses.hours]">
            <div :class="ptClasses.timeColumnHeader">时</div>
            <div :class="ptClasses.timeColumnContent">
              <div
                v-for="hour in hourOptions"
                :key="hour"
                :class="[ptClasses.timeItem, { selected: hours === hour }]"
                @click="setTime('hour', hour)"
              >
                {{ String(hour).padStart(2, '0') }}
              </div>
            </div>
          </div>

          <div :class="[ptClasses.timeColumn, ptClasses.minutes]">
            <div :class="ptClasses.timeColumnHeader">分</div>
            <div :class="ptClasses.timeColumnContent">
              <div
                v-for="minute in minuteOptions"
                :key="minute"
                :class="[ptClasses.timeItem, { selected: minutes === minute }]"
                @click="setTime('minute', minute)"
              >
                {{ String(minute).padStart(2, '0') }}
              </div>
            </div>
          </div>

          <div
            :class="[ptClasses.timeColumn, ptClasses.seconds]"
            v-if="!hideSeconds"
          >
            <div :class="ptClasses.timeColumnHeader">秒</div>
            <div :class="ptClasses.timeColumnContent">
              <div
                v-for="second in secondOptions"
                :key="second"
                :class="[ptClasses.timeItem, { selected: seconds === second }]"
                @click="setTime('second', second)"
              >
                {{ String(second).padStart(2, '0') }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div :class="ptClasses.panelFooter">
        <button :class="ptClasses.cancelBtn" @click="showPicker = false">
          取消
        </button>
        <button :class="ptClasses.confirmBtn" @click="confirm">确认</button>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import url('../style/index.css');
</style>
