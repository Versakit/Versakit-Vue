<!-- components/dialog/index.vue -->
<script setup lang="ts">
import { useDialog } from './composables/useDialog.ts'
import type { DialogProps } from './type'
import { dialogOverlay, dialogContent } from './index.variants'
import { watch, onMounted, nextTick } from 'vue'

defineOptions({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Dialog',
})

const props = withDefaults(defineProps<DialogProps>(), {
  modelValue: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
}>()

// 使用useDialog composable
const { isOpen, open, close, dialogRef, overlayRef, onOverlayClick } =
  useDialog({
    onClose: () => {
      emit('close')
      emit('update:modelValue', false)
    },
  })

// 初始化和同步modelValue到isOpen
onMounted(async () => {
  // 确保组件挂载后同步初始值
  await nextTick()
  if (props.modelValue) {
    open()
  }
})

// 监听props.modelValue的变化
watch(
  () => props.modelValue,
  (newVal) => {
    console.log('Dialog modelValue changed:', newVal)
    if (newVal && !isOpen.value) {
      open()
    } else if (!newVal && isOpen.value) {
      close()
    }
  },
)

// 监听isOpen的变化并同步回modelValue
watch(isOpen, (newVal) => {
  console.log('Dialog isOpen changed:', newVal)
  if (newVal !== props.modelValue) {
    emit('update:modelValue', newVal)
  }
})

// 关闭对话框的方法
const closeDialog = () => {
  close()
}
</script>

<template>
  <!-- 使用Teleport将对话框传送到body -->
  <Teleport to="body">
    <!-- 只有当isOpen为true时才渲染对话框 -->
    <div
      v-if="isOpen"
      :class="dialogOverlay()"
      ref="overlayRef"
      @click="onOverlayClick"
      style="display: flex; align-items: center; justify-content: center"
    >
      <div
        :class="dialogContent()"
        ref="dialogRef"
        role="dialog"
        aria-modal="true"
        @keydown.esc="closeDialog"
        tabindex="-1"
      >
        <!-- 对话框内容插槽 -->
        <slot />
      </div>
    </div>
  </Teleport>
</template>
