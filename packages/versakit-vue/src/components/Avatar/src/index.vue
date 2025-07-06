<script setup lang="ts">
import { computed } from 'vue'
import { useAvatar } from './composables/useAvatar'
import { avatar } from './index.variants'
import type { AvatarProps } from './type'

defineOptions({
  name: 'Avatar',
})

const props = withDefaults(defineProps<AvatarProps>(), {
  size: 'md',
  shape: 'circle',
  status: 'none',
  alt: '',
  fallback: '',
  unstyled: false,
})

const { isError, onLoad, onError } = useAvatar()

const avatarClass = computed(() => {
  return props.unstyled
    ? props.pt?.root || ''
    : avatar({
        size: props.size,
        shape: props.shape,
        status: props.status,
        class: props.pt?.root,
      })
})

const imageClass = computed(() => {
  return props.unstyled ? props.pt?.image || '' : 'w-full h-full object-cover'
})

const fallbackClass = computed(() => {
  return props.unstyled
    ? props.pt?.fallback || ''
    : 'w-full h-full flex items-center justify-center'
})

const initialsClass = computed(() => {
  return props.unstyled
    ? props.pt?.initials || ''
    : 'w-full h-full flex items-center justify-center'
})

const iconClass = computed(() => {
  return props.unstyled ? props.pt?.icon || '' : 'w-1/2 h-1/2'
})

const initials = computed(() => {
  if (!props.alt) return ''
  return props.alt
    .split(' ')
    .map((word) => word.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase()
})

const showFallback = computed(() => !props.src || isError.value)
</script>

<template>
  <div :class="avatarClass">
    <img
      v-if="!showFallback"
      :src="src"
      :alt="alt"
      :class="imageClass"
      @load="onLoad"
      @error="onError"
    />
    <span v-else-if="fallback" :class="fallbackClass">
      <img :src="fallback" :alt="alt" :class="imageClass" />
    </span>
    <span v-else-if="alt" :class="initialsClass">
      {{ initials }}
    </span>
    <span v-else :class="fallbackClass">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        :class="iconClass"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </span>
  </div>
</template>
