<script setup lang="ts">
import { useModal } from './composables/useModal'
import type { ModalProps } from './type'
import {
  modalOverlay,
  modalContent,
  modalHeader,
  modalTitle,
  modalBody,
  modalFooter,
  modalCloseButton,
} from './index.variants'
import { watch, onMounted, nextTick, computed, useSlots } from 'vue'

defineOptions({
  name: 'Modal',
})

const props = withDefaults(defineProps<ModalProps>(), {
  modelValue: false,
  closeOnEsc: true,
  closeOnOverlayClick: true,
  hideCloseButton: false,
  size: 'lg',
  unstyled: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
}>()

const slots = useSlots()

// 使用 useModal 组合式函数
const { isOpen, open, close, modalRef, overlayRef, onOverlayClick } = useModal({
  onClose: () => {
    emit('close')
    emit('update:modelValue', false)
  },
  closeOnEsc: props.closeOnEsc,
  closeOnOverlayClick: props.closeOnOverlayClick,
})

// 初始化和同步 modelValue 到 isOpen
onMounted(async () => {
  await nextTick()
  if (props.modelValue) {
    open()
  }
})

// 监听 props.modelValue 的变化
watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal && !isOpen.value) {
      open()
    } else if (!newVal && isOpen.value) {
      close()
    }
  },
)

// 监听 isOpen 的变化并同步回 modelValue
watch(isOpen, (newVal) => {
  if (newVal !== props.modelValue) {
    emit('update:modelValue', newVal)
  }
})

// 关闭模态框的方法
const closeModal = () => {
  close()
}

// 判断是否有各个插槽
const hasHeader = computed(() => !!props.title || !!slots.header)
const hasFooter = computed(() => !!slots.footer)

// 计算样式
const overlayClass = computed(() => {
  if (props.unstyled) {
    return [props.pt?.overlay, props.class].filter(Boolean)
  }
  return [modalOverlay({ class: props.pt?.overlay }), props.class]
})

const contentClass = computed(() => {
  if (props.unstyled) {
    return [props.pt?.content, props.contentClass].filter(Boolean)
  }
  return [
    modalContent({
      size: props.size,
      class: props.pt?.content,
    }),
    props.contentClass,
  ]
})

const headerClass = computed(() => {
  if (props.unstyled) {
    return [props.pt?.header, props.headerClass].filter(Boolean)
  }
  return [modalHeader({ class: props.pt?.header }), props.headerClass]
})

const titleClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.title || ''
  }
  return modalTitle({ class: props.pt?.title })
})

const bodyClass = computed(() => {
  if (props.unstyled) {
    return [props.pt?.body, props.bodyClass].filter(Boolean)
  }
  return [modalBody({ class: props.pt?.body }), props.bodyClass]
})

const footerClass = computed(() => {
  if (props.unstyled) {
    return [props.pt?.footer, props.footerClass].filter(Boolean)
  }
  return [modalFooter({ class: props.pt?.footer }), props.footerClass]
})

const closeButtonClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.closeButton || ''
  }
  return modalCloseButton({ class: props.pt?.closeButton })
})
</script>

<template>
  <!-- 使用 Teleport 将模态框传送到 body -->
  <Teleport to="body">
    <!-- 只有当 isOpen 为 true 时才渲染模态框 -->
    <div
      v-if="isOpen"
      :class="overlayClass"
      ref="overlayRef"
      @click="onOverlayClick"
    >
      <div
        :class="contentClass"
        ref="modalRef"
        role="dialog"
        aria-modal="true"
        tabindex="-1"
      >
        <!-- 模态框头部 -->
        <div v-if="hasHeader" :class="headerClass">
          <slot name="header">
            <h3 :class="titleClass">{{ props.title }}</h3>
          </slot>

          <button
            v-if="!hideCloseButton"
            :class="closeButtonClass"
            @click="closeModal"
            aria-label="关闭"
          >
            <slot name="close-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
            </slot>
          </button>
        </div>

        <!-- 模态框内容 -->
        <div :class="bodyClass">
          <slot />
        </div>

        <!-- 模态框底部 -->
        <div v-if="hasFooter" :class="footerClass">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Teleport>
</template>
