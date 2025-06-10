<script setup lang="ts">
import { computed, ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useClickOutside, useEventListener } from '@versakit/shared'
import {
  popover,
  popoverTrigger,
  popoverContent,
  popoverTitle,
  popoverArrow,
  popoverClose,
} from './index.variants'
import type {
  PopoverProps,
  PopoverPassThroughAttributes,
  PopoverEmits,
} from './type'

const props = withDefaults(
  defineProps<PopoverProps & { pt?: PopoverPassThroughAttributes }>(),
  {
    modelValue: false,
    placement: 'bottom',
    trigger: 'click',
    arrow: true,
    disabled: false,
    showDelay: 0,
    hideDelay: 0,
    unstyled: false,
    width: undefined,
    maxWidth: undefined,
    popperStyle: () => ({}),
    popperClass: '',
    triggerClass: '',
    showClose: false,
    closeOnClickOutside: true,
    closeOnEsc: true,
    persistent: false,
  },
)

const emit = defineEmits<PopoverEmits>()

// 响应式状态
const visible = ref(props.modelValue)
const triggerRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const showTimer = ref<number | null>(null)
const hideTimer = ref<number | null>(null)

// 计算样式
const rootClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return popover()
})

const triggerClasses = computed(() => {
  if (props.unstyled) {
    return props.triggerClass || {}
  }
  return popoverTrigger({
    disabled: props.disabled,
    class: props.triggerClass,
  })
})

const contentClasses = computed(() => {
  if (props.unstyled) {
    return props.popperClass || {}
  }
  return popoverContent({
    class: props.popperClass,
  })
})

const titleClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return popoverTitle()
})

const arrowClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return popoverArrow()
})

const closeClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return popoverClose()
})

const contentStyle = computed(() => {
  const style: Record<string, any> = { ...props.popperStyle }

  if (props.width !== undefined) {
    style.width =
      typeof props.width === 'number' ? `${props.width}px` : props.width
  }

  if (props.maxWidth !== undefined) {
    style.maxWidth =
      typeof props.maxWidth === 'number'
        ? `${props.maxWidth}px`
        : props.maxWidth
  }

  return style
})

// 方法
const show = () => {
  if (props.disabled) return

  if (showTimer.value) {
    clearTimeout(showTimer.value)
    showTimer.value = null
  }

  if (hideTimer.value) {
    clearTimeout(hideTimer.value)
    hideTimer.value = null
  }

  if (props.showDelay) {
    showTimer.value = window.setTimeout(() => {
      visible.value = true
      emit('show')
    }, props.showDelay)
  } else {
    visible.value = true
    emit('show')
  }
}

const hide = () => {
  if (hideTimer.value) {
    clearTimeout(hideTimer.value)
    hideTimer.value = null
  }

  if (showTimer.value) {
    clearTimeout(showTimer.value)
    showTimer.value = null
  }

  if (props.hideDelay) {
    hideTimer.value = window.setTimeout(() => {
      visible.value = false
      emit('hide')
    }, props.hideDelay)
  } else {
    visible.value = false
    emit('hide')
  }
}

const toggle = () => {
  if (visible.value) {
    hide()
  } else {
    show()
  }
}

const handleClickOutside = (event: MouseEvent) => {
  if (
    props.closeOnClickOutside &&
    visible.value &&
    contentRef.value &&
    triggerRef.value &&
    !contentRef.value.contains(event.target as Node) &&
    !triggerRef.value.contains(event.target as Node)
  ) {
    hide()
  }
}

const handleEscKeydown = (event: Event) => {
  const keyboardEvent = event as KeyboardEvent
  if (props.closeOnEsc && visible.value && keyboardEvent.key === 'Escape') {
    hide()
  }
}

// 事件处理
const handleClick = () => {
  if (props.trigger === 'click') {
    toggle()
  }
}

const handleMouseenter = () => {
  if (props.trigger === 'hover') {
    show()
  }
}

const handleMouseleave = () => {
  if (props.trigger === 'hover') {
    hide()
  }
}

const handleFocus = () => {
  if (props.trigger === 'focus') {
    show()
  }
}

const handleBlur = () => {
  if (props.trigger === 'focus') {
    hide()
  }
}

const handleAfterEnter = () => {
  emit('after-enter')
}

const handleAfterLeave = () => {
  emit('after-leave')
}

// 侦听器
watch(
  () => props.modelValue,
  (val) => {
    visible.value = val
  },
)

watch(
  () => visible.value,
  (val) => {
    emit('update:modelValue', val)
    nextTick(() => {
      updatePopper()
    })
  },
)

