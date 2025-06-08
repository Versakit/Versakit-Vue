<script setup lang="ts">
import { computed } from 'vue'
import { button } from './index.variants'
import type { BtnProps } from './type'

const props = withDefaults(defineProps<BtnProps>(), {
  variant: 'primary',
  size: 'md',
})

const classes = computed(() =>
  button({
    variant: props.variant,
    size: props.size,
  }),
)
</script>

<template>
  <button :class="classes" v-bind="$attrs">
    <slot />
  </button>
</template>
