<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import {
  slider,
  sliderTrack,
  sliderProgress,
  sliderHandle,
  sliderTooltip,
  sliderMark,
  sliderMarkLabel,
  sliderInput,
} from './index.variants'
import type { SliderProps, SliderPassThroughAttributes } from './type'

const props = withDefaults(
  defineProps<SliderProps & { pt?: SliderPassThroughAttributes }>(),
  {
    min: 0,
    max: 100,
    step: 1,
    variant: 'primary',
    size: 'md',
    range: false,
    disabled: false,
    marks: false,
    tooltip: false,
    tooltipAlways: false,
    showInput: false,
    vertical: false,
    height: '200px',
    unstyled: false,
  },
)

const emit = defineEmits([
  'update:modelValue',
  'dragStart',
  'drag',
  'dragEnd',
  'change',
])

const sliderRef = ref<HTMLDivElement | null>(null)
const isDragging = ref(false)
const activeHandle = ref<'start' | 'end'>('end')
const showTooltip = ref(props.tooltipAlways)
const inputValue = ref<number | number[]>(
  props.modelValue ?? (props.range ? [props.min, props.max] : props.min),
)

// 计算值
const normalizedValue = computed(() => {
  if (props.range) {
    const value = Array.isArray(inputValue.value)
      ? inputValue.value
      : [props.min, props.max]
    return [
      Math.max(props.min, Math.min(props.max, value[0])),
      Math.max(props.min, Math.min(props.max, value[1])),
    ]
  } else {
    const value = Array.isArray(inputValue.value)
      ? inputValue.value[0]
      : inputValue.value
    return Math.max(props.min, Math.min(props.max, value))
  }
})

// 计算百分比位置
const getPosition = (value: number) => {
  return ((value - props.min) / (props.max - props.min)) * 100
}

// 计算样式
const classes = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return slider({
    vertical: props.vertical,
    disabled: props.disabled,
  })
})

const trackClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return sliderTrack({
    vertical: props.vertical,
    size: props.size,
  })
})

const progressClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return sliderProgress({
    variant: props.variant,
    vertical: props.vertical,
  })
})

const handleClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return sliderHandle({
    variant: props.variant,
    size: props.size,
    disabled: props.disabled,
  })
})

const tooltipClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return sliderTooltip({
    vertical: props.vertical,
  })
})

const markClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return sliderMark({
    vertical: props.vertical,
  })
})

const markLabelClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return sliderMarkLabel({
    vertical: props.vertical,
  })
})

const inputClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return sliderInput({
    disabled: props.disabled,
  })
})

// 计算轨道样式
const progressStyle = computed(() => {
  if (props.range) {
    const [startPos, endPos] = Array.isArray(normalizedValue.value)
      ? [
          getPosition(normalizedValue.value[0]),
          getPosition(normalizedValue.value[1]),
        ]
      : [0, getPosition(normalizedValue.value)]

    if (props.vertical) {
      return {
        bottom: `${startPos}%`,
        height: `${endPos - startPos}%`,
      }
    } else {
      return {
        left: `${startPos}%`,
        width: `${endPos - startPos}%`,
      }
    }
  } else {
    const pos = getPosition(normalizedValue.value as number)
    if (props.vertical) {
      return {
        bottom: '0%',
        height: `${pos}%`,
      }
    } else {
      return {
        left: '0%',
        width: `${pos}%`,
      }
    }
  }
})

// 计算手柄样式
const startHandleStyle = computed(() => {
  if (!props.range) return {}

  const pos = Array.isArray(normalizedValue.value)
    ? getPosition(normalizedValue.value[0])
    : 0

  if (props.vertical) {
    return {
      bottom: `${pos}%`,
      transform: 'translate(-50%, 50%)',
    }
  } else {
    return {
      left: `${pos}%`,
      transform: 'translate(-50%, -50%)',
    }
  }
})

const endHandleStyle = computed(() => {
  const pos = Array.isArray(normalizedValue.value)
    ? getPosition(normalizedValue.value[1])
    : getPosition(normalizedValue.value as number)

  if (props.vertical) {
    return {
      bottom: `${pos}%`,
      transform: 'translate(-50%, 50%)',
    }
  } else {
    return {
      left: `${pos}%`,
      transform: 'translate(-50%, -50%)',
    }
  }
})

// 计算标记
const markList = computed(() => {
  if (!props.marks) return []

  if (typeof props.marks === 'boolean') {
    const count = Math.floor((props.max - props.min) / props.step) + 1
    const marks = []
    for (let i = 0; i < count; i++) {
      const value = props.min + i * props.step
      marks.push({
        value,
        label: String(value),
        position: getPosition(value),
        active: isMarkActive(value),
      })
    }
    return marks
  } else {
    return Object.entries(props.marks).map(([value, label]) => {
      const numValue = Number(value)
      return {
        value: numValue,
        label,
        position: getPosition(numValue),
        active: isMarkActive(numValue),
      }
    })
  }
})

