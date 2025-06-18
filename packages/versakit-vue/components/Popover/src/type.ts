export interface PopoverProps {
  modelValue?: boolean
  placement?:
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'top-start'
    | 'top-end'
    | 'right-start'
    | 'right-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end'
  trigger?: 'click' | 'hover' | 'manual'
  title?: string
  width?: string | number
  zIndex?: number
  disabled?: boolean
  showArrow?: boolean
  offset?: number
  transition?: string
  teleport?: boolean | string
}
