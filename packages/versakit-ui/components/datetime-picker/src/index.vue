<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { VKCalendar } from '../../calendar'
import { useClickOutside } from '@versakit/shared'
import {
  dateTimePicker,
  dateTimePickerInputContainer,
  dateTimePickerInput,
  dateTimePickerClearButton,
  dateTimePickerCalendarIcon,
  dateTimePickerPopover,
  dateTimePickerTimeContainer,
  dateTimePickerTimeHeader,
  dateTimePickerTimeControls,
  dateTimePickerTimeSelector,
  dateTimePickerTimeValue,
  dateTimePickerTimeButton,
} from './index.variants'
import type { DateTimePickerProps, DateTimePickerEmits } from './type'

const props = withDefaults(defineProps<DateTimePickerProps>(), {
  modelValue: undefined,
  placeholder: '请选择日期和时间',
  format: 'YYYY-MM-DD HH:mm:ss',
  clearable: true,
  size: 'md',
  status: 'default',
  inputClass: '',
  inputStyle: undefined,
  disabled: false,
  readonly: false,
  minDate: undefined,
  maxDate: undefined,
  initialView: undefined,
  showAdjacentDays: true,
  weekStart: 0,
  dayClass: undefined,
  dayStyle: undefined,
  disabledDate: undefined,
  highlightDate: undefined,
  use24Hours: true,
  minuteStep: 1,
  secondStep: 1,
  showSeconds: true,
  showTime: true,
  timePosition: 'bottom',
  unstyled: false,
})

const emit = defineEmits<DateTimePickerEmits>()

// 响应式状态
const isOpen = ref(false)
const inputValue = ref('')
const inputRef = ref<HTMLInputElement | null>(null)
const popoverRef = ref<HTMLDivElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)

// 当前选中的日期时间和各个部分
const selectedDateTime = ref<Date | null>(null)
const selectedHours = ref(0)
const selectedMinutes = ref(0)
const selectedSeconds = ref(0)
const selectedAmPm = ref<'AM' | 'PM'>('AM')

// 初始化值
const initDateTime = () => {
  if (props.modelValue) {
    let dateTime: Date
    if (typeof props.modelValue === 'string') {
      dateTime = new Date(props.modelValue)
    } else {
      dateTime = new Date(props.modelValue)
    }

    if (!isNaN(dateTime.getTime())) {
      selectedDateTime.value = dateTime
      selectedHours.value = dateTime.getHours()
      selectedMinutes.value = dateTime.getMinutes()
      selectedSeconds.value = dateTime.getSeconds()

      // 设置AM/PM
      if (!props.use24Hours) {
        selectedAmPm.value = selectedHours.value >= 12 ? 'PM' : 'AM'
        selectedHours.value = selectedHours.value % 12
        if (selectedHours.value === 0) selectedHours.value = 12
      }

      formatInputValue()
    } else {
      resetValues()
    }
  } else {
    resetValues()
  }
}

// 重置所有值
const resetValues = () => {
  selectedDateTime.value = null
  selectedHours.value = props.use24Hours ? 0 : 12
  selectedMinutes.value = 0
  selectedSeconds.value = 0
  selectedAmPm.value = 'AM'
  inputValue.value = ''
}

// 监听值变化
watch(
  () => props.modelValue,
  () => {
    initDateTime()
  },
  { immediate: true },
)

