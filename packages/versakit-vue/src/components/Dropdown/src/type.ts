export type DropdownTrigger = 'click' | 'hover' | 'focus' | 'manual'
export type DropdownPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'

export type DropdownOption = {
  /**
   * 选项值
   */
  value: string | number | boolean | object
  /**
   * 选项标签
   */
  label: string
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 自定义图标
   */
  icon?: string
  /**
   * 是否是分割线
   */
  divider?: boolean
  /**
   * 子选项
   */
  children?: DropdownOption[]
}

export type DropdownItemProps = {
  /**
   * 选项值
   */
  value?: any
  /**
   * 选项标签
   */
  label?: string
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 自定义图标
   */
  icon?: string
  /**
   * 是否是分割线
   */
  divider?: boolean
}

export type DropdownProps = {
  /**
   * 选项数据
   */
  options?: DropdownOption[]

  /**
   * 触发方式
   * @default 'click'
   */
  trigger?: DropdownTrigger

  /**
   * 下拉菜单位置
   * @default 'bottom-start'
   */
  placement?: DropdownPlacement

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean

  /**
   * 是否显示
   */
  visible?: boolean

  /**
   * 最大宽度
   */
  maxWidth?: string | number

  /**
   * 最小宽度，默认为触发元素宽度
   */
  minWidth?: string | number

  /**
   * 显示箭头
   * @default false
   */
  arrow?: boolean

  /**
   * 是否使用无样式模式
   * @default false
   */
  unstyled?: boolean

  /**
   * 传递模板样式
   */
  pt?: DropdownPT
}

/**
 * Dropdown组件模板样式类型
 */
export type DropdownPT = {
  root?: string
  trigger?: string
  content?: string
  arrow?: string
  menu?: string
  menuItem?: string
  menuItemIcon?: string
  menuItemLabel?: string
  menuDivider?: string
}

export const DropdownEmits = {
  'update:visible': (visible: boolean) => typeof visible === 'boolean',
  select: (value: any) => value !== undefined,
}

export type DropdownEmitsType = typeof DropdownEmits

/**
 * 下拉菜单注入的上下文类型
 */
export type DropdownContext = {
  /**
   * 选项点击处理函数
   */
  onItemClick: (value: any) => void
  /**
   * 是否使用无样式模式
   */
  unstyled: boolean
  /**
   * 传递模板样式
   */
  pt: Record<string, string>
}
