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
   * 选择模式
   * @default 'single'
   */
  selectionMode?: 'single' | 'multiple'

  /**
   * 尺寸
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'

  /**
   * 颜色变体
   * @default 'default'
   */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'

  /**
   * 外观变体
   * @default 'flat'
   */
  variant?: 'flat' | 'bordered' | 'underlined'

  /**
   * 圆角大小
   * @default 'md'
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * 标签文本
   */
  label?: string

  /**
   * 标签位置
   * @default 'inside'
   */
  labelPlacement?: 'inside' | 'outside' | 'outside-left'

  /**
   * 描述文本
   */
  description?: string

  /**
   * 错误消息
   */
  errorMessage?: string

  /**
   * 是否无效
   * @default false
   */
  isInvalid?: boolean

  /**
   * 是否必填
   * @default false
   */
  isRequired?: boolean

  /**
   * 是否可清除
   * @default false
   */
  isClearable?: boolean

  /**
   * 是否可搜索
   * @default false
   */
  isFilterable?: boolean

  /**
   * 最大下拉框高度
   * @default 256
   */
  maxDropdownHeight?: number

  /**
   * 禁用的选项键值
   */
  disabledKeys?: string[]

  /**
   * 选择器图标
   */
  selectorIcon?: string

  /**
   * 禁用选择器图标旋转
   * @default false
   */
  disableSelectorIconRotation?: boolean

  /**
   * 左侧内容
   */
  startContent?: string

  /**
   * 右侧内容
   */
  endContent?: string

  /**
   * 是否显示滚动指示器
   * @default true
   */
  showScrollIndicators?: boolean

  /**
   * 无匹配选项时显示的文本
   * @default '无匹配数据'
   */
  noMatchText?: string

  /**
   * 自定义渲染选中值的函数
   */
  renderValue?: (selectedItems: SelectItem[]) => string
}

export interface SelectItem {
  /**
   * 选项键值
   */
  key: string

  /**
   * 选项标签
   */
  label: string

  /**
   * 选项描述
   */
  description?: string

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean

  /**
   * 左侧内容
   */
  startContent?: string

  /**
   * 右侧内容
   */
  endContent?: string
}

export interface SelectItemProps {
  /**
   * 选项键值
   */
  key: string

  /**
   * 选项标签
   */
  label?: string

  /**
   * 选项描述
   */
  description?: string

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean

  /**
   * 左侧内容
   */
  startContent?: string

  /**
   * 右侧内容
   */
  endContent?: string
}

export interface SelectSectionProps {
  /**
   * 分组标题
   */
  title?: string

  /**
   * 分组描述
   */
  description?: string
}
