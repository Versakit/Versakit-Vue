<template>
  <div class="badge-wrapper">
    <slot />
    <span
      v-if="visible"
      class="badge"
      :class="[positionClass, { 'badge-dot': dot }]"
    >
      <template v-if="!dot">{{ content }}</template>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useBadge } from '@versakit/composables'

interface BadgeProps {
  content?: string | number
  dot?: boolean
  show?: boolean
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
}

const props = withDefaults(defineProps<BadgeProps>(), {
  content: 'new',
  dot: false,
  show: true,
  position: 'top-right',
})

const { visible, positionClass } = useBadge(props)
</script>

<style scoped>
.badge-wrapper {
  position: relative;
  display: inline-block;
}

.badge {
  position: absolute;
  z-index: 10;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1rem;
  height: 1rem;
  padding: 0 4px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  color: white;
  background-color: #ef4444;
  border-radius: 9999px;
}

.badge-dot {
  width: 8px;
  height: 8px;
  min-width: 0;
  padding: 0;
}

/* 位置类 */
.top-right {
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
}

.top-left {
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
}

.bottom-right {
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%);
}

.bottom-left {
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
}
</style>
