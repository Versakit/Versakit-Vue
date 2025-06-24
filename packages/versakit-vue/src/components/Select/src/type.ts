import type { JSX } from 'vue/jsx-runtime'

export interface SelectProps {
  /**
   * 选择器的值
   */
  modelValue?: string | number | Array<string | number>

  /**
   * 选项列表
   * @default []
   */
  options?: SelectOption[]

  /**
   * 占位符
   * @default '请选择'
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
   * 是否多选
   * @default false
   */
  multiple?: boolean

  /**
   * 尺寸
   * @default 'default'
   */
  size?: 'small' | 'default' | 'large'

  /**
   * 状态
   */
  status?: 'default' | 'success' | 'warning' | 'error'

  /**
   * 是否可清除
   * @default false
   */
  clearable?: boolean

  /**
   * 是否可搜索
   * @default false
   */
  filterable?: boolean

  /**
   * 无匹配选项时显示的文本
   * @default '无匹配数据'
   */
  noMatchText?: string

  /**
   * 最大下拉框高度
   * @default 250
   */
  maxDropdownHeight?: number

  /**
   * 是否显示标签
   * @default false
   */
  showLabel?: boolean

  /**
   * 标签文本
   */
  label?: string

  /**
   * 是否必填
   * @default false
   */
  required?: boolean

  /**
   * 帮助文本
   */
  helpText?: string

  /**
   * 错误文本
   */
  errorText?: string

  /**
   * 自定义渲染选项的函数
   */
  renderOption?: (option: SelectOption) => string | JSX.Element

  /**
   * 自定义渲染选中值的函数
   */
  renderValue?: (option: SelectOption | SelectOption[]) => string | JSX.Element
}

export interface SelectOption {
  /**
   * 选项值
   */
  value: string | number

  /**
   * 选项标签
   */
  label: string

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean

  /**
   * 分组名称
   */
  group?: string

  /**
   * 自定义数据
   */
  [key: string]: any
}

export interface SelectEmits {
  'update:modelValue': [value: string | number | Array<string | number>]
  change: [value: string | number | Array<string | number>]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
  clear: []
  search: [value: string]
  'dropdown-visible-change': [visible: boolean]
  'option-select': [option: SelectOption]
}
