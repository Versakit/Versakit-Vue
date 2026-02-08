export type CarouselVariant = 'default' | 'dots' | 'thumbnails'
export type CarouselSize = 'sm' | 'md' | 'lg'

export type CarouselProps = {
  /**
   * 轮播图变体类型
   */
  variant?: CarouselVariant
  /**
   * 轮播图尺寸
   */
  size?: CarouselSize
  /**
   * 是否自动播放
   */
  autoplay?: boolean
  /**
   * 自动播放间隔时间（毫秒）
   */
  interval?: number
  /**
   * 是否循环播放
   */
  loop?: boolean
  /**
   * 是否显示指示器
   */
  indicators?: boolean
  /**
   * 是否显示导航按钮
   */
  navigation?: boolean
  /**
   * 是否启用键盘导航
   */
  keyboardNavigation?: boolean
  /**
   * 是否启用触摸滑动
   */
  touchSwipe?: boolean
  /**
   * 是否禁用轮播图
   */
  disabled?: boolean
  /**
   * 初始激活的幻灯片索引
   */
  initialIndex?: number
  /**
   * 是否使用无样式模式
   */
  unstyled?: boolean
  /**
   * 透传样式
   */
  pt?: CarouselPT
}

export type CarouselPT = {
  root?: string
  container?: string
  item?: string
  navigation?: string
  prevButton?: string
  nextButton?: string
  indicators?: string
  indicator?: string
  activeIndicator?: string
}

export type CarouselEmitsType = {
  change: (currentIndex: number, prevIndex: number) => void
  'update:active-index': (index: number) => void
}

export const CarouselEmits = {
  change: (currentIndex: number, prevIndex: number) =>
    typeof currentIndex === 'number' && typeof prevIndex === 'number',
  'update:active-index': (index: number) => typeof index === 'number',
}
