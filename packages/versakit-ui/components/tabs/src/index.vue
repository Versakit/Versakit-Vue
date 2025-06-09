<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue'
import { tabs, tabList } from './index.variants'
import type { TabsProps, TabsPassThroughAttributes, TabsContext } from './type'

const props = withDefaults(
  defineProps<TabsProps & { pt?: TabsPassThroughAttributes }>(),
  {
    modelValue: undefined,
    variant: 'line',
    size: 'md',
    placement: 'top',
    disabled: false,
    closable: false,
    unstyled: false,
  },
)

const emit = defineEmits(['update:modelValue', 'change', 'close'])

// 内部激活的标签页值
const activeTab = ref<string | number>(props.modelValue ?? '')

// 监听modelValue的变化并同步到内部状态
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue !== undefined) {
      activeTab.value = newValue
    }
  },
  { immediate: true },
)

// 设置激活标签页
const setActiveTab = (value: string | number) => {
  if (props.disabled) return

  activeTab.value = value
  emit('update:modelValue', value)
  emit('change', value)
}

// 关闭标签页
const closeTab = (value: string | number) => {
  emit('close', value)
}

// 提供给子组件的上下文
const tabsContext: TabsContext = {
  get activeTab() {
    return activeTab.value
  },
  setActiveTab,
  closeTab: props.closable ? closeTab : undefined,
  get variant() {
    return props.variant
  },
  get size() {
    return props.size
  },
  get placement() {
    return props.placement
  },
  get disabled() {
    return props.disabled
  },
  get closable() {
    return props.closable
  },
}

provide('vk-tabs', tabsContext)

// 计算样式类
const classes = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return tabs({
    placement: props.placement,
  })
})

// 计算导航区域类
const navClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return tabList({
    placement: props.placement,
    variant: props.variant,
    size: props.size,
  })
})

// 计算方向
const orientation = computed(() =>
  ['left', 'right'].includes(props.placement) ? 'vertical' : 'horizontal',
)
</script>

<template>
  <div
    class="vk-tabs"
    :class="classes"
    v-bind="{ ...$attrs, ...props.pt?.root }"
  >
    <div
      class="vk-tabs-nav"
      :class="navClasses"
      role="tablist"
      :aria-orientation="orientation"
    >
      <slot name="nav-start" />
      <slot />
      <slot name="nav-end" />
    </div>
  </div>
</template>
