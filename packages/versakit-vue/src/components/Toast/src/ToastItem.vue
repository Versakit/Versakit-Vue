<template>
  <div
    :class="itemClasses"
    role="alert"
    @mouseenter="pauseTimer"
    @mouseleave="resumeTimer"
  >
    <!-- Icon -->
    <div :class="iconClasses">
      <slot name="icon">
        <span v-html="icons[type || 'info']"></span>
      </slot>
    </div>

    <!-- Content -->
    <div class="flex-1">
      <div :class="descriptionClasses">
        {{ message }}
      </div>
    </div>

    <!-- Close Button -->
    <button
      v-if="true"
      type="button"
      :class="closeButtonClasses"
      aria-label="Close"
      @click="handleManualClose"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { toastVariants } from './index.variants'
import type { ToastInstance } from './type'

const props = defineProps<ToastInstance>()

const emit = defineEmits<{
  (e: 'close', id: string): void
}>()

const { type = 'info', duration = 3000 } = props

// Styles
const itemClasses = computed(() => toastVariants().base({ type: props.type }))
const iconClasses = computed(() => toastVariants().icon({ type: props.type }))
const descriptionClasses = computed(() =>
  toastVariants().description({ type: props.type }),
)
const closeButtonClasses = computed(() =>
  toastVariants().closeButton({ type: props.type }),
)

// Icons
const icons = {
  info: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg>`,
  success: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" /></svg>`,
  warning: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg>`,
  error: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" /></svg>`,
}

// Timer
let timer: ReturnType<typeof setTimeout>
const remaining = ref(duration)
const startTime = ref(0)

const startTimer = () => {
  if (duration <= 0) return
  startTime.value = Date.now()
  timer = setTimeout(() => {
    handleClose()
  }, remaining.value)
}

const pauseTimer = () => {
  if (duration <= 0) return
  clearTimeout(timer)
  remaining.value -= Date.now() - startTime.value
}

const resumeTimer = () => {
  if (duration <= 0) return
  startTimer()
}

const handleManualClose = () => {
  handleClose()
}

const handleClose = () => {
  emit('close', props.id)
  if (props.onClose) {
    props.onClose()
  }
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  clearTimeout(timer)
})
</script>
