<template>
  <div v-show="isActive" :class="rootClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import type { Ref } from 'vue'
import type { TabItemProps } from './type'

defineOptions({
  name: 'TabItem',
})

const props = withDefaults(defineProps<TabItemProps>(), {
  disabled: false,
  unstyled: false,
})

// 注入activeTab（这是一个ref对象）
const activeTab = inject<Ref<string | number>>('activeTab', ref(''))

// 判断当前标签页是否激活
const isActive = computed(() => activeTab.value === props.name)

// 计算根元素样式
const rootClass = computed(() => {
  return props.unstyled ? props.pt?.root || '' : ''
})
</script>
