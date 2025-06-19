<script setup lang="ts">
import { computed, watch, onMounted, nextTick, ref } from 'vue'
import { usePopover } from '@versakit/composables'
import {
  popoverTrigger,
  popoverContent,
  popoverArrow,
  popoverTitle,
  popoverBody,
} from './index.variants'
import type { PopoverProps } from './type'

defineOptions({
  name: 'Popover',
})

const props = withDefaults(defineProps<PopoverProps>(), {
  modelValue: false,
  placement: 'bottom',
  trigger: 'click',
  showArrow: true,
  offset: 8,
  transition: 'none',
  teleport: true,
  zIndex: 1000,
  openDelay: 0,
  closeDelay: 0,
  followCursor: false,
  unbound: false,
  color: 'default',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

// 鼠标位置跟踪
const mouseX = ref(0)
const mouseY = ref(0)

// 使用usePopover并传递所有需要的参数
const {
  isOpen,
  toggle,
  triggerRef,
  popoverRef,
  popoverId,
  updatePosition,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  setIsOpen,
} = usePopover({
  placement: props.placement,
  offset: props.offset,
  openDelay: props.openDelay,
  closeDelay: props.closeDelay,
  followCursor: props.followCursor,
  unbound: props.unbound,
  onClose: () => emit('update:modelValue', false),
})

// 同步外部和内部状态
watch(
  () => props.modelValue,
  (val) => {
    if (val !== isOpen.value) {
      setIsOpen(val)
      // 如果显示，立即更新位置
      if (val) {
        nextTick(updatePosition)
      }
    }
  },
)

watch(isOpen, (val) => {
  emit('update:modelValue', val)
})

// 当placement或offset等变化时，更新位置
watch(
  () => [props.placement, props.offset, props.followCursor, props.unbound],
  () => {
    if (isOpen.value) {
      nextTick(updatePosition)
    }
  },
)

// 初始状态同步
onMounted(() => {
  if (props.modelValue) {
    nextTick(() => {
      setIsOpen(true)
      // 立即更新位置
      nextTick(updatePosition)
    })
  }
})

// 处理鼠标移动
const handleMouseMove = (e: MouseEvent) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

// 处理触发方式
const handleTriggerClick = () => {
  if (props.disabled) return
  if (props.trigger === 'click' || props.trigger === 'manual') {
    toggle()
    // 立即更新位置
    if (!isOpen.value) {
      nextTick(updatePosition)
    }
  }
}

const handleTriggerMouseEnter = (e: MouseEvent) => {
  if (props.disabled) return
  mouseX.value = e.clientX
  mouseY.value = e.clientY
  if (props.trigger === 'hover') {
    onMouseEnter()
    // 立即更新位置
    nextTick(updatePosition)
  }
}

const handleTriggerMouseLeave = () => {
  if (props.disabled) return
  if (props.trigger === 'hover') {
    onMouseLeave()
  }
}

const handleTriggerFocus = () => {
  if (props.disabled) return
  onFocus()
  // 立即更新位置
  nextTick(updatePosition)
}

const handleTriggerBlur = () => {
  if (props.disabled) return
  onBlur()
}

// 计算样式
const triggerClass = computed(() => {
  return popoverTrigger({
    disabled: props.disabled,
  })
})

const contentClass = computed(() => {
  return popoverContent({
    placement: props.placement,
    visible: isOpen.value,
    color: props.color,
  })
})

const arrowClass = computed(() => {
  return popoverArrow({
    placement: props.placement,
    color: props.color,
  })
})

const titleClass = computed(() => {
  return popoverTitle({
    color: props.color,
  })
})

const bodyClass = computed(() => {
  return popoverBody({
    color: props.color,
  })
})

// 计算内容样式
const contentStyle = computed(() => {
  const style: Record<string, string> = {
    zIndex: props.zIndex?.toString() || '1000',
    transition: 'none', // 确保没有CSS过渡效果
  }

  if (props.width) {
    style.width =
      typeof props.width === 'number' ? `${props.width}px` : props.width
  }

  return style
})

// 获取teleport目标
const getTeleportTo = computed(() => {
  if (props.teleport === false) return null
  if (typeof props.teleport === 'string') return props.teleport
  return 'body'
})

// 直接更新位置
const updatePopoverPosition = () => {
  if (isOpen.value && popoverRef.value) {
    // 确保DOM已更新
    nextTick(() => {
      updatePosition()
      // 直接设置样式移除过渡动画
      if (popoverRef.value) {
        popoverRef.value.style.transition = 'none'
      }
    })
  }
}

// 向外部暴露方法
defineExpose({
  show: () => {
    setIsOpen(true)
    nextTick(updatePopoverPosition)
  },
  hide: () => setIsOpen(false),
  toggle: () => {
    toggle()
    if (!isOpen.value) {
      nextTick(updatePopoverPosition)
    }
  },
  updatePosition: updatePopoverPosition,
})
</script>

<template>
  <div class="relative inline-block" @mousemove="handleMouseMove">
    <!-- 触发元素，仅在非unbound模式下渲染 -->
    <div
      v-if="!unbound"
      ref="triggerRef"
      :class="triggerClass"
      :aria-describedby="popoverId"
      @click="handleTriggerClick"
      @mouseenter="handleTriggerMouseEnter"
      @mouseleave="handleTriggerMouseLeave"
      @focus="handleTriggerFocus"
      @blur="handleTriggerBlur"
    >
      <slot name="trigger"></slot>
    </div>

    <!-- 弹出内容，移除transition包装器直接显示 -->
    <teleport :to="getTeleportTo" :disabled="!getTeleportTo">
      <div
        v-if="isOpen && !disabled"
        ref="popoverRef"
        :class="contentClass"
        :style="contentStyle"
        :id="popoverId"
        role="tooltip"
        aria-live="polite"
      >
        <div
          v-if="showArrow && !followCursor && !unbound"
          :class="arrowClass"
        ></div>
        <div v-if="title" :class="titleClass">{{ title }}</div>
        <div :class="bodyClass">
          <slot>{{ content }}</slot>
        </div>
      </div>
    </teleport>
  </div>
</template>
