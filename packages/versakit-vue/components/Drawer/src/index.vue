<script setup lang="ts">
import { computed, watch, onMounted, onBeforeUnmount, nextTick, ref } from 'vue'
import { useDrawer } from './composables/useDrawer'
import {
  drawerOverlay,
  drawerContainer,
  drawerHeader,
  drawerTitle,
  drawerCloseButton,
  drawerBody,
  drawerFooter,
} from './index.variants'
import type { DrawerProps } from './type'

defineOptions({
  name: 'Drawer',
})

const props = withDefaults(defineProps<DrawerProps>(), {
  placement: 'right',
  size: '300px',
  showOverlay: true,
  closeOnEsc: true,
  closeOnOverlayClick: true,
  preventScroll: true,
  zIndex: 1000,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
  (e: 'open'): void
}>()

const { isOpen, close, open, drawerRef, overlayRef, onOverlayClick } =
  useDrawer({
    onClose: () => {
      emit('update:modelValue', false)
      emit('close')
    },
  })

// 同步外部modelValue和内部isOpen状态
watch(
  () => props.modelValue,
  (val) => {
    if (val && !isOpen.value) {
      open()
      nextTick(() => emit('open'))
    } else if (!val && isOpen.value) {
      close()
    }
  },
  { immediate: true },
)

// 阻止滚动
const originalOverflow = ref('')
watch(isOpen, (val) => {
  if (!props.preventScroll) return

  if (val) {
    originalOverflow.value = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = originalOverflow.value
  }
})

onBeforeUnmount(() => {
  if (props.preventScroll && isOpen.value) {
    document.body.style.overflow = originalOverflow.value
  }
})

// 计算样式
const overlayClass = computed(() => {
  return drawerOverlay({
    open: isOpen.value,
  })
})

const containerClass = computed(() => {
  return drawerContainer({
    placement: props.placement,
    open: isOpen.value,
  })
})

const containerStyle = computed(() => {
  const style: Record<string, string> = {
    zIndex: props.zIndex.toString(),
  }

  if (props.size) {
    const sizeValue =
      typeof props.size === 'number' ? `${props.size}px` : props.size

    if (props.placement === 'left' || props.placement === 'right') {
      style.width = sizeValue
    } else {
      style.height = sizeValue
    }
  }

  return style
})

const headerClass = computed(() => drawerHeader())
const titleClass = computed(() => drawerTitle())
const closeButtonClass = computed(() => drawerCloseButton())
const bodyClass = computed(() => drawerBody())
const footerClass = computed(() => drawerFooter())

// 处理点击遮罩层关闭
const handleOverlayClick = (e: MouseEvent) => {
  if (props.closeOnOverlayClick) {
    onOverlayClick(e)
  }
}

// 处理ESC键关闭
onMounted(() => {
  if (!props.closeOnEsc) return

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen.value) {
      close()
    }
  }

  document.addEventListener('keydown', handleKeyDown)
  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleKeyDown)
  })
})
</script>

<template>
  <Teleport to="body">
    <!-- 遮罩层 -->
    <div
      v-if="showOverlay"
      :class="overlayClass"
      ref="overlayRef"
      @click="handleOverlayClick"
      role="presentation"
    ></div>

    <!-- 抽屉容器 -->
    <div
      :class="containerClass"
      :style="containerStyle"
      ref="drawerRef"
      role="dialog"
      aria-modal="true"
      :aria-hidden="!isOpen"
      :aria-labelledby="title ? 'drawer-title' : undefined"
    >
      <!-- 抽屉头部 -->
      <div v-if="$slots.header || title" :class="headerClass">
        <slot name="header">
          <h2 v-if="title" :class="titleClass" id="drawer-title">
            {{ title }}
          </h2>
          <button
            :class="closeButtonClass"
            @click="close"
            aria-label="关闭"
            type="button"
          >
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
          </button>
        </slot>
      </div>

      <!-- 抽屉内容 -->
      <div :class="bodyClass">
        <slot></slot>
      </div>

      <!-- 抽屉底部 -->
      <div v-if="$slots.footer" :class="footerClass">
        <slot name="footer"></slot>
      </div>
    </div>
  </Teleport>
</template>
