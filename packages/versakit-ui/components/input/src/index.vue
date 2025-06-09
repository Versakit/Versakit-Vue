<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  input,
  inputElement,
  inputPrefix,
  inputSuffix,
  clearButton,
  counter,
} from './index.variants'
import type { InputProps, InputPassThroughAttributes } from './type'

const props = withDefaults(
  defineProps<InputProps & { pt?: InputPassThroughAttributes }>(),
  {
    size: 'md',
    variant: 'outline',
    placeholder: '',
    disabled: false,
    readonly: false,
    clearable: false,
    status: 'default',
    type: 'text',
    showCount: false,
    autofocus: false,
    unstyled: false,
  },
)

const emit = defineEmits([
  'update:modelValue',
  'focus',
  'blur',
  'input',
  'clear',
])

const inputRef = ref<HTMLInputElement | null>(null)
const isFocused = ref(false)

const classes = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return input({
    variant: props.variant,
    size: props.size,
    status: props.status,
    disabled: props.disabled,
  })
})

const inputClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return inputElement({
    size: props.size,
    disabled: props.disabled || props.readonly,
  })
})

const prefixClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return inputPrefix({
    size: props.size,
  })
})

const suffixClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return inputSuffix({
    size: props.size,
  })
})

const clearButtonClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return clearButton()
})

const counterClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return counter()
})

const inputValue = computed({
  get: () => props.modelValue ?? '',
  set: (value) => emit('update:modelValue', value),
})

const handleClear = () => {
  inputValue.value = ''
  emit('clear')
  inputRef.value?.focus()
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  inputValue.value = target.value
  emit('input', event)
}

const showClear = computed(
  () =>
    props.clearable && !!inputValue.value && !props.disabled && !props.readonly,
)

const valueLength = computed(() => {
  return String(inputValue.value).length
})
</script>

<template>
  <div :class="classes" v-bind="{ ...$attrs, ...props.pt?.root }">
    <!-- 前缀 -->
    <div
      v-if="$slots.prefix || prefixText"
      :class="prefixClasses"
      v-bind="props.pt?.prefix"
    >
      <slot name="prefix" v-if="$slots.prefix"></slot>
      <span v-else-if="prefixText">{{ prefixText }}</span>
    </div>

    <!-- 输入框 -->
    <input
      ref="inputRef"
      :class="inputClasses"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :type="type"
      :maxlength="maxlength"
      :aria-label="ariaLabel"
      :value="inputValue"
      :autofocus="autofocus"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      v-bind="props.pt?.input"
    />

    <!-- 后缀 -->
    <div :class="suffixClasses" v-bind="props.pt?.suffix">
      <!-- 清除按钮 -->
      <div
        v-if="showClear"
        :class="clearButtonClasses"
        @click="handleClear"
        v-bind="props.pt?.clearButton"
      >
        <slot name="clear" v-if="$slots.clear"></slot>
        <svg v-else class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <!-- 用户提供的后缀 -->
      <slot name="suffix" v-if="$slots.suffix"></slot>
      <span v-else-if="suffixText">{{ suffixText }}</span>

      <!-- 字数统计 -->
      <div
        v-if="showCount && maxlength"
        :class="counterClasses"
        v-bind="props.pt?.counter"
      >
        {{ valueLength }}/{{ maxlength }}
      </div>
    </div>
  </div>
</template>
