<template>
  <div class="w-full">
    <textarea
      :class="classes"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :rows="rows"
      :maxlength="maxLength"
      :minlength="minLength"
      @input="handleInput"
    />
    <div
      v-if="showCount && maxLength"
      class="mt-1 text-right text-sm text-gray-500"
    >
      {{ modelValue?.length || 0 }}/{{ maxLength }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { textareaStyle } from './index.variants'
import type { TextareaProps } from './type'

const props = withDefaults(defineProps<TextareaProps>(), {
  modelValue: '',
  placeholder: '',
  disabled: false,
  readonly: false,
  rows: 4,
  maxLength: undefined,
  minLength: undefined,
  autosize: false,
  resize: 'vertical',
  showCount: false,
  size: 'md',
  status: undefined,
})

const emit = defineEmits(['update:modelValue'])

const classes = computed(() =>
  textareaStyle({
    size: props.size,
    status: props.status,
    resize: props.resize,
  }),
)

const handleInput = (e: Event) => {
  const target = e.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
  if (props.autosize) {
    adjustHeight(target)
  }
}

const adjustHeight = (element: HTMLTextAreaElement) => {
  element.style.height = 'auto'
  element.style.height = `${element.scrollHeight}px`
}

onMounted(() => {
  if (props.autosize) {
    const textarea = document.querySelector('textarea')
    if (textarea) {
      adjustHeight(textarea)
    }
  }
})
</script>
