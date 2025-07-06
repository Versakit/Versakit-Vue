import Theme from 'vitepress/theme'
import MyLayout from '../components/Layout.vue'
import './custom.css'
import 'virtual:group-icons.css'
import { Versakit } from '@versakit/vue'
import '@versakit/vue/style'

// 引入组件
import Link from '../components/LinkComponent.vue'

export default {
  ...Theme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.use(Versakit)
    app.component('Link', Link)
  },
}
