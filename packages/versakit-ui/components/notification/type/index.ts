import type { ComType } from '../../../utils/constant'
type positionType =
  | 'topRight'
  | 'topLeft'
  | 'bottomLeft'
  | 'bottomRight'
  | 'top-right'
  | 'top-left'
  | 'bottom-left'
  | 'bottom-right'

export interface NotifivationProps {
  id?: any
  type?: ComType
  icon?: string
  title?: string
  plain?: boolean
  content?: string
  offset?: number | string
  duration?: number
  position?: positionType
  destroy?: () => void
}
