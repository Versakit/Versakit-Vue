export interface PinInputProps {
  length?: number
  size?: 'sm' | 'md' | 'lg'
  state: 'default' | 'error' | 'success'
  /**
   * 是否使用无样式模式
   * @default false
   */
  unstyled?: boolean
  /**
   * 传递模板样式
   */
  pt?: PinInputPT
}

/**
 * PinInput组件模板样式类型
 */
export type PinInputPT = {
  container?: string
  input?: string
}
