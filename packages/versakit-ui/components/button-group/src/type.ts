import type { BtnVariant, BtnSize, BtnShape } from '../../button/src/type'

export type ButtonGroupDirection = 'horizontal' | 'vertical'

export type ButtonGroupSpacing = 'default' | 'compact' | 'none'

export interface ButtonGroupProps {
  /** 按钮组方向 */
  direction?: ButtonGroupDirection
  /** 按钮组间距 */
  spacing?: ButtonGroupSpacing
  /** 按钮样式变体（将应用于所有子按钮，除非按钮自身定义了变体） */
  variant?: BtnVariant
  /** 按钮尺寸（将应用于所有子按钮，除非按钮自身定义了尺寸） */
  size?: BtnSize
  /** 按钮形状（将应用于所有子按钮，除非按钮自身定义了形状） */
  shape?: BtnShape
  /** 是否禁用所有按钮 */
  disabled?: boolean
  /** 是否为无样式模式 */
  unstyled?: boolean
}

// PT (Pass Through) 类型定义
export type ButtonGroupPassThroughAttributes = {
  root?: Record<string, unknown>
}

export interface ButtonGroupSlots {
  default?: () => unknown
}