// 格式化日期时间为显示值
const formatInputValue = () => {
  if (!selectedDateTime.value) {
    inputValue.value = ''
    return
  }

  const date = selectedDateTime.value
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  let hours = date.getHours()
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  let timeStr = ''

  if (props.use24Hours) {
    const hoursStr = String(hours).padStart(2, '0')
    timeStr = props.showSeconds
      ? `${hoursStr}:${minutes}:${seconds}`
      : `${hoursStr}:${minutes}`
  } else {
    const period = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours || 12 // 0应显示为12
    const hoursStr = String(hours).padStart(2, '0')
    timeStr = props.showSeconds
      ? `${hoursStr}:${minutes}:${seconds} ${period}`
      : `${hoursStr}:${minutes} ${period}`
  }

  if (
    props.format === 'YYYY-MM-DD HH:mm:ss' ||
    props.format === 'YYYY-MM-DD HH:mm'
  ) {
    inputValue.value = `${year}-${month}-${day} ${timeStr}`
  } else if (
    props.format === 'YYYY/MM/DD HH:mm:ss' ||
    props.format === 'YYYY/MM/DD HH:mm'
  ) {
    inputValue.value = `${year}/${month}/${day} ${timeStr}`
  } else if (
    props.format === 'DD/MM/YYYY HH:mm:ss' ||
    props.format === 'DD/MM/YYYY HH:mm'
  ) {
    inputValue.value = `${day}/${month}/${year} ${timeStr}`
  } else if (
    props.format === 'MM/DD/YYYY HH:mm:ss' ||
    props.format === 'MM/DD/YYYY HH:mm'
  ) {
    inputValue.value = `${month}/${day}/${year} ${timeStr}`
  } else {
    // 默认格式
    inputValue.value = `${year}-${month}-${day} ${timeStr}`
  }
}

// 处理输入框点击
const handleInputClick = () => {
  if (props.disabled || props.readonly) return
  isOpen.value = true
}

// 处理输入框聚焦
const handleFocus = () => {
  emit('focus')
}

// 处理输入框失焦
const handleBlur = () => {
  emit('blur')
}

// 处理日期选择
const handleDateSelect = (date: Date) => {
  if (!selectedDateTime.value) {
    // 如果之前没有选择过日期，创建一个新的Date对象
    selectedDateTime.value = new Date(date)

    // 设置时间部分
    if (
      !props.use24Hours &&
      selectedAmPm.value === 'PM' &&
      selectedHours.value < 12
    ) {
      selectedDateTime.value.setHours(selectedHours.value + 12)
    } else if (
      !props.use24Hours &&
      selectedAmPm.value === 'AM' &&
      selectedHours.value === 12
    ) {
      selectedDateTime.value.setHours(0)
    } else {
      selectedDateTime.value.setHours(selectedHours.value)
    }

    selectedDateTime.value.setMinutes(selectedMinutes.value)
    selectedDateTime.value.setSeconds(selectedSeconds.value)
  } else {
    // 如果已经选择过日期，只更新日期部分，保留时间部分
    const hours = selectedDateTime.value.getHours()
    const minutes = selectedDateTime.value.getMinutes()
    const seconds = selectedDateTime.value.getSeconds()

    selectedDateTime.value = new Date(date)
    selectedDateTime.value.setHours(hours, minutes, seconds)
  }

  updateModelValue()
}

// 处理时间变化
const updateTime = () => {
  if (!selectedDateTime.value) {
    // 如果没有选择日期，使用当前日期
    selectedDateTime.value = new Date()
  }

  // 计算实际小时值
  let hours = selectedHours.value
  if (!props.use24Hours) {
    if (selectedAmPm.value === 'PM' && hours < 12) {
      hours += 12
    } else if (selectedAmPm.value === 'AM' && hours === 12) {
      hours = 0
    }
  }

  // 更新时间
  selectedDateTime.value.setHours(hours)
  selectedDateTime.value.setMinutes(selectedMinutes.value)
  selectedDateTime.value.setSeconds(selectedSeconds.value)

  updateModelValue()
}

// 更新modelValue
const updateModelValue = () => {
  if (selectedDateTime.value) {
    emit('update:modelValue', new Date(selectedDateTime.value))
    emit('change', new Date(selectedDateTime.value))
    formatInputValue()
  }
}

// 清除选择
const clearSelection = () => {
  resetValues()
  emit('update:modelValue', null)
  emit('change', null)
  emit('clear')
}

