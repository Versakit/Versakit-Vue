export interface SwitchProps {
  /**
   * 开关状态值
   * @default false
   */
  modelValue?: boolean

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean

  /**
   * 开关尺寸
   * @default 'default'
   */
  size?: 'small' | 'default' | 'large'

  /**
   * 开关颜色
   * @default 'blue'
   */
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple'

  /**
   * 是否使用无样式模式
   * @default false
   */
  unstyled?: boolean

  /**
   * 传递模板样式
   */
  pt?: SwitchPT
}

/**
 * Switch组件模板样式类型
 */
export type SwitchPT = {
  root?: string
  track?: string
  thumb?: string
  ripple?: string
}
