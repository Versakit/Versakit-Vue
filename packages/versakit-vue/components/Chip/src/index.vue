<template>
  <span
    :class="classes"
    role="option"
    :aria-selected="isSelected"
    @click="toggle"
  >
    <slot />
    <button
      v-if="closable"
      type="button"
      class="ml-1 text-gray-500 hover:text-red-500 focus:outline-none"
      @click.stop="handleDelete"
      aria-label="Remove"
    >
      ×
    </button>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useChip } from './composables/useChip.ts'
import { chipStyle } from './index.variants'
import type { ChipProps } from './type'

const props = withDefaults(defineProps<ChipProps>(), {
  modelValue: false,
  selectable: false,
  disabled: false,
  closable: false,
})

const emit = defineEmits(['update:modelValue', 'delete'])

const { isSelected, toggle, handleDelete } = useChip({
  modelValue: props.modelValue,
  selectable: props.selectable,
  disabled: props.disabled,
  onChange: (val: any) => emit('update:modelValue', val),
  onDelete: () => emit('delete'),
})

const classes = computed(() =>
  chipStyle({
    selected: isSelected.value,
    disabled: props.disabled,
  }),
)
</script>
