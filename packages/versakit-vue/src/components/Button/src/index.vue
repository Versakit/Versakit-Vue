<template>
  <button
    :class="classes"
    :type="type"
    :disabled="disabled || loading"
    ref="_ref"
    @click="handleClick"
  >
    <span v-if="loading" class="mr-2">
      <span
        class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
      ></span>
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
})
const { _ref, handleClick } = useButton(props, emit)

const classes = computed(() =>
  buttonStyle({
    variant: props.variant,
    size: props.size,
    fullWidth: props.fullWidth,
    rounded: props.rounded,
    disabled: props.disabled || props.loading,
  }),
)
defineExpose({
  _ref,
  handleClick,
})
</script>
