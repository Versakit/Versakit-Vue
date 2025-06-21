export interface CheckboxProps {
  /**
   * 复选框状态值
   * @default false
   */
  modelValue?: boolean

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean

  /**
   * 复选框尺寸
   * @default 'default'
   */
  size?: 'small' | 'default' | 'large'

  /**
   * 复选框颜色
   * @default 'blue'
   */
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple'

  /**
   * 复选框的标签
   */
  label?: string
}
