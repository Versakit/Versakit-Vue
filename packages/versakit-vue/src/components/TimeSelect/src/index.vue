<template>
  <div :class="classes.root">
    <div :class="classes.inputWrapper" @click="toggleDropdown">
      <input
        ref="inputRef"
        type="text"
        :class="classes.input"
        :value="modelValue"
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
      <div :class="classes.optionsList">
        <div
          v-for="(option, index) in timeOptions"
          :key="index"
          :class="[
            classes.option,
            modelValue === option ? classes.optionSelected : '',
            disabled ? classes.optionDisabled : '',
          ]"
          @click="!disabled && selectOption(option)"
        >
          {{ option }}
        </div>
        <div
          v-if="timeOptions.length === 0"
          :class="classes.option"
          style="cursor: default"
        >
          无可用选项
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTimeSelect } from './composables/useTimeSelect'
import {
  timeSelectStyle,
  timeSelectInputWrapperStyle,
  timeSelectInputStyle,
  timeSelectClearButtonStyle,
  timeSelectDropdownStyle,
  timeSelectOptionsListStyle,
  timeSelectOptionStyle,
} from './index.variants'
import type { TimeSelectProps } from './type'
import { TimeSelectEmits } from './type'

const emit = defineEmits(TimeSelectEmits)
const props = withDefaults(defineProps<TimeSelectProps>(), {
  disabled: false,
  readonly: false,
  placeholder: '选择时间',
  start: '00:00',
  end: '23:59',
  step: 30,
  format: '24h',
  clearable: true,
  unstyled: false,
})

const {
  isOpen,
  inputRef,
  dropdownRef,
  timeOptions,
  toggleDropdown,
  selectOption,
  handleClear,
  handleFocus,
  handleBlur,
} = useTimeSelect(props, emit)

const classes = computed(() => {
  return {
    root: props.unstyled
      ? props.pt?.root || ''
      : timeSelectStyle({ unstyled: props.unstyled, class: props.pt?.root }),
    inputWrapper: props.unstyled
      ? props.pt?.inputWrapper || ''
      : timeSelectInputWrapperStyle({ class: props.pt?.inputWrapper }),
    input: props.unstyled
      ? props.pt?.input || ''
      : timeSelectInputStyle({ class: props.pt?.input }),
    clearButton: props.unstyled
      ? props.pt?.clearButton || ''
      : timeSelectClearButtonStyle({ class: props.pt?.clearButton }),
    dropdown: props.unstyled
      ? props.pt?.dropdown || ''
      : timeSelectDropdownStyle({ class: props.pt?.dropdown }),
    optionsList: props.unstyled
      ? props.pt?.optionsList || ''
      : timeSelectOptionsListStyle({ class: props.pt?.optionsList }),
    option: props.unstyled
      ? props.pt?.option || ''
      : timeSelectOptionStyle({ class: props.pt?.option }),
    optionSelected: props.unstyled
      ? props.pt?.optionSelected || ''
      : timeSelectOptionStyle({
          selected: true,
          class: props.pt?.optionSelected,
        })
          .split(' ')
          .filter((c) => !timeSelectOptionStyle().includes(c))
          .join(' '),
    optionDisabled: props.unstyled
      ? ''
      : timeSelectOptionStyle({ disabled: true })
          .split(' ')
          .filter((c) => !timeSelectOptionStyle().includes(c))
          .join(' '),
  }
})
</script>
