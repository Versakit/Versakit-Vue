export type RunhorselightDirection = 'left' | 'right'

export type RunhorselightItemType = 'text' | 'image' | 'card'

export type RunhorselightItem =
  | string
  | {
      type?: RunhorselightItemType
      content?: string
      src?: string
      alt?: string
      title?: string
      description?: string
      backgroundColor?: string
      textColor?: string
      borderRadius?: string
    }

export type RunhorselightAffix = RunhorselightItem

export type RunhorselightAffixClickTarget = 'prefix' | 'suffix'

export interface RunhorselightAffixClickPayload {
  target: RunhorselightAffixClickTarget
  item: RunhorselightNormalizedItem
}

export type RunhorselightPT = {
  root?: string
  viewport?: string
  track?: string
  group?: string
  item?: string
  image?: string
  card?: string
  cardTitle?: string
  cardDescription?: string
  text?: string
}

export interface RunhorselightProps {
  /**
   * 跑马灯数据项。当传入默认插槽时，可传入空数组。
   */
  items?: RunhorselightItem[]
  /**
   * 每一轮内容前展示的前缀，支持文字或图片等 RunhorselightItem 格式。
   */
  prefix?: RunhorselightAffix
  /**
   * 每一轮内容后展示的后缀，支持文字或图片等 RunhorselightItem 格式。
   */
  suffix?: RunhorselightAffix
  /**
   * 滚动方向
   */
  direction?: RunhorselightDirection
  /**
   * 完成一次滚动循环的时长（秒）
   */
  duration?: number | string
  /**
   * 组件高度
   */
  height?: string
  /**
   * 背景色
   */
  backgroundColor?: string
  /**
   * 默认文本色
   */
  textColor?: string
  /**
   * 圆角
   */
  borderRadius?: string
  /**
   * 项间距
   */
  gap?: string
  /**
   * 鼠标悬停时暂停
   */
  pauseOnHover?: boolean
  /**
   * 是否无缝循环
   */
  loop?: boolean
  /**
   * 图片模式下自动补充内容，避免首屏过空
   */
  autofill?: boolean
  /**
   * 是否使用无样式模式
   */
  unstyled?: boolean
  /**
   * 前缀点击事件
   */
  onPrefixClick?: (payload: RunhorselightAffixClickPayload) => void
  /**
   * 后缀点击事件
   */
  onSuffixClick?: (payload: RunhorselightAffixClickPayload) => void
  /**
   * 透传样式类
   */
  pt?: RunhorselightPT
}

export interface RunhorselightNormalizedItem {
  id: string
  type: RunhorselightItemType
  content: string
  src?: string
  alt?: string
  title?: string
  description?: string
  backgroundColor?: string
  textColor?: string
  borderRadius?: string
}
