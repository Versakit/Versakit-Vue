<template>
  <div
    v-if="!divider"
    :class="classes"
    role="menuitem"
    tabindex="0"
    :aria-disabled="disabled"
    @click="!disabled && onClick($event)"
    @keydown.enter="!disabled && onKeyDown($event)"
    @keydown.space.prevent="!disabled && onKeyDown($event)"
  >
    <slot name="icon">
      <span v-if="icon" :class="iconClass">
        {{ icon }}
      </span>
    </slot>
    <slot>{{ label }}</slot>
  </div>
  <div v-else role="separator" :class="dividerClass"></div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { dropdownStyle } from './index.variants'
import type { DropdownItemProps } from './type'
import { DropdownItemEmits } from './type'

// 定义props和emits
const props = withDefaults(defineProps<DropdownItemProps>(), {
  disabled: false,
  active: false,
  unstyled: false,
  divider: false,
})

const emit = defineEmits(DropdownItemEmits)

// 获取dropdown提供的上下文
const dropdown = inject('dropdown', {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleItemClick: (value: string | number, event: MouseEvent) => {},
  closeOnSelect: true,
})

const onClick = (event: MouseEvent) => {
  emit('click', event)

  if (props.value !== undefined) {
    dropdown.handleItemClick(props.value, event)
  }
}

// 处理键盘事件
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onKeyDown = (_event: KeyboardEvent) => {
  // 创建一个模拟的鼠标事件
  const mouseEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window,
  })

  emit('click', mouseEvent)

  if (props.value !== undefined) {
    dropdown.handleItemClick(props.value, mouseEvent)
  }
}

// 计算样式
const classes = computed(() => {
  if (props.unstyled) {
    return props.pt?.root || ''
  }

  return [
    dropdownStyle().menuItem(),
    props.active && dropdownStyle().menuItemActive(),
    props.disabled && dropdownStyle().menuItemDisabled(),
    props.pt?.root,
  ]
    .filter(Boolean)
    .join(' ')
})

// 计算图标样式
const iconClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.icon || ''
  }

  return dropdownStyle().menuItemIcon()
})

// 计算分割线样式
const dividerClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.root || ''
  }

  return dropdownStyle().menuDivider()
})
</script>
