<!-- components/dialog/index.vue -->
<script setup lang="ts">
import { useDialog } from '@versakit/composables'
import type { DialogProps } from './type'
import { dialogOverlay, dialogContent } from './index.variants'
import { watch } from 'vue'

defineOptions({
  name: 'VKDialog',
})

const props = defineProps<DialogProps>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
}>()

const { isOpen, open, close, dialogRef, overlayRef, onOverlayClick } =
  useDialog({ onClose: () => emit('close') })

// 双向绑定支持
watch(
  () => props.modelValue,
  (val) => {
    if (val) open()
    else close()
  },
  { immediate: true },
)

watch(isOpen, (val) => {
  emit('update:modelValue', val)
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      :class="dialogOverlay()"
      ref="overlayRef"
      @click="onOverlayClick"
    >
      <div
        :class="dialogContent()"
        ref="dialogRef"
        role="dialog"
        aria-modal="true"
      >
        <slot />
      </div>
    </div>
  </Teleport>
</template>
