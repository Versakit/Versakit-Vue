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
}
