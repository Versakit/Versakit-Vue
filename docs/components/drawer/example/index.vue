<template>
  <button @click="open" class="open-button">打开 Drawer</button>

  <teleport to="body">
    <div v-if="isOpen" ref="overlayRef" class="overlay" @click="onOverlayClick">
      <aside ref="drawerRef" class="drawer" role="dialog" aria-modal="true">
        <h2 class="drawer-title">抽屉内容</h2>
        <p class="drawer-content">你可以在这里放置任意内容。</p>
        <button @click="close" class="close-button">关闭</button>
      </aside>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { useDrawer } from '@versakit/composables'

const { isOpen, open, close, drawerRef, overlayRef, onOverlayClick } =
  useDrawer()
</script>

<style scoped>
.open-button {
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
}

.overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 40;
}

.drawer {
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 20rem;
  background-color: rgb(59, 59, 59);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  padding: 1.5rem;
  z-index: 50;
  transition: transform 0.3s ease-in-out;
}

.drawer-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.drawer-content {
  margin-bottom: 1rem;
}

.close-button {
  background-color: #383838;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
}

.close-button:hover {
  background-color: #9ca3af;
}

.open-button:hover {
  background-color: #1d4ed8;
}
</style>
