<script setup lang="ts">
import { computed, provide } from 'vue'
import { avatarGroup, avatarOverflow } from './index.variants'
import type { AvatarGroupProps, AvatarGroupPassThroughAttributes } from './type'
import { avatar } from '../../avatar/src/index.variants'
import type { AvatarSize } from '../../avatar/src/type'

interface Props extends AvatarGroupProps {
  pt?: AvatarGroupPassThroughAttributes
}

const props = withDefaults(defineProps<Props>(), {
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
  unstyled: false,
})

// 计算组件样式
const groupClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }

  return avatarGroup({
    stack: props.stack,
    class: props.customClass,
  })
})

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
  if (props.unstyled) {
    return {}
  }

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
  unstyled: props.unstyled,
  childStyles: getChildStyles(),
})
</script>

<template>
  <div :class="groupClasses" v-bind="{ ...$attrs, ...props.pt?.root }">
    <slot />

    <!-- 溢出头像 -->
    <div
      v-if="$slots.default && max < Infinity"
      :class="overflowAvatarClasses"
      :style="overflowAvatarStyle"
      v-bind="props.pt?.overflow"
    >
      <slot name="overflow" v-if="$slots.overflow" />
      <template v-else>{{ overflowText }}</template>
    </div>
  </div>
</template>
