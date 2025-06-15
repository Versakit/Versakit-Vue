import { DefaultTheme } from 'vitepress'

export const getGuideSidebar = (): DefaultTheme.Sidebar => {
  return [
    {
      text: '指南',
      items: [
        { text: '基本介绍', link: '/guide/versakit/' },
        { text: '安装', link: '/guide/installation/' },
        { text: '快速开始', link: '/guide/quickstart/' },
        { text: '暗黑模式', link: '/guide/dark/' },
        { text: '更新日志', link: '/guide/log/' },
      ],
    },
    {
      text: '进阶',
      items: [
        { text: '主题', link: '/guide/theme/' },
        { text: '无障碍', link: '/guide/accessibility/' },
      ],
    },
  ]
}
