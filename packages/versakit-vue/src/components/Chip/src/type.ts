export interface ChipProps {
  // 控制状态
  modelValue?: boolean
  disabled?: boolean

  // 行为
  selectable?: boolean
  closable?: boolean
  onClose?: () => void

  // 样式变体
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'dot'
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  // 内容
  avatar?: any
  startContent?: any
  endContent?: any
}
