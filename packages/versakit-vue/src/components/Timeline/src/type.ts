export type TimelineOrientation = 'horizontal' | 'vertical'
export type TimelineAlign = 'left' | 'right' | 'alternate'

export type TimelineProps = {
  /**
   * 时间线方向
   * @default 'vertical'
   */
  orientation?: TimelineOrientation
  /**
   * 时间线对齐方式（仅在垂直方向有效）
   * @default 'left'
   */
  align?: TimelineAlign
  /**
   * 是否反向显示时间线项目
   * @default false
   */
  reverse?: boolean
  /**
   * 是否禁用默认样式
   * @default false
   */
  unstyled?: boolean
  /**
   * 自定义样式传递
   */
  pt?: TimelinePT
}

export type TimelineItemProps = {
  /**
   * 时间线项目的点的颜色
   */
  dotColor?: string
  /**
   * 时间线项目的连接线颜色
   */
  lineColor?: string
  /**
   * 是否禁用默认样式
   * @default false
   */
  unstyled?: boolean
  /**
   * 自定义样式传递
   */
  pt?: TimelineItemPT
}

/**
 * 扩展的TimelineItem属性，包含位置信息
 */
export interface ExtendedTimelineItemProps extends TimelineItemProps {
  /**
   * 在时间线中的位置索引
   */
  position: number
  /**
   * 是否为最后一个项目
   */
  isLast: boolean
}

export type TimelinePT = {
  root?: string
  container?: string
}

export type TimelineItemPT = {
  root?: string
  dot?: string
  content?: string
  opposite?: string
  connector?: string
}

export const TimelineEmits = {}

export type ITimelineEmits = typeof TimelineEmits
