<script setup lang="ts">
import { computed, inject } from 'vue'
import { button } from './index.variants'
import type {
  BtnProps,
  ButtonPassThroughAttributes,
  BtnVariant,
  BtnSize,
  BtnShape,
} from './type'

// 定义注入的按钮组上下文类型
interface ButtonGroupContext {
  variant?: BtnVariant
  size?: BtnSize
  shape?: BtnShape
  disabled?: boolean
}

// 注入按钮组上下文
const buttonGroup = inject<ButtonGroupContext | null>('vk-button-group', null)

const props = withDefaults(
  defineProps<BtnProps & { pt?: ButtonPassThroughAttributes }>(),
  {
    variant: 'primary',
    size: 'md',
    shape: 'default',
    disabled: false,
    loading: false,
    type: 'button',
    block: false,
    iconPosition: 'left',
    unstyled: false,
  },
)

const emit = defineEmits(['click'])

// 合并按钮组上下文和按钮自身的属性
const finalVariant = computed(() => buttonGroup?.variant ?? props.variant)
const finalSize = computed(() => buttonGroup?.size ?? props.size)
const finalShape = computed(() => buttonGroup?.shape ?? props.shape)
const finalDisabled = computed(() => buttonGroup?.disabled || props.disabled)

const classes = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return button({
    variant: finalVariant.value,
    size: finalSize.value,
    shape: finalShape.value,
    disabled: finalDisabled.value,
    loading: props.loading,
    block: props.block,
    iconPosition: props.iconPosition,
  })
})

const handleClick = (event: MouseEvent) => {
  if (finalDisabled.value || props.loading) return
  emit('click', event)
}
</script>
<template>
  <button
    role="button"
    :class="classes"
    :disabled="finalDisabled || loading"
    :type="type"
    :aria-disabled="finalDisabled"
    :aria-busy="loading"
    :aria-label="ariaLabel"
    @click="handleClick"
    v-bind="{ ...$attrs, ...props.pt?.root }"
  >
    <!-- 左侧图标 -->
    <span
      v-if="$slots.icon && iconPosition === 'left' && !loading"
      class="inline-flex mr-2"
      v-bind="props.pt?.icon"
    >
      <slot name="icon" :iconPosition="iconPosition" />
    </span>
    <!-- 加载图标 -->
    <span
      v-if="loading"
      :class="
        unstyled
          ? ''
          : 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
      "
      aria-hidden="true"
      v-bind="props.pt?.loading"
    >
      <slot name="loading" v-if="$slots.loading"></slot>
      <svg
        v-else
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
    <span
      :class="{ 'opacity-0': loading && !unstyled }"
      v-bind="props.pt?.content"
    >
      <slot />
    </span>
    <!-- 右侧图标 -->
    <span
      v-if="$slots.icon && iconPosition === 'right' && !loading"
      class="inline-flex ml-2"
      v-bind="props.pt?.icon"
    >
      <slot name="icon" :iconPosition="iconPosition" />
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
