<template>
  <div :class="rootClasses" :style="itemStyles">
    <!-- Dot -->
    <div :class="dotClasses" :style="dotColorStyle">
      <slot name="dot">
        <div
          :class="[
            'w-3 h-3 rounded-full border-2 border-gray-300 dark:border-gray-600',
            props.pt?.dot,
          ]"
          :style="dotColorStyle"
        />
      </slot>
    </div>

    <!-- Connector line (not shown for last item) -->
    <div
      v-if="!props.isLast"
      :class="connectorClasses"
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
  return `${base} flex-col ${props.pt?.root || ''}`
})

const dotClasses = computed(() => {
  if (props.unstyled) {
    return props.pt?.dot || ''
  }
  const base = 'flex-shrink-0 z-10'
  if (timelineOrientation === 'vertical') {
    return `${base} ${timelineAlign === 'right' ? 'mr-4' : 'ml-4'} ${props.pt?.dot || ''}`
  }
  return `${base} ${props.pt?.dot || ''}`
})

const connectorClasses = computed(() => {
  if (props.unstyled) {
    return props.pt?.connector || ''
  }
  if (timelineOrientation === 'vertical') {
    const base =
      'absolute top-6 left-0 w-0.5 h-full bg-gray-300 dark:bg-gray-600'
    return `${base} ${
      timelineAlign === 'right' ? 'right-0 left-auto' : ''
    } ${props.pt?.connector || ''}`
  }
  return `absolute left-6 top-0 w-full h-0.5 bg-gray-300 dark:bg-gray-600 ${props.pt?.connector || ''}`
})

const contentClasses = computed(() => {
  if (props.unstyled) {
    return props.pt?.content || ''
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
    return { borderColor: props.dotColor }
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
    // Apply dot color to connector if lineColor not specified
    if (!props.lineColor) {
      styles['--line-color'] = props.dotColor
    }
  }
  return styles
})
</script>
