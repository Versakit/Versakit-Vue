export type ChipVariant =
  | 'solid'
  | 'bordered'
  | 'light'
  | 'flat'
  | 'faded'
  | 'shadow'
  | 'dot'

export type ChipColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'

export type ChipSize = 'sm' | 'md' | 'lg'
export type ChipRadius = 'none' | 'sm' | 'md' | 'lg' | 'full'

export interface ChipProps {
  // 控制状态
  modelValue?: boolean
  disabled?: boolean

  // 行为
  selectable?: boolean
  closable?: boolean
  onClose?: () => void

  // 样式变体
  variant?: ChipVariant
  color?: ChipColor
  size?: ChipSize
  radius?: ChipRadius

  // 内容
  avatar?: any
  startContent?: any
  endContent?: any

  // 自定义样式
  unstyled?: boolean
  pt?: ChipPT
}

export type ChipPT = {
  root?: string
  dot?: string
  avatar?: string
  startContent?: string
  content?: string
  endContent?: string
  closeButton?: string
}
