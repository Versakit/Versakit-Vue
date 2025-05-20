import type { Ref, InjectionKey } from 'vue'
export type NameType = string | number

export interface CollapseProps {
  modelValue: NameType[]
  accordion?: boolean
  unstyled?: boolean
  pt?: CollapsePtProps
}

export interface CollapsePtProps {
  root?: string | Record<string, any>
}
export interface CollapseItemProps {
  name: NameType
  title?: string
  disabled?: boolean
  icon?: string
  unstyled?: boolean
  pt?: CollapseItemPtProps
}

export interface CollapseItemPtProps {
  root?: string | Record<string, any>
  header?: string | Record<string, any>
  wrapper?: string | Record<string, any>
  content?: string | Record<string, any>
}

export interface CollapseContext {
  activeNames: Ref<NameType[]>
  handleItemClick: (name: NameType) => void
}

export interface CollapseEmits {
  (e: 'update:modelValue', values: NameType[]): void
  (e: 'change', values: NameType[]): void
}
export const collapseContextKey: InjectionKey<CollapseContext> =
  Symbol('collapseContextKey')
