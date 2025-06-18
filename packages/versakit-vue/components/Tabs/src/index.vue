<script setup lang="ts">
import { useTabs } from '@versakit/composables'
import type { TabsProps } from './type'
import { tabList, tabTrigger, tabPanel } from './index.variants'
import { computed, unref } from 'vue'

defineOptions({
  name: 'VKTabs',
})

const props = withDefaults(defineProps<TabsProps>(), {
  initialIndex: 0,
  mode: 'pills', // 默认使用pills模式，符合图片中的样式
})

const { selectedIndex, select, registerTab, onKeyDown } = useTabs(
  props.initialIndex,
)

const tabListClasses = computed(() => {
  const baseClass = tabList()

  if (props.mode === 'pills') {
    return baseClass
  }

  if (props.mode === 'card') {
    return `flex rounded-lg overflow-hidden shadow-sm`
  }

  if (props.mode === 'underline') {
    return `flex space-x-2 border-b border-gray-200 dark:border-gray-800`
  }

  // 兼容旧版行为
  return 'flex space-x-2 border-b border-gray-200 dark:border-gray-800'
})

const getTabTriggerClasses = (index: number, disabled?: boolean) => {
  const isActive = unref(selectedIndex) === index

  if (props.mode === 'pills') {
    return tabTrigger({ active: isActive, disabled })
  }

  if (props.mode === 'card') {
    return isActive
      ? `px-4 py-2 text-sm bg-white dark:bg-gray-900 text-black dark:text-white`
      : `px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400`
  }

  if (props.mode === 'underline') {
    return isActive
      ? `px-4 py-2 text-sm text-black dark:text-white border-b-2 border-black dark:border-white font-medium`
      : `px-4 py-2 text-sm text-gray-600 dark:text-gray-400 border-b-2 border-transparent hover:text-black dark:hover:text-white`
  }

  // 默认模式
  return isActive
    ? `px-4 py-2 text-sm text-black dark:text-white border-b-2 border-black dark:border-white font-medium`
    : `px-4 py-2 text-sm text-gray-600 dark:text-gray-400 border-b-2 border-transparent hover:text-black dark:hover:text-white`
}
</script>

<template>
  <div>
    <!-- tab headers -->
    <div :class="tabListClasses" role="tablist" @keydown="onKeyDown">
      <button
        v-for="(tab, i) in props.items"
        :key="i"
        :ref="(el) => registerTab(el as HTMLElement, i)"
        :class="getTabTriggerClasses(i, tab.disabled)"
        role="tab"
        :aria-selected="unref(selectedIndex) === i"
        :tabindex="unref(selectedIndex) === i ? 0 : -1"
        :disabled="tab.disabled"
        @click="() => !tab.disabled && select(i)"
      >
        <div class="flex items-center justify-center">
          <img
            v-if="tab.icon"
            :src="tab.icon"
            class="w-4 h-4 mr-2 filter"
            :class="unref(selectedIndex) === i ? '' : 'grayscale opacity-70'"
          />
          {{ tab.label }}
        </div>
      </button>
    </div>

    <!-- tab panel -->
    <div
      v-for="(tab, i) in props.items"
      :key="i"
      v-show="unref(selectedIndex) === i"
      role="tabpanel"
      :class="tabPanel()"
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
