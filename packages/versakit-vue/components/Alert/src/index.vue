<template>
  <div :class="classes">
    <!-- 图标 -->
    <div v-if="$slots.icon" class="shrink-0 mt-0.5">
      <slot name="icon" />
    </div>

    <!-- 内容区域 -->
    <div class="flex flex-col">
      <p v-if="$slots.title" class="font-medium leading-snug mb-0.5">
        <slot name="title" />
      </p>
      <div class="leading-snug">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { alertStyle } from './index.variants'
import type { AlertProps } from './type'

const props = withDefaults(defineProps<AlertProps>(), {
  variant: 'info',
  size: 'md',
})

const classes = computed(() =>
  alertStyle({
    variant: props.variant,
    size: props.size,
  }),
)
</script>
