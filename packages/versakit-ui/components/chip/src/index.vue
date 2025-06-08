<script setup lang="ts">
import { computed, h } from 'vue'
import { chip, chipIcon, chipClose } from './index.variants'
import type { ChipProps } from './type'

const props = withDefaults(defineProps<ChipProps>(), {
  variant: 'default',
  size: 'md',
  closable: false,
  outlined: false,
  rounded: false,
  disabled: false,
  icon: false,
})

const emit = defineEmits(['close'])

const classes = computed(() =>
  chip({
    variant: props.variant,
    size: props.size,
    rounded: props.rounded,
    outlined: props.outlined,
    disabled: props.disabled,
  }),
)

const iconClasses = computed(() => chipIcon())

const closeClasses = computed(() => chipClose())

const handleClose = (event: Event) => {
  event.stopPropagation()
  emit('close')
  props.onClose?.()
}

// 根据不同类型返回对应图标
const renderIcon = () => {
  switch (props.variant) {
    case 'primary':
      return h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 20 20',
          fill: 'currentColor',
          class: 'h-4 w-4',
        },
        [
          h('path', { d: 'M2 10a8 8 0 1116 0 8 8 0 01-16 0z' }),
          h('path', {
            'fill-rule': 'evenodd',
            d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z',
            'clip-rule': 'evenodd',
          }),
        ],
      )
    case 'success':
      return h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 20 20',
          fill: 'currentColor',
          class: 'h-4 w-4',
        },
        [
          h('path', {
            'fill-rule': 'evenodd',
            d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z',
            'clip-rule': 'evenodd',
          }),
        ],
      )
    case 'warning':
      return h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 20 20',
          fill: 'currentColor',
          class: 'h-4 w-4',
        },
        [
          h('path', {
            'fill-rule': 'evenodd',
            d: 'M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z',
            'clip-rule': 'evenodd',
          }),
        ],
      )
    case 'error':
      return h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 20 20',
          fill: 'currentColor',
          class: 'h-4 w-4',
        },
        [
          h('path', {
            'fill-rule': 'evenodd',
            d: 'M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z',
            'clip-rule': 'evenodd',
          }),
        ],
      )
    case 'info':
      return h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 20 20',
          fill: 'currentColor',
          class: 'h-4 w-4',
        },
        [
          h('path', {
            'fill-rule': 'evenodd',
            d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z',
            'clip-rule': 'evenodd',
          }),
        ],
      )
    default:
      return h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 20 20',
          fill: 'currentColor',
          class: 'h-4 w-4',
        },
        [
          h('path', {
            'fill-rule': 'evenodd',
            d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z',
            'clip-rule': 'evenodd',
          }),
        ],
      )
  }
}
</script>

<template>
  <div :class="classes" role="status">
    <span v-if="icon" :class="iconClasses" aria-hidden="true">
      <component :is="renderIcon" />
    </span>
    <slot />
    <button
      v-if="closable && !disabled"
      type="button"
      :class="closeClasses"
      @click="handleClose"
      aria-label="移除"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-4 w-4"
      >
        <path
          d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
        />
      </svg>
    </button>
  </div>
</template>
