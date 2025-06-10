<script setup lang="ts">
import { computed } from 'vue'
import { kbd } from './index.variants'
import type { KbdProps, KbdPassThroughAttributes } from './type'

const props = withDefaults(
  defineProps<KbdProps & { pt?: KbdPassThroughAttributes }>(),
  {
    variant: 'default',
    size: 'md',
    disabled: false,
    unstyled: false,
  },
)

const classes = computed(() => {
  if (props.unstyled) {
    return {}
  }

  return kbd({
    variant: props.variant,
    size: props.size,
    disabled: props.disabled,
  })
})
</script>

<template>
  <kbd
    :class="classes"
    :aria-disabled="disabled"
    :aria-label="ariaLabel"
    v-bind="{ ...$attrs, ...props.pt?.root }"
  >
    <slot />
  </kbd>
</template>
