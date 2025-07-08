<template>
  <div :class="classes.root()" ref="triggerRef">
    <!-- 触发元素 -->
    <div
      :class="classes.trigger()"
      @click="onTriggerClick"
      ref="triggerContentRef"
    >
      <slot name="trigger"></slot>
    </div>

    <!-- 下拉内容 -->
    <Teleport to="body">
      <div
        v-show="isOpen"
        :class="classes.content()"
        :style="contentStyle"
        ref="contentRef"
        v-bind="$attrs"
        tabindex="-1"
      >
        <div v-if="arrow" :class="classes.arrow()" :style="arrowStyle"></div>
        <div :class="classes.menu()">
          <slot>
            <template v-if="options && options.length > 0">
              <DropdownItem
                v-for="(option, index) in options"
                :key="index"
                :value="option.value"
                :label="option.label"
                :icon="option.icon"
                :disabled="option.disabled"
                :divider="option.divider"
              />
            </template>
          </slot>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, provide, onBeforeUnmount } from 'vue'
import {
  useEventListener,
  useMounted,
  useElementBounding,
  useElementSize,
  useWindowSize,
  onClickOutside,
  useDebounceFn,
  useVModel,
} from '@vueuse/core'
import type { DropdownProps, DropdownContext } from './type'
import { dropdownStyle } from './index.variants'
import DropdownItem from './dropdown-item.vue'

const props = withDefaults(defineProps<DropdownProps>(), {
  options: () => [],
  trigger: 'click',
  placement: 'bottom-start',
  disabled: false,
  arrow: false,
  unstyled: false,
})

const emit = defineEmits<{
  (e: 'update:visible', visible: boolean): void
  (e: 'select', value: any): void
}>()

// 引用和状态
const triggerRef = ref<HTMLElement | null>(null)
const triggerContentRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)

// 使用useVModel处理双向绑定
const isOpen = useVModel(props, 'visible', emit, {
  defaultValue: false,
})

// 使用@vueuse/core获取元素大小和位置
const triggerBounding = useElementBounding(triggerRef)
const contentSize = useElementSize(contentRef)
const windowSize = useWindowSize()
const isMounted = useMounted()

// 计算样式类
const classes = computed(() => {
  if (props.unstyled) {
    return {
      root: () => props.pt?.root || '',
      trigger: () => props.pt?.trigger || '',
      content: () => props.pt?.content || '',
      arrow: () => props.pt?.arrow || '',
      menu: () => props.pt?.menu || '',
      menuItem: () => props.pt?.menuItem || '',
      menuItemIcon: () => props.pt?.menuItemIcon || '',
      menuItemLabel: () => props.pt?.menuItemLabel || '',
      menuDivider: () => props.pt?.menuDivider || '',
    }
  }

  return dropdownStyle({
    disabled: props.disabled,
  })
})

// 为子组件提供数据和方法
provide('dropdown', {
  onItemClick: (value: any) => {
    emit('select', value)
    closeDropdown()
  },
  unstyled: props.unstyled,
  pt: props.pt || {},
} as DropdownContext)

// 计算下拉内容的位置样式
const contentStyle = computed(() => {
  if (!isMounted.value) return { display: 'none' }

  const style: Record<string, string> = {
    position: 'absolute',
    zIndex: '9999',
  }

  // 设置最小宽度
  if (!props.minWidth) {
    style.minWidth = `${triggerBounding.width.value}px`
  } else {
    style.minWidth =
      typeof props.minWidth === 'number'
        ? `${props.minWidth}px`
        : props.minWidth
  }

  // 设置最大宽度
  if (props.maxWidth) {
    style.maxWidth =
      typeof props.maxWidth === 'number'
        ? `${props.maxWidth}px`
        : props.maxWidth
  }

  // 根据placement计算位置
  const { top, left, bottom, right, height, width } = triggerBounding
  const placement = props.placement
  const offset = 8 // 偏移量

  // 水平位置
  if (placement.includes('start')) {
    style.left = `${left.value}px`
  } else if (placement.includes('end')) {
    style.right = `${windowSize.width.value - right.value}px`
  } else if (placement === 'left' || placement.includes('left')) {
    style.right = `${windowSize.width.value - left.value + offset}px`
  } else if (placement === 'right' || placement.includes('right')) {
    style.left = `${right.value + offset}px`
  } else {
    // 居中
    style.left = `${left.value + width.value / 2 - contentSize.width.value / 2}px`
  }

  // 垂直位置
  if (placement.includes('top')) {
    style.bottom = `${windowSize.height.value - top.value + offset}px`
  } else if (placement.includes('bottom')) {
    style.top = `${bottom.value + offset}px`
  } else if (placement === 'left' || placement === 'right') {
    style.top = `${top.value + height.value / 2 - contentSize.height.value / 2}px`
  } else if (placement.includes('left-') || placement.includes('right-')) {
    if (placement.includes('-start')) {
      style.top = `${top.value}px`
    } else if (placement.includes('-end')) {
      style.bottom = `${windowSize.height.value - bottom.value}px`
    }
  }

  return style
})

