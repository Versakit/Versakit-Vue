<template>
  <div :class="classes.root()">
    <div :class="[classes.wrapper(), props.readonly && 'cursor-default']">
      <!-- 前缀图标 -->
      <div v-if="props.prefixIcon" :class="classes.prefix()">
        <i :class="props.prefixIcon"></i>
      </div>

      <!-- 输入框 -->
      <input
        :type="props.type"
        :class="classes.input()"
        :value="inputValue"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        :readonly="props.readonly"
        :maxlength="props.maxlength"
        :autofocus="props.autofocus"
        ref="inputRef"
        @input="(e) => updateValue((e.target as HTMLInputElement).value)"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      />

      <!-- 清除按钮 -->
      <div
        v-if="
          props.clearable && inputValue && !props.disabled && !props.readonly
        "
        :class="[classes.suffix(), classes.clear()]"
        @click="clearInput"
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
      </div>

      <!-- 后缀图标 -->
      <div v-if="props.suffixIcon" :class="classes.suffix()">
        <i :class="props.suffixIcon"></i>
      </div>
    </div>

    <!-- 字数统计 -->
    <div v-if="props.showCount && props.maxlength" :class="classes.count()">
      {{ inputValue.length }}/{{ props.maxlength }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { inputStyle } from './index.variants'
import { useInput } from './composables/useInput'
import type { InputProps } from './type'

defineOptions({
  name: 'VersaInput',
})

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  modelValue: '',
  disabled: false,
  readonly: false,
  size: 'default',
  clearable: false,
  showCount: false,
  autofocus: false,
})

const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'clear'])

const { inputValue, inputRef, updateValue, clearInput, focus, blur } = useInput(
  {
    modelValue: props.modelValue,
    type: props.type,
    disabled: props.disabled,
    readonly: props.readonly,
    maxlength: props.maxlength,
    onChange: (val) => emit('update:modelValue', val),
  },
)

const classes = computed(() =>
  inputStyle({
    size: props.size,
    status: props.status,
    disabled: props.disabled,
  }),
).value

defineExpose({
  focus,
  blur,
  inputRef,
})
</script>
