<script setup lang="ts">
import { computed, watch, onBeforeUnmount, ref, useSlots } from 'vue'
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
  hideCloseButton: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
  (e: 'open'): void
}>()

const slots = useSlots()

// 使用 useDrawer 组合式函数
const { isOpen, close, open, drawerRef, overlayRef, onOverlayClick } =
  useDrawer({
    onClose: () => {
      emit('update:modelValue', false)
      emit('close')
    },
    onOpen: () => {
      emit('open')
    },
    closeOnEsc: props.closeOnEsc,
    closeOnOverlayClick: props.closeOnOverlayClick,
  })

// 同步外部 modelValue 和内部 isOpen 状态
watch(
  () => props.modelValue,
  (val) => {
    if (val && !isOpen.value) {
      open()
    } else if (!val && isOpen.value) {
      close()
    }
  },
  { immediate: true },
)

// 同步内部 isOpen 到外部 modelValue
watch(isOpen, (val) => {
  if (val !== props.modelValue) {
    emit('update:modelValue', val)
  }
})

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
  return [
    drawerOverlay({
      open: isOpen.value,
    }),
    props.overlayClass,
  ]
})

const containerClass = computed(() => {
  return [
    drawerContainer({
      placement: props.placement,
      open: isOpen.value,
    }),
    props.contentClass,
  ]
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

const headerClass = computed(() => [drawerHeader(), props.headerClass])
const titleClass = computed(() => drawerTitle())
const closeButtonClass = computed(() => drawerCloseButton())
const bodyClass = computed(() => [drawerBody(), props.bodyClass])
const footerClass = computed(() => [drawerFooter(), props.footerClass])

// 处理关闭抽屉
const closeDrawer = () => {
  close()
}

// 是否有标题或头部插槽
const hasHeader = computed(() => !!props.title || !!slots.header)
// 是否有底部插槽
const hasFooter = computed(() => !!slots.footer)
</script>

<template>
  <Teleport to="body">
    <!-- 遮罩层 -->
    <div
      v-if="showOverlay && isOpen"
      :class="overlayClass"
      ref="overlayRef"
      @click="onOverlayClick"
      role="presentation"
      aria-hidden="true"
    ></div>

    <!-- 抽屉容器 -->
    <div
      :class="[containerClass, props.class]"
      :style="containerStyle"
      ref="drawerRef"
      role="dialog"
      aria-modal="true"
      :aria-hidden="!isOpen"
      :aria-labelledby="title ? 'drawer-title' : undefined"
    >
      <!-- 抽屉头部 -->
      <div v-if="hasHeader" :class="headerClass">
        <slot name="header">
          <h2 v-if="title" :class="titleClass" id="drawer-title">
            {{ title }}
          </h2>
        </slot>

        <button
          v-if="!hideCloseButton"
          :class="closeButtonClass"
          @click="closeDrawer"
          aria-label="关闭"
          type="button"
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

      <!-- 抽屉内容 -->
      <div :class="bodyClass">
        <slot></slot>
      </div>

      <!-- 抽屉底部 -->
      <div v-if="hasFooter" :class="footerClass">
        <slot name="footer"></slot>
      </div>
    </div>
  </Teleport>
</template>