// 更新popper定位
const updatePopper = () => {
  if (!contentRef.value || !triggerRef.value) return

  // 这里可以使用Floating UI或其他库实现精确定位
  // 简单起见，这里使用基本的位置计算
  const triggerRect = triggerRef.value.getBoundingClientRect()
  const contentRect = contentRef.value.getBoundingClientRect()

  // 基本位置计算
  let top = 0
  let left = 0

  switch (props.placement) {
    case 'top':
      top = -contentRect.height
      left = (triggerRect.width - contentRect.width) / 2
      break
    case 'top-start':
      top = -contentRect.height
      left = 0
      break
    case 'top-end':
      top = -contentRect.height
      left = triggerRect.width - contentRect.width
      break
    case 'bottom':
      top = triggerRect.height
      left = (triggerRect.width - contentRect.width) / 2
      break
    case 'bottom-start':
      top = triggerRect.height
      left = 0
      break
    case 'bottom-end':
      top = triggerRect.height
      left = triggerRect.width - contentRect.width
      break
    case 'left':
      top = (triggerRect.height - contentRect.height) / 2
      left = -contentRect.width
      break
    case 'left-start':
      top = 0
      left = -contentRect.width
      break
    case 'left-end':
      top = triggerRect.height - contentRect.height
      left = -contentRect.width
      break
    case 'right':
      top = (triggerRect.height - contentRect.height) / 2
      left = triggerRect.width
      break
    case 'right-start':
      top = 0
      left = triggerRect.width
      break
    case 'right-end':
      top = triggerRect.height - contentRect.height
      left = triggerRect.width
      break
    default:
      break
  }

  // 应用定位
  contentRef.value.style.top = `${top}px`
  contentRef.value.style.left = `${left}px`

  // 设置data-side属性用于动画
  const side = props.placement.split('-')[0]
  contentRef.value.setAttribute('data-side', side)
}

// 生命周期钩子
onMounted(() => {
  let clickOutsideCleanup: (() => void) | undefined

  if (props.closeOnClickOutside) {
    clickOutsideCleanup = useClickOutside(contentRef, handleClickOutside)
  }

  let escKeydownCleanup: (() => void) | undefined
  if (props.closeOnEsc) {
    escKeydownCleanup = useEventListener(window, 'keydown', handleEscKeydown)
  }

  if (props.modelValue) {
    visible.value = true
    nextTick(() => {
      updatePopper()
    })
  }

  // 卸载时清理事件监听器
  onBeforeUnmount(() => {
    if (clickOutsideCleanup) {
      clickOutsideCleanup()
    }

    if (escKeydownCleanup) {
      escKeydownCleanup()
    }

    if (showTimer.value) {
      clearTimeout(showTimer.value)
    }

    if (hideTimer.value) {
      clearTimeout(hideTimer.value)
    }
  })
})

// 定义暴露的方法
defineExpose({
  show,
  hide,
  toggle,
})
</script>

<template>
  <div :class="rootClasses" v-bind="{ ...$attrs, ...props.pt?.root }">
    <div
      ref="triggerRef"
      :class="triggerClasses"
      @click="handleClick"
      @mouseenter="handleMouseenter"
      @mouseleave="handleMouseleave"
      @focus="handleFocus"
      @blur="handleBlur"
      v-bind="props.pt?.trigger"
    >
      <slot />
    </div>

    <Teleport to="body">
      <transition
        name="popover"
        @after-enter="handleAfterEnter"
        @after-leave="handleAfterLeave"
      >
        <div
          v-if="visible"
          v-show="visible"
          ref="contentRef"
          :class="contentClasses"
          :style="contentStyle"
          role="tooltip"
          v-bind="props.pt?.content"
        >
          <div
            v-if="title || $slots.title"
            :class="titleClasses"
            v-bind="props.pt?.title"
          >
            <slot name="title">{{ title }}</slot>
          </div>

          <slot name="content">{{ content }}</slot>

          <div v-if="arrow" :class="arrowClasses" v-bind="props.pt?.arrow">
            <slot name="arrow">
              <div class="popover-arrow"></div>
            </slot>
          </div>

          <button
            v-if="showClose"
            :class="closeClasses"
            @click="hide"
            aria-label="Close"
            v-bind="props.pt?.close"
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
      </transition>
    </Teleport>
  </div>
</template>

<style scoped>
.popover-enter-active,
.popover-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}

.popover-enter-from,
.popover-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.popover-arrow {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
  visibility: hidden;
}

.popover-arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
  visibility: visible;
  content: '';
  transform: rotate(45deg);
}

[data-side='top'] .popover-arrow {
  bottom: -4px;
}

[data-side='right'] .popover-arrow {
  left: -4px;
}

[data-side='bottom'] .popover-arrow {
  top: -4px;
}

[data-side='left'] .popover-arrow {
  right: -4px;
}
</style>
