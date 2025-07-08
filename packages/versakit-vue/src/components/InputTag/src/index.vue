<template>
  <div :class="classes.root()">
    <div :class="classes.wrapper()">
      <div v-if="$slots.prefix || prefixIcon" :class="classes.prefix()">
        <slot name="prefix">
          <span v-if="prefixIcon">{{ prefixIcon }}</span>
        </slot>
      </div>
      <template v-for="(tag, index) in modelValue" :key="index">
        <div :class="classes.tag()">
          {{ tag }}
          <span
            v-if="closable && !disabled && !readonly"
            :class="classes.tagClose()"
            @click="removeTag(index)"
          >
            ×
          </span>
        </div>
      </template>
      <input
        ref="inputRef"
        :class="classes.input()"
        :type="'text'"
        :placeholder="!modelValue?.length ? placeholder : ''"
        :disabled="disabled"
        :readonly="readonly"
        :autofocus="autofocus"
        v-model="inputValue"
        @keydown.enter.prevent="addTag"
        @keydown.backspace="handleBackspace"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      <div v-if="$slots.suffix || suffixIcon" :class="classes.suffix()">
        <slot name="suffix">
          <span v-if="suffixIcon">{{ suffixIcon }}</span>
        </slot>
      </div>
      <span v-if="showCount && maxCount" :class="classes.count()">
        {{ modelValue?.length || 0 }}/{{ maxCount }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import type { InputTagProps } from './type'
import { inputTagStyle } from './index.variants'

const props = withDefaults(defineProps<InputTagProps>(), {
  modelValue: () => [],
  placeholder: '',
  disabled: false,
  readonly: false,
  size: 'default',
  closable: true,
  showCount: false,
  autofocus: false,
  unstyled: false,
})

const emit = defineEmits([
  'update:modelValue',
  'change',
  'focus',
  'blur',
  'add',
  'remove',
])

const inputRef = ref<HTMLInputElement | null>(null)
const inputValue = ref('')
const isFocused = ref(false)

const classes = computed(() => {
  if (props.unstyled) {
    return {
      root: () => props.pt?.root || '',
      wrapper: () => props.pt?.wrapper || '',
      input: () => props.pt?.input || '',
      prefix: () => props.pt?.prefix || '',
      suffix: () => props.pt?.suffix || '',
      tag: () => props.pt?.tag || '',
      tagClose: () => props.pt?.tagClose || '',
      count: () => props.pt?.count || '',
    }
  }

  return inputTagStyle({
    size: props.size,
    status: props.status,
    disabled: props.disabled,
  })
})

const addTag = () => {
  if (!inputValue.value || props.disabled || props.readonly) return
  if (props.maxCount && props.modelValue.length >= props.maxCount) return

  const newValue = [...props.modelValue]
  // 避免重复添加
  if (!newValue.includes(inputValue.value)) {
    newValue.push(inputValue.value)
    emit('update:modelValue', newValue)
    emit('change', newValue)
    emit('add', inputValue.value)
    inputValue.value = ''
  } else {
    inputValue.value = ''
  }
}

const removeTag = (index: number) => {
  if (props.disabled || props.readonly) return

  const newValue = [...props.modelValue]
  const removedTag = newValue[index]
  newValue.splice(index, 1)
  emit('update:modelValue', newValue)
  emit('change', newValue)
  emit('remove', removedTag, index)
}

const handleBackspace = () => {
  if (
    inputValue.value === '' &&
    props.modelValue.length > 0 &&
    !props.disabled &&
    !props.readonly
  ) {
    const newValue = [...props.modelValue]
    const lastIndex = newValue.length - 1
    const removedTag = newValue[lastIndex]
    newValue.pop()
    emit('update:modelValue', newValue)
    emit('change', newValue)
    emit('remove', removedTag, lastIndex)
  }
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  if (inputValue.value) {
    addTag()
  }
  emit('blur', event)
}

// 当autofocus属性为true时，自动聚焦到输入框
watch(
  () => props.autofocus,
  (val) => {
    if (val && inputRef.value) {
      inputRef.value.focus()
    }
  },
  { immediate: true },
)
</script>
