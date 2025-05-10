import type { SizeType } from '../../../utils/constant'

export interface PtProps {
  root?: string
  container?: string
  highlight?: string
  item?: string
}

export interface SegmentedProps {
  modelValue: string | number
  options?:
    | (
        | string
        | {
            label?: string
            value?: string | number
          }
      )[]
    | any
  size?: SizeType
  unstyled?: boolean
  pt?: PtProps
}
