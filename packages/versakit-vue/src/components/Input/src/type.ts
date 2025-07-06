export type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'

export type InputSize = 'small' | 'default' | 'large'
export type InputStatus = 'error' | 'warning' | 'success'

export interface InputProps {
  /**
   * 输入框的值
   */
  modelValue?: string | number

  /**
   * 占位符
   */
  placeholder?: string

  /**
   * 输入框类型
   * @default 'text'
   */
  type?: InputType

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
  size?: InputSize

  /**
   * 前缀图标
   */
  prefixIcon?: string

  /**
   * 后缀图标
   */
  suffixIcon?: string

  /**
   * 是否显示清除按钮
   * @default false
   */
  clearable?: boolean

  /**
   * 最大长度
   */
  maxlength?: number

  /**
   * 是否显示输入字数统计
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
  status?: InputStatus

  /**
   * 是否使用无样式模式
   * @default false
   */
  unstyled?: boolean

  /**
   * 传递模板样式
   */
  pt?: InputPT
}

/**
 * Input组件模板样式类型
 */
export type InputPT = {
  root?: string
  wrapper?: string
  input?: string
  prefix?: string
  suffix?: string
  clear?: string
  count?: string
}
