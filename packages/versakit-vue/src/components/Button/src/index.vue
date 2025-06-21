<template>
  <button :class="classes" :type="type" :disabled="disabled || loading">
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

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: false,
  rounded: false,
  type: 'button',
})

const classes = computed(() =>
  buttonStyle({
    variant: props.variant,
    size: props.size,
    fullWidth: props.fullWidth,
    rounded: props.rounded,
  }),
)
</script>
