import type { DefaultTheme } from 'vitepress'

export const getNav = (): DefaultTheme.NavItem[] => {
  return [
    {
      text: '指南',
      link: '/guide/getting-started/introduction',
      activeMatch: '/guide/',
    },
    { text: '设计', link: '' },
    {
      text: '组件',
      link: '/components/overview/',
      activeMatch: '/components/',
    },
    { text: '博客', link: '/blog/', activeMatch: '/blog/' },
    {
      text: '生态',
      items: [{ text: 'Pilot', link: 'https://versakit.github.io/Pilot/' }],
    },
  ]
}
