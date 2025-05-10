import type { Component } from 'vue'

export interface BreadcrumbPtProps {
  root?: string | Record<string, any>
}

export interface BreadcrumbProps {
  /*分隔符*/
  separator?: string
  /*图标分隔符的组件或组件名*/
  separatorIcon?: string | Component
  unstyled?: boolean
  pt?: BreadcrumbPtProps
}

export interface BreadcrumbItemPtProps {
  root?: string | Record<string, any>
  link?: string | Record<string, any>
  text?: string | Record<string, any>
  separator?: string | Record<string, any>
}

export interface BreadcrumbItemProps {
  to?: string
  replace?: boolean
  unstyled?: boolean
  pt?: BreadcrumbItemPtProps
}
