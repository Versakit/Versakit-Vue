<script setup lang="ts">
import { computed } from 'vue'
import {
  progress,
  progressBar,
  progressCircle,
  progressText,
  progressTrack,
} from './index.variants'
import type { ProgressProps, ProgressPassThroughAttributes } from './type'

const props = withDefaults(
  defineProps<ProgressProps & { pt?: ProgressPassThroughAttributes }>(),
  {
    value: 0,
    max: 100,
    min: 0,
    variant: 'primary',
    size: 'md',
    type: 'line',
    showText: true,
    striped: false,
    animated: false,
    unstyled: false,
    strokeWidth: 6,
    indeterminate: false,
  },
)

// 计算百分比
const percent = computed(() => {
  // 确保值在最小值和最大值之间
  const clampedValue = Math.max(props.min, Math.min(props.max, props.value))
  // 计算百分比
  return Math.round(
    ((clampedValue - props.min) / (props.max - props.min)) * 100,
  )
})

// 格式化显示文本
const formattedText = computed(() => {
  if (props.format) {
    return props.format(percent.value)
  }
  return `${percent.value}%`
})

// 计算组件样式
const containerClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return progress({
    type: props.type,
    size: props.type === 'line' ? props.size : undefined,
    unstyled: props.unstyled,
  })
})

const trackClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return progressTrack({
    type: props.type,
    size: props.type === 'line' ? props.size : undefined,
  })
})

const barClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return progressBar({
    variant: props.variant,
    striped: props.striped,
    animated: props.animated && props.striped,
    indeterminate: props.indeterminate,
  })
})

const textClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return progressText({
    size: props.size,
    type: props.type,
  })
})

const circleClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return progressCircle({
    size: props.size,
  })
})

// 计算线性进度条样式
const barStyle = computed(() => {
  const style: Record<string, string> = {
    width: props.indeterminate ? '100%' : `${percent.value}%`,
  }

  if (props.color) {
    style.backgroundColor = props.color
  }

  return style
})

// 计算环形进度条参数
const circleParams = computed(() => {
  const size =
    {
      xs: 64,
      sm: 96,
      md: 128,
      lg: 160,
      xl: 192,
    }[props.size] || 128

  const radius = size / 2
  const innerRadius = radius - (props.strokeWidth || 6) / 2
  const circumference = 2 * Math.PI * innerRadius
  const strokeDashoffset = circumference * (1 - percent.value / 100)

  return {
    size,
    radius,
    innerRadius,
    circumference,
    strokeDashoffset,
  }
})

// 计算环形进度条轨道和进度弧的颜色
const circleTrackColor = computed(
  () => props.trackColor || 'rgb(229, 231, 235)',
)

const circlePathColor = computed(() => {
  if (props.color) return props.color

  const colors = {
    primary: 'rgb(79, 70, 229)', // primary-500
    success: 'rgb(34, 197, 94)', // success-500
    info: 'rgb(6, 182, 212)', // info-500
    warning: 'rgb(245, 158, 11)', // warning-500
    danger: 'rgb(239, 68, 68)', // danger-500
  }

  return colors[props.variant] || colors.primary
})
</script>

<template>
  <div
    :class="containerClasses"
    role="progressbar"
    :aria-valuenow="value"
    :aria-valuemin="min"
    :aria-valuemax="max"
    :aria-valuetext="formattedText"
    v-bind="{ ...$attrs, ...props.pt?.root }"
  >
    <!-- 线性进度条 -->
    <template v-if="type === 'line'">
      <div :class="trackClasses" v-bind="props.pt?.track">
        <div :class="barClasses" :style="barStyle" v-bind="props.pt?.bar">
          <span
            v-if="showText && !indeterminate"
            :class="textClasses"
            v-bind="props.pt?.text"
          >
            <slot name="text" :percent="percent">
              {{ formattedText }}
            </slot>
          </span>
        </div>
      </div>
    </template>

    <!-- 环形进度条 -->
    <template v-else>
      <div :class="circleClasses" v-bind="props.pt?.circle">
        <svg
          :width="circleParams.size"
          :height="circleParams.size"
          :viewBox="`0 0 ${circleParams.size} ${circleParams.size}`"
          v-bind="props.pt?.svg"
        >
          <!-- 背景圆环 -->
          <circle
            :cx="circleParams.radius"
            :cy="circleParams.radius"
            :r="circleParams.innerRadius"
            :stroke-width="strokeWidth"
            :stroke="circleTrackColor"
            fill="none"
          />
          <!-- 进度圆环 -->
          <circle
            :cx="circleParams.radius"
            :cy="circleParams.radius"
            :r="circleParams.innerRadius"
            :stroke-width="strokeWidth"
            :stroke="circlePathColor"
            fill="none"
            :stroke-dasharray="circleParams.circumference"
            :stroke-dashoffset="
              indeterminate ? 0 : circleParams.strokeDashoffset
            "
            transform="rotate(-90 120 120)"
            :style="
              indeterminate
                ? 'animation: circle-progress 2s linear infinite'
                : ''
            "
            stroke-linecap="round"
          />
        </svg>
        <!-- 中心文本 -->
        <div
          v-if="showText && !indeterminate"
          :class="textClasses"
          class="absolute inset-0 flex items-center justify-center"
          v-bind="props.pt?.text"
        >
          <slot name="text" :percent="percent">
            {{ formattedText }}
          </slot>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
@keyframes circle-progress {
  0% {
    stroke-dasharray: 1, 400;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 150, 400;
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dasharray: 1, 400;
    stroke-dashoffset: -260;
  }
}
</style>
