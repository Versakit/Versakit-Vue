<template>
  <button @click="open" class="open-button">打开 Dialog</button>

  <Teleport to="body">
    <div
      v-if="isOpen"
      ref="overlayRef"
      class="dialog-overlay"
      @click="onOverlayClick"
    >
      <div
        ref="dialogRef"
        class="dialog-content"
        role="dialog"
        aria-modal="true"
      >
        <h2 class="dialog-title">对话框</h2>
        <p class="dialog-text">这是一个无头组件驱动的 Dialog。</p>
        <button @click="close" class="close-button">关闭</button>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useDialog } from '@versakit/vue'

const { isOpen, open, close, dialogRef, overlayRef, onOverlayClick } =
  useDialog()
</script>

<style scoped>
.open-button {
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}

.dialog-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}

.dialog-content {
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  width: 400px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.dialog-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.dialog-text {
  margin-bottom: 1rem;
}

.close-button {
  background-color: #d1d5db;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
}
</style>
