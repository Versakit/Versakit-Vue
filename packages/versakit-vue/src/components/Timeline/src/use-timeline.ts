import { provide, type InjectionKey, type Ref } from 'vue'
import type { TimelineAlign, TimelineOrientation } from './type'

export interface TimelineContext {
  orientation: Ref<TimelineOrientation>
  align: Ref<TimelineAlign>
  reverse: Ref<boolean>
}

export const timelineContextKey = Symbol() as InjectionKey<TimelineContext>

export const useTimeline = (
  orientation: Ref<TimelineOrientation>,
  align: Ref<TimelineAlign>,
  reverse: Ref<boolean>,
) => {
  // 提供上下文给子组件
  provide(timelineContextKey, {
    orientation,
    align,
    reverse,
  })

  return {
    orientation,
    align,
    reverse,
  }
}
