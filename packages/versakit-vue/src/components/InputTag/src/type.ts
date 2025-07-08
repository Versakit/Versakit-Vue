export type InputTagSize = 'small' | 'default' | 'large'
export type InputTagStatus = 'error' | 'warning' | 'success'

export interface InputTagProps {
  /**
   * 标签值数组
   */
  modelValue?: string[]

  /**
   * 占位符
   */
  placeholder?: string

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean

  /**
   * 是否只读
   * @default false
   */
  readonly?: boolean

  /**
   * 输入框尺寸
   * @default 'default'
   */
  size?: InputTagSize

  /**
   * 前缀图标
   */
  prefixIcon?: string

  /**
   * 后缀图标
   */
  suffixIcon?: string

  /**
   * 是否可关闭标签
   * @default true
   */
  closable?: boolean

  /**
   * 最大标签数量
   */
  maxCount?: number

  /**
   * 是否显示数量统计
   * @default false
   */
  showCount?: boolean

  /**
   * 自动获取焦点
   * @default false
   */
  autofocus?: boolean

  /**
   * 输入框状态
   */
  status?: InputTagStatus

  /**
   * 是否使用无样式模式
   * @default false
   */
  unstyled?: boolean

  /**
   * 传递模板样式
   */
  pt?: InputTagPT
}

/**
 * InputTag组件模板样式类型
 */
export type InputTagPT = {
  root?: string
  wrapper?: string
  input?: string
  prefix?: string
  suffix?: string
  tag?: string
  tagClose?: string
  count?: string
}
