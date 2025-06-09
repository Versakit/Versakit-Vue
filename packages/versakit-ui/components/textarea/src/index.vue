<script setup lang="ts">
import { computed, ref, onMounted, onUpdated, watch } from 'vue'
import {
  textareaVariants,
  textareaFieldVariants,
  textareaCounterVariants,
} from './index.variants'
import type { TextareaProps, TextareaPassThroughAttributes } from './type'

const props = withDefaults(
  defineProps<TextareaProps & { pt?: TextareaPassThroughAttributes }>(),
  {
    modelValue: '',
    placeholder: '',
    disabled: false,
    readonly: false,
    size: 'md',
    status: 'default',
    autoResize: false,
    rows: 3,
    unstyled: false,
  },
)

const emit = defineEmits([
  'update:modelValue',
  'change',
  'input',
  'focus',
  'blur',
])

const textareaRef = ref<HTMLTextAreaElement | null>(null)
const textLength = computed(() => props.modelValue?.length || 0)

const wrapperClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return textareaVariants({})
})

const textareaClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return textareaFieldVariants({
    size: props.size,
    status: props.status,
    disabled: props.disabled,
  })
})

const counterClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return textareaCounterVariants({})
})

const resizeTextarea = () => {
  if (!props.autoResize || !textareaRef.value) return

  // 自动调整高度
  const textarea = textareaRef.value
  textarea.style.height = 'auto'
  textarea.style.height = `${textarea.scrollHeight}px`
}

watch(
  () => props.modelValue,
  () => {
    if (props.autoResize) {
      resizeTextarea()
    }
  },
)

onMounted(() => {
  if (props.autoResize) {
    resizeTextarea()
  }
})

onUpdated(() => {
  if (props.autoResize) {
    resizeTextarea()
  }
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
  emit('input', event)
}

const handleChange = (event: Event) => {
  emit('change', event)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}
</script>

<template>
  <div :class="wrapperClasses" v-bind="{ ...$attrs, ...props.pt?.root }">
    <textarea
      ref="textareaRef"
      :class="textareaClasses"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :rows="rows"
      :maxlength="maxLength"
      :aria-label="ariaLabel"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      v-bind="props.pt?.textarea"
    />
    <div v-if="maxLength" :class="counterClasses" v-bind="props.pt?.counter">
      {{ textLength }}/{{ maxLength }}
    </div>
  </div>
</template>
