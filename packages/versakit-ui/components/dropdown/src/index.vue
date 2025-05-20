<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { getPtClasses } from '@versakit/shared'
import type { DropdownProps } from '../type'

defineOptions({
  name: 'VKDropdownMenu',
})

const props = defineProps<DropdownProps>()

defineEmits<{
  (e: 'select', value: any): void
}>()

const dropdownRef = ref<HTMLElement | null>(null)
const isOpen = ref(false)

// Handle click outside
onClickOutside(dropdownRef, () => {
  isOpen.value = false
})

// Toggle dropdown
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

// Handle keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})

// Calculate dropdown position class
const dropdownPositionClass = computed(() => {
  return props.placement || 'bottom'
})

// 无头化处理
const ptClasses = computed(() => {
  if (props.unstyled) {
    return {
      root: getPtClasses(props.pt, 'root'),
      trigger: getPtClasses(props.pt, 'trigger'),
      content: getPtClasses(props.pt, 'content'),
    }
  }

  return {
    root: 'dropdown-container',
    trigger: 'dropdown-trigger',
    content: 'dropdown-content',
  }
})
</script>

<template>
  <div ref="dropdownRef" :class="[ptClasses.root, { 'is-open': isOpen }]">
    <!-- Trigger button -->
    <button
      @click="toggleDropdown"
      :class="ptClasses.trigger"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      <slot name="trigger"></slot>
    </button>

    <!-- Dropdown content -->
    <div
      v-show="isOpen"
      :class="[dropdownPositionClass, ptClasses.content]"
      role="menu"
      tabindex="-1"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
@import url('../style/index.css');
</style>
