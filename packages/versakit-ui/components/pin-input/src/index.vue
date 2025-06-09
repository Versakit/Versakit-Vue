<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue'
import {
  pinInput,
  pinInputWrapper,
  pinInputField,
  pinInputSeparator,
} from './index.variants'
import type { PinInputProps, PinInputPassThroughAttributes } from './type'

const props = withDefaults(
  defineProps<PinInputProps & { pt?: PinInputPassThroughAttributes }>(),
  {
    length: 4,
    size: 'md',
    variant: 'outline',
    type: 'text',
    disabled: false,
    readonly: false,
    mask: false,
    maskChar: '•',
    autofocus: false,
    status: 'default',
    unstyled: false,
  },
)

const emit = defineEmits(['update:modelValue', 'complete', 'change'])

const inputRefs = ref<HTMLInputElement[]>([])
const inputValues = ref<string[]>(Array(props.length).fill(''))

// 根据modelValue设置初始值
watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal) {
      const values = newVal.split('').slice(0, props.length)
      inputValues.value = [
        ...values,
        ...Array(props.length - values.length).fill(''),
      ]
    } else {
      inputValues.value = Array(props.length).fill('')
    }
  },
  { immediate: true },
)

const classes = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return pinInput()
})

const wrapperClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return pinInputWrapper()
})

const inputFieldClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return pinInputField({
    variant: props.variant,
    size: props.size,
    status: props.status,
    disabled: props.disabled,
  })
})

const separatorClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return pinInputSeparator({
    size: props.size,
  })
})

const getDisplayValue = (value: string) => {
  if (!value) return ''
  if (props.mask) return props.maskChar
  return value
}

const focusNext = (index: number) => {
  if (index < props.length - 1) {
    inputRefs.value[index + 1]?.focus()
  }
}

const focusPrev = (index: number) => {
  if (index > 0) {
    inputRefs.value[index - 1]?.focus()
  }
}

const handleInput = (event: Event, index: number) => {
  const input = event.target as HTMLInputElement
  const value = input.value

  // 确保只取最后一个字符
  const char = value.slice(-1)
  inputValues.value[index] = char

  // 更新modelValue
  updateModelValue()

  // 触发change事件
  emit('change', char)

  // 当输入完成一个字符后，自动跳转到下一个输入框
  if (char) {
    focusNext(index)
  }

  // 检查是否所有输入框都已填写
  checkComplete()
}

const handleKeyDown = (event: KeyboardEvent, index: number) => {
  switch (event.key) {
    case 'Backspace':
      if (!inputValues.value[index]) {
        focusPrev(index)
      }
      break
    case 'ArrowLeft':
      event.preventDefault()
      focusPrev(index)
      break
    case 'ArrowRight':
      event.preventDefault()
      focusNext(index)
      break
    case 'Delete':
      // 清空当前输入框
      inputValues.value[index] = ''
      updateModelValue()
      break
  }
}

const handlePaste = (event: ClipboardEvent, index: number) => {
  event.preventDefault()
  const pastedData = event.clipboardData?.getData('text/plain') || ''

  if (!pastedData) return

  // 将粘贴的内容分配到各个输入框中
  const chars = pastedData.split('')

  for (let i = 0; i < props.length - index; i++) {
    if (index + i < props.length && i < chars.length) {
      inputValues.value[index + i] = chars[i]
    }
  }

  // 更新modelValue
  updateModelValue()

  // 将焦点设置到最后一个有内容的输入框后面
  const focusIndex = Math.min(index + chars.length, props.length - 1)
  inputRefs.value[focusIndex]?.focus()

  // 检查是否所有输入框都已填写
  checkComplete()
}

const updateModelValue = () => {
  const value = inputValues.value.join('')
  emit('update:modelValue', value)
}

const checkComplete = () => {
  const isFilled = inputValues.value.every((val) => val !== '')
  if (isFilled) {
    const value = inputValues.value.join('')
    emit('complete', value)
  }
}

onMounted(() => {
  if (props.autofocus && !props.disabled && !props.readonly) {
    inputRefs.value[0]?.focus()
  }
})

// 设置用于模板中的ref集合
const setInputRef = (el: any, index: number) => {
  if (el) {
    inputRefs.value[index] = el
  }
}
</script>

<template>
  <div :class="classes" v-bind="{ ...$attrs, ...props.pt?.root }">
    <template v-for="(_, index) in Array(length)" :key="index">
      <!-- 输入框 -->
      <div :class="wrapperClasses" v-bind="props.pt?.inputWrapper">
        <input
          :ref="(el) => setInputRef(el, index)"
          :class="inputFieldClasses"
          :type="type === 'password' && !mask ? 'password' : 'text'"
          :inputmode="type === 'number' ? 'numeric' : 'text'"
          :value="getDisplayValue(inputValues[index])"
          :disabled="disabled"
          :readonly="readonly"
          :aria-label="`${ariaLabel || 'Pin'} ${index + 1} of ${length}`"
          :max="type === 'number' ? 9 : undefined"
          :min="type === 'number' ? 0 : undefined"
          maxlength="1"
          @input="handleInput($event, index)"
          @keydown="handleKeyDown($event, index)"
          @paste="handlePaste($event, index)"
          v-bind="props.pt?.input"
        />
      </div>

      <!-- 分隔符 -->
      <div
        v-if="separator && index < length - 1"
        :class="separatorClasses"
        v-bind="props.pt?.separator"
      >
        {{ separator }}
      </div>
    </template>
  </div>
</template>
