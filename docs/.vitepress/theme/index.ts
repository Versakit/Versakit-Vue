import Theme from 'vitepress/theme'
import MyLayout from '../components/Layout.vue'
import './custom.css'
import 'virtual:group-icons.css'

export default {
  ...Theme,
  Layout: MyLayout,
  enhanceApp({ app }) {},
}
