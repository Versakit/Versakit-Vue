import Theme from 'vitepress/theme'
import MyLayout from '../components/Layout.vue'
import './custom.css'

export default {
  ...Theme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    // 注册全局组件
  },
}
