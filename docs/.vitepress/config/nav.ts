import { DefaultTheme } from 'vitepress'

export const getNav = (): DefaultTheme.NavItem[] => {
  return [
    { text: '指南', link: '/guide/versakit/' },
    { text: '组件', link: '/components/tabs/' },
    { text: '博客', link: '/blog/' },
  ]
}
