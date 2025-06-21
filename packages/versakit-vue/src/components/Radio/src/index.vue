<template>
  <label
    :class="classes.root()"
    @click.prevent="toggle"
    @keydown="onKeyDown"
    tabindex="0"
  >
    <input
      type="radio"
      class="sr-only"
      :checked="checked"
      :disabled="props.disabled"
      :value="props.value"
      :name="name"
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
import { computed, inject, ref } from 'vue'
import { useRadio } from './composables/useRadio'
import { radioStyle } from './index.variants'
import type { RadioProps } from './type'

defineOptions({
  name: 'Radio',
})

const props = withDefaults(defineProps<RadioProps>(), {
  disabled: false,
  size: 'default',
  color: 'blue',
})

const emit = defineEmits(['update:modelValue'])

// 支持RadioGroup注入
const radioGroupModelValue = inject<any>('radioGroupModelValue', undefined)
const radioGroupDisabled = inject<boolean>('radioGroupDisabled', false)
const radioGroupName = inject<string>('radioGroupName', '')

const name = ref(radioGroupName || '')

const { checked, toggle, onKeyDown } = useRadio({
  modelValue:
    radioGroupModelValue !== undefined
      ? radioGroupModelValue
      : props.modelValue,
  value: props.value,
  disabled: props.disabled || radioGroupDisabled,
  onChange: (val) => {
    if (radioGroupModelValue !== undefined) {
      // 通过RadioGroup处理
      return
    }
    emit('update:modelValue', val)
  },
})

const classes = computed(() =>
  radioStyle({
    checked: checked.value,
    disabled: props.disabled || radioGroupDisabled,
    size: props.size,
    color: props.color,
  }),
).value
</script>
