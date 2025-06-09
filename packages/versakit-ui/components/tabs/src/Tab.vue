<script setup lang="ts">
import { computed, inject } from 'vue'
import { tab } from './index.variants'
import type { TabProps, TabPassThroughAttributes, TabsContext } from './type'

const props = withDefaults(
  defineProps<TabProps & { pt?: TabPassThroughAttributes }>(),
  {
    disabled: false,
    closable: false,
    iconPosition: 'left',
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

// 判断当前选项卡是否激活
const isActive = computed(() => tabsContext.activeTab === props.value)

// 判断是否禁用
const isDisabled = computed(() => tabsContext.disabled || props.disabled)

// 判断是否可关闭
const isClosable = computed(
  () =>
    (tabsContext.closable || props.closable) &&
    tabsContext.closeTab !== undefined,
)

// 计算样式类
const classes = computed(() => {
  return tab({
    variant: tabsContext.variant,
    size: tabsContext.size,
    placement: tabsContext.placement,
    active: isActive.value,
    disabled: isDisabled.value,
  })
})

// 选中当前标签
const selectTab = () => {
  if (!isDisabled.value) {
    tabsContext.setActiveTab(props.value)
  }
}

// 关闭当前标签
const handleClose = (event: MouseEvent) => {
  event.stopPropagation()
  if (tabsContext.closeTab && !isDisabled.value) {
    tabsContext.closeTab(props.value)
  }
}
</script>

<template>
  <button
    type="button"
    :class="classes"
    role="tab"
    :id="`tab-${value}`"
    :aria-selected="isActive"
    :aria-controls="`panel-${value}`"
    :tabindex="isActive ? 0 : -1"
    :aria-disabled="isDisabled"
    :disabled="isDisabled"
    :aria-label="ariaLabel"
    @click="selectTab"
    v-bind="{ ...$attrs, ...props.pt?.root }"
  >
    <!-- 左侧图标 -->
    <span
      v-if="$slots.icon && iconPosition === 'left'"
      class="inline-flex mr-2"
      v-bind="props.pt?.icon"
    >
      <slot name="icon" />
    </span>

    <!-- 内容 -->
    <span v-bind="props.pt?.content">
      <slot />
    </span>

    <!-- 右侧图标 -->
    <span
      v-if="$slots.icon && iconPosition === 'right'"
      class="inline-flex ml-2"
      v-bind="props.pt?.icon"
    >
      <slot name="icon" />
    </span>

    <!-- 关闭按钮 -->
    <button
      v-if="isClosable"
      type="button"
      class="ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
      @click="handleClose"
      aria-label="关闭标签"
      v-bind="props.pt?.closeButton"
    >
      <slot name="closeIcon">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 3L3 9M3 3L9 9"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </slot>
    </button>
  </button>
</template>
