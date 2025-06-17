<template>
  <button
    ref="triggerRef"
    @click="toggle"
    aria-haspopup="dialog"
    :aria-expanded="isOpen"
    class="trigger-button"
  >
    打开 Popover
  </button>

  <teleport to="body">
    <div
      v-if="isOpen"
      ref="popoverRef"
      class="popover"
      style="top: 60px; left: 100px"
      role="dialog"
    >
      <h2 class="popover-title">Popover 内容</h2>
      <p class="popover-content">你可以放任何自定义内容。</p>
      <button @click="close" class="close-button">关闭</button>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { usePopover } from '@versakit/hooks'

const { isOpen, close, toggle, triggerRef, popoverRef } = usePopover()
</script>

<style scoped>
.trigger-button {
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: white;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
}

.trigger-button:hover {
  background-color: #1d4ed8;
}

.popover {
  position: absolute;
  z-index: 50;
  background-color: white;
  padding: 1rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 0.25rem;
  border: 1px solid #e5e7eb;
}

.popover-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.popover-content {
  font-size: 0.875rem;
  color: #4b5563;
}

.close-button {
  margin-top: 0.75rem;
  font-size: 0.875rem;
  color: #2563eb;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.close-button:hover {
  color: #1d4ed8;
  text-decoration: underline;
}
</style>
