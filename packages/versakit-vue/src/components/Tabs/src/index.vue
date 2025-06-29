<script setup lang="ts">
import { computed, unref, watch } from 'vue'
import { useTabs } from './composables/useTabs'
import { tabsContainer, tabTrigger, tabPanel } from './index.variants'
import type { TabsProps } from './type'

defineOptions({
  name: 'Tabs',
})

const props = withDefaults(defineProps<TabsProps>(), {
  initialIndex: 0,
  size: 'md',
  disabled: false,
  block: false,
  unstyled: false,
})

const emit = defineEmits<{
  (e: 'change', index: number): void
}>()

const { selectedIndex, select, registerTab, onKeyDown } = useTabs(
  props.initialIndex,
)

// 当selectedIndex变化时触发change事件
watch(selectedIndex, (newIndex) => {
  emit('change', newIndex)
})

// 计算容器样式
const containerClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.container || ''
  }
  return tabsContainer({
    size: props.size,
    disabled: props.disabled,
    block: props.block,
    class: props.pt?.container,
  })
})

// 计算选项样式
const getTabClass = (index: number, disabled?: boolean) => {
  const isActive = unref(selectedIndex) === index
  if (props.unstyled) {
    return props.pt?.trigger || ''
  }
  return tabTrigger({
    selected: isActive,
    disabled: props.disabled || disabled,
    size: props.size,
    class: props.pt?.trigger,
  })
}

// 计算面板样式
const panelClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.panel || ''
  }
  return tabPanel({
    class: props.pt?.panel,
  })
})

// 计算图标样式
const iconClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.icon || 'w-4 h-4 mr-2'
  }
  return `w-4 h-4 mr-2 ${props.pt?.icon || ''}`
})

// 处理选项点击
const handleTabClick = (index: number, disabled?: boolean) => {
  if (props.disabled || disabled) return
  select(index)
}
</script>

<template>
  <div>
    <!-- 标签页头部 -->
    <div :class="containerClass" role="tablist" @keydown="onKeyDown">
      <button
        v-for="(tab, index) in props.items"
        :key="index"
        :ref="(el) => registerTab(el as HTMLElement, index)"
        :class="getTabClass(index, tab.disabled)"
        :disabled="props.disabled || tab.disabled"
        :aria-selected="unref(selectedIndex) === index"
        :tabindex="unref(selectedIndex) === index ? 0 : -1"
        role="tab"
        type="button"
        @click="handleTabClick(index, tab.disabled)"
      >
        <div class="flex items-center justify-center">
          <img
            v-if="tab.icon"
            :src="tab.icon"
            :class="[
              iconClass,
              unref(selectedIndex) === index ? '' : 'opacity-70',
            ]"
          />
          {{ tab.label }}
        </div>
      </button>
    </div>

    <!-- 标签页内容 -->
    <div
      v-for="(tab, index) in props.items"
      :key="index"
      v-show="unref(selectedIndex) === index"
      role="tabpanel"
      :class="panelClass"
    >
      <slot :tab="tab">
        <template v-if="typeof tab.content === 'function'">
          <component :is="tab.content" />
        </template>
        <template v-else>
          {{ tab.content }}
        </template>
      </slot>
    </div>
  </div>
</template>
