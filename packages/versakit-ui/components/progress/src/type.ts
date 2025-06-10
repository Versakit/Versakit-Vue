export type ProgressVariant =
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

export type ProgressSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type ProgressType = 'line' | 'circle'

export interface ProgressProps {
  /**
   * 进度值，范围 0-100
   */
  value?: number
  /**
   * 最大值
   */
  max?: number
  /**
   * 最小值
   */
  min?: number
  /**
   * 进度条样式变体
   */
  variant?: ProgressVariant
  /**
   * 进度条尺寸
   */
  size?: ProgressSize
  /**
   * 进度条类型：线性或环形
   */
  type?: ProgressType
  /**
   * 是否显示进度条文本
   */
  showText?: boolean
  /**
   * 是否展示条纹效果
   */
  striped?: boolean
  /**
   * 是否展示动画效果
   */
  animated?: boolean
  /**
   * 进度条文本的格式化函数
   */
  format?: (percent: number) => string
  /**
   * 是否使用无样式模式
   */
  unstyled?: boolean
  /**
   * 进度条颜色
   */
  color?: string
  /**
   * 进度条轨道颜色
   */
  trackColor?: string
  /**
   * 环形进度条的线宽度
   */
  strokeWidth?: number
  /**
   * 是否显示为不确定状态的进度条（加载中状态）
   */
  indeterminate?: boolean
}

// PT (Pass Through) 类型定义
export type ProgressPassThroughAttributes = {
  root?: Record<string, unknown>
  track?: Record<string, unknown>
  bar?: Record<string, unknown>
  text?: Record<string, unknown>
  circle?: Record<string, unknown>
  svg?: Record<string, unknown>
}

// 插槽类型
export interface ProgressSlots {
  default?: () => unknown
  text?: (props: { percent: number }) => unknown
}
