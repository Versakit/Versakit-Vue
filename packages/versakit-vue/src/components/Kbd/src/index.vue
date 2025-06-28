<template>
  <kbd :class="rootClass">
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
  variant: 'default',
  unstyled: false,
})

const rootClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.root || ''
  }

  return kbdStyle({
    size: props.size,
    variant: props.variant,
    class: props.pt?.root,
  })
})
</script>
