<template>
  <div :class="classes">
    <!-- 卡片标题 -->
    <div v-if="$slots.header" class="mb-4">
      <slot name="header" />
    </div>

    <!-- 卡片内容 -->
    <div>
      <slot />
    </div>

    <!-- 卡片底部 -->
    <div v-if="$slots.footer" class="mt-4 flex justify-end">
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
})

const classes = computed(() =>
  cardStyle({
    variant: props.variant,
    padding: props.padding,
    radius: props.radius,
    hover: props.hover,
  }),
)
</script>