// 处理点击外部关闭
useClickOutside(containerRef, (event: MouseEvent) => {
  if (isOpen.value && !popoverRef.value?.contains(event.target as Node)) {
    isOpen.value = false
  }
})

// 小时递增
const incrementHours = () => {
  if (props.disabled || props.readonly) return

  if (props.use24Hours) {
    selectedHours.value = (selectedHours.value + 1) % 24
  } else {
    selectedHours.value = (selectedHours.value % 12) + 1
  }

  updateTime()
}

// 小时递减
const decrementHours = () => {
  if (props.disabled || props.readonly) return

  if (props.use24Hours) {
    selectedHours.value = (selectedHours.value - 1 + 24) % 24
  } else {
    selectedHours.value = (selectedHours.value - 1 + 12) % 12
    if (selectedHours.value === 0) selectedHours.value = 12
  }

  updateTime()
}

// 分钟递增
const incrementMinutes = () => {
  if (props.disabled || props.readonly) return

  selectedMinutes.value = (selectedMinutes.value + props.minuteStep) % 60
  updateTime()
}

// 分钟递减
const decrementMinutes = () => {
  if (props.disabled || props.readonly) return

  selectedMinutes.value = (selectedMinutes.value - props.minuteStep + 60) % 60
  updateTime()
}

// 秒递增
const incrementSeconds = () => {
  if (props.disabled || props.readonly) return

  selectedSeconds.value = (selectedSeconds.value + props.secondStep) % 60
  updateTime()
}

// 秒递减
const decrementSeconds = () => {
  if (props.disabled || props.readonly) return

  selectedSeconds.value = (selectedSeconds.value - props.secondStep + 60) % 60
  updateTime()
}

// 切换AM/PM
const toggleAmPm = () => {
  if (props.disabled || props.readonly) return

  selectedAmPm.value = selectedAmPm.value === 'AM' ? 'PM' : 'AM'
  updateTime()
}

// 格式化时间显示
const formattedHours = computed(() => {
  return props.use24Hours
    ? String(selectedHours.value).padStart(2, '0')
    : String(selectedHours.value).padStart(2, '0')
})

const formattedMinutes = computed(() => {
  return String(selectedMinutes.value).padStart(2, '0')
})

const formattedSeconds = computed(() => {
  return String(selectedSeconds.value).padStart(2, '0')
})

// 计算样式
const classes = computed(() => {
  if (props.unstyled) {
    return {
      root: props.inputClass || '',
      inputContainer: '',
      input: '',
      clearButton: '',
      calendarIcon: '',
      popover: '',
      timeContainer: '',
      timeHeader: '',
      timeControls: '',
      timeSelector: '',
      timeValue: '',
      timeButton: '',
    }
  }

  return {
    root: dateTimePicker(),
    inputContainer: dateTimePickerInputContainer({
      size: props.size,
      status: props.status,
      disabled: props.disabled,
    }),
    input: dateTimePickerInput({
      size: props.size,
    }),
    clearButton: dateTimePickerClearButton(),
    calendarIcon: dateTimePickerCalendarIcon({
      disabled: props.disabled,
    }),
    popover: dateTimePickerPopover({
      position: props.timePosition,
    }),
    timeContainer: dateTimePickerTimeContainer({
      position: props.timePosition,
    }),
    timeHeader: dateTimePickerTimeHeader(),
    timeControls: dateTimePickerTimeControls(),
    timeSelector: dateTimePickerTimeSelector(),
    timeValue: dateTimePickerTimeValue(),
    timeButton: dateTimePickerTimeButton({
      disabled: props.disabled,
    }),
  }
})
</script>

