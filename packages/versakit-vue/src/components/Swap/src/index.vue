<template>
  <div
    :class="classes"
    @click="props.trigger === 'click' ? handleTrigger($event) : undefined"
    @mouseenter="props.trigger === 'hover' ? (isActive = true) : undefined"
    @mouseleave="props.trigger === 'hover' ? (isActive = false) : undefined"
    @focus="props.trigger === 'focus' ? (isActive = true) : undefined"
    @blur="props.trigger === 'focus' ? (isActive = false) : undefined"
    :tabindex="props.trigger === 'focus' ? 0 : undefined"
    :aria-checked="isActive"
    :aria-disabled="props.disabled"
    role="switch"
  >
    <div :class="onClasses">
      <slot name="on"></slot>
    </div>
    <div :class="offClasses">
      <slot name="off"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { swapStyle, swapOnStyle, swapOffStyle } from './index.variants'
import type { SwapProps, SwapEmitsType } from './type'
import { useSwap } from './use-swap'

const props = withDefaults(defineProps<SwapProps>(), {
  active: false,
  variant: 'fade',
  size: 'md',
  trigger: 'click',
  disabled: false,
  unstyled: false,
})

const emit = defineEmits<SwapEmitsType>()

const { isActive, handleTrigger } = useSwap(props, emit)

const classes = computed(() => {
  return props.unstyled
    ? props.pt?.root || ''
    : swapStyle({
        variant: props.variant,
        size: props.size,
        class: props.pt?.root,
      })
})

const onClasses = computed(() => {
  return props.unstyled
    ? props.pt?.on || ''
    : swapOnStyle({
        active: isActive.value,
        variant: props.variant,
        disabled: props.disabled,
        class: props.pt?.on,
      })
})

const offClasses = computed(() => {
  return props.unstyled
    ? props.pt?.off || ''
    : swapOffStyle({
        active: isActive.value,
        variant: props.variant,
        disabled: props.disabled,
        class: props.pt?.off,
      })
})
</script>
