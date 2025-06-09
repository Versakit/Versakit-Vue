<script setup lang="ts">
import { computed } from 'vue'
import {
  switchVariants,
  switchTrackVariants,
  switchThumbVariants,
} from './index.variants'
import type { SwitchProps, SwitchPassThroughAttributes } from './type'

const props = withDefaults(
  defineProps<SwitchProps & { pt?: SwitchPassThroughAttributes }>(),
  {
    modelValue: false,
    size: 'md',
    variant: 'primary',
    disabled: false,
    unstyled: false,
  },
)

const emit = defineEmits(['update:modelValue', 'change'])

const switchClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return switchVariants({ size: props.size })
})

const trackClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return switchTrackVariants({
    variant: props.variant,
    disabled: props.disabled,
  })
})

const thumbClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return switchThumbVariants({
    size: props.size,
    disabled: props.disabled,
  })
})

const toggleSwitch = () => {
  if (props.disabled) return
  emit('update:modelValue', !props.modelValue)
  emit('change', !props.modelValue)
}
</script>

<template>
  <label
    :class="switchClasses"
    @click="toggleSwitch"
    :aria-checked="modelValue"
    :aria-disabled="disabled"
    :aria-label="ariaLabel || 'Switch'"
    role="switch"
    v-bind="{ ...$attrs, ...props.pt?.root }"
  >
    <input
      type="checkbox"
      class="peer sr-only"
      :checked="modelValue"
      :disabled="disabled"
      @change="toggleSwitch"
    />
    <span :class="trackClasses" />
    <span :class="thumbClasses" v-bind="props.pt?.thumb" />
    <span v-if="$slots.default" class="ml-2" v-bind="props.pt?.label">
      <slot />
    </span>
  </label>
</template>
