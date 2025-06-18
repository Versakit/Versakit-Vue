<script setup lang="ts">
import { useTabs } from '@versakit/composables'
import type { TabsProps } from './type'
import { tabList, tabTrigger, tabPanel } from './index.variants'

defineOptions({
  name: 'VKTabs',
})

const props = withDefaults(defineProps<TabsProps>(), {
  initialIndex: 0,
})

const { selectedIndex, select, registerTab, onKeyDown } = useTabs(
  props.initialIndex,
)
</script>

<template>
  <!-- tab headers -->
  <div :class="tabList()" role="tablist" @keydown="onKeyDown">
    <button
      v-for="(tab, i) in props.items"
      :key="i"
      :ref="(el) => registerTab(el as HTMLElement, i)"
      :class="
        tabTrigger({ active: selectedIndex === i, disabled: tab.disabled })
      "
      role="tab"
      :aria-selected="selectedIndex === i"
      :tabindex="selectedIndex === i ? 0 : -1"
      :disabled="tab.disabled"
      @click="() => !tab.disabled && select(i)"
    >
      {{ tab.label }}
    </button>
  </div>

  <!-- tab panel -->
  <div
    v-for="(tab, i) in props.items"
    :key="i"
    v-show="selectedIndex === i"
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
</template>
