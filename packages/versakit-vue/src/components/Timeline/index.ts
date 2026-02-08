import { withInstall } from '@versakit/shared'
import _Timeline from './src/timeline.vue'
import _TimelineItem from './src/timeline-item.vue'

export const Timeline = withInstall(_Timeline)
export const TimelineItem = withInstall(_TimelineItem)
export default Timeline

export * from './src/type'
