<template>
  <div :class="rootClass">
    <!-- 卡片标题 -->
    <div v-if="$slots.header" :class="headerClass">
      <slot name="header" />
    </div>

    <!-- 卡片内容 -->
    <div :class="bodyClass">
      <slot />
    </div>

    <!-- 卡片底部 -->
    <div v-if="$slots.footer" :class="footerClass">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cardStyle } from './index.variants'
import type { CardProps } from './type'

const props = withDefaults(defineProps<CardProps>(), {
  variant: 'default',
  padding: 'md',
  radius: 'md',
  hover: false,
  unstyled: false,
})

const rootClass = computed(() => {
  return props.unstyled
    ? props.pt?.root || ''
    : cardStyle({
        variant: props.variant,
        padding: props.padding,
        radius: props.radius,
        hover: props.hover,
        class: props.pt?.root,
      })
})

const headerClass = computed(() => {
  return props.unstyled ? props.pt?.header || '' : 'mb-4'
})

const bodyClass = computed(() => {
  return props.unstyled ? props.pt?.body || '' : ''
})

const footerClass = computed(() => {
  return props.unstyled ? props.pt?.footer || '' : 'mt-4 flex justify-end'
})
</script>
