<script setup lang="ts">
import { computed, inject } from 'vue'
import { tabPanel } from './index.variants'
import type {
  TabPanelProps,
  TabPanelPassThroughAttributes,
  TabsContext,
} from './type'

const props = withDefaults(
  defineProps<TabPanelProps & { pt?: TabPanelPassThroughAttributes }>(),
  {
    lazy: false,
  },
)

// 注入选项卡上下文
const tabsContext = inject<TabsContext>('vk-tabs', {
  activeTab: '',
  setActiveTab: () => {},
  variant: 'line',
  size: 'md',
  placement: 'top',
  disabled: false,
  closable: false,
})

// 判断当前面板是否激活
const isActive = computed(() => tabsContext.activeTab === props.value)

// 判断是否需要渲染内容
const shouldRenderContent = computed(() => {
  return !props.lazy || isActive.value
})

// 计算样式类
const classes = computed(() => {
  return tabPanel({
    active: isActive.value,
  })
})
</script>

<template>
  <div
    :class="classes"
    role="tabpanel"
    :id="`panel-${value}`"
    :aria-labelledby="`tab-${value}`"
    :hidden="!isActive"
    v-bind="{ ...$attrs, ...props.pt?.root }"
  >
    <template v-if="shouldRenderContent">
      <slot />
    </template>
  </div>
</template>
