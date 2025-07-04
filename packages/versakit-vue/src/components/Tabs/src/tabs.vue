<template>
  <div
    :class="containerClass"
    :aria-disabled="disabled"
    role="tablist"
    @keydown="handleKeydown"
  >
    <div :class="navClass">
      <button
        v-for="item in tabItems"
        :key="item.name"
        :class="getNavItemClass(item.name, item.disabled)"
        role="tab"
        :aria-selected="isActive(item.name)"
        :aria-disabled="disabled || item.disabled"
        :tabindex="isActive(item.name) ? 0 : -1"
        @click="handleTabClick(item.name, item.disabled)"
      >
        {{ item.title }}
      </button>
    </div>
    <div :class="contentClass">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, useSlots, watch } from 'vue'
import type { VNode } from 'vue'
import { useTabs } from './composables/useTabs'
import {
  tabsContainer,
  tabsNav,
  tabsNavItem,
  tabsContent,
} from './index.variants'
import type { TabsProps } from './type'
import { TabsEmits } from './type'

defineOptions({
  name: 'Tabs',
})

const props = withDefaults(defineProps<TabsProps>(), {
  variant: 'default',
  size: 'md',
  placement: 'top',
  disabled: false,
  fullWidth: false,
  unstyled: false,
})

const emit = defineEmits(TabsEmits)

const slots = useSlots()

// 从插槽中提取TabItem信息
const tabItems = computed(() => {
  const defaultSlot = slots.default?.({ active: activeTab.value }) || []
  // 用于检测重复的name
  const nameSet = new Set<string | number>()
  // 用于存储处理后的标签项
  const processedItems: Array<{
    name: string | number
    title: string
    disabled: boolean
  }> = []

  defaultSlot
    .filter((vnode: VNode) => {
      // 检查是否是TabItem组件
      return (
        vnode.type &&
        ((vnode.type as any).name === 'TabItem' ||
          (typeof vnode.type === 'object' &&
            (vnode.type as any).__name === 'TabItem'))
      )
    })
    .forEach((vnode: VNode) => {
      const props = vnode.props || {}
      const name = props.name
      // 如果name已经存在，则跳过（避免重复）
      if (name && !nameSet.has(name)) {
        nameSet.add(name)
        processedItems.push({
          name,
          title: props.title || props.label || '',
          disabled: props.disabled || false,
        })
      } else if (name) {
        console.warn(
          `[Tabs] 发现重复的TabItem name: ${name}，只有第一个会被显示`,
        )
      } else {
        console.warn('[Tabs] TabItem必须提供name属性')
      }
    })

  return processedItems
})

// 提取所有标签页名称
const tabNames = computed(() =>
  tabItems.value.map((item: { name: string | number }) => item.name),
)

// 使用useTabs组合式函数
const { activeTab, isActive, activate, onKeydown } = useTabs({
  modelValue: props.modelValue,
  onChange: (val) => {
    emit('update:modelValue', val)
    emit('change', val)
  },
})

// 在tabItems变化时，如果没有选中的标签页，则选择第一个
watch(
  tabItems,
  (items) => {
    if (items.length > 0 && !items.some((item: any) => isActive(item.name))) {
      activate(items[0].name)
    }
  },
  { immediate: true },
)

// 处理标签页点击
const handleTabClick = (name: string | number, disabled: boolean) => {
  if (props.disabled || disabled) return
  activate(name)
}

// 处理键盘导航
const handleKeydown = (e: KeyboardEvent) => {
  onKeydown(e, tabNames.value)
}

// 计算容器样式
const containerClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.container || ''
  }
  return tabsContainer({
    placement: props.placement,
    fullWidth: props.fullWidth,
    disabled: props.disabled,
    class: props.pt?.container,
  })
})

// 计算导航栏样式
const navClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.nav || ''
  }
  return tabsNav({
    variant: props.variant,
    placement: props.placement,
    fullWidth: props.fullWidth,
    size: props.size,
    class: props.pt?.nav,
  })
})

// 计算导航项样式
const getNavItemClass = (name: string | number, disabled: boolean) => {
  if (props.unstyled) {
    return props.pt?.navItem || ''
  }
  return tabsNavItem({
    variant: props.variant,
    active: isActive(name),
    disabled: props.disabled || disabled,
    size: props.size,
    fullWidth: props.fullWidth,
    class: props.pt?.navItem,
  })
}

// 计算内容区样式
const contentClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.content || ''
  }
  return tabsContent({
    placement: props.placement,
    class: props.pt?.content,
  })
})

// 提供activeTab给子组件
provide('activeTab', activeTab)
</script>
