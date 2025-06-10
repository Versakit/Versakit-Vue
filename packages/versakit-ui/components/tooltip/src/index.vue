<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { createPopper } from '@popperjs/core'
import type { Instance } from '@popperjs/core'
import { tooltip } from './index.variants'
import type { TooltipProps, TooltipPassThroughAttributes } from './type'

const props = withDefaults(
  defineProps<TooltipProps & { pt?: TooltipPassThroughAttributes }>(),
  {
    content: '',
    placement: 'top',
    trigger: 'hover',
    theme: 'auto',
    variant: 'primary',
    size: 'md',
    disabled: false,
    arrow: true,
    interactive: false,
    showDelay: 200,
    hideDelay: 200,
    maxWidth: '300px',
    zIndex: 1000,
    offset: 8,
    modelValue: undefined,
    unstyled: false,
  },
)

const emit = defineEmits(['update:modelValue'])

// 内部状态
const isVisible = ref(false)
const triggerRef = ref<HTMLElement | null>(null)
const tooltipRef = ref<HTMLElement | null>(null)
const arrowRef = ref<HTMLElement | null>(null)
const popperInstance = ref<Instance | null>(null)
const showTimeoutId = ref<number | null>(null)
const hideTimeoutId = ref<number | null>(null)

// 计算样式
const classes = computed(() => {
  if (props.unstyled) {
    return {
      root: '',
      content: '',
      arrow: '',
    }
  }
  return tooltip({
    theme: props.theme,
    variant: props.variant,
    size: props.size,
    placement: props.placement,
    disabled: props.disabled,
  })
})

// 计算内容样式
const contentStyle = computed(() => {
  return {
    maxWidth: props.maxWidth,
    zIndex: props.zIndex,
  }
})

// 监听modelValue变化
watch(
  () => props.modelValue,
  (val) => {
    if (val !== undefined) {
      if (val) {
        show()
      } else {
        hide()
      }
    }
  },
)

// 监听可见性变化，同步到modelValue
watch(isVisible, (val) => {
  if (props.modelValue !== undefined) {
    emit('update:modelValue', val)
  }
})

// 显示提示框
const show = () => {
  if (props.disabled) return

  if (hideTimeoutId.value) {
    clearTimeout(hideTimeoutId.value)
    hideTimeoutId.value = null
  }

  if (showTimeoutId.value) return

  showTimeoutId.value = window.setTimeout(() => {
    isVisible.value = true
    showTimeoutId.value = null

    nextTick(() => {
      createPopperInstance()
      popperInstance.value?.update()
    })
  }, props.showDelay)
}

// 隐藏提示框
const hide = () => {
  if (showTimeoutId.value) {
    clearTimeout(showTimeoutId.value)
    showTimeoutId.value = null
  }

  if (hideTimeoutId.value) return

  hideTimeoutId.value = window.setTimeout(() => {
    isVisible.value = false
    hideTimeoutId.value = null

    // 延迟销毁Popper实例，以便动画可以完成
    setTimeout(() => {
      destroyPopperInstance()
    }, 300)
  }, props.hideDelay)
}

// 创建Popper实例
const createPopperInstance = () => {
  if (!triggerRef.value || !tooltipRef.value) return

  if (popperInstance.value) {
    popperInstance.value.destroy()
  }

  popperInstance.value = createPopper(triggerRef.value, tooltipRef.value, {
    placement: props.placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, props.offset],
        },
      },
      {
        name: 'arrow',
        options: {
          element: arrowRef.value,
          padding: 5,
        },
      },
      {
        name: 'preventOverflow',
        options: {
          padding: 8,
        },
      },
    ],
  })
}

// 销毁Popper实例
const destroyPopperInstance = () => {
  if (popperInstance.value) {
    popperInstance.value.destroy()
    popperInstance.value = null
  }
}

// 事件处理
const handleMouseEnter = () => {
  if (props.trigger === 'hover') {
    show()
  }
}

const handleMouseLeave = () => {
  if (props.trigger === 'hover' && !props.interactive) {
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

const handleClick = () => {
  if (props.trigger === 'click') {
    if (isVisible.value) {
      hide()
    } else {
      show()
    }
  }
}

const handleContentMouseEnter = () => {
  if (props.trigger === 'hover' && props.interactive) {
    show()
  }
}

const handleContentMouseLeave = () => {
  if (props.trigger === 'hover' && props.interactive) {
    hide()
  }
}

// 处理点击外部
const handleOutsideClick = (event: MouseEvent) => {
  if (
    props.trigger === 'click' &&
    isVisible.value &&
    triggerRef.value &&
    tooltipRef.value &&
    !triggerRef.value.contains(event.target as Node) &&
    !tooltipRef.value.contains(event.target as Node)
  ) {
    hide()
  }
}

// 生命周期钩子
onMounted(() => {
  document.addEventListener('click', handleOutsideClick)

  // 如果是手动模式且初始值为true，则显示提示框
  if (props.trigger === 'manual' && props.modelValue) {
    nextTick(() => {
      show()
    })
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick)
  destroyPopperInstance()

  if (showTimeoutId.value) {
    clearTimeout(showTimeoutId.value)
  }

  if (hideTimeoutId.value) {
    clearTimeout(hideTimeoutId.value)
  }
})
</script>

<template>
  <div :class="classes.root" v-bind="props.pt?.root">
    <div
      ref="triggerRef"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @focus="handleFocus"
      @blur="handleBlur"
      @click="handleClick"
      v-bind="props.pt?.trigger"
    >
      <slot />
    </div>

    <teleport to="body">
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="isVisible"
          ref="tooltipRef"
          :class="classes.content"
          :style="contentStyle"
          role="tooltip"
          :aria-label="ariaLabel"
          @mouseenter="handleContentMouseEnter"
          @mouseleave="handleContentMouseLeave"
          v-bind="props.pt?.content"
        >
          <slot name="content">
            {{ content }}
          </slot>
          <div
            v-if="arrow"
            ref="arrowRef"
            :class="classes.arrow"
            data-popper-arrow
            v-bind="props.pt?.arrow"
          ></div>
        </div>
      </transition>
    </teleport>
  </div>
</template>