// 判断标记是否激活
function isMarkActive(value: number) {
  if (props.range) {
    const [start, end] = Array.isArray(normalizedValue.value)
      ? normalizedValue.value
      : [props.min, normalizedValue.value as number]
    return value >= start && value <= end
  } else {
    return value <= (normalizedValue.value as number)
  }
}

// 更新值
const updateValue = (newValue: number | number[]) => {
  inputValue.value = newValue
  emit('update:modelValue', newValue)
}

// 处理拖动开始
const handleDragStart = (
  event: MouseEvent | TouchEvent,
  handle: 'start' | 'end',
) => {
  if (props.disabled) return

  event.preventDefault()
  isDragging.value = true
  activeHandle.value = handle
  showTooltip.value = true

  document.addEventListener('mousemove', handleDragMove)
  document.addEventListener('mouseup', handleDragEnd)
  document.addEventListener('touchmove', handleDragMove, { passive: false })
  document.addEventListener('touchend', handleDragEnd)

  emit('dragStart', normalizedValue.value)
}

// 处理拖动
const handleDragMove = (event: MouseEvent | TouchEvent) => {
  if (!isDragging.value || !sliderRef.value) return

  const sliderRect = sliderRef.value.getBoundingClientRect()
  const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX
  const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY

  let percentage
  if (props.vertical) {
    percentage = 1 - (clientY - sliderRect.top) / sliderRect.height
  } else {
    percentage = (clientX - sliderRect.left) / sliderRect.width
  }

  percentage = Math.min(1, Math.max(0, percentage))
  const newValue = props.min + percentage * (props.max - props.min)
  const steppedValue = Math.round(newValue / props.step) * props.step

  if (props.range) {
    const values = [
      ...(Array.isArray(inputValue.value)
        ? inputValue.value
        : [props.min, props.max]),
    ]
    if (activeHandle.value === 'start') {
      values[0] = Math.min(steppedValue, values[1] - props.step)
    } else {
      values[1] = Math.max(steppedValue, values[0] + props.step)
    }
    updateValue(values)
  } else {
    updateValue(steppedValue)
  }

  emit('drag', normalizedValue.value)
}

// 处理拖动结束
const handleDragEnd = () => {
  isDragging.value = false
  if (!props.tooltipAlways) {
    showTooltip.value = false
  }

  document.removeEventListener('mousemove', handleDragMove)
  document.removeEventListener('mouseup', handleDragEnd)
  document.removeEventListener('touchmove', handleDragMove)
  document.removeEventListener('touchend', handleDragEnd)

  emit('dragEnd', normalizedValue.value)
  emit('change', normalizedValue.value)
}

// 处理点击
const handleTrackClick = (event: MouseEvent) => {
  if (props.disabled || isDragging.value) return

  const sliderRect = sliderRef.value!.getBoundingClientRect()
  let percentage

  if (props.vertical) {
    percentage = 1 - (event.clientY - sliderRect.top) / sliderRect.height
  } else {
    percentage = (event.clientX - sliderRect.left) / sliderRect.width
  }

  percentage = Math.min(1, Math.max(0, percentage))
  const newValue = props.min + percentage * (props.max - props.min)
  const steppedValue = Math.round(newValue / props.step) * props.step

  if (props.range) {
    const values = [
      ...(Array.isArray(inputValue.value)
        ? inputValue.value
        : [props.min, props.max]),
    ]
    const [startPos, endPos] = [getPosition(values[0]), getPosition(values[1])]
    const clickPos = percentage * 100

    // 确定点击位置更接近哪个手柄
    if (Math.abs(clickPos - startPos) <= Math.abs(clickPos - endPos)) {
      values[0] = steppedValue
      activeHandle.value = 'start'
    } else {
      values[1] = steppedValue
      activeHandle.value = 'end'
    }

    updateValue(values)
  } else {
    updateValue(steppedValue)
  }

  emit('change', normalizedValue.value)
}

// 处理输入框变化
const handleInputChange = (event: Event, index?: number) => {
  const target = event.target as HTMLInputElement
  const value = Number(target.value)

  if (isNaN(value)) return

  if (props.range && index !== undefined) {
    const values = [
      ...(Array.isArray(inputValue.value)
        ? inputValue.value
        : [props.min, props.max]),
    ]
    values[index] = value
    updateValue(values)
  } else {
    updateValue(value)
  }

  emit('change', normalizedValue.value)
}

// 清理事件监听
onUnmounted(() => {
  document.removeEventListener('mousemove', handleDragMove)
  document.removeEventListener('mouseup', handleDragEnd)
  document.removeEventListener('touchmove', handleDragMove)
  document.removeEventListener('touchend', handleDragEnd)
})

