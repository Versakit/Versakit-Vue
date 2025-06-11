<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue'
import { collapsible } from './index.variants'
import type {
  CollapsibleProps,
  CollapsiblePassThroughAttributes,
  CollapsibleContext,
} from './type'

const props = withDefaults(
  defineProps<CollapsibleProps & { pt?: CollapsiblePassThroughAttributes }>(),
  {
    modelValue: false,
    disabled: false,
    duration: 300,
    unstyled: false,
  },
)

const emit = defineEmits(['update:modelValue', 'toggle'])

// 内部状态
const isOpen = ref(props.modelValue)

// 监听外部状态变化
watch(
  () => props.modelValue,
  (val) => {
    isOpen.value = val
  },
)

// 监听内部状态变化
watch(
  () => isOpen.value,
  (val) => {
    emit('update:modelValue', val)
    emit('toggle', val)
  },
)

// 切换折叠状态
const toggle = () => {
  if (props.disabled) return
  isOpen.value = !isOpen.value
}

// 计算样式
const classes = computed(() => {
  if (props.unstyled) {
    return {
      root: '',
      trigger: '',
      content: '',
      contentInner: '',
      icon: '',
    }
  }
  return collapsible({
    disabled: props.disabled,
    open: isOpen.value,
  })
})

// 提供上下文数据给子组件
provide<CollapsibleContext>('collapsible-context', {
  open: isOpen.value,
  disabled: props.disabled,
  toggle,
})

// 提供属性给Content组件
provide('collapsible-props', {
  duration: props.duration,
})
</script>

<template>
  <div :class="classes.root" v-bind="{ ...pt?.root }">
    <slot />
  </div>
</template>
