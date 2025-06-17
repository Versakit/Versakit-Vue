import Theme from 'vitepress/theme'
import MyLayout from '../components/Layout.vue'
import './custom.css'
import 'virtual:group-icons.css'
import { Versakit } from '@versakit/vue'

export default {
  ...Theme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.use(Versakit)
  },
}
