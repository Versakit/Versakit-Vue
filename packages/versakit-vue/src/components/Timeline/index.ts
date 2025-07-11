import { withInstall } from '@versakit/shared'
import TimelineComponent from './src/index.vue'
import TimelineItemComponent from './src/TimelineItem.vue'

export const Timeline = withInstall(TimelineComponent)
export const TimelineItem = withInstall(TimelineItemComponent)

export * from './src/type'

// 默认导出Timeline
export default Timeline
