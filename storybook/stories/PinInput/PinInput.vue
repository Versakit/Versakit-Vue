<template>
  <div class="pin-input-container">
    <input
      v-for="(val, i) in values"
      :key="i"
      :ref="(el) => setRef(el as HTMLInputElement | null, i)"
      :value="val"
      type="text"
      inputmode="numeric"
      maxlength="1"
      class="pin-input-field"
      :disabled="disabled"
      @input="(e) => onInput(e, i)"
      @keydown="(e) => onKeydown(e, i)"
      @paste="onPaste"
    />
  </div>
</template>

<script setup lang="ts">
import { usePinInput } from '@versakit/hooks'

interface Props {
  length?: number
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  length: 6,
  disabled: false,
})

const { values, setRef, onInput, onKeydown } = usePinInput(props.length)

const onPaste = (e: ClipboardEvent) => {
  e.preventDefault()
  const pastedData = e.clipboardData?.getData('text')
  if (!pastedData) return

  const numbers = pastedData.replace(/\D/g, '').split('').slice(0, props.length)
  numbers.forEach((num, index) => {
    const input = document.querySelector(
      `input:nth-child(${index + 1})`,
    ) as HTMLInputElement
    if (input) {
      input.value = num
      const event = new Event('input')
      input.dispatchEvent(event)
    }
  })
}
</script>

<style scoped>
.pin-input-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.pin-input-field {
  width: 3.5rem;
  height: 3.5rem;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.2s;
  background-color: white;
  caret-color: #3b82f6;
}

.pin-input-field:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25);
  outline: none;
}

.pin-input-field:hover:not(:focus):not(:disabled) {
  border-color: #9ca3af;
}

.pin-input-field:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 移除数字输入框的上下箭头 */
.pin-input-field::-webkit-outer-spin-button,
.pin-input-field::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* 深色模式样式 */
:global(.dark) .pin-input-field {
  background-color: #1f2937;
  color: white;
  border-color: #4b5563;
  caret-color: #60a5fa;
}

:global(.dark) .pin-input-field:focus {
  border-color: #60a5fa;
  box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.25);
}
</style>
