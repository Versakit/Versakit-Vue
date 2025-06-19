import { DefaultTheme } from 'vitepress'

export const getNav = (): DefaultTheme.NavItem[] => {
  return [
    { text: '指南', link: '/guide/versakit/' },
    { text: '设计', link: '' },
    { text: '组件', link: '/components/overview/' },
    { text: '函数', link: '/composables/tabs/' },
    { text: '博客', link: '/blog/' },
    {
      text: '生态',
      items: [{ text: 'Pilot', link: 'https://versakit.github.io/Pilot/' }],
    },
  ]
}
