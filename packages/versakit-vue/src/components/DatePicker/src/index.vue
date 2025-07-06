<template>
  <div :class="classes.root">
    <div :class="classes.inputWrapper" @click="toggleDropdown">
      <input
        ref="inputRef"
        type="text"
        :class="classes.input"
        :value="formattedValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="true"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <span
        v-if="clearable && modelValue && !disabled && !readonly"
        :class="classes.clearButton"
        @click="handleClear"
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
    </div>

    <div v-if="isOpen" ref="dropdownRef" :class="classes.dropdown">
      <Calendar
        :modelValue="modelValue"
        :min="min"
        :max="max"
        :disabled="disabled"
        :readonly="readonly"
        :firstDayOfWeek="firstDayOfWeek"
        :locale="locale"
        :pt="pt?.calendar"
        @update:modelValue="handleDateChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDatePicker } from './composables/useDatePicker'
import {
  datePickerStyle,
  datePickerInputWrapperStyle,
  datePickerInputStyle,
  datePickerClearButtonStyle,
  datePickerDropdownStyle,
} from './index.variants'
import type { DatePickerProps } from './type'
import { DatePickerEmits } from './type'
import { Calendar } from '../../Calendar'

const emit = defineEmits(DatePickerEmits)
const props = withDefaults(defineProps<DatePickerProps>(), {
  disabled: false,
  readonly: false,
  placeholder: '选择日期',
  firstDayOfWeek: 0,
  clearable: true,
  unstyled: false,
})

const {
  isOpen,
  inputRef,
  dropdownRef,
  formattedValue,
  toggleDropdown,
  handleDateChange,
  handleClear,
  handleFocus,
  handleBlur,
} = useDatePicker(props, emit)

const classes = computed(() => {
  return {
    root: props.unstyled
      ? props.pt?.root || ''
      : datePickerStyle({ unstyled: props.unstyled, class: props.pt?.root }),
    inputWrapper: props.unstyled
      ? props.pt?.inputWrapper || ''
      : datePickerInputWrapperStyle({ class: props.pt?.inputWrapper }),
    input: props.unstyled
      ? props.pt?.input || ''
      : datePickerInputStyle({ class: props.pt?.input }),
    clearButton: props.unstyled
      ? props.pt?.clearButton || ''
      : datePickerClearButtonStyle({ class: props.pt?.clearButton }),
    dropdown: props.unstyled
      ? props.pt?.dropdown || ''
      : datePickerDropdownStyle({ class: props.pt?.dropdown }),
  }
})
</script>
