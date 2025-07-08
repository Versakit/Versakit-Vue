export type CarouselProps = {
  /** 是否自动播放 */
  autoplay?: boolean
  /** 自动播放间隔(毫秒) */
  interval?: number
  /** 初始激活项索引 */
  activeIndex?: number
  /** 轮播方向，水平或垂直 */
  direction?: 'horizontal' | 'vertical'
  /** 是否循环播放 */
  loop?: boolean
  /** 是否显示指示器 */
  indicators?: boolean
  /** 是否显示控制按钮 */
  controls?: boolean
  /** 过渡效果 */
  effect?: 'slide' | 'fade'
  /** 是否可触摸滑动 */
  touchable?: boolean
  /** 是否移除默认样式 */
  unstyled?: boolean
  /** 自定义样式 */
  pt?: CarouselPT
}

export type CarouselPT = {
  root?: string
  wrapper?: string
  slide?: string
  controls?: string
  prevButton?: string
  nextButton?: string
  indicators?: string
  indicator?: string
  activeIndicator?: string
}

export const CarouselEmits = {
  change: (index: number) => typeof index === 'number',
  'update:activeIndex': (index: number) => typeof index === 'number',
}

export type CarouselEmits = typeof CarouselEmits
