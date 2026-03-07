import type { DefaultTheme } from 'vitepress'

export const getNav = (): DefaultTheme.NavItem[] => {
  return [
    {
      text: '指南',
      link: '/guide/getting-started/introduction',
      activeMatch: '/guide/',
    },
    {
      text: '组件',
      link: '/components/button/',
      activeMatch: '/components/',
    },
    { text: '博客', link: '/blog/', activeMatch: '/blog/' },
    {
      text: '生态',
      items: [
        { text: 'Pilot', link: 'https://versakit.github.io/Pilot/' },
        {
          text: 'Playground',
          link: 'https://versakit.github.io/Versakit-Vue/playground/',
        },
      ],
    },
  ]
}
