<script setup lang="ts">
import { computed, toRefs } from 'vue'
import type { AvatarProps, PtProps } from '../type/index'

defineOptions({ name: 'VKAvatar' })

const props = withDefaults(defineProps<AvatarProps>(), {
  size: 'default',
  shape: 'circle',
  backgroundColor: '#cccccc',
  color: '',
  unstyled: false,
  pt: () => ({}),
})

const { shape, size, src, backgroundColor, color, text } = toRefs(props)

// 常量尺寸映射
const SIZE_MAP = {
  small: 32,
  default: 40,
  large: 48,
} as const

const avatarSize = computed(() =>
  typeof size.value === 'number'
    ? `${size.value}px`
    : `${SIZE_MAP[size.value]}px`,
)

const fontSize = computed(() => {
  const baseSize =
    typeof size.value === 'number'
      ? size.value
      : SIZE_MAP[size.value as keyof typeof SIZE_MAP]
  return `${baseSize / 2.5}px`
})

const firstLetter = computed(
  () => text.value?.trim().charAt(0).toUpperCase() || '',
)

const handleImgError = (e: Event) => {
  ;(e.target as HTMLImageElement).style.display = 'none'
}

// pt 处理函数
const getPtClasses = (key: keyof PtProps) => {
  const ptValue = props.pt?.[key]
  if (!ptValue) return ''

  if (typeof ptValue === 'string') return ptValue
  if (Array.isArray(ptValue)) return ptValue.join(' ')
  if (typeof ptValue === 'object') {
    return Object.entries(ptValue)
      .filter(([, v]) => v)
      .map(([, v]) => (typeof v === 'string' ? v : ''))
      .filter(Boolean)
      .join(' ')
  }

  return ''
}

const rootClass = computed(() => {
  const classes = []
  const ptRoot = getPtClasses('root')
  if (ptRoot) classes.push(ptRoot)
  if (!props.unstyled) classes.push('vk-avatar')
  return classes
})

const shapeClass = computed(() => {
  if (props.unstyled) return []
  return {
    'is-circle': shape.value === 'circle',
    'is-square': shape.value === 'square',
  }
})

const imageClass = computed(() => {
  const classes = []
  const ptImg = getPtClasses('image')
  if (ptImg) classes.push(ptImg)
  return classes
})

const textClass = computed(() => {
  const classes = []
  const ptText = getPtClasses('text')
  if (ptText) classes.push(ptText)
  return classes
})
</script>

<template>
  <div
    :class="[rootClass, shapeClass]"
    :style="{
      width: avatarSize,
      height: avatarSize,
      backgroundColor: !src ? backgroundColor : undefined,
      color: !src ? color : undefined,
      fontSize: !src ? fontSize : undefined,
    }"
    :aria-label="text ? `Avatar for ${text}` : 'User avatar with initials'"
  >
    <img
      v-if="src"
      :src="src"
      :class="imageClass"
      alt="avatar"
      role="img"
      @error="handleImgError"
    />
    <span
      v-else-if="text && firstLetter"
      :class="textClass"
      role="img"
      aria-hidden="true"
    >
      {{ firstLetter }}
    </span>
    <slot v-else />
  </div>
</template>

<style scoped>
@import url('../style/index.css');
</style>
