import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import { getNav } from './config/nav.ts'
import { getGuideSidebar } from './config/getGuideSidebar.ts'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Versakit-Vue/',
  title: 'VersaKit',
  description: 'VersaKit is a UI library for Vue 3',
  themeConfig: {
    nav: getNav(),
    sidebar: {
      '/guide/': getGuideSidebar(),
    } as any,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Versakit/Versakit-Vue' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/@versakit/vue' },
    ],
  },
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [tailwindcss() as any, groupIconVitePlugin()],
  },
})
