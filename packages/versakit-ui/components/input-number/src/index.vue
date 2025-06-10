<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  inputNumber,
  inputNumberContainer,
  inputNumberPrefix,
  inputNumberInput,
  inputNumberSuffix,
  inputNumberControlsWrapper,
  inputNumberButton,
} from './index.variants'
import type { InputNumberProps, InputNumberEmits } from './type'

const props = withDefaults(defineProps<InputNumberProps>(), {
  modelValue: null,
  min: -Infinity,
  max: Infinity,
  step: 1,
  precision: undefined,
  disabled: false,
  readonly: false,
  placeholder: '请输入数字',
  controls: true,
  controlsPosition: 'right',
  size: 'md',
  status: 'default',
  inputClass: '',
  inputStyle: undefined,
  controlClass: '',
  controlStyle: undefined,
  prefix: '',
  suffix: '',
  unstyled: false,
})

const emit = defineEmits<InputNumberEmits>()

// 当前输入框的值
const inputValue = ref(formatToString(props.modelValue))
// 输入框引用
const inputRef = ref<HTMLInputElement | null>(null)
// 是否正在聚焦
const isFocused = ref(false)

// 监听值变化
watch(
  () => props.modelValue,
  (val) => {
    inputValue.value = formatToString(val)
  },
)

// 监听输入框值变化
watch(
  () => inputValue.value,
  (val) => {
    // 如果输入为空值或无效数字，则值为null
    if (val === '' || isNaN(Number(val))) {
      emit('update:modelValue', null)
      return
    }

    // 转换为数字并限制在范围内
    let numValue = parseFloat(val)
    numValue = limitInRange(numValue)

    // 如果定义了精度，则设置小数位数
    if (props.precision !== undefined) {
      numValue = parseFloat(numValue.toFixed(props.precision))
    }

    emit('update:modelValue', numValue)
  },
)

// 限制数值范围
const limitInRange = (value: number): number => {
  if (value < props.min) {
    return props.min
  }
  if (value > props.max) {
    return props.max
  }
  return value
}

// 格式化数值为字符串
function formatToString(value: number | null): string {
  if (value === null) return ''

  if (props.precision !== undefined) {
    return value.toFixed(props.precision)
  }

  return String(value)
}

// 递增数值
const increase = () => {
  if (props.disabled || props.readonly) return

  const currentValue = props.modelValue === null ? 0 : props.modelValue
  let newValue = currentValue + props.step

  // 应用精度
  if (props.precision !== undefined) {
    newValue = parseFloat(newValue.toFixed(props.precision))
  }

  // 限制在范围内
  newValue = limitInRange(newValue)

  emit('update:modelValue', newValue)
  emit('change', newValue)
}

// 递减数值
const decrease = () => {
  if (props.disabled || props.readonly) return

  const currentValue = props.modelValue === null ? 0 : props.modelValue
  let newValue = currentValue - props.step

  // 应用精度
  if (props.precision !== undefined) {
    newValue = parseFloat(newValue.toFixed(props.precision))
  }

  // 限制在范围内
  newValue = limitInRange(newValue)

  emit('update:modelValue', newValue)
  emit('change', newValue)
}

// 处理输入框变化
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  inputValue.value = target.value
}

// 处理输入框聚焦
const handleFocus = () => {
  isFocused.value = true
  emit('focus')
}

// 处理输入框失焦
const handleBlur = () => {
  isFocused.value = false

  // 在失焦时格式化显示值
  if (props.modelValue !== null) {
    inputValue.value = formatToString(props.modelValue)
  }

  emit('blur')
}

// 处理按键事件
const handleKeydown = (event: KeyboardEvent) => {
  if (props.disabled || props.readonly) return

  if (event.key === 'ArrowUp') {
    event.preventDefault()
    increase()
  } else if (event.key === 'ArrowDown') {
    event.preventDefault()
    decrease()
  }
}

// 检查是否禁用增加按钮
const isIncrementDisabled = computed(() => {
  if (props.disabled) return true

  return props.modelValue !== null && props.modelValue >= props.max
})

// 检查是否禁用减少按钮
const isDecrementDisabled = computed(() => {
  if (props.disabled) return true

  return props.modelValue !== null && props.modelValue <= props.min
})

