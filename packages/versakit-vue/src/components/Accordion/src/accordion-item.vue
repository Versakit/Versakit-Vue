<template>
  <div :class="rootClass">
    <div :class="headerClass">
      <button
        type="button"
        :class="triggerClass"
        :aria-expanded="expanded"
        :aria-disabled="isDisabled"
        @click="handleClick"
      >
        <div :class="titleClass">
          <slot name="header">{{ header }}</slot>
        </div>
        <div :class="iconClass">
          <slot name="icon">
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
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </slot>
        </div>
      </button>
    </div>
    <div :class="contentClass" ref="contentEl">
      <div :class="contentInnerClass">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, ref, watch } from 'vue'
import {
  accordionItemStyle,
  accordionItemHeaderStyle,
  accordionItemTriggerStyle,
  accordionItemTitleStyle,
  accordionItemIconStyle,
  accordionItemContentStyle,
  accordionItemContentInnerStyle,
} from './index.variants'
import type { AccordionItemProps } from './type'
import { AccordionItemEmits } from './type'

defineOptions({
  name: 'AccordionItem',
})

const props = withDefaults(defineProps<AccordionItemProps>(), {
  disabled: false,
  unstyled: false,
})

const emit = defineEmits(AccordionItemEmits)

// 注入来自Accordion父组件的上下文
const accordionContext = inject('accordionContext', {
  disabled: computed(() => false),
  animated: computed(() => true),

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  toggleItem: (value: string, expanded: boolean) => {},
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  isItemExpanded: (value: string) => false,
})

// 是否禁用
const isDisabled = computed(
  () => props.disabled || accordionContext.disabled.value,
)

// 是否展开
const expanded = computed(() => accordionContext.isItemExpanded(props.value))

// 内容元素引用
const contentEl = ref<HTMLDivElement | null>(null)

// 监听expanded变化，更新内容高度
watch(
  () => expanded.value,
  (val) => {
    if (!accordionContext.animated.value || !contentEl.value) return

    if (val) {
      // 展开动画
      const el = contentEl.value
      el.style.height = '0'
      void el.offsetHeight // 触发重排
      el.style.height = `${el.scrollHeight}px`

      const onTransitionEnd = () => {
        if (expanded.value) {
          el.style.height = ''
        }
        el.removeEventListener('transitionend', onTransitionEnd)
      }

      el.addEventListener('transitionend', onTransitionEnd)
    } else {
      // 收起动画
      const el = contentEl.value
      const height = el.offsetHeight
      el.style.height = `${height}px`
      void el.offsetHeight // 触发重排
      el.style.height = '0'
    }
  },
)

// 处理点击事件
const handleClick = (e: MouseEvent) => {
  if (isDisabled.value) return

  emit('click', e)

  const newExpanded = !expanded.value
  accordionContext.toggleItem(props.value, newExpanded)
  emit('toggle', newExpanded)
}

// 根元素样式
const rootClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.root || ''
  }

  return accordionItemStyle({
    class: props.pt?.root,
  })
})

// 头部样式
const headerClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.header || ''
  }

  return accordionItemHeaderStyle({
    class: props.pt?.header,
  })
})

// 触发器样式
const triggerClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.trigger || ''
  }

  return accordionItemTriggerStyle({
    disabled: isDisabled.value,
    class: props.pt?.trigger,
  })
})

// 标题样式
const titleClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.title || ''
  }

  return accordionItemTitleStyle({
    class: props.pt?.title,
  })
})

// 图标样式
const iconClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.icon || ''
  }

  return accordionItemIconStyle({
    expanded: expanded.value,
    class: props.pt?.icon,
  })
})

// 内容容器样式
const contentClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.content || ''
  }

  return accordionItemContentStyle({
    animated: accordionContext.animated.value,
    expanded: expanded.value,
    class: props.pt?.content,
  })
})

// 内容区域样式
const contentInnerClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.contentInner || ''
  }

  return accordionItemContentInnerStyle({
    class: props.pt?.contentInner,
  })
})

// 组件挂载后初始化内容高度
onMounted(() => {
  if (contentEl.value && !expanded.value) {
    contentEl.value.style.height = '0'
  }
})
</script>