// 初始化
onMounted(() => {
  // 如果没有提供初始值，设置默认值
  if (props.modelValue === undefined) {
    updateValue(props.range ? [props.min, props.max] : props.min)
  }
})
</script>

<template>
  <div
    :style="{ height: vertical ? height : undefined }"
    class="flex items-center"
    v-bind="{ ...$attrs }"
  >
    <div
      ref="sliderRef"
      :class="classes"
      @click="handleTrackClick"
      v-bind="props.pt?.root"
    >
      <!-- 轨道 -->
      <div :class="trackClasses" v-bind="props.pt?.track"></div>

      <!-- 进度条 -->
      <div
        :class="progressClasses"
        :style="progressStyle"
        v-bind="props.pt?.progress"
      ></div>

      <!-- 标记点 -->
      <template v-if="marks">
        <div
          v-for="mark in markList"
          :key="mark.value"
          :class="markClasses"
          :style="
            vertical
              ? { bottom: `${mark.position}%` }
              : { left: `${mark.position}%` }
          "
          :data-active="mark.active"
          v-bind="props.pt?.mark"
        >
          <div
            v-if="mark.label"
            :class="markLabelClasses"
            v-bind="props.pt?.markLabel"
          >
            <slot name="mark" :value="mark.value" :label="mark.label">
              {{ mark.label }}
            </slot>
          </div>
        </div>
      </template>

      <!-- 起始手柄 -->
      <div
        v-if="range"
        :class="handleClasses"
        :style="startHandleStyle"
        @mousedown="(e) => handleDragStart(e, 'start')"
        @touchstart="(e) => handleDragStart(e, 'start')"
        tabindex="0"
        role="slider"
        :aria-valuemin="min"
        :aria-valuemax="max"
        :aria-valuenow="
          Array.isArray(normalizedValue) ? normalizedValue[0] : min
        "
        :aria-label="ariaLabelRange ? ariaLabelRange[0] : ariaLabel"
        :aria-disabled="disabled"
        v-bind="props.pt?.handle"
      >
        <!-- 提示 -->
        <div
          v-if="
            tooltip &&
            (showTooltip || tooltipAlways) &&
            activeHandle === 'start'
          "
          :class="tooltipClasses"
          v-bind="props.pt?.tooltip"
        >
          <slot
            name="tooltip"
            :value="Array.isArray(normalizedValue) ? normalizedValue[0] : min"
          >
            {{ Array.isArray(normalizedValue) ? normalizedValue[0] : min }}
          </slot>
        </div>
      </div>

      <!-- 结束手柄 -->
      <div
        :class="handleClasses"
        :style="endHandleStyle"
        @mousedown="(e) => handleDragStart(e, 'end')"
        @touchstart="(e) => handleDragStart(e, 'end')"
        tabindex="0"
        role="slider"
        :aria-valuemin="min"
        :aria-valuemax="max"
        :aria-valuenow="
          Array.isArray(normalizedValue) ? normalizedValue[1] : normalizedValue
        "
        :aria-label="ariaLabelRange ? ariaLabelRange[1] : ariaLabel"
        :aria-disabled="disabled"
        v-bind="props.pt?.handle"
      >
        <!-- 提示 -->
        <div
          v-if="
            tooltip &&
            (showTooltip || tooltipAlways) &&
            (!range || activeHandle === 'end')
          "
          :class="tooltipClasses"
          v-bind="props.pt?.tooltip"
        >
          <slot
            name="tooltip"
            :value="
              Array.isArray(normalizedValue)
                ? normalizedValue[1]
                : normalizedValue
            "
          >
            {{
              Array.isArray(normalizedValue)
                ? normalizedValue[1]
                : normalizedValue
            }}
          </slot>
        </div>
      </div>
    </div>

    <!-- 输入框 -->
    <template v-if="showInput">
      <slot name="input">
        <template v-if="range">
          <input
            :class="inputClasses"
            type="number"
            :min="min"
            :max="max"
            :step="step"
            :disabled="disabled"
            :value="Array.isArray(normalizedValue) ? normalizedValue[0] : min"
            @input="(e) => handleInputChange(e, 0)"
            v-bind="props.pt?.input"
          />
          <input
            :class="inputClasses"
            type="number"
            :min="min"
            :max="max"
            :step="step"
            :disabled="disabled"
            :value="Array.isArray(normalizedValue) ? normalizedValue[1] : max"
            @input="(e) => handleInputChange(e, 1)"
            v-bind="props.pt?.input"
          />
        </template>
        <input
          v-else
          :class="inputClasses"
          type="number"
          :min="min"
          :max="max"
          :step="step"
          :disabled="disabled"
          :value="normalizedValue"
          @input="handleInputChange"
          v-bind="props.pt?.input"
        />
      </slot>
    </template>
  </div>
</template>
