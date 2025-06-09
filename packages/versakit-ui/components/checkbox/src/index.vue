<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  checkboxVariants,
  checkboxBoxVariants,
  checkboxLabelVariants,
  checkboxIconVariants,
} from './index.variants'
import type { CheckboxProps, CheckboxPassThroughAttributes } from './type'

const props = withDefaults(
  defineProps<CheckboxProps & { pt?: CheckboxPassThroughAttributes }>(),
  {
    modelValue: false,
    disabled: false,
    size: 'md',
    variant: 'primary',
    indeterminate: false,
    unstyled: false,
  },
)

const emit = defineEmits(['update:modelValue', 'change'])

const inputRef = ref<HTMLInputElement | null>(null)

watch(
  () => props.indeterminate,
  (val) => {
    if (inputRef.value) {
      inputRef.value.indeterminate = val
    }
  },
)

const wrapperClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return checkboxVariants({
    size: props.size,
  })
})

const boxClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return checkboxBoxVariants({
    size: props.size,
    variant: props.variant,
    disabled: props.disabled,
    indeterminate: props.indeterminate,
  })
})

const labelClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return checkboxLabelVariants({
    size: props.size,
    disabled: props.disabled,
  })
})

const iconClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return checkboxIconVariants({
    size: props.size,
  })
})

const handleChange = (event: Event) => {
  if (props.disabled) return

  const checked = (event.target as HTMLInputElement).checked
  emit('update:modelValue', checked)
  emit('change', checked)
}
</script>

<template>
  <label
    :class="wrapperClasses"
    @click.stop
    :aria-checked="modelValue"
    :aria-disabled="disabled"
    :aria-label="ariaLabel"
    role="checkbox"
    v-bind="{ ...$attrs, ...props.pt?.root }"
  >
    <input
      ref="inputRef"
      type="checkbox"
      class="peer sr-only"
      :checked="modelValue"
      :disabled="disabled"
      :name="name"
      :value="value"
      @change="handleChange"
      v-bind="props.pt?.input"
    />
    <span :class="boxClasses" v-bind="props.pt?.box">
      <span
        v-if="indeterminate"
        :class="iconClasses"
        v-bind="props.pt?.checkmark"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
        >
          <line x1="3" y1="8" x2="13" y2="8" />
        </svg>
      </span>
      <span
        v-else-if="modelValue"
        :class="iconClasses"
        v-bind="props.pt?.checkmark"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 13L9 17L19 7"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </span>
    <span v-if="$slots.default" :class="labelClasses" v-bind="props.pt?.label">
      <slot />
    </span>
  </label>
</template>
