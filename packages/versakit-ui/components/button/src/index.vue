<script setup lang="ts">
import { computed } from 'vue'
import { button } from './index.variants'
import type { BtnProps } from './type'

const props = withDefaults(defineProps<BtnProps>(), {
  variant: 'primary',
  size: 'md',
  shape: 'default',
  disabled: false,
  loading: false,
  type: 'button',
  block: false,
  iconPosition: 'left',
  ripple: true,
})

const emit = defineEmits(['click'])

const classes = computed(() =>
  button({
    variant: props.variant,
    size: props.size,
    shape: props.shape,
    disabled: props.disabled,
    loading: props.loading,
    block: props.block,
    iconPosition: props.iconPosition,
  }),
)

// 用于实现涟漪效果
const handleRippleEffect = (event: MouseEvent) => {
  if (!props.ripple || props.disabled || props.loading) return

  const button = event.currentTarget as HTMLButtonElement
  const rect = button.getBoundingClientRect()

  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  const ripple = document.createElement('span')
  const diameter = Math.max(button.clientWidth, button.clientHeight)

  ripple.style.width = ripple.style.height = `${diameter}px`
  ripple.style.left = `${x - diameter / 2}px`
  ripple.style.top = `${y - diameter / 2}px`
  ripple.classList.add('ripple-effect')

  // 清除已有的涟漪效果
  const existingRipple = button.querySelector('.ripple-effect')
  if (existingRipple) {
    button.removeChild(existingRipple)
  }

  button.appendChild(ripple)

  // 动画结束后移除涟漪元素
  setTimeout(() => {
    if (ripple && ripple.parentNode) {
      ripple.parentNode.removeChild(ripple)
    }
  }, 600)
}

const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) return
  emit('click', event)
}
</script>

<template>
  <button
    role="button"
    :class="classes"
    :disabled="disabled || loading"
    :type="type"
    :aria-disabled="disabled"
    :aria-busy="loading"
    :aria-label="ariaLabel"
    @click="handleClick"
    @mousedown="handleRippleEffect"
    v-bind="$attrs"
  >
    <!-- 左侧图标 -->
    <span
      v-if="$slots.icon && iconPosition === 'left' && !loading"
      class="inline-flex mr-2"
    >
      <slot name="icon" />
    </span>

    <!-- 加载图标 -->
    <span
      v-if="loading"
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
    >
      <svg
        class="animate-spin h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </span>

    <!-- 内容 -->
    <span :class="{ 'opacity-0': loading }">
      <slot />
    </span>

    <!-- 右侧图标 -->
    <span
      v-if="$slots.icon && iconPosition === 'right' && !loading"
      class="inline-flex ml-2"
    >
      <slot name="icon" />
    </span>
  </button>
</template>

<style scoped>
.ripple-effect {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  transform: scale(0);
  animation: ripple 0.6s linear;
  pointer-events: none;
}

@keyframes ripple {
  to {
    transform: scale(2.5);
    opacity: 0;
  }
}
</style>
