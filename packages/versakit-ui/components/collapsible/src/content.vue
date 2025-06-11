<script setup lang="ts">
import { computed, inject, onMounted, ref, watch } from 'vue'
import { collapsible } from './index.variants'
import type {
  CollapsibleContentProps,
  CollapsibleContext,
  CollapsiblePassThroughAttributes,
} from './type'

const props = withDefaults(
  defineProps<
    CollapsibleContentProps & { pt?: CollapsiblePassThroughAttributes }
  >(),
  {
    unstyled: false,
  },
)

// 注入上下文
const context = inject<CollapsibleContext>('collapsible-context', {
  open: false,
  disabled: false,
  toggle: () => {},
})

// 获取根组件实例的duration属性
const rootProps = inject('collapsible-props', { duration: 300 })

// DOM引用
const contentRef = ref<HTMLDivElement | null>(null)
const innerRef = ref<HTMLDivElement | null>(null)

// 高度状态
const contentHeight = ref('0px')
const isAnimating = ref(false)

// 计算样式
const classes = computed(() => {
  if (props.unstyled) {
    return {
      content: '',
      contentInner: '',
    }
  }
  return collapsible({
    disabled: context.disabled,
    open: context.open,
  })
})

// 设置内容高度
const setContentHeight = () => {
  if (!innerRef.value) return

  contentHeight.value = `${innerRef.value.scrollHeight}px`
}

// 展开收起动画
const animate = () => {
  if (!contentRef.value || !innerRef.value) return

  isAnimating.value = true

  if (context.open) {
    // 展开动画
    setContentHeight()

    setTimeout(() => {
      contentHeight.value = 'auto'
      isAnimating.value = false
    }, rootProps.duration)
  } else {
    // 收起前先设置具体高度，避免从auto到0的过渡问题
    contentHeight.value = `${innerRef.value.scrollHeight}px`

    // 等待一帧，确保高度已应用
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        contentHeight.value = '0px'

        setTimeout(() => {
          isAnimating.value = false
        }, rootProps.duration)
      })
    })
  }
}

// 计算内容样式
const contentStyle = computed(() => {
  return {
    height: contentHeight.value,
    transition: isAnimating.value
      ? `height ${rootProps.duration}ms ease-in-out`
      : '',
    display:
      !context.open && contentHeight.value === '0px' && !isAnimating.value
        ? 'none'
        : 'block',
  }
})

// 监听open状态变化
watch(
  () => context.open,
  () => {
    animate()
  },
)

// 组件挂载后初始化
onMounted(() => {
  if (context.open) {
    contentHeight.value = 'auto'
  }
})
</script>

<template>
  <div
    ref="contentRef"
    :class="classes.content"
    :style="contentStyle"
    v-bind="{ ...pt?.content }"
  >
    <div ref="innerRef" :class="classes.contentInner">
      <slot />
    </div>
  </div>
</template>
