<template>
  <span
    :class="rootClass"
    role="option"
    :aria-selected="isSelected"
    @click="toggle"
  >
    <!-- Dot (用于dot变体) -->
    <span v-if="variant === 'dot'" :class="dotClass"></span>

    <!-- Avatar -->
    <slot v-if="$slots.avatar" name="avatar" :class="avatarClass"></slot>
    <slot v-else-if="avatar" name="avatarFallback" :class="avatarClass">
      <span :class="avatarClass">
        <component :is="avatar" />
      </span>
    </slot>

    <!-- 开始内容 -->
    <slot
      v-if="$slots.startContent"
      name="startContent"
      :class="startContentClass"
    ></slot>
    <slot
      v-else-if="startContent"
      name="startContentFallback"
      :class="startContentClass"
    >
      <span :class="startContentClass">
        <component :is="startContent" />
      </span>
    </slot>

    <!-- 主要内容 -->
    <span :class="contentClass">
      <slot />
    </span>

    <!-- 结束内容 -->
    <slot
      v-if="$slots.endContent"
      name="endContent"
      :class="endContentClass"
    ></slot>
    <slot
      v-else-if="endContent"
      name="endContentFallback"
      :class="endContentClass"
    >
      <span :class="endContentClass">
        <component :is="endContent" />
      </span>
    </slot>

    <!-- 关闭按钮 -->
    <button
      v-if="isClosable"
      type="button"
      :class="closeButtonClass"
      @click.stop="handleClose"
      aria-label="关闭"
      :disabled="disabled"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="opacity-70 hover:opacity-100"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useChip } from './composables/useChip'
import { chipStyle } from './index.variants'
import type { ChipProps } from './type'

const props = withDefaults(defineProps<ChipProps>(), {
  modelValue: false,
  selectable: false,
  disabled: false,
  closable: false,
  variant: 'solid',
  color: 'default',
  size: 'md',
  radius: 'full',
  unstyled: false,
})

const emit = defineEmits(['update:modelValue', 'close'])

const { isSelected, isClosable, toggle, handleClose } = useChip({
  modelValue: props.modelValue,
  selectable: props.selectable,
  disabled: props.disabled,
  closable: props.closable,
  onClose: (event) => emit('close', event),
  onChange: (val: boolean) => emit('update:modelValue', val),
})

// 主要样式
const rootClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.root || ''
  }

  return chipStyle({
    variant: props.variant,
    color: props.color,
    size: props.size,
    radius: props.radius,
    selected: isSelected.value,
    disabled: props.disabled,
    class: props.pt?.root,
  })
})

// dot变体的点样式
const dotClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.dot || ''
  }

  const colorClasses = {
    default: 'bg-zinc-500',
    primary: 'bg-blue-500',
    secondary: 'bg-purple-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    danger: 'bg-red-500',
  }

  return [
    'mr-1.5 h-2 w-2 rounded-full',
    colorClasses[props.color || 'default'],
    props.pt?.dot,
  ]
})

const avatarClass = computed(() => {
  return props.unstyled ? props.pt?.avatar || '' : 'flex shrink-0 mr-1.5'
})

const startContentClass = computed(() => {
  return props.unstyled ? props.pt?.startContent || '' : 'flex shrink-0 mr-1.5'
})

const contentClass = computed(() => {
  return props.unstyled ? props.pt?.content || '' : 'truncate'
})

const endContentClass = computed(() => {
  return props.unstyled ? props.pt?.endContent || '' : 'flex shrink-0 ml-1.5'
})

const closeButtonClass = computed(() => {
  return props.unstyled
    ? props.pt?.closeButton || ''
    : 'ml-1.5 flex-shrink-0 flex items-center justify-center rounded-full hover:bg-black/5 focus:outline-none focus:bg-black/10 w-4 h-4'
})
</script>
