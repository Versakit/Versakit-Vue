import { computed } from 'vue'
import type { ProgressProps } from './type'

export const useProgress = (props: ProgressProps) => {
  // 计算进度百分比
  const percentage = computed(() => {
    if (props.indeterminate) {
      return 0
    }

    const value = Math.max(0, Math.min(props.value || 0, props.max || 100))
    const max = Math.max(1, props.max || 100)
    return Math.round((value / max) * 100)
  })

  // 格式化进度文本
  const formattedPercentage = computed(() => {
    return `${percentage.value}%`
  })

  // 计算进度条宽度样式
  const progressWidth = computed(() => {
    if (props.indeterminate) {
      return undefined
    }
    return `width: ${percentage.value}%`
  })

  return {
    percentage,
    formattedPercentage,
    progressWidth,
  }
}
