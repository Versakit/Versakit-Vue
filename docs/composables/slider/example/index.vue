<template>
  <div ref="trackRef" class="slider-track" @click="onTrackClick">
    <!-- 填充条 -->
    <div class="slider-fill" :style="{ width: percent + '%' }" />
    <!-- 滑块 -->
    <div
      class="slider-thumb"
      :style="{ left: `calc(${percent}% - 0.5rem)` }"
      tabindex="0"
      role="slider"
      :aria-valuemin="min"
      :aria-valuemax="max"
      :aria-valuenow="value"
      @keydown="onThumbKeyDown"
      @mousedown="onThumbMouseDown"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useSlider } from '@versakit/composables'

const props = defineProps<{
  modelValue: number
  min?: number
  max?: number
  step?: number
}>()
const emit = defineEmits(['update:modelValue'])

const {
  value,
  percent,
  trackRef,
  onTrackClick,
  onThumbKeyDown,
  onThumbMouseDown,
} = useSlider({
  min: props.min,
  max: props.max,
  step: props.step,
  modelValue: props.modelValue,
  onChange: (val) => emit('update:modelValue', val),
})

const min = computed(() => props.min ?? 0)
const max = computed(() => props.max ?? 100)

watch(
  () => props.modelValue,
  (v) => {
    if (v !== value.value) value.value = v
  },
)
</script>

<style scoped>
.slider-track {
  position: relative;
  height: 0.5rem;
  width: 100%;
  background-color: #d1d5db;
  border-radius: 0.25rem;
  cursor: pointer;
}

.slider-fill {
  position: absolute;
  height: 100%;
  background-color: #3b82f6;
  border-radius: 0.25rem;
}

.slider-thumb {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 9999px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  cursor: grab;
}

.slider-thumb:hover {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.slider-thumb:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
}
</style>
