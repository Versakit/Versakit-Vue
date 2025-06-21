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
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search'

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
  size?: 'small' | 'default' | 'large'

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
  status?: 'error' | 'warning' | 'success'
}
