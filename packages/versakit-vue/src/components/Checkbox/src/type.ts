export type CheckboxSize = 'small' | 'default' | 'large'
export type CheckboxColor = 'blue' | 'green' | 'red' | 'yellow' | 'purple'

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
  size?: CheckboxSize

  /**
   * 复选框颜色
   * @default 'blue'
   */
  color?: CheckboxColor

  /**
   * 复选框的标签
   */
  label?: string

  /**
   * 是否使用无样式模式
   * @default false
   */
  unstyled?: boolean

  /**
   * 传递模板样式
   */
  pt?: CheckboxPT
}

export type CheckboxPT = {
  root?: string
  checkbox?: string
  icon?: string
  label?: string
}
