<template>
  <button
    ref="triggerRef"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @focus="onFocus"
    @blur="onBlur"
    :aria-describedby="tooltipId"
    class="trigger-button"
  >
    Hover 我
  </button>

  <teleport to="body">
    <div
      v-if="isOpen"
      :id="tooltipId"
      ref="tooltipRef"
      role="tooltip"
      class="tooltip"
      style="top: 60px; left: 100px"
    >
      这是提示内容
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { useTooltip } from '@versakit/composables'

const {
  isOpen,
  triggerRef,
  tooltipRef,
  tooltipId,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
} = useTooltip({ openDelay: 200, closeDelay: 100 })
</script>

<style scoped>
.trigger-button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #2563eb;
  color: white;
  border: none;
  cursor: pointer;
}

.trigger-button:hover {
  background-color: #1d4ed8;
}

.tooltip {
  position: absolute;
  z-index: 50;
  padding: 0.25rem 0.75rem;
  background-color: black;
  color: white;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
}
</style>
