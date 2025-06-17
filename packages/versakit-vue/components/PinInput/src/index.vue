<!-- components/PinInput.vue -->
<template>
  <div class="flex gap-2">
    <input
      v-for="(_, idx) in values.length"
      :key="idx"
      v-model="values[idx]"
      :ref="(el) => setRef(el, idx)"
      :class="pinInputClass"
      maxlength="1"
      @input="(e) => onInput(e, idx)"
      @keydown="(e) => onKeydown(e, idx)"
      type="text"
      inputmode="numeric"
      autocomplete="one-time-code"
    />
  </div>
</template>

<script setup lang="ts">
import { usePinInput } from '@versakit/composables'
import { pinInput } from './index.variants'

const props = defineProps<{
  length?: number
  size?: 'sm' | 'md' | 'lg'
  state?: 'default' | 'error' | 'success'
}>()

const { values, setRef, onInput, onKeydown } = usePinInput(props.length ?? 4)

const pinInputClass = pinInput({
  state: props.state,
  size: props.size,
})
</script>
