<template>
  <div :class="classes">
    <div v-if="hasOppositeSlot" :class="oppositeClasses">
      <slot name="opposite" />
    </div>
    <div :class="dotClasses" :style="dotStyles" role="presentation">
      <slot name="dot">
        <div
          class="w-4 h-4 rounded-full bg-blue-500"
          :style="innerDotStyles"
        ></div>
      </slot>
    </div>
    <div :class="contentClasses">
      <slot />
    </div>
    <div
      :class="connectorClasses"
      :style="connectorStyles"
      role="presentation"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import {
  timelineItemStyle,
  timelineItemDotStyle,
  timelineItemContentStyle,
  timelineItemOppositeStyle,
  timelineItemConnectorStyle,
} from './index.variants'
import type { ExtendedTimelineItemProps } from './type'
import { useTimelineItem } from './use-timeline-item'

const props = withDefaults(defineProps<ExtendedTimelineItemProps>(), {
  dotColor: undefined,
  lineColor: undefined,
  unstyled: false,
})

const slots = useSlots()
const hasOppositeSlot = computed(() => !!slots.opposite)

// 使用hook获取时间线上下文
const { orientation, align, itemPosition } = useTimelineItem(
  props.position,
  props.isLast,
)

// 计算样式类
const classes = computed(() => {
  return props.unstyled
    ? props.pt?.root || ''
    : timelineItemStyle({
        orientation: orientation.value,
        align: align.value,
        position: itemPosition.value,
        class: props.pt?.root,
      })
})

const dotClasses = computed(() => {
  return props.unstyled
    ? props.pt?.dot || ''
    : timelineItemDotStyle({
        orientation: orientation.value,
        class: props.pt?.dot,
      })
})

const contentClasses = computed(() => {
  return props.unstyled
    ? props.pt?.content || ''
    : timelineItemContentStyle({
        orientation: orientation.value,
        align: align.value,
        position: itemPosition.value,
        class: props.pt?.content,
      })
})

const oppositeClasses = computed(() => {
  return props.unstyled
    ? props.pt?.opposite || ''
    : timelineItemOppositeStyle({
        orientation: orientation.value,
        align: align.value,
        position: itemPosition.value,
        class: props.pt?.opposite,
      })
})

const connectorClasses = computed(() => {
  return props.unstyled
    ? props.pt?.connector || ''
    : timelineItemConnectorStyle({
        orientation: orientation.value,
        align: align.value,
        position: itemPosition.value,
        isLast: props.isLast,
        class: props.pt?.connector,
      })
})

// 计算样式
const dotStyles = computed(() => {
  return props.dotColor ? { '--dot-color': props.dotColor } : {}
})

const innerDotStyles = computed(() => {
  return props.dotColor ? { backgroundColor: props.dotColor } : {}
})

const connectorStyles = computed(() => {
  return props.lineColor ? { backgroundColor: props.lineColor } : {}
})
</script>