// 计算样式
const classes = computed(() => {
  if (props.unstyled) {
    return {
      root: props.inputClass || '',
      inputContainer: '',
      prefix: '',
      input: '',
      suffix: '',
      controlsWrapper: '',
      incrementButton: () => '',
      decrementButton: () => '',
    }
  }

  return {
    root: inputNumber(),
    inputContainer: inputNumberContainer({
      size: props.size,
      status: props.status,
      disabled: props.disabled,
    }),
    prefix: inputNumberPrefix(),
    input: inputNumberInput({
      size: props.size,
    }),
    suffix: inputNumberSuffix(),
    controlsWrapper: inputNumberControlsWrapper({
      position: props.controlsPosition,
    }),
    incrementButton: (position: 'top' | 'right') =>
      inputNumberButton({
        position,
        size: props.size,
      }),
    decrementButton: (position: 'bottom' | 'left') =>
      inputNumberButton({
        position,
        size: props.size,
      }),
  }
})
</script>

<template>
  <div :class="classes.root" v-bind="{ ...$attrs, ...props.pt?.root }">
    <div :class="classes.inputContainer" v-bind="props.pt?.inputContainer">
      <!-- 前缀 -->
      <div v-if="prefix" :class="classes.prefix" v-bind="props.pt?.prefix">
        {{ prefix }}
      </div>

      <!-- 左侧按钮 -->
      <div
        v-if="controls && controlsPosition === 'both'"
        :class="[classes.controlsWrapper, controlClass]"
        :style="controlStyle"
        v-bind="props.pt?.controlsWrapper"
      >
        <button
          type="button"
          :class="
            typeof classes.decrementButton === 'function'
              ? classes.decrementButton('left')
              : classes.decrementButton
          "
          :disabled="isDecrementDisabled"
          @click="decrease"
          v-bind="props.pt?.decrementButton"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-4 w-4"
          >
            <path
              fill-rule="evenodd"
              d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <!-- 输入框 -->
      <input
        ref="inputRef"
        type="text"
        :class="[classes.input, inputClass]"
        :style="inputStyle"
        :value="inputValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
        v-bind="props.pt?.input"
      />

      <!-- 后缀 -->
      <div v-if="suffix" :class="classes.suffix" v-bind="props.pt?.suffix">
        {{ suffix }}
      </div>

      <!-- 右侧按钮 -->
      <div
        v-if="controls && controlsPosition === 'right'"
        :class="[classes.controlsWrapper, controlClass]"
        :style="controlStyle"
        v-bind="props.pt?.controlsWrapper"
      >
        <button
          type="button"
          :class="
            typeof classes.incrementButton === 'function'
              ? classes.incrementButton('top')
              : classes.incrementButton
          "
          :disabled="isIncrementDisabled"
          @click="increase"
          v-bind="props.pt?.incrementButton"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-4 w-4"
          >
            <path
              fill-rule="evenodd"
              d="M10 5a.75.75 0 01.75.75v6.638l1.96-2.158a.75.75 0 111.08 1.04l-3.25 3.5a.75.75 0 01-1.08 0l-3.25-3.5a.75.75 0 111.08-1.04l1.96 2.158V5.75A.75.75 0 0110 5z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button
          type="button"
          :class="
            typeof classes.decrementButton === 'function'
              ? classes.decrementButton('bottom')
              : classes.decrementButton
          "
          :disabled="isDecrementDisabled"
          @click="decrease"
          v-bind="props.pt?.decrementButton"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-4 w-4"
          >
            <path
              fill-rule="evenodd"
              d="M10 15a.75.75 0 01-.75-.75V7.612L7.29 9.77a.75.75 0 01-1.08-1.04l3.25-3.5a.75.75 0 011.08 0l3.25 3.5a.75.75 0 11-1.08 1.04l-1.96-2.158v6.638A.75.75 0 0110 15z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <!-- 右侧两边按钮 -->
      <div
        v-if="controls && controlsPosition === 'both'"
        :class="[classes.controlsWrapper, controlClass]"
        :style="controlStyle"
        v-bind="props.pt?.controlsWrapper"
      >
        <button
          type="button"
          :class="
            typeof classes.incrementButton === 'function'
              ? classes.incrementButton('right')
              : classes.incrementButton
          "
          :disabled="isIncrementDisabled"
          @click="increase"
          v-bind="props.pt?.incrementButton"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-4 w-4"
          >
            <path
              fill-rule="evenodd"
              d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
