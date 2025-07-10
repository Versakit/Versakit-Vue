/**
 * Splitter组件的布局方向
 */
export type SplitterLayout = 'horizontal' | 'vertical'

/**
 * Splitter组件属性
 */
export type SplitterProps = {
  /**
   * 布局方向，水平或垂直
   * @default 'horizontal'
   */
  layout?: SplitterLayout

  /**
   * 分隔条大小（像素）
   * @default 4
   */
  gutterSize?: number

  /**
   * 面板最小尺寸，可以是单个数值或数组（百分比）
   * @default 10
   */
  minSize?: number | number[]

  /**
   * 是否允许折叠面板
   * @default false
   */
  collapsible?: boolean

  /**
   * 初始折叠的面板索引
   */
  initialCollapsed?: number[]

  /**
   * 是否保存面板状态到本地存储
   * @default false
   */
  stateful?: boolean

  /**
   * 本地存储的键名
   * @default 'splitter-state'
   */
  stateKey?: string

  /**
   * 是否禁用默认样式
   * @default false
   */
  unstyled?: boolean

  /**
   * 样式传递对象
   */
  pt?: SplitterPT
}

/**
 * Splitter组件样式传递类型
 */
export type SplitterPT = {
  /**
   * 根元素样式
   */
  root?: string

  /**
   * 分隔条样式
   */
  gutter?: string

  /**
   * 分隔条手柄样式
   */
  gutterHandler?: string

  /**
   * 折叠按钮样式
   */
  collapseButton?: string
}

/**
 * SplitterPane组件属性
 */
export type SplitterPaneProps = {
  /**
   * 面板初始尺寸（百分比）
   * @default 0
   */
  size?: number

  /**
   * 面板最小尺寸（百分比）
   * @default 10
   */
  minSize?: number

  /**
   * 面板最大尺寸（百分比）
   * @default 100
   */
  maxSize?: number

  /**
   * 是否可调整大小
   * @default true
   */
  resizable?: boolean

  /**
   * 是否可折叠
   * @default false
   */
  collapsible?: boolean

  /**
   * 折叠后的尺寸（像素）
   * @default 36
   */
  collapsedSize?: number

  /**
   * 是否禁用默认样式
   * @default false
   */
  unstyled?: boolean

  /**
   * 样式传递对象
   */
  pt?: SplitterPanePT
}

/**
 * SplitterPane组件样式传递类型
 */
export type SplitterPanePT = {
  /**
   * 根元素样式
   */
  root?: string

  /**
   * 折叠状态样式
   */
  collapsed?: string
}

/**
 * Splitter组件事件
 */
export const SplitterEmits = {
  /**
   * 调整大小时触发
   */
  resize: (sizes: number[]) => Array.isArray(sizes),

  /**
   * 开始调整大小时触发
   */
  resizeStart: (e: MouseEvent | TouchEvent) =>
    e instanceof MouseEvent || e instanceof TouchEvent,

  /**
   * 结束调整大小时触发
   */
  resizeEnd: (sizes: number[]) => Array.isArray(sizes),

  /**
   * 面板折叠时触发
   */
  collapse: (index: number) => typeof index === 'number',

  /**
   * 面板展开时触发
   */
  expand: (index: number) => typeof index === 'number',
}

export type ISplitterEmits = typeof SplitterEmits
