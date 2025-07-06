<template>
  <div :class="rootClass">
    <!-- 面板头部 -->
    <div :class="headerClass" @click="handleHeaderClick">
      <div :class="titleClass">
        <slot name="title">{{ title }}</slot>
      </div>
      <div v-if="collapsible" :class="iconClass">
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
    </div>

    <!-- 面板内容 -->
    <div :class="contentClass">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  panelStyle,
  panelHeaderStyle,
  panelTitleStyle,
  panelContentStyle,
  panelIconStyle,
} from './index.variants'
import type { PanelProps } from './type'
import { PanelEmits } from './type'

defineOptions({
  name: 'Panel',
})

const props = withDefaults(defineProps<PanelProps>(), {
  variant: 'default',
  padding: 'md',
  radius: 'md',
  collapsible: false,
  defaultCollapsed: false,
  bordered: true,
  unstyled: false,
})

const emit = defineEmits(PanelEmits)

// 折叠状态
const collapsed = ref(props.defaultCollapsed)

// 监听defaultCollapsed变化
watch(
  () => props.defaultCollapsed,
  (val) => {
    collapsed.value = val
  },
)

// 处理头部点击事件
const handleHeaderClick = () => {
  if (props.collapsible) {
    collapsed.value = !collapsed.value
    emit('update:collapsed', collapsed.value)
    emit('collapse', collapsed.value)
  }
}

// 根元素样式
const rootClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.root || ''
  }

  return panelStyle({
    variant: props.variant,
    padding: props.padding,
    radius: props.radius,
    bordered: props.bordered,
    class: props.pt?.root,
  })
})

// 头部样式
const headerClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.header || ''
  }

  return panelHeaderStyle({
    padding: props.padding,
    collapsible: props.collapsible,
    class: props.pt?.header,
  })
})

// 标题样式
const titleClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.title || ''
  }

  return panelTitleStyle({
    class: props.pt?.title,
  })
})

// 内容样式
const contentClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.content || ''
  }

  return panelContentStyle({
    padding: props.padding,
    collapsed: collapsed.value,
    class: props.pt?.content,
  })
})

// 图标样式
const iconClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.icon || ''
  }

  return panelIconStyle({
    collapsed: collapsed.value,
    class: props.pt?.icon,
  })
})
</script>
