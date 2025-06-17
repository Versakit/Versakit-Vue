<template>
  <button
    role="switch"
    :aria-checked="checked"
    :aria-disabled="disabled"
    @click="toggle"
    @keydown="onKeyDown"
    :class="[
      'switch',
      checked ? 'switch--checked' : '',
      disabled ? 'switch--disabled' : '',
    ]"
  >
    <span :class="['switch__thumb', checked ? 'switch__thumb--checked' : '']" />
  </button>
</template>

<script setup lang="ts">
import { useSwitch } from '@versakit/composables'

const { checked, toggle, onKeyDown, disabled } = useSwitch()
</script>

<style scoped>
.switch {
  width: 3rem;
  height: 1.5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  padding: 0 0.25rem;
  transition: background-color 0.2s;
  background-color: #d1d5db;
  border: none;
  cursor: pointer;
}

.switch--checked {
  background-color: #22c55e;
}

.switch--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.switch__thumb {
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background-color: white;
  transition: transform 0.2s;
  transform: translateX(0);
}

.switch__thumb--checked {
  transform: translateX(1.5rem);
}
</style>
