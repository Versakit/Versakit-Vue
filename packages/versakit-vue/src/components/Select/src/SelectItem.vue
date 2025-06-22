<template>
  <li
    v-show="isVisible"
    :class="classes.base()"
    :data-key="key"
    :data-selected="isSelected"
    :data-disabled="disabled"
    :data-focus="isFocused"
    :data-hover="isHovered"
    :data-pressed="isPressed"
    :tabindex="disabled ? -1 : 0"
    role="option"
    :aria-selected="isSelected"
    :aria-disabled="disabled"
    @click="!disabled && handleSelect()"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @focus="handleFocus"
    @blur="handleBlur"
    @keydown.enter.prevent="!disabled && handleSelect()"
    @keydown.space.prevent="!disabled && handleSelect()"
  >
    <slot name="startContent">
      <span v-if="startContent">{{ startContent }}</span>
    </slot>
    <div :class="classes.wrapper()">
      <span :class="classes.label()">
        <slot>{{ label }}</slot>
      </span>
      <span
        v-if="description || $slots.description"
        :class="classes.description()"
      >
        <slot name="description">{{ description }}</slot>
      </span>
    </div>
    <slot name="endContent">
      <span v-if="endContent">{{ endContent }}</span>
    </slot>
    <slot name="selectedIcon" v-if="isSelected">
      <svg
        :class="classes.selectedIcon()"
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
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </slot>
  </li>
</template>

<script setup lang="ts">
import {
  computed,
  inject,
  ref,
  onMounted,
  onBeforeUnmount,
  type Ref,
} from 'vue'
import { selectItemStyles } from './index.variants'
import type { SelectItemProps, SelectItem } from './type'

defineOptions({
  name: 'VersaSelectItem',
})

const props = withDefaults(defineProps<SelectItemProps>(), {
  disabled: false,
})

const selectedKeys = inject<Ref<Set<string>>>('selectedKeys', ref(new Set()))
const onSelectItem = inject<(key: string) => void>('onSelectItem', () => {})
const registerItem = inject<(item: SelectItem) => void>(
  'registerItem',
  () => {},
)
const unregisterItem = inject<(key: string) => void>('unregisterItem', () => {})
const searchQuery = inject<Ref<string>>('searchQuery', ref(''))

const isSelected = computed(() => selectedKeys.value.has(props.key))
const isHovered = ref(false)
const isFocused = ref(false)
const isPressed = ref(false)

// 根据搜索查询确定是否显示
const isVisible = computed(() => {
  if (!searchQuery.value) return true

  const query = searchQuery.value.toLowerCase()
  return props.label?.toLowerCase().includes(query) || false
})

const handleSelect = () => {
  onSelectItem(props.key)
}

const handleMouseEnter = () => {
  if (!props.disabled) {
    isHovered.value = true
  }
}

const handleMouseLeave = () => {
  isHovered.value = false
}

const handleFocus = () => {
  if (!props.disabled) {
    isFocused.value = true
  }
}

const handleBlur = () => {
  isFocused.value = false
}

// 注册和注销
onMounted(() => {
  const item: SelectItem = {
    key: props.key,
    label: props.label || '',
    description: props.description,
    disabled: props.disabled,
    startContent: props.startContent,
    endContent: props.endContent,
  }
  registerItem(item)
})

onBeforeUnmount(() => {
  unregisterItem(props.key)
})

// 样式
const classes = computed(() => selectItemStyles()).value
</script>
