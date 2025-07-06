import { withInstall } from '@versakit/shared'
import BreadcrumbComponent from './src/breadcrumb.vue'
import BreadcrumbItemComponent from './src/breadcrumb-item.vue'

export const Breadcrumb = withInstall(BreadcrumbComponent, {
  BreadcrumbItem: BreadcrumbItemComponent,
})

export const BreadcrumbItem = Breadcrumb.BreadcrumbItem

export * from './src/type'
