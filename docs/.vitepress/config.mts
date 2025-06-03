import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons'
import { getNav } from './config/nav'
import { getComponentsSidebar } from './config/getComponentsSidebar'
import { getGuideSidebar } from './config/getGuideSidebar'
import { getDesignSidebar } from './config/getDesignSidebar'
import { getHead } from './config/getHead'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Versakit/',
  title: 'Versakit',
  description: 'A VitePress Site',
  head: getHead(),
  themeConfig: {
    logo: '/image/logo.svg',
    search: {
      provider: 'algolia',
      options: {
        appId: '...',
        apiKey: '...',
        indexName: '...',
      },
    },
    nav: getNav(),
    sidebar: {
      '/guide/': getGuideSidebar(),
      '/design/': getDesignSidebar(),
      '/components/': getComponentsSidebar(),
    } as any,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lenran659/Versakit' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/@versakit/ui' },
    ],
  },
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin)
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [groupIconVitePlugin()],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    server: {
      host: '0.0.0.0',
      open: true,
      port: 3600,
    },
  },
})
