<template>
  <div :class="['avatar', shapeClass, sizeClass]">
    <img
      v-if="!isError && src"
      :src="src"
      :alt="alt"
      class="avatar-image"
      @load="onLoad"
      @error="onError"
    />
    <slot v-else>
      <span>{{ fallbackText }}</span>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAvatar } from '@versakit/composables'

const props = defineProps<{
  src?: string
  alt?: string
  name?: string
  size?: 'sm' | 'md' | 'lg'
  shape?: 'circle' | 'square'
}>()

const { isError, onLoad, onError } = useAvatar(props.src)

const fallbackText = computed(() => {
  if (props.name) {
    const parts = props.name.split(' ')
    return parts.length >= 2
      ? parts[0][0] + parts[1][0]
      : props.name.slice(0, 2)
  }
  return '👤'
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'avatar-sm'
    case 'lg':
      return 'avatar-lg'
    case 'md':
    default:
      return 'avatar-md'
  }
})

const shapeClass = computed(() =>
  props.shape === 'square' ? 'avatar-square' : 'avatar-circle',
)
</script>

<style scoped>
.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #e5e7eb;
  color: white;
  font-weight: 600;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 尺寸类 */
.avatar-sm {
  width: 2rem; /* 32px */
  height: 2rem;
  font-size: 0.75rem; /* 12px */
}

.avatar-md {
  width: 3rem; /* 48px */
  height: 3rem;
  font-size: 1rem; /* 16px */
}

.avatar-lg {
  width: 4rem; /* 64px */
  height: 4rem;
  font-size: 1.25rem; /* 20px */
}

/* 形状类 */
.avatar-circle {
  border-radius: 50%;
}

.avatar-square {
  border-radius: 0.375rem; /* 6px */
}
</style>
