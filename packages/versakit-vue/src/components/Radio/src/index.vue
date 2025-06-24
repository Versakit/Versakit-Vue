<template>
  <label
    :class="[classes.root(), props.className]"
    :tabindex="disabled ? undefined : 0"
    @click.prevent="toggle"
    @keydown="onKeyDown"
  >
    <input
      type="radio"
      class="sr-only"
      :checked="checked"
      :disabled="disabled"
      :value="props.value"
      :name="name"
      :required="props.required"
      :autofocus="props.autofocus"
      @focus="onFocus"
      @blur="onBlur"
    />
    <div :class="classes.radio()">
      <span :class="classes.dot()" v-if="checked">
        <span :class="classes.inner()"></span>
      </span>
    </div>
    <span v-if="props.label" :class="classes.label()">{{ props.label }}</span>
    <slot v-else></slot>
  </label>
</template>

<script setup lang="ts">
import { computed, inject, ref, onMounted } from 'vue'
import { radioStyle } from './index.variants'
import type { RadioProps, RadioEmits } from './type'

defineOptions({
  name: 'Radio',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<RadioProps>(), {
  disabled: false,
  size: 'default',
  color: 'blue',
  labelPosition: 'right',
  autofocus: false,
  required: false,
})

const emit = defineEmits<RadioEmits>()

// 支持RadioGroup注入
const radioGroupModelValue = inject<any>('radioGroupModelValue', undefined)
const radioGroupDisabled = inject<boolean>('radioGroupDisabled', false)
const radioGroupName = inject<string>('radioGroupName', '')
const radioGroupChange = inject<(val: any) => void>(
  'radioGroupChange',
  () => {},
)

// 引用元素
const inputRef = ref<HTMLInputElement | null>(null)

// 计算属性
const name = computed(() => radioGroupName || props.name || '')
const disabled = computed(() => props.disabled || radioGroupDisabled)

const checked = computed(() => {
  const modelValue =
    radioGroupModelValue !== undefined ? radioGroupModelValue : props.modelValue
  return modelValue === props.value
})

// 方法
const toggle = () => {
  if (disabled.value || checked.value) return

  const value = props.value as string | number | boolean

  if (radioGroupModelValue !== undefined) {
    radioGroupChange(value)
  } else {
    emit('update:modelValue', value)
    emit('change', value)
  }
}

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    toggle()
  }
}

const onFocus = (e: FocusEvent) => {
  emit('focus', e)
}

const onBlur = (e: FocusEvent) => {
  emit('blur', e)
}

// 样式
const classes = computed(() =>
  radioStyle({
    checked: checked.value,
    disabled: disabled.value,
    size: props.size,
    color: props.color,
    labelPosition: props.labelPosition,
  }),
).value

// 生命周期
onMounted(() => {
  if (props.autofocus && inputRef.value) {
    inputRef.value.focus()
  }
})
</script>