// 计算箭头样式
const arrowStyle = computed(() => {
  if (!props.arrow || !isMounted.value) return {}

  const style: Record<string, string> = {}
  const placement = props.placement
  const arrowSize = 8 // 箭头大小

  if (placement.includes('top')) {
    style.bottom = `-${arrowSize / 2}px`
    style.transform = 'rotate(45deg)'
  } else if (placement.includes('bottom')) {
    style.top = `-${arrowSize / 2}px`
    style.transform = 'rotate(45deg)'
  } else if (placement.includes('left')) {
    style.right = `-${arrowSize / 2}px`
    style.transform = 'rotate(45deg)'
  } else if (placement.includes('right')) {
    style.left = `-${arrowSize / 2}px`
    style.transform = 'rotate(45deg)'
  }

  // 水平位置
  if (placement === 'top' || placement === 'bottom') {
    style.left = '50%'
    style.marginLeft = `-${arrowSize / 2}px`
  } else if (placement.includes('start')) {
    style.left = `${arrowSize * 2}px`
  } else if (placement.includes('end')) {
    style.right = `${arrowSize * 2}px`
  }

  return style
})

// 打开下拉菜单
const openDropdown = () => {
  if (props.disabled) return

  if (props.trigger !== 'manual') {
    isOpen.value = true
  } else {
    emit('update:visible', true)
  }
}

// 关闭下拉菜单
const closeDropdown = () => {
  if (props.trigger !== 'manual') {
    isOpen.value = false
  } else {
    emit('update:visible', false)
  }
}

// 切换下拉菜单
const toggleDropdown = () => {
  if (isOpen.value) {
    closeDropdown()
  } else {
    openDropdown()
  }
}

// 处理触发器点击
const onTriggerClick = () => {
  if (props.disabled) return
  if (props.trigger === 'click' || props.trigger === 'manual') {
    toggleDropdown()
  }
}

// 使用useDebounceFn防止频繁更新
const updatePosition = useDebounceFn(() => {
  if (!isOpen.value) return
  // 触发重新计算
  triggerBounding.update()
}, 16)

// 监听窗口大小变化和滚动
useEventListener(window, 'resize', updatePosition)
useEventListener(window, 'scroll', updatePosition, {
  capture: true,
  passive: true,
})

// 处理点击外部
onClickOutside(
  contentRef,
  (event: MouseEvent) => {
    // 如果点击的是触发器或其内部元素，则不关闭
    if (triggerRef.value?.contains(event.target as Node)) return
    if (isOpen.value) closeDropdown()
  },
  { ignore: [triggerRef] },
)

// 处理悬停触发
if (props.trigger === 'hover') {
  useEventListener(triggerRef, 'mouseenter', openDropdown)
  useEventListener(triggerRef, 'mouseleave', () => {
    // 给用户一点时间移动到下拉菜单
    setTimeout(closeDropdown, 200)
  })

  // 鼠标进入内容区域时保持打开
  useEventListener(contentRef, 'mouseenter', () => {
    if (props.trigger === 'hover') {
      isOpen.value = true
    }
  })

  // 鼠标离开内容区域时关闭
  useEventListener(contentRef, 'mouseleave', () => {
    if (props.trigger === 'hover') {
      closeDropdown()
    }
  })
}

// 处理焦点触发
if (props.trigger === 'focus') {
  useEventListener(triggerContentRef, 'focusin', openDropdown)
  useEventListener(triggerContentRef, 'focusout', (e) => {
    // 如果焦点转移到下拉内容，则不关闭
    if (contentRef.value?.contains(e.relatedTarget as Node)) return
    closeDropdown()
  })
}

// 监听visible属性变化
watch(
  () => props.visible,
  (val) => {
    if (props.trigger === 'manual') {
      isOpen.value = val || false
    }
  },
  { immediate: true },
)

// 监听isOpen变化，更新位置
watch(isOpen, (val) => {
  if (val) {
    nextTick(() => {
      updatePosition()
    })
  }
})

// 组件卸载时关闭下拉菜单
onBeforeUnmount(() => {
  isOpen.value = false
})
</script>
