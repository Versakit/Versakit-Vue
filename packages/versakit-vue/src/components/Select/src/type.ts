export interface SelectProps {
  /**
   * 选择器的值
   */
  modelValue?: string | number | Array<string | number>

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
   * 选择器尺寸
   * @default 'default'
   */
  size?: 'small' | 'default' | 'large'

  /**
   * 是否多选
   * @default false
   */
  multiple?: boolean

  /**
   * 选项列表
   */
  options?: SelectOption[]

  /**
   * 是否可清空
   * @default false
   */
  clearable?: boolean

  /**
   * 是否可搜索
   * @default false
   */
  filterable?: boolean

  /**
   * 没有匹配选项时显示的文字
   */
  noMatchText?: string

  /**
   * 选择器状态
   */
  status?: 'error' | 'warning' | 'success'
}

export interface SelectOption {
  /**
   * 选项标签
   */
  label: string

  /**
   * 选项值
   */
  value: string | number

  /**
   * 是否禁用
   */
  disabled?: boolean
}