<template>
  <div
    ref="containerRef"
    :class="classes.root"
    v-bind="{ ...$attrs, ...props.pt?.root }"
  >
    <div
      :class="classes.inputContainer"
      @click="handleInputClick"
      v-bind="props.pt?.inputContainer"
    >
      <input
        ref="inputRef"
        type="text"
        :class="classes.input"
        :value="inputValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="true"
        @focus="handleFocus"
        @blur="handleBlur"
        v-bind="props.pt?.input"
      />

      <span
        v-if="clearable && inputValue && !disabled && !readonly"
        :class="classes.clearButton"
        @click.stop="clearSelection"
        v-bind="props.pt?.clearButton"
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
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </span>

      <span :class="classes.calendarIcon" v-bind="props.pt?.calendarIcon">
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
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      </span>
    </div>

    <transition name="fade">
      <div
        v-if="isOpen"
        ref="popoverRef"
        :class="classes.popover"
        v-bind="props.pt?.popover"
      >
        <!-- 日历部分 -->
        <VKCalendar
          :model-value="selectedDateTime || undefined"
          @update:model-value="handleDateSelect"
          :min-date="minDate"
          :max-date="maxDate"
          :disabled="disabled"
          :readonly="readonly"
          :initial-view="initialView"
          :show-adjacent-days="showAdjacentDays"
          :week-start="weekStart"
          :day-class="dayClass"
          :day-style="dayStyle"
          :disabled-date="disabledDate"
          :highlight-date="highlightDate"
          :unstyled="unstyled"
          v-bind="props.pt?.calendar"
        />

        <!-- 时间选择器部分 -->
        <div
          v-if="showTime"
          :class="classes.timeContainer"
          v-bind="props.pt?.timeContainer"
        >
          <div :class="classes.timeHeader" v-bind="props.pt?.timeHeader">
            时间
          </div>

          <div :class="classes.timeControls" v-bind="props.pt?.timeControls">
            <!-- 小时选择器 -->
            <div :class="classes.timeSelector" v-bind="props.pt?.timeSelector">
              <button
                type="button"
                :class="classes.timeButton"
                @click="incrementHours"
                :disabled="disabled || readonly"
                v-bind="props.pt?.timeButton"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </button>

              <div :class="classes.timeValue" v-bind="props.pt?.timeValue">
                {{ formattedHours }}
              </div>

              <button
                type="button"
                :class="classes.timeButton"
                @click="decrementHours"
                :disabled="disabled || readonly"
                v-bind="props.pt?.timeButton"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>

            <div class="text-lg">:</div>

            <!-- 分钟选择器 -->
            <div :class="classes.timeSelector" v-bind="props.pt?.timeSelector">
              <button
                type="button"
                :class="classes.timeButton"
                @click="incrementMinutes"
                :disabled="disabled || readonly"
                v-bind="props.pt?.timeButton"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </button>

              <div :class="classes.timeValue" v-bind="props.pt?.timeValue">
                {{ formattedMinutes }}
              </div>

              <button
                type="button"
                :class="classes.timeButton"
                @click="decrementMinutes"
                :disabled="disabled || readonly"
                v-bind="props.pt?.timeButton"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>

            <!-- 秒选择器 -->
            <template v-if="showSeconds">
              <div class="text-lg">:</div>

              <div
                :class="classes.timeSelector"
                v-bind="props.pt?.timeSelector"
              >
                <button
                  type="button"
                  :class="classes.timeButton"
                  @click="incrementSeconds"
                  :disabled="disabled || readonly"
                  v-bind="props.pt?.timeButton"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </button>

                <div :class="classes.timeValue" v-bind="props.pt?.timeValue">
                  {{ formattedSeconds }}
                </div>

                <button
                  type="button"
                  :class="classes.timeButton"
                  @click="decrementSeconds"
                  :disabled="disabled || readonly"
                  v-bind="props.pt?.timeButton"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
            </template>

            <!-- AM/PM选择器 -->
            <div
              v-if="!use24Hours"
              :class="classes.timeSelector"
              v-bind="props.pt?.timeSelector"
            >
              <button
                type="button"
                :class="classes.timeButton"
                @click="toggleAmPm"
                :disabled="disabled || readonly"
                v-bind="props.pt?.timeButton"
              >
                {{ selectedAmPm }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
