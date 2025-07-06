import { provide, ref, inject } from 'vue'
import type { TimelineProps } from './type'

const TIMELINE_INJECTION_KEY = Symbol('timeline')

export type TimelineContext = {
  align: 'left' | 'right' | 'alternate'
  itemCount: number
  currentIndex: number
}

export const useTimeline = (props: TimelineProps) => {
  const _ref = ref<HTMLElement | null>(null)
  const itemCount = ref(0)

  // 提供给子组件的上下文
  provide(TIMELINE_INJECTION_KEY, {
    align: props.align || 'left',
    itemCount,
    currentIndex: 0,
  })

  const registerItem = () => {
    itemCount.value++
    return itemCount.value - 1
  }

  return {
    _ref,
    registerItem,
  }
}

export const useTimelineItem = () => {
  // 从父组件注入上下文
  const timelineContext = inject<TimelineContext>(TIMELINE_INJECTION_KEY, {
    align: 'left',
    itemCount: 0,
    currentIndex: 0,
  })

  const _ref = ref<HTMLElement | null>(null)
  const itemIndex = ref(0)

  // 注册项目并获取索引
  const register = (index: number) => {
    itemIndex.value = index
  }

  // 根据align和index确定位置
  const getPosition = (position?: 'left' | 'right'): 'left' | 'right' => {
    if (position) return position

    if (timelineContext.align === 'alternate') {
      return itemIndex.value % 2 === 0 ? 'left' : 'right'
    }

    return timelineContext.align
  }

  return {
    _ref,
    timelineContext,
    itemIndex,
    register,
    getPosition,
  }
}
