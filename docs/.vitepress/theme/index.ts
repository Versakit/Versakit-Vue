import Theme from 'vitepress/theme'
import MyLayout from './Layout.vue'
import {
  AntDesignContainer,
  ElementPlusContainer,
  NaiveUIContainer,
} from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
// 引入样式
import 'virtual:group-icons.css'

// 引入组件库
import { Versakit } from '@versakit/vue'
import '@versakit/vue/style'

export default {
  ...Theme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component('demo-preview', AntDesignContainer)
    app.use(Versakit)
  },
}
