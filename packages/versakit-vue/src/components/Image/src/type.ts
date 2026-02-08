export type ImageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export type ImageLoadingStrategy = 'lazy' | 'eager'

export type ImageProps = {
  /**
   * 图片源地址
   */
  src: string
  /**
   * 图片加载失败时的替代文本
   */
  alt?: string
  /**
   * 图片宽度
   */
  width?: string | number
  /**
   * 图片高度
   */
  height?: string | number
  /**
   * 图片填充模式
   * @default 'cover'
   */
  fit?: ImageFit
  /**
   * 是否启用模糊加载效果
   * @default false
   */
  blurred?: boolean
  /**
   * 模糊加载的模糊度
   * @default 10
   */
  blurAmount?: number
  /**
   * 图片加载策略
   * @default 'lazy'
   */
  loading?: ImageLoadingStrategy
  /**
   * 是否启用缩放功能
   * @default false
   */
  isZoomable?: boolean
  /**
   * 是否当前处于缩放状态
   * @default false
   */
  isZoomed?: boolean
  /**
   * 缩放比例
   * @default 1.5
   */
  zoomScale?: number
  /**
   * 是否显示骨架屏
   * @default true
   */
  skeleton?: boolean
  /**
   * 骨架屏背景色
   */
  skeletonColor?: string
  /**
   * 图片圆角
   */
  radius?: string
  /**
   * 是否禁用默认样式
   * @default false
   */
  unstyled?: boolean
  /**
   * 自定义样式传递
   */
  pt?: ImagePT
}

export type ImagePT = {
  root?: string
  img?: string
  skeleton?: string
  overlay?: string
}

export const ImageEmits = {
  load: (evt: Event) => evt instanceof Event,
  error: (evt: Event) => evt instanceof Event,
  zoom: (isZoomed: boolean) => typeof isZoomed === 'boolean',
}

export type ImageEmits = typeof ImageEmits
