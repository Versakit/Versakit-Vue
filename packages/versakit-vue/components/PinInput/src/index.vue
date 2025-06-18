<script setup lang="ts">
import { usePinInput } from '@versakit/composables'
import { pinInput } from './index.variants'
import type { PinInputProps } from './type'

defineOptions({
  name: 'VKPinInput',
})

const props = withDefaults(defineProps<PinInputProps>(), {
  length: 4,
  size: 'md',
  state: 'default',
})

const { values, setRef, onInput, onKeydown } = usePinInput(props.length ?? 4)

const pinInputClass = pinInput({
  state: props.state,
  size: props.size,
})
</script>

<template>
  <div class="flex gap-2">
    <input
      v-for="(_, idx) in values.length"
      :key="idx"
      v-model="values[idx]"
      :ref="(el: any) => setRef(el, idx)"
      :class="pinInputClass"
      maxlength="1"
      @input="(e: Event) => onInput(e, idx)"
      @keydown="(e: KeyboardEvent) => onKeydown(e, idx)"
      type="text"
      inputmode="numeric"
      autocomplete="one-time-code"
    />
  </div>
</template>
