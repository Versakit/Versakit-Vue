<script setup lang="ts">
import { usePinInput } from './composables/usePinInput'
import { pinInput } from './index.variants'
import type { PinInputProps } from './type'
import { computed } from 'vue'

defineOptions({
  name: 'PinInput',
})

const props = withDefaults(defineProps<PinInputProps>(), {
  length: 4,
  size: 'md',
  state: 'default',
  unstyled: false,
})

const { values, setRef, onInput, onKeydown } = usePinInput(props.length ?? 4)

// 计算样式
const containerClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.container || 'flex gap-2'
  }
  return props.pt?.container ? `flex gap-2 ${props.pt.container}` : 'flex gap-2'
})

const inputClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.input || ''
  }
  return pinInput({
    state: props.state,
    size: props.size,
    class: props.pt?.input,
  })
})
</script>

<template>
  <div :class="containerClass">
    <input
      v-for="(_, idx) in values.length"
      :key="idx"
      v-model="values[idx]"
      :ref="(el: any) => setRef(el, idx)"
      :class="inputClass"
      maxlength="1"
      @input="(e: Event) => onInput(e, idx)"
      @keydown="(e: KeyboardEvent) => onKeydown(e, idx)"
      type="text"
      inputmode="numeric"
      autocomplete="one-time-code"
    />
  </div>
</template>
