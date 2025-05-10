export interface TabProps {
  modelValue?: string | number
  type?: 'line' | 'card'
  closable?: boolean
  addable?: boolean
  unstyled?: boolean
  pt?: TabPt
}

export interface TabPt {
  root?: string
  nav?: string
  navWrapper?: string
  tab?: string
  tabActive?: string
  tabClose?: string
  addButton?: string
  content?: string
  typeClass?: string
  activeClass?: string
  pt?: Record<string, string>
}

export interface TabItemProps {
  label: string
  name: string | number
  disabled?: boolean
  unstyled?: boolean
  pt?: TabItemPt
}

export interface TabItemPt {
  root?: string
}
