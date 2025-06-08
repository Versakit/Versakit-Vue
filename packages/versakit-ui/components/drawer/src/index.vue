<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import {
  drawer,
  drawerOverlay,
  drawerHeader,
  drawerTitle,
  drawerClose,
  drawerBody,
  drawerFooter,
} from './index.variants'
import type { DrawerProps, DrawerSize } from './type'

const props = withDefaults(defineProps<DrawerProps>(), {
  modelValue: false,
  title: '',
  size: 'md',
  placement: 'right',
  closable: true,
  closeOnClickOverlay: true,
  overlay: true,
  showHeader: true,
  showFooter: false,
  closeOnEsc: true,
  rounded: false,
  a11y: true,
  zIndex: 1000,
  customClass: '',
  overlayOpacity: 0.5,
})

const emit = defineEmits(['update:modelValue', 'open', 'close'])

const visible = ref(props.modelValue)
const drawerRef = ref<HTMLElement | null>(null)

// 计算样式
const drawerStyle = computed(() => {
  if (
    typeof props.size === 'string' &&
    !['xs', 'sm', 'md', 'lg', 'xl', 'full'].includes(props.size)
  ) {
    // 如果是自定义尺寸
    if (['left', 'right'].includes(props.placement)) {
      return {
        width: props.size,
        zIndex: props.zIndex,
        backgroundColor: props.bgColor,
      }
    } else {
      return {
        height: props.size,
        zIndex: props.zIndex,
        backgroundColor: props.bgColor,
      }
    }
  }

  return { zIndex: props.zIndex, backgroundColor: props.bgColor }
})

// 计算变换样式，用于动画
const transformStyle = computed(() => {
  if (!visible.value) {
    switch (props.placement) {
      case 'left':
        return 'translateX(-100%)'
      case 'right':
        return 'translateX(100%)'
      case 'top':
        return 'translateY(-100%)'
      case 'bottom':
        return 'translateY(100%)'
    }
  }
  return 'translate(0, 0)'
})

// 确定是否为预设尺寸
const isPresetSize = (size: string): size is DrawerSize => {
  return ['xs', 'sm', 'md', 'lg', 'xl', 'full'].includes(size)
}

// 计算样式类
const drawerClasses = computed(() =>
  drawer({
    placement: props.placement,
    size:
      typeof props.size === 'string' && isPresetSize(props.size)
        ? props.size
        : undefined,
    rounded: props.rounded,
    class: props.customClass,
  }),
)

// 遮罩层样式
const overlayClasses = computed(() => drawerOverlay())
const overlayStyle = computed(() => ({
  opacity: visible.value ? props.overlayOpacity : 0,
  zIndex: props.zIndex - 1,
  visibility: visible.value ? ('visible' as const) : ('hidden' as const),
}))

// 头部样式
const headerClasses = computed(() => drawerHeader())
const titleClasses = computed(() => drawerTitle())
const closeClasses = computed(() => drawerClose())

// 内容样式
const bodyClasses = computed(() => drawerBody())

// 底部样式
const footerClasses = computed(() => drawerFooter())

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

// 关闭抽屉
const close = () => {
  visible.value = false
  emit('update:modelValue', false)
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

    <!-- 抽屉 -->
    <div
      v-show="modelValue"
      ref="drawerRef"
      :class="drawerClasses"
      :style="{ ...drawerStyle, transform: transformStyle }"
      role="dialog"
      :aria-modal="a11y ? 'true' : undefined"
      :aria-labelledby="a11y && title ? 'drawer-title' : undefined"
    >
      <!-- 抽屉头部 -->
      <div v-if="showHeader" :class="headerClasses">
        <h2
          v-if="title"
          :id="a11y ? 'drawer-title' : undefined"
          :class="titleClasses"
        >
          {{ title }}
        </h2>
        <slot v-else name="title"></slot>

        <button
          v-if="closable"
          :class="closeClasses"
          @click="close"
          :aria-label="a11y ? '关闭抽屉' : undefined"
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

      <!-- 抽屉内容 -->
      <div :class="bodyClasses">
        <slot></slot>
      </div>

      <!-- 抽屉底部 -->
      <div v-if="showFooter" :class="footerClasses">
        <slot name="footer"></slot>
      </div>
    </div>
  </teleport>
</template>
