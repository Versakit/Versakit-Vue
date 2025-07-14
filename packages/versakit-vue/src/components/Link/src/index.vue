<template>
  <a
    :class="classes"
    v-bind="linkAttributes"
    @click="handleClick"
    :aria-disabled="disabled"
  >
    <slot name="icon-left" v-if="iconPosition === 'left'">
      <span v-if="$slots['icon-left']" :class="iconClasses('left')">
        <slot name="icon-left" />
      </span>
    </slot>

    <slot />

    <slot name="icon-right" v-if="iconPosition === 'right'">
      <span v-if="$slots['icon-right']" :class="iconClasses('right')">
        <slot name="icon-right" />
      </span>
    </slot>

    <span
      v-if="external && !$slots['icon-right'] && iconPosition !== 'left'"
      :class="iconClasses('right')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-full h-full"
      >
        <path
          d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
        ></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </span>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { linkStyle, linkIconStyle } from './index.variants'
import type { LinkProps } from './type'
import { LinkEmits } from './type'
import { useLink } from './use-link'

const props = withDefaults(defineProps<LinkProps>(), {
  href: undefined,
  variant: 'default',
  size: 'md',
  external: false,
  underline: false,
  disabled: false,
  iconPosition: undefined,
  unstyled: false,
})

const emit = defineEmits(LinkEmits)

const { handleClick, linkAttributes } = useLink(props, emit)

// 计算样式类名
const classes = computed(() => {
  return props.unstyled
    ? props.pt?.root || ''
    : linkStyle({
        variant: props.variant,
        size: props.size,
        underline: props.underline,
        disabled: props.disabled,
        class: props.pt?.root,
      })
})

// 计算图标样式类名
const iconClasses = (position: 'left' | 'right') => {
  return props.unstyled
    ? props.pt?.icon || ''
    : linkIconStyle({
        position,
        size: props.size,
        class: props.pt?.icon,
      })
}
</script>
