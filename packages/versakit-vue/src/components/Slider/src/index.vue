<script setup lang="ts">
import { computed, ref } from 'vue'
import { useSlider } from './composables/useSlider'
import {
  sliderContainer,
  sliderTrack,
  sliderFill,
  sliderThumb,
  sliderTooltip,
  sliderMarks,
  sliderMark,
  sliderMarkLabel,
} from './index.variants'
import type { SliderProps } from './type'

defineOptions({
  name: 'Slider',
})

const props = withDefaults(defineProps<SliderProps>(), {
  min: 0,
  max: 100,
  step: 1,
  orientation: 'horizontal',
  disabled: false,
  showTooltip: false,
  showMarks: false,
  unstyled: false,
  pt: undefined,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
  (e: 'change', value: number): void
}>()

const {
  value,
  percent,
  trackRef,
  thumbRef,
  onTrackClick,
  onThumbKeyDown,
  onThumbMouseDown,
} = useSlider({
  min: props.min,
  max: props.max,
  step: props.step,
  orientation: props.orientation,
  modelValue: props.modelValue,
  onChange: (val: any) => {
    emit('update:modelValue', val)
    emit('change', val)
  },
})

// 计算样式
const containerClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.container || ''
  }
  return sliderContainer({
    orientation: props.orientation,
    disabled: props.disabled,
    class: props.pt?.container,
  })
})

const trackClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.track || ''
  }
  return sliderTrack({
    orientation: props.orientation,
    disabled: props.disabled,
    class: props.pt?.track,
  })
})

const fillClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.fill || ''
  }
  return sliderFill({
    orientation: props.orientation,
    disabled: props.disabled,
    class: props.pt?.fill,
  })
})

const thumbClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.thumb || ''
  }
  return sliderThumb({
    orientation: props.orientation,
    disabled: props.disabled,
    class: props.pt?.thumb,
  })
})

// 计算填充样式
const fillStyle = computed(() => {
  if (props.orientation === 'horizontal') {
    return { width: `${percent.value}%` }
  } else {
    return { height: `${percent.value}%` }
  }
})

// 计算滑块位置
const thumbStyle = computed(() => {
  if (props.orientation === 'horizontal') {
    return { left: `${percent.value}%` }
  } else {
    return { bottom: `${percent.value}%` }
  }
})

// 处理tooltip
const isTooltipVisible = ref(false)
const tooltipClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.tooltip || ''
  }
  return sliderTooltip({
    orientation: props.orientation,
    visible: props.showTooltip && isTooltipVisible.value,
    class: props.pt?.tooltip,
  })
})

const showTooltipTemp = () => {
  if (props.disabled) return
  isTooltipVisible.value = true
}

const hideTooltipTemp = () => {
  isTooltipVisible.value = false
}

const tooltipText = computed(() => {
  if (props.formatTooltip) {
    return props.formatTooltip(value.value)
  }
  return value.value.toString()
})

// 处理刻度标记
const marksClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.marks || ''
  }
  return sliderMarks({
    orientation: props.orientation,
    class: props.pt?.marks,
  })
})

const normalizedMarks = computed(() => {
  if (!props.showMarks) return []

  if (props.marks) {
    return Object.entries(props.marks).map(([val, label]) => ({
      value: Number(val),
      label,
      percent: ((Number(val) - props.min) / (props.max - props.min)) * 100,
      active: value.value >= Number(val),
    }))
  }

  // 如果没有提供marks，则根据step生成
  const count = Math.floor((props.max - props.min) / props.step)
  const interval = count > 10 ? Math.floor(count / 5) : 1

  const marks = []
  for (let i = 0; i <= count; i += interval) {
    const markValue = props.min + i * props.step
    marks.push({
      value: markValue,
      label: markValue.toString(),
      percent: (i / count) * 100,
      active: value.value >= markValue,
    })
  }

  return marks
})

const getMarkClass = (active: boolean) => {
  if (props.unstyled) {
    return props.pt?.mark || ''
  }
  return sliderMark({
    orientation: props.orientation,
    active,
    class: props.pt?.mark,
  })
}

const getMarkStyle = (percent: number) => {
  if (props.orientation === 'horizontal') {
    return { left: `${percent}%` }
  } else {
    return { bottom: `${percent}%` }
  }
}

const getMarkLabelClass = () => {
  if (props.unstyled) {
    return props.pt?.markLabel || ''
  }
  return sliderMarkLabel({
    orientation: props.orientation,
    class: props.pt?.markLabel,
  })
}

// 处理点击事件
const handleTrackClick = (e: MouseEvent) => {
  if (props.disabled) return
  onTrackClick(e)
}

const handleThumbKeyDown = (e: KeyboardEvent) => {
  if (props.disabled) return
  onThumbKeyDown(e)
}

const handleThumbMouseDown = (e: MouseEvent) => {
  if (props.disabled) return
  onThumbMouseDown(e)
  showTooltipTemp()

  const upHandler = () => {
    hideTooltipTemp()
    window.removeEventListener('mouseup', upHandler)
  }

  window.addEventListener('mouseup', upHandler)
}
</script>

<template>
  <div :class="containerClass">
    <!-- 轨道 -->
    <div :class="trackClass" ref="trackRef" @click="handleTrackClick">
      <!-- 填充部分 -->
      <div :class="fillClass" :style="fillStyle"></div>

      <!-- 刻度标记 -->
      <div v-if="showMarks" :class="marksClass">
        <div
          v-for="mark in normalizedMarks"
          :key="mark.value"
          :class="getMarkClass(mark.active)"
          :style="getMarkStyle(mark.percent)"
        >
          <span :class="getMarkLabelClass">{{ mark.label }}</span>
        </div>
      </div>
    </div>

    <!-- 滑块 -->
    <div
      :class="thumbClass"
      :style="thumbStyle"
      ref="thumbRef"
      @mousedown="handleThumbMouseDown"
      @keydown="handleThumbKeyDown"
      @mouseover="showTooltipTemp"
      @mouseleave="hideTooltipTemp"
      role="slider"
      :aria-valuemin="min"
      :aria-valuemax="max"
      :aria-valuenow="value"
      :aria-orientation="orientation"
      :aria-disabled="disabled"
      :tabindex="disabled ? -1 : 0"
    >
      <!-- 提示框 -->
      <div v-if="showTooltip" :class="tooltipClass">
        {{ tooltipText }}
      </div>
    </div>
  </div>
</template>
