<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { VKCalendar } from '../../calendar'
import { useClickOutside } from '@versakit/shared'
import {
  datePicker,
  datePickerInputContainer,
  datePickerInput,
  datePickerClearButton,
  datePickerCalendarIcon,
  datePickerPopover,
} from './index.variants'
import type { DatePickerProps, DatePickerEmits } from './type'

const props = withDefaults(defineProps<DatePickerProps>(), {
  modelValue: undefined,
  placeholder: '请选择日期',
  format: 'YYYY-MM-DD',
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
  unstyled: false,
})

const emit = defineEmits<DatePickerEmits>()

// 响应式状态
const isOpen = ref(false)
const inputValue = ref('')
const inputRef = ref<HTMLInputElement | null>(null)
const popoverRef = ref<HTMLDivElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)

// 当前选中的日期
const selectedDate = ref<Date | null>(null)

// 初始化值
const initDate = () => {
  if (props.modelValue) {
    if (typeof props.modelValue === 'string') {
      selectedDate.value = new Date(props.modelValue)
    } else {
      selectedDate.value = new Date(props.modelValue)
    }
    formatInputValue()
  } else {
    selectedDate.value = null
    inputValue.value = ''
  }
}

// 监听值变化
watch(
  () => props.modelValue,
  () => {
    initDate()
  },
  { immediate: true },
)

// 格式化日期为显示值
const formatInputValue = () => {
  if (!selectedDate.value) {
    inputValue.value = ''
    return
  }

  // 简单格式化，实际项目中可以使用日期库如date-fns
  const year = selectedDate.value.getFullYear()
  const month = String(selectedDate.value.getMonth() + 1).padStart(2, '0')
  const day = String(selectedDate.value.getDate()).padStart(2, '0')

  if (props.format === 'YYYY-MM-DD') {
    inputValue.value = `${year}-${month}-${day}`
  } else if (props.format === 'YYYY/MM/DD') {
    inputValue.value = `${year}/${month}/${day}`
  } else if (props.format === 'DD/MM/YYYY') {
    inputValue.value = `${day}/${month}/${year}`
  } else if (props.format === 'MM/DD/YYYY') {
    inputValue.value = `${month}/${day}/${year}`
  } else {
    // 默认格式
    inputValue.value = `${year}-${month}-${day}`
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
  selectedDate.value = date
  isOpen.value = false
  emit('update:modelValue', date)
  emit('change', date)
  formatInputValue()
}

// 清除选择
const clearSelection = () => {
  selectedDate.value = null
  inputValue.value = ''
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
    }
  }

  return {
    root: datePicker(),
    inputContainer: datePickerInputContainer({
      size: props.size,
      status: props.status,
      disabled: props.disabled,
    }),
    input: datePickerInput({
      size: props.size,
    }),
    clearButton: datePickerClearButton(),
    calendarIcon: datePickerCalendarIcon({
      disabled: props.disabled,
    }),
    popover: datePickerPopover(),
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
        <VKCalendar
          :model-value="selectedDate || undefined"
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
