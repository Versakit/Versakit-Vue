<script setup lang="ts">
import { computed, provide } from 'vue'
import { avatarGroup, avatarOverflow } from './index.variants'
import type { AvatarGroupProps } from './type'
import { avatar } from '../../avatar/src/index.variants'
import type { AvatarSize } from '../../avatar/src/type'

const props = withDefaults(defineProps<AvatarGroupProps>(), {
  size: 'md',
  shape: 'circle',
  variant: 'default',
  max: Infinity,
  spacing: '-0.5rem',
  customClass: '',
  overflowText: '+',
  stack: false,
  borderWidth: '2px',
  borderColor: 'white',
})

// 计算组件样式
const groupClasses = computed(() =>
  avatarGroup({
    stack: props.stack,
    class: props.customClass,
  }),
)

// 计算组内子头像的样式
const getChildStyles = () => {
  const styles: Record<string, string> = {}

  if (props.spacing) {
    if (props.stack) {
      styles.marginRight =
        typeof props.spacing === 'number' ? `${props.spacing}px` : props.spacing
    } else {
      styles.marginLeft =
        typeof props.spacing === 'number' ? `${props.spacing}px` : props.spacing
    }
  }

  if (props.borderWidth) {
    styles.borderWidth =
      typeof props.borderWidth === 'number'
        ? `${props.borderWidth}px`
        : props.borderWidth
    styles.borderStyle = 'solid'
    styles.borderColor = props.borderColor
  }

  return styles
}

// 溢出显示样式
const overflowAvatarClasses = computed(() => {
  return [
    avatarOverflow(),
    avatar({
      size:
        typeof props.size === 'string' ? (props.size as AvatarSize) : undefined,
      shape: props.shape,
    }),
  ]
})

// 计算溢出头像的样式
const overflowAvatarStyle = computed(() => {
  const styles: Record<string, string> = {}

  if (typeof props.size === 'number') {
    styles.width = `${props.size}px`
    styles.height = `${props.size}px`
    styles.fontSize = `${Math.floor(props.size / 2.5)}px`
  }

  return {
    ...styles,
    ...getChildStyles(),
  }
})

// 为子组件提供配置
provide('avatar-group-context', {
  size: props.size,
  shape: props.shape,
  variant: props.variant,
  childStyles: getChildStyles(),
})
</script>

<template>
  <div :class="groupClasses">
    <slot />

    <!-- 溢出头像 -->
    <div
      v-if="$slots.default && max < Infinity"
      :class="overflowAvatarClasses"
      :style="overflowAvatarStyle"
    >
      {{ overflowText }}
    </div>
  </div>
</template>
