export interface RadioProps {
  /**
   * 单选框状态值
   */
  modelValue?: string | number | boolean

  /**
   * 单选框的值，用于和modelValue比较
   */
  value?: string | number | boolean

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean

  /**
   * 单选框尺寸
   * @default 'default'
   */
  size?: 'small' | 'default' | 'large'

  /**
   * 单选框颜色
   * @default 'blue'
   */
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'cyan' | 'pink'

  /**
   * 单选框的标签
   */
  label?: string

  /**
   * 单选框的name属性
   */
  name?: string

  /**
   * 标签位置
   * @default 'right'
   */
  labelPosition?: 'left' | 'right'

  /**
   * 是否自动获取焦点
   * @default false
   */
  autofocus?: boolean

  /**
   * 是否必填
   * @default false
   */
  required?: boolean

  /**
   * 自定义类名
   */
  className?: string
}

export interface RadioEmits {
  (evt: 'update:modelValue', value: string | number | boolean): void
  (evt: 'change', value: string | number | boolean): void
  (evt: 'focus', e: FocusEvent): void
  (evt: 'blur', e: FocusEvent): void
}
