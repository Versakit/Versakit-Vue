export interface DropdownPtProps {
  root?: string | Record<string, any>
  trigger?: string | Record<string, any>
  content?: string | Record<string, any>
}

export interface DropdownProps {
  placement?:
    | 'top'
    | 'top-right'
    | 'top-left'
    | 'bottom'
    | 'bottom-right'
    | 'bottom-left'
  unstyled?: boolean
  pt?: DropdownPtProps
}

export interface DropdownItemPtProps {
  root?: string | Record<string, any>
}

export interface DropdownItemProps {
  disabled?: boolean
  unstyled?: boolean
  pt?: DropdownItemPtProps
}
