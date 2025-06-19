<script setup lang="ts">
import { computed, watch, onMounted, nextTick } from 'vue'
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
  transition: 'fade',
  teleport: true,
  zIndex: 1000,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

// 使用usePopover并传递placement和offset
const { isOpen, open, close, toggle, triggerRef, popoverRef, updatePosition } =
  usePopover({
    placement: props.placement,
    offset: props.offset,
    onClose: () => emit('update:modelValue', false),
  })

// 同步外部和内部状态
watch(
  () => props.modelValue,
  (val) => {
    if (val !== isOpen.value) {
      if (val) {
        open()
      } else {
        close()
      }
    }
  },
)

watch(isOpen, (val) => {
  emit('update:modelValue', val)
})

// 当placement或offset变化时，更新位置
watch(
  () => [props.placement, props.offset],
  () => {
    if (isOpen.value) {
      nextTick(updatePosition)
    }
  },
)

// 初始状态同步
onMounted(() => {
  if (props.modelValue) {
    nextTick(() => open())
  }
})

// 处理触发方式
const handleTriggerClick = () => {
  if (props.disabled) return
  if (props.trigger === 'click' || props.trigger === 'manual') {
    toggle()
  }
}

const handleTriggerMouseEnter = () => {
  if (props.disabled) return
  if (props.trigger === 'hover') {
    open()
  }
}

const handleTriggerMouseLeave = () => {
  if (props.disabled) return
  if (props.trigger === 'hover') {
    close()
  }
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
  })
})

const arrowClass = computed(() => {
  return popoverArrow({
    placement: props.placement,
  })
})

const titleClass = computed(() => {
  return popoverTitle()
})

const bodyClass = computed(() => {
  return popoverBody()
})

// 计算内容样式
const contentStyle = computed(() => {
  const style: Record<string, string> = {
    zIndex: props.zIndex?.toString() || '1000',
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
</script>

<template>
  <div class="relative inline-block">
    <!-- 触发元素 -->
    <div
      ref="triggerRef"
      :class="triggerClass"
      @click="handleTriggerClick"
      @mouseenter="handleTriggerMouseEnter"
      @mouseleave="handleTriggerMouseLeave"
    >
      <slot name="trigger"></slot>
    </div>

    <!-- 弹出内容 -->
    <teleport :to="getTeleportTo" :disabled="!getTeleportTo">
      <transition :name="transition">
        <div
          v-show="isOpen"
          ref="popoverRef"
          :class="contentClass"
          :style="contentStyle"
          role="tooltip"
        >
          <div v-if="showArrow" :class="arrowClass"></div>
          <div v-if="title" :class="titleClass">{{ title }}</div>
          <div :class="bodyClass">
            <slot></slot>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>
