import { withInstall } from '@versakit/shared'
import TimelineComponent from './src/timeline.vue'
import TimelineItemComponent from './src/timeline-item.vue'

export const Timeline = withInstall(TimelineComponent, {
  TimelineItem: TimelineItemComponent,
})

export const TimelineItem = Timeline.TimelineItem

export * from './src/type'
