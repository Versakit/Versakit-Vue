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
export type DropdownSize = 'sm' | 'md' | 'lg'

export interface DropdownOption {
  /**
   * 选项值
   */
  value?: string | number

  /**
   * 选项标签
   */
  label?: string

  /**
   * 图标
   */
  icon?: string

  /**
   * 是否禁用
   */
  disabled?: boolean

  /**
   * 是否为分割线
   */
  divider?: boolean

  /**
   * 自定义数据
   */
  [key: string]: any
}

export type DropdownProps = {
  /**
   * 是否显示下拉菜单
   * @default false
   */
  visible?: boolean

  /**
   * 选项列表
   */
  options?: DropdownOption[]

  /**
   * 触发方式
   * @default 'click'
   */
  trigger?: DropdownTrigger

  /**
   * 下拉菜单位置
   * @default 'bottom'
   */
  placement?: DropdownPlacement

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean

  /**
   * 尺寸
   * @default 'md'
   */
  size?: DropdownSize

  /**
   * 是否有箭头
   * @default false
   */
  arrow?: boolean

  /**
   * 显示延迟，仅在trigger为hover时有效
   * @default 100
   */
  showDelay?: number

  /**
   * 隐藏延迟，仅在trigger为hover时有效
   * @default 100
   */
  hideDelay?: number

  /**
   * 是否点击外部关闭
   * @default true
   */
  closeOnClickOutside?: boolean

  /**
   * 是否点击菜单项后关闭
   * @default true
   */
  closeOnSelect?: boolean

  /**
   * 是否无样式
   * @default false
   */
  unstyled?: boolean

  /**
   * 自定义样式
   */
  pt?: DropdownPT
}

export type DropdownPT = {
  root?: string
  trigger?: string
  content?: string
  arrow?: string
  menu?: string
  menuItem?: string
  menuItemSelected?: string
  menuItemActive?: string
  menuItemDisabled?: string
  menuItemIcon?: string
  menuDivider?: string
}

export const DropdownEmits = {
  'update:visible': (visible: boolean) => typeof visible === 'boolean',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  select: (_value: string | number, _event: MouseEvent) => true,
  show: () => true,
  hide: () => true,
}

export type DropdownItemProps = {
  /**
   * 选项值
   */
  value?: string | number

  /**
   * 选项标签
   */
  label?: string

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean

  /**
   * 是否高亮
   * @default false
   */
  active?: boolean

  /**
   * 图标
   */
  icon?: string

  /**
   * 是否为分割线
   * @default false
   */
  divider?: boolean

  /**
   * 是否无样式
   * @default false
   */
  unstyled?: boolean

  /**
   * 自定义样式
   */
  pt?: DropdownItemPT
}

export type DropdownItemPT = {
  root?: string
  icon?: string
}

export const DropdownItemEmits = {
  click: (event: MouseEvent) => event instanceof MouseEvent,
}

export type DropdownDividerProps = {
  /**
   * 是否无样式
   * @default false
   */
  unstyled?: boolean

  /**
   * 自定义样式
   */
  pt?: {
    root?: string
  }
}
