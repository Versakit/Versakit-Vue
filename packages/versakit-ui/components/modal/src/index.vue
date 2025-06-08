<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import {
  modal,
  modalWrapper,
  modalOverlay,
  modalHeader,
  modalTitle,
  modalClose,
  modalBody,
  modalFooter,
  modalButtonBase,
} from './index.variants'
import type { ModalProps } from './type'

const props = withDefaults(defineProps<ModalProps>(), {
  modelValue: false,
  title: '',
  size: 'md',
  closable: true,
  closeOnClickOverlay: true,
  overlay: true,
  showHeader: true,
  showFooter: false,
  closeOnEsc: true,
  rounded: true,
  centered: false,
  a11y: true,
  fixedHeight: false,
  zIndex: 1000,
  customClass: '',
  showConfirmButton: false,
  showCancelButton: false,
  confirmButtonText: '确认',
  cancelButtonText: '取消',
  confirmButtonVariant: 'primary',
  cancelButtonVariant: 'default',
  fullscreen: false,
  overlayOpacity: 0.5,
})

const emit = defineEmits([
  'update:modelValue',
  'open',
  'close',
  'confirm',
  'cancel',
])

const visible = ref(props.modelValue)
const modalRef = ref<HTMLElement | null>(null)

// 计算样式
const modalStyle = computed(() => {
  const styles: Record<string, string | number> = {
    zIndex: props.zIndex + 1,
  }

  if (props.width && !props.fullscreen) {
    styles.width = props.width
  }

  if (props.maxHeight && !props.fullscreen) {
    styles.maxHeight = props.maxHeight
  }

  return styles
})

// 计算样式类
const modalClasses = computed(() =>
  modal({
    size: props.size,
    rounded: props.rounded,
    centered: props.centered,
    fullscreen: props.fullscreen,
    fixedHeight: props.fixedHeight,
    class: props.customClass,
  }),
)

// 包装器样式
const wrapperClasses = computed(() =>
  modalWrapper({
    centered: props.centered,
    fullscreen: props.fullscreen,
  }),
)

const wrapperStyle = computed(() => ({
  zIndex: props.zIndex,
  display: visible.value ? 'flex' : 'none',
}))

// 遮罩层样式
const overlayClasses = computed(() => modalOverlay())
const overlayStyle = computed(() => ({
  opacity: visible.value ? props.overlayOpacity : 0,
  zIndex: props.zIndex,
  visibility: visible.value ? ('visible' as const) : ('hidden' as const),
}))

// 头部样式
const headerClasses = computed(() => modalHeader())
const titleClasses = computed(() => modalTitle())
const closeClasses = computed(() => modalClose())

// 内容样式
const bodyClasses = computed(() => modalBody())

// 底部样式
const footerClasses = computed(() => modalFooter())

// 按钮样式
const confirmButtonClasses = computed(() =>
  modalButtonBase({
    variant: props.confirmButtonVariant,
  }),
)

const cancelButtonClasses = computed(() =>
  modalButtonBase({
    variant: props.cancelButtonVariant,
  }),
)

// 监听modelValue变化
watch(
  () => props.modelValue,
  (val) => {
    visible.value = val
    if (val) {
      emit('open')
      addScrollLock()
    } else {
      emit('close')
      removeScrollLock()
    }
  },
)

// 关闭模态框
const close = () => {
  visible.value = false
  emit('update:modelValue', false)
}

// 确认
const confirm = () => {
  emit('confirm')
  close()
}

// 取消
const cancel = () => {
  emit('cancel')
  close()
}

// 点击遮罩层
const handleOverlayClick = () => {
  if (props.closeOnClickOverlay) {
    close()
  }
}

// 键盘事件处理
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.closeOnEsc && visible.value) {
    close()
  }
}

// 阻止冒泡
const stopPropagation = (event: Event) => {
  event.stopPropagation()
}

// 添加键盘事件监听
onMounted(() => {
  if (props.closeOnEsc) {
    document.addEventListener('keydown', handleKeyDown)
  }
  if (props.modelValue) {
    addScrollLock()
  }
})

// 移除键盘事件监听
onUnmounted(() => {
  if (props.closeOnEsc) {
    document.removeEventListener('keydown', handleKeyDown)
  }
  removeScrollLock()
})

// 阻止滚动穿透
const addScrollLock = () => {
  document.body.style.overflow = 'hidden'
}

const removeScrollLock = () => {
  document.body.style.overflow = ''
}
</script>

<template>
  <teleport to="body">
    <!-- 遮罩层 -->
    <div
      v-if="overlay"
      :class="overlayClasses"
      :style="overlayStyle"
      @click="handleOverlayClick"
      aria-hidden="true"
    ></div>

    <!-- 模态框容器 -->
    <div
      :class="wrapperClasses"
      :style="wrapperStyle"
      @click="handleOverlayClick"
    >
      <!-- 模态框 -->
      <div
        v-show="visible"
        ref="modalRef"
        :class="modalClasses"
        :style="modalStyle"
        role="dialog"
        :aria-modal="a11y ? 'true' : undefined"
        :aria-labelledby="a11y && title ? 'modal-title' : undefined"
        @click="stopPropagation"
      >
        <!-- 模态框头部 -->
        <div v-if="showHeader" :class="headerClasses">
          <h2
            v-if="title"
            :id="a11y ? 'modal-title' : undefined"
            :class="titleClasses"
          >
            {{ title }}
          </h2>
          <slot v-else name="title"></slot>

          <button
            v-if="closable"
            :class="closeClasses"
            @click="close"
            :aria-label="a11y ? '关闭' : undefined"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-5 h-5"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- 模态框内容 -->
        <div :class="bodyClasses">
          <slot></slot>
        </div>

        <!-- 模态框底部 -->
        <div
          v-if="showFooter || showConfirmButton || showCancelButton"
          :class="footerClasses"
        >
          <slot name="footer">
            <button
              v-if="showCancelButton"
              :class="cancelButtonClasses"
              @click="cancel"
              type="button"
            >
              {{ cancelButtonText }}
            </button>
            <button
              v-if="showConfirmButton"
              :class="confirmButtonClasses"
              @click="confirm"
              type="button"
            >
              {{ confirmButtonText }}
            </button>
          </slot>
        </div>
      </div>
    </div>
  </teleport>
</template>
