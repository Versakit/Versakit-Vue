<template>
  <div :class="classes" ref="_ref">
    <div v-if="line" :class="lineClasses" :style="lineStyle"></div>
    <div :class="dotClasses" :style="dotStyle">
      <slot name="dot"></slot>
    </div>
    <div v-if="$slots.opposite" :class="oppositeClasses">
      <slot name="opposite"></slot>
    </div>
    <div :class="contentClasses" @click="emit('click', $event)">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import {
  timelineItemStyle,
  timelineDotStyle,
  timelineContentStyle,
  timelineOppositeStyle,
  timelineLineStyle,
} from './index.variants'
import type { TimelineItemProps } from './type'
import { TimelineEmits } from './type'
import { useTimelineItem } from './use-timeline'

defineOptions({
  name: 'VTimelineItem',
})

const emit = defineEmits(TimelineEmits)
const props = withDefaults(defineProps<TimelineItemProps>(), {
  dot: '',
  dotColor: '',
  line: true,
  lineColor: '',
  position: undefined,
  unstyled: false,
})

const { _ref, timelineContext, register, getPosition } = useTimelineItem()

// 在父组件中注册此项目
onMounted(() => {
  if (timelineContext && typeof timelineContext.currentIndex === 'number') {
    register(timelineContext.currentIndex)
  }
})

// 计算实际位置
const actualPosition = computed(() => getPosition(props.position))

// 计算样式类
const classes = computed(() => {
  return props.unstyled
    ? props.pt?.root || ''
    : timelineItemStyle({
        position: actualPosition.value,
        class: props.pt?.root,
      })
})

const dotClasses = computed(() => {
  return props.unstyled
    ? props.pt?.dot || ''
    : timelineDotStyle({
        position: actualPosition.value,
        class: props.pt?.dot,
      })
})

const contentClasses = computed(() => {
  return props.unstyled
    ? props.pt?.content || ''
    : timelineContentStyle({
        position: actualPosition.value,
        class: props.pt?.content,
      })
})

const oppositeClasses = computed(() => {
  return props.unstyled
    ? props.pt?.opposite || ''
    : timelineOppositeStyle({
        position: actualPosition.value,
        class: props.pt?.opposite,
      })
})

const lineClasses = computed(() => {
  return props.unstyled
    ? props.pt?.line || ''
    : timelineLineStyle({
        position: actualPosition.value,
        class: props.pt?.line,
      })
})

// 自定义样式
const dotStyle = computed(() => {
  return props.dotColor ? { borderColor: props.dotColor } : {}
})

const lineStyle = computed(() => {
  return props.lineColor ? { backgroundColor: props.lineColor } : {}
})

defineExpose({
  _ref,
})
</script>
