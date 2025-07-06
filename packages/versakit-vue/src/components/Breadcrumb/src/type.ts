export type BreadcrumbProps = {
  separator?: string
  separatorIcon?: string
  unstyled?: boolean
  pt?: BreadcrumbPT
}

export type BreadcrumbPT = {
  root?: string
  list?: string
  separator?: string
  item?: string
}

export type BreadcrumbItemProps = {
  href?: string
  disabled?: boolean
  active?: boolean
  unstyled?: boolean
  pt?: BreadcrumbItemPT
}

export type BreadcrumbItemPT = {
  root?: string
  link?: string
  content?: string
  separator?: string
}

export const BreadcrumbEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type IBreadcrumbEmits = typeof BreadcrumbEmits
