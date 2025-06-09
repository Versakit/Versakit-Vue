<script setup lang="ts">
import { computed, ref } from 'vue'
import { tagInput, tagInputField, tag, tagDeleteButton } from './index.variants'
import type { TagInputProps, TagInputPassThroughAttributes, Tag } from './type'

const props = withDefaults(
  defineProps<TagInputProps & { pt?: TagInputPassThroughAttributes }>(),
  {
    size: 'md',
    variant: 'outline',
    placeholder: '',
    disabled: false,
    readonly: false,
    allowDuplicates: false,
    delimiters: () => [',', 'Enter'],
    freeInput: true,
    status: 'default',
    unstyled: false,
  },
)

const emit = defineEmits([
  'update:modelValue',
  'add',
  'remove',
  'input',
  'focus',
  'blur',
])

const inputRef = ref<HTMLInputElement | null>(null)
const inputValue = ref('')
const isFocused = ref(false)

const tags = computed({
  get: () => props.modelValue || [],
  set: (value: Tag[]) => emit('update:modelValue', value),
})

const classes = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return tagInput({
    variant: props.variant,
    status: props.status,
    disabled: props.disabled,
  })
})

const inputClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return tagInputField({
    size: props.size,
    disabled: props.disabled || props.readonly,
  })
})

const tagClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return tag({
    size: props.size,
  })
})

const tagDeleteClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return tagDeleteButton()
})

const isMaxReached = computed(() => {
  return props.max !== undefined && tags.value.length >= props.max
})

const addTag = (label: string) => {
  if (!label.trim() || props.disabled || props.readonly || isMaxReached.value)
    return

  // 检查是否允许重复
  if (
    !props.allowDuplicates &&
    tags.value.some(
      (tag) => tag.label.toLowerCase() === label.trim().toLowerCase(),
    )
  ) {
    return
  }

  // 检查是否在选项中（如果设置了选项且不允许自由输入）
  if (!props.freeInput && props.options) {
    const option = props.options.find(
      (opt) => opt.label.toLowerCase() === label.trim().toLowerCase(),
    )
    if (!option) return

    // 如果找到选项，使用该选项添加
    const newTag = { ...option }
    tags.value = [...tags.value, newTag]
    emit('add', newTag)
    inputValue.value = ''
    return
  }

  // 自由输入模式，创建新标签
  const newTag: Tag = {
    id: Date.now(),
    label: label.trim(),
  }

  tags.value = [...tags.value, newTag]
  emit('add', newTag)
  inputValue.value = ''
}

const removeTag = (index: number) => {
  if (props.disabled || props.readonly) return

  const removedTag = tags.value[index]
  const newTags = [...tags.value]
  newTags.splice(index, 1)

  tags.value = newTags
  emit('remove', removedTag, index)
}

const handleKeyDown = (event: KeyboardEvent) => {
  // 处理分隔符
  if (props.delimiters && props.delimiters.includes(event.key)) {
    event.preventDefault()
    addTag(inputValue.value)
    return
  }

  // 处理退格键删除最后一个标签
  if (
    event.key === 'Backspace' &&
    inputValue.value === '' &&
    tags.value.length > 0
  ) {
    removeTag(tags.value.length - 1)
  }
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  inputValue.value = target.value
  emit('input', event)
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false

  // 在失焦时，如果有输入内容，自动添加为标签
  if (inputValue.value.trim()) {
    addTag(inputValue.value)
  }

  emit('blur', event)
}

const focusInput = () => {
  if (!props.disabled && !props.readonly) {
    inputRef.value?.focus()
  }
}
</script>

<template>
  <div
    :class="classes"
    @click="focusInput"
    v-bind="{ ...$attrs, ...props.pt?.root }"
  >
    <!-- 已选择的标签 -->
    <template v-for="(item, index) in tags" :key="item.id || index">
      <div v-if="$slots.tag" v-bind="props.pt?.tag">
        <slot name="tag" :tag="item" :index="index" :handleRemove="removeTag" />
      </div>
      <div v-else :class="tagClasses" v-bind="props.pt?.tag">
        <span v-bind="props.pt?.tagContent">{{ item.label }}</span>
        <span
          v-if="!disabled && !readonly"
          :class="tagDeleteClasses"
          @click.stop="removeTag(index)"
          v-bind="props.pt?.tagDelete"
          aria-label="删除标签"
        >
          <svg
            class="w-3 h-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>
    </template>

    <!-- 输入框 -->
    <div v-bind="props.pt?.inputWrapper">
      <input
        v-show="!isMaxReached"
        ref="inputRef"
        :class="inputClasses"
        :placeholder="placeholder"
        :disabled="disabled || isMaxReached"
        :readonly="readonly"
        :value="inputValue"
        :aria-label="ariaLabel"
        @keydown="handleKeyDown"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        v-bind="props.pt?.input"
      />
    </div>
  </div>
</template>
