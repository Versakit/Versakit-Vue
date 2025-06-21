export interface RadioProps {
  /**
   * 单选框状态值
   */
  modelValue?: string | number | boolean

  /**
   * 单选框的值，用于和modelValue比较
   */
  value?: string | number | boolean

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean

  /**
   * 单选框尺寸
   * @default 'default'
   */
  size?: 'small' | 'default' | 'large'

  /**
   * 单选框颜色
   * @default 'blue'
   */
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple'

  /**
   * 单选框的标签
   */
  label?: string
}
