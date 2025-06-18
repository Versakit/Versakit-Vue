<template>
  <div class="segmented-control" role="radiogroup">
    <button
      v-for="option in options"
      :key="option"
      role="radio"
      :aria-checked="isSelected(option)"
      :class="[
        'segmented-button',
        isSelected(option) ? 'selected' : 'unselected',
      ]"
      @click="select(option)"
      @keydown="onKeydown"
    >
      {{ option }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useSegmented } from '@versakit/composables'

const props = withDefaults(
  defineProps<{
    modelValue?: string | number
    options: (string | number)[]
  }>(),
  {
    options: () => ['选项1', '选项2', '选项3'],
  },
)

const emit = defineEmits(['update:modelValue'])

const { selected, isSelected, select, onKeydown } = useSegmented(
  props.options,
  {
    modelValue: props.modelValue,
    onChange: (val) => emit('update:modelValue', val),
  },
)

watch(
  () => props.modelValue,
  (val) => {
    if (val != null && val !== selected.value) {
      select(val)
    }
  },
)
</script>

<style scoped>
.segmented-control {
  display: inline-flex;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  overflow: hidden;
}

.segmented-button {
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  background: none;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
}

.segmented-button:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

.segmented-button.selected {
  background-color: #3b82f6;
  color: white;
}

.segmented-button.unselected {
  background-color: white;
  color: #374151;
}

.segmented-button.unselected:hover {
  background-color: #f3f4f6;
}
</style>
