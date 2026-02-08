export type TimelineOrientation = 'vertical' | 'horizontal'
export type TimelineAlign = 'left' | 'right' | 'alternate'

export type TimelineProps = {
  /**
   * 时间轴的方向
   */
  orientation?: TimelineOrientation
  /**
   * 时间轴的对齐方式
   */
  align?: TimelineAlign
  /**
   * 是否反向显示
   */
  reverse?: boolean
  /**
   * 是否移除默认样式
   */
  unstyled?: boolean
  /**
   * 传递样式类
   */
  pt?: TimelinePT
}

export type TimelinePT = {
  root?: string
}

export type TimelineItemProps = {
  /**
   * 在时间线中的位置索引
   */
  position: number
  /**
   * 是否为最后一个项目
   */
  isLast: boolean
  /**
   * 点的颜色
   */
  dotColor?: string
  /**
   * 线的颜色
   */
  lineColor?: string
  /**
   * 是否移除默认样式
   */
  unstyled?: boolean
  /**
   * 传递样式类
   */
  pt?: TimelineItemPT
}

export type TimelineItemPT = {
  root?: string
  dot?: string
  content?: string
  connector?: string
  opposite?: string
}

export const TimelineEmits = {}
export const TimelineItemEmits = {}
