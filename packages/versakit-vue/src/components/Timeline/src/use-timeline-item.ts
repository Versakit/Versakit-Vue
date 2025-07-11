import { inject, computed } from 'vue'
import { timelineContextKey } from './use-timeline'

export const useTimelineItem = (position: number, isLast: boolean) => {
  // 注入Timeline组件提供的上下文
  const timelineContext = inject(timelineContextKey, null)

  // 如果没有找到上下文，则使用默认值
  const orientation = computed(
    () => timelineContext?.orientation.value || 'vertical',
  )
  const align = computed(() => timelineContext?.align.value || 'left')
  const reverse = computed(() => timelineContext?.reverse.value || false)

  // 计算位置（奇数还是偶数）用于交替布局
  const itemPosition = computed(() => {
    return position % 2 === 0 ? 'even' : 'odd'
  })

  return {
    orientation,
    align,
    reverse,
    itemPosition,
    isLast,
  }
}
