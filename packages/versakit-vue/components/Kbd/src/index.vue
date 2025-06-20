<template>
  <kbd :class="classes">
    <slot />
  </kbd>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { kbdStyle } from './index.variants'
import type { KbdProps } from './type'

defineOptions({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Kbd',
})

const props = withDefaults(defineProps<KbdProps>(), {
  size: 'md',
  variant: 'solid',
})

const classes = computed(() =>
  kbdStyle({
    size: props.size,
    variant: props.variant,
  }),
)
</script>
