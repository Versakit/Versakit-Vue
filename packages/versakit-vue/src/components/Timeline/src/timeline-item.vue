<template>
  <div :class="['timeline-item', rootClasses]" :style="itemStyles">
    <!-- Dot -->
    <div :class="['timeline-dot', dotClasses]">
      <slot name="dot">
        <div
          :class="[
            'h-3 w-3 rounded-full border-2 border-gray-300 bg-white dark:border-gray-500 dark:bg-gray-900',
            props.pt?.dot,
          ]"
          :style="dotColorStyle"
        />
      </slot>
    </div>

    <!-- Connector line (not shown for last item) -->
    <div
      v-if="!props.isLast"
      :class="['timeline-connector', connectorClasses]"
      :style="lineColorStyle"
    />

    <!-- Content -->
    <div :class="contentClasses">
      <slot />
    </div>

    <!-- Opposite content (for alternate layout) -->
    <div v-if="showOpposite" :class="oppositeClasses">
      <slot name="opposite" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import type { TimelineItemProps } from './type'
import { TimelineItemEmits } from './type'

defineOptions({
  name: 'TimelineItem',
})

const props = withDefaults(defineProps<TimelineItemProps>(), {
  unstyled: false,
})

defineEmits(TimelineItemEmits)

// Inject timeline context
const timelineAlign = inject<'left' | 'right' | 'alternate'>(
  'timelineAlign',
  'left',
)
const timelineOrientation = inject<'vertical' | 'horizontal'>(
  'timelineOrientation',
  'vertical',
)

const showOpposite = computed(() => timelineAlign === 'alternate')

const rootClasses = computed(() => {
  if (props.unstyled) {
    return props.pt?.root || ''
  }
  const base = 'relative flex'
  if (timelineOrientation === 'vertical') {
    return `${base} ${
      timelineAlign === 'right' ? 'flex-row-reverse' : 'flex-row'
    } ${props.pt?.root || ''}`
  }
  return `${base} min-w-0 flex-1 flex-col items-center ${props.pt?.root || ''}`
})

const dotClasses = computed(() => {
  if (props.unstyled) {
    return props.pt?.dot || ''
  }
  const base =
    'relative z-10 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center'
  if (timelineOrientation === 'vertical') {
    return `${base} ${timelineAlign === 'right' ? 'ml-3' : 'mr-3'} ${props.pt?.dot || ''}`
  }
  return `${base} mt-0 ${props.pt?.dot || ''}`
})

const connectorClasses = computed(() => {
  if (props.unstyled) {
    return props.pt?.connector || ''
  }
  if (timelineOrientation === 'vertical') {
    const base = 'absolute top-5 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600'
    return `${base} ${
      timelineAlign === 'right' ? 'right-2.5' : 'left-2.5'
    } ${props.pt?.connector || ''}`
  }
  return `absolute left-1/2 right-0 top-2.5 h-0.5 bg-gray-300 dark:bg-gray-600 ${props.pt?.connector || ''}`
})

const contentClasses = computed(() => {
  if (props.unstyled) {
    return props.pt?.content || ''
  }
  if (timelineOrientation === 'horizontal') {
    return `mt-2 w-full text-center ${props.pt?.content || ''}`
  }
  return `flex-1 ${props.pt?.content || ''}`
})

const oppositeClasses = computed(() => {
  if (props.unstyled) {
    return props.pt?.opposite || ''
  }
  return `flex-1 text-right ${props.pt?.opposite || ''}`
})

const dotColorStyle = computed(() => {
  if (props.dotColor) {
    return { borderColor: props.dotColor, backgroundColor: props.dotColor }
  }
  return {}
})

const lineColorStyle = computed(() => {
  if (props.lineColor) {
    return { backgroundColor: props.lineColor }
  }
  return {}
})

const itemStyles = computed(() => {
  const styles: Record<string, string> = {}
  if (props.dotColor && !props.unstyled) {
    if (!props.lineColor) {
      styles['--line-color'] = props.dotColor
    }
  }
  return styles
})
</script>
