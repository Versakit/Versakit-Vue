export interface PopoverProps {
  /**
   * 控制弹出层的显示状态
   * @default false
   */
  modelValue?: boolean

  /**
   * 弹出层的位置
   * @default 'bottom'
   */
  placement?:
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'top-start'
    | 'top-end'
    | 'right-start'
    | 'right-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end'

  /**
   * 触发方式
   * @default 'click'
   */
  trigger?: 'click' | 'hover' | 'manual'

  /**
   * 标题内容
   */
  title?: string

  /**
   * 内容宽度
   */
  width?: string | number

  /**
   * 层级
   * @default 1000
   */
  zIndex?: number

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean

  /**
   * 是否显示箭头
   * @default true
   */
  showArrow?: boolean

  /**
   * 弹出层与触发元素的间距
   * @default 8
   */
  offset?: number

  /**
   * 过渡动画名称
   * @default 'fade'
   */
  transition?: string

  /**
   * Teleport目标，false表示不使用teleport
   * @default true
   */
  teleport?: boolean | string

  /**
   * 显示延迟时间(毫秒)，仅在hover触发时有效
   * @default 0
   */
  openDelay?: number

  /**
   * 隐藏延迟时间(毫秒)，仅在hover触发时有效
   * @default 0
   */
  closeDelay?: number

  /**
   * 是否跟随鼠标位置
   * @default false
   */
  followCursor?: boolean

  /**
   * 是否不与触发元素绑定，仅通过API控制显示
   * 当为true时，将不渲染触发元素包装器
   * @default false
   */
  unbound?: boolean

  /**
   * 内容
   */
  content?: string

  /**
   * 颜色主题
   * @default 'default'
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
}
