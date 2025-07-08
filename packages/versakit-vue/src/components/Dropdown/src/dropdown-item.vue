<template>
  <button
    v-if="!divider"
    type="button"
    :class="classes"
    :disabled="disabled"
    @click="handleClick"
    role="menuitem"
    :tabindex="disabled ? -1 : 0"
    :aria-disabled="disabled"
  >
    <span v-if="icon" :class="iconClasses">
      {{ icon }}
    </span>
    <span :class="labelClasses">
      <slot>{{ label }}</slot>
    </span>
  </button>
  <div
    v-else
    :class="dividerClasses"
    role="separator"
    aria-orientation="horizontal"
  ></div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import type { DropdownItemProps, DropdownContext } from './type'

const props = withDefaults(defineProps<DropdownItemProps>(), {
  disabled: false,
  divider: false,
})

const emits = defineEmits(['click'])

// 注入来自父组件的数据和方法
const dropdown = inject<DropdownContext>('dropdown', {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onItemClick: (_value: any) => {},
  unstyled: false,
  pt: {} as Record<string, string>,
})

const classes = computed(() => {
  if (dropdown.unstyled) {
    return dropdown.pt?.menuItem || ''
  }
  return 'block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:bg-gray-100 focus:text-gray-900 dark:focus:bg-gray-700 dark:focus:text-white'
})

const iconClasses = computed(() => {
  if (dropdown.unstyled) {
    return dropdown.pt?.menuItemIcon || ''
  }
  return 'mr-2 inline-block'
})

const labelClasses = computed(() => {
  if (dropdown.unstyled) {
    return dropdown.pt?.menuItemLabel || ''
  }
  return 'inline-block'
})

const dividerClasses = computed(() => {
  if (dropdown.unstyled) {
    return dropdown.pt?.menuDivider || ''
  }
  return 'my-1 h-px bg-gray-200 dark:bg-gray-700'
})

const handleClick = () => {
  if (props.disabled) return

  emits('click', props.value)
  dropdown.onItemClick(props.value)
}
</script>
