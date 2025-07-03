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
      <div :class="classes.timeSelector">
        <!-- 小时列 -->
        <div ref="hourRef" :class="classes.column">
          <div
            v-for="hour in hourList"
            :key="`hour-${hour}`"
            :class="[
              classes.item,
              (
                format === '12h'
                  ? (selectedHour > 12
                      ? selectedHour - 12
                      : selectedHour === 0
                        ? 12
                        : selectedHour) === hour
                  : selectedHour === hour
              )
                ? classes.itemSelected
                : '',
            ]"
            @click="selectHour(hour)"
          >
            {{ hour.toString().padStart(2, '0') }}
          </div>
        </div>

        <!-- 分钟列 -->
        <div ref="minuteRef" :class="classes.column">
          <div
            v-for="minute in minuteList"
            :key="`minute-${minute}`"
            :class="[
              classes.item,
              selectedMinute === minute ? classes.itemSelected : '',
            ]"
            @click="selectMinute(minute)"
          >
            {{ minute.toString().padStart(2, '0') }}
          </div>
        </div>

        <!-- 秒钟列 -->
        <div v-if="showSeconds" ref="secondRef" :class="classes.column">
          <div
            v-for="second in secondList"
            :key="`second-${second}`"
            :class="[
              classes.item,
              selectedSecond === second ? classes.itemSelected : '',
            ]"
            @click="selectSecond(second)"
          >
            {{ second.toString().padStart(2, '0') }}
          </div>
        </div>

        <!-- AM/PM列 -->
        <div v-if="format === '12h'" ref="ampmRef" :class="classes.column">
          <div
            :class="[
              classes.item,
              selectedAmPm === 'am' ? classes.itemSelected : '',
            ]"
            @click="selectAmPm('am')"
          >
            AM
          </div>
          <div
            :class="[
              classes.item,
              selectedAmPm === 'pm' ? classes.itemSelected : '',
            ]"
            @click="selectAmPm('pm')"
          >
            PM
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTimePicker } from './composables/useTimePicker'
import {
  timePickerStyle,
  timePickerInputWrapperStyle,
  timePickerInputStyle,
  timePickerClearButtonStyle,
  timePickerDropdownStyle,
  timePickerSelectorStyle,
  timePickerColumnStyle,
  timePickerItemStyle,
} from './index.variants'
import type { TimePickerProps } from './type'
import { TimePickerEmits } from './type'

const emit = defineEmits(TimePickerEmits)
const props = withDefaults(defineProps<TimePickerProps>(), {
  disabled: false,
  readonly: false,
  placeholder: '选择时间',
  format: '24h',
  hourStep: 1,
  minuteStep: 1,
  secondStep: 1,
  showSeconds: false,
  clearable: true,
  unstyled: false,
})

const {
  isOpen,
  inputRef,
  dropdownRef,
  hourRef,
  minuteRef,
  secondRef,
  ampmRef,
  formattedValue,
  hourList,
  minuteList,
  secondList,
  selectedHour,
  selectedMinute,
  selectedSecond,
  selectedAmPm,
  toggleDropdown,
  selectHour,
  selectMinute,
  selectSecond,
  selectAmPm,
  handleClear,
  handleFocus,
  handleBlur,
} = useTimePicker(props, emit)

const classes = computed(() => {
  return {
    root: props.unstyled
      ? props.pt?.root || ''
      : timePickerStyle({ unstyled: props.unstyled, class: props.pt?.root }),
    inputWrapper: props.unstyled
      ? props.pt?.inputWrapper || ''
      : timePickerInputWrapperStyle({ class: props.pt?.inputWrapper }),
    input: props.unstyled
      ? props.pt?.input || ''
      : timePickerInputStyle({ class: props.pt?.input }),
    clearButton: props.unstyled
      ? props.pt?.clearButton || ''
      : timePickerClearButtonStyle({ class: props.pt?.clearButton }),
    dropdown: props.unstyled
      ? props.pt?.dropdown || ''
      : timePickerDropdownStyle({ class: props.pt?.dropdown }),
    timeSelector: props.unstyled
      ? props.pt?.timeSelector || ''
      : timePickerSelectorStyle({ class: props.pt?.timeSelector }),
    column: props.unstyled
      ? props.pt?.column || ''
      : timePickerColumnStyle({ class: props.pt?.column }),
    item: props.unstyled
      ? props.pt?.item || ''
      : timePickerItemStyle({ class: props.pt?.item }),
    itemSelected: props.unstyled
      ? props.pt?.itemSelected || ''
      : timePickerItemStyle({ selected: true, class: props.pt?.itemSelected })
          .split(' ')
          .filter((c) => !timePickerItemStyle().includes(c))
          .join(' '),
  }
})
</script>
