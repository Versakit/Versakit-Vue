<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue'
import { tabs } from './index.variants'
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
provide<TabsContext>('vk-tabs', {
  activeTab: activeTab.value,
  setActiveTab,
  closeTab: props.closable ? closeTab : undefined,
  variant: props.variant,
  size: props.size,
  placement: props.placement,
  disabled: props.disabled,
  closable: props.closable,
})

// 计算组件样式类
const classes = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return tabs({
    placement: props.placement,
  })
})
</script>

<template>
  <div :class="classes" v-bind="{ ...$attrs, ...props.pt?.root }">
    <slot />
  </div>
</template>
