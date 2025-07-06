export type SkeletonAnimation = 'pulse' | 'wave' | 'none'

export interface SkeletonProps {
  /**
   * 是否显示动画效果
   * @default 'pulse'
   */
  animation?: SkeletonAnimation

  /**
   * 是否显示骨架屏
   * @default true
   */
  loading?: boolean

  /**
   * 是否为圆角
   * @default false
   */
  rounded?: boolean

  /**
   * 自定义宽度
   */
  width?: string | number

  /**
   * 自定义高度
   */
  height?: string | number

  /**
   * 是否使用无样式模式
   * @default false
   */
  unstyled?: boolean

  /**
   * 传递模板样式
   */
  pt?: SkeletonPT
}

export interface SkeletonTextProps {
  /**
   * 显示的行数
   * @default 3
   */
  lines?: number

  /**
   * 每行宽度，可以是数组或者单个值
   * @default ['100%', '100%', '80%']
   */
  widths?: (string | number)[] | string | number

  /**
   * 行高
   * @default '1rem'
   */
  lineHeight?: string | number

  /**
   * 是否显示动画效果
   * @default 'pulse'
   */
  animation?: SkeletonAnimation

  /**
   * 是否为圆角
   * @default false
   */
  rounded?: boolean

  /**
   * 是否使用无样式模式
   * @default false
   */
  unstyled?: boolean

  /**
   * 传递模板样式
   */
  pt?: SkeletonTextPT
}

export interface SkeletonAvatarProps {
  /**
   * 头像大小
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

  /**
   * 是否为圆形
   * @default true
   */
  circle?: boolean

  /**
   * 是否显示动画效果
   * @default 'pulse'
   */
  animation?: SkeletonAnimation

  /**
   * 是否使用无样式模式
   * @default false
   */
  unstyled?: boolean

  /**
   * 传递模板样式
   */
  pt?: SkeletonAvatarPT
}

export type SkeletonPT = {
  root?: string
  content?: string
}

export type SkeletonTextPT = {
  root?: string
  line?: string
}

export type SkeletonAvatarPT = {
  root?: string
}
