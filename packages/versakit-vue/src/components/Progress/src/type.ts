export type ProgressVariant =
  | 'default'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'

export type ProgressSize = 'sm' | 'md' | 'lg'

export type ProgressShape = 'flat' | 'rounded' | 'pill'

export interface ProgressProps {
  /**
   * 进度值，范围0-100
   * @default 0
   */
  value?: number

  /**
   * 最大值
   * @default 100
   */
  max?: number

  /**
   * 是否显示进度文本
   * @default false
   */
  showText?: boolean

  /**
   * 进度条样式变体
   * @default 'default'
   */
  variant?: ProgressVariant

  /**
   * 进度条大小
   * @default 'md'
   */
  size?: ProgressSize

  /**
   * 进度条形状
   * @default 'rounded'
   */
  shape?: ProgressShape

  /**
   * 是否显示条纹效果
   * @default false
   */
  striped?: boolean

  /**
   * 是否显示动画效果
   * @default false
   */
  animated?: boolean

  /**
   * 是否为不确定状态
   * @default false
   */
  indeterminate?: boolean

  /**
   * 是否使用无样式模式
   * @default false
   */
  unstyled?: boolean

  /**
   * 传递模板样式
   */
  pt?: ProgressPT
}

/**
 * Progress组件模板样式类型
 */
export type ProgressPT = {
  root?: string
  container?: string
  bar?: string
  text?: string
}

export const ProgressEmits = {
  /**
   * 进度变化时触发
   */
  'update:value': (value: number) => typeof value === 'number',
}

export type IProgressEmits = typeof ProgressEmits
