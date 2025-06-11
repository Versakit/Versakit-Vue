import type { CSSProperties } from 'vue'

export interface SkeletonProps {
  /**
   * 是否显示动画效果
   */
  animated?: boolean
  /**
   * 骨架屏形状
   */
  variant?:
    | 'text'
    | 'circular'
    | 'rectangular'
    | 'avatar'
    | 'button'
    | 'card'
    | 'list'
    | 'image'
  /**
   * 自定义宽度
   */
  width?: string | number
  /**
   * 自定义高度
   */
  height?: string | number
  /**
   * 自定义圆角
   */
  radius?: string | number
  /**
   * 自定义类名
   */
  skeletonClass?: string
  /**
   * 自定义样式
   */
  skeletonStyle?: CSSProperties
  /**
   * 是否使用无样式模式
   */
  unstyled?: boolean
  /**
   * Pass Through 属性
   */
  pt?: SkeletonPassThroughAttributes
  /**
   * 重复次数
   */
  repeat?: number
  /**
   * 是否加载中
   */
  loading?: boolean
}

export type SkeletonPassThroughAttributes = {
  root?: Record<string, unknown>
  item?: Record<string, unknown>
}
