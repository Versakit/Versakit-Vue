import type { DefaultTheme } from 'vitepress'
import {
  componentsMetadata,
  categoryLabels,
  categoryOrder,
  sortComponentsByAlphabet,
  componentToSidebarItem,
  type ComponentMetadata,
} from '../components'

/**
 * 生成组件侧边栏配置
 * @param filterStatus 可选的组件状态过滤（默认显示所有状态）
 */
export const getComponentsSidebar = (
  filterStatus?: ComponentMetadata['status'][],
): DefaultTheme.Sidebar => {
  // 过滤组件（如果指定了状态过滤）
  let filteredComponents = componentsMetadata
  if (filterStatus && filterStatus.length > 0) {
    filteredComponents = componentsMetadata.filter(
      (component) =>
        !component.status || filterStatus.includes(component.status),
    )
  }

  // 按分类对组件进行分组
  const componentsByCategory: Record<string, ComponentMetadata[]> = {}

  filteredComponents.forEach((component) => {
    const category = component.category
    if (!componentsByCategory[category]) {
      componentsByCategory[category] = []
    }
    componentsByCategory[category].push(component)
  })

  // 对每个分类内的组件按字母顺序排序
  Object.keys(componentsByCategory).forEach((category) => {
    componentsByCategory[category] = sortComponentsByAlphabet(
      componentsByCategory[category],
    )
  })

  // 构建侧边栏配置
  const sidebarItems: DefaultTheme.SidebarItem[] = [
    {
      text: 'Overview 组件总览',
      link: '/components/overview/',
    },
  ]

  // 按照指定顺序添加分类
  categoryOrder.forEach((category) => {
    if (
      componentsByCategory[category] &&
      componentsByCategory[category].length > 0
    ) {
      sidebarItems.push({
        text: categoryLabels[category],
        collapsed: false,
        items: componentsByCategory[category].map(componentToSidebarItem),
      })
    }
  })

  return sidebarItems
}
