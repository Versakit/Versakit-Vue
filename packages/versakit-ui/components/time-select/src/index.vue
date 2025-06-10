<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useClickOutside } from '@versakit/shared'
import {
  timeSelect,
  timeSelectInputContainer,
  timeSelectInput,
  timeSelectClearButton,
  timeSelectClockIcon,
  timeSelectDropdown,
  timeSelectOptionsList,
  timeSelectOption,
  timeSelectEmptyMessage,
} from './index.variants'
import type { TimeSelectProps, TimeSelectEmits, TimeOption } from './type'

const props = withDefaults(defineProps<TimeSelectProps>(), {
  modelValue: undefined,
  placeholder: '请选择时间',
  start: '00:00',
  end: '23:59',
  step: 30,
  minTime: undefined,
  maxTime: undefined,
  options: undefined,
  clearable: true,
  disabled: false,
  readonly: false,
  size: 'md',
  status: 'default',
  inputClass: '',
  inputStyle: undefined,
  unstyled: false,
})

const emit = defineEmits<TimeSelectEmits>()

// 响应式状态
const isOpen = ref(false)
const inputValue = ref('')
const inputRef = ref<HTMLInputElement | null>(null)
const dropdownRef = ref<HTMLDivElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)

// 生成时间选项列表
const timeOptions = computed<TimeOption[]>(() => {
  if (props.options) {
    return props.options
  }

  const options: TimeOption[] = []
  const parseTime = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(':').map(Number)
    return hours * 60 + (minutes || 0)
  }

  const startMinutes = parseTime(props.start)
  const endMinutes = parseTime(props.end)
  const step = props.step

  for (let minutes = startMinutes; minutes <= endMinutes; minutes += step) {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    const timeValue = `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`

    let disabled = false
    if (props.minTime && timeValue < props.minTime) {
      disabled = true
    }
    if (props.maxTime && timeValue > props.maxTime) {
      disabled = true
    }

    options.push({
      value: timeValue,
      label: timeValue,
      disabled,
    })
  }

  return options
})

// 监听modelValue变化
watch(
  () => props.modelValue,
  (value) => {
    inputValue.value = value || ''
  },
  { immediate: true },
)

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

// 选择时间选项
const selectOption = (option: TimeOption) => {
  if (option.disabled) return

  inputValue.value = option.value
  isOpen.value = false
  emit('update:modelValue', option.value)
  emit('change', option.value)
}

// 清除选择
const clearSelection = () => {
  inputValue.value = ''
  emit('update:modelValue', null)
  emit('change', null)
  emit('clear')
}

// 处理点击外部关闭
useClickOutside(containerRef, (event: MouseEvent) => {
  if (isOpen.value && !dropdownRef.value?.contains(event.target as Node)) {
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
      clockIcon: '',
      dropdown: '',
      optionsList: '',
      option: '',
      emptyMessage: '',
    }
  }

  return {
    root: timeSelect(),
    inputContainer: timeSelectInputContainer({
      size: props.size,
      status: props.status,
      disabled: props.disabled,
    }),
    input: timeSelectInput({
      size: props.size,
    }),
    clearButton: timeSelectClearButton(),
    clockIcon: timeSelectClockIcon({
      disabled: props.disabled,
    }),
    dropdown: timeSelectDropdown(),
    optionsList: timeSelectOptionsList(),
    option: timeSelectOption,
    emptyMessage: timeSelectEmptyMessage(),
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
        ref="dropdownRef"
        :class="classes.dropdown"
        v-bind="props.pt?.dropdown"
      >
        <div :class="classes.optionsList" v-bind="props.pt?.optionsList">
          <template v-if="timeOptions.length > 0">
            <div
              v-for="(option, index) in timeOptions"
              :key="index"
              :class="[
                typeof classes.option === 'function'
                  ? classes.option({
                      selected: option.value === modelValue,
                      disabled: option.disabled || false,
                    })
                  : classes.option,
                option.disabled ? 'opacity-50 cursor-not-allowed' : '',
              ]"
              @click="selectOption(option)"
              v-bind="props.pt?.option"
            >
              {{ option.label || option.value }}
            </div>
          </template>
          <div
            v-else
            :class="classes.emptyMessage"
            v-bind="props.pt?.emptyMessage"
          >
            无可用时间选项
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
