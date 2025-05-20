<script setup lang="ts">
import type { DropdownItemProps } from '../type'
import { getPtClasses } from '@versakit/shared'
import { computed } from 'vue'

defineOptions({
  name: 'DropdownMenuItem',
})

const props = defineProps<DropdownItemProps>()

const emit = defineEmits<{
  (e: 'select'): void
}>()

const handleSelect = () => {
  if (!props.disabled) {
    emit('select')
  }
}

// 无头化
const ptClasses = computed(() => {
  if (props.unstyled) {
    return {
      root: getPtClasses(props.pt, 'root'),
    }
  }

  return {
    root: 'dropdown-item',
  }
})
</script>

<template>
  <button
    :class="[{ disabled: disabled }, ptClasses.root]"
    role="menuitem"
    @click="handleSelect"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
@import url('../style/item.css');
</style>
