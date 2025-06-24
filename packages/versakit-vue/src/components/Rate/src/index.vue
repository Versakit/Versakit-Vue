<template>
  <div
    :class="containerClass"
    @mouseleave="handleMouseLeave"
    role="radiogroup"
    aria-label="评分"
  >
    <div
      v-for="index in max"
      :key="index"
      :class="itemClass"
      @click="handleClick(index - 1, false)"
      @mousemove="handleMouseMove($event, index - 1)"
      role="radio"
      :aria-checked="getStarValue(index - 1) > 0"
      :aria-disabled="disabled"
      :aria-readonly="readonly"
      :tabindex="disabled ? -1 : 0"
    >
      <!-- 空星 -->
      <span :class="voidClass">
        <slot name="character">
          {{ character || '★' }}
        </slot>
      </span>

      <!-- 全星 -->
      <span v-if="getStarValue(index - 1) === 1" :class="[fullClass, 'w-full']">
        <slot name="character">
          {{ character || '★' }}
        </slot>
      </span>

      <!-- 半星 -->
      <span
        v-else-if="getStarValue(index - 1) === 0.5"
        :class="[halfClass, 'w-1/2']"
      >
        <slot name="character">
          {{ character || '★' }}
        </slot>
      </span>
    </div>

    <!-- 分数显示 -->
    <span v-if="showScore" :class="scoreClass">
      {{ formatScoreText(currentValue) }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRate } from './composables/useRate'
import {
  rateContainer,
  rateItem,
  rateScore,
  rateStarFull,
  rateStarVoid,
  rateHalfStar,
} from './index.variants'
import type { RateProps } from './type'
import { RateEmits } from './type'

defineOptions({
  name: 'Rate',
})

const props = withDefaults(defineProps<RateProps>(), {
  modelValue: 0,
  max: 5,
  allowHalf: false,
  readonly: false,
  disabled: false,
  color: 'yellow',
  size: 'default',
  showScore: false,
})

const emit = defineEmits(RateEmits)

const {
  currentValue,
  getStarValue,
  handleClick,
  handleMouseMove,
  handleMouseLeave,
} = useRate({
  modelValue: props.modelValue,
  max: props.max,
  allowHalf: props.allowHalf,
  readonly: props.readonly,
  disabled: props.disabled,
  onChange: (val) => {
    emit('update:modelValue', val)
    emit('change', val)
  },
  onHoverChange: (val) => {
    emit('hover-change', val)
  },
})

// 计算样式
const containerClass = computed(() => {
  return rateContainer({
    disabled: props.disabled,
  })
})

const itemClass = computed(() => {
  return rateItem({
    size: props.size,
    disabled: props.disabled,
    readonly: props.readonly,
  })
})

const scoreClass = computed(() => {
  return rateScore({
    size: props.size,
  })
})

const fullClass = computed(() => {
  return rateStarFull({
    color: props.color,
  })
})

const halfClass = computed(() => {
  return rateHalfStar({
    color: props.color,
  })
})

const voidClass = computed(() => {
  return rateStarVoid()
})

// 格式化分数显示
const formatScoreText = (value: number) => {
  if (props.formatTooltip) {
    return props.formatTooltip(value)
  }
  return value.toString()
}
</script>

<style scoped>
/* 添加动画效果 */
[role='radio'] {
  transition: transform 0.2s ease;
}

[role='radio']:hover {
  transform: scale(1.1);
}
</style>
