export type SwapVariant = 'fade' | 'flip' | 'rotate' | 'slide'
export type SwapSize = 'sm' | 'md' | 'lg'
export type SwapTrigger = 'hover' | 'click' | 'focus'

export type SwapProps = {
  /**
   * 是否激活交换状态
   */
  active?: boolean
  /**
   * 组件变体
   */
  variant?: SwapVariant
  /**
   * 组件大小
   */
  size?: SwapSize
  /**
   * 触发方式
   */
  trigger?: SwapTrigger
  /**
   * 禁用状态
   */
  disabled?: boolean
  /**
   * 无样式模式
   */
  unstyled?: boolean
  /**
   * 透传样式
   */
  pt?: SwapPT
}

export type SwapPT = {
  root?: string
  on?: string
  off?: string
}

export type SwapEmitsType = {
  change: (active: boolean) => void
  'update:active': (active: boolean) => void
}

export const SwapEmits = {
  change: (active: boolean) => typeof active === 'boolean',
  'update:active': (active: boolean) => typeof active === 'boolean',
}
