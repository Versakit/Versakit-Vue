/**
 * Tooltip组件属性定义
 */
export interface TooltipProps {
  /**
   * 提示内容
   */
  content: string

  /**
   * 提示框位置
   * @default 'top'
   */
  placement?: 'top' | 'right' | 'bottom' | 'left'

  /**
   * 显示延迟时间(毫秒)
   * @default 0
   */
  openDelay?: number

  /**
   * 隐藏延迟时间(毫秒)
   * @default 100
   */
  closeDelay?: number

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean

  /**
   * 触发方式
   * @default 'hover'
   */
  trigger?: 'hover' | 'focus' | 'both'

  /**
   * 最大宽度
   */
  maxWidth?: string | number

  /**
   * 颜色主题
   * @default 'default'
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'

  /**
   * 是否显示箭头
   * @default true
   */
  arrow?: boolean

  /**
   * 提示框与触发元素的距离
   * @default 8
   */
  offset?: number
}
