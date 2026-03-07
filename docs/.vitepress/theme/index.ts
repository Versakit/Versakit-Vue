import Theme from 'vitepress/theme'
import MyLayout from '../components/Layout.vue'
import './custom.css'
import 'virtual:group-icons.css'
import { Versakit } from '@versakit/vue'
import '@versakit/vue/style'
import type { App } from 'vue'

import StorybookLink from '../components/StorybookLink.vue'

export default {
  ...Theme,
  Layout: MyLayout,
  enhanceApp({ app }: { app: App }) {
    app.use(Versakit)
    app.component('Link', StorybookLink)
  },
}
