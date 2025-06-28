<template>
  <button
    :class="classes"
    :type="type"
    :disabled="disabled || loading"
    ref="_ref"
    @click="handleClick"
  >
    <span v-if="loading" :class="loaderClass">
      <span v-if="$slots.loading">
        <slot name="loading" />
      </span>
      <span
        v-else
        class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
      ></span>
    </span>
    <span v-else-if="$slots.icon" :class="iconClass">
      <slot name="icon" />
    </span>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { buttonStyle } from './index.variants'
import type { ButtonProps } from './type'
import { ButtonEmits } from './type'
import { useButton } from './use-button'
const emit = defineEmits(ButtonEmits)
const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: false,
  rounded: false,
  type: 'button',
  unstyled: false,
})
const { _ref, handleClick } = useButton(props, emit)

const classes = computed(() => {
  return props.unstyled
    ? props.pt?.root || ''
    : buttonStyle({
        variant: props.variant,
        size: props.size,
        fullWidth: props.fullWidth,
        rounded: props.rounded,
        disabled: props.disabled || props.loading,
        class: props.pt?.root,
      })
})

const loaderClass = computed(() => {
  return props.unstyled ? props.pt?.loader || '' : 'mr-2'
})

const iconClass = computed(() => {
  return props.unstyled ? props.pt?.icon || '' : ''
})

defineExpose({
  _ref,
  handleClick,
})
</script>
