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
      <div :class="classes.tabs">
        <div
          :class="[classes.tab, activeTab === 'date' ? classes.activeTab : '']"
          @click="switchTab('date')"
        >
          日期
        </div>
        <div
          :class="[classes.tab, activeTab === 'time' ? classes.activeTab : '']"
          @click="switchTab('time')"
        >
          时间
        </div>
      </div>

      <div :class="classes.tabContent">
        <!-- 日期选择面板 -->
        <div v-show="activeTab === 'date'">
          <Calendar
            :modelValue="currentDateTime"
            :min="min"
            :max="max"
            :disabled="disabled"
            :readonly="readonly"
            :firstDayOfWeek="firstDayOfWeek"
            :locale="locale"
            :pt="pt?.datePicker?.calendar"
            @update:modelValue="handleDateChange"
          />
        </div>

        <!-- 时间选择面板 -->
        <div v-show="activeTab === 'time'">
          <TimePicker
            :modelValue="currentDateTime"
            :disabled="disabled"
            :readonly="readonly"
            :format="timeFormat"
            :hourStep="hourStep"
            :minuteStep="minuteStep"
            :secondStep="secondStep"
            :showSeconds="showSeconds"
            :pt="{
              timeSelector: pt?.timePicker?.timeSelector,
              column: pt?.timePicker?.column,
              item: pt?.timePicker?.item,
              itemSelected: pt?.timePicker?.itemSelected,
            }"
            @update:modelValue="handleTimeChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDateTimePicker } from './composables/useDateTimePicker'
import {
  dateTimePickerStyle,
  dateTimePickerInputWrapperStyle,
  dateTimePickerInputStyle,
  dateTimePickerClearButtonStyle,
  dateTimePickerDropdownStyle,
  dateTimePickerTabsStyle,
  dateTimePickerTabStyle,
  dateTimePickerTabContentStyle,
} from './index.variants'
import type { DateTimePickerProps } from './type'
import { DateTimePickerEmits } from './type'
import { Calendar } from '../../Calendar'
import { TimePicker } from '../../TimePicker'

const emit = defineEmits(DateTimePickerEmits)
const props = withDefaults(defineProps<DateTimePickerProps>(), {
  disabled: false,
  readonly: false,
  placeholder: '选择日期时间',
  timeFormat: '24h',
  firstDayOfWeek: 0,
  hourStep: 1,
  minuteStep: 1,
  secondStep: 1,
  showSeconds: false,
  clearable: true,
  unstyled: false,
})

const {
  isOpen,
  activeTab,
  inputRef,
  dropdownRef,
  currentDateTime,
  formattedValue,
  toggleDropdown,
  switchTab,
  handleDateChange,
  handleTimeChange,
  handleClear,
  handleFocus,
  handleBlur,
} = useDateTimePicker(props, emit)

const classes = computed(() => {
  return {
    root: props.unstyled
      ? props.pt?.root || ''
      : dateTimePickerStyle({
          unstyled: props.unstyled,
          class: props.pt?.root,
        }),
    inputWrapper: props.unstyled
      ? props.pt?.inputWrapper || ''
      : dateTimePickerInputWrapperStyle({ class: props.pt?.inputWrapper }),
    input: props.unstyled
      ? props.pt?.input || ''
      : dateTimePickerInputStyle({ class: props.pt?.input }),
    clearButton: props.unstyled
      ? props.pt?.clearButton || ''
      : dateTimePickerClearButtonStyle({ class: props.pt?.clearButton }),
    dropdown: props.unstyled
      ? props.pt?.dropdown || ''
      : dateTimePickerDropdownStyle({ class: props.pt?.dropdown }),
    tabs: props.unstyled
      ? props.pt?.tabs || ''
      : dateTimePickerTabsStyle({ class: props.pt?.tabs }),
    tab: props.unstyled
      ? props.pt?.tab || ''
      : dateTimePickerTabStyle({ class: props.pt?.tab }),
    activeTab: props.unstyled
      ? props.pt?.activeTab || ''
      : dateTimePickerTabStyle({ active: true, class: props.pt?.activeTab })
          .split(' ')
          .filter((c) => !dateTimePickerTabStyle().includes(c))
          .join(' '),
    tabContent: props.unstyled
      ? props.pt?.tabContent || ''
      : dateTimePickerTabContentStyle({ class: props.pt?.tabContent }),
  }
})
</script>
