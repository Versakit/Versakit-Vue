<template>
  <div :class="rootClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue'
import { accordionStyle } from './index.variants'
import type { AccordionProps } from './type'
import { AccordionEmits } from './type'

defineOptions({
  name: 'Accordion',
})

const props = withDefaults(defineProps<AccordionProps>(), {
  multiple: false,
  variant: 'default',
  radius: 'md',
  bordered: true,
  animated: true,
  disabled: false,
  unstyled: false,
})

const emit = defineEmits(AccordionEmits)

// 当前展开的面板
const expandedItems = ref<string[]>(
  Array.isArray(props.modelValue)
    ? props.modelValue
    : props.modelValue
      ? [props.modelValue]
      : [],
)

// 监听modelValue变化
watch(
  () => props.modelValue,
  (val) => {
    if (Array.isArray(val)) {
      expandedItems.value = val
    } else if (val) {
      expandedItems.value = [val]
    } else {
      expandedItems.value = []
    }
  },
)

// 根元素样式
const rootClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.root || ''
  }

  return accordionStyle({
    variant: props.variant,
    radius: props.radius,
    bordered: props.bordered,
    class: props.pt?.root,
  })
})

// 切换面板展开状态
const toggleItem = (value: string, expanded: boolean) => {
  let newExpandedItems: string[] = [...expandedItems.value]

  if (expanded) {
    // 展开面板
    if (props.multiple) {
      // 多面板模式：添加到已展开列表
      if (!newExpandedItems.includes(value)) {
        newExpandedItems.push(value)
      }
    } else {
      // 单面板模式：替换已展开列表
      newExpandedItems = [value]
    }
  } else {
    // 收起面板
    newExpandedItems = newExpandedItems.filter((item) => item !== value)
  }

  expandedItems.value = newExpandedItems

  // 更新v-model
  if (props.multiple) {
    emit('update:modelValue', newExpandedItems)
    emit('change', newExpandedItems)
  } else {
    const singleValue =
      newExpandedItems.length > 0 ? newExpandedItems[0] : undefined
    emit('update:modelValue', singleValue)
    emit('change', singleValue)
  }
}

// 检查面板是否展开
const isItemExpanded = (value: string) => {
  return expandedItems.value.includes(value)
}

// 向子组件提供的上下文
provide('accordionContext', {
  disabled: computed(() => props.disabled),
  animated: computed(() => props.animated),
  toggleItem,
  isItemExpanded,
})
</script>
