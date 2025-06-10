<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useClickOutside } from '@versakit/shared'
import {
  timePicker,
  timePickerInputContainer,
  timePickerInput,
  timePickerClearButton,
  timePickerClockIcon,
  timePickerPopover,
  timePickerTimeContainer,
  timePickerTimeControls,
  timePickerTimeSelector,
  timePickerTimeValue,
  timePickerTimeButton,
} from './index.variants'
import type { TimePickerProps, TimePickerEmits } from './type'

const props = withDefaults(defineProps<TimePickerProps>(), {
  modelValue: undefined,
  placeholder: '请选择时间',
  format: 'HH:mm:ss',
  clearable: true,
  size: 'md',
  status: 'default',
  disabled: false,
  readonly: false,
  use24Hours: true,
  minuteStep: 1,
  secondStep: 1,
  showSeconds: true,
  minTime: undefined,
  maxTime: undefined,
  inputClass: '',
  inputStyle: undefined,
  unstyled: false,
})

const emit = defineEmits<TimePickerEmits>()

// 响应式状态
const isOpen = ref(false)
const inputValue = ref('')
const inputRef = ref<HTMLInputElement | null>(null)
const popoverRef = ref<HTMLDivElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)

// 当前选中的时间
const selectedTime = ref<Date | null>(null)
const selectedHours = ref(0)
const selectedMinutes = ref(0)
const selectedSeconds = ref(0)
const selectedAmPm = ref<'AM' | 'PM'>('AM')

// 初始化值
const initTime = () => {
  if (props.modelValue) {
    let time: Date
    if (typeof props.modelValue === 'string') {
      // 处理只有时间的字符串
      if (
        props.modelValue.indexOf(':') > -1 &&
        props.modelValue.indexOf('T') === -1
      ) {
        const [hours, minutes, seconds] = props.modelValue
          .split(':')
          .map(Number)
        time = new Date()
        time.setHours(hours || 0)
        time.setMinutes(minutes || 0)
        time.setSeconds(seconds || 0)
      } else {
        time = new Date(props.modelValue)
      }
    } else {
      time = new Date(props.modelValue)
    }

    if (!isNaN(time.getTime())) {
      selectedTime.value = time
      selectedHours.value = time.getHours()
      selectedMinutes.value = time.getMinutes()
      selectedSeconds.value = time.getSeconds()

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
  selectedTime.value = null
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
    initTime()
  },
  { immediate: true },
)

// 格式化时间为显示值
const formatInputValue = () => {
  if (!selectedTime.value) {
    inputValue.value = ''
    return
  }

  const time = selectedTime.value
  const hours = time.getHours()
  const minutes = String(time.getMinutes()).padStart(2, '0')
  const seconds = String(time.getSeconds()).padStart(2, '0')

  if (props.use24Hours) {
    const hoursStr = String(hours).padStart(2, '0')
    inputValue.value = props.showSeconds
      ? `${hoursStr}:${minutes}:${seconds}`
      : `${hoursStr}:${minutes}`
  } else {
    const period = hours >= 12 ? 'PM' : 'AM'
    const hours12 = hours % 12 || 12 // 0应显示为12
    const hoursStr = String(hours12).padStart(2, '0')
    inputValue.value = props.showSeconds
      ? `${hoursStr}:${minutes}:${seconds} ${period}`
      : `${hoursStr}:${minutes} ${period}`
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

// 处理时间变化
const updateTime = () => {
  // 如果没有选择时间，创建一个新的Date对象
  if (!selectedTime.value) {
    selectedTime.value = new Date()
    selectedTime.value.setHours(0, 0, 0, 0) // 重置日期部分
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
  selectedTime.value.setHours(hours)
  selectedTime.value.setMinutes(selectedMinutes.value)
  selectedTime.value.setSeconds(selectedSeconds.value)

  // 检查时间限制
  if (isTimeDisabled(selectedTime.value)) {
    return
  }

  emit('update:modelValue', new Date(selectedTime.value))
  emit('change', new Date(selectedTime.value))
  formatInputValue()
}

// 判断时间是否被禁用
const isTimeDisabled = (time: Date): boolean => {
  if (props.disabled) return true

  if (props.minTime) {
    const minTime =
      typeof props.minTime === 'string'
        ? new Date(props.minTime)
        : props.minTime

    if (!isNaN(minTime.getTime())) {
      const minHours = minTime.getHours()
      const minMinutes = minTime.getMinutes()
      const minSeconds = minTime.getSeconds()

      const timeHours = time.getHours()
      const timeMinutes = time.getMinutes()
      const timeSeconds = time.getSeconds()

      if (
        timeHours < minHours ||
        (timeHours === minHours && timeMinutes < minMinutes) ||
        (timeHours === minHours &&
          timeMinutes === minMinutes &&
          timeSeconds < minSeconds)
      ) {
        return true
      }
    }
  }

  if (props.maxTime) {
    const maxTime =
      typeof props.maxTime === 'string'
        ? new Date(props.maxTime)
        : props.maxTime

    if (!isNaN(maxTime.getTime())) {
      const maxHours = maxTime.getHours()
      const maxMinutes = maxTime.getMinutes()
      const maxSeconds = maxTime.getSeconds()

      const timeHours = time.getHours()
      const timeMinutes = time.getMinutes()
      const timeSeconds = time.getSeconds()

      if (
        timeHours > maxHours ||
        (timeHours === maxHours && timeMinutes > maxMinutes) ||
        (timeHours === maxHours &&
          timeMinutes === maxMinutes &&
          timeSeconds > maxSeconds)
      ) {
        return true
      }
    }
  }

  return false
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
      clockIcon: '',
      popover: '',
      timeContainer: '',
      timeControls: '',
      timeSelector: '',
      timeValue: '',
      timeButton: '',
    }
  }

  return {
    root: timePicker(),
    inputContainer: timePickerInputContainer({
      size: props.size,
      status: props.status,
      disabled: props.disabled,
    }),
    input: timePickerInput({
      size: props.size,
    }),
    clearButton: timePickerClearButton(),
    clockIcon: timePickerClockIcon({
      disabled: props.disabled,
    }),
    popover: timePickerPopover(),
    timeContainer: timePickerTimeContainer(),
    timeControls: timePickerTimeControls(),
    timeSelector: timePickerTimeSelector(),
    timeValue: timePickerTimeValue(),
    timeButton: timePickerTimeButton({
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

      <span :class="classes.clockIcon" v-bind="props.pt?.clockIcon">
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
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
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
        <div :class="classes.timeContainer" v-bind="props.pt?.timeContainer">
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
